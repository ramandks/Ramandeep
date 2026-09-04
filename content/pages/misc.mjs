import { icon } from '../icons.mjs';
import { esc, secHead, pageHero, faqBlock, checkList } from '../layout.mjs';
import { brand, solutions, industries, resourceTypes, companyPages } from '../site.mjs';

export const bookDemo = {
  path: '/book-a-demo/',
  title: 'Book a Demo',
  description: 'Book a 30-minute discovery call with Orbo Flow. We will map your highest-value automation opportunities — no obligation.',
  body: `
${pageHero({
    eyebrow: 'Book a demo',
    title: 'See what this looks like <span class="grad-text">in your business</span>',
    lead: 'Thirty minutes, no slide deck. We ask about your process, show you comparable deployments, and tell you honestly whether AI is the right answer.',
    crumbs: [{ label: 'Book a Demo' }],
    actions: false,
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="frow">
      <div>
        <h2 class="h2">What happens on the call</h2>
        ${checkList([
          'You describe the process that costs you the most time today',
          'We ask what it currently takes — volume, people, minutes per item',
          'You see a comparable deployment from your industry, with real numbers',
          'We give you an honest read on fit, effort and rough cost',
          'If it makes sense, we propose a scoped next step. If not, we say so.',
        ])}
        <div class="card card-flat" style="margin-top:30px">
          <span class="ci-box">${icon('clock')}</span>
          <h3>No obligation, no sequence</h3>
          <p>You will not be enrolled in a nurture campaign. One follow-up email with what we discussed, and that is it unless you ask for more.</p>
        </div>
        <div class="card card-flat" style="margin-top:16px">
          <span class="ci-box">${icon('mail')}</span>
          <h3>Prefer email?</h3>
          <p>Write to <a href="mailto:${esc(brand.email)}">${esc(brand.email)}</a> or call ${esc(brand.phone)}. We reply within one business day.</p>
        </div>
      </div>

      <div>
        <form class="form-card reveal" data-validate>
          <div class="form-success">Thanks — your request has reached the team. We will confirm a time within one business day.</div>
          <h3 style="margin-bottom:18px">Request your demo</h3>
          <div class="form-row">
            <div class="field"><label for="d-first">First name <span class="req">*</span></label><input id="d-first" name="first" type="text" required autocomplete="given-name"><span class="msg"></span></div>
            <div class="field"><label for="d-last">Last name <span class="req">*</span></label><input id="d-last" name="last" type="text" required autocomplete="family-name"><span class="msg"></span></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="d-email">Work email <span class="req">*</span></label><input id="d-email" name="email" type="email" required autocomplete="email"><span class="msg"></span></div>
            <div class="field"><label for="d-phone">Phone</label><input id="d-phone" name="phone" type="tel" autocomplete="tel"><span class="msg"></span></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="d-company">Company <span class="req">*</span></label><input id="d-company" name="company" type="text" required autocomplete="organization"><span class="msg"></span></div>
            <div class="field"><label for="d-size">Company size</label>
              <select id="d-size" name="size"><option>1–10</option><option>11–50</option><option>51–200</option><option>201–1000</option><option>1000+</option></select></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="d-industry">Industry</label>
              <select id="d-industry" name="industry">${industries.map((i) => `<option>${esc(i.title)}</option>`).join('')}<option>Other</option></select></div>
            <div class="field"><label for="d-interest">Primary interest</label>
              <select id="d-interest" name="interest">${solutions.map((s) => `<option>${esc(s.title)}</option>`).join('')}<option>Not sure yet</option></select></div>
          </div>
          <div class="field"><label for="d-msg">What are you trying to fix? <span class="req">*</span></label>
            <textarea id="d-msg" name="message" required placeholder="e.g. After-hours enquiries go unanswered until the next morning and we lose roughly a third of them."></textarea><span class="msg"></span></div>
          <button class="btn btn-primary" type="submit" style="width:100%">Book my demo ${icon('arrow')}</button>
          <p class="form-note">This demo form validates in the browser and does not transmit data. Connect it to your CRM or scheduling tool before launch.</p>
        </form>
      </div>
    </div>
  </div>
</section>

${faqBlock([
  { q: 'Is this a sales call?', a: 'It is a qualification call in both directions. We are working out whether we can help, and you are working out whether we are credible. If the answer is no either way, ending it at 20 minutes is a good outcome.' },
  { q: 'Do we need to prepare anything?', a: 'Helpful but not required: a rough sense of the process volume and how long each item takes today. If you do not have that, we will help you estimate it on the call.' },
  { q: 'Who should attend?', a: 'The person who owns the process, and someone who can speak to the systems involved. Technical depth is not necessary at this stage.' },
  { q: 'What does it cost to get started?', a: 'The discovery call is free. Beyond that, engagements are fixed-price against an agreed scope, with the number given to you before any commitment.' },
], 'Before you book')}`,
};

