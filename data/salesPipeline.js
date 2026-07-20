// Content for the Sales Pipeline page — a single scrolling page with anchor-linked sections,
// following the WhatsApp/Multichannel convention (numbered eyebrows, check_circle icon, bold
// list headings, trust strip present) rather than the Customer/Lead Management convention.

export const SP_HERO = {
  badge: { icon: 'account_tree', label: 'SALES PIPELINE', bg: 'var(--color-primary-tint)', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Turn Every Deal Into ',
  titleAccent: 'Conversion',
  description:
    'Manage every deal from first enquiry to closure with clear sales pipelines, deal tracking, and automated follow-ups. Gain complete visibility into your sales process, identify bottlenecks, and help your team focus on the deals most likely to close.',
};

export const SP_TRUST_ITEMS = [
  { icon: 'view_kanban', label: 'Custom sales pipelines', color: 'var(--color-primary)' },
  { icon: 'event_repeat', label: 'Automated follow-ups', color: 'var(--color-green)' },
  { icon: 'query_stats', label: 'AI sales forecasting', color: 'var(--color-purple)' },
  { icon: 'visibility', label: 'Complete deal visibility', color: 'var(--color-blue)' },
];

export const SP_SECTIONS = [
  {
    id: 'pipeline-management',
    index: '01',
    eyebrow: 'PIPELINE',
    titleLead: 'Pipeline ',
    titleAccent: 'Management',
    mockKey: 'PipelineBoardMock',
    reverse: false,
    paragraphs: [
      'Create sales pipelines that match the way your business sells. Define every stage of your sales process, track deal progress, and manage separate pipelines for different products, services, teams, branches, or sales workflows.',
    ],
    lists: [
      {
        heading: 'Manage Your Pipeline With',
        items: ['Custom sales stages', 'Drag-and-drop deal movement', 'Multiple sales pipelines', 'Stage-wise deal tracking', 'Pipeline-wise reporting', 'Expected deal value', 'Expected closing date', 'Lost deal reasons', 'Team and owner visibility'],
      },
    ],
  },
  {
    id: 'deal-management',
    index: '02',
    eyebrow: 'DEALS',
    titleLead: 'Deal ',
    titleAccent: 'Management',
    mockKey: 'DealDetailMock',
    reverse: true,
    paragraphs: [
      'Turn qualified leads into structured sales deals. Add deal value, expected close date, product or service interest, sales owner, and important notes. Each deal stays connected to the customer profile, making it easy to view chats, calls, emails, quotations, notes, and previous follow-ups in one place.',
    ],
    lists: [
      {
        heading: 'What You Can Manage',
        items: ['Deal name and value', 'Linked contact or company', 'Sales pipeline and stage', 'Deal owner', 'Expected closing date', 'Product or service interest', 'Deal priority', 'Quotations and proposals', 'Notes and attachments', 'Lost deal reason'],
      },
    ],
  },
  {
    id: 'task-management',
    index: '03',
    eyebrow: 'TASKS',
    titleLead: 'Tasks ',
    titleAccent: 'Management',
    mockKey: 'TaskListMock',
    reverse: false,
    paragraphs: [
      'Create tasks for calls, meetings, demos, quotations, follow-ups, document collection, payment and reminders. Tasks can be linked directly to a lead, customer, company, or deal, so your team always knows why the task matters and what needs to happen next.',
    ],
    lists: [
      {
        heading: 'Create Tasks For',
        items: ['Sales calls', 'WhatsApp follow-ups', 'Demo scheduling', 'Client meetings', 'Proposal sharing', 'Quotation reminders', 'Document collection', 'Payment follow-ups', 'Internal approvals', 'Post-sale onboarding'],
      },
    ],
  },
  {
    id: 'follow-up-management',
    index: '04',
    eyebrow: 'FOLLOW-UPS',
    titleLead: 'Follow-Up ',
    titleAccent: 'Management',
    mockKey: 'FollowUpScheduleMock',
    reverse: true,
    paragraphs: [
      'Stay on top of every follow-up with scheduled calls, WhatsApp messages, emails, meetings, and tasks. Track overdue activities, identify inactive deals, and ensure every lead receives timely attention to improve conversions.',
    ],
    lists: [
      {
        heading: 'Manage Follow-Ups Across',
        items: ['WhatsApp messages', 'Phone calls', 'Emails', 'Client meetings', 'Proposal reminders', 'Quotation follow-ups', 'Payment reminders', 'Demo follow-ups', 'Renewal reminders', 'Internal sales tasks'],
      },
    ],
  },
  {
    id: 'connected-pipelines',
    index: '05',
    eyebrow: 'CONNECTED',
    titleLead: 'Connected ',
    titleAccent: 'Pipeline',
    mockKey: 'ConnectedDealMock',
    reverse: false,
    leadParagraph: 'Keep Every Deal Connected To The Full Customer Story.',
    paragraphs: [
      'Every deal stays linked to the lead, company, conversations, tasks, quotations, payments, notes, and follow-ups connected to it.',
      'Your team does not need to search through different tools to understand what is happening. They can open a deal and immediately see the full context needed to move it forward.',
    ],
    lists: [
      {
        heading: 'Keep Every Deal In Context',
        columns: 1,
        items: [
          'Link deals to leads and customer profiles',
          'View calls, emails, and WhatsApp chats beside the deal',
          'Track notes, tasks, and follow-ups',
          'See quotations and payment updates',
          'Connect products and services to each opportunity',
          'View customer activity before taking the next step',
          'Keep sales conversations and deal progress together',
          'Reduce back-and-forth between teams',
          'Help new team members understand active deals quickly',
          'Keep every opportunity easy to follow',
        ],
      },
    ],
  },
  {
    id: 'team-pipelines',
    index: '06',
    eyebrow: 'TEAMS',
    titleLead: 'Team ',
    titleAccent: 'Pipeline',
    mockKey: 'TeamPipelineSwitchMock',
    reverse: true,
    leadParagraph: 'Give Every Sales Team Its Own Clear View Of Opportunities.',
    paragraphs: [
      'Create separate pipelines for different sales teams, departments, products, locations, or business units.',
      'Each team can follow its own sales process while managers still get a complete view of overall performance. This keeps pipelines organised and helps every team focus on the deals that matter to them.',
    ],
    lists: [
      {
        heading: 'Manage Sales Teams More Clearly',
        columns: 1,
        items: [
          'Create pipelines for different teams',
          'Set up separate stages for each sales process',
          'Organize deals by department or location',
          'Manage product-specific sales journeys',
          'Give teams access to relevant opportunities',
          'Track performance across pipelines',
          'Keep ownership clear for every deal',
          'Reduce confusion between sales teams',
          'Create a process that fits each business unit',
          'Give managers a better view of team activity',
        ],
      },
    ],
  },
  {
    id: 'payment-tracking',
    index: '07',
    eyebrow: 'PAYMENTS',
    titleLead: 'Payment ',
    titleAccent: 'Tracking',
    mockKey: 'PaymentTrackerMock',
    reverse: false,
    leadParagraph: 'Track Payments Without Losing Sight Of The Deal.',
    paragraphs: [
      'Keep payment details connected to the right customer and opportunity. Your team can see what has been paid, what is pending, and what needs follow-up.',
      'This helps sales, accounts, and customer teams stay aligned, especially when deals involve partial payments, booking amounts, invoices, or payment reminders.',
    ],
    lists: [
      {
        heading: 'Stay On Top Of Every Payment',
        items: ['Track payment status for each deal', 'Record paid, pending, and overdue amounts', 'Link payments to customer records', 'View payment details from the deal', 'Follow up on pending payments', 'Keep sales and finance teams aligned', 'Track booking and advance payments', 'Add notes around payment discussions', 'Trigger reminders for due payments', 'Reduce missed payment follow-ups'],
      },
    ],
  },
  {
    id: 'external-sharing',
    index: '08',
    eyebrow: 'SHARING',
    titleLead: 'External Record ',
    titleAccent: 'Sharing',
    mockKey: 'ShareRecordMock',
    reverse: true,
    leadParagraph: 'Share Important Deal Details Without Giving Full CRM Access.',
    paragraphs: [
      'Send selected records, quotations, updates, or deal information to customers, partners, agents, or external teams in a controlled way.',
      'This makes it easier to keep everyone informed while protecting internal data and keeping communication professional.',
    ],
    lists: [
      {
        heading: 'Share The Right Information Securely',
        items: ['Share selected deal records externally', 'Send quotations and proposal details', 'Share product or service information', 'Keep customers updated on deal progress', 'Give partners access to relevant information', 'Avoid sharing internal CRM data', 'Create a clearer approval process', 'Reduce manual document sharing', 'Keep external communication organized', 'Make collaboration easier across stakeholders'],
      },
    ],
  },
  {
    id: 'product-catalog',
    index: '09',
    eyebrow: 'CATALOG',
    titleLead: 'Product ',
    titleAccent: 'Catalog',
    mockKey: 'ProductCatalogMock',
    reverse: false,
    leadParagraph: 'Add Products And Services Directly To Your Deals.',
    paragraphs: [
      'Build a central catalog of products, services, pricing, packages, and offerings. Your sales team can add the right items to a deal without entering details manually every time.',
      'This helps teams create accurate quotations, track what customers are interested in, and understand which products are driving more revenue.',
    ],
    lists: [
      {
        heading: 'Sell With Better Product Context',
        items: ['Create a centralized product catalog', 'Add products and services to deals', 'Store pricing and package details', 'Track customer interest by product', 'Build faster quotations', 'Reduce manual pricing mistakes', 'Show product details during sales conversations', 'Track top-performing products', 'Manage service packages and plans', 'Keep sales teams aligned on current offerings'],
      },
    ],
  },
  {
    id: 'stage-rules',
    index: '10',
    eyebrow: 'STAGE RULES',
    titleLead: 'Stage Transition ',
    titleAccent: 'Rules',
    mockKey: 'StageRulesMock',
    reverse: true,
    leadParagraph: 'Move Deals Forward With A Clear Sales Process.',
    paragraphs: [
      'Set rules for how deals move from one stage to another. Make sure required steps, information, approvals, or tasks are completed before a deal progresses.',
      'This helps your team follow a more consistent process and prevents important sales actions from being skipped.',
    ],
    lists: [
      {
        heading: 'Keep Every Deal Moving The Right Way',
        items: ['Define stages for your sales process', 'Set rules before a deal changes stage', 'Require important deal details', 'Make sure follow-up tasks are completed', 'Add approvals for key deal stages', 'Prevent incomplete deals from moving ahead', 'Keep sales teams following the same process', 'Improve data accuracy in the pipeline', 'Reduce missed sales steps', 'Create more predictable deal movement'],
      },
    ],
  },
  {
    id: 'ai-forecasting',
    index: '11',
    eyebrow: 'AI FORECAST',
    titleLead: 'AI Sales ',
    titleAccent: 'Forecasting',
    mockKey: 'ForecastMock',
    reverse: false,
    leadParagraph: 'Know What Your Pipeline Is Likely To Deliver.',
    paragraphs: [
      'AI Sales Forecasting helps you understand expected revenue, likely deal outcomes, and which opportunities may need attention.',
      'Instead of relying only on guesswork, managers can use pipeline activity, deal progress, engagement, and past performance to plan ahead with more confidence.',
    ],
    lists: [
      {
        heading: 'Plan Sales With Better Visibility',
        items: ['Estimate expected revenue from active deals', 'Identify deals with a higher chance of closing', 'Spot opportunities that may be at risk', 'Understand likely sales performance', 'Compare pipeline value with expected outcomes', 'Help managers plan team targets', 'Improve sales review meetings', 'Focus attention on delayed opportunities', 'Track forecast performance over time', 'Make smarter decisions based on live pipeline data'],
      },
    ],
  },
];

export const SP_BENEFITS_HEADING = 'Manage Every Deal With Complete Visibility.';

export const SP_BENEFITS = [
  'Custom sales pipelines',
  'Deal stage tracking',
  'Opportunity value visibility',
  'Task and reminder management',
  'Scheduled follow-ups',
  'Team-wise deal ownership',
  'Sales activity tracking',
  'Deal forecasting',
  'Stalled deal visibility',
  'Better sales accountability',
  'Faster follow-up execution',
  'Improved conversion potential',
];

export const SP_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
];

export const SP_FINAL_CTA = {
  titleLead: 'Track Every Deal. Follow Up On Time. ',
  titleAccent: 'Close More Business.',
};
