// Content for the Customer Management page — a single scrolling page with anchor-linked
// sections, following the same structure as data/whatsappPages.js / data/multichannelCommunication.js.
// This page's design has no trust strip and no numbered eyebrows on its sections (see
// app/customer-management/page.js), and uses a muted uppercase list heading + "check" icon.

export const CM_HERO = {
  badge: { icon: 'group', label: 'CUSTOMER MANAGEMENT', bg: '#f0ebfb', iconColor: 'var(--color-purple)', textColor: '#5a3ec8' },
  titleLead: 'Know every customer. ',
  titleHighlight: 'Personalize',
  titleTrail: ' every conversation.',
  description: 'Manage every contact, company, conversation, and customer activity from one connected CRM.',
};

export const CM_SECTIONS = [
  {
    id: 'contacts',
    titleAccent: 'Contacts',
    mockKey: 'ContactRecordMock',
    reverse: false,
    leadParagraph: 'Keep every lead and customer organized in one place.',
    paragraphs: [
      'Add contacts manually, import them from Excel, capture them through lead forms, or automatically sync them from WhatsApp, Meta Ads, Google Ads, website forms, and other connected sources.',
    ],
    lists: [
      {
        heading: 'What More You Can Manage',
        items: [
          'Customer name, phone number, and email',
          'Lead source and campaign details',
          'Tags and custom fields',
          'Assigned sales representative',
          'Lead stage and deal status',
          'Contact owner and department',
          'Notes, tasks, and reminders',
          'Communication preferences',
          'Purchase and enquiry history',
        ],
      },
    ],
  },
  {
    id: 'segments',
    titleLead: 'Customer ',
    titleAccent: 'Segments',
    mockKey: 'SegmentBuilderMock',
    reverse: true,
    leadParagraph: 'Build targeted lists without filtering data by hand every time.',
    paragraphs: [
      'Build highly targeted lists for your sales, marketing, support, and retention teams without manually filtering data every time. Create dynamic customer segments using customer details, lead stages, purchase behavior, tags, engagement activity, and custom attributes.',
    ],
    lists: [
      {
        heading: 'Create Segments Based On',
        items: [
          'Lead stage',
          'Customer location',
          'Assigned sales representative',
          'Source or campaign',
          'Tags and labels',
          'Purchase history',
          'Product or service interest',
          'Last activity date',
          'Pending quotations',
          'Customer lifetime value',
          'Custom fields',
        ],
      },
    ],
  },
  {
    id: 'customer-profile',
    titleLead: '360° Customer ',
    titleAccent: 'Profile',
    mockKey: 'ProfileTabsMock',
    reverse: false,
    leadParagraph: 'Give your team the full customer context before every conversation.',
    paragraphs: [
      'Access contact details, WhatsApp chats, calls, emails, quotations, deals, notes, tasks, forms, and activity history into one customer profile.',
    ],
    lists: [
      {
        heading: 'View Everything In One Profile',
        items: [
          'Basic contact details',
          'WhatsApp conversation history',
          'Call logs and recordings',
          'Emails sent and received',
          'Notes and internal comments',
          'Open deals and quotations',
          'Tasks and follow-up reminders',
          'Lead stage and status',
          'Form submissions',
          'Campaign source details',
          'Tags and custom fields',
          'Purchase or service history',
        ],
      },
    ],
  },
  {
    id: 'customer-timeline',
    titleLead: 'Customer ',
    titleAccent: 'Timeline',
    mockKey: 'ActivityTimelineMock',
    reverse: true,
    leadParagraph: 'See every customer interaction in one clear timeline.',
    paragraphs: [
      'From the first lead form submission to the latest WhatsApp reply, your team can quickly review the customer journey without struggling through different systems.',
    ],
    lists: [
      {
        heading: 'Track Activities Such As',
        items: [
          'Lead form submissions',
          'WhatsApp messages',
          'Call logs',
          'Email activity',
          'Notes added by team members',
          'Tasks created or completed',
          'Lead stage changes',
          'Deal updates',
          'Quotations shared',
          'Payments and booking updates',
          'Campaign interactions',
          'Automation activity',
          'Tag and owner changes',
        ],
      },
    ],
  },
];

export const CM_BENEFITS_EYEBROW = 'WHY CUSTOMER MANAGEMENT';
export const CM_BENEFITS_HEADING = 'Turn customer data into better conversions.';

export const CM_BENEFITS = [
  'Centralized customer database',
  'Contacts and company management',
  'Smart customer segments',
  'Complete communication history',
  '360° customer profiles',
  'Unified customer timeline',
  'Lead ownership and routing',
  'Custom fields and tags',
  'Task and follow-up tracking',
  'Sales and support collaboration',
  'Better personalization across channels',
  'Faster response with complete context',
];

export const CM_INDUSTRIES_HEADING = 'Teams in every industry.';

export const CM_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate' },
  { icon: 'code', label: 'IT' },
  { icon: 'medical_services', label: 'Healthcare' },
  { icon: 'school', label: 'Education' },
  { icon: 'travel_explore', label: 'Tours & Travels' },
  { icon: 'payments', label: 'Finance' },
].map((i) => ({ ...i, bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' }));

export const CM_FINAL_CTA = {
  title: 'Give your team complete customer context in one CRM.',
  description: 'Start your 14-day free trial — no credit card required.',
};
