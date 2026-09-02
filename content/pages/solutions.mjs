import { icon } from '../icons.mjs';
import { esc, secHead, pageHero, faqBlock, cards, checkList } from '../layout.mjs';
import { solutions, industries } from '../site.mjs';
import { solutionArt } from '../art.mjs';

/* ---------- Deep content per solution ---------- */
const detail = {
  'ai-agents': {
    hero: 'Conversations handled. Work completed. Humans looped in.',
    capabilities: [
      { icon: 'headset', title: 'Customer service agents', desc: 'Answer, resolve and escalate across web chat, email, WhatsApp and in-app messaging — grounded in your own documentation.' },
      { icon: 'target', title: 'Sales & qualification agents', desc: 'Respond to every enquiry in seconds, ask the right qualifying questions and book straight into your team’s calendar.' },
      { icon: 'file', title: 'Back-office agents', desc: 'Read documents, extract fields, update records and produce the summary a human would have spent an hour writing.' },
      { icon: 'users', title: 'Internal copilots', desc: 'Give staff a single place to ask questions of your policies, product data and systems, with permissions respected.' },
      { icon: 'shield', title: 'Guardrails & escalation', desc: 'Topic limits, refusal rules, confidence thresholds and clean handover to a named human when it matters.' },
      { icon: 'db', title: 'Grounded in your data', desc: 'Retrieval over your knowledge base, CRM and file stores, so answers cite your content rather than inventing it.' },
    ],
    how: [
      { n: '01', title: 'Map the conversation', desc: 'We shadow the real workflow — the questions actually asked, the systems actually touched, the exceptions that break scripts.' },
      { n: '02', title: 'Ground the agent', desc: 'Your documents, product data and records are indexed with permissions intact, so the agent answers from your truth.' },
      { n: '03', title: 'Wire the actions', desc: 'Booking, ticketing, CRM writes, refunds, lookups — each with its own approval rules and audit trail.' },
      { n: '04', title: 'Pilot, measure, expand', desc: 'Start on one channel with human review, watch containment and CSAT, then widen scope once the numbers hold.' },
    ],
    faqs: [
      { q: 'How is this different from a chatbot?', a: 'A chatbot follows a decision tree you drew in advance. An agent reasons over your data, decides which tool to call, performs the action in your systems, and knows when to escalate. Practically: a chatbot tells a customer how to reschedule; an agent reschedules it.' },
      { q: 'What stops the agent making things up?', a: 'Three layers. Answers are retrieved from your approved sources rather than generated from memory; responses are checked against confidence and topic rules before sending; and anything outside scope escalates to a human instead of guessing. Every response keeps a trace of the sources used.' },
      { q: 'Can it work in more than one language?', a: 'Yes. Agents run in over 30 languages, including automatic detection and per-market tone. New Zealand teams commonly run English plus te reo Māori greetings, Mandarin and Hindi.' },
      { q: 'How long does a first agent take to deploy?', a: 'A scoped, production-ready agent on one channel typically goes live in 3–6 weeks. Simpler deflection agents ship faster; regulated environments with review gates take longer by design.' },
    ],
  },
  'ai-automation': {
    hero: 'Give your team back the week.',
    capabilities: [
      { icon: 'workflow', title: 'End-to-end workflows', desc: 'Chain triggers, conditions, approvals and system writes into one reliable process that runs without supervision.' },
      { icon: 'file', title: 'Document processing', desc: 'Invoices, contracts, application forms and PDFs read, validated and pushed into the right system of record.' },
      { icon: 'refresh', title: 'Data sync & hygiene', desc: 'Keep CRM, ERP, finance and support tools consistent, with de-duplication and conflict rules you define.' },
      { icon: 'route', title: 'Routing & assignment', desc: 'Score, prioritise and assign work to the right person or queue using your rules plus model judgement.' },
      { icon: 'megaphone', title: 'Notifications that matter', desc: 'Alert the right people at the right moment — and stay quiet the rest of the time.' },
      { icon: 'gauge', title: 'Monitoring & retries', desc: 'Failure handling, retries with backoff, dead-letter queues and alerting so a broken step never silently drops work.' },
    ],
    how: [
      { n: '01', title: 'Find the money', desc: 'We time the current process, count the touches and rank candidates by hours saved against build effort.' },
      { n: '02', title: 'Design the happy path', desc: 'Model the standard flow first, then enumerate the exceptions — that list is where most automations quietly fail.' },
      { n: '03', title: 'Build and shadow-run', desc: 'The automation runs alongside the manual process, so you can compare outputs before anyone relies on it.' },
      { n: '04', title: 'Cut over and monitor', desc: 'Switch on with alerting and a rollback path. You get a dashboard of runs, failures and hours saved.' },
    ],
    faqs: [
      { q: 'Do we need to replace our existing tools?', a: 'No. Most engagements automate across what you already run — HubSpot, Salesforce, Xero, Microsoft 365, Shopify, your ERP. We add a layer between them rather than asking you to migrate.' },
      { q: 'What happens when an automation breaks?', a: 'Every step has retry and failure handling. Failed runs go to a queue with the full payload, an alert reaches the owner, and the work can be replayed once fixed. Nothing disappears silently.' },
      { q: 'How do you measure the return?', a: 'Before we build, we baseline the current process: volume, minutes per item, error rate. After go-live, the same numbers come from run logs. Hours saved and error reduction are reported monthly, not estimated.' },
      { q: 'Can our own team maintain it?', a: 'Yes — that is the intent. We build on platforms your team can operate (n8n, Make, Zapier or native code), document each flow, and run handover sessions. Ongoing support is available but not required.' },
    ],
  },
  'voice-ai': {
    hero: 'Every call answered, first ring, any hour.',
    capabilities: [
      { icon: 'phone', title: 'Inbound call handling', desc: 'Greet, understand intent, answer, and complete the task — bookings, balances, status checks, triage.' },
      { icon: 'send', title: 'Outbound campaigns', desc: 'Reminders, confirmations, re-engagement and surveys at scale, with strict consent and opt-out handling.' },
      { icon: 'calendar', title: 'Booking & rescheduling', desc: 'Live calendar availability, confirmations by SMS or email, and rescheduling without a human touch.' },
      { icon: 'route', title: 'Warm transfer', desc: 'When escalation is right, the agent hands over with a spoken summary and the full transcript attached.' },
      { icon: 'globe', title: 'Multilingual by default', desc: 'Detect and respond in the caller’s language, with accent-aware speech models tuned for local usage.' },
      { icon: 'lock', title: 'Recorded & compliant', desc: 'Consent capture, redaction of sensitive fields, retention rules and regional storage.' },
    ],
    how: [
      { n: '01', title: 'Listen to real calls', desc: 'We analyse a sample of your actual call recordings to find intents, objections and the phrasing customers really use.' },
      { n: '02', title: 'Script the intents', desc: 'Each intent gets a goal, the data it needs, the action it performs and the point at which it must escalate.' },
      { n: '03', title: 'Tune the voice', desc: 'Voice, pace, interruption handling and hold behaviour are tested against recordings until it sounds like your business.' },
      { n: '04', title: 'Route a slice of traffic', desc: 'Start with overflow or after-hours calls, measure resolution and drop-off, then expand the share.' },
    ],
    faqs: [
      { q: 'Will callers know they are speaking to AI?', a: 'Yes — the agent discloses it at the start of the call. In our deployments disclosure has not reduced completion rates; callers care that the problem gets solved quickly.' },
      { q: 'What about accents and noisy lines?', a: 'We use speech models tuned for regional accents including New Zealand and Australian English, and test against real recordings from your lines. Confidence thresholds trigger a clarifying question or a transfer rather than a wrong action.' },
      { q: 'Can it transfer to a human mid-call?', a: 'Yes. Transfers are warm: the receiving agent gets a spoken summary and the live transcript, so the caller never repeats themselves.' },
      { q: 'Which phone systems do you support?', a: 'Any SIP-capable system, plus Twilio, Vonage, Genesys, Amazon Connect and the major cloud PBXs. We work with your existing numbers.' },
    ],
  },
  'data-analytics': {
    hero: 'Answers, not reconciliation.',
    capabilities: [
      { icon: 'db', title: 'Unified data layer', desc: 'Pull sales, service, finance and product data into one modelled, trustworthy source.' },
      { icon: 'chart', title: 'Dashboards people use', desc: 'Role-specific views that answer the questions each team actually asks, not a wall of every metric available.' },
      { icon: 'search', title: 'Ask in plain English', desc: 'Natural-language querying over governed data, so a manager can ask a question without waiting on an analyst.' },
      { icon: 'gauge', title: 'Forecasting & scoring', desc: 'Demand forecasts, churn risk and lead scoring wired back into the systems where people act.' },
      { icon: 'bolt', title: 'Alerts, not reports', desc: 'Anomaly detection that tells you when something moved, instead of a PDF nobody opens.' },
      { icon: 'shield', title: 'Governed access', desc: 'Row-level permissions, lineage and definitions your finance team will sign off on.' },
    ],
    how: [
      { n: '01', title: 'Agree the questions', desc: 'We start from the decisions you need to make, then work backwards to the metrics and sources required.' },
      { n: '02', title: 'Model the data', desc: 'Sources are connected, cleaned and modelled with documented definitions so numbers reconcile across teams.' },
      { n: '03', title: 'Build the surfaces', desc: 'Dashboards, alerts and natural-language access, each tied to a named owner and decision.' },
      { n: '04', title: 'Close the loop', desc: 'Insight is pushed back into CRM, support and ops tools, so the finding becomes an action automatically.' },
    ],
    faqs: [
      { q: 'Do we need a data warehouse first?', a: 'Not necessarily. Small deployments run directly against source systems. Once you have more than a handful of sources or real history, a warehouse (BigQuery, Snowflake, Fabric, Postgres) pays for itself quickly, and we can stand one up as part of the work.' },
      { q: 'Can we keep our existing BI tool?', a: 'Yes. We work with Power BI, Looker, Tableau and Metabase. The modelling layer is what matters most; the visualisation tool is a preference.' },
      { q: 'How do you keep the numbers trustworthy?', a: 'Every metric has a written definition, an owner and tests that run on each refresh. When a test fails the dashboard shows a warning rather than a confidently wrong number.' },
      { q: 'Where does our data live?', a: 'In a region you nominate. New Zealand and Australian data residency are both supported, and we will document exactly which processors touch which data.' },
    ],
  },
  'ai-consulting': {
    hero: 'A roadmap you can fund and defend.',
    capabilities: [
      { icon: 'target', title: 'Opportunity assessment', desc: 'A ranked list of AI use cases scored on value, feasibility, risk and time to first result.' },
      { icon: 'book', title: 'AI strategy & roadmap', desc: 'A sequenced plan with budget, dependencies and the capability you need to build in-house.' },
      { icon: 'shield', title: 'Governance & policy', desc: 'Acceptable-use policy, risk register, model review process and the controls auditors ask about.' },
      { icon: 'users', title: 'Enablement & training', desc: 'Practical workshops for leadership, operations and technical teams — role-specific, not generic.' },
      { icon: 'rocket', title: 'Proof of value', desc: 'A time-boxed build that proves the case with your data before you commit to a programme.' },
      { icon: 'gauge', title: 'Vendor & build/buy advice', desc: 'Independent assessment of platforms and models against your actual constraints and spend.' },
    ],
    how: [
      { n: '01', title: 'Discover', desc: 'Interviews across functions plus a review of systems, data and current spend. Two to three weeks.' },
      { n: '02', title: 'Prioritise', desc: 'Every candidate is scored and sequenced. You get the shortlist, the reasoning and what we ruled out.' },
      { n: '03', title: 'Prove', desc: 'One use case built against real data, with a measured before-and-after that finance can verify.' },
      { n: '04', title: 'Scale', desc: 'Platform, governance and team model to run the next ten use cases without us in the room.' },
    ],
    faqs: [
      { q: 'Are you tied to particular vendors?', a: 'No. We build on OpenAI, Anthropic, Google, Microsoft and open models depending on what the workload needs. Where a recommendation involves a partner we hold, we say so in the document.' },
      { q: 'What does a typical engagement cost?', a: 'A discovery and roadmap engagement is a fixed fee based on scope, usually 3–6 weeks. Proof-of-value builds are quoted separately once the use case is chosen. We will give you a number before you commit.' },
      { q: 'We tried AI and it stalled. What is different?', a: 'Most stalls come from picking use cases with no owner, no data, or no path to production. We score for those explicitly and refuse to start on a case that fails them — even a promising one.' },
      { q: 'Can you work with our internal team?', a: 'That is the preferred model. We pair with your people so capability stays in-house after the engagement ends.' },
    ],
  },
  'integrations': {
    hero: 'Your systems, finally talking to each other.',
    capabilities: [
      { icon: 'puzzle', title: 'Application integration', desc: 'CRM, ERP, finance, support, HR and marketing systems connected with clear contracts between them.' },
      { icon: 'code', title: 'API development', desc: 'Well-documented APIs and webhooks over legacy systems that were never designed to be connected.' },
      { icon: 'refresh', title: 'Real-time sync', desc: 'Event-driven updates with conflict resolution, so records stay consistent rather than nearly consistent.' },
      { icon: 'db', title: 'Legacy connectivity', desc: 'File drops, SFTP, SOAP, database-level integration and on-premise gateways where modern APIs do not exist.' },
      { icon: 'shield', title: 'Secure by design', desc: 'Least-privilege credentials, secret rotation, encryption in transit and at rest, full request logging.' },
      { icon: 'gauge', title: 'Observability', desc: 'Every message traceable end to end, with alerting on latency, failure rate and queue depth.' },
    ],
    how: [
      { n: '01', title: 'Map the systems', desc: 'What holds the master record, what consumes it, where the same field means two different things.' },
      { n: '02', title: 'Define the contracts', desc: 'Schemas, ownership and error behaviour agreed up front, so future changes do not break silently.' },
      { n: '03', title: 'Build and test', desc: 'Built in a sandbox against production-shaped data, including the failure cases nobody wants to think about.' },
      { n: '04', title: 'Run and watch', desc: 'Deployed with dashboards, alerts and a documented runbook your team can act on at 2am.' },
    ],
    faqs: [
      { q: 'Our system has no API. Now what?', a: 'Common, and solvable. Depending on the system we use database-level integration, scheduled file exchange, an RPA layer, or a small service that wraps the legacy application and exposes a clean API.' },
      { q: 'How do you handle duplicate or conflicting records?', a: 'We agree a system of record per field, then apply deterministic and fuzzy matching with a review queue for genuine ambiguity. Automatic merges are logged and reversible.' },
      { q: 'Will this survive vendor upgrades?', a: 'Integrations are versioned and contract-tested. When a vendor changes an endpoint, tests fail in staging with a clear message rather than in production at month-end.' },
      { q: 'Can it run on-premise?', a: 'Yes. We deploy self-hosted or hybrid where data residency, latency or policy requires it.' },
    ],
  },
};

