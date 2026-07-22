// Pricing page content. Kept deliberately data-only (no JSX) so plans, prices and the feature
// comparison table can be updated without touching any component code.

export const PR_HERO = {
  titleLead: 'Plans Built for ',
  titleAccent: 'Smarter Customer Engagement',
  subtitle:
    'Capture leads, automate follow-ups, and manage WhatsApp, Email, Voice calls and SMS in one platform without switching tools.',
  subtext: 'Upgrade As You Grow. No Hidden Costs.',
};

// Prices per region + billing cycle. Add a region/cycle here and it flows through the toggle,
// the plan cards, and the feature-comparison modal automatically.
export const PR_PRICES = {
  india: {
    monthly: { growth: '₹1,799', advance: '₹4,599' },
    annual: { growth: '₹1,262', advance: '₹3,264' },
  },
  international: {
    monthly: { growth: '$19', advance: '$49' },
    annual: { growth: '$13', advance: '$34' },
  },
};

export const PR_BILLING_LINES = {
  monthly: 'Billed quarterly',
  annual: 'Billed yearly',
};

export const PR_REGION_NOTE = 'Displayed INR prices are estimates for reference only. All payments are billed in USD.';

// The actual signup app. A plan with `signupProductId` gets its CTA built from this base via
// buildSignupHref() below instead of using a plain `ctaHref` — the link's billing-cycle query
// param follows whichever toggle (Monthly / Annually) is selected.
const SIGNUP_BASE_URL = 'https://crm.aitrillion.com/auth/sign-up';

/** Builds the "Try ... For Free" signup link for a plan, matching cycle to the ?cycle= param. */
export function buildSignupHref(productId, cycle) {
  const params = new URLSearchParams({ product_id: productId });
  if (cycle === 'annual') params.set('cycle', 'yearly');
  return `${SIGNUP_BASE_URL}?${params.toString()}`;
}

// Plan cards, left to right. `priceKey` looks the price up in PR_PRICES; a plan without a
// priceKey (e.g. Custom) renders `staticPrice` instead and skips the billing-cycle line.
// `signupProductId` (Growth/Advance) routes the CTA through buildSignupHref() above, in a new
// tab, instead of `ctaHref`.
export const PR_PLANS = [
  {
    key: 'growth',
    name: 'Growth Plan',
    priceKey: 'growth',
    signupProductId: 'prod_UNJ8F0U6ZYLNq3',
    tagline: 'Businesses focused on lead conversions and faster engagement.',
    ctaLabel: 'Try Growth For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in growth plan',
    features: [
      'Full CRM with 15 custom modules',
      'Email, WhatsApp, Voice, Team Inbox',
      '2× email volume to scale outreach',
      '5× more segments (50 segments)',
      '5 sender identities sending',
      'Up to 10 workflows & 10 webforms',
      '1,500 email month per user',
    ],
  },
  {
    key: 'advance',
    name: 'Advance Plan',
    priceKey: 'advance',
    signupProductId: 'prod_UNJ8UAjKOMe9Od',
    tagline: 'Teams who want to scale and unlock deeper insights and integrations',
    ctaLabel: 'Try Advance For Free',
    trialNote: '14-days free trial',
    featuresHeading: 'Included in advance plan',
    features: [
      'Full CRM with 25 custom modules',
      'Everything in Growth, plus:',
      'AI lead scoring + email assistant',
      'Smart suggestions (next best action)',
      'Unlimited segments & dashboards',
      'Unlimited sender identities',
      'Up to 20 workflows & webforms / user',
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
      'Full CRM with unlimited modules',
      'Unlimited everything',
      'Custom WhatsApp message quotas',
      'Dedicated infrastructure options',
      'White-glove onboarding',
      'Custom integrations',
      'Priority support',
    ],
  },
];

export const PR_START_FREE = {
  title: 'Start Free with AiEngage CRM',
  descriptionLead: 'Use AiEngage CRM ',
  descriptionBold: 'free for up to 100 Active Contacts (per user)',
  descriptionTail: ' and explore powerful growth tools for your business.',
  ctaLabel: 'Start free',
  ctaHref: '/signup',
};

