import { icon } from '../icons.mjs';
import { esc, secHead, pageHero, faqBlock, cards } from '../layout.mjs';
import { resourceTypes, industries, solutions } from '../site.mjs';

/* ---------- Listing content per resource type ---------- */
const listings = {
  blog: {
    lead: 'Practical writing from the people doing the delivery. No thought leadership for its own sake.',
    items: [
      { tag: 'Agents', title: 'Why most AI pilots die between demo and production', desc: 'The failure is almost never the model. It is ownership, integration and the exceptions nobody scoped.', date: '12 Aug 2026', read: '8 min' },
      { tag: 'Automation', title: 'How to time a process before you automate it', desc: 'A simple measurement method that turns "this wastes ages" into a number your CFO will accept.', date: '29 Jul 2026', read: '6 min' },
      { tag: 'Voice', title: 'What we learned from 100,000 AI-handled phone calls', desc: 'Where callers drop off, which intents transfer, and why disclosure did not hurt completion rates.', date: '15 Jul 2026', read: '11 min' },
      { tag: 'Data', title: 'Retrieval is not magic: grounding agents in messy company data', desc: 'Chunking, permissions and freshness — the three things that decide whether answers are trustworthy.', date: '2 Jul 2026', read: '9 min' },
      { tag: 'Governance', title: 'The AI policy your team will actually follow', desc: 'A one-page structure that covers acceptable use, review gates and escalation without being ignored.', date: '18 Jun 2026', read: '7 min' },
      { tag: 'Integration', title: 'Integrating with systems that have no API', desc: 'Database-level access, file exchange and wrapper services — what we reach for, and when.', date: '4 Jun 2026', read: '10 min' },
      { tag: 'Automation', title: 'Exception handling is the whole job', desc: 'The happy path takes a fortnight. The other 12% of cases take the rest of the project — plan for it.', date: '21 May 2026', read: '6 min' },
      { tag: 'Agents', title: 'Choosing between an agent and a workflow', desc: 'A decision framework: when reasoning earns its cost, and when a deterministic flow is simply better.', date: '7 May 2026', read: '8 min' },
      { tag: 'Cost', title: 'What AI actually costs to run at production volume', desc: 'Token spend, infrastructure, monitoring and the human review time everyone forgets to budget.', date: '23 Apr 2026', read: '9 min' },
    ],
  },
  guides: {
    lead: 'Longer playbooks for planning, funding and rolling out AI inside an organisation.',
    items: [
      { tag: 'Playbook', title: 'The 90-day AI deployment guide', desc: 'From use-case selection to a measured result, with the checkpoints that keep a project honest.', date: 'Updated Aug 2026', read: '32 pages' },
      { tag: 'Playbook', title: 'Building the business case for AI automation', desc: 'How to baseline, model the return and present it to a board that has heard the pitch before.', date: 'Updated Jul 2026', read: '18 pages' },
      { tag: 'Governance', title: 'AI governance for mid-sized organisations', desc: 'Policy, risk register, review gates and audit evidence — scaled for teams without a compliance department.', date: 'Updated Jul 2026', read: '24 pages' },
      { tag: 'Technical', title: 'Grounding agents in your own data', desc: 'A practical architecture for retrieval, permissions and freshness that holds up in production.', date: 'Updated Jun 2026', read: '26 pages' },
      { tag: 'Playbook', title: 'Choosing your first three use cases', desc: 'A scoring model for value, feasibility and risk, with the worked example we use in discovery.', date: 'Updated Jun 2026', read: '14 pages' },
      { tag: 'Operations', title: 'Running AI systems after go-live', desc: 'Monitoring, drift, escalation paths and the runbook structure your on-call team needs.', date: 'Updated May 2026', read: '21 pages' },
    ],
  },
  webinars: {
    lead: 'Live sessions and recordings with the delivery team. Slides and transcripts included.',
    items: [
      { tag: 'On demand', title: 'AI agents in regulated industries', desc: 'Audit trails, human review gates and data residency, with examples from insurance and banking deployments.', date: 'Recorded Aug 2026', read: '48 min' },
      { tag: 'Upcoming', title: 'Voice AI for after-hours coverage', desc: 'A live walkthrough of an overnight booking agent, from call recording analysis to go-live.', date: '18 Sep 2026', read: '45 min' },
      { tag: 'On demand', title: 'Automating document-heavy processes', desc: 'Invoice, contract and application processing — accuracy rates, review queues and realistic timelines.', date: 'Recorded Jul 2026', read: '52 min' },
      { tag: 'On demand', title: 'From spreadsheets to a governed data layer', desc: 'The migration path for teams whose reporting still lives in email attachments.', date: 'Recorded Jun 2026', read: '41 min' },
      { tag: 'On demand', title: 'Build vs buy for AI capability', desc: 'Where in-house teams win, where they stall, and how to structure a hybrid that lasts.', date: 'Recorded May 2026', read: '38 min' },
      { tag: 'On demand', title: 'Measuring AI return without fooling yourself', desc: 'Baselines, control groups and the metrics that survive scrutiny from finance.', date: 'Recorded Apr 2026', read: '44 min' },
    ],
  },
  'case-studies': {
    lead: 'Real deployments with real numbers. Client names are used where we have permission and withheld where we do not.',
    items: [
      { tag: 'Real Estate', title: 'Overnight enquiries: 4 in 10 booked before morning', desc: 'A national agency added a voice agent for after-hours calls and web enquiries. First-response time fell from 9 hours to under 60 seconds.', date: 'Aug 2026', read: 'Voice AI' },
      { tag: 'Insurance', title: 'Claims intake from two days to ten minutes', desc: 'Automated first-notice-of-loss capture and triage, with a full audit trail that satisfied the risk committee.', date: 'Jul 2026', read: 'AI Automation' },
      { tag: 'SaaS', title: 'Tier-1 support volume down 62%', desc: 'An agent grounded in product documentation handled routine tickets end to end, freeing the team for complex escalations.', date: 'Jul 2026', read: 'AI Agents' },
      { tag: 'Logistics', title: 'Proactive delay alerts cut inbound calls by 44%', desc: 'Exception detection across carrier feeds triggered customer updates before anyone had to ring in and ask.', date: 'Jun 2026', read: 'Integrations' },
      { tag: 'Healthcare', title: '24/7 booking without adding front-desk staff', desc: 'A multilingual booking and reminder agent reduced no-shows by 31% across eleven clinics.', date: 'May 2026', read: 'Voice AI' },
      { tag: 'Manufacturing', title: 'Quote-to-order cycle halved', desc: 'Quoting data pulled from three disconnected systems into one automated flow, cutting turnaround from 6 days to 3.', date: 'Apr 2026', read: 'AI Automation' },
    ],
  },
  templates: {
    lead: 'Automation blueprints you can adapt. Each one includes the flow, the exception cases and the metrics to track.',
    items: [
      { tag: 'Sales', title: 'Inbound lead capture and qualification', desc: 'Form, ad and chat enquiries scored, enriched and routed to the right owner with an SLA timer.', date: 'Blueprint', read: 'n8n / Make' },
      { tag: 'Support', title: 'Ticket deflection with grounded answers', desc: 'Documentation-backed responses with confidence thresholds and clean escalation to a human queue.', date: 'Blueprint', read: 'Any helpdesk' },
      { tag: 'Finance', title: 'Invoice capture to accounting system', desc: 'Extraction, validation against purchase orders, exception queue and posting to Xero or MYOB.', date: 'Blueprint', read: 'Make / Zapier' },
      { tag: 'HR', title: 'Candidate screening and scheduling', desc: 'CV parsing, structured scoring against role criteria, and interview booking without back-and-forth.', date: 'Blueprint', read: 'ATS agnostic' },
      { tag: 'Marketing', title: 'Automated client reporting', desc: 'Pull performance data from ad and analytics platforms into a formatted report on a schedule.', date: 'Blueprint', read: 'Looker / Sheets' },
      { tag: 'Operations', title: 'Exception alerting with escalation ladder', desc: 'Detect the failure, notify the owner, escalate on timeout, and log the whole chain for review.', date: 'Blueprint', read: 'Slack / Teams' },
    ],
  },
  'use-cases': {
    lead: 'Where AI pays back fastest, organised by business function rather than technology.',
    items: [
      { tag: 'Sales', title: 'Never miss an inbound enquiry', desc: 'Instant response, qualification and booking across every channel, including outside business hours.', date: 'Function', read: 'Agents + Voice' },
      { tag: 'Service', title: 'Deflect the repetitive 40%', desc: 'Routine questions answered from your documentation, complex cases routed straight to the right specialist.', date: 'Function', read: 'AI Agents' },
      { tag: 'Finance', title: 'Close the month faster', desc: 'Document capture, reconciliation and variance flagging that removes the manual chase.', date: 'Function', read: 'Automation' },
      { tag: 'Operations', title: 'Catch exceptions before customers do', desc: 'Monitor the flow, detect the anomaly, notify proactively rather than waiting for the complaint.', date: 'Function', read: 'Data + Automation' },
      { tag: 'HR', title: 'Screen at volume without losing candidates', desc: 'Structured, consistent screening with scheduling that never drops someone in the gap.', date: 'Function', read: 'Agents' },
      { tag: 'Marketing', title: 'Report without the reporting week', desc: 'Client and channel reporting assembled automatically from source platforms on a schedule.', date: 'Function', read: 'Data & Analytics' },
      { tag: 'Legal', title: 'Review contracts in a fraction of the time', desc: 'Clause extraction, deviation flagging against your playbook, and a summary a lawyer can act on.', date: 'Function', read: 'Agents' },
      { tag: 'IT', title: 'Connect the systems nobody wants to touch', desc: 'Reliable integration over legacy applications, with monitoring and a documented runbook.', date: 'Function', read: 'Integrations' },
      { tag: 'Executive', title: 'One number everyone agrees on', desc: 'Governed metric definitions so sales, finance and ops stop arguing about whose report is right.', date: 'Function', read: 'Data & Analytics' },
    ],
  },
};

