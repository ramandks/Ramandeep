#!/usr/bin/env node
/**
 * Post-build check: every internal href/src resolves to a real file, and each
 * page has a title, a description, exactly one h1 and no unrendered templates.
 * Exits non-zero on failure so it can gate CI.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

async function walk(dir, out = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules') continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const exists = async (p) => { try { await stat(p); return true; } catch { return false; } };

const files = await walk(root);
const broken = [];
const issues = [];
let hrefCount = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  const rel = file.replace(root, '');

  /* structural sanity */
  if (!/<title>[^<]{5,}<\/title>/.test(html)) issues.push(`${rel}: missing/short <title>`);
  if (!/<meta name="description" content="[^"]{40,}"/.test(html)) issues.push(`${rel}: missing/short description`);
  if ((html.match(/<h1[ >]/g) || []).length !== 1) issues.push(`${rel}: h1 count = ${(html.match(/<h1[ >]/g) || []).length}`);
  if (html.includes('undefined')) issues.push(`${rel}: contains literal "undefined"`);
  if (html.includes('[object Object]')) issues.push(`${rel}: contains "[object Object]"`);
  if (/\$\{/.test(html)) issues.push(`${rel}: unrendered template literal`);

  /* Link resolution. Paths are relative, so resolve them from this file's
     own directory — exactly as a browser does, including over file://. */
  const here = dirname(file);
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|tel:|#|data:)/.test(url)) continue;
    if (url.startsWith('/')) { broken.push(`${rel} -> ${url} (root-absolute, not portable)`); continue; }
    hrefCount++;
    const clean = url.split('#')[0];
    if (!clean) continue;
    const target = clean.endsWith('/') ? resolve(here, clean, 'index.html') : resolve(here, clean);
    if (!target.startsWith(root)) { broken.push(`${rel} -> ${url} (escapes site root)`); continue; }
    if (!(await exists(target))) broken.push(`${rel} -> ${url}`);
  }
}

console.log(`Pages checked: ${files.length}`);
console.log(`Internal links and assets checked: ${hrefCount}`);
console.log(`\nBroken links (${broken.length}):`);
console.log(broken.length ? [...new Set(broken)].map((b) => `  ${b}`).join('\n') : '  none');
console.log(`\nPage issues (${issues.length}):`);
console.log(issues.length ? [...new Set(issues)].map((i) => `  ${i}`).join('\n') : '  none');

if (broken.length || issues.length) process.exit(1);
