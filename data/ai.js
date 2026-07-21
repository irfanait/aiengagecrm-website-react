// Content for the AI page. Unlike most other product pages, this page has no trust strip in the
// source design — the hero section is followed directly by the first FeatureSection.

export const AI_HERO = {
  badge: { icon: 'neurology', label: 'AI', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'AI That Helps Your Team ',
  titleAccent: 'Sell, Support, And Scale.',
  description:
    'AiEngage CRM brings AI directly into your sales, support, and customer engagement workflow. Help customers get answers faster, qualify leads before your team steps in, reduce repetitive work, and give your team clearer insights from every conversation.',
};

export const AI_SECTIONS = [
  {
    id: 'smart-summaries',
    index: '01',
    eyebrow: 'SMART SUMMARIES',
    mockKey: 'SmartSummariesMock',
    reverse: false,
    titleLead: 'Understand Every Customer Conversation ',
    titleAccent: 'In Seconds',
    paragraphs: [
      'Long WhatsApp chats, emails, call notes, and customer interactions can take time to review. Smart Summaries give your team a quick view of what happened, what the customer needs, and what should happen next.',
      'Sales and support teams can continue conversations confidently, even when another team member handled the previous communication.',
    ],
    lists: [
      {
        heading: 'Get Quick Summaries Of',
        items: [
          'WhatsApp conversations',
          'Customer emails',
          'Call discussions',
          'Lead and deal activity',
          'Customer requirements',
          'Questions and concerns',
          'Follow-up history',
          'Pending actions',
          'Recommended next steps',
        ],
      },
    ],
  },
  {
    id: 'ai-chatbot',
    index: '02',
    eyebrow: 'AI CHATBOT',
    mockKey: 'AIChatbotMock',
    reverse: true,
    titleLead: 'Give Customers Instant Answers Through ',
    titleAccent: 'Natural Conversations',
    paragraphs: [
      'Set up an AI chatbot that understands your business and helps customers find answers without waiting for your team.',
      'Train it using your website content, FAQs, service details, product information, documents, policies, and knowledge base.',
    ],
    lists: [
      {
        heading: 'The AI Chatbot Can Answer Questions About',
        items: [
          'Products and services',
          'Pricing and packages',
          'Business hours',
          'Locations and branches',
          'Appointment availability',
          'Service processes',
          'Payments',
          'Delivery and booking details',
          'Policies and FAQs',
          'Support-related queries',
        ],
      },
    ],
  },
  {
    id: 'ai-lead-qualification',
    index: '03',
    eyebrow: 'AI LEAD QUALIFICATION',
    mockKey: 'AILeadQualificationMock',
    reverse: false,
    titleLead: 'Qualify Prospects Before They Reach Your ',
    titleAccent: 'Sales Team',
    paragraphs: [
      'AI Lead Qualification asks relevant questions, understands customer requirements, and collects the information your team needs to prioritize stronger opportunities.',
    ],
    lists: [
      {
        heading: 'Qualify Leads Based On',
        items: [
          'Product or service interest',
          'Budget range',
          'Location',
          'Requirement type',
          'Preferred timeline',
          'Company or team size',
          'Appointment preference',
          'Buying intent',
          'Existing provider or solution',
          'Custom qualification questions',
        ],
      },
    ],
  },
  {
    id: 'ai-insights',
    index: '04',
    eyebrow: 'AI INSIGHTS',
    mockKey: 'AIInsightsMock',
    reverse: true,
    titleLead: 'Turn Customer Data And Conversations Into ',
    titleAccent: 'Clear Actions',
    paragraphs: [
      'AiEngage analyzes activity across leads, customer conversations, campaigns, deals, and support interactions. It highlights patterns, missed opportunities, customer intent, and areas that need attention.',
      'Your team gets clearer direction without spending hours reviewing reports and conversation histories.',
    ],
    lists: [
      {
        heading: 'Use AI Insights to Understand',
        items: [
          'Leads requiring immediate follow-up',
          'High-intent customer conversations',
          'Customers showing strong engagement',
          'Common questions and objections',
          'Frequently discussed products or services',
          'Conversations requiring attention',
          'Missed or delayed follow-ups',
          'Deals moving slowly',
          'Campaign response patterns',
          'Customer sentiment',
          'Recurring support issues',
          'Sales conversation trends',
        ],
      },
    ],
  },
  {
    id: 'mobile-ai',
    index: '05',
    eyebrow: 'MOBILE AI',
    mockKey: 'MobileAIMock',
    reverse: false,
    dark: true,
    titleLead: 'Get AI Support Wherever Your ',
    titleAccent: 'Team Works',
    paragraphs: [
      'Your team does not always work from a desk. Mobile AI helps them understand customer context, review lead details, prepare replies, and get next-step guidance during calls, meetings, site visits, or travel.',
    ],
    lists: [
      {
        heading: 'Use Mobile AI To',
        items: [
          'Summarize customer conversations',
          'Review lead and deal details',
          'Check recent activity',
          'Prepare follow-up messages',
          'Get next-step suggestions',
          'Review pending tasks',
          'Handle urgent customer replies',
          'Prepare for meetings and calls',
          'Stay updated on assigned leads',
        ],
      },
    ],
  },
  {
    id: 'ai-email-assistant',
    index: '06',
    eyebrow: 'AI EMAIL ASSISTANT',
    mockKey: 'AIEmailAssistantMock',
    reverse: true,
    titleLead: 'Write Better Emails Without Starting From A ',
    titleAccent: 'Blank Screen',
    paragraphs: [
      'AI Email Assistant helps your team create faster, clearer, and more relevant emails for sales, follow-ups, proposals, customer updates, reminders, and support.',
      'Give AI a simple prompt or select the customer context to generate a ready draft your team can review, edit, and send.',
    ],
    lists: [
      {
        heading: 'Create Emails For',
        items: [
          'First lead responses',
          'Sales outreach',
          'Follow-up messages',
          'Proposals and quotations',
          'Appointment reminders',
          'Payment reminders',
          'Customer onboarding',
          'Product and service updates',
          'Re-engagement campaigns',
          'Support replies',
          'Personalized customer communication',
        ],
      },
    ],
  },
  {
    id: 'ai-call-transcription',
    index: '07',
    eyebrow: 'AI CALL TRANSCRIPTION',
    mockKey: 'AICallTranscriptionMock',
    reverse: false,
    titleLead: 'Turn Every Sales Call Into Searchable ',
    titleAccent: 'Customer Context',
    paragraphs: [
      'AiEngage converts call discussions into written transcripts, helping your team review what was discussed without relying on memory or manual notes.',
      'Every transcript stays connected to the relevant lead or deal, making follow-ups, handovers, and manager reviews easier.',
    ],
    lists: [
      {
        heading: 'Capture More From Every Call',
        items: [
          'Convert calls into written transcripts',
          'Review customer discussions',
          'Track requirements',
          'Identify questions and objections',
          'Save important details in the CRM',
          'Reduce manual note-taking',
          'Share call context with team members',
          'Improve lead and deal handovers',
          'Help managers review conversations',
        ],
      },
    ],
  },
  {
    id: 'ai-sales-insights',
    index: '08',
    eyebrow: 'AI SALES INSIGHTS',
    mockKey: 'AISalesInsightsMock',
    reverse: true,
    titleLead: 'See What Is Moving ',
    titleAccent: 'Deals Forward',
    paragraphs: [
      'AI Sales Insights helps sales teams and managers understand deal activity, customer engagement, follow-up gaps, and pipeline movement.',
      'Your team can quickly identify which opportunities need action and where deals may be getting stuck.',
    ],
    lists: [
      {
        heading: 'Get Better Visibility Into',
        items: [
          'High-value deals needing attention',
          'Deals likely to close soon',
          'Inactive opportunities',
          'Overdue follow-ups',
          'Sales stages where deals get stuck',
          'Team activity and deal movement',
          'Opportunities with strong buying intent',
          'Pipeline conversion gaps',
          'Revenue opportunities at risk',
          'Recommended next actions',
        ],
      },
    ],
  },
  {
    id: 'ai-forecasting',
    index: '09',
    eyebrow: 'AI FORECASTING',
    mockKey: 'AIForecastingMock',
    reverse: false,
    titleLead: 'Plan Sales Targets With A Clearer View Of ',
    titleAccent: 'What Is Coming',
    paragraphs: [
      'AiEngage uses deal values, pipeline activity, sales stages, and team progress to estimate expected revenue and upcoming opportunities.',
      'Managers get a clearer view of whether targets are on track and where the team should focus before the month ends.',
    ],
    lists: [
      {
        heading: 'Forecast With More Confidence',
        items: [
          'Expected revenue from open deals',
          'Deals likely to close this month',
          'High-value pipeline opportunities',
          'Revenue by sales stage',
          'Team-wise sales forecasts',
          'Pipeline health and movement',
          'Deals at risk of going cold',
          'Sales trends over time',
          'Target gaps requiring attention',
        ],
      },
    ],
  },
];

export const AI_BENEFITS_HEADING = 'Make Every Customer Interaction Smarter With AI';

export const AI_BENEFITS = [
  '24/7 customer responses',
  'AI-powered customer support',
  'Automated lead qualification',
  'Faster inquiry handling',
  'Smart conversation routing',
  'Reduced repetitive work',
  'Clearer customer context',
  'Seamless human handover',
  'Conversation summaries',
  'Intent and objection insights',
  'Smarter sales follow-ups',
  'Better customer experiences',
];

export const AI_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'account_balance', label: 'Finance', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
];

export const AI_FINAL_CTA = {
  titleLead: 'AI That Automates, Assists, And ',
  titleAccent: 'Accelerates Growth',
  titleTrail: '',
  description: '',
};
