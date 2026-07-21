// Content for the About Us page. Structurally different from the product feature pages —
// no ProductHero/FeatureSection zig-zag here, just a centered hero, a mission statement,
// a "why it works" card grid + result stats, a 9-card features grid linking to product pages,
// an industries grid, and a dark final CTA.

export const AB_HERO = {
  badge: { icon: null, label: 'ABOUT US', bg: '#fff3ea', textColor: 'var(--color-primary-hover)' },
  titleLead: 'AI-Powered CRM To Manage ',
  titleAccent: 'Every Lead, Conversation, And Sale',
  description:
    'Manage every customer conversation with an AI-powered CRM assistant that qualifies leads, automates follow-ups, reduces repetitive work, and keeps your sales pipeline moving.',
};

export const AB_MISSION = {
  heading: 'We Built AiEngage CRM To Help You Capture Every Lead',
  tagline: 'Making Customer Engagement Smarter With AI.',
  paragraphs: [
    'Our mission is to help businesses manage every customer interaction with greater speed, consistency, and clarity.',
    'AiEngage CRM brings AI into the complete customer journey. It can answer common questions, qualify incoming leads, summarize conversations, automate follow-ups, assign tasks, and move opportunities to the next stage.',
    'This creates a faster, more organized experience for both businesses and their customers.',
  ],
};

export const AB_WHY_HEADING = 'Built To Turn More Conversations Into Conversions';

export const AB_WHY_CARDS = [
  { icon: 'bolt', title: 'Faster Responses', body: 'AI agents and chatbots can respond to customer enquiries instantly, even when teams are unavailable.' },
  { icon: 'fact_check', title: 'Smarter Lead Qualification', body: 'AI can ask relevant questions, understand customer intent, and identify high-potential leads.' },
  { icon: 'update', title: 'Automated Follow-Ups', body: 'Messages, reminders, tasks, and next steps can be triggered automatically based on customer activity.' },
  { icon: 'task_alt', title: 'Less Manual Work', body: 'Conversation summaries, lead updates, assignments, and repetitive actions can be handled automatically.' },
];

export const AB_RESULT_LABEL = 'RESULT';

export const AB_RESULT_STATS = [
  { value: '2X', label: 'Faster Follow-Ups' },
  { value: '50%', label: 'Less Manual Work' },
  { value: 'More', label: 'Qualified Leads' },
];

export const AB_FEATURES_HEADING = 'AI Built Into Every Stage Of Customer Engagement';

export const AB_FEATURES = [
  {
    href: '/ai',
    icon: 'neurology',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'AI-Powered CRM',
    description:
      'Use AI summaries, chatbots, email assistance, insights, and lead qualification to understand customers and respond faster. Automatically collect lead details, identify buying intent, and help your team focus on the best opportunities.',
    mockKey: 'AICapabilitiesMock',
    capabilities: ['Smart Summaries', 'AI Chatbot', 'AI Insights', 'AI Email Assistant', 'AI Lead Qualification'],
  },
  {
    href: '/whatsapp',
    icon: 'chat',
    iconBg: 'var(--color-green-tint)',
    iconColor: 'var(--color-green)',
    title: 'WhatsApp AI Agent',
    description:
      'Automate replies, answer common questions, collect customer details, and qualify leads on WhatsApp. Transfer conversations to a team member whenever human support is needed.',
    mockKey: 'WhatsAppAgentMock',
    capabilities: ['Automated Replies', 'Answer Questions', 'Collect Information', 'Qualify Leads', 'Human Handover'],
  },
  {
    href: '/calling',
    icon: 'call',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Voice Calling',
    description:
      'Make and receive business calls directly from the CRM. Record calls, generate transcripts, add notes, and keep every discussion connected to the right customer or deal.',
    mockKey: 'VoiceCallingMock',
    capabilities: ['Business Calling', 'Call Recording', 'Automatic Transcripts', 'Call Notes', 'Customer History'],
  },
  {
    href: '/mobile-app',
    icon: 'smartphone',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Mobile CRM',
    description:
      'Access leads, conversations, deals, tasks, and customer details from anywhere. Help your team respond quickly and stay productive during calls, meetings, or site visits.',
    mockKey: 'MobileCRMMock',
    capabilities: ['Access Leads Anywhere', 'Manage Conversations', 'View Deals and Tasks', 'Customer Details', 'Mobile Follow-Ups'],
  },
  {
    href: '/sales-pipeline',
    icon: 'account_tree',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Sales Pipeline',
    description:
      'Manage every opportunity through visual pipelines and Kanban views. Track deal stages, follow-ups, ownership, and progress from first contact to closure.',
    mockKey: 'SalesPipelineMock',
    capabilities: ['Visual Pipelines', 'Kanban Views', 'Deal Stages', 'Follow-Up Tracking', 'Ownership and Progress'],
  },
  {
    href: '/lead-management',
    icon: 'person_search',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Lead Management',
    description:
      'Capture leads from forms, WhatsApp, campaigns, and other sources. Qualify, assign, prioritize, and follow up with every lead from one organized system.',
    mockKey: 'LeadManagementMock',
    capabilities: ['Lead Capture', 'Lead Qualification', 'Lead Assignment', 'Lead Prioritization', 'Follow-Up Management'],
  },
  {
    href: '/customization',
    icon: 'tune',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Customization',
    description:
      'Customize pipelines, fields, stages, forms, workflows, and user access to match your business process. Build a CRM experience that works the way your business works.',
    mockKey: 'CustomizationMock',
    capabilities: ['Custom Pipelines', 'Custom Fields', 'Custom Forms', 'Workflow Configuration', 'User Access Control'],
  },
  {
    href: '/multichannel-communication',
    icon: 'forum',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Multichannel Communication',
    description:
      'Bring WhatsApp, email, calls, and customer messages into one connected workspace. Give your team complete context and a unified view of every customer interaction.',
    mockKey: 'MultichannelMock',
    capabilities: ['WhatsApp', 'Email', 'Voice Calls', 'Customer Messages', 'Unified Conversation History'],
  },
  {
    href: '/automation',
    icon: 'bolt',
    iconBg: 'var(--color-primary-tint)',
    iconColor: 'var(--color-primary)',
    title: 'Automation',
    description:
      'Automate messages, reminders, lead assignments, follow-ups, tasks, and customer journeys. Reduce repetitive work and keep every process moving.',
    mockKey: 'AutomationFlowMock',
    capabilities: ['Automated Messages', 'Follow-Up Automation', 'Task Automation', 'Lead Assignment', 'Customer Journeys'],
  },
];

export const AB_INDUSTRIES_HEADING = 'Trusted Across Growing Industries';

export const AB_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
];

export const AB_FINAL_CTA = {
  titleLead: 'Turn More Conversations ',
  titleAccent: 'Into Customers',
  description: 'Use AI to respond faster, qualify leads, automate follow-ups, and move every opportunity forward.',
};
