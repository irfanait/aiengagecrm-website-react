// Content for the Integrations page. Unlike the other product pages, this one is a filterable
// card catalog rather than the zig-zag FeatureSection layout — see app/integrations/page.js.

export const IN_HERO = {
  badge: { icon: 'extension', label: 'INTEGRATIONS', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Integrations That Keep Your Business ',
  titleAccent: 'In Sync.',
  description: 'Bring customer conversations, email, calendars, lead data, and workflows into one connected system.',
};

export const IN_TRUST_ITEMS = [
  { icon: 'bolt', label: 'Real-time lead sync', color: 'var(--color-primary)' },
  { icon: 'forum', label: 'Unified communication', color: 'var(--color-green)' },
  { icon: 'payments', label: 'Connected payments', color: 'var(--color-primary-dark-accent)' },
  { icon: 'webhook', label: 'API & webhooks', color: 'var(--color-dark-bg)' },
];

export const IN_CATALOG_EYEBROW = 'INTEGRATIONS';
export const IN_CATALOG_HEADING = 'Every Integration Your Business Runs On';
export const IN_FILTERS = ['All', 'Lead Ads', 'Communication', 'Payments', 'Developer'];

export const IN_CARDS = [
  {
    id: 'meta-ads',
    logo: '/brand/integrations/meta.svg',
    name: 'Meta Leads Ad',
    category: 'Lead Ads',
    connected: true,
    description:
      'Connect Meta Lead Ads with AiEngage CRM and receive new Facebook and Instagram leads instantly. Every form submission is automatically added to your CRM with the right campaign details, lead source, and assigned sales owner.',
    listHeading: 'What You Can Do',
    items: [
      'Connect Facebook and Instagram Lead Ads',
      'Sync leads in real time',
      'Map Meta form fields to CRM fields',
      'Assign leads automatically',
      'Add lead source and campaign details',
      'Route leads by location, form, or team',
    ],
    moreCount: 4,
  },
  {
    id: 'google-ads',
    logo: '/brand/integrations/googleads.svg',
    name: 'Google Leads Ad',
    category: 'Lead Ads',
    connected: true,
    description:
      'Connect Google Lead Ads with AiEngage CRM and receive new inquiries as soon as someone submits a lead form. Every lead is added automatically with campaign details, source information, and the right sales owner.',
    listHeading: 'What You Can Do',
    items: [
      'Connect Google Lead Forms',
      'Sync leads in real time',
      'Map form fields to CRM fields',
      'Assign leads automatically',
      'Add campaign and source details',
      'Route leads by form, location, or team',
    ],
    moreCount: 4,
  },
  {
    id: 'whatsapp',
    logo: '/brand/integrations/whatsapp.svg',
    name: 'WhatsApp',
    category: 'Communication',
    connected: true,
    leadLine: 'Keep WhatsApp Conversations Connected To Every Customer Record.',
    description:
      'Connect WhatsApp with AiEngage to manage chats, send updates, automate follow-ups, and keep every message linked to the right lead or customer.',
    listHeading: 'Connect WhatsApp For',
    items: ['Customer chats and replies', 'WhatsApp campaigns', 'Follow-up messages', 'Appointment reminders', 'Payment reminders', 'Lead notifications'],
    moreCount: 4,
  },
  {
    id: 'gmail',
    logo: '/brand/integrations/gmail.svg',
    name: 'Gmail',
    category: 'Communication',
    connected: true,
    description:
      'Connect Gmail with AiEngage CRM to manage customer emails, follow-ups, meetings, and communication history from one place. Every important email can be linked to the right lead, contact, company, or deal, so your team always has full context before replying.',
    listHeading: 'What You Can Do',
    items: [
      'Connect Gmail accounts',
      'Sync sent and received emails',
      'Send emails from CRM',
      'Track email communication history',
      'Link emails to leads and deals',
      'Create follow-up tasks from emails',
    ],
    moreCount: 4,
  },
  {
    id: 'plivo',
    icon: 'call',
    name: 'Plivo',
    category: 'Communication',
    connected: true,
    leadLine: 'Connect Your Business Calls To Your CRM.',
    description: 'Use Plivo with AiEngage to make and receive customer calls while keeping call activity connected to the right lead, deal, or customer profile.',
    listHeading: 'Use Plivo For',
    items: ['Inbound business calling', 'Outbound sales calls', 'Business phone numbers', 'Call routing', 'Call logs', 'Call recordings'],
    moreCount: 4,
  },
  {
    id: 'twilio',
    icon: 'sms',
    name: 'Twilio',
    category: 'Communication',
    connected: true,
    leadLine: 'Power Customer Communication Across Calls And Messages.',
    description: 'Connect Twilio with AiEngage to support calling, messaging, notifications, and customer updates from one connected CRM.',
    listHeading: 'Use Twilio For',
    items: ['Business calling', 'SMS messaging', 'Customer notifications', 'Appointment reminders', 'OTP and verification messages', 'Payment reminders'],
    moreCount: 4,
  },
  {
    id: 'stripe',
    logo: '/brand/integrations/stripe.svg',
    name: 'Stripe',
    category: 'Payments',
    connected: true,
    leadLine: 'Keep Payment Activity Connected To The Right Customer And Deal.',
    description: 'Connect Stripe with AiEngage to track payment activity alongside your leads, deals, invoices, and customer records.',
    listHeading: 'Connect Stripe To Track',
    items: ['Payment status', 'Paid and pending amounts', 'Subscription payments', 'One-time payments', 'Payment links', 'Transaction history'],
    moreCount: 4,
  },
  {
    id: 'razorpay',
    logo: '/brand/integrations/razorpay.svg',
    name: 'Razorpay',
    category: 'Payments',
    connected: true,
    leadLine: 'Track Payments Without Losing Customer Context.',
    description: 'Connect Razorpay with AiEngage to keep payment updates linked to customer records, deals, bookings, and sales activity.',
    listHeading: 'Connect Razorpay To Manage',
    items: ['Payment status updates', 'Payment links', 'Advance payments', 'Booking payments', 'Pending payment reminders', 'Transaction records'],
    moreCount: 4,
  },
  {
    id: 'zapier',
    logo: '/brand/integrations/zapier.svg',
    name: 'Zapier',
    category: 'Developer',
    connected: true,
    description:
      'Connect AiEngage CRM with thousands of business tools using Zapier. Create automated workflows between your CRM and the apps your team already uses. Move lead data, update records, trigger tasks, and notify teams automatically without depending on manual processes.',
    listHeading: 'Automate Workflows Like',
    items: [
      'Add leads from web forms',
      'Create CRM contacts from spreadsheets',
      'Send Slack notifications for new leads',
      'Add webinar registrations to CRM',
      'Create tasks from form submissions',
      'Sync event registrations',
    ],
    moreCount: 4,
  },
  {
    id: 'api',
    icon: 'api',
    name: 'API',
    category: 'Developer',
    connected: true,
    description:
      'Use APIs to connect AiEngage CRM with your website, mobile app, ERP, accounting platform, booking system, support tools, internal software, or custom business workflows. Send and receive customer data automatically so your teams always work with updated information.',
    listHeading: 'Use APIs To',
    items: ['Create or update contacts', 'Add leads from external systems', 'Sync customer details', 'Update lead stages', 'Create deals and activities', 'Push form submissions'],
    moreCount: 4,
  },
  {
    id: 'webhooks',
    icon: 'webhook',
    name: 'Webhooks',
    category: 'Developer',
    connected: true,
    leadLine: 'Trigger Instant Actions When Something Important Happens.',
    description:
      'Webhooks help AiEngage send or receive real-time updates when a lead is created, a deal changes stage, a payment is completed, a form is submitted, or a customer takes an important action.',
    listHeading: 'Trigger Workflows For',
    items: ['New lead creation', 'Form submissions', 'Lead assignments', 'Deal stage changes', 'Payment updates', 'New customer creation'],
    moreCount: 6,
  },
];

export const IN_SYNC_EYEBROW = 'DATA SYNC';
export const IN_SYNC_HEADING = 'How Your Data Stays In Sync';

export const IN_BENEFITS_HEADING = 'One CRM Connected To Every Important Business Tool';

export const IN_BENEFITS = [
  'Meta WhatsApp integration',
  'Google Workspace connection',
  'Outlook email and calendar sync',
  'API-based integrations',
  'Zapier automation',
  'Lead data synchronization',
  'Calendar and meeting visibility',
  'Automated workflow triggers',
  'Centralized customer communication',
  'Reduced manual data entry',
  'Better team collaboration',
  'Flexible business system connectivity',
];

export const IN_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT Services', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
];

export const IN_FINAL_CTA = {
  titleLead: 'Connect The Apps That Power ',
  titleAccent: 'Your Business.',
  titleTrail: '',
  description: '',
};