const glossaryTerms = [
  ['Agent', 'An AI system that can reason over information, choose and call tools, and take actions in real systems — as opposed to only producing text.'],
  ['Automation', 'A defined process that runs without human intervention. Deterministic by design; may call AI for specific judgement steps.'],
  ['Context window', 'How much text a model can consider at once. Larger windows allow more source material per request but cost more to run.'],
  ['Embedding', 'A numeric representation of text that lets a system find semantically similar content rather than exact keyword matches.'],
  ['Fine-tuning', 'Further training of a model on your own examples to shape tone or format. Rarely the first answer; retrieval usually solves the problem more cheaply.'],
  ['Grounding', 'Constraining an AI system to answer from approved sources, so responses reflect your content rather than the model’s general training.'],
  ['Guardrails', 'Rules that constrain what a system may say or do — topic limits, refusal conditions, confidence thresholds and escalation triggers.'],
  ['Hallucination', 'A confident but incorrect output. Reduced substantially by grounding, confidence checks and escalation, though never eliminated entirely.'],
  ['Human in the loop', 'A design where a person reviews or approves consequential actions before they take effect.'],
  ['Inference', 'Running a trained model to produce an output. The recurring cost of an AI system in production.'],
  ['LLM', 'Large Language Model — the class of model behind most current AI agents and assistants.'],
  ['Orchestration', 'Coordinating multiple models, tools and steps into one reliable process, including retries and failure handling.'],
  ['Prompt injection', 'An attack where malicious instructions hidden in content attempt to redirect an AI system. Mitigated by treating retrieved content as data, never instructions.'],
  ['RAG', 'Retrieval-Augmented Generation — fetching relevant documents and giving them to the model so answers are grounded in your data.'],
  ['Token', 'The unit models read and bill by, roughly three-quarters of a word in English.'],
  ['Vector database', 'Storage optimised for embeddings, enabling fast semantic search over large document collections.'],
];

