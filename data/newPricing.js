// Content for the NEW pricing page (route: /pricing-new, components/newpricing/*).
// This file is intentionally independent from data/pricing.js — nothing here is imported by,
// or imports from, the live /pricing page. When this page is ready to go live, /pricing-new
// gets renamed to /pricing (and the old page archived) — see app/pricing-new/page.js.
//
// Source: "Plan Comparison (Multiple User)" tab of the pricing spreadsheet the plans/features
// below were transcribed from. New plans are flat, multi-seat plans (Business / Business Pro),
// unlike the live page's per-user Growth/Advance pricing — each plan includes a fixed number of
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
export const NP_PRICES = {
  india: {
    monthly: { business: '₹5,999', businessPro: '₹12,999' },
    annual: { business: '₹59,990', businessPro: '₹1,29,990' },
  },
  international: {
    monthly: { business: '$65', businessPro: '$135' },
    annual: { business: '$650', businessPro: '$1,350' },
  },
};

export const NP_BILLING_LINES = {
  monthly: 'Billed monthly',
  annual: 'Billed yearly · 2 months free',
};

export const NP_REGION_NOTE = 'Displayed INR prices are estimates for reference only. All payments are billed in USD.';

// The actual signup app. TODO: replace both signupProductId placeholders in NP_PLANS below with
// real Chargebee product IDs before this page goes live at /pricing.
const SIGNUP_BASE_URL = 'https://crm.aitrillion.com/auth/sign-up';

/** Builds the "Try ... For Free" signup link for a plan, matching cycle to the ?cycle= param. */
export function buildNewSignupHref(productId, cycle) {
  const params = new URLSearchParams({ product_id: productId });
  if (cycle === 'annual') params.set('cycle', 'yearly');
  return `${SIGNUP_BASE_URL}?${params.toString()}`;
}

// Plan cards, left to right. `priceKey` looks the price up in NP_PRICES; a plan without a
// priceKey (Custom) renders `staticPrice` instead and skips the billing-cycle line. The always-free
// tier is NOT a card here — same as the live page, it's promoted separately via NewStartFreeStrip.
export const NP_PLANS = [
  {
    key: 'business',
    name: 'Business',
    priceKey: 'business',
    signupProductId: 'REPLACE_WITH_BUSINESS_PRODUCT_ID',
    tagline: 'Growing teams who need multi-user collaboration with WhatsApp, Email and Voice built in.',
    ctaLabel: 'Try Business For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in business',
    features: [
      'Up to 10 users/seats',
      'Full CRM with 10 custom modules',
      'Email, WhatsApp, Voice, Team Inbox',
      '20,000 total contacts',
      '50 dynamic segments',
      '10 multi-sender email accounts',
      'Up to 50 workflows',
    ],
  },
  {
    key: 'businessPro',
    name: 'Business Pro',
    priceKey: 'businessPro',
    signupProductId: 'REPLACE_WITH_BUSINESS_PRO_PRODUCT_ID',
    tagline: 'Larger teams who want higher limits, priority support and full API access.',
    ctaLabel: 'Try Business Pro For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in business pro',
    features: [
      'Up to 20 users/seats',
      'Full CRM with 15 custom modules',
      'Everything in Business, plus:',
      '50,000 total contacts',
      '150 dynamic segments',
      'Full REST API & webhooks access',
      'Priority chat & phone support',
    ],
  },
  {
    key: 'custom',
    name: 'Custom Plan',
    staticPrice: 'Get a quote',
    staticSubLabel: 'Flexible limits, designed around you',
    tagline: 'Looking for a custom plan? Or not sure which one fits your needs?',
    ctaLabel: 'Contact Us Now',
    ctaHref: '/book-a-demo',
    trialNote: 'Need help?',
    featuresHeading: 'Included in custom plan',
    features: [
      'Unlimited full CRM with unlimited modules',
      'Unlimited everything',
      'Unlimited custom WhatsApp message quotas',
      'Unlimited dedicated infrastructure options',
      'Unlimited white-glove onboarding',
      'Unlimited custom integrations',
      'Unlimited priority support',
    ],
  },
];

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
  ctaHref: '/signup',
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

