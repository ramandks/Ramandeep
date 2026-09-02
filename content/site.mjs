/* Shared site data: brand, navigation, taxonomies. */

export const brand = {
  name: 'Orbo Flow',
  tagline: 'AI Agents. Intelligent Automation. Built to Scale. Anywhere.',
  blurb: 'AI Agents, Intelligent Automation. Built to Scale. Anywhere.',
  email: 'hello@orboflow.com',
  phone: '0800 ORBO FLOW',
  hq: 'New Zealand',
  url: 'https://www.orboflow.com',
};

/* ---------- Solutions ---------- */
export const solutions = [
  {
    slug: 'ai-agents', title: 'AI Agents', icon: 'bot', tint: 'tint-violet',
    short: 'Conversational AI Agents that think, learn and act like your best team members.',
    blurb: 'Autonomous agents that handle conversations, research and multi-step work across your channels — day and night.',
    color: '#7C3AED',
  },
  {
    slug: 'ai-automation', title: 'AI Automation', icon: 'gears', tint: 'tint-indigo',
    short: 'Automate repetitive workflows from start to end with zero manual effort.',
    blurb: 'End-to-end workflow automation that connects your apps, moves your data and removes the busywork.',
    color: '#5145E5',
  },
  {
    slug: 'voice-ai', title: 'Voice AI', icon: 'wave', tint: 'tint-pink',
    short: 'AI voice agents for calls, support, bookings and customer interactions.',
    blurb: 'Natural-sounding voice agents that answer, qualify, book and escalate — on every call, every time.',
    color: '#FF3D9A',
  },
  {
    slug: 'data-analytics', title: 'Data & Analytics', icon: 'chart', tint: 'tint-blue',
    short: 'Turn data into insights and make smarter decisions.',
    blurb: 'Unify your data, surface what matters and put decision-ready insight in front of the right people.',
    color: '#2E7CF6',
  },
  {
    slug: 'ai-consulting', title: 'AI Consulting', icon: 'bulb', tint: 'tint-amber',
    short: 'Strategy, implementation and ongoing support to scale your AI journey.',
    blurb: 'Roadmaps, governance and hands-on delivery from teams who have shipped AI into production.',
    color: '#F59E0B',
  },
  {
    slug: 'integrations', title: 'Integrations', icon: 'puzzle', tint: 'tint-teal',
    short: 'Connect your apps, tools and systems seamlessly.',
    blurb: 'Secure, reliable connections between the systems you already run — CRM, ERP, comms and everything between.',
    color: '#14B8A6',
  },
];