/* ---------------- Legal ---------------- */
const legal = (slug, title, description, sections) => ({
  path: `/legal/${slug}/`,
  title,
  description,
  body: `
${pageHero({ eyebrow: 'Legal', title: esc(title), lead: description, crumbs: [{ label: 'Legal' }, { label: title }], actions: false })}
<section class="section">
  <div class="wrap wrap-narrow">
    <div class="prose reveal">
      <p class="small muted"><strong>Last updated:</strong> 1 September 2026</p>
      ${sections.map((s) => `<h2>${esc(s.h)}</h2>${s.p.map((t) => `<p>${t}</p>`).join('')}${s.list ? `<ul>${s.list.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}`).join('')}
      <h2>Contact</h2>
      <p>Questions about this document can be sent to <a href="mailto:legal@orboflow.com">legal@orboflow.com</a> or to our privacy officer at <a href="mailto:privacy@orboflow.com">privacy@orboflow.com</a>.</p>
    </div>
  </div>
</section>`,
});

export const privacy = legal('privacy', 'Privacy Policy',
  'How Orbo Flow collects, uses, stores and protects personal information.', [
    { h: 'Who we are', p: ['Orbo Flow ("we", "us") is headquartered in Australia and New Zealand and provides AI agent, automation, data and integration services to business clients worldwide. This policy explains how we handle personal information collected through our website and in the course of delivering services.'] },
    { h: 'Information we collect', p: ['We collect information you provide directly — such as name, work email, phone number, company and the content of enquiries — when you complete a form, book a demo or contact us. We also collect limited technical information such as browser type, approximate location derived from IP address, and pages visited.'], list: ['Contact and company details you submit', 'Correspondence between you and our team', 'Website usage and analytics data', 'Client data processed under a separate services agreement'] },
    { h: 'How we use it', p: ['We use personal information to respond to enquiries, deliver and support our services, meet legal and contractual obligations, and improve our website and offering. We do not sell personal information. We do not use client data to train third-party models.'] },
    { h: 'Client data and data residency', p: ['Where we process data on behalf of a client, we act as a processor under that client\'s instructions and under a written data processing agreement. Processing region is selected by the client — options include New Zealand, Australia, Singapore, the European Union and the United States. We disclose every sub-processor involved in writing before processing begins.', 'Because we operate in both Australia and New Zealand, personal information may be accessed by our staff in either country. Where Australian Privacy Principle 8 applies to a cross-border disclosure, we take reasonable steps to ensure the recipient handles the information consistently with the Australian Privacy Principles.'] },
    { h: 'Sharing and disclosure', p: ['We share information with sub-processors who support our services (hosting, model inference, email delivery, analytics), each bound by contractual confidentiality and security obligations. We may disclose information where required by law. A current sub-processor list is available on request.'] },
    { h: 'Retention', p: ['Enquiry information is retained for up to 24 months from last contact unless you ask us to delete it sooner. Client data retention is governed by the applicable services agreement.'] },
    { h: 'Security', p: ['We apply encryption in transit and at rest, least-privilege access controls, audit logging, secret rotation and regular access review. No system is perfectly secure, but we will notify affected parties and the relevant regulator promptly if a breach occurs.'] },
    { h: 'Your rights', p: ['Under the New Zealand Privacy Act 2020, the Australian Privacy Act 1988 and its Australian Privacy Principles, and, where applicable, the GDPR, you may request access to, correction of, or deletion of your personal information, and object to certain processing. Contact our privacy officer to make a request. We respond within 20 working days for requests under the New Zealand Act and within 30 days for requests under the Australian Privacy Principles.'] },
    { h: 'Cookies', p: ['We use essential cookies to operate the site and, where you consent, analytics cookies to understand usage. You can control cookies through your browser settings. Declining analytics cookies does not affect site functionality.'] },
    { h: 'Changes', p: ['We may update this policy. Material changes are noted on this page with a revised date, and where the change is significant we notify active clients directly.'] },
  ]);

export const terms = legal('terms', 'Terms of Service',
  'The terms that apply to use of the Orbo Flow website and services.', [
    { h: 'Acceptance', p: ['By accessing this website or using our services you agree to these terms. Where a signed services agreement exists between you and Orbo Flow, that agreement takes precedence over these terms to the extent of any inconsistency.'] },
    { h: 'Use of the website', p: ['You may use this website for lawful purposes only. You must not attempt to gain unauthorised access, interfere with its operation, scrape it at a volume that degrades service for others, or use it to distribute malicious code.'] },
    { h: 'Services', p: ['Services are provided under a separate written agreement setting out scope, fees, service levels and acceptance criteria. Nothing on this website constitutes an offer capable of acceptance or a guarantee of any particular outcome.'] },
    { h: 'Acceptable use of AI services', p: ['Our services may not be used to deceive people about whether they are interacting with an automated system where disclosure is required, to make consequential decisions about individuals without human oversight, to produce unlawful or discriminatory outputs, or to process personal information without a lawful basis.'], list: ['Disclosure of automated interaction where required by law', 'Human review of consequential decisions', 'No unlawful, deceptive or discriminatory use', 'Compliance with applicable data protection law'] },
    { h: 'Intellectual property', p: ['Website content, branding and materials are owned by Orbo Flow or our licensors. Ownership of deliverables produced under a services agreement is addressed in that agreement; by default, client data and client-specific configurations remain the client\'s property.'] },
    { h: 'Third-party services', p: ['Our services integrate with third-party platforms and models. Those platforms are governed by their own terms, and we are not responsible for their availability, changes or acts.'] },
    { h: 'Warranties and liability', p: ['The website is provided on an "as is" basis without warranties of any kind to the extent permitted by law. Our liability under any services agreement is limited as set out in that agreement. Nothing in these terms limits liability that cannot lawfully be limited, including under the New Zealand Consumer Guarantees Act 1993 and Fair Trading Act 1986, or the Australian Consumer Law in Schedule 2 to the Competition and Consumer Act 2010, in each case where those regimes apply.'] },
    { h: 'Governing law', p: ['Where you contract with our New Zealand entity, these terms are governed by the laws of New Zealand and the New Zealand courts have non-exclusive jurisdiction over any dispute. Where you contract with our Australian entity, these terms are governed by the laws of New South Wales, Australia and the courts of that state have non-exclusive jurisdiction. The contracting entity is identified in your services agreement; if no services agreement is in place, the law of the country in which you are located applies as between New Zealand and Australia.'] },
  ]);

export const security = legal('security', 'Security',
  'How Orbo Flow secures its platform, its people and the data our clients trust us with.', [
    { h: 'Our approach', p: ['Security is designed into delivery rather than reviewed at the end. Every engagement includes a security review before data moves, and every deployment ships with access controls, audit logging and monitoring already in place.'] },
    { h: 'Data protection', p: ['Data is encrypted in transit (TLS 1.2+) and at rest (AES-256). Access follows least-privilege principles, is granted per engagement, and is reviewed quarterly. Secrets are stored in managed vaults with automated rotation.'] },
    { h: 'Data residency', p: ['Clients choose their processing region. Available regions include New Zealand, Australia, Singapore, the European Union and the United States. We provide a written list of every sub-processor and the region in which each operates.'] },
    { h: 'AI-specific controls', p: ['Retrieved content is treated as data, never as instructions, which mitigates prompt injection. Agents operate under explicit tool permissions and topic guardrails. Consequential actions require human approval by default. Every agent decision retains a trace of sources, tools called and outputs produced.'], list: ['Prompt injection mitigation through content isolation', 'Explicit tool permissions per agent', 'Human approval gates on consequential actions', 'Full decision audit trail, exportable to your SIEM'] },
    { h: 'Infrastructure', p: ['We deploy on AWS, Google Cloud and Microsoft Azure, using managed services with vendor security baselines applied. Environments are separated between development, staging and production, with no production data in lower environments.'] },
    { h: 'People', p: ['All personnel complete background checks and annual security training. Access to client environments is individually provisioned, logged and revoked on role change or departure.'] },
    { h: 'Monitoring and response', p: ['Systems are monitored for availability, anomalous access and failure rates. We maintain a documented incident response process with defined severity levels, and we notify affected clients promptly with the facts we have at the time.'] },
    { h: 'Reporting a vulnerability', p: ['If you believe you have found a security issue, email <a href="mailto:security@orboflow.com">security@orboflow.com</a>. We acknowledge reports within one business day and will keep you updated through to resolution. We do not pursue legal action against researchers who report in good faith and avoid privacy violations or service disruption.'] },
  ]);

/* ---------------- Sitemap page ---------------- */
export const sitemapPage = {
  path: '/sitemap/',
  title: 'Sitemap',
  description: 'Every page on the Orbo Flow website, in one place.',
  body: `
${pageHero({ eyebrow: 'Sitemap', title: 'Every page, <span class="grad-text">in one place</span>', lead: 'A complete index of the Orbo Flow website.', crumbs: [{ label: 'Sitemap' }], actions: false })}
<section class="section">
  <div class="wrap wrap-wide">
    <div class="grid g-4">
      <div class="card card-flat reveal"><h3>Solutions</h3><ul style="list-style:none;padding:0">
        <li><a href="/solutions/">All solutions</a></li>
        ${solutions.map((s) => `<li><a href="/solutions/${s.slug}/">${esc(s.title)}</a></li>`).join('')}
      </ul></div>
      <div class="card card-flat reveal"><h3>Industries</h3><ul style="list-style:none;padding:0">
        <li><a href="/industries/">All industries</a></li>
        ${industries.map((i) => `<li><a href="/industries/${i.slug}/">${esc(i.title)}</a></li>`).join('')}
      </ul></div>
      <div class="card card-flat reveal"><h3>Resources</h3><ul style="list-style:none;padding:0">
        <li><a href="/resources/">All resources</a></li>
        ${resourceTypes.map((r) => `<li><a href="/resources/${r.slug}/">${esc(r.title)}</a></li>`).join('')}
        <li><a href="/ai-tools/">AI Tools &amp; Technologies</a></li>
      </ul></div>
      <div class="card card-flat reveal"><h3>Company &amp; legal</h3><ul style="list-style:none;padding:0">
        ${companyPages.map((c) => `<li><a href="/company/${c.slug}/">${esc(c.title)}</a></li>`).join('')}
        <li><a href="/book-a-demo/">Book a Demo</a></li>
        <li><a href="/legal/privacy/">Privacy Policy</a></li>
        <li><a href="/legal/terms/">Terms of Service</a></li>
        <li><a href="/legal/security/">Security</a></li>
      </ul></div>
    </div>
  </div>
</section>`,
};

export const notFound = {
  path: '/404.html',
  title: 'Page not found',
  description: 'The page you were looking for does not exist.',
  body: `
<section class="page-hero" style="padding:110px 0 90px">
  <div class="wrap wrap-narrow center">
    <span class="eyebrow">404</span>
    <h1>This page took an <span class="grad-text">unscheduled detour</span></h1>
    <p class="lead" style="margin-inline:auto">The link may be out of date, or the page may have moved. Here are a few places that definitely exist.</p>
    <div class="btn-row center" style="margin-top:28px">
      <a class="btn btn-primary" href="/">Back to home ${icon('arrow')}</a>
      <a class="btn btn-ghost" href="/sitemap/">See the sitemap</a>
    </div>
  </div>
</section>
<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Popular destinations', center: true })}
    <div class="grid g-4">
      ${[
        { icon: 'bot', title: 'AI Agents', desc: 'Agents that converse, act and escalate.', href: '/solutions/ai-agents/' },
        { icon: 'gears', title: 'AI Automation', desc: 'End-to-end workflow automation.', href: '/solutions/ai-automation/' },
        { icon: 'grid', title: 'Industries', desc: `AI across ${industries.length} sectors.`, href: '/industries/' },
        { icon: 'calendar', title: 'Book a Demo', desc: 'Thirty minutes, no slide deck.', href: '/book-a-demo/' },
      ].map((c) => `<a class="card reveal" href="${c.href}"><span class="ci-box">${icon(c.icon)}</span><h3>${esc(c.title)}</h3><p>${esc(c.desc)}</p></a>`).join('')}
    </div>
  </div>
</section>`,
};
