// "AiEngage vs Zoho" comparison page content.

export const ZOHO_HERO = {
  badge: 'AIENGAGE VS ZOHO',
  titleLead: 'Still Using Zoho CRM?',
  titleAccentLine: { lead: 'Try Our ', accent: 'Simpler Alternative', trail: ' to Zoho CRM' },
};

export const ZOHO_PROBLEM = {
  paragraphs: [
    'If you are running a growing business and using Zoho, you have probably experienced something similar. It usually starts with Zoho CRM. Then you add Zoho Campaigns to manage marketing. Maybe Zoho Desk for support. And eventually another app for messaging or automation. You start with Zoho CRM.',
    'Before long, you find yourself managing several Zoho apps just to keep everything connected. A new lead comes in. You update the CRM. You launch a campaign from another tool. Then you switch to another dashboard to track communication. After a while, you start noticing something. Instead of helping you move faster, the system is asking for more setup, more tools, and more time to manage it all.',
  ],
  leadOut: 'This Is Where We Come In.',
  contactCard: {
    name: 'Rohan Sharma',
    initials: 'RS',
    sub: 'Contact record',
    badge: 'CRM app',
    fields: [
      { label: 'Phone', value: '+91 98204 55127' },
      { label: 'Stage', value: 'Proposal' },
      { label: 'Owner', value: 'Meera K.' },
    ],
    footNote: 'Last updated 6 days ago',
  },
  campaignChart: {
    title: 'Campaigns',
    badge: { text: 'Separate app' },
    bars: [44, 70, 52, 88, 60, 74],
    stats: [
      { value: '2,480', label: 'Sent' },
      { value: '18%', label: 'Opened' },
      { value: '312', label: 'Clicks' },
    ],
  },
  ticket: {
    ticketId: 'Ticket #4821',
    badge: 'Desk app',
    name: 'Rohan Sharma',
    initials: 'RS',
    question: 'Where is my invoice?',
    priorityLabel: 'Overdue · 2 days',
  },
  workflowBuilder: {
    title: 'Workflow builder',
    badge: 'Separate app',
    steps: [{ label: 'New lead' }, { label: 'Assign' }, { label: 'Setup needed', warn: true }],
    caption: 'Connects to CRM via integration',
  },
};

export const ZOHO_DIFFERENTIATORS = {
  heading: 'Built for Businesses That Need Speed And Not Setup',
  description:
    'Zoho offers many tools, but getting them to work together often requires configuration, integrations, and time. Most service businesses do not want to spend hours connecting apps or building workflows. They want a system where leads, conversations, and follow ups work together from the start. That is exactly what our platform delivers. Everything is already connected so your team can focus on responding to customers instead of managing software.',
  items: [
    {
      title: "Conversations Shouldn't Live Outside Your CRM",
      body: 'In many Zoho setups, messaging channels like WhatsApp or SMS still rely on additional tools or integrations. That often pushes conversations outside the CRM. Here, communication stays inside the system. With AiEngage, your team can manage WhatsApp chats, send SMS updates, automate reminders, and run email campaigns while every interaction remains linked to the customer record. This makes it easier to respond quickly and keep relationships organized.',
    },
    {
      title: 'Fewer Tools, Less Complexity',
      body: "Zoho's ecosystem is built on several applications. CRM, Campaigns, Desk, and automation tools. Managing them can become complicated for growing teams. Our platform brings messaging, automation, lead management, and engagement all at one place so your team spends less time switching tools and more time focusing on customers.",
    },
    {
      title: 'A System That Grows With Your Business',
      body: 'As your business expands, your system should make things easier, not more complicated. Leads, conversations, campaigns, bookings, and follow ups all stay connected in one environment. Your team stays organized, responds faster, and keeps customer engagement consistent as the business scales.',
    },
  ],
};

export const ZOHO_TABLE = {
  competitor: 'Zoho CRM',
  rows: [
    { cap: 'Setup & Configuration', competitor: 'Requires customization and setup', ai: 'Ready-to-use workflows from day one', bg: '#FAF7F1' },
    { cap: 'WhatsApp Marketing', competitor: 'Integration or extensions required', ai: 'Built-in WhatsApp engagement', bg: '#FFFFFF' },
    { cap: 'SMS Marketing', competitor: 'Add-ons or integrations', ai: 'Native SMS communication', bg: '#FAF7F1' },
    { cap: 'Lead & Inquiry Management', competitor: 'Multi-step', ai: 'Streamlined pipeline management', bg: '#FFFFFF' },
    { cap: 'Follow-Up Automation', competitor: 'Requires configuration', ai: 'Automated by default', bg: '#FAF7F1' },
    { cap: 'Communication Tracking', competitor: 'Fragmented across tools', ai: 'Centralized conversation', bg: '#FFFFFF' },
    { cap: 'Tool Dependency', competitor: 'Multiple apps', ai: 'All-in-one platform', bg: '#FAF7F1' },
    { cap: 'Adoption & Training', competitor: 'Learning curve involved', ai: 'Easy to adopt', bg: '#FFFFFF' },
    { cap: 'Service Business Workflows', competitor: 'Custom setup required', ai: 'Optimized', bg: '#FAF7F1' },
    { cap: 'Cost Predictability', competitor: 'Expensive', ai: 'Cost-effective', bg: '#FFFFFF' },
    { cap: 'Speed of Execution', competitor: 'Process-heavy', ai: 'Autopilot', bg: '#FAF7F1' },
  ],
};
