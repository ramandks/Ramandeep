# Orbo Flow — Website

Marketing website for **Orbo Flow**: *AI Agents. Intelligent Automation. Built to Scale. Anywhere.*

Built from the supplied homepage design and extended into a complete **52-page** site.
Static HTML/CSS/JS with **no runtime dependencies** — deployable to GitHub Pages, Netlify,
Cloudflare Pages, S3 or any static host by serving the repository root.

---

## Quick start

```bash
npm run build     # generate all HTML into the repo root
npm run serve     # preview at http://localhost:4173
npm run check     # build + verify every internal link and page
npm test          # the above, plus browser UI tests (needs `npm install`)
```

Only `npm run build`, `serve` and `check` need Node — nothing is installed for them.
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
  server.mjs          static preview server
assets/
  css/styles.css      the design system — tokens, components, responsive rules
  js/main.js          progressive-enhancement interactions
```

`tools/build.mjs` clears and regenerates the `solutions/`, `industries/`, `resources/`,
`company/`, `legal/`, `ai-tools/`, `book-a-demo/` and `sitemap/` directories on each run,
so renamed pages never linger.

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

The repository root *is* the site. `.nojekyll` is committed so GitHub Pages serves it
as-is. Point any static host at the root and it will work — no build step is required at
deploy time because the HTML is committed.
