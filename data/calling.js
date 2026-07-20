// Content for the Calling page — a single scrolling page with anchor-linked sections,
// mirroring the Automation page's structure (see data/automation.js).

export const CL_HERO = {
  badge: { icon: 'call', label: 'BUILT-IN CALLING', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'All Your Business Calls. ',
  titleAccent: 'One Powerful Platform.',
  description:
    'Bring all your business calls into one CRM. Call, record, transcribe, route, and track every customer conversation from a single platform.',
};

export const CL_TRUST_ITEMS = [
  { icon: 'public', label: 'Multi-country numbers', color: 'var(--color-primary)' },
  { icon: 'graphic_eq', label: 'Recording & transcription', color: 'var(--color-blue)' },
  { icon: 'alt_route', label: 'Smart call routing', color: 'var(--color-whatsapp)' },
  { icon: 'hub', label: 'CRM · WhatsApp · Email', color: 'var(--color-purple)' },
];

export const CL_SECTIONS = [
  {
    id: 'business-numbers',
    index: '01',
    eyebrow: 'BUSINESS NUMBERS',
    titleLead: 'Connect Business Numbers ',
    titleAccent: 'Across Countries',
    mockKey: 'ConnectedNumbersMock',
    reverse: false,
    leadParagraph: '',
    paragraphs: [
      'Manage multiple business numbers from one CRM. Your team can receive business calls through the AiEngage mobile app or transfer calls from the web CRM to their personal mobile number.',
    ],
    lists: [
      {
        heading: 'Connect Numbers Across',
        items: ['India', 'United States', 'International markets', 'Local offices', 'Departments and teams', 'Mobile app'],
      },
    ],
  },
  {
    id: 'assign-numbers',
    index: '02',
    eyebrow: 'RIGHT NUMBER',
    titleLead: 'Give Every Team Member ',
    titleAccent: 'the Right Number',
    mockKey: 'AssignNumbersMock',
    reverse: true,
    leadParagraph: '',
    paragraphs: [
      'Assign the right business number based on the customer, region, department, or campaign. Each team member can switch between assigned numbers directly inside AiEngage CRM.',
    ],
    lists: [
      {
        heading: 'For Example:',
        items: ['US Sales Number', 'India Sales Number', 'Customer Support Number', 'VIP Customer Line', 'Regional Business Number'],
        columns: 1,
      },
    ],
    trailingParagraph: 'No extra phones. No separate calling tools. Just the right number for every customer conversation.',
  },
  {
    id: 'call-timeline',
    index: '03',
    eyebrow: 'CALL TIMELINE',
    titleLead: 'Every Call Saved In ',
    titleAccent: 'One Timeline',
    mockKey: 'CallTimelineMock',
    reverse: false,
    leadParagraph: '',
    paragraphs: [
      'Every incoming and outgoing call is automatically saved against the right customer record. Your team can see the full history of every customer conversation, without searching through personal phones, spreadsheets, or multiple tools.',
    ],
    lists: [
      {
        heading: 'View Call Details',
        items: [
          'Call date and time',
          'Automatic call transcription',
          'Call duration',
          'Call recording',
          'Call outcome',
          'Follow-up notes',
          'Assigned team member',
        ],
      },
    ],
    trailingParagraph: 'Read searchable call transcripts, review recordings, and quickly understand what was discussed without listening to the full call.',
  },
  {
    id: 'call-routing',
    index: '04',
    eyebrow: 'ROUTING',
    titleLead: 'Call Forwarding & ',
    titleAccent: 'Smart Routing',
    mockKey: 'CallRoutingMock',
    reverse: true,
    leadParagraph: '',
    paragraphs: [
      'Customers should reach the right person even when a team member is unavailable. AiEngage CRM helps route incoming calls based on your business needs. Team members can also transfer calls from the web CRM directly to their personal mobile number, so they can continue customer conversations from anywhere.',
    ],
    lists: [
      {
        heading: 'Route Calls To',
        items: ['The assigned team member', 'A personal mobile number', 'A support department', 'Available agents', 'The right team based on business rules'],
        columns: 1,
      },
    ],
  },
  {
    id: 'one-click-calling',
    index: '05',
    eyebrow: 'ONE-CLICK CALLING',
    titleLead: 'Call Customers ',
    titleAccent: 'In One Click',
    mockKey: 'OneClickCallingMock',
    reverse: false,
    leadParagraph: '',
    paragraphs: [
      'Stop copying and manually dialing phone numbers. Every lead, enquiry, customer, quotation, deal, and contact record includes one-click calling inside AiEngage CRM.',
      'Simply click the number and connect with the customer.',
    ],
    lists: [
      {
        heading: 'And Get:',
        items: ['Faster Response Times', 'More Customer Conversations', 'Better Follow-up Management', 'Higher Team Productivity', 'Less Manual Work'],
        columns: 1,
      },
    ],
  },
  {
    id: 'call-monitoring',
    index: '06',
    eyebrow: 'MONITORING',
    titleLead: 'Know What Your Team Is ',
    titleAccent: 'Saying on Every Call',
    mockKey: 'CallMonitoringMock',
    reverse: true,
    leadParagraph: '',
    paragraphs: [
      'Review call recordings, track sales pitches, and ensure your team shares the right information with every lead and customer. Get clear visibility into how your sales and support teams are handling customer calls.',
    ],
    lists: [
      {
        heading: 'Track',
        items: ['Call recordings', 'Sales pitches', 'Pricing discussions', 'Customer objections', 'Team communication', 'Follow-up quality', 'Call duration', 'Missed calls'],
      },
    ],
  },
  {
    id: 'call-analytics',
    index: '07',
    eyebrow: 'ANALYTICS',
    titleLead: 'Measure Every Call, Follow-Up & ',
    titleAccent: 'Sales Outcome',
    mockKey: 'CallAnalyticsMock',
    reverse: false,
    leadParagraph: '',
    paragraphs: ['Get clear visibility into sales and support performance with calling analytics inside AiEngage CRM.'],
    lists: [
      {
        heading: 'Track',
        items: [
          'Calls made and received',
          'Connected calls',
          'Missed calls',
          'Average talk time',
          'Call outcomes',
          'Follow-up activity',
          'Meetings generated',
          'Deals closed',
        ],
      },
    ],
    trailingParagraph: 'Know which leads need attention, where teams need support, and which conversations are driving results.',
  },
  {
    id: 'calling-crm',
    index: '08',
    eyebrow: 'UNIFIED',
    titleLead: 'Connect Calling With CRM, WhatsApp & Email ',
    titleAccent: 'At One Place',
    mockKey: 'CallingCrmMock',
    reverse: true,
    leadParagraph: '',
    paragraphs: [
      'Most businesses manage calls, WhatsApp, email, and lead details across separate tools. This creates scattered customer information and makes follow-ups harder.',
      'AiEngage CRM brings every conversation into one customer profile.',
    ],
    lists: [
      {
        heading: 'Get Everything In One Place',
        items: ['WhatsApp conversations', 'Call history, recordings, and transcripts', 'Email communication', 'Notes and activities', 'Lead status', 'Deals and opportunities'],
      },
    ],
    trailingParagraph: 'Give your team full context before every conversation and deliver a more connected customer experience.',
  },
];

export const CL_BENEFITS_HEADING = 'Built for Better Customer Communication';

export const CL_BENEFITS = [
  'Multi-country calling',
  'India and US business numbers',
  'Multiple numbers per user',
  'Shared business numbers',
  'One-click calling',
  'Call recordings and transcription',
  'Smart call forwarding and routing',
  'Mobile app and personal mobile calling',
  'Customer call history',
  'Call analytics and team performance tracking',
  'CRM, WhatsApp, and email integration',
];

export const CL_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  { icon: 'flight_takeoff', label: 'Tours and Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'celebration', label: 'Event Management', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
];

export const CL_FINAL_CTA = {
  titleLead: 'One Platform For Every ',
  titleAccent: 'Customer Conversation',
  titleTrail: '',
  description: '',
};