// Full plan-comparison table shown in the "See all features" modal: Business vs Business Pro,
// grouped by capability category. A cell value is either a string (limit/quota), `true` (check
// mark) or `false` (dash — not included). The last category, "Extra Addons", is flat add-on
// pricing that applies on top of either plan (the sheet gives one USD price per addon, no
// plan/region split, so the same value is repeated in both columns) — NewPricingFeatureModal
// renders it with a light highlight to set it apart from the plan-limit categories above it.
export const NP_FEATURE_TABLE = [
  {
    icon: 'dashboard',
    title: 'Plan Limits & Capacity',
    rows: [
      { label: 'Total Users/Seats', sub: null, business: 'Up to 10', businessPro: 'Up to 20' },
      { label: 'Total contacts', sub: 'Active + Inactive', business: '20,000', businessPro: '50,000' },
      { label: 'File storage', sub: null, business: '5 GB', businessPro: '10 GB' },
      { label: 'API calls / month', sub: null, business: '10,000', businessPro: '25,000' },
      { label: 'Email sends / month', sub: null, business: '5,000', businessPro: '10,000' },
      { label: 'WhatsApp messages / month', sub: null, business: false, businessPro: false },
    ],
  },
  {
    icon: 'database',
    title: 'CRM Core & Data Model',
    rows: [
      { label: 'Custom modules', sub: 'Build your own entities beyond Leads', business: '10', businessPro: '15' },
      { label: 'Custom fields', sub: 'Per module', business: '30', businessPro: '45' },
      { label: 'Custom list views', sub: null, business: '40', businessPro: '100' },
      { label: 'Drag-and-drop layout builder', sub: null, business: true, businessPro: true },
      { label: 'Activity log & audit trail', sub: 'Field-level before/after history', business: true, businessPro: true },
      { label: 'Global search (Ctrl+K)', sub: 'Cross-module record search', business: true, businessPro: true },
      { label: 'Sub-modules', sub: 'Tasks, Notes, Calls', business: true, businessPro: true },
    ],
  },
  {
    icon: 'group',
    title: 'Users, Roles & Permissions',
    rows: [
      { label: 'Roles', sub: 'User role definitions', business: '12', businessPro: '30' },
      { label: 'Profiles', sub: 'Permission sets', business: '12', businessPro: '30' },
      { label: 'Sharing rules', sub: 'Record-level access control', business: '12', businessPro: '30' },
      { label: 'Teams', sub: 'Group users into teams', business: '10', businessPro: '25' },
    ],
  },
  {
    icon: 'mail',
    title: 'Email & WhatsApp Marketing',
    rows: [
      { label: 'Unified email + WhatsApp campaign builder', sub: 'Build and send cross-channel campaigns', business: true, businessPro: true },
      { label: 'Campaign scheduling, cancel, reschedule', sub: null, business: true, businessPro: true },
      { label: 'Test send & live preview', sub: 'No recipient before send', business: true, businessPro: true },
      { label: 'Audience estimation', sub: 'Pre-send recipient count', business: true, businessPro: true },
      { label: 'Campaign tagging, duplication, archiving', sub: 'Organise & reuse campaigns', business: true, businessPro: true },
      { label: 'Bulk delete campaigns', sub: null, business: true, businessPro: true },
      { label: 'WhatsApp templates', sub: null, business: '100', businessPro: '250' },
      { label: 'Email templates', sub: null, business: '100', businessPro: '250' },
      { label: 'Multiple WhatsApp sender', sub: null, business: '3', businessPro: '5' },
      { label: 'Multi-sender email accounts', sub: 'Connected sending addresses', business: '10', businessPro: '20' },
      { label: 'Domain management', sub: 'DKIM / SPF / DMARC', business: true, businessPro: true },
      { label: 'Floating compose modal', sub: 'Send-style email compose from anywhere', business: true, businessPro: true },
      { label: 'Email sharing permissions', sub: 'Shared sending accounts', business: true, businessPro: true },
      { label: 'WhatsApp Forms', sub: 'Interactive forms inside WhatsApp chats', business: true, businessPro: true },
      { label: 'Link WhatsApp Forms to templates', sub: 'Attach forms to message templates', business: true, businessPro: true },
      { label: 'WhatsApp inbound trigger for workflows', sub: 'Auto-reply based on incoming messages', business: true, businessPro: true },
    ],
  },
  {
    icon: 'forum',
    title: 'Team Inbox (WhatsApp Conversations)',
    rows: [
      { label: 'Shared team inbox for WhatsApp', sub: 'One inbox, whole team', business: true, businessPro: true },
      { label: 'Initiate outbound conversations', sub: 'Start new WhatsApp chats from CRM', business: true, businessPro: true },
      { label: 'Two-way live chat', sub: 'Real-time messaging', business: true, businessPro: true },
      { label: 'Assign chats to user', sub: 'Route conversations to team members', business: true, businessPro: true },
      { label: 'Chat status', sub: 'Open, Pending, Resolved, Closed', business: true, businessPro: true },
      { label: 'Chat tagging', sub: 'Categorize conversations with labels', business: true, businessPro: true },
      { label: 'Internal notes on conversations', sub: 'Private notes visible only to team', business: true, businessPro: true },
      { label: 'Advanced chat filters', sub: 'Filter by status, tag, assignee, channel', business: true, businessPro: true },
      { label: 'Media sharing', sub: 'Images, docs, voice notes', business: true, businessPro: true },
    ],
  },
  {
    icon: 'call',
    title: 'Voice Calling',
    rows: [
      { label: 'Connect multiple voice providers', sub: null, business: true, businessPro: true },
      { label: 'Connected phone numbers', sub: null, business: '5', businessPro: '10' },
      { label: 'Click-to-call', sub: null, business: true, businessPro: true },
      { label: 'Assign numbers to agents', sub: 'Incoming & outgoing routing', business: true, businessPro: true },
      { label: 'Automatic call logs with recordings', sub: null, business: true, businessPro: true },
      { label: 'Call transcripts', sub: null, business: true, businessPro: true },
      { label: 'Simultaneous & sequential ringing', sub: 'For incoming calls', business: true, businessPro: true },
      { label: 'First-owner priority routing', sub: 'Route incoming calls to record owner first', business: true, businessPro: true },
      { label: 'Custom greeting messages', sub: null, business: true, businessPro: true },
    ],
  },
  {
    icon: 'description',
    title: 'Quotes & Invoices',
    rows: [
      { label: 'Create quotes & invoices', sub: null, business: true, businessPro: true },
      { label: 'Send invoices & quotations via email', sub: null, business: true, businessPro: true },
      { label: 'Export PDF', sub: 'Invoice & quote downloads', business: true, businessPro: true },
      { label: 'Payment gateway integration', sub: 'Collect invoice payments online', business: true, businessPro: true },
      { label: 'Convert quote → invoice', sub: 'One-click conversion', business: true, businessPro: true },
      { label: 'Quote acceptance notifications', sub: null, business: true, businessPro: true },
    ],
  },
  {
    icon: 'bar_chart',
    title: 'Campaign Analytics',
    rows: [
      { label: 'Real-time analytics dashboard', sub: 'Live campaign performance view', business: true, businessPro: true },
      { label: 'Opens, clicks, bounces, unsubscribes', sub: 'Per-campaign delivery metrics', business: true, businessPro: true },
      { label: 'Top links card', sub: 'Most-clicked URLs', business: true, businessPro: true },
      { label: 'Per-recipient drill-down', sub: 'Delivery / open / click per contact', business: true, businessPro: true },
      { label: 'CSV recipient export', sub: 'Download recipient lists', business: true, businessPro: true },
      { label: 'Side-by-side Email + WhatsApp preview', sub: 'Message tab in analytics', business: true, businessPro: true },
    ],
  },
  {
    icon: 'groups',
    title: 'Audience & Segmentation',
    rows: [
      { label: 'Dynamic segments', sub: 'Filter DSL auto-updating segments', business: '50', businessPro: '150' },
      { label: 'Live segment preview', sub: 'Count + sample contacts before saving', business: true, businessPro: true },
      { label: 'Segment members view', sub: 'Drill into member detail', business: true, businessPro: true },
      { label: 'Segment activities timeline', sub: 'View campaigns / events targeting it', business: true, businessPro: true },
      { label: 'Segment KPIs', sub: 'Count, growth, churn monitoring', business: true, businessPro: true },
      { label: 'Segment refresh', sub: 'Force recompute on demand', business: true, businessPro: true },
      { label: 'Segment cloning & CSV export', sub: 'Duplicate segment or export members', business: true, businessPro: true },
      { label: 'Static contact lists', sub: 'Manual list management', business: true, businessPro: true },
      { label: 'Add to campaign by list', sub: 'Target a list when sending', business: true, businessPro: true },
    ],
  },
  {
    icon: 'assignment',
    title: 'Web Forms & Lead Capture',
    rows: [
      { label: 'Webforms', sub: 'Embeddable lead capture forms', business: '15', businessPro: '30' },
      { label: 'Webform approval flow', sub: 'Review submissions before saving', business: true, businessPro: true },
      { label: 'Webform auto-responders', sub: 'Auto email on form submission', business: true, businessPro: true },
      { label: 'WhatsApp Flow Forms', sub: 'Native in-chat form capture', business: true, businessPro: true },
      { label: 'Flow form submissions tracking', sub: 'Track WhatsApp form responses', business: true, businessPro: true },
    ],
  },
  {
    icon: 'hub',
    title: 'Lead Source Integrations',
    rows: [
      { label: 'Meta Lead Ads', sub: 'Facebook / Instagram lead forms', business: true, businessPro: true },
      { label: 'Google Lead Forms', sub: 'Webhook-based ingestion', business: true, businessPro: true },
      { label: 'Integration accounts management', sub: 'Manage connected source accounts', business: true, businessPro: true },
      { label: 'No-code field mapping UI', sub: 'Map source fields without code', business: true, businessPro: true },
      { label: 'Per-source ingestion sync logs', sub: 'Success / failure per run', business: true, businessPro: true },
    ],
  },
  {
    icon: 'ads_click',
    title: 'Ads & Analytics',
    rows: [
      { label: 'Meta Lead Ads', sub: 'Facebook / Instagram lead forms', business: true, businessPro: true },
      { label: 'Number of Ads Business Sync', sub: null, business: '3', businessPro: '5' },
      { label: 'Custom Ads Spends', sub: null, business: true, businessPro: true },
    ],
  },
  {
    icon: 'bolt',
    title: 'Automation & Workflows',
    rows: [
      { label: 'Active workflows', sub: null, business: '50', businessPro: '100' },
      { label: 'Scheduled / date-based actions', sub: null, business: '10', businessPro: '20' },
      { label: 'Assignment rules', sub: 'Auto-route incoming leads', business: true, businessPro: true },
    ],
  },
  {
    icon: 'insert_chart',
    title: 'Dashboards, Reports & Components',
    rows: [
      { label: 'Custom reports', sub: null, business: '25', businessPro: '50' },
      { label: 'Custom dashboards', sub: null, business: '25', businessPro: '50' },
      { label: 'No-code report builder', sub: 'KPIs, charts, pivots', business: true, businessPro: true },
      { label: '5 chart strategies', sub: 'Chart, Comparator, KPI and more', business: true, businessPro: true },
      { label: 'Saved reports', sub: 'Share with team', business: true, businessPro: true },
      { label: 'Drill-down', sub: 'Click any cell to underlying records', business: true, businessPro: true },
      { label: 'Per-dashboard sharing', sub: 'Share with users or team', business: true, businessPro: true },
      { label: 'Components per dashboard', sub: 'Org level', business: '10', businessPro: '15' },
      { label: 'Chart components', sub: 'Org level', business: '100', businessPro: '150' },
      { label: 'Comparator components', sub: 'Org level', business: '15', businessPro: '25' },
      { label: 'KPI components', sub: 'Org level', business: '120', businessPro: '150' },
      { label: 'Funnel components', sub: 'Org level', business: '10', businessPro: '15' },
    ],
  },
  {
    icon: 'notifications',
    title: 'Notifications & Templates',
    rows: [
      { label: 'Email notifications / month', sub: null, business: '1,500', businessPro: '4,000' },
      { label: 'Public template gallery', sub: 'Browse and clone community templates', business: true, businessPro: true },
      { label: 'One-click template clone', sub: 'Copy any gallery template to your org', business: true, businessPro: true },
      { label: 'Publish to public library', sub: 'Make templates publicly available', business: true, businessPro: true },
    ],
  },
  {
    icon: 'shield',
    title: 'Compliance & Opt-In',
    rows: [
      { label: 'Email opt-out service', sub: 'One-click unsubscribe handling', business: true, businessPro: true },
      { label: 'WhatsApp opt-in / opt-out', sub: 'GDPR + Meta compliant', business: true, businessPro: true },
      { label: 'Cross-channel unsubscribe service', sub: 'Synced across email and WhatsApp', business: true, businessPro: true },
      { label: 'Token-protected public unsubscribe page', sub: 'Public page embedded in footers', business: true, businessPro: true },
    ],
  },
  {
    icon: 'code',
    title: 'Developer & API',
    rows: [
      { label: 'Public REST API', sub: 'Full CRM access via API', business: false, businessPro: true },
      { label: 'Bearer token authentication', sub: 'Separate from dashboard login', business: false, businessPro: true },
      { label: 'Version discovery endpoint', sub: 'Forward compatibility API', business: false, businessPro: true },
      { label: 'Batch operations', sub: 'Bulk create / update / delete via API', business: false, businessPro: true },
      { label: 'Search endpoint', sub: 'POST filter DSL', business: false, businessPro: true },
      { label: 'Webhooks', sub: 'Real-time event push notifications', business: false, businessPro: true },
    ],
  },
  {
    icon: 'support_agent',
    title: 'Support',
    rows: [
      { label: 'Email support', sub: '24-hour response time', business: true, businessPro: true },
      { label: 'Priority chat support', sub: 'Faster response via live chat', business: false, businessPro: true },
      { label: 'Phone support', sub: 'Direct call access to support team', business: false, businessPro: false },
      { label: 'Dedicated success manager', sub: 'Named point of contact', business: false, businessPro: false },
      { label: 'Onboarding & training session', sub: 'Guided setup call', business: false, businessPro: false },
      { label: 'SLA guarantee', sub: null, business: false, businessPro: false },
    ],
  },
  {
    icon: 'add_circle',
    title: 'Extra Addons',
    highlight: true,
    rows: [
      { label: '📱 Extra WhatsApp Number', sub: null, business: '$10/month', businessPro: '$10/month' },
      { label: '👥 Extra 5,000 Contacts', sub: null, business: '$5/month', businessPro: '$5/month' },
      { label: '💾 Extra 20 GB Storage', sub: null, business: '$6/month', businessPro: '$6/month' },
      { label: '⚙️ Standard Setup & Training', sub: null, business: '$99 One-Time', businessPro: '$99 One-Time' },
      { label: '🚀 Premium AI Automation Setup', sub: null, business: '$249 One-Time', businessPro: '$249 One-Time' },
      { label: '🏆 Done-for-You CRM Implementation', sub: null, business: '$499 One-Time', businessPro: '$499 One-Time' },
    ],
  },
];
