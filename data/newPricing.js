// Content for the live pricing page (route: /pricing, components/newpricing/*).
// This file is intentionally independent from data/pricing.js, which now only backs the archived
// /pricing-old page — nothing here is imported by, or imports from, that old page.
//
// Source: "Plan Comparison (Multiple User)" tab of the pricing spreadsheet the plans/features
// below were transcribed from. Plans are flat, multi-seat plans (Solo / Business / Business Pro),
// unlike the old page's per-user Growth/Advance pricing — each plan includes a fixed number of
// user seats (see each plan's first feature bullet and the "Total Users/Seats" row in the table).

export const NP_HERO = {
  titleLead: 'Plans Built for ',
  titleAccent: 'Smarter Customer Engagement',
  subtitle:
    'Capture leads, automate follow-ups, and manage WhatsApp, Email, Voice calls and SMS in one platform without switching tools.',
  subtext: 'Upgrade As You Grow. No Hidden Costs.',
};

// Prices per region + billing cycle. Annual is the actual yearly total the sheet gives (equivalent
// to 10 months — "2 months free"), not a monthly-equivalent figure like the live page uses.
// `annualOriginal` is the un-discounted total (monthly × 12) shown struck through next to the
// annual price, so the "2 months free" saving is visible rather than just stated.
export const NP_PRICES = {
  india: {
    monthly: { solo: '₹1,799', business: '₹5,999', businessPro: '₹12,999' },
    annual: { solo: '₹17,990', business: '₹59,990', businessPro: '₹1,29,990' },
    annualOriginal: { solo: '₹21,588', business: '₹71,988', businessPro: '₹1,55,988' },
  },
  international: {
    monthly: { solo: '$19', business: '$65', businessPro: '$135' },
    annual: { solo: '$190', business: '$650', businessPro: '$1,350' },
    annualOriginal: { solo: '$228', business: '$780', businessPro: '$1,620' },
  },
};

export const NP_BILLING_LINES = {
  monthly: 'Billed monthly',
  annual: 'Billed yearly · 2 months free',
};

export const NP_REGION_NOTE = 'Displayed INR prices are estimates for reference only. All payments are billed in USD.';

// The actual signup app.
const SIGNUP_BASE_URL = 'https://crm.aitrillion.com/auth/sign-up';

/** Builds the "Try ... For Free" signup link for a plan, matching cycle to the ?cycle= param. */
export function buildNewSignupHref(productId, cycle) {
  const params = new URLSearchParams({ product_id: productId, cycle: cycle === 'annual' ? 'yearly' : 'monthly' });
  return `${SIGNUP_BASE_URL}?${params.toString()}`;
}

// Plan cards, left to right — Solo, Business, Business Pro (ascending price, matching the sheet's
// own column order). `priceKey` looks the price up in NP_PRICES. The always-free tier is NOT a
// card here — same as before, it's promoted separately via NewStartFreeStrip. The Custom plan is
// no longer part of this row either — it's a single full-width strip below (NP_CUSTOM_PLAN),
// same treatment as the free strip, rather than a 4th card.
export const NP_PLANS = [
  {
    key: 'solo',
    name: 'Solo',
    priceKey: 'solo',
    signupProductId: 'prod_Uy471v1F9tH72j',
    tagline: 'Individual users who want AI-powered WhatsApp, Email and Voice in one simple plan.',
    ctaLabel: 'Try Solo For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in solo',
    features: [
      '1 User/Seat',
      'Full CRM + 8 Custom Modules',
      'Up to 5,000 Contacts',
      'Email, WhatsApp, Voice & Team Inbox',
      'AI Agents & Lead Qualification',
      'AI Summaries & Inbox Intelligence',
      'Ads Lead Sync & Spend Analytics',
      'Mobile App & Calling',
      'Custom Dashboards & Reports',
      'WhatsApp & Email Sender',
      'Invoicing & Online Payments',
    ],
  },
  {
    key: 'business',
    name: 'Business',
    priceKey: 'business',
    signupProductId: 'prod_Uy479QR3Yh3jJ8',
    tagline: 'Growing teams who need multi-user collaboration with WhatsApp, Email and Voice built in.',
    ctaLabel: 'Try Business For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in business',
    features: [
      'Up to 10 Users/Seats',
      'Full CRM + 10 Custom Modules',
      'Up to 20,000 Contacts',
      'Email, WhatsApp, Voice & Team Inbox',
      'AI Agents & Lead Qualification',
      'AI Summaries & Inbox Intelligence',
      'Ads Lead Sync & Spend Analytics',
      'Mobile App & Calling',
      'Custom Dashboards & Reports',
      'Multiple WhatsApp & Email Senders',
      'Invoicing & Online Payments',
    ],
  },
  {
    key: 'businessPro',
    name: 'Business Pro',
    priceKey: 'businessPro',
    signupProductId: 'prod_Uy47HFHg9WE4nb',
    tagline: 'Larger teams who want higher limits, priority support and full API access.',
    ctaLabel: 'Try Business Pro For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in business pro',
    features: [
      'Up to 20 Users/Seats',
      'Full CRM + 15 Custom Modules',
      'Up to 50,000 Contacts',
      'Email, WhatsApp, Voice & Team Inbox',
      'AI Agents & Lead Qualification',
      'AI Summaries & Inbox Intelligence',
      'Ads Lead Sync & Spend Analytics',
      'Mobile App & Calling',
      'Custom Dashboards & Reports',
      'Multiple WhatsApp & Email Senders',
      'Invoicing & Online Payments',
      'REST API & MCP Access',
    ],
  },
];

