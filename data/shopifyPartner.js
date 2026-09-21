// Content for the /shopify-partner page (components/templates/ShopifyPartner). Kept separate
// from other pages' data files, same convention as data/homeV2Discovery.js / homeV2Automation.js.
import { TRUSTED_LOGOS } from './homeV2Discovery';

export const HERO_STATS = [
  { image: '/shopify-partner/stat-capture-leads.png', label: 'Capture Leads' },
  { image: '/shopify-partner/stat-boost-conversions.png', label: 'Boost Conversions' },
  { image: '/shopify-partner/stat-automate-support.png', label: 'Automate Support' },
  { image: '/shopify-partner/stat-scale-growth.png', label: 'Scale Growth' },
];

export const CONNECTED_COLUMNS = [
  {
    icon: 'campaign',
    title: 'Marketing',
    subtitle: 'Attract. Engage. Convert.',
    items: [
      'Meta & Google Lead Capture',
      'Website Lead Capture',
      'Email & WhatsApp Campaigns',
      'Smart Customer Segmentation',
      'Customer Onboarding Journeys',
      'Automated Follow-Ups',
      'Lead Re-Engagement',
      'Campaign Performance Reports',
    ],
    tags: ['Leads', 'Campaigns', 'Segments', 'Automation'],
  },
  {
    icon: 'trending_up',
    title: 'Sales',
    subtitle: 'Qualify. Meet. Close.',
    items: [
      'AI Lead Qualification & Scoring',
      'WhatsApp Team Inbox',
      'Built-In Calling',
      'Automated Sales Follow-Ups',
      'Calendar, Meetings & AI Summaries',
      'Tasks & Reminders',
      'Quotes & Invoices',
      'Sales Performance Reports',
    ],
    tags: ['Pipeline Management', 'Deals', 'Meetings', 'Calling'],
  },
  {
    icon: 'support_agent',
    title: 'Support & Success',
    subtitle: 'Support. Retain. Grow.',
    items: [
      'Support Ticket Management',
      '24×7 AI Support Agents',
      'Product Knowledge Base',
      'AI-to-Human Handover',
      'Complete Customer History',
      'Customer Onboarding',
      'Project Management',
      'Support Performance Reports',
    ],
    tags: ['Tickets', 'Inbox', 'AI Support', 'Success'],
  },
];

// The mockup's own data-screen-label values for these 6 alternating rows don't match their
// actual content (e.g. "Sales Pipeline" label on the unified-inbox row) — ids/content below are
// named from what each row actually says, not the mockup's mislabeled attribute.
export const FEATURE_ROWS = [
  {
    id: 'lead-capture',
    heading: 'Meta & Google Leads Straight Into ',
    accent: 'Your CRM',
    desc: 'Bring enquiries from Meta Ads, Google Ads, website forms, and other sources directly into AiEngage CRM.',
    checks: [
      'Capture Meta & Google leads',
      'Collect website enquiries',
      'Create lead profiles automatically',
      'Track original lead source',
      'Assign leads to the right person',
    ],
    flow: 'Lead Captured → Owner Assigned → Follow-Up Automated',
    image: '/shopify-partner/lead-capture.webp',
    imageAlt: 'Meta & Google leads captured straight into AiEngage CRM',
    reverse: false,
  },
  {
    id: 'team-inbox',
    heading: 'Bring Leads Into ',
    accent: 'One Inbox',
    tail: ' Without Switching Between Tools',
    desc: 'Connect with new leads through WhatsApp, email, and calling without switching between tools.',
    checks: [
      'Shared team inbox',
      'WhatsApp, Email & Calling',
      'Complete conversation history',
      'Templates & automated replies',
      'Conversations linked to every lead',
    ],
    flow: 'Lead captured → Conversation started → Intent identified',
    image: '/shopify-partner/team-inbox.webp',
    imageAlt: 'Bring leads into one inbox without switching between tools',
    reverse: true,
  },
  {
    id: 'ai-qualification',
    heading: 'Let AI Qualify, Reply & Keep Leads ',
    accent: 'Moving',
    desc: 'AI Agents respond to enquiries, answer questions, collect information, qualify leads, and trigger the next action.',
    checks: ['AI WhatsApp Agent', 'AI Voice Agent', 'AI Email Agent', 'Automated follow-ups', 'Lead qualification', 'Questions answered instantly'],
    flow: 'AI engages → AI qualifies → Sales-ready lead created',
    image: '/shopify-partner/ai-qualification.webp',
    imageAlt: 'AI qualifies, replies and keeps leads moving',
    reverse: false,
  },
  {
    id: 'sales-pipeline',
    heading: 'Turn Qualified Leads Into ',
    accent: 'Deals',
    desc: 'Move every opportunity through a clear sales pipeline while keeping activities, owners, and follow-ups organized.',
    checks: ['Visual deal pipeline', 'Lead & deal ownership', 'Tasks and reminders', 'Complete activity timeline', 'Notes and conversations', 'Automated follow-ups'],
    flow: 'Qualified → Opportunity → Meeting ready',
    image: '/shopify-partner/sales-pipeline.webp',
    imageAlt: 'Turn qualified leads into deals in the sales pipeline',
    reverse: true,
  },
  {
    id: 'meetings-booking',
    heading: 'Turn Sales Interest Into ',
    accent: 'Booked Meetings',
    desc: 'Let prospects choose a time, automate reminders, and capture every meeting automatically inside the CRM.',
    checks: ['Shareable booking calendar', 'Team availability', 'Automated confirmations', 'Meeting reminders', 'Reschedule workflows', 'AI meeting notes & summaries'],
    flow: 'Meeting booked → Conversation captured → Next action created',
    image: '/shopify-partner/meetings-booking.webp',
    imageAlt: 'Turn sales interest into booked meetings',
    reverse: false,
  },
  {
    id: 'support-tickets',
    heading: 'Turn Every Support Request Into a ',
    accent: 'Better Customer Experience',
    desc: 'Continue the same connected journey with tickets, AI-assisted support, customer history, and renewal workflows.',
    checks: ['Shared support inbox', 'Ticket management', 'Knowledge base', 'AI-suggested replies', 'Human handover', 'Renewal & follow-up workflows', 'Complete customer history'],
    flow: 'Ticket Received → AI Assists → Issue Resolved → Customer Retained',
    image: '/shopify-partner/support-tickets.webp',
    imageAlt: 'Turn every support request into a better customer experience',
    reverse: true,
  },
];