export const resourcesIndex = {
  path: '/resources/',
  title: 'Resources',
  description: 'Guides, case studies, webinars, templates and a plain-English AI glossary from the Orbo Flow delivery team.',
  body: `
${pageHero({
    eyebrow: 'Resources',
    title: 'Everything we have <span class="grad-text">learned</span>, written down',
    lead: 'Playbooks, case studies and reference material from real deployments. Written by the people who built them, not a content team.',
    crumbs: [{ label: 'Resources' }],
    actions: false,
  })}

<section class="section">
  <div class="wrap wrap-wide">
    ${cards(resourceTypes.map((r) => ({ ...r, href: `/resources/${r.slug}/` })), 'g-4')}
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Latest from the <span class="grad-text">blog</span>', link: { label: 'All posts', href: '/resources/blog/' } })}
    <div class="grid g-3">
      ${listings.blog.items.slice(0, 3).map((p) => `
        <article class="post reveal">
          <div class="post-cover">${icon('news')}</div>
          <div class="post-body">
            <span class="tag">${esc(p.tag)}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
            <div class="post-meta"><span>${esc(p.date)}</span><span>•</span><span>${esc(p.read)}</span></div>
          </div>
        </article>`).join('')}
    </div>
  </div>
</section>`,
};

export function resourcePage(type) {
  if (type.slug === 'glossary') {
    return {
      path: '/resources/glossary/',
      title: 'AI Glossary',
      description: 'Plain-English definitions of the AI terms that come up in real projects — agents, grounding, RAG, guardrails and more.',
      body: `
${pageHero({
        eyebrow: 'Glossary',
        title: 'AI terms, in <span class="grad-text">plain English</span>',
        lead: 'The vocabulary that comes up in real projects, defined without the marketing. If a term you need is missing, tell us and we will add it.',
        crumbs: [{ label: 'Resources', href: '/resources/' }, { label: 'Glossary' }],
        actions: false,
      })}
<section class="section">
  <div class="wrap wrap-wide">
    <div class="table-wrap reveal">
      <table>
        <thead><tr><th style="width:22%">Term</th><th>What it means</th></tr></thead>
        <tbody>${glossaryTerms.map(([t, d]) => `<tr><td><strong>${esc(t)}</strong></td><td>${esc(d)}</td></tr>`).join('')}</tbody>
      </table>
    </div>
  </div>
</section>`,
    };
  }

  const l = listings[type.slug];
  return {
    path: `/resources/${type.slug}/`,
    title: type.title,
    description: `${type.desc} ${l.lead}`,
    body: `
${pageHero({
      eyebrow: 'Resources',
      title: `${esc(type.title)}`,
      lead: l.lead,
      crumbs: [{ label: 'Resources', href: '/resources/' }, { label: type.title }],
      actions: false,
    })}

<section class="section">
  <div class="wrap wrap-wide">
    <div class="grid g-3">
      ${l.items.map((p) => `
        <article class="post reveal">
          <div class="post-cover" style="background:var(--grad-soft)">${icon(type.icon)}</div>
          <div class="post-body">
            <span class="tag">${esc(p.tag)}</span>
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.desc)}</p>
            <div class="post-meta"><span>${esc(p.date)}</span><span>•</span><span>${esc(p.read)}</span></div>
          </div>
        </article>`).join('')}
    </div>
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Keep exploring', link: { label: 'All resources', href: '/resources/' } })}
    ${cards(resourceTypes.filter((r) => r.slug !== type.slug).slice(0, 4).map((r) => ({ ...r, href: `/resources/${r.slug}/` })), 'g-4')}
  </div>
</section>`,
  };
}

