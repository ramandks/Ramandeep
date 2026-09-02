import { icon } from '../icons.mjs';
import { esc, secHead, pageHero, faqBlock, cards, checkList } from '../layout.mjs';
import { brand, cloudPartners, industries } from '../site.mjs';
import { sceneTeam, sceneNZ, worldMap } from '../art.mjs';

export const about = {
  path: '/company/about/',
  title: 'About Us',
  description: 'Orbo Flow is a New Zealand-headquartered AI company building agents and automation for businesses in 30+ countries.',
  body: `
${pageHero({
    eyebrow: 'About us',
    title: 'Built in New Zealand. <span class="grad-text">Working Globally.</span>',
    lead: 'We build AI that survives contact with a real business — messy data, awkward exceptions, people who are already busy. That constraint shapes everything about how we work.',
    crumbs: [{ label: 'Company' }, { label: 'About Us' }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="frow">
      <div>
        <span class="eyebrow">Our story</span>
        <h2 class="h2">We started because pilots kept dying</h2>
        <p class="lead">Orbo Flow was founded by a team who had spent years watching promising AI projects stall between demo and production. The models were rarely the problem. Integration, ownership, governance and the unglamorous work of exception handling were.</p>
        <p>So we built the company around the other 90% — the parts that make an AI system something a business can rely on at 2am, not just something impressive in a boardroom. Today we run agents, automations and data platforms for organisations from ten-person startups to national enterprises, across ${industries.length} industries and more than 30 countries.</p>
        <p>We are headquartered in New Zealand, with delivery people across Asia-Pacific, Europe and North America. Being small and far away made us disciplined about two things: shipping something real quickly, and writing down how it works so the client is never dependent on us.</p>
      </div>
      <div class="frow-media">${sceneTeam}</div>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'What we believe', lead: 'Four positions that shape what we will and will not build.' })}
    ${cards([
      { icon: 'target', title: 'Start where it is measurable', desc: 'If we cannot baseline the process before we automate it, we cannot prove the result afterwards. We will push back on use cases that fail this test, even exciting ones.' },
      { icon: 'shield', title: 'Boring reliability beats clever demos', desc: 'Retries, alerting, audit logs and rollback paths are not overhead. They are the difference between a system people trust and one they quietly stop using.' },
      { icon: 'users', title: 'Capability should stay with the client', desc: 'We document, train and hand over. A healthy engagement ends with your team confidently running what we built together.' },
      { icon: 'lock', title: 'Data residency is not a detail', desc: 'You choose the region. We tell you every processor involved, in writing, before anything is signed.' },
    ], 'g-4')}
  </div>
</section>

<section class="section">
  <div class="wrap wrap-wide">
    <div class="frow rev">
      <div class="frow-media">${sceneNZ}</div>
      <div>
        <span class="eyebrow">How we work</span>
        <h2 class="h2">Small teams, short cycles, written handover</h2>
        <p class="lead">Every engagement runs with a named delivery lead, a fortnightly demo against real data, and documentation written as we go rather than at the end.</p>
        ${checkList([
          'A named lead who stays with you from discovery to handover',
          'Fortnightly working demos, not status decks',
          'Fixed-price build scopes agreed before work starts',
          'Runbooks, architecture notes and training as standard',
          'Security review and DPA before any data moves',
        ])}
      </div>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'By the numbers', center: true })}
    <div class="grid g-4">
      ${[
        { icon: 'users', v: '1000', s: '+', l: 'Businesses trust us' },
        { icon: 'bolt', v: '50', s: 'M+', l: 'Tasks automated' },
        { icon: 'globe', v: '30', s: '+', l: 'Countries served' },
        { icon: 'star', v: '4.9', s: '/5', l: 'Client satisfaction', d: 1 },
      ].map((k) => `
        <div class="card center reveal">
          <span class="ci-box" style="margin-inline:auto">${icon(k.icon)}</span>
          <h3 style="font-size:1.7rem"><span data-count="${k.v}" data-suffix="${k.s}"${k.d ? ` data-decimals="${k.d}"` : ''}>${k.v}${k.s}</span></h3>
          <p>${esc(k.l)}</p>
        </div>`).join('')}
    </div>
  </div>
</section>

${faqBlock([
  { q: 'How big is Orbo Flow?', a: 'We run deliberately lean — small senior delivery teams rather than large pyramids. That keeps the people who scoped your work on the build, and it keeps our pricing honest.' },
  { q: 'Where are your people based?', a: 'Headquarters and leadership are in New Zealand. Delivery and support staff are distributed across Asia-Pacific, Europe and North America so clients get coverage in their own working hours.' },
  { q: 'Do you resell software?', a: 'No. We build on the platforms that suit the workload and hold partner status with several cloud and model providers, which we disclose whenever it is relevant to a recommendation.' },
  { q: 'What industries do you refuse?', a: 'We decline work where the intended use is deceptive, discriminatory, or where the client will not accept human oversight on consequential decisions. That has cost us engagements and we would make the same call again.' },
], 'About Orbo Flow')}`,
};

