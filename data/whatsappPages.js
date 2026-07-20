// Content for the WhatsApp Business page — a single scrolling page (no more sub-routes).
// Sub-sections are anchor-linked (#team-inbox, #multiple-numbers, ...) so the mega menu and
// other pages can deep-link straight to a section instead of a separate page.

export const WHATSAPP_HERO = {
  badge: { icon: 'chat', label: 'WHATSAPP BUSINESS', bg: 'var(--color-green-tint)', iconColor: 'var(--color-green)', textColor: 'var(--color-whatsapp)' },
  titleLead: 'WhatsApp for ',
  titleAccent: 'Smarter Sales',
  titleTrail: ' & Stronger Customer Connections',
  description: 'Monitor lead engagement and behavior to identify high-intent prospects showing real buying interest.',
  checklist: [
    { icon: 'dialpad', label: 'Multiple WhatsApp Numbers', color: 'var(--color-green)' },
    { icon: 'inbox', label: 'Shared Team Inbox', color: 'var(--color-green)' },
    { icon: 'verified', label: 'Official WhatsApp Business API', color: 'var(--color-green)' },
    { icon: 'hub', label: 'CRM + Meta Ads + Google Ads Integration', color: 'var(--color-green)' },
  ],
};

export const WHATSAPP_TRUST_ITEMS = [
  { icon: 'verified', label: 'Official WhatsApp Business API', color: 'var(--color-green)' },
  { icon: 'bolt', label: 'Replies in seconds, 24/7', color: 'var(--color-primary)' },
  { icon: 'group', label: 'Unlimited team members', color: 'var(--color-purple)' },
  { icon: 'lock', label: 'End-to-end encrypted', color: 'var(--color-blue)' },
];

