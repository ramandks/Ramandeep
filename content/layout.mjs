import { icon } from './icons.mjs';
import { brand, nav, footerCols } from './site.mjs';

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------------- Logo ---------------- */
export const logoMark = `<svg viewBox="0 0 40 40" aria-hidden="true">
  <defs>
    <linearGradient id="ofg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FF3D9A"/><stop offset="52%" stop-color="#8B3FE8"/><stop offset="100%" stop-color="#2E7CF6"/>
    </linearGradient>
  </defs>
  <circle cx="20" cy="20" r="15.5" fill="none" stroke="url(#ofg)" stroke-width="4"/>
  <ellipse cx="20" cy="20" rx="15.5" ry="6.6" fill="none" stroke="url(#ofg)" stroke-width="2.1" opacity=".55" transform="rotate(-28 20 20)"/>
  <circle cx="30.6" cy="11.5" r="3.5" fill="#FF3D9A"/>
</svg>`;

export const logo = (cls = 'logo') =>
  `<a class="${cls}" href="/" aria-label="${esc(brand.name)} home">${logoMark}<span>${esc(brand.name)}</span></a>`;

/* ---------------- Header ---------------- */
function megaPanel(group) {
  const cols = group.items.length > 6 ? 'mega-grid' : 'mega-grid';
  const items = group.items.map((it) => `
        <a class="mega-item" href="${it.href}">
          <span class="mega-ico">${icon(it.icon)}</span>
          <span><b>${esc(it.title)}</b><span>${esc(it.desc || '')}</span></span>
        </a>`).join('');
  const foot = group.footer ? `
      <div class="mega-foot">
        <p>${esc(group.footer.text)}</p>
        <a class="link-arrow" href="${group.footer.cta.href}">${esc(group.footer.cta.label)} ${icon('arrow')}</a>
      </div>` : '';
  return `
    <div class="mega" id="${group.id}" data-open="false" role="region" aria-label="${esc(group.label)} menu">
      <div class="${cols}">${items}</div>${foot}
    </div>`;
}

function navItem(group, current) {
  const active = current && current.startsWith(group.href || '###') ? ' is-active' : '';
  if (!group.items) {
    return `<li><a class="nav-link${active}" href="${group.href}">${esc(group.label)}</a></li>`;
  }
  return `<li>
        <button class="nav-link${active}" type="button" data-mega-trigger aria-expanded="false" aria-controls="${group.id}" aria-haspopup="true">${esc(group.label)} <span class="chev">${icon('chevron')}</span></button>
        ${megaPanel(group)}
      </li>`;
}

function mobileNav() {
  const groups = nav.map((g) => {
    if (!g.items) return `<a class="m-link" href="${g.href}">${esc(g.label)}</a>`;
    const links = g.items.map((i) => `<a href="${i.href}">${esc(i.title)}</a>`).join('');
    const all = g.href ? `<a href="${g.href}"><b>View all ${esc(g.label.toLowerCase())} →</b></a>` : '';
    return `<div class="m-group">
        <button class="m-toggle" type="button" aria-expanded="false">${esc(g.label)} <span class="chev">${icon('chevron')}</span></button>
        <div class="m-panel">${links}${all}</div>
      </div>`;
  }).join('');
  return `<div class="mobile-nav" id="mobile-nav">
      ${groups}
      <a class="btn btn-primary" href="/book-a-demo/">Book a Demo</a>
    </div>`;
}

export function header(current) {
  return `<header class="site-header">
    <div class="wrap wrap-wide">
      <nav class="nav" aria-label="Main">
        ${logo()}
        <ul class="nav-menu">${nav.map((g) => navItem(g, current)).join('')}</ul>
        <div class="nav-actions">
          <button class="globe-btn" type="button" aria-label="Change region and language" title="Region &amp; language">${icon('globe')}</button>
          <a class="btn btn-primary btn-sm btn-demo" href="/book-a-demo/">Book a Demo</a>
          <button class="burger" type="button" aria-expanded="false" aria-controls="mobile-nav" aria-label="Open menu"><span></span></button>
        </div>
      </nav>
    </div>
    ${mobileNav()}
  </header>`;
}

/* ---------------- Footer ---------------- */
export function footer() {
  const cols = footerCols.map((c) => `
        <div class="foot-col">
          <h4>${esc(c.title)}</h4>
          <ul>${c.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join('')}</ul>
        </div>`).join('');

  return `<footer class="site-footer">
    <div class="wrap wrap-wide">
      <div class="foot-grid">
        <div class="foot-brand">
          ${logo()}
          <p>${esc(brand.blurb)}</p>
          <div class="socials">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" rel="noopener">${icon('linkedin')}</a>
            <a href="https://x.com/" aria-label="X" rel="noopener">${icon('x')}</a>
            <a href="https://www.youtube.com/" aria-label="YouTube" rel="noopener">${icon('youtube')}</a>
            <a href="https://www.instagram.com/" aria-label="Instagram" rel="noopener">${icon('instagram')}</a>
          </div>
        </div>
        ${cols}
      </div>

      <div class="foot-grid" style="margin-top:38px;grid-template-columns:1fr;">
        <div class="foot-contact" style="grid-template-columns:repeat(3,minmax(0,1fr));display:grid;gap:18px;">
          <div>${icon('globe')}<span><b>Global Headquarters</b>${esc(brand.hq)}</span></div>
          <div>${icon('mail')}<span><b>Email</b><a href="mailto:${esc(brand.email)}">${esc(brand.email)}</a></span></div>
          <div>${icon('phone')}<span><b>Phone</b><a href="tel:+6480067263569">${esc(brand.phone)}</a></span></div>
        </div>
      </div>

      <div class="foot-bottom">
        <p style="margin:0;">© <span data-year>2026</span> ${esc(brand.name)}. All rights reserved.</p>
        <nav aria-label="Legal">
          <a href="/legal/privacy/">Privacy Policy</a>
          <a href="/legal/terms/">Terms of Service</a>
          <a href="/legal/security/">Security</a>
          <a href="/sitemap/">Sitemap</a>
        </nav>
      </div>
    </div>
  </footer>`;
}

