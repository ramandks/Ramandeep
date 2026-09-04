#!/usr/bin/env node
/**
 * Portability test: browse the built site over file:// with no server at all,
 * following links across directory levels. This is what proves the output can
 * be opened from disk, zipped, or hosted from a subfolder.
 * Requires `npm install` (playwright). Exits non-zero on failure.
 */
import { chromium } from 'playwright';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const B = `file://${root}`;

/* Chromium ships with some containers; fall back to Playwright's own download. */
const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(
  executablePath ? { executablePath, args: ['--no-sandbox'] } : { args: ['--no-sandbox'] },
);
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.route('**/*', r => /^file:/.test(r.request().url()) ? r.continue() : r.abort());
const out = [];
const ok = (n, c) => out.push(`${c ? 'PASS' : 'FAIL'}  ${n}`);

await page.goto(`${B}/index.html`, { waitUntil: 'load' });
ok('home loads over file://', (await page.title()).includes('Orbo Flow'));
ok('stylesheet applied (brand gradient button styled)',
  await page.evaluate(() => getComputedStyle(document.querySelector('.btn-primary')).backgroundImage.includes('gradient')));
ok('javascript ran (year injected)',
  await page.evaluate(() => /^20\d\d$/.test(document.querySelector('[data-year]').textContent)));
ok('inline SVG globe rendered',
  await page.evaluate(() => document.querySelector('.globe-wrap svg').getBoundingClientRect().width > 100));

// Follow a nav link two levels deep, then come back up via the footer.
await page.click('.sol-card[href$="solutions/ai-agents/index.html"]');
await page.waitForLoadState('load');
ok(`navigated to a depth-2 page (${new URL(page.url()).pathname.split('/').slice(-3).join('/')})`,
  page.url().endsWith('/solutions/ai-agents/index.html'));
ok('depth-2 stylesheet resolved',
  await page.evaluate(() => getComputedStyle(document.querySelector('.btn-primary')).backgroundImage.includes('gradient')));
ok('depth-2 script resolved (FAQ interactive)', await page.evaluate(() => {
  const b = document.querySelector('.faq-q'); b.click();
  return document.querySelector('.faq-a').classList.contains('is-open');
}));

// Cross-tree link: solutions -> industries
await page.click('.card[href$="industries/real-estate/index.html"]');
await page.waitForLoadState('load');
ok('cross-tree link works (industries/real-estate)', page.url().endsWith('/industries/real-estate/index.html'));

// Back to home via the logo
await page.click('.site-header .logo');
await page.waitForLoadState('load');
ok('logo returns to home', page.url().endsWith('/index.html') && !page.url().includes('industries'));

// A legal page and the 404
await page.goto(`${B}/legal/privacy/index.html`, { waitUntil: 'load' });
ok('legal page loads with styles',
  await page.evaluate(() => getComputedStyle(document.querySelector('.prose')).maxWidth !== 'none'));
await page.goto(`${B}/404.html`, { waitUntil: 'load' });
ok('404 page loads with styles',
  await page.evaluate(() => getComputedStyle(document.querySelector('.btn-primary')).backgroundImage.includes('gradient')));
ok('404 links back to home', await page.evaluate(() => !!document.querySelector('a[href="./index.html"]')));

console.log(out.join('\n'));
const failed = out.filter(r => r.startsWith('FAIL')).length;
console.log(`\n${out.length - failed} passing, ${failed} failing`);
await browser.close();
process.exit(failed ? 1 : 0);