// Anchor id, alternating visual side (reverse = visual on the right, white background),
// eyebrow number/label, heading (accent word always trails), body copy and checklist(s).
export const WHATSAPP_SECTIONS = [
  {
    id: 'team-inbox',
    index: '01',
    eyebrow: 'SHARED INBOX',
    titleLead: 'WhatsApp ',
    titleAccent: 'Team Inbox',
    mockKey: 'TeamInboxMock',
    reverse: false,
    paragraphs: [
      'Give your entire team one shared inbox to manage customer chats from one or multiple WhatsApp numbers. Assign conversations, add internal notes, track response times, and ensure every inquiry gets the right response from the right team member.',
      'With multi-sender access, admins can connect multiple WhatsApp numbers and assign specific numbers to specific users or teams. Team members can only view and use the numbers and chats assigned to them, keeping conversations private and controlled.',
      'This helps businesses manage sales, support, marketing, partnerships, branches, and other department chats without mixing conversations or exposing private customer communication.',
    ],
    lists: [
      {
        heading: "What's Included",
        items: [
          'Shared team inbox',
          'Multiple agents on one number',
          'Multiple WhatsApp sender numbers',
          'User-wise number assignment',
          'Chat-specific access control',
          'Private chat access',
          'Department-wise visibility',
          'Conversation assignment',
          'Internal team notes',
          'Response tracking',
          'Complete conversation history',
          'Admin access across all numbers',
        ],
      },
    ],
  },
  {
    id: 'multiple-numbers',
    index: '02',
    eyebrow: 'MULTI-NUMBER',
    titleLead: 'Manage Multiple ',
    titleAccent: 'WhatsApp Numbers',
    mockKey: 'NumbersMock',
    reverse: true,
    paragraphs: [
      'Use separate WhatsApp numbers for sales, support, marketing, admin teams, branches, bookings, and payments. Manage every number from one CRM, route chats to the right department, and maintain complete visibility across all conversations.',
    ],
    lists: [
      {
        heading: "What's Included",
        items: [
          'Multiple business numbers',
          'Department-wise chat management',
          'Team-wise conversation routing',
          'Chat transfers between teams',
          'Centralized visibility across numbers',
        ],
      },
    ],
  },
  {
    id: 'ai-agent',
    index: '03',
    eyebrow: 'AI AGENT',
    titleLead: 'WhatsApp ',
    titleAccent: 'AI Agent',
    titleTrail: ' Integration',
    mockKey: 'AIAgentChatMock',
    reverse: false,
    paragraphs: [
      'Automate replies, solve inquiries, and qualify leads on WhatsApp. Turn your WhatsApp number into an AI-powered customer engagement channel. Our AI Agent responds to incoming WhatsApp chats, answers customer questions, collects details, qualifies leads, and supports your team in real time.',
      "Train the AI Agent with your company's business knowledge using PDFs, documents, website pages, and other knowledge content. It can understand your information and provide more accurate, relevant answers to customer inquiries.",
    ],
    lists: [
      {
        heading: 'What the AI Agent Can Do',
        items: [
          'Send automated WhatsApp replies',
          'Answer inquiries in real time',
          'Collect lead and customer information',
          'Ask qualification questions',
          'Mark leads qualified or unqualified',
          'Handle common sales & support queries',
          'Share pricing or service information',
          'Let human agents take over anytime',
        ],
      },
      {
        heading: 'What You Can Set Up',
        items: [
          'AI Agent tone & communication style',
          'Welcome message',
          'Callback message',
          'Pricing-related responses',
          'Sales agent behavior',
          'Signature settings',
          'Business knowledge source',
          'Website activation',
          'WhatsApp number connection',
        ],
      },
    ],
  },
  {
    id: 'chat-management',
    index: '04',
    eyebrow: 'CHAT MANAGEMENT',
    titleLead: 'Smart WhatsApp ',
    titleAccent: 'Chat Management',
    mockKey: 'ChatManagementMock',
    reverse: true,
    paragraphs: [
      'Keep every customer conversation organized and easy to act on. Filter chats by status, assigned agent, tags, department, or lead stage. Search previous conversations, prioritize follow-ups, and view customer information without switching screens.',
    ],
    lists: [
      {
        heading: 'Manage Chats With',
        items: ['Smart filters', 'Customer tags & labels', 'Lead status tracking', 'Priority follow-ups', 'Searchable chat history', 'Customer profile & timeline'],
      },
    ],
  },
  {
    id: 'broadcast',
    index: '05',
    eyebrow: 'BROADCAST',
    titleLead: 'WhatsApp ',
    titleAccent: 'Broadcast Campaigns',
    mockKey: 'BroadcastMock',
    reverse: false,
    paragraphs: [
      'Send personalized WhatsApp campaigns to thousands of customers and prospects at scale. Promote products, share offers, announce services, invite customers to events, and send relevant updates.',
    ],
    lists: [
      {
        heading: 'Send Campaigns With',
        items: ['Images and videos', 'PDFs and documents', 'Product catalogs', 'CTA buttons', 'Approved templates', 'Personalized customer data'],
      },
    ],
  },
  {
    id: 'one-to-one',
    index: '06',
    eyebrow: 'PERSONAL MESSAGING',
    titleLead: 'One-to-One ',
    titleAccent: 'Customer Messaging',
    mockKey: 'OneToOneMock',
    reverse: true,
    paragraphs: [
      'Chat personally with every lead and customer from one screen. View their CRM profile, past chats, calls, emails, quotations, deals, notes, and follow-up activity while responding.',
    ],
    lists: [
      {
        heading: 'What Your Team Can Do',
        items: ['Send WhatsApp messages', 'Make calls', 'Send emails', 'Update lead stages', 'Add notes and tasks', 'View complete customer history'],
      },
    ],
  },
  {
    id: 'automation',
    index: '07',
    eyebrow: 'AUTOMATION',
    titleLead: 'WhatsApp ',
    titleAccent: 'Automation',
    mockKey: 'AutomationMock',
    reverse: false,
    paragraphs: [
      'Automate customer engagement without manual follow-ups. Create automated journeys that send the right message when a customer submits an enquiry, books a meeting, receives a quotation, makes a purchase, or needs a reminder.',
    ],
    lists: [
      {
        heading: 'Automate Messages For',
        items: ['New lead inquiries', 'Birthday wishes', 'Proposal follow-ups', 'Feedback requests', 'Booking confirmations', 'Purchase thank-you messages', 'Payment reminders', 'Re-engagement campaigns'],
      },
    ],
  },
  {
    id: 'flows-forms',
    index: '08',
    eyebrow: 'FLOWS & FORMS',
    titleLead: 'WhatsApp Forms, Flow & ',
    titleAccent: 'Lead Qualification',
    mockKey: 'FlowsFormsMock',
    reverse: true,
    paragraphs: [
      'Guide customers through simple self-service journeys directly inside WhatsApp. Ask the right questions before a sales call, collect requirements, schedule appointments, and route customers to the right team.',
      'With WhatsApp Forms, customers can submit their details directly inside WhatsApp without going to an external landing page. Every form submission is automatically saved in AiEngage CRM for follow-up and tracking.',
    ],
    lists: [
      {
        heading: 'Use WhatsApp Flows For',
        items: ['Lead qualification', 'Appointment booking', 'Product selection', 'Service requests', 'Support requests', 'Event registrations', 'Enquiry forms', 'Customer feedback', 'Callback requests'],
      },
      {
        heading: 'Capture Details',
        items: ['Name and phone number', 'Email address', 'Budget', 'Location', 'Requirement', 'Product or service interest', 'Preferred time', 'Appointment preference', 'Custom questions'],
      },
    ],
  },
  {
    id: 'segmentation',
    index: '09',
    eyebrow: 'SEGMENTATION',
    titleLead: 'Customer ',
    titleAccent: 'Segmentation',
    mockKey: 'SegmentationMock',
    reverse: false,
    paragraphs: [
      'Send the right WhatsApp message to the right customer. Create targeted customer segments based on purchase history, customer behavior, location, tags, interests, lead stage, and custom attributes.',
    ],
    lists: [
      {
        heading: 'Target Customers',
        items: ['Interested in a specific product', 'High-value customers', 'Inactive for 90 days', 'Pending quotations', 'Event attendees', 'Celebrating birthdays'],
      },
    ],
  },
  {
    id: 'crm-integration',
    index: '10',
    eyebrow: 'INTEGRATIONS',
    titleLead: 'Complete ',
    titleAccent: 'CRM Integration',
    mockKey: 'CrmIntegrationMock',
    reverse: true,
    paragraphs: [
      'Connect Meta and Google Lead Ads with AiEngage CRM to capture every lead as soon as a form is submitted. Sync lead submissions in real time, configure each lead form individually, map form fields to the right CRM fields, and route leads to the appropriate sales team. Track connection status, sync activity, delivery time, and failed submissions from one dashboard.',
    ],
    lists: [
      {
        heading: 'What You Can Manage',
        items: ['Real-time lead sync', 'Lead routing', 'Form-level configuration', 'Sync status', 'Field mapping', 'Event monitoring'],
      },
    ],
  },
  {
    id: 'analytics',
    index: '11',
    eyebrow: 'DASHBOARD',
    titleLead: 'Manage Dashboard & ',
    titleAccent: 'Analytics',
    mockKey: 'AnalyticsMock',
    reverse: false,
    paragraphs: [
      'Track WhatsApp performance with real-time dashboards and reports. Know how quickly your team is responding, which campaigns are performing, and where leads need attention.',
    ],
    lists: [
      {
        heading: 'Track',
        items: ['Response time', 'Campaign performance', 'Pending chats', 'Customer responses', 'Agent performance', 'Lead conversion rates', 'Messages sent', 'Revenue attribution', 'Delivery and read rates', 'Follow-up status'],
      },
    ],
  },
];

export const WHATSAPP_BENEFITS_HEADING = 'Turn Every WhatsApp Chat Into a Business Opportunity';

export const WHATSAPP_BENEFITS = [
  'Multiple WhatsApp Numbers',
  'Shared Team Inbox',
  'One-to-One Messaging',
  'Broadcast Campaigns',
  'WhatsApp Automation',
  'WhatsApp Flows & Forms',
  'Customer Segmentation',
  'CRM Integration',
  'Team Collaboration',
  'Real-Time Reporting',
  'Mobile & Web Access',
  'Private Chat Access',
];

export const WHATSAPP_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'celebration', label: 'Event Management', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
];

export const WHATSAPP_FINAL_CTA = {
  titleLead: 'Turn WhatsApp Into Your Most Powerful ',
  titleAccent: 'Sales & Customer Engagement',
  titleTrail: ' Channel',
  description: 'Connect multiple WhatsApp Business numbers, automate conversations, manage your team inbox, and turn every inquiry into a customer.',
};
