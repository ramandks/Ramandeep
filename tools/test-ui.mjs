#!/usr/bin/env node
/**
 * UI behaviour tests: navigation, accordions, counters, form validation and
 * responsive overflow, driven against the built site with a real browser.
 * Requires `npm install` (playwright). Exits non-zero on failure.
 */
import { chromium } from 'playwright';
import { startServer } from './server.mjs';

const PORT = 4175;
const base = `http://localhost:${PORT}`;
const server = await startServer(PORT);

/* Chromium ships with the container; fall back to Playwright's own download. */
const executablePath = process.env.CHROMIUM_PATH || undefined;
const browser = await chromium.launch(executablePath ? { executablePath, args: ['--no-sandbox'] } : { args: ['--no-sandbox'] });

const results=[]; const ok=(n,c)=>results.push(`${c?'PASS':'FAIL'}  ${n}`);
// The sandbox cannot reach the font CDN; abort external requests so loads settle.
const noExternal = async (pg) => pg.route('**/*', r =>
  new URL(r.request().url()).hostname === 'localhost' ? r.continue() : r.abort());

// --- desktop: mega menu ---
let page=await browser.newPage({viewport:{width:1440,height:900}});
await page.goto(base + '/', { waitUntil: 'load' });
await page.click('button[aria-controls="nav-solutions"]');
await page.waitForTimeout(300);
ok('mega menu opens on click', await page.isVisible('#nav-solutions .mega-item'));
ok('mega menu marked expanded', await page.getAttribute('button[aria-controls="nav-solutions"]','aria-expanded')==='true');
await page.keyboard.press('Escape'); await page.waitForTimeout(300);
ok('Escape closes mega menu', await page.getAttribute('button[aria-controls="nav-solutions"]','aria-expanded')==='false');
await page.hover('button[aria-controls="nav-industries"]'); await page.waitForTimeout(300);
ok('mega menu opens on hover', await page.isVisible('#nav-industries .mega-item'));
await page.click('button[aria-controls="nav-industries"]'); await page.waitForTimeout(300);
ok('menu stays open when clicked after hover', await page.isVisible('#nav-industries .mega-item'));
const megaLink = await page.getAttribute('#nav-industries .mega-item','href');
ok(`mega item links out (${megaLink})`, !!megaLink && megaLink.startsWith('/industries/'));

// --- sticky header ---
await page.evaluate(()=>window.scrollTo(0,400)); await page.waitForTimeout(250);
ok('header gains stuck state on scroll', await page.evaluate(()=>document.querySelector('.site-header').classList.contains('is-stuck')));

// --- counters ---
await page.evaluate(()=>window.scrollTo(0,0)); await page.waitForTimeout(1600);
const tasks=await page.textContent('[data-count="50"]');
ok(`counter animated (50M+ -> "${tasks}")`, tasks.trim()==='50M+');
const hours=await page.textContent('[data-count="1"]');
ok(`small counter left static ("${hours}")`, hours.trim()==='1M+');
await page.close();

// --- FAQ ---
page=await browser.newPage({viewport:{width:1440,height:900}});
await page.goto(base + '/solutions/ai-agents/', { waitUntil: 'load' });
ok('FAQ answer hidden initially', !(await page.isVisible('#faq-0')));
await page.click('.faq-q'); await page.waitForTimeout(250);
ok('FAQ opens on click', await page.isVisible('#faq-0'));
await page.click('.faq-q'); await page.waitForTimeout(250);
ok('FAQ closes on second click', !(await page.isVisible('#faq-0')));
await page.close();

// --- form validation ---
page=await browser.newPage({viewport:{width:1440,height:1200}});
await page.goto(base + '/book-a-demo/', { waitUntil: 'load' });
await page.click('form[data-validate] button[type=submit]'); await page.waitForTimeout(250);
ok('empty submit flags errors', (await page.$$('.field.err')).length>0);
ok('empty submit shows no success', !(await page.isVisible('.form-success')));
await page.fill('#d-email','not-an-email'); await page.click('#d-first'); await page.waitForTimeout(200);
ok('invalid email rejected', await page.evaluate(()=>document.querySelector('#d-email').closest('.field').classList.contains('err')));
for (const [sel,v] of [['#d-first','Ana'],['#d-last','Ruiz'],['#d-email','ana@example.com'],['#d-company','Acme'],['#d-msg','Our after-hours calls go unanswered.']]) await page.fill(sel,v);
await page.click('form[data-validate] button[type=submit]'); await page.waitForTimeout(400);
ok('valid submit shows success', await page.isVisible('.form-success'));
ok('valid submit clears errors', (await page.$$('.field.err')).length===0);
await page.close();

// --- mobile nav ---
page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
await noExternal(page);
await page.goto(base + '/', { waitUntil: 'load' });
ok('mobile nav closed initially', !(await page.isVisible('#mobile-nav')));
await page.click('.burger'); await page.waitForTimeout(300);
ok('burger opens mobile nav', await page.isVisible('#mobile-nav'));
await page.click('.m-toggle'); await page.waitForTimeout(300);
ok('mobile accordion expands', await page.isVisible('.m-panel a'));
ok('no horizontal overflow on mobile',
   await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth+1));
await page.close();

// --- no horizontal overflow at key widths across pages ---
for (const w of [1440,1024,768,390]) {
  for (const url of ['/','/industries/','/solutions/ai-agents/','/company/about/','/resources/blog/']) {
    const p2=await browser.newPage({viewport:{width:w,height:900}});
    await noExternal(p2);
    await p2.goto(base+url,{waitUntil:'load'});
    const over=await p2.evaluate(()=>document.documentElement.scrollWidth-window.innerWidth);
    if (over>1) results.push(`FAIL  overflow ${over}px at ${w}px on ${url}`);
    await p2.close();
  }
}
results.push('PASS  no horizontal overflow at 1440/1024/768/390 across 5 pages');

console.log(results.join('\n'));
const failed = results.filter((r) => r.startsWith('FAIL')).length;
console.log(`\n${results.length - failed} passing, ${failed} failing`);

await browser.close();
server.close();
process.exit(failed ? 1 : 0);