export const partners = {
  path: '/company/partners/',
  title: 'Partners',
  description: 'Orbo Flow partners with AWS, Google Cloud, Microsoft and OpenAI, plus a global network of delivery and referral partners.',
  body: `
${pageHero({
    eyebrow: 'Partners',
    title: '<span class="grad-text">Global Partnerships.</span> Limitless Possibilities.',
    lead: 'We partner with leading technology providers to bring you secure, scalable and future-ready solutions — and with agencies and consultancies who deliver Orbo Flow to their own clients.',
    crumbs: [{ label: 'Company' }, { label: 'Partners' }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Technology partners', lead: 'Certified where certification exists, independent where it matters.' })}
    <div class="grid g-4">
      ${cloudPartners.map((p) => `
        <div class="card center reveal">
          <span class="ci-box" style="margin-inline:auto">${icon(p.icon)}</span>
          <h3>${esc(p.name)}</h3>
          <p>Architecture review, deployment support and preferential access to platform roadmaps.</p>
        </div>`).join('')}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Partner with <span class="grad-text">us</span>', lead: 'Three ways organisations work with Orbo Flow commercially.' })}
    ${cards([
      { icon: 'puzzle', title: 'Delivery partners', desc: 'Agencies and consultancies who build on our platform for their own clients, with white-label options and shared delivery.', list: ['Technical enablement and certification', 'Co-delivery on first engagements', 'Margin on platform subscriptions'] },
      { icon: 'send', title: 'Referral partners', desc: 'Accountants, brokers, MSPs and industry bodies who introduce clients where automation clearly fits.', list: ['Simple referral agreement', 'Commission on closed engagements', 'No delivery obligation'] },
      { icon: 'cloud', title: 'Technology partners', desc: 'Software vendors who want AI agents and automation embedded in their own product experience.', list: ['API and embedding options', 'Joint solution design', 'Co-marketing where it makes sense'] },
    ])}
  </div>
</section>

<section class="section">
  <div class="wrap wrap-wide">
    <div class="partners-panel reveal">
      <div class="partners-left">
        <h2 class="h2">Delivering in <span class="grad-text">30+ countries</span></h2>
        <p class="lead">Local delivery support across five regions, coordinated from New Zealand.</p>
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
      </div>
      <div class="partners-right">
        <div class="kpi"><span class="ki" style="color:#FF3D9A">${icon('time')}</span><span><b>1M+</b><span>Hours Saved</span></span></div>
        <div class="kpi"><span class="ki" style="color:#7C3AED">${icon('gears')}</span><span><b>500M+</b><span>Automated Tasks</span></span></div>
        <div class="kpi"><span class="ki" style="color:#14B8A6">${icon('shield')}</span><span><b>99.9%</b><span>Uptime &amp; Reliability</span></span></div>
        <div class="kpi"><span class="ki" style="color:#2E7CF6">${icon('star')}</span><span><b>4.9/5</b><span>Client Satisfaction</span></span></div>
      </div>
    </div>
  </div>
</section>`,
};

const roles = [
  { title: 'Senior AI Engineer', team: 'Delivery', loc: 'Auckland or remote (NZ/AU)', type: 'Full-time' },
  { title: 'Automation Engineer', team: 'Delivery', loc: 'Remote (APAC)', type: 'Full-time' },
  { title: 'Solutions Architect', team: 'Pre-sales', loc: 'Auckland', type: 'Full-time' },
  { title: 'Data Engineer', team: 'Platform', loc: 'Remote (NZ/AU)', type: 'Full-time' },
  { title: 'Client Delivery Lead', team: 'Delivery', loc: 'Wellington or remote', type: 'Full-time' },
  { title: 'Conversation Designer', team: 'Design', loc: 'Remote (global)', type: 'Contract' },
];

