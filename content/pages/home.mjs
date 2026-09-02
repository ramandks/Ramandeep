import { icon } from '../icons.mjs';
import { esc, secHead } from '../layout.mjs';
import {
  solutions, industries, moreIndustries, journey,
  aiModels, platforms, cloudPartners, poweredBy,
} from '../site.mjs';
import { globe, worldMap, sceneTeam, sceneNZ, solutionArt } from '../art.mjs';

const indTile = (i) => `
  <a class="ind-tile reveal" href="${i.slug === 'all' ? '/industries/' : `/industries/${i.slug}/`}">
    <span class="ii" style="color:${i.color}">${icon(i.icon)}</span>
    <b>${esc(i.title)}</b>
  </a>`;

const hero = `
<section class="hero">
  <div class="wrap wrap-wide">
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">AI Solutions &amp; Automations for Every Business</span>
        <h1>
          <span>AI Agents.</span>
          <span>Intelligent Automation.</span>
          <span class="grad-text">Built to Scale. Anywhere.</span>
        </h1>
        <p class="lead">Orbo Flow builds AI Agents and Automations that work 24/7, across any industry, anywhere in the world.</p>
        <div class="btn-row">
          <a class="btn btn-primary btn-lg" href="/book-a-demo/">Book a Demo ${icon('arrow')}</a>
          <a class="btn btn-ghost btn-lg btn-play" href="/solutions/"><span>See How It Works</span><span class="play">${icon('play')}</span></a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="globe-wrap">
          <span class="globe-glow" aria-hidden="true"></span>
          ${globe}
        </div>
        <div class="chip chip-1"><span class="ci" style="background:#EEF2FF;color:#4338CA">${icon('bot')}</span><span><b>AI Agents</b><span>Working 24/7</span></span></div>
        <div class="chip chip-2"><span class="ci" style="background:#F5F0FF;color:#7C3AED">${icon('bolt')}</span><span><b>Automations</b><span>No more manual work</span></span></div>
        <div class="chip chip-3"><span class="ci" style="background:#ECFEFF;color:#0891B2">${icon('puzzle')}</span><span><b>Integrations</b><span>Connect everything</span></span></div>
        <div class="chip chip-4"><span class="ci" style="background:#FFF1F7;color:#DB2777">${icon('chart')}</span><span><b>Insights</b><span>Data that drives</span></span></div>
        <a class="chip chip-5" href="/solutions/"><span class="ci">${icon('play')}</span><span><b>Watch Orbo Flow</b><span>90 sec overview</span></span></a>
      </div>
    </div>

    <div class="statbar reveal">
      <div class="stats">
        <div class="stat"><span class="si" style="color:#7C3AED">${icon('users')}</span><span><b><span data-count="1000" data-suffix="+">1000+</span></b><span>Businesses Trust Us</span></span></div>
        <div class="stat"><span class="si" style="color:#2E7CF6">${icon('bolt')}</span><span><b><span data-count="50" data-suffix="M+">50M+</span></b><span>Tasks Automated</span></span></div>
        <div class="stat"><span class="si" style="color:#14B8A6">${icon('globe')}</span><span><b><span data-count="30" data-suffix="+">30+</span></b><span>Countries Served</span></span></div>
        <div class="stat"><span class="si" style="color:#FF3D9A">${icon('clock')}</span><span><b>24/7</b><span>AI That Works</span></span></div>
      </div>
      <div class="powered">
        <p class="plabel">Powered by leading technologies</p>
        <div class="logo-row">
          ${poweredBy.map((p) => `<span class="lg">${icon(p.icon)}${esc(p.name)}</span>`).join('')}
        </div>
      </div>
    </div>
  </div>
</section>`;

const industriesSection = `
<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({
      title: 'AI Solutions for <span class="grad-text">Every Industry</span>',
      link: { label: 'View all industries', href: '/industries/' },
    })}
    <div class="ind-grid">${industries.slice(0, 9).map(indTile).join('')}</div>
    <div class="ind-grid">${industries.slice(9, 18).map(indTile).join('')}</div>
    <div class="ind-center"><div class="ind-grid">${[...industries.slice(18), moreIndustries].map(indTile).join('')}</div></div>
  </div>
</section>`;

