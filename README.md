# Orbo Flow — Website

Marketing website for **Orbo Flow**: *AI Agents. Intelligent Automation. Built to Scale. Anywhere.*

Built from the supplied homepage design and extended into a complete **52-page** site.
Plain HTML, CSS and JavaScript with **no runtime dependencies and no build step at deploy
time**.

**Every path is relative**, so the site works three ways with no changes:

- **Open it from disk** — double-click `index.html` and browse the whole site offline
- **Any static host** — GitHub Pages, Netlify, Cloudflare Pages, S3, cPanel, FTP
- **A subfolder** — `example.com/site/` works exactly like a domain root

The only external request on any page is the Google Fonts stylesheet, and the site
renders correctly without it.

---

## Quick start

To just **view the site**, open `index.html` in a browser. Nothing to install.

To work on it:

```bash
npm run build     # regenerate all HTML into the repo root
npm run serve     # preview at http://localhost:4173
npm run check     # build + verify every internal link and page
npm test          # the above, plus browser tests (needs `npm install`)
```

`build`, `serve` and `check` need only Node — nothing is installed for them.
`npm test` additionally runs Playwright, the sole devDependency.

---

## How it works

HTML is **generated** from small template modules, then committed, so the repository is
both maintainable and directly hostable. Edit content in `content/`, run `npm run build`,
and commit the regenerated HTML.

```
content/
  site.mjs            brand, navigation, industries, solutions, footer — the data model
  layout.mjs          page shell, header, footer, and shared blocks (cards, FAQ, CTA…)
  icons.mjs           70 inline SVG icons (no icon font, no network request)
  art.mjs             SVG artwork: hero globe, dotted world map, illustrated scenes
  pages/              one module per page family
tools/
  build.mjs           renders every page + sitemap.xml, robots.txt, favicon
  check-links.mjs     verifies all internal links and per-page HTML structure
  test-ui.mjs         browser tests for nav, accordions, forms, responsiveness
  test-offline.mjs    browses the output over file:// to prove it is portable
  server.mjs          static preview server
assets/
  css/styles.css      the design system — tokens, components, responsive rules
  js/main.js          progressive-enhancement interactions
```

`tools/build.mjs` clears and regenerates the `solutions/`, `industries/`, `resources/`,
`company/`, `legal/`, `ai-tools/`, `book-a-demo/` and `sitemap/` directories on each run,
so renamed pages never linger. It also rewrites every internal path relative to the page
that contains it, which is what makes the output portable.

Prefer to hand-edit the HTML instead? That works too — the files are self-contained. Just
be aware that `npm run build` would overwrite those edits, so if you go that route you can
delete `content/`, `tools/` and `package.json` and keep only the HTML, CSS, JS and SVG.

---

## What's in the site

| Section | Pages |
| --- | --- |
| Home | Full build of the supplied design |
| Solutions | Index + 6 detail pages (AI Agents, AI Automation, Voice AI, Data & Analytics, AI Consulting, Integrations) |
| Industries | Index + 23 industry pages |
| Resources | Index + Blog, Guides, Webinars, Case Studies, Templates, Use Cases, Glossary |
| Company | About, Careers, Partners, Newsroom, Contact |
| Conversion | Book a Demo |
| Legal | Privacy Policy, Terms of Service, Security |
| Utility | Sitemap page, 404, `sitemap.xml`, `robots.txt` |

Every solution and industry page carries its own capabilities, delivery process, FAQs and
cross-links — written as real copy, not lorem ipsum.

---

## Design system

Tokens live at the top of `assets/css/styles.css`.

- **Brand gradient** `#FF3D9A → #A03BE0 → #2E7CF6`, used for headline accents, primary
  buttons and the logo mark
- **Type** Plus Jakarta Sans (Google Fonts) with a full system-font fallback stack
- **Surfaces** white cards on `#F8F9FD` / lavender washes, 14–28px radii, layered soft shadows
- **Breakpoints** 1080px (nav collapses), 900px, 860px, 640px, 560px

All imagery is inline SVG that ships with the page — the only external request is the
font stylesheet, and the site renders correctly without it.

---

## Accessibility & SEO

- Skip link, landmark elements, and visible focus rings throughout
- Menus and accordions expose `aria-expanded` / `aria-controls`; Escape closes menus
- Exactly one `<h1>` per page; unique title and meta description on all 52 pages
- Canonical URLs, Open Graph and Twitter tags, Organization JSON-LD
- `prefers-reduced-motion` disables the globe rotation, floating chips and scroll reveals
- Verified: 6,399 internal links resolve, no horizontal overflow at 1440/1024/768/390px

---

## Before going live

1. **Set the domain.** `brand.url` in `content/site.mjs` feeds canonical tags and
   `sitemap.xml`. Rebuild after changing it.
2. **Wire up the forms.** The Contact and Book a Demo forms validate in the browser and
   then show a success state — they do not transmit anything. Point them at your CRM,
   form endpoint or scheduling tool.
3. **Swap in photography** if you want it. `content/art.mjs` holds the illustrated scenes
   used for *Who We Help* and *Built in New Zealand*; replace those SVGs with `<img>` tags
   and the surrounding layout will hold.
4. **Replace placeholder details** — the phone number, social links and partner logos are
   representative and should be checked against the real brand assets.
5. **Add analytics** if required; none is included.

## Deploying

The repository root *is* the site — the HTML is committed, so there is no deploy-time
build.

- **Static host / CDN** — point it at the repository root. `.nojekyll` is committed so
  GitHub Pages serves the files as-is.
- **cPanel, FTP, shared hosting** — upload everything except `content/`, `tools/`,
  `node_modules/`, `package.json` and `package-lock.json`. Those are only for regenerating
  the HTML; the site does not need them.
- **Offline or handoff** — zip the same set of files. Opening `index.html` from the
  extracted folder browses the entire site.

Clean URLs like `example.com/solutions/ai-agents/` still work on any host that serves
directory indexes, which is the default nearly everywhere.