export const REPLACE_TOOLS = [
  { logo: '/shopify-partner/tools/hubspot.png', label: 'HubSpot', sub: 'CRM' },
  { logo: '/shopify-partner/tools/zoho.png', label: 'Zoho', sub: 'Sales' },
  { logo: '/shopify-partner/tools/intercom.png', label: 'Intercom', sub: 'Support' },
  { logo: '/shopify-partner/tools/wati.png', label: 'WATI', sub: 'WhatsApp' },
  { logo: '/shopify-partner/tools/calendly.png', label: 'Calendly', sub: 'Meetings' },
  { letter: 'M', bg: '#ffe01b', color: '#241c15', label: 'Mailchimp', sub: 'Email' },
  { letter: 'Z', bg: '#ff4a00', color: '#fff', label: 'Zapier', sub: 'Automation' },
  { letter: 'K', bg: '#000', color: '#fff', label: 'Klaviyo', sub: 'Email' },
];

export const REPLACE_BENEFITS = ['One Platform', 'One Customer View', 'Everything Connected', 'Built for Shopify Apps & Agencies'];

export const OUR_STORY = {
  stat: '15+',
  statLabel: 'Years in the Shopify ecosystem',
  headingLead: 'Built on 15 Years in the ',
  headingAccent: 'Shopify Ecosystem',
  paragraphs: [
    "We've been part of the Shopify ecosystem for 15+ years, building products and working closely with merchants, apps, agencies and partners.",
    'We know the challenges growing teams face: too many tools, too much switching, too little visibility.',
  ],
  closing: 'AiEngage CRM is our effort to simplify that — a single platform where your teams can ',
  closingBold: 'market, sell, support and grow customers together.',
};

export const PRICING = {
  checks: ['All-in-one CRM', 'Cancel Anytime', 'Setup in Minutes'],
  plan: {
    icon: 'rocket_launch',
    name: 'Solo Plan',
    tagline: 'Everything to get moving',
    price: '$19',
    period: '/month',
    features: ['CRM, WhatsApp, Email & Calling', 'AI Agents & Automation', 'Meetings, Support & Reporting'],
    cta: 'Start Free Trial',
    ctaHref: 'https://app.aiengagecrm.com/auth/sign-up?product_id=prod_V8zKT2REMDAiGM&cycle=monthly',
  },
};

const TESTIMONIAL_LOGO_NAMES = ['Ctrl F5', 'Aqua Solution', 'Dream Shutters', 'NIF Global', 'Krishangi Financial Services'];

export const TESTIMONIAL = {
  label: 'Trusted by Shopify Apps, Agencies & SaaS Teams',
  heading: 'Growing Teams. Happier Customers.',
  logos: TRUSTED_LOGOS.filter((l) => TESTIMONIAL_LOGO_NAMES.includes(l.name)),
  avatars: [
    { initials: 'AP', bg: '#ffe1d6', color: '#e64a24' },
    { initials: 'NM', bg: '#e7f7ee', color: '#1faf64' },
    { initials: 'YM', bg: '#ede9fb', color: '#6b4ee6' },
  ],
  quote: 'AiEngage has brought everything together for our team. It saves us hours every week!',
  attribution: 'Shopify App Partner',
};
