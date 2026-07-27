// Content for the About Us page (V2 redesign). Structurally different from the product feature
// pages — a centered hero, an origin-story section with a stats card, a "challenges" checklist,
// an industries showcase, an "approach to AI" card row, a dark mission banner, a 9-card features
// grid (AB_FEATURES — also reused by the homepage's AIStageSlider, keep in sync with care), a
// "why businesses trust us" checklist, and a dark final CTA.

export const AB_HERO = {
  badge: { icon: null, label: 'ABOUT US', bg: '#fff3ea', textColor: 'var(--color-primary-hover)' },
  titleLead: 'More Than a CRM.',
  titleAccent: 'Built to Help Businesses Grow.',
  description: 'Built on 17 Years of Experience. Designed for the Future.',
};

export const AB_STORY_HEADING = 'A platform shaped by 17 years of working with businesses.';

export const AB_STORY_PARAGRAPHS = [
  'AiEngage CRM is the result of 17 years of experience working with businesses, understanding their challenges, and building solutions that simplify growth.',
  'Founded by Sachin Dhanotiya and developed by the AiTrillion team, our journey began by helping 10,000+ businesses strengthen customer relationships, automate operations, and scale through technology.',
  'After years of building AI and automation solutions for eCommerce businesses, we realized that service industries were facing the same challenges—manual work, scattered communication, missed follow-ups, and limited visibility.',
  "That's why we created AiEngage—an AI-powered Business Automation Platform built specifically for modern service businesses.",
];

export const AB_STORY_STATS = [
  { value: '17+', label: 'Years of experience' },
  { value: '10,000+', label: 'Businesses served' },
  { value: '1', label: 'Connected platform' },
];

export const AB_CHALLENGES_HEADING = 'We Understand How Businesses Actually Work';
export const AB_CHALLENGES_SUBTITLE = 'Every business is different, but the day-to-day challenges are surprisingly similar.';

export const AB_CHALLENGES = [
  'Leads come from multiple sources.',
  'Teams communicate on different platforms.',
  'Follow-ups are missed.',
  'Business owners struggle to track what is happening.',
  'Employees spend more time managing work than growing the business.',
];

export const AB_CHALLENGES_NOTE = [
  "We've seen these challenges across thousands of businesses over the last 17 years.",
  'AiEngage was built to simplify these processes, helping businesses become more organized, responsive, and scalable through AI and automation.',
];

export const AB_INDUSTRIES_HEADING = 'From eCommerce Innovation to Every Service Business';

export const AB_INDUSTRIES_INTRO = [
  'Our experience started in the world of eCommerce, where speed, customer engagement, and automation are essential for growth.',
  'The same principles now power AiEngage for service industries.',
];

export const AB_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', href: '/industries/real-estate' },
  { icon: 'memory', label: 'IT', href: '/industries/it' },
  { icon: 'account_balance', label: 'Finance', href: '/industries/finance' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', href: '/industries/tours-travels' },
  { icon: 'school', label: 'Education', href: '/industries/education' },
  { icon: 'medical_services', label: 'Healthcare', href: '/industries/healthcare' },
  { icon: 'badge', label: 'Professional Services' },
  { icon: 'precision_manufacturing', label: 'Manufacturing' },
];

export const AB_INDUSTRIES_NOTE = 'And many more.';
export const AB_INDUSTRIES_TAGLINE = 'Every industry has its own workflow, but every growing business benefits from better systems.';

export const AB_APPROACH_HEADING = 'Our Approach to AI';
export const AB_APPROACH_SUBTITLE = 'We believe AI should support people, not replace them.';

export const AB_APPROACH_CARDS = [
  {
    icon: 'bolt',
    title: 'Removes Repetitive Work',
    body: "Technology is most valuable when it takes the manual, repeating tasks off your team's plate.",
  },
  {
    icon: 'forum',
    title: 'Improves Customer Experiences',
    body: 'Faster responses and consistent communication across every conversation.',
  },
  {
    icon: 'insights',
    title: 'Supports Better Decisions',
    body: 'Clear visibility into what is happening, so teams can act on it.',
  },
];

export const AB_APPROACH_NOTE =
  'By combining AI with automation and a connected business platform, we help businesses respond faster, stay organized, and create consistent customer experiences—while keeping people at the center of every interaction.';

export const AB_MISSION_BANNER = {
  eyebrow: 'OUR MISSION',
  heading: 'To help businesses grow with smarter systems, intelligent automation, and practical AI.',
  description:
    "We're building more than software—we're building a platform that gives business owners greater visibility, empowers teams to work more efficiently, and creates processes that scale as the business grows.",
};

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

export const AB_TRUST_HEADING = 'Why Businesses Trust AiEngage';

export const AB_TRUST_ITEMS = [
  '17+ years of industry experience',
  'Trusted by 10,000+ businesses',
  'Built by the experienced AiTrillion team',
  'Purpose-built for modern service businesses',
  'Focused on practical AI and business automation',
  'Committed to long-term customer success',
];

export const AB_TRUST_NOTE =
  "At AiEngage, we don't just build technology—we build systems that help businesses work smarter, serve customers better, and grow with confidence.";

export const AB_FINAL_CTA = {
  titleLead: 'Turn More Conversations ',
  titleAccent: 'Into Customers',
  description: 'Use AI to respond faster, qualify leads, automate follow-ups, and move every opportunity forward.',
};