const solutionsSection = `
<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'AI Solutions That Drive <span class="grad-text">Real Results</span>' })}
    <div class="grid g-6">
      ${solutions.map((s) => `
        <a class="sol-card ${s.tint} reveal" href="/solutions/${s.slug}/">
          ${solutionArt(s.slug)}
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.short)}</p>
          <span class="sol-go">${icon('arrow')}</span>
        </a>`).join('')}
    </div>
  </div>
</section>`;

const journeySection = `
<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Smart Automations Ideas That <span class="grad-text">Save Time &amp; Money</span>' })}
    <div class="flow">
      ${journey.map((j) => `
        <div class="flow-step reveal">
          <span class="fi" style="--fc:${j.color}33;color:${j.color}">${icon(j.icon)}</span>
          <b>${esc(j.title)}</b>
          <span>${esc(j.desc)}</span>
        </div>`).join('')}
    </div>
  </div>
</section>`;

const whoWeHelp = `
<section class="section">
  <div class="wrap wrap-wide">
    <div class="split reveal">
      <div class="split-body">
        <span class="eyebrow">Built for teams of all sizes</span>
        <h2 class="h2">Who We Help</h2>
        <p class="lead">Whether you're a startup, growing business or global enterprise, Orbo Flow helps you automate operations, delight customers and scale faster.</p>
        <ul class="check-list">
          <li>${icon('check')}<span>Startups &amp; Entrepreneurs</span></li>
          <li>${icon('check')}<span>Small &amp; Medium Businesses</span></li>
          <li>${icon('check')}<span>Enterprise &amp; Large Organizations</span></li>
          <li>${icon('check')}<span>Agencies &amp; Technology Partners</span></li>
        </ul>
        <div class="btn-row" style="margin-top:26px">
          <a class="btn btn-primary" href="/book-a-demo/">Book a Demo ${icon('arrow')}</a>
        </div>
      </div>
      <div class="split-media">${sceneTeam}</div>
    </div>
  </div>
</section>`;

const toolsSection = `
<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({
      title: 'AI Tools &amp; <span class="grad-text">Technologies</span> We Work With',
      lead: 'Best AI models and platforms to build powerful solutions.',
    })}
    <div class="tools-card reveal">
      <p class="tools-label">AI Models</p>
      <div class="tool-grid">
        ${aiModels.map((t) => `<a class="tool" href="/ai-tools/">${icon(t.icon)}<span>${esc(t.name)}</span></a>`).join('')}
      </div>
      <div class="tool-sep"></div>
      <p class="tools-label">Automation &amp; Integration Platforms</p>
      <div class="tool-grid ten">
        ${platforms.map((t) => `<a class="tool" href="/ai-tools/">${icon(t.icon)}<span>${esc(t.name)}</span></a>`).join('')}
      </div>
    </div>
  </div>
</section>`;

const partnersSection = `
<section class="section">
  <div class="wrap wrap-wide">
    <div class="partners-panel reveal">
      <div class="partners-left">
        <h2 class="h2"><span class="grad-text">Global Partnerships.</span> Limitless Possibilities.</h2>
        <p class="lead">We partner with leading technology providers to bring you secure, scalable and future-ready solutions.</p>
        <div class="partner-logos">
          ${cloudPartners.map((p) => `<span class="p-logo">${icon(p.icon)}${esc(p.name)}</span>`).join('')}
        </div>
        <div class="world">
          ${worldMap}
          <div class="pins" aria-hidden="true">
            <span class="pin" style="left:20%;top:31%" data-label="Americas">${icon('pin')}</span>
            <span class="pin" style="left:50%;top:25%" data-label="Europe">${icon('pin')}</span>
            <span class="pin" style="left:60%;top:46%" data-label="Middle East">${icon('pin')}</span>
            <span class="pin" style="left:73%;top:36%" data-label="Asia">${icon('pin')}</span>
            <span class="pin" style="left:91%;top:83%" data-label="New Zealand">${icon('pin')}</span>
          </div>
        </div>
        <div class="btn-row" style="margin-top:18px">
          <a class="btn btn-ghost btn-sm" href="/company/partners/">View all partners ${icon('arrow')}</a>
        </div>
      </div>
      <div class="partners-right">
        <div class="kpi"><span class="ki" style="color:#FF3D9A">${icon('time')}</span><span><b><span data-count="1" data-suffix="M+">1M+</span></b><span>Hours Saved</span></span></div>
        <div class="kpi"><span class="ki" style="color:#7C3AED">${icon('gears')}</span><span><b><span data-count="500" data-suffix="M+">500M+</span></b><span>Automated Tasks</span></span></div>
        <div class="kpi"><span class="ki" style="color:#14B8A6">${icon('shield')}</span><span><b><span data-count="99.9" data-decimals="1" data-suffix="%">99.9%</span></b><span>Uptime &amp; Reliability</span></span></div>
        <div class="kpi"><span class="ki" style="color:#2E7CF6">${icon('star')}</span><span><b><span data-count="4.9" data-decimals="1">4.9</span>/5</b><span>Client Satisfaction</span></span></div>
      </div>
    </div>
  </div>
</section>`;

