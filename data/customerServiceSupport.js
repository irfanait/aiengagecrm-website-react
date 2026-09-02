// Content for the Customer Service & Support page. Follows the same shape as
// data/securityCompliance.js — no BenefitBand-less pattern here though: the mockup's own closing
// checklist ("Support Every Customer, On Every Channel, In One CRM") maps directly onto the
// BenefitBand band the way data/calling.js uses it, so CS_BENEFITS_HEADING/CS_BENEFITS are here.

export const CS_HERO = {
  badge: { icon: 'support_agent', label: 'CUSTOMER SERVICE & SUPPORT', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Deliver Faster, Smarter Customer ',
  titleAccent: 'Support From One CRM.',
  description:
    'Manage customer conversations, support requests, tickets, and follow-ups from one connected workspace. AiEngage CRM helps your team respond faster, keep complete customer context, automate repetitive work, and use AI to improve support efficiency.',
};

export const CS_TRUST_ITEMS = [
  { icon: 'inbox', label: 'Shared support inbox', color: 'var(--color-primary)' },
  { icon: 'bolt', label: '4-minute avg reply time', color: 'var(--color-whatsapp)' },
  { icon: 'smart_toy', label: 'AI-handled FAQs', color: 'var(--color-yellow-icon)' },
  { icon: 'confirmation_number', label: 'Ticket tracking', color: 'var(--color-primary)' },
];

export const CS_SECTIONS = [
  {
    id: 'inbox',
    mockKey: 'SharedInboxMock',
    reverse: false,
    titleLead: 'Shared Support ',
    titleAccent: 'Inbox',
    paragraphs: [
      'Bring customer conversations into one shared workspace so your team can manage inquiries, replies, assignments, and follow-ups without switching between tools.',
    ],
    lists: [
      {
        heading: 'Manage Support Conversations For',
        items: [
          'Customer inquiries',
          'Product and service questions',
          'Complaint handling',
          'Booking or appointment updates',
          'Payment-related questions',
          'Follow-up conversations',
          'Existing customer requests',
          'Escalated issues',
        ],
      },
    ],
  },
  {
    id: 'ai-support-agents',
    eyebrow: 'AI SUPPORT AGENTS',
    mockKey: 'AISupportAgentMock',
    reverse: true,
    dark: true,
    titleLead: 'Let AI Handle The ',
    titleAccent: 'Repetitive Questions.',
    paragraphs: [
      'Use AI to answer repetitive customer questions, collect information, identify intent, and handle routine support requests automatically.',
    ],
    lists: [
      {
        heading: 'Use AI Support Agents For',
        items: [
          'Frequently asked questions',
          'Product and service inquiries',
          'Basic troubleshooting',
          'Customer information collection',
          'Appointment questions',
          'Support request identification',
          'After-hours inquiries',
          'Routing customers to the right team',
        ],
      },
    ],
  },
  {
    id: 'ticket-management',
    mockKey: 'TicketManagementMock',
    reverse: false,
    titleLead: 'Ticket & Issue ',
    titleAccent: 'Management',
    paragraphs: [
      'Turn customer problems into structured support requests your team can track from start to resolution — ownership, status, notes, and follow-ups connected to the customer.',
    ],
    lists: [
      {
        heading: 'Manage Tickets For',
        items: [
          'Technical support',
          'Service requests',
          'Customer complaints',
          'Account-related issues',
          'Billing inquiries',
          'Delivery issues',
          'Refund requests',
          'Escalations',
        ],
      },
    ],
  },
  {
    id: 'omnichannel-support',
    mockKey: 'OmnichannelSupportMock',
    reverse: true,
    titleLead: 'Omnichannel Customer ',
    titleAccent: 'Support',
    paragraphs: [
      'Support customers across multiple channels while keeping every interaction connected to the same customer record.',
    ],
    lists: [
      {
        heading: 'Connect Customer Conversations Across',
        items: [
          'WhatsApp',
          'Email',
          'Business calling',
          'AI chatbot',
          'Website inquiries',
          'Meetings',
          'Support tasks',
          'Customer notes',
        ],
      },
    ],
    keyBenefits: {
      heading: 'SUPPORT PERFORMANCE THIS WEEK',
      items: ['412 customer inquiries', '4-minute average response time', '18 pending requests', '376 conversations resolved'],
    },
  },
];

export const CS_BENEFITS_HEADING = 'Support Every Customer, On Every Channel, In One CRM';

export const CS_BENEFITS = [
  'Shared Support Inbox',
  'AI Support Agents',
  'Ticket & Issue Management',
  'Omnichannel Support',
  'Support Analytics',
  'Faster Response Times',
  'Complete Customer Context',
  'After-Hours AI Replies',
  'Smart Conversation Routing',
  'Escalation Tracking',
  'Follow-Up Management',
  'Team Workload Visibility',
];

export const CS_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', href: '/industries/real-estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', href: '/industries/it', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', href: '/industries/healthcare', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { icon: 'school', label: 'Education', href: '/industries/education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', href: '/industries/tours-travels', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'account_balance', label: 'Finance', href: '/industries/finance', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
];

export const CS_FINAL_CTA = {
  titleLead: 'Deliver Better Customer Support With ',
  titleAccent: 'AiEngage CRM.',
  titleTrail: '',
  description: '',
};