// Rendered as a single full-width strip below the plan cards (NewCustomPlanStrip), the same
// treatment as the always-free tier — not a 4th card in the grid above.
export const NP_CUSTOM_PLAN = {
  title: 'Need a Custom Plan?',
  description: 'Looking for a custom plan? Or not sure which one fits your needs? Get custom user, contact and API limits built around your business.',
  features: [
    'Custom limits for user/seats',
    'Custom limits for all module',
    'Custom integrations',
    'All features access',
    'Dedicated infrastructure',
    'White-glove onboarding',
    'Priority support',
  ],
  ctaLabel: 'Contact Us Now',
  ctaHref: '/contact-us',
};

export const NP_START_FREE = {
  title: 'Start Free with AiEngage CRM',
  descriptionLead: 'Use AiEngage CRM ',
  descriptionBold: 'free for up to 100 Active Contacts (per user)',
  descriptionTail: ' and explore powerful growth tools for your business.',
  ctaLabel: 'Start free',
  ctaHref: 'https://crm.aitrillion.com/auth/sign-up',
};

export const NP_COMPARISON = {
  titleLead: 'Why AiEngage is a ',
  titleAccent: 'Smarter Alternative',
  titleTail: ' to Traditional CRMs',
  aiList: [
    'One platform for communication, data, and workflows',
    'Unified WhatsApp, Email, Voice calls and SMS interactions',
    'Transparent pricing with no hidden costs',
    'Automated follow-ups and engagement',
    'Complete visibility across every customer interaction',
  ],
  tradList: [
    'Multiple tools needed to manage communication and workflows',
    'Conversations scattered across channels',
    'Introduce hidden costs as usage grows',
    'Depend heavily on manual follow-ups',
    'Limited visibility into the customer journey',
  ],
  ctaLabel: 'Try AiEngage Free',
  ctaHref: 'https://crm.aitrillion.com/auth/sign-up',
};

export const NP_PLATFORM = {
  eyebrow: 'ALL-IN-ONE-PLATFORM',
  heading: 'Get Everything You Need in One Platform',
  whatsappTile: {
    icon: 'chat',
    title: 'WhatsApp Automation',
    description: 'Send personalized messages at scale, run automated sequences, and manage two-way conversations with ease.',
    checks: ['Bulk messaging', 'Automation', '2-way chat'],
  },
  tiles: [
    {
      icon: 'person_add',
      title: 'Lead Capture and Management',
      body: 'Capture every inquiry from WhatsApp, your website, and social platforms, and keep everything organised in one place.',
    },
    {
      icon: 'account_circle',
      title: 'Customer Data Management',
      body: 'Bring every interaction together into a single customer view so you always have full context before you engage.',
    },
    {
      icon: 'account_tree',
      title: 'Sales Pipeline Management',
      body: 'Track every deal across stages with complete visibility so your team can close deals 2x faster.',
    },
    {
      icon: 'build',
      title: 'Built in Tools',
      body: 'Run campaigns, manage leads, and automate workflows, book appointments without any additional software.',
      highlight: true,
    },
    {
      icon: 'forum',
      title: 'Multi-Channel Engagement',
      body: 'Manage WhatsApp, email, and SMS from one platform while delivering a consistent experience across every touchpoint.',
    },
    {
      icon: 'auto_awesome',
      title: 'Smart AI',
      body: 'Understand which leads are most likely to convert, when to engage them, and what actions will drive better results.',
    },
  ],
};