const numCards = (items) => `
  <div class="grid g-4">
    ${items.map((s) => `
      <div class="card num-card reveal">
        <span class="n">${s.n}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.desc)}</p>
      </div>`).join('')}
  </div>`;

const otherSolutions = (slug) => `
  <section class="section">
    <div class="wrap wrap-wide">
      ${secHead({ title: 'Explore other <span class="grad-text">solutions</span>', link: { label: 'All solutions', href: '/solutions/' } })}
      <div class="grid g-6">
        ${solutions.filter((s) => s.slug !== slug).map((s) => `
          <a class="sol-card ${s.tint} reveal" href="/solutions/${s.slug}/">
            ${solutionArt(s.slug)}
            <h3>${esc(s.title)}</h3>
            <p>${esc(s.short)}</p>
            <span class="sol-go">${icon('arrow')}</span>
          </a>`).join('')}
      </div>
    </div>
  </section>`;

export function solutionPage(sol) {
  const d = detail[sol.slug];
  const body = `
${pageHero({
    eyebrow: sol.title,
    title: `${esc(sol.title)}. <span class="grad-text">${esc(d.hero)}</span>`,
    lead: sol.blurb,
    crumbs: [{ label: 'Solutions', href: '/solutions/' }, { label: sol.title }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: `What ${esc(sol.title)} covers`, lead: 'Six capabilities we deploy most often. Every engagement starts with the subset that pays back first.' })}
    ${cards(d.capabilities)}
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'How we deliver it', lead: 'A four-stage path from first conversation to a production system your team owns.' })}
    ${numCards(d.how)}
  </div>
</section>

<section class="section">
  <div class="wrap wrap-wide">
    <div class="frow">
      <div>
        <span class="eyebrow">What you get</span>
        <h2 class="h2">Outcomes, not experiments</h2>
        <p class="lead">Each deployment ships with the things that make it survivable after go-live: monitoring, documentation, an owner and a measured baseline.</p>
        ${checkList([
          'A measured before-and-after on the process we automated',
          'Dashboards for volume, failure rate and hours returned',
          'Documented runbooks and handover to your team',
          'Security review, access controls and audit logging',
          'A roadmap for the next two use cases',
        ])}
      </div>
      <div class="frow-media">
        <div class="mock">
          <div class="mock-bar"><i></i><i></i><i></i><b>${esc(sol.title)} — performance</b></div>
          <div class="mock-body">
            <div class="mock-kpis">
              <div class="mock-kpi"><b>-62%</b><span>Manual touches</span></div>
              <div class="mock-kpi"><b>4.7s</b><span>Avg response</span></div>
              <div class="mock-kpi"><b>99.9%</b><span>Uptime</span></div>
            </div>
            <div class="bars"><i style="height:38%"></i><i style="height:54%"></i><i style="height:47%"></i><i style="height:72%"></i><i style="height:66%"></i><i style="height:88%"></i><i style="height:96%"></i></div>
            <div class="mock-line w85"></div><div class="mock-line w50"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: `${esc(sol.title)} by industry`, lead: 'The same capability, shaped to how your sector actually works.', link: { label: 'All industries', href: '/industries/' } })}
    <div class="grid g-4">
      ${industries.slice(0, 8).map((i) => `
        <a class="card reveal" href="/industries/${i.slug}/">
          <span class="ci-box" style="color:${i.color}">${icon(i.icon)}</span>
          <h3>${esc(i.title)}</h3>
          <p>${esc(i.wins[0])}</p>
        </a>`).join('')}
    </div>
  </div>
</section>

${faqBlock(d.faqs, `${esc(sol.title)} — questions we get asked`)}
${otherSolutions(sol.slug)}`;

  return {
    path: `/solutions/${sol.slug}/`,
    title: sol.title,
    description: `${sol.blurb} Orbo Flow delivers ${sol.title.toLowerCase()} for teams in 30+ countries.`,
    body,
  };
}