/* ---------------- Page shell ---------------- */
export function page({ title, description, path = '/', body, bodyClass = '' }) {
  const full = `${title} | ${brand.name}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(full)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${brand.url}${path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(brand.name)}">
<meta property="og:title" content="${esc(full)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${brand.url}${path}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#7C3AED">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="/assets/css/styles.css">
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org', '@type': 'Organization',
  name: brand.name, url: brand.url, email: brand.email,
  description: brand.tagline,
  address: { '@type': 'PostalAddress', addressCountry: 'NZ' },
})}</script>
</head>
<body class="${bodyClass}">
<a class="skip" href="#main">Skip to content</a>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>`;
}

/* ---------------- Reusable blocks ---------------- */
export const secHead = ({ eyebrow, title, lead, link, center = false }) => `
  <div class="sec-head ${center ? 'center' : ''} ${link ? 'sec-head-row' : ''} reveal">
    <div>
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
      <h2 class="h2">${title}</h2>
      ${lead ? `<p class="lead mb-0">${esc(lead)}</p>` : ''}
    </div>
    ${link ? `<a class="link-arrow" href="${link.href}">${esc(link.label)} ${icon('arrow')}</a>` : ''}
  </div>`;

export const ctaBand = (opts = {}) => `
  <section class="section">
    <div class="wrap">
      <div class="cta-band reveal">
        <h2>${opts.title || 'Ready to put AI to work in your business?'}</h2>
        <p>${opts.text || 'Book a 30-minute discovery call. We will map your highest-value automation opportunities and show you exactly what a first deployment looks like.'}</p>
        <div class="btn-row center">
          <a class="btn btn-primary btn-lg" href="/book-a-demo/">Book a Demo ${icon('arrow')}</a>
          <a class="btn btn-ghost btn-lg" href="/solutions/">Explore Solutions</a>
        </div>
      </div>
    </div>
  </section>`;

export const pageHero = ({ eyebrow, title, lead, crumbs = [], actions = true }) => `
  <section class="page-hero">
    <div class="wrap">
      ${crumbs.length ? `<nav class="breadcrumb" aria-label="Breadcrumb">
        <a href="/">Home</a>${crumbs.map((c) => `<span>/</span>${c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : `<span style="opacity:1;color:var(--muted)">${esc(c.label)}</span>`}`).join('')}
      </nav>` : ''}
      ${eyebrow ? `<span class="eyebrow">${eyebrow}</span>` : ''}
      <h1>${title}</h1>
      <p class="lead">${esc(lead)}</p>
      ${actions ? `<div class="btn-row" style="margin-top:26px">
        <a class="btn btn-primary" href="/book-a-demo/">Book a Demo ${icon('arrow')}</a>
        <a class="btn btn-ghost" href="/solutions/">See our solutions</a>
      </div>` : ''}
    </div>
  </section>`;

export const faqBlock = (items, heading = 'Frequently asked questions') => `
  <section class="section section-soft">
    <div class="wrap wrap-narrow">
      ${secHead({ title: heading, center: true })}
      <div class="faq reveal">
        ${items.map((f, i) => `
          <div class="faq-item">
            <button class="faq-q" type="button" aria-expanded="false" aria-controls="faq-${i}">${esc(f.q)}<span class="pm">${icon('plus')}</span></button>
            <div class="faq-a" id="faq-${i}"><p>${f.a}</p></div>
          </div>`).join('')}
      </div>
    </div>
  </section>`;

export const cards = (items, cols = 'g-3') => `
  <div class="grid ${cols}">
    ${items.map((c) => `
      <${c.href ? 'a' : 'div'} class="card reveal"${c.href ? ` href="${c.href}"` : ''}>
        <span class="ci-box">${icon(c.icon || 'sparkle')}</span>
        <h3>${esc(c.title)}</h3>
        <p>${esc(c.desc)}</p>
        ${c.list ? `<ul>${c.list.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
      </${c.href ? 'a' : 'div'}>`).join('')}
  </div>`;

export const checkList = (items, green = false) =>
  `<ul class="check-list${green ? ' green' : ''}">${items.map((i) => `<li>${icon(green ? 'checkTick' : 'check')}<span>${esc(i)}</span></li>`).join('')}</ul>`;