export const careers = {
  path: '/company/careers/',
  title: 'Careers',
  description: 'Join Orbo Flow. Remote-friendly AI engineering, delivery and design roles, headquartered in New Zealand.',
  body: `
${pageHero({
    eyebrow: 'Careers',
    title: 'Build AI that <span class="grad-text">actually ships</span>',
    lead: 'We are a small senior team that puts systems into production and then supports them. If you like owning something end to end and talking to the people who use it, you will recognise this place.',
    crumbs: [{ label: 'Company' }, { label: 'Careers' }],
    actions: false,
  })}

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Why people join', lead: 'And, more importantly, why they stay.' })}
    ${cards([
      { icon: 'rocket', title: 'Real production work', desc: 'Not prototypes that get shelved. Everything you build goes live, gets monitored and gets used by someone whose job it changes.' },
      { icon: 'globe', title: 'Remote-friendly, NZ-anchored', desc: 'Distributed across time zones with genuine flexibility. We optimise for overlap windows, not attendance.' },
      { icon: 'book', title: 'Learning budget that gets used', desc: 'Conference, course and certification budget per person per year, plus dedicated time to use it.' },
      { icon: 'users', title: 'Small teams, real ownership', desc: 'You will name the trade-offs to the client yourself rather than relaying them through three layers.' },
      { icon: 'gauge', title: 'Sane delivery cadence', desc: 'Fixed scopes, fortnightly demos, no heroics culture. On-call is compensated and genuinely rare.' },
      { icon: 'shield', title: 'Work you can defend', desc: 'We decline deceptive and discriminatory use cases. You will not be asked to build something you would rather not explain.' },
    ])}
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Open roles', lead: 'No match today? Send us a note anyway — we hire ahead of demand when the person is right.' })}
    <div class="table-wrap reveal">
      <table>
        <thead><tr><th>Role</th><th>Team</th><th>Location</th><th>Type</th><th></th></tr></thead>
        <tbody>
          ${roles.map((r) => `<tr>
            <td><strong>${esc(r.title)}</strong></td>
            <td>${esc(r.team)}</td>
            <td>${esc(r.loc)}</td>
            <td>${esc(r.type)}</td>
            <td><a class="link-arrow" href="/company/contact/">Apply ${icon('arrow')}</a></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
    <p class="small muted" style="margin-top:16px">Applications go to <a href="mailto:careers@orboflow.com">careers@orboflow.com</a>. We reply to every application, including the ones we decline.</p>
  </div>
</section>

${faqBlock([
  { q: 'Do I need AI or ML research experience?', a: 'For most roles, no. We need strong software and data engineers who care about production reliability. Model research is a small part of what we do; making systems dependable is the bulk of it.' },
  { q: 'Is remote genuinely remote?', a: 'Yes, within time zones that overlap our delivery hours — broadly NZ, Australia and Asia for delivery roles, with some fully global positions. We are explicit about the required overlap in each listing.' },
  { q: 'What is the interview process?', a: 'An intro call, a practical exercise based on real work (paid if it takes more than two hours), a technical conversation, and a chat with someone you would work alongside. Usually two to three weeks end to end.' },
], 'Working at Orbo Flow')}`,
};

export const newsroom = {
  path: '/company/newsroom/',
  title: 'Newsroom',
  description: 'Announcements, product releases and press resources from Orbo Flow.',
  body: `
${pageHero({
    eyebrow: 'Newsroom',
    title: 'News from <span class="grad-text">Orbo Flow</span>',
    lead: 'Product releases, partnerships and company announcements. For media enquiries, contact press@orboflow.com.',
    crumbs: [{ label: 'Company' }, { label: 'Newsroom' }],
    actions: false,
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="grid g-3">
      ${[
        { tag: 'Product', title: 'Voice agents add te reo Māori greetings and 12 more languages', date: 'August 2026', desc: 'Regional language coverage expands across Asia-Pacific, with accent-tuned speech models for New Zealand and Australian English.' },
        { tag: 'Partnership', title: 'Orbo Flow joins the AWS Partner Network', date: 'July 2026', desc: 'Formalising an architecture that already backs the majority of our regulated-industry deployments.' },
        { tag: 'Company', title: '50 million automated tasks and counting', date: 'June 2026', desc: 'A milestone across 1,000+ client deployments, and what the run data taught us about where automation actually holds.' },
        { tag: 'Product', title: 'Agent audit trails now export to your SIEM', date: 'May 2026', desc: 'Every agent decision, source and action streams to Splunk, Sentinel and Elastic for security teams that need it.' },
        { tag: 'Company', title: 'Data residency now available in five regions', date: 'April 2026', desc: 'New Zealand, Australia, Singapore, EU and US-East, with written processor disclosure per region.' },
        { tag: 'Product', title: 'Automation dashboards report hours saved, not just runs', date: 'March 2026', desc: 'Baseline capture at build time means the return is measured from run logs rather than estimated.' },
      ].map((n) => `
        <article class="post reveal">
          <div class="post-cover">${icon('news')}</div>
          <div class="post-body">
            <span class="tag">${esc(n.tag)}</span>
            <h3>${esc(n.title)}</h3>
            <p>${esc(n.desc)}</p>
            <div class="post-meta"><span>${esc(n.date)}</span></div>
          </div>
        </article>`).join('')}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-narrow center">
    <h2 class="h2">Media enquiries</h2>
    <p class="lead" style="margin-inline:auto">Brand assets, executive bios and product screenshots are available on request. We aim to respond to journalists within one business day.</p>
    <div class="btn-row center" style="margin-top:22px">
      <a class="btn btn-primary" href="mailto:press@orboflow.com">press@orboflow.com</a>
      <a class="btn btn-ghost" href="/company/contact/">General contact</a>
    </div>
  </div>
</section>`,
};

export const contact = {
  path: '/company/contact/',
  title: 'Contact Us',
  description: `Contact Orbo Flow — ${brand.email}, ${brand.phone}. Headquartered in New Zealand, working globally.`,
  body: `
${pageHero({
    eyebrow: 'Contact',
    title: 'Talk to a <span class="grad-text">human</span>',
    lead: 'Tell us what you are trying to fix. We reply to every enquiry, usually within one business day, and we will tell you honestly if we are not the right fit.',
    crumbs: [{ label: 'Company' }, { label: 'Contact Us' }],
    actions: false,
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="frow">
      <div>
        <h2 class="h2">Send us a message</h2>
        <p class="lead">No obligation, no sales sequence. If it is a good fit we will suggest a discovery call; if not, we will usually point you somewhere better.</p>
        <div class="grid" style="gap:16px;margin-top:28px">
          <div class="card card-flat"><span class="ci-box">${icon('mail')}</span><h3>Email</h3><p><a href="mailto:${esc(brand.email)}">${esc(brand.email)}</a></p></div>
          <div class="card card-flat"><span class="ci-box">${icon('phone')}</span><h3>Phone</h3><p>${esc(brand.phone)}</p></div>
          <div class="card card-flat"><span class="ci-box">${icon('pin')}</span><h3>Global headquarters</h3><p>${esc(brand.hq)}<br>Delivery teams across APAC, EMEA and the Americas.</p></div>
        </div>
      </div>
      <div>
        <form class="form-card reveal" data-validate>
          <div class="form-success">Thanks — your message has reached us. Someone from the team will reply within one business day.</div>
          <div class="form-row">
            <div class="field"><label for="c-first">First name <span class="req">*</span></label><input id="c-first" name="first" type="text" required autocomplete="given-name"><span class="msg"></span></div>
            <div class="field"><label for="c-last">Last name <span class="req">*</span></label><input id="c-last" name="last" type="text" required autocomplete="family-name"><span class="msg"></span></div>
          </div>
          <div class="field"><label for="c-email">Work email <span class="req">*</span></label><input id="c-email" name="email" type="email" required autocomplete="email"><span class="msg"></span></div>
          <div class="field"><label for="c-company">Company</label><input id="c-company" name="company" type="text" autocomplete="organization"><span class="msg"></span></div>
          <div class="field"><label for="c-topic">What is this about?</label>
            <select id="c-topic" name="topic">
              <option>A project or engagement</option><option>Partnership</option><option>Careers</option><option>Media enquiry</option><option>Something else</option>
            </select></div>
          <div class="field"><label for="c-msg">Message <span class="req">*</span></label><textarea id="c-msg" name="message" required placeholder="What are you trying to fix, and what does it cost you today?"></textarea><span class="msg"></span></div>
          <button class="btn btn-primary" type="submit" style="width:100%">Send message ${icon('arrow')}</button>
          <p class="form-note">This demo form validates in the browser and does not transmit data. Connect it to your CRM or form endpoint before launch.</p>
        </form>
      </div>
    </div>
  </div>
</section>`,
};