export const NP_FAQS = [
  {
    q: 'Can I upgrade or downgrade my plan anytime?',
    a: 'Yes, you can change your plan at any time based on your needs.',
  },
  {
    q: 'Is there a free trial available?',
    a: 'You can start with the free plan and upgrade as your business grows.',
  },
  {
    q: 'Are there any hidden costs?',
    a: 'No, all pricing is transparent with no hidden charges.',
  },
  {
    q: 'What happens if I exceed my limits?',
    a: 'You can upgrade your plan to continue using all features without interruption.',
  },
];

export const NP_FINAL_CTA = {
  titleLead: 'Ready To Take Your Business To ',
  titleAccent: 'The Next Level?',
  description:
    'Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM.',
};

// Full plan-comparison table shown in the "See all features" modal: Solo vs Business vs Business
// Pro, grouped by capability category. A cell value is either a string (limit/quota), `true`
// (check mark) or `false` (dash — not included). The last category, "Extra Addons", is flat
// add-on pricing that applies on top of any plan (the sheet gives one USD price per addon, no
// plan/region split, so the same value is repeated across columns) — NewPricingFeatureModal
// renders it with a light highlight to set it apart from the plan-limit categories above it.
export const NP_FEATURE_TABLE = [
  {
    icon: 'dashboard',
    title: 'Plan Limits & Capacity',
    rows: [
      { label: 'Total Users/Seats', sub: null, solo: '1', business: 'Up to 10', businessPro: 'Up to 20' },
      { label: 'Total contacts', sub: 'Active + Inactive', solo: '5,000', business: '20,000', businessPro: '50,000' },
      { label: 'File storage', sub: null, solo: '2 GB', business: '5 GB', businessPro: '10 GB' },
      { label: 'API calls / month', sub: null, solo: '5,000', business: '10,000', businessPro: '25,000' },
      { label: 'Email sends / month', sub: null, solo: '2,500', business: '5,000', businessPro: '10,000' },
      { label: 'Free AI credits', sub: null, solo: '$5', business: '$5', businessPro: '$10' },
      { label: 'WhatsApp messages / month', sub: null, solo: false, business: false, businessPro: false },
    ],
  },
  {
    icon: 'database',
    title: 'CRM Core & Data Model',
    rows: [
      { label: 'Custom modules', sub: 'Build your own entities beyond Leads', solo: '8', business: '10', businessPro: '15' },
      { label: 'Custom fields', sub: 'Per module', solo: '45', business: '50', businessPro: '80' },
      { label: 'Custom list views', sub: null, solo: '30', business: '40', businessPro: '100' },
      { label: 'Drag-and-drop layout builder', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Activity log & audit trail', sub: 'Field-level before/after history', solo: true, business: true, businessPro: true },
      { label: 'Global search (Ctrl+K)', sub: 'Cross-module record search', solo: true, business: true, businessPro: true },
      { label: 'Sub-modules', sub: 'Tasks, Notes, Calls', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'group',
    title: 'Users, Roles & Permissions',
    rows: [
      { label: 'Roles', sub: 'User role definitions', solo: '1', business: '12', businessPro: '30' },
      { label: 'Profiles', sub: 'Permission sets', solo: '1', business: '12', businessPro: '30' },
      { label: 'Sharing rules', sub: 'Record-level access control', solo: '1', business: '12', businessPro: '30' },
      { label: 'Teams', sub: 'Group users into teams', solo: '1', business: '10', businessPro: '20' },
    ],
  },
  {
    icon: 'mail',
    title: 'Email & WhatsApp Marketing',
    rows: [
      { label: 'Unified email + WhatsApp campaign builder', sub: 'Build and send cross-channel campaigns', solo: true, business: true, businessPro: true },
      { label: 'Campaign scheduling, cancel, reschedule', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Test send & live preview', sub: 'No recipient before send', solo: true, business: true, businessPro: true },
      { label: 'Audience estimation', sub: 'Pre-send recipient count', solo: true, business: true, businessPro: true },
      { label: 'Campaign tagging, duplication, archiving', sub: 'Organise & reuse campaigns', solo: true, business: true, businessPro: true },
      { label: 'Bulk delete campaigns', sub: null, solo: true, business: true, businessPro: true },
      { label: 'WhatsApp templates', sub: null, solo: '50', business: '100', businessPro: '250' },
      { label: 'Email templates', sub: null, solo: '50', business: '100', businessPro: '250' },
      { label: 'Multiple WhatsApp sender', sub: null, solo: '1', business: '3', businessPro: '5' },
      { label: 'Multi-sender email accounts', sub: 'Connected sending addresses', solo: '5', business: '10', businessPro: '20' },
      { label: 'Domain management', sub: 'DKIM / SPF / DMARC', solo: true, business: true, businessPro: true },
      { label: 'Floating compose modal', sub: 'Send-style email compose from anywhere', solo: true, business: true, businessPro: true },
      { label: 'Email sharing permissions', sub: 'Shared sending accounts', solo: true, business: true, businessPro: true },
      { label: 'WhatsApp Forms', sub: 'Interactive forms inside WhatsApp chats', solo: true, business: true, businessPro: true },
      { label: 'Link WhatsApp Forms to templates', sub: 'Attach forms to message templates', solo: true, business: true, businessPro: true },
      { label: 'WhatsApp inbound trigger for workflows', sub: 'Auto-reply based on incoming messages', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'forum',
    title: 'Team Inbox (WhatsApp Conversations)',
    rows: [
      { label: 'Shared team inbox for WhatsApp', sub: 'One inbox, whole team', solo: true, business: true, businessPro: true },
      { label: 'Initiate outbound conversations', sub: 'Start new WhatsApp chats from CRM', solo: true, business: true, businessPro: true },
      { label: 'Two-way live chat', sub: 'Real-time messaging', solo: true, business: true, businessPro: true },
      { label: 'Assign chats to user', sub: 'Route conversations to team members', solo: true, business: true, businessPro: true },
      { label: 'Chat status', sub: 'Open, Pending, Resolved, Closed', solo: true, business: true, businessPro: true },
      { label: 'Chat tagging', sub: 'Categorize conversations with labels', solo: true, business: true, businessPro: true },
      { label: 'Internal notes on conversations', sub: 'Private notes visible only to team', solo: true, business: true, businessPro: true },
      { label: 'Advanced chat filters', sub: 'Filter by status, tag, assignee, channel', solo: true, business: true, businessPro: true },
      { label: 'Media sharing', sub: 'Images, docs, voice notes', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'call',
    title: 'Voice Calling',
    rows: [
      { label: 'Connect multiple voice providers', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Connected phone numbers', sub: null, solo: '1', business: '5', businessPro: '10' },
      { label: 'Click-to-call', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Assign numbers to agents', sub: 'Incoming & outgoing routing', solo: true, business: true, businessPro: true },
      { label: 'Automatic call logs with recordings', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Call transcripts', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Simultaneous & sequential ringing', sub: 'For incoming calls', solo: true, business: true, businessPro: true },
      { label: 'First-owner priority routing', sub: 'Route incoming calls to record owner first', solo: true, business: true, businessPro: true },
      { label: 'Custom greeting messages', sub: null, solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'description',
    title: 'Quotes & Invoices',
    rows: [
      { label: 'Create quotes & invoices', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Send invoices & quotations via email', sub: null, solo: true, business: true, businessPro: true },
      { label: 'Export PDF', sub: 'Invoice & quote downloads', solo: true, business: true, businessPro: true },
      { label: 'Payment gateway integration', sub: 'Collect invoice payments online', solo: true, business: true, businessPro: true },
      { label: 'Convert quote → invoice', sub: 'One-click conversion', solo: true, business: true, businessPro: true },
      { label: 'Quote acceptance notifications', sub: null, solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'bar_chart',
    title: 'Campaign Analytics',
    rows: [
      { label: 'Real-time analytics dashboard', sub: 'Live campaign performance view', solo: true, business: true, businessPro: true },
      { label: 'Opens, clicks, bounces, unsubscribes', sub: 'Per-campaign delivery metrics', solo: true, business: true, businessPro: true },
      { label: 'Top links card', sub: 'Most-clicked URLs', solo: true, business: true, businessPro: true },
      { label: 'Per-recipient drill-down', sub: 'Delivery / open / click per contact', solo: true, business: true, businessPro: true },
      { label: 'CSV recipient export', sub: 'Download recipient lists', solo: true, business: true, businessPro: true },
      { label: 'Side-by-side Email + WhatsApp preview', sub: 'Message tab in analytics', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'groups',
    title: 'Audience & Segmentation',
    rows: [
      { label: 'Dynamic segments', sub: 'Filter DSL auto-updating segments', solo: '30', business: '50', businessPro: '150' },
      { label: 'Live segment preview', sub: 'Count + sample contacts before saving', solo: true, business: true, businessPro: true },
      { label: 'Segment members view', sub: 'Drill into member detail', solo: true, business: true, businessPro: true },
      { label: 'Segment activities timeline', sub: 'View campaigns / events targeting it', solo: true, business: true, businessPro: true },
      { label: 'Segment KPIs', sub: 'Count, growth, churn monitoring', solo: true, business: true, businessPro: true },
      { label: 'Segment refresh', sub: 'Force recompute on demand', solo: true, business: true, businessPro: true },
      { label: 'Segment cloning & CSV export', sub: 'Duplicate segment or export members', solo: true, business: true, businessPro: true },
      { label: 'Static contact lists', sub: 'Manual list management', solo: true, business: true, businessPro: true },
      { label: 'Add to campaign by list', sub: 'Target a list when sending', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'assignment',
    title: 'Web Forms & Lead Capture',
    rows: [
      { label: 'Webforms', sub: 'Embeddable lead capture forms', solo: '10', business: '15', businessPro: '30' },
      { label: 'Webform approval flow', sub: 'Review submissions before saving', solo: true, business: true, businessPro: true },
      { label: 'Webform auto-responders', sub: 'Auto email on form submission', solo: true, business: true, businessPro: true },
      { label: 'WhatsApp Flow Forms', sub: 'Native in-chat form capture', solo: true, business: true, businessPro: true },
      { label: 'Flow form submissions tracking', sub: 'Track WhatsApp form responses', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'hub',
    title: 'Lead Source Integrations',
    rows: [
      { label: 'Meta Lead Ads', sub: 'Facebook / Instagram lead forms', solo: true, business: true, businessPro: true },
      { label: 'Google Lead Forms', sub: 'Webhook-based ingestion', solo: true, business: true, businessPro: true },
      { label: 'Integration accounts management', sub: 'Manage connected source accounts', solo: true, business: true, businessPro: true },
      { label: 'No-code field mapping UI', sub: 'Map source fields without code', solo: true, business: true, businessPro: true },
      { label: 'Per-source ingestion sync logs', sub: 'Success / failure per run', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'ads_click',
    title: 'Ads & Analytics',
    rows: [
      { label: 'Meta Lead Ads', sub: 'Facebook / Instagram lead forms', solo: true, business: true, businessPro: true },
      { label: 'Number of Ads Business Sync', sub: null, solo: '2', business: '3', businessPro: '5' },
      { label: 'Custom Ads Spents', sub: null, solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'bolt',
    title: 'Automation & Workflows',
    rows: [
      { label: 'Active workflows', sub: null, solo: '30', business: '50', businessPro: '100' },
      { label: 'Scheduled / date-based actions', sub: null, solo: '8', business: '10', businessPro: '20' },
      { label: 'Assignment rules', sub: 'Auto-route incoming leads', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'insert_chart',
    title: 'Dashboards, Reports & Components',
    rows: [
      { label: 'Custom reports', sub: null, solo: '15', business: '25', businessPro: '50' },
      { label: 'Custom dashboards', sub: null, solo: '15', business: '25', businessPro: '50' },
      { label: 'No-code report builder', sub: 'KPIs, charts, pivots', solo: true, business: true, businessPro: true },
      { label: '5 chart strategies', sub: 'Chart, Comparator, KPI and more', solo: true, business: true, businessPro: true },
      { label: 'Saved reports', sub: 'Share with team', solo: true, business: true, businessPro: true },
      { label: 'Drill-down', sub: 'Click any cell to underlying records', solo: true, business: true, businessPro: true },
      { label: 'Per-dashboard sharing', sub: 'Share with users or team', solo: true, business: true, businessPro: true },
      { label: 'Components per dashboard', sub: 'Org level', solo: '20', business: '20', businessPro: '20' },
      { label: 'Chart components', sub: 'Org level', solo: '100', business: '100', businessPro: '150' },
      { label: 'Comparator components', sub: 'Org level', solo: '15', business: '15', businessPro: '25' },
      { label: 'KPI components', sub: 'Org level', solo: '120', business: '120', businessPro: '150' },
      { label: 'Funnel components', sub: 'Org level', solo: '10', business: '10', businessPro: '15' },
    ],
  },
  {
    icon: 'notifications',
    title: 'Notifications & Templates',
    rows: [
      { label: 'Email notifications / month', sub: null, solo: '1,000', business: '1,500', businessPro: '4,000' },
      { label: 'Public template gallery', sub: 'Browse and clone community templates', solo: true, business: true, businessPro: true },
      { label: 'One-click template clone', sub: 'Copy any gallery template to your org', solo: true, business: true, businessPro: true },
      { label: 'Publish to public library', sub: 'Make templates publicly available', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'shield',
    title: 'Compliance & Opt-In',
    rows: [
      { label: 'Email opt-out service', sub: 'One-click unsubscribe handling', solo: true, business: true, businessPro: true },
      { label: 'WhatsApp opt-in / opt-out', sub: 'GDPR + Meta compliant', solo: true, business: true, businessPro: true },
      { label: 'Cross-channel unsubscribe service', sub: 'Synced across email and WhatsApp', solo: true, business: true, businessPro: true },
      { label: 'Token-protected public unsubscribe page', sub: 'Public page embedded in footers', solo: true, business: true, businessPro: true },
    ],
  },
  {
    icon: 'code',
    title: 'Developer, API & MCP',
    rows: [
      { label: 'Public REST API', sub: 'Full CRM access via API', solo: false, business: false, businessPro: true },
      { label: 'Public MCP Access', sub: null, solo: false, business: false, businessPro: true },
      { label: 'Bearer token authentication', sub: 'Separate from dashboard login', solo: false, business: false, businessPro: true },
      { label: 'Version discovery endpoint', sub: 'Forward compatibility API', solo: false, business: false, businessPro: true },
      { label: 'Batch operations', sub: 'Bulk create / update / delete via API', solo: false, business: false, businessPro: true },
      { label: 'Search endpoint', sub: 'POST filter DSL', solo: false, business: false, businessPro: true },
      { label: 'Webhooks', sub: 'Real-time event push notifications', solo: false, business: false, businessPro: true },
    ],
  },
  {
    icon: 'support_agent',
    title: 'Support',
    rows: [
      { label: 'Email support', sub: '24-hour response time', solo: true, business: true, businessPro: true },
      { label: 'Priority chat support', sub: 'Faster response via live chat', solo: false, business: false, businessPro: true },
      { label: 'Phone support', sub: 'Direct call access to support team', solo: false, business: false, businessPro: false },
      { label: 'Dedicated success manager', sub: 'Named point of contact', solo: false, business: false, businessPro: false },
      { label: 'Onboarding & training session', sub: 'Guided setup call', solo: false, business: false, businessPro: false },
      { label: 'SLA guarantee', sub: null, solo: false, business: false, businessPro: false },
    ],
  },
  {
    icon: 'add_circle',
    title: 'Extra Addons',
    highlight: true,
    rows: [
      { label: '📱 Extra WhatsApp Number', sub: null, solo: '$10/month', business: '$10/month', businessPro: '$10/month' },
      { label: '👥 Extra 5,000 Contacts', sub: null, solo: '$5/month', business: '$5/month', businessPro: '$5/month' },
      { label: '💾 Extra 20 GB Storage', sub: null, solo: '$6/month', business: '$6/month', businessPro: '$6/month' },
      { label: '⚙️ Standard Setup & Training', sub: null, solo: '$99 One-Time', business: '$99 One-Time', businessPro: '$99 One-Time' },
      { label: '🚀 Premium AI Automation Setup', sub: null, solo: '$249 One-Time', business: '$249 One-Time', businessPro: '$249 One-Time' },
      { label: '🏆 Done-for-You CRM Implementation', sub: null, solo: '$499 One-Time', business: '$499 One-Time', businessPro: '$499 One-Time' },
    ],
  },
];
