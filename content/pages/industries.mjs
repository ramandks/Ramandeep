import { icon } from '../icons.mjs';
import { esc, secHead, pageHero, faqBlock, cards, checkList } from '../layout.mjs';
import { industries, solutions } from '../site.mjs';

export const industriesIndex = {
  path: '/industries/',
  title: 'Industries',
  description: `AI agents and automation for ${industries.length} industries — real estate, finance, healthcare, retail, logistics, government and more.`,
  body: `
${pageHero({
    eyebrow: 'Industries',
    title: 'AI Solutions for <span class="grad-text">Every Industry</span>',
    lead: `We have shipped into ${industries.length} sectors across 30+ countries. The technology rarely changes much — the workflow, the language and the compliance around it change completely.`,
    crumbs: [{ label: 'Industries' }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="grid g-4">
      ${industries.map((i) => `
        <a class="card reveal" href="/industries/${i.slug}/">
          <span class="ci-box" style="color:${i.color}">${icon(i.icon)}</span>
          <h3>${esc(i.title)}</h3>
          <p>${esc(i.pain)}</p>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Do not see your <span class="grad-text">industry</span>?', center: true, lead: 'The list above is where we have the deepest pattern library, not the limit of where we work. If your business runs on repetitive processes and messy data, the approach transfers.' })}
    <div class="btn-row center">
      <a class="btn btn-primary" href="/book-a-demo/">Talk to us about your sector ${icon('arrow')}</a>
      <a class="btn btn-ghost" href="/resources/use-cases/">Browse use cases</a>
    </div>
  </div>
</section>`,
};

export function industryPage(ind) {
  const others = industries.filter((i) => i.slug !== ind.slug).slice(0, 4);
  const body = `
${pageHero({
    eyebrow: ind.title,
    title: `AI Agents &amp; Automation for <span class="grad-text">${esc(ind.title)}</span>`,
    lead: ind.pain,
    crumbs: [{ label: 'Industries', href: '/industries/' }, { label: ind.title }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="frow">
      <div>
        <span class="eyebrow">The opportunity</span>
        <h2 class="h2">Where AI pays back first in ${esc(ind.title.toLowerCase())}</h2>
        <p class="lead">Every sector has a handful of processes that are high volume, rule-heavy and universally disliked. Those are the ones worth automating first — they are measurable, they are low-risk, and the return is visible within a quarter.</p>
        ${checkList(ind.wins)}
      </div>
      <div class="frow-media">
        <div class="mock">
          <div class="mock-bar"><i></i><i></i><i></i><b>${esc(ind.title)} — agent console</b></div>
          <div class="mock-body">
            <div class="mock-msg"><span class="av alt"></span><span class="bub">${esc(ind.pain)}</span></div>
            <div class="mock-msg"><span class="av"></span><span class="bub me">Handled. ${esc(ind.wins[0])} — logged, assigned and confirmed.</span></div>
            <div class="mock-kpis">
              <div class="mock-kpi"><b>&lt;60s</b><span>First response</span></div>
              <div class="mock-kpi"><b>24/7</b><span>Coverage</span></div>
              <div class="mock-kpi"><b>100%</b><span>Audit trail</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: `Solutions we deploy in ${esc(ind.title.toLowerCase())}`, lead: 'Usually one to start, then two or three as the process matures.' })}
    <div class="grid g-3">
      ${solutions.slice(0, 6).map((s) => `
        <a class="card reveal" href="/solutions/${s.slug}/">
          <span class="ci-box" style="color:${s.color}">${icon(s.icon)}</span>
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.short)}</p>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'A realistic first <span class="grad-text">90 days</span>', lead: 'What a typical engagement looks like from signature to measured result.' })}
    <div class="grid g-4">
      ${[
        { n: '01', title: 'Weeks 1–2', desc: 'Discovery, process timing and access setup. We baseline the current numbers so the result is provable later.' },
        { n: '02', title: 'Weeks 3–6', desc: 'Build and shadow-run against real data. Your team reviews output without depending on it yet.' },
        { n: '03', title: 'Weeks 7–9', desc: 'Go live on a slice of volume with monitoring, alerting and a rollback path in place.' },
        { n: '04', title: 'Weeks 10–13', desc: 'Widen scope, hand over runbooks and report the measured before-and-after to your leadership.' },
      ].map((s) => `
        <div class="card num-card reveal"><span class="n">${s.n}</span><h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p></div>`).join('')}
    </div>
  </div>
</section>

${faqBlock([
    { q: `Is our ${esc(ind.title.toLowerCase())} data safe?`, a: 'Data stays in the region you nominate, encrypted in transit and at rest. We work to least-privilege access, sign your DPA, and provide a written list of every processor involved. Sector-specific requirements are handled at design time, not retrofitted.' },
    { q: 'Do we need in-house AI expertise?', a: 'No. We build, document and hand over. Your team needs a process owner who knows how the work actually happens — that matters far more than technical background.' },
    { q: 'What if our process is unusual?', a: 'Most are. The pattern library shortens discovery, but every build is fitted to your workflow, your systems and your exceptions. We do not ship a template and ask you to adapt.' },
    { q: 'How quickly will we see a result?', a: 'A first deployment typically goes live in 6–9 weeks and shows measurable change within the following month. If your process is simple and your data is accessible, faster.' },
  ], `${esc(ind.title)} — common questions`)}

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Related industries', link: { label: 'All industries', href: '/industries/' } })}
    <div class="grid g-4">
      ${others.map((i) => `
        <a class="card reveal" href="/industries/${i.slug}/">
          <span class="ci-box" style="color:${i.color}">${icon(i.icon)}</span>
          <h3>${esc(i.title)}</h3>
          <p>${esc(i.pain)}</p>
        </a>`).join('')}
    </div>
  </div>
</section>`;

  return {
    path: `/industries/${ind.slug}/`,
    title: `AI for ${ind.title}`,
    description: `AI agents and automation for ${ind.title.toLowerCase()}: ${ind.wins.join('; ')}.`,
    body,
  };
}