export const aiTools = {
  path: '/ai-tools/',
  title: 'AI Tools & Technologies',
  description: 'The AI models, automation platforms and infrastructure Orbo Flow builds on — and how we choose between them.',
  body: `
${pageHero({
    eyebrow: 'AI Tools',
    title: 'AI Tools &amp; <span class="grad-text">Technologies</span> We Work With',
    lead: 'We are not tied to a single vendor. Each workload gets the model and platform that fits its accuracy, latency, cost and residency requirements — and we will show you the reasoning.',
    crumbs: [{ label: 'AI Tools' }],
  })}

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'How we choose', lead: 'Four factors decide the stack for any given workload. Preference is not one of them.' })}
    ${cards([
      { icon: 'target', title: 'Accuracy on your task', desc: 'We benchmark candidate models against a sample of your real data before committing. Leaderboard performance rarely predicts performance on your documents.' },
      { icon: 'clock', title: 'Latency budget', desc: 'A voice agent needs sub-second responses; an overnight batch process does not. That difference alone often decides the model.' },
      { icon: 'wallet', title: 'Cost at your volume', desc: 'We model token and infrastructure spend at projected volume, not at pilot scale, so the bill does not surprise anyone in month four.' },
      { icon: 'lock', title: 'Residency and compliance', desc: 'Where the data may be processed, which providers are acceptable to your risk team, and what you need to evidence to an auditor.' },
    ], 'g-4')}
  </div>
</section>

<section class="section section-soft">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'The stack', lead: 'What we build on most often, grouped by layer.' })}
    <div class="grid g-2">
      <div class="card card-flat reveal">
        <span class="ci-box">${icon('sparkle')}</span><h3>Models</h3>
        <p>Frontier and open models selected per workload.</p>
        <ul><li>OpenAI (GPT family)</li><li>Anthropic (Claude family)</li><li>Google (Gemini family)</li><li>Meta Llama and Mistral for self-hosted workloads</li><li>Specialist speech, vision and embedding models</li></ul>
      </div>
      <div class="card card-flat reveal">
        <span class="ci-box">${icon('workflow')}</span><h3>Automation platforms</h3>
        <p>Chosen for who will maintain the flow after handover.</p>
        <ul><li>n8n for self-hosted and complex logic</li><li>Make and Zapier for business-team ownership</li><li>Native code where reliability demands it</li><li>Temporal and queue-based orchestration at scale</li></ul>
      </div>
      <div class="card card-flat reveal">
        <span class="ci-box">${icon('cloud')}</span><h3>Cloud &amp; data</h3>
        <p>Deployed in the region your policy requires.</p>
        <ul><li>AWS, Google Cloud and Microsoft Azure</li><li>BigQuery, Snowflake, Fabric and Postgres</li><li>Vector stores: pgvector, Pinecone, Qdrant</li><li>On-premise and hybrid where needed</li></ul>
      </div>
      <div class="card card-flat reveal">
        <span class="ci-box">${icon('puzzle')}</span><h3>Business systems</h3>
        <p>The applications we integrate with most.</p>
        <ul><li>HubSpot, Salesforce, Pipedrive</li><li>Microsoft 365, Google Workspace, Slack</li><li>Xero, MYOB, NetSuite, SAP</li><li>Shopify, Zendesk, Notion, Jira</li></ul>
      </div>
    </div>
  </div>
</section>

${faqBlock([
  { q: 'Are you locked into one AI provider?', a: 'No, and we design against lock-in deliberately. Model calls sit behind an abstraction so a workload can be moved between providers without rewriting the application. Several clients run different models for different tasks in the same system.' },
  { q: 'Can we self-host the models?', a: 'Yes, where the workload suits it. Open models like Llama and Mistral run well on your own infrastructure, which some regulated clients require. The trade-off is accuracy on hard tasks and the operational burden of running GPUs — we will be straight with you about both.' },
  { q: 'Which automation platform should we use?', a: 'Mostly a question of who maintains it. If a business team will own the flow, Make or Zapier keeps them independent. If the logic is complex or volume is high, n8n or native code is more reliable and cheaper to run. We recommend based on your team, not our convenience.' },
  { q: 'What if a better model launches mid-project?', a: 'That happens roughly quarterly. Because model calls are abstracted, swapping is a configuration and re-benchmark exercise rather than a rebuild. We re-test the workloads it might improve and tell you whether it is worth switching.' },
], 'Tools and technology')}

<section class="section">
  <div class="wrap wrap-wide">
    ${secHead({ title: 'Put the stack to <span class="grad-text">work</span>', link: { label: 'All solutions', href: '/solutions/' } })}
    <div class="grid g-3">
      ${solutions.slice(0, 3).map((s) => `
        <a class="card reveal" href="/solutions/${s.slug}/">
          <span class="ci-box" style="color:${s.color}">${icon(s.icon)}</span>
          <h3>${esc(s.title)}</h3><p>${esc(s.short)}</p>
        </a>`).join('')}
    </div>
  </div>
</section>`,
};