export const solutionsIndex = {
  path: '/solutions/',
  title: 'AI Solutions',
  description: 'AI Agents, automation, voice AI, data and analytics, consulting and integrations — the full Orbo Flow solution set.',
  body: `
${pageHero({
    eyebrow: 'Solutions',
    title: 'AI Solutions That Drive <span class="grad-text">Real Results</span>',
    lead: 'Six ways we put AI to work. Most clients start with one, prove the return, then expand — that sequencing is deliberate.',
    crumbs: [{ label: 'Solutions' }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="grid g-3">
      ${solutions.map((s) => `
        <a class="sol-card ${s.tint} reveal" href="/solutions/${s.slug}/" style="padding-bottom:66px">
          ${solutionArt(s.slug)}
          <h3>${esc(s.title)}</h3>
          <p>${esc(s.blurb)}</p>
          <span class="sol-go">${icon('arrow')}</span>
        </a>`).join('')}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Where teams usually <span class="grad-text">start</span>', lead: 'Three entry points that consistently return value inside a quarter.', center: true })}
    ${cards([
      { icon: 'headset', title: 'Deflect the repetitive 40%', desc: 'Most support queues are dominated by a handful of question types. An agent grounded in your documentation removes them without touching the complex cases.' },
      { icon: 'bolt', title: 'Kill one manual process', desc: 'Pick the process your team complains about most. Time it, automate it, measure it. The proof funds the next one.' },
      { icon: 'clock', title: 'Cover the hours you cannot staff', desc: 'Evenings, weekends and public holidays are where enquiries leak. Voice and chat agents catch them at a fraction of rostered cost.' },
    ])}
  </div>
</section>

${faqBlock([
    { q: 'Which solution should we start with?', a: 'Start where the pain is measurable. If your team quotes a number when they complain — "we lose two days a week to this" — that is the use case. If nothing is measurable yet, our discovery engagement produces that ranking in three weeks.' },
    { q: 'Can we combine several solutions?', a: 'Most mature deployments do. A typical shape is an agent on the front end, automation behind it, integrations underneath, and analytics reporting on the whole thing. We build them in that order rather than all at once.' },
    { q: 'Do you work with small businesses?', a: 'Yes. Roughly a third of our clients are under 50 people. Smaller engagements are scoped tighter and ship faster — often a single agent or automation live within a month.' },
    { q: 'What does pricing look like?', a: 'Build work is fixed-price against an agreed scope. Ongoing platform and support is a monthly subscription based on volume. You get both numbers before any commitment, and there is no charge for the initial discovery call.' },
  ], 'Choosing a starting point')}`,
};
