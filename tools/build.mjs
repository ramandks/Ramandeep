#!/usr/bin/env node
/**
 * Orbo Flow static site builder.
 * Renders every page to HTML at the repository root, plus sitemap.xml and robots.txt.
 * Zero dependencies — run with `node tools/build.mjs`.
 */
import { mkdir, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { page, ctaBand } from '../content/layout.mjs';
import { brand, solutions, industries, resourceTypes } from '../content/site.mjs';

import { home } from '../content/pages/home.mjs';
import { solutionsIndex, solutionPage } from '../content/pages/solutions.mjs';
import { industriesIndex, industryPage } from '../content/pages/industries.mjs';
import { resourcesIndex, resourcePage, aiTools } from '../content/pages/resources.mjs';
import { about, careers, partners, newsroom, contact } from '../content/pages/company.mjs';
import { bookDemo, privacy, terms, security, sitemapPage, notFound } from '../content/pages/misc.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/* Pages that should not get the shared closing CTA band. */
const noCta = new Set(['/book-a-demo/', '/legal/privacy/', '/legal/terms/', '/legal/security/', '/404.html', '/company/contact/']);

const allPages = [
  home,
  solutionsIndex,
  ...solutions.map(solutionPage),
  industriesIndex,
  ...industries.map(industryPage),
  resourcesIndex,
  ...resourceTypes.map(resourcePage),
  aiTools,
  about, careers, partners, newsroom, contact,
  bookDemo, privacy, terms, security, sitemapPage, notFound,
];

function outPathFor(urlPath) {
  if (urlPath === '/') return join(root, 'index.html');
  if (urlPath.endsWith('.html')) return join(root, urlPath.replace(/^\//, ''));
  return join(root, urlPath.replace(/^\//, ''), 'index.html');
}

const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0%" stop-color="#FF3D9A"/><stop offset="52%" stop-color="#8B3FE8"/><stop offset="100%" stop-color="#2E7CF6"/>
  </linearGradient></defs>
  <circle cx="20" cy="20" r="15.5" fill="none" stroke="url(#g)" stroke-width="4.5"/>
  <circle cx="30.6" cy="11.5" r="4" fill="#FF3D9A"/>
</svg>`;

function sitemapXml(pages) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((p) => !p.path.endsWith('.html'))
    .map((p) => {
      const priority = p.path === '/' ? '1.0' : p.path.split('/').filter(Boolean).length === 1 ? '0.8' : '0.6';
      return `  <url>\n    <loc>${brand.url}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.path === '/' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function write(file, contents) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, contents, 'utf8');
}

/* Remove previously generated directories so renamed pages do not linger. */
async function clean() {
  const generated = ['solutions', 'industries', 'resources', 'company', 'legal', 'ai-tools', 'book-a-demo', 'sitemap'];
  for (const dir of generated) {
    const target = join(root, dir);
    if (existsSync(target)) await rm(target, { recursive: true, force: true });
  }
}

async function main() {
  await clean();

  let count = 0;
  for (const p of allPages) {
    const body = noCta.has(p.path) ? p.body : `${p.body}\n${ctaBand()}`;
    const html = page({ ...p, body });
    await write(outPathFor(p.path), html);
    count++;
  }

  await write(join(root, 'assets/img/favicon.svg'), favicon);
  await write(join(root, 'sitemap.xml'), sitemapXml(allPages));
  await write(join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${brand.url}/sitemap.xml\n`);
  /* Prevents GitHub Pages from running Jekyll over the output. */
  await write(join(root, '.nojekyll'), '');

  console.log(`Built ${count} pages + sitemap.xml, robots.txt, favicon.svg`);
}

main().catch((err) => { console.error(err); process.exit(1); });