const nzSection = `
<section class="section">
  <div class="wrap wrap-wide">
    <div class="nz-band reveal">
      <div class="nz-body">
        <h2 class="h2"><span class="grad-text">Built in New Zealand.</span> Working Globally.</h2>
        <p class="lead">Proudly headquartered in New Zealand, delivering AI solutions to businesses around the world.</p>
        <ul class="check-list green">
          <li>${icon('checkTick')}<span>Global team &amp; local support</span></li>
          <li>${icon('checkTick')}<span>Enterprise-grade security</span></li>
          <li>${icon('checkTick')}<span>Scalable &amp; future ready</span></li>
          <li>${icon('checkTick')}<span>Compliance &amp; data privacy</span></li>
        </ul>
        <div class="btn-row" style="margin-top:26px">
          <a class="btn btn-primary" href="/company/about/">About Orbo Flow ${icon('arrow')}</a>
          <a class="btn btn-ghost" href="/company/contact/">Contact us</a>
        </div>
      </div>
      <div class="nz-media">
        ${sceneNZ}
        <div class="badge-stack two-col">
          <span class="mini-badge"><span class="mi" style="background:#7C3AED">${icon('wallet')}</span>Lower Costs</span>
          <span class="mini-badge"><span class="mi" style="background:#FF3D9A">${icon('clock')}</span>Save Time</span>
          <span class="mini-badge"><span class="mi" style="background:#2E7CF6">${icon('rocket')}</span>Scale Faster</span>
          <span class="mini-badge"><span class="mi" style="background:#14B8A6">${icon('chart')}</span>Increase Revenue</span>
        </div>
      </div>
    </div>
  </div>
</section>`;

const proof = `
<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Teams shipping <span class="grad-text">real outcomes</span>', center: true, lead: 'A few of the results our clients report in their first two quarters with Orbo Flow.' })}
    <div class="grid g-3">
      <div class="quote reveal">
        <span class="qm">"</span>
        <p>Our after-hours enquiries used to sit until morning. The voice agent now books 4 in 10 of them overnight, and our team starts the day with a full calendar instead of a backlog.</p>
        <div class="who"><span class="av">HM</span><span><b>Head of Sales</b><span>National real estate group</span></span></div>
      </div>
      <div class="quote reveal">
        <span class="qm">"</span>
        <p>Claims intake went from a two-day queue to under ten minutes. What convinced our risk team was the audit trail — every automated decision is logged and reviewable.</p>
        <div class="who"><span class="av">CO</span><span><b>Claims Operations Lead</b><span>General insurer</span></span></div>
      </div>
      <div class="quote reveal">
        <span class="qm">"</span>
        <p>We expected a chatbot. We got a system that reads our docs, opens tickets, updates the CRM and escalates properly. Tier-1 volume is down 62%.</p>
        <div class="who"><span class="av">VS</span><span><b>VP Support</b><span>B2B SaaS platform</span></span></div>
      </div>
    </div>
  </div>
</section>`;

export const home = {
  path: '/',
  title: 'AI Agents & Intelligent Automation',
  description:
    'Orbo Flow builds AI Agents and Automations that work 24/7, across any industry, anywhere in the world. Built in New Zealand, working globally.',
  body: [hero, industriesSection, solutionsSection, journeySection, whoWeHelp, toolsSection, partnersSection, nzSection, proof].join('\n'),
};