export const PR_COMPARISON = {
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

export const PR_PLATFORM = {
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

export const PR_FAQS = [
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

export const PR_FINAL_CTA = {
  titleLead: 'Ready To Take Your Business To ',
  titleAccent: 'The Next Level?',
  description:
    'Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM.',
};

// Full plan-comparison table shown in the "See all features" modal. Each category groups a set
// of rows; each row compares Growth vs Advance for one capability. A cell value is either:
//   - a string (shown as-is, e.g. a limit or quota)
//   - `true` (shown as a check mark)
//   - `false` (shown as a dash — not included)
export const PR_FEATURE_TABLE = [
  {
    icon: 'dashboard',
    title: 'Plan Limits & Capacity',
    rows: [
      { label: 'Active contacts', sub: 'Per user', growth: '5000', advance: '20000' },
      { label: 'Max contacts', sub: 'Active + Inactive', growth: '100000', advance: '200000' },
      { label: 'File storage', sub: 'Per user', growth: '2 GB', advance: '3 GB' },
      { label: 'API calls / month', sub: 'Per user', growth: '25,000', advance: '50,000' },
      { label: 'Email sends / month', sub: 'Org-wide', growth: '10,000', advance: '25,000' },
      { label: 'WhatsApp messages / month', sub: 'Org-wide', growth: false, advance: false },
    ],
  },
  {
    icon: 'database',
    title: 'CRM Core & Data Model',
    rows: [
      { label: 'Custom modules', sub: 'Build your own entities beyond Leads', growth: '15', advance: '25' },
      { label: 'Custom fields', sub: 'Per module', growth: '45', advance: '70' },
      { label: 'Custom list views', sub: 'Per user', growth: '20', advance: '40' },
      { label: 'Drag-and-drop layout builder', sub: null, growth: true, advance: true },
      { label: 'Activity log & audit trail', sub: 'Field-level before/after history', growth: true, advance: true },
      { label: 'Global search (Ctrl+K)', sub: 'Cross-module record search', growth: true, advance: true },
      { label: 'Sub-modules', sub: 'Tasks, Notes, Calls', growth: true, advance: true },
    ],
  },
  {
    icon: 'group',
    title: 'Users, Roles & Permissions',
    rows: [
      { label: 'Roles', sub: 'User role definitions', growth: '20', advance: '40' },
      { label: 'Profiles', sub: 'Permission sets', growth: '20', advance: '40' },
      { label: 'Sharing rules', sub: 'Record-level access control', growth: '20', advance: '40' },
      { label: 'Teams', sub: 'Group users into teams', growth: true, advance: true },
    ],
  },
  {
    icon: 'mail',
    title: 'Email & WhatsApp Marketing',
    rows: [
      { label: 'Unified email + WhatsApp campaign builder', sub: 'Build and send cross-channel campaigns', growth: true, advance: true },
      { label: 'Campaign scheduling, cancel, reschedule', sub: null, growth: true, advance: true },
      { label: 'Test send & live preview', sub: 'No recipient before send', growth: true, advance: true },
      { label: 'Audience estimation', sub: 'Pre-send recipient count', growth: true, advance: true },
      { label: 'Campaign tagging, duplication, archiving', sub: 'Organise & reuse campaigns', growth: true, advance: true },
      { label: 'Bulk delete campaigns', sub: null, growth: true, advance: true },
      { label: 'WhatsApp templates', sub: 'Per user', growth: '15', advance: '30' },
      { label: 'Email templates', sub: 'Per user', growth: '15', advance: '30' },
      { label: 'Multi-sender email accounts', sub: 'Connected sending addresses', growth: '5', advance: 'Unlimited' },
      { label: 'Domain management', sub: 'DKIM / SPF / DMARC', growth: true, advance: true },
      { label: 'Floating compose modal', sub: 'Send-style email compose from anywhere', growth: true, advance: true },
      { label: 'Email sharing permissions', sub: 'Shared sending accounts', growth: true, advance: true },
      { label: 'WhatsApp Forms', sub: 'Interactive forms inside WhatsApp chats', growth: true, advance: true },
      { label: 'Link WhatsApp Forms to templates', sub: 'Attach forms to message templates', growth: true, advance: true },
      { label: 'WhatsApp inbound trigger for workflows', sub: 'Auto-reply based on incoming messages', growth: true, advance: true },
    ],
  },
  {
    icon: 'forum',
    title: 'Team Inbox (WhatsApp Conversations)',
    rows: [
      { label: 'Shared team inbox for WhatsApp', sub: 'One inbox, whole team', growth: true, advance: true },
      { label: 'Initiate outbound conversations', sub: 'Start new WhatsApp chats from CRM', growth: true, advance: true },
      { label: 'Two-way live chat', sub: 'Real-time messaging', growth: true, advance: true },
      { label: 'Assign chats to user', sub: 'Route conversations to team members', growth: true, advance: true },
      { label: 'Chat status', sub: 'Open, Pending, Resolved, Closed', growth: true, advance: true },
      { label: 'Chat tagging', sub: 'Categorize conversations with labels', growth: true, advance: true },
      { label: 'Internal notes on conversations', sub: 'Private notes visible only to team', growth: true, advance: true },
      { label: 'Advanced chat filters', sub: 'Filter by status, tag, assignee, channel', growth: true, advance: true },
      { label: 'Media sharing', sub: 'Images, docs, voice notes', growth: true, advance: true },
    ],
  },
  {
    icon: 'call',
    title: 'Voice Calling',
    rows: [
      { label: 'Connect multiple voice providers', sub: null, growth: true, advance: true },
      { label: 'Connected phone numbers', sub: 'Per user', growth: '1', advance: '3' },
      { label: 'Click-to-call', sub: null, growth: true, advance: true },
      { label: 'Assign numbers to agents', sub: 'Incoming & outgoing routing', growth: true, advance: true },
      { label: 'Number of call / month (In & Out)', sub: 'Per user', growth: '3000', advance: '7000' },
      { label: 'Automatic call logs with recordings', sub: null, growth: true, advance: true },
      { label: 'Call transcripts', sub: null, growth: true, advance: true },
      { label: 'Simultaneous & sequential ringing', sub: 'For incoming calls', growth: true, advance: true },
      { label: 'First-owner priority routing', sub: 'Route incoming calls to record owner first', growth: true, advance: true },
      { label: 'Custom greeting messages', sub: null, growth: true, advance: true },
    ],
  },
  {
    icon: 'description',
    title: 'Quotes & Invoicing',
    rows: [
      { label: 'Create quotes & invoices', sub: null, growth: true, advance: true },
      { label: 'Invoices / month', sub: 'Per user', growth: '1000', advance: '3000' },
      { label: 'Send invoices & quotations via email', sub: null, growth: true, advance: true },
      { label: 'Export PDF', sub: 'Invoice & quote downloads', growth: true, advance: true },
      { label: 'Payment gateway integration', sub: 'Collect invoice payments online', growth: true, advance: true },
      { label: 'Convert quote → invoice', sub: 'One-click conversion', growth: true, advance: true },
      { label: 'Quote acceptance notifications', sub: null, growth: true, advance: true },
    ],
  },
  {
    icon: 'bar_chart',
    title: 'Campaign Analytics',
    rows: [
      { label: 'Real-time analytics dashboard', sub: 'Live campaign performance view', growth: true, advance: true },
      { label: 'Opens, clicks, bounces, unsubscribes', sub: 'Per-campaign delivery metrics', growth: true, advance: true },
      { label: 'Top links card', sub: 'Most-clicked URLs', growth: true, advance: true },
      { label: 'Per-recipient drill-down', sub: 'Delivery / open / click per contact', growth: true, advance: true },
      { label: 'CSV recipient export', sub: 'Download recipient lists', growth: true, advance: true },
      { label: 'Side-by-side Email + WhatsApp preview', sub: 'Message tab in analytics', growth: true, advance: true },
    ],
  },
  {
    icon: 'groups',
    title: 'Audience & Segmentation',
    rows: [
      { label: 'Dynamic segments', sub: 'Filter DSL auto-updating segments', growth: '50', advance: 'Unlimited' },
      { label: 'Live segment preview', sub: 'Count + sample contacts before saving', growth: true, advance: true },
      { label: 'Segment members view', sub: 'Drill into member detail', growth: true, advance: true },
      { label: 'Segment activities timeline', sub: 'View campaigns / events targeting it', growth: true, advance: true },
      { label: 'Segment KPIs', sub: 'Count, growth, churn monitoring', growth: true, advance: true },
      { label: 'Segment refresh', sub: 'Force recompute on demand', growth: true, advance: true },
      { label: 'Segment cloning & CSV export', sub: 'Duplicate segment or export members', growth: true, advance: true },
      { label: 'Static contact lists', sub: 'Manual list management', growth: true, advance: true },
      { label: 'Add to campaign by list', sub: 'Target a list when sending', growth: true, advance: true },
    ],
  },
  {
    icon: 'assignment',
    title: 'Web Forms & Lead Capture',
    rows: [
      { label: 'Webforms', sub: 'Embeddable lead capture forms', growth: '10', advance: '20' },
      { label: 'Webform approval flow', sub: 'Review submissions before saving', growth: true, advance: true },
      { label: 'Webform auto-responders', sub: 'Auto email on form submission', growth: true, advance: true },
      { label: 'WhatsApp Flow Forms', sub: 'Native in-chat form capture', growth: true, advance: true },
      { label: 'Flow form submissions tracking', sub: 'Track WhatsApp form responses', growth: true, advance: true },
    ],
  },
  {
    icon: 'hub',
    title: 'Lead Source Integrations',
    rows: [
      { label: 'Meta Lead Ads', sub: 'Facebook / Instagram lead forms', growth: true, advance: true },
      { label: 'Google Lead Forms', sub: 'Webhook-based ingestion', growth: true, advance: true },
      { label: 'Integration accounts management', sub: 'Manage connected source accounts', growth: true, advance: true },
      { label: 'No-code field mapping UI', sub: 'Map source fields without code', growth: true, advance: true },
      { label: 'Per-source ingestion sync logs', sub: 'Success / failure per run', growth: true, advance: true },
    ],
  },
  {
    icon: 'bolt',
    title: 'Automation & Workflows',
    rows: [
      { label: 'Active workflows', sub: 'Per user', growth: '10', advance: '20' },
      { label: 'Scheduled / date-based actions', sub: 'Per user', growth: '5', advance: '10' },
      { label: 'Assignment rules', sub: 'Auto-route incoming leads', growth: true, advance: true },
    ],
  },
  {
    icon: 'insert_chart',
    title: 'Reports & Dashboards',
    rows: [
      { label: 'Custom reports', sub: 'Per user', growth: '10', advance: '20' },
      { label: 'No-code report builder', sub: 'KPIs, charts, pivots', growth: true, advance: true },
      { label: '5 chart strategies', sub: 'Chart, Comparator, KPI and more', growth: true, advance: true },
      { label: 'Saved reports', sub: 'Share with team', growth: true, advance: true },
      { label: 'Drill-down', sub: 'Click any cell to underlying records', growth: true, advance: true },
      { label: 'Custom dashboards', sub: 'Per user', growth: '10', advance: '20' },
      { label: 'Per-dashboard sharing', sub: 'Share with users or team', growth: true, advance: true },
    ],
  },
  {
    icon: 'notifications',
    title: 'Notifications & Templates',
    rows: [
      { label: 'Email notifications / month', sub: 'Per user', growth: '1,500', advance: '3,000' },
      { label: 'Public template gallery', sub: 'Browse and clone community templates', growth: true, advance: true },
      { label: 'One-click template clone', sub: 'Copy any gallery template to your org', growth: true, advance: true },
      { label: 'Publish to public library', sub: 'Make templates publicly available', growth: true, advance: true },
    ],
  },
  {
    icon: 'shield',
    title: 'Compliance & Opt-In',
    rows: [
      { label: 'Email opt-out service', sub: 'One-click unsubscribe handling', growth: true, advance: true },
      { label: 'WhatsApp opt-in / opt-out', sub: 'GDPR + Meta compliant', growth: true, advance: true },
      { label: 'Cross-channel unsubscribe service', sub: 'Synced across email and WhatsApp', growth: true, advance: true },
      { label: 'Token-protected public unsubscribe page', sub: 'Public page embedded in footers', growth: true, advance: true },
    ],
  },
  {
    icon: 'code',
    title: 'Developer & API',
    rows: [
      { label: 'Public REST API', sub: 'Full CRM access via API', growth: true, advance: true },
      { label: 'Bearer token authentication', sub: 'Separate from dashboard login', growth: true, advance: true },
      { label: 'Version discovery endpoint', sub: 'Forward compatibility API', growth: true, advance: true },
      { label: 'Batch operations', sub: 'Bulk create / update / delete via API', growth: true, advance: true },
      { label: 'Search endpoint', sub: 'POST filter DSL', growth: true, advance: true },
      { label: 'Webhooks', sub: 'Real-time event push notifications', growth: true, advance: true },
    ],
  },
  {
    icon: 'support_agent',
    title: 'Support',
    rows: [
      { label: 'Email support', sub: '24-hour response time', growth: true, advance: true },
      { label: 'Priority chat support', sub: 'Faster response via live chat', growth: true, advance: true },
      { label: 'Phone support', sub: 'Direct call access to support team', growth: false, advance: true },
      { label: 'Dedicated success manager', sub: 'Named point of contact', growth: false, advance: true },
      { label: 'Onboarding & training session', sub: 'Guided setup call', growth: false, advance: true },
      { label: 'SLA guarantee', sub: null, growth: false, advance: false },
    ],
  },
];