/* ---------- Industries ---------- */
export const industries = [
  { slug: 'real-estate', title: 'Real Estate', icon: 'building', color: '#FF3D9A',
    pain: 'Slow lead response, manual listing admin and fragmented buyer follow-up.',
    wins: ['Instant enquiry response across portals and web', 'Automated appraisal and listing paperwork', 'Buyer matching and nurture until they transact'] },
  { slug: 'finance-banking', title: 'Finance & Banking', icon: 'wallet', color: '#2E7CF6',
    pain: 'Heavy compliance load, manual document review and slow onboarding.',
    wins: ['KYC and document extraction in minutes, not days', 'Always-on service agents for account queries', 'Audit-ready logs on every automated decision'] },
  { slug: 'insurance', title: 'Insurance', icon: 'shield', color: '#5145E5',
    pain: 'Claims backlogs, repetitive triage and inconsistent policy servicing.',
    wins: ['Automated first-notice-of-loss intake and triage', 'Policy Q&A agents for brokers and customers', 'Fraud signals surfaced early from claim patterns'] },
  { slug: 'healthcare', title: 'Healthcare', icon: 'heart', color: '#FF3D9A',
    pain: 'Admin overload, missed appointments and stretched front-desk teams.',
    wins: ['24/7 booking, reminders and rescheduling', 'Clinical and billing paperwork automation', 'Privacy-first design with regional data residency'] },
  { slug: 'retail-ecommerce', title: 'Retail & eCommerce', icon: 'cart', color: '#E040A0',
    pain: 'Support spikes, cart abandonment and manual catalogue upkeep.',
    wins: ['Order, returns and WISMO agents on every channel', 'Catalogue enrichment and pricing automation', 'Personalised recovery journeys that convert'] },
  { slug: 'hospitality', title: 'Hospitality', icon: 'bed', color: '#14B8A6',
    pain: 'Round-the-clock guest requests with limited overnight staff.',
    wins: ['Voice and chat concierge in multiple languages', 'Direct-booking capture and upsell flows', 'Automated review response and recovery'] },
  { slug: 'travel-tourism', title: 'Travel & Tourism', icon: 'plane', color: '#38BDF8',
    pain: 'Seasonal demand swings and complex itinerary changes.',
    wins: ['Itinerary changes handled without a queue', 'Multilingual pre-trip and in-trip support', 'Dynamic packaging and quote generation'] },
  { slug: 'education', title: 'Education', icon: 'cap', color: '#7C3AED',
    pain: 'Enrolment admin, student queries and reporting overhead.',
    wins: ['Enrolment and enquiry agents for every intake', 'Automated attendance, reporting and reminders', 'Learning support assistants for students and staff'] },
  { slug: 'manufacturing', title: 'Manufacturing', icon: 'factory', color: '#5B6478',
    pain: 'Disconnected shop-floor data and manual production paperwork.',
    wins: ['Quote-to-order automation across systems', 'Maintenance and quality insight from sensor data', 'Supplier comms handled by agents'] },
  { slug: 'construction', title: 'Construction', icon: 'crane', color: '#F59E0B',
    pain: 'Site paperwork, variation tracking and slow subcontractor comms.',
    wins: ['Automated RFI, variation and compliance capture', 'Estimating support from historical project data', 'Subcontractor onboarding and reminders'] },
  { slug: 'logistics-supply-chain', title: 'Logistics & Supply Chain', icon: 'truck', color: '#2E7CF6',
    pain: 'Exception handling, track-and-trace calls and manual scheduling.',
    wins: ['Proactive delay detection and customer updates', 'Track-and-trace agents that deflect calls', 'Freight documentation automated end to end'] },
  { slug: 'automotive', title: 'Automotive', icon: 'car', color: '#1C2338',
    pain: 'Service bookings, parts enquiries and lead follow-up leakage.',
    wins: ['Service booking and reminder agents', 'Instant trade-in and finance pre-qualification', 'Parts and stock enquiries answered instantly'] },
  { slug: 'legal-services', title: 'Legal Services', icon: 'scale', color: '#5145E5',
    pain: 'Document-heavy processes and non-billable admin time.',
    wins: ['Contract review and clause extraction assistants', 'Client intake and conflict checks automated', 'Matter updates drafted from your systems'] },
  { slug: 'recruitment', title: 'Recruitment', icon: 'users', color: '#14B8A6',
    pain: 'High-volume screening and slow candidate response times.',
    wins: ['Screening and shortlisting in minutes', 'Interview scheduling that never drops a candidate', 'Candidate and client nurture on autopilot'] },
  { slug: 'marketing-agencies', title: 'Marketing Agencies', icon: 'send', color: '#FF3D9A',
    pain: 'Reporting overhead and thin margins on repeatable work.',
    wins: ['Client reporting generated automatically', 'Content and creative production assistants', 'Lead routing and qualification for every client'] },
  { slug: 'saas-technology', title: 'SaaS & Technology', icon: 'cloud', color: '#2E7CF6',
    pain: 'Support scale, onboarding friction and churn signals missed.',
    wins: ['Tier-1 support agents grounded in your docs', 'Onboarding and activation journeys automated', 'Usage-based churn alerts routed to CS'] },
  { slug: 'government', title: 'Government', icon: 'landmark', color: '#5B6478',
    pain: 'Citizen service demand under fixed budgets and strict rules.',
    wins: ['Accessible, multilingual citizen service agents', 'Form and case-file processing automation', 'Full auditability and data-residency controls'] },
  { slug: 'energy-utilities', title: 'Energy & Utilities', icon: 'bolt', color: '#F59E0B',
    pain: 'Outage surges, billing disputes and field-service coordination.',
    wins: ['Outage and billing agents that absorb peaks', 'Field job dispatch and status automation', 'Consumption insight for customers and ops'] },
  { slug: 'agriculture', title: 'Agriculture', icon: 'leaf', color: '#22C55E',
    pain: 'Seasonal labour, compliance records and market volatility.',
    wins: ['Compliance and traceability records automated', 'Yield and input insight from farm data', 'Supplier and buyer comms handled by agents'] },
  { slug: 'telecommunications', title: 'Telecommunications', icon: 'antenna', color: '#38BDF8',
    pain: 'High support volume and complex plan and device queries.',
    wins: ['Plan, billing and device agents across channels', 'Provisioning and fault workflows automated', 'Churn-risk detection wired into retention'] },
  { slug: 'media-entertainment', title: 'Media & Entertainment', icon: 'film', color: '#E040A0',
    pain: 'Content volume, rights admin and audience engagement at scale.',
    wins: ['Metadata, tagging and archive search automation', 'Audience engagement and moderation agents', 'Rights and royalty workflows streamlined'] },
  { slug: 'professional-services', title: 'Professional Services', icon: 'briefcase', color: '#5145E5',
    pain: 'Manual reporting, proposal writing and time capture.',
    wins: ['Proposal and report drafting from your data', 'Client onboarding and comms automated', 'Time and billing reconciliation assistants'] },
  { slug: 'non-profit', title: 'Non-Profit Organizations', icon: 'handHeart', color: '#14B8A6',
    pain: 'Small teams carrying heavy admin and donor management.',
    wins: ['Donor and volunteer engagement agents', 'Grant reporting and acquittal automation', 'Impact dashboards built from existing data'] },
];

