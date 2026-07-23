// "AiEngage vs HubSpot" comparison page content.

export const HUB_HERO = {
  badge: 'AIENGAGE VS HUBSPOT',
  titleLines: ['Using HubSpot Today?', "Here's Why You Should Switch"],
};

export const HUB_PROBLEM = {
  paragraphs: [
    "If you're running a growing business and using HubSpot, you probably deal with this every day.",
    'A lead fills out a form. A message comes in on WhatsApp. Another inquiry lands in your email.',
    "Now you're jumping between HubSpot, your inbox, WhatsApp tools, and campaign dashboards just to keep everything updated. Updating contacts. Logging conversations. Setting follow-ups. Making sure nothing falls through the cracks.",
    "CRMs were supposed to make managing customers easier. But somewhere between multiple hubs, integrations, and workflows, it can start to feel like you're managing the system instead of the system helping you manage your customers.",
  ],
  leadOut: 'This Is Where We Stand Out.',
  contactCard: {
    name: 'Rohan Sharma',
    initials: 'RS',
    sub: 'CRM · Contact',
    fields: [
      { label: 'Phone', value: '+91 98204 55127' },
      { label: 'Stage', value: 'Proposal' },
      { label: 'Owner', value: 'Meera K.' },
    ],
    footNote: 'Last updated 6 days ago',
  },
  inbox: {
    title: 'Inbox',
    rows: [
      { name: 'Rohan Sharma', sub: 'Re: pricing for annual plan', unread: true },
      { name: 'Priya Nair', sub: 'Demo follow-up', unread: false },
      { name: 'Arjun Mehta', sub: 'Invoice question', unread: false },
      { name: 'Kavya Nair', sub: 'Reschedule request', unread: false },
    ],
  },
  chatThread: {
    name: 'Rohan Sharma',
    sub: 'WhatsApp · separate tool',
    messages: [
      { from: 'in', text: 'Is the annual plan still available?' },
      { from: 'out', text: 'Let me check and get back to you.' },
      { from: 'in', text: 'Any update on this?' },
    ],
  },
  campaignChart: {
    title: 'Campaigns',
    badge: { text: 'Owner · Unassigned', tone: 'warn' },
    bars: [44, 70, 52, 88, 60, 74],
    stats: [
      { value: '2,480', label: 'Sent' },
      { value: '18%', label: 'Replied' },
      { value: '312', label: 'Clicks' },
    ],
  },
};

export const CONTACTS_CARD1 = [
  { name: 'Rohan Sharma', initials: 'RS', avatarBg: '#FFE1D6', avatarFg: '#E64A24', sub: 'Confirmed the booking' },
  { name: 'Priya Nair', initials: 'PN', avatarBg: '#F3E1D0', avatarFg: '#B06A25', sub: 'Asked for pricing' },
];

export const PLATFORM_GRID_ITEMS = [
  { icon: 'forum', label: 'Messaging' },
  { icon: 'bolt', label: 'Automation' },
  { icon: 'campaign', label: 'Campaigns' },
  { icon: 'favorite', label: 'Engagement' },
];

export const PLATFORM_GRID_ITEMS_ZOHO = [
  { icon: 'forum', label: 'Messaging' },
  { icon: 'bolt', label: 'Automation' },
  { icon: 'manage_accounts', label: 'Leads' },
  { icon: 'favorite', label: 'Engagement' },
];

export const GROWTH_TIMELINE_ITEMS = [
  { icon: 'person_add', label: 'Lead' },
  { icon: 'forum', label: 'Conversation' },
  { icon: 'event_available', label: 'Booking' },
  { icon: 'update', label: 'Follow-up' },
];

export const HUB_DIFFERENTIATORS = {
  heading: 'Built Around How Service Businesses Actually Work',
  description:
    'If you run a service business, you know most of the day revolves around conversations. A new inquiry comes in, someone asks for pricing, another customer wants to confirm a booking, and someone else needs a quick follow up. Our platform is designed to support that flow. Instead of managing separate tools for leads, communication, and automation, everything works together in one place so every interaction stays connected from the first inquiry to a long term client relationship.',
  items: [
    {
      title: 'Communication at the Center of Customer Engagement',
      body: 'Most customer relationships begin with a simple message. It might be a WhatsApp inquiry, an SMS, or an email asking for more information. Instead of moving between multiple tools, your team can manage conversations, send campaigns, and automate reminders directly from one platform while keeping every interaction connected to the customer profile. This means faster responses, better context, and more meaningful customer conversations.',
    },
    {
      title: 'Advanced Capabilities Without Rising Software Costs',
      body: 'As businesses grow, the number of tools usually grows with them. One tool for messaging, another for automation, another for campaigns. Over time it becomes harder to manage and more expensive to maintain. Our platform brings those capabilities together in one place. Marketing automation, messaging, engagement tracking, and customer management work side by side so your team can grow without adding complexity.',
    },
    {
      title: 'Everything Working Together in One Place',
      body: 'Leads, conversations, bookings, campaigns, and follow ups all stay connected within one workflow. Your team does not have to jump between systems to understand what is happening with a customer. Everything is visible in one place so you can respond quickly, stay organized, and keep your business running smoothly.',
    },
  ],
};

export const HUB_TABLE = {
  competitor: 'HubSpot',
  rows: [
    { cap: 'WhatsApp Marketing', competitor: 'Integration Required', ai: 'Built-in', bg: '#FAF7F1' },
    { cap: 'SMS Marketing', competitor: 'Limited', ai: 'Built-in', bg: '#FFFFFF' },
    { cap: 'Appointment & Inquiry Workflows', competitor: 'Custom Setup', ai: 'Native', bg: '#FAF7F1' },
    { cap: 'Automation', competitor: 'Limited', ai: 'Smart', bg: '#FFFFFF' },
    { cap: 'Multi-Tool Dependency', competitor: 'High', ai: 'Low', bg: '#FAF7F1' },
    { cap: 'Service Business Workflows', competitor: 'Limited', ai: 'Optimized', bg: '#FFFFFF' },
    { cap: 'Cost Scalability', competitor: 'Expensive', ai: 'Cost-Efficient', bg: '#FAF7F1' },
  ],
};