export const moreIndustries = { slug: 'all', title: 'And Many More…', icon: 'grid', color: '#7C3AED' };

/* ---------- Automation journey ---------- */
export const journey = [
  { icon: 'target',  title: 'Capture Leads',       desc: 'From forms, ads, chats & calls',      color: '#2E7CF6' },
  { icon: 'filter',  title: 'Qualify Automatically', desc: 'AI scores & qualifies leads',       color: '#7C3AED' },
  { icon: 'route',   title: 'Route & Assign',      desc: 'Send to the right person or team',    color: '#FF3D9A' },
  { icon: 'send',    title: 'Engage & Nurture',    desc: 'AI + automation keep in touch',       color: '#14B8A6' },
  { icon: 'cart',    title: 'Convert & Deliver',   desc: 'Close deals & fulfil promises',       color: '#F59E0B' },
  { icon: 'gauge',   title: 'Report & Improve',    desc: 'AI insights to optimise results',     color: '#5145E5' },
];

/* ---------- Technology partners ---------- */
export const aiModels = [
  { name: 'OpenAI', icon: 'sparkle' }, { name: 'ChatGPT', icon: 'bot' },
  { name: 'Claude', icon: 'star' }, { name: 'Gemini', icon: 'sparkle' },
  { name: 'Microsoft Copilot', icon: 'cloud' }, { name: 'Perplexity', icon: 'search' },
  { name: 'Midjourney', icon: 'film' }, { name: 'Mistral AI', icon: 'bolt' },
  { name: 'Llama', icon: 'layers' }, { name: 'DALL·E', icon: 'sparkle' },
  { name: 'And More…', icon: 'grid' },
];

export const platforms = [
  { name: 'Make', icon: 'workflow' }, { name: 'Zapier', icon: 'bolt' },
  { name: 'n8n', icon: 'route' }, { name: 'HubSpot', icon: 'gauge' },
  { name: 'Salesforce', icon: 'cloud' }, { name: 'Slack', icon: 'send' },
  { name: 'Notion', icon: 'file' }, { name: 'Shopify', icon: 'shop' },
  { name: 'Microsoft 365', icon: 'grid' }, { name: 'And More…', icon: 'plus' },
];

export const cloudPartners = [
  { name: 'AWS Partner', icon: 'cloud' },
  { name: 'Google Cloud Partner', icon: 'cloud' },
  { name: 'Microsoft Solutions Partner', icon: 'grid' },
  { name: 'OpenAI Partner', icon: 'sparkle' },
];

export const poweredBy = [
  { name: 'OpenAI', icon: 'sparkle' }, { name: 'ANTHROPIC', icon: 'star' },
  { name: 'Google Cloud', icon: 'cloud' }, { name: 'Microsoft', icon: 'grid' },
  { name: 'AWS', icon: 'layers' }, { name: 'Meta AI', icon: 'globe' },
  { name: 'Gemini', icon: 'sparkle' },
];

/* ---------- Resources ---------- */
export const resourceTypes = [
  { slug: 'blog', title: 'Blog', icon: 'news', desc: 'Practical writing on agents, automation and applied AI.' },
  { slug: 'guides', title: 'Guides', icon: 'book', desc: 'Step-by-step playbooks for planning and rolling out AI.' },
  { slug: 'webinars', title: 'Webinars', icon: 'video', desc: 'Live and on-demand sessions with our delivery team.' },
  { slug: 'case-studies', title: 'Case Studies', icon: 'award', desc: 'Real deployments, real numbers, real timelines.' },
  { slug: 'templates', title: 'Templates', icon: 'file', desc: 'Ready-made automation blueprints you can adapt.' },
  { slug: 'use-cases', title: 'Use Cases', icon: 'target', desc: 'Where AI pays back fastest, by function and industry.' },
  { slug: 'glossary', title: 'Glossary', icon: 'search', desc: 'Plain-English definitions for the AI terms that matter.' },
];

export const companyPages = [
  { slug: 'about', title: 'About Us', icon: 'users', desc: 'Who we are and why we build the way we do.' },
  { slug: 'careers', title: 'Careers', icon: 'rocket', desc: 'Build AI that ships. Remote-friendly, NZ-headquartered.' },
  { slug: 'partners', title: 'Partners', icon: 'puzzle', desc: 'Technology and delivery partners across the globe.' },
  { slug: 'contact', title: 'Contact Us', icon: 'mail', desc: 'Talk to a human — usually within one business day.' },
  { slug: 'newsroom', title: 'Newsroom', icon: 'news', desc: 'Announcements, releases and press resources.' },
];

/* ---------- Navigation ---------- */
export const nav = [
  {
    label: 'Solutions', id: 'nav-solutions', href: '/solutions/',
    items: solutions.map((s) => ({ title: s.title, href: `/solutions/${s.slug}/`, desc: s.short, icon: s.icon })),
    footer: { text: 'Not sure where to start? Book a 30-minute discovery call.', cta: { label: 'Book a Demo', href: '/book-a-demo/' } },
  },
  {
    label: 'Industries', id: 'nav-industries', href: '/industries/',
    items: industries.slice(0, 12).map((i) => ({ title: i.title, href: `/industries/${i.slug}/`, desc: i.pain, icon: i.icon })),
    footer: { text: `${industries.length} industries served across 30+ countries.`, cta: { label: 'View all industries', href: '/industries/' } },
  },
  { label: 'AI Agents', href: '/solutions/ai-agents/' },
  { label: 'Automations', href: '/solutions/ai-automation/' },
  { label: 'AI Tools', href: '/ai-tools/' },
  {
    label: 'Resources', id: 'nav-resources', href: '/resources/',
    items: resourceTypes.map((r) => ({ title: r.title, href: `/resources/${r.slug}/`, desc: r.desc, icon: r.icon })),
  },
  {
    label: 'Company', id: 'nav-company', href: '/company/about/',
    items: companyPages.map((c) => ({ title: c.title, href: `/company/${c.slug}/`, desc: c.desc, icon: c.icon })),
  },
];

/* ---------- Footer ---------- */
export const footerCols = [
  {
    title: 'Solutions',
    links: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}/` })),
  },
  {
    title: 'Industries',
    links: [
      { label: 'All Industries', href: '/industries/' },
      ...industries.slice(0, 5).map((i) => ({ label: i.title, href: `/industries/${i.slug}/` })),
    ],
  },
  {
    title: 'Resources',
    links: resourceTypes.map((r) => ({ label: r.title, href: `/resources/${r.slug}/` })),
  },
  {
    title: 'Company',
    links: [
      ...companyPages.map((c) => ({ label: c.title, href: `/company/${c.slug}/` })),
      { label: 'Book a Demo', href: '/book-a-demo/' },
    ],
  },
];
