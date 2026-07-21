// Content for the Data Management page — a single scrolling page with anchor-linked sections,
// mirroring the Automation page's structure (see data/automation.js).

export const DM_HERO = {
  badge: { icon: 'database', label: 'DATA MANAGEMENT', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Make Your CRM Data Easier To ',
  titleAccent: 'Organize, Update, And Manage',
  description:
    'Import records, manage products and forms, track every change, and keep your CRM data organised so your team always has the right information at the right time.',
};

export const DM_TRUST_ITEMS = [
  { icon: 'swap_vert', label: 'Import & export', color: 'var(--color-primary)' },
  { icon: 'inventory_2', label: 'Products & forms', color: 'var(--color-whatsapp)' },
  { icon: 'history', label: 'Audit logs & sheet view', color: 'var(--color-yellow-icon)' },
  { icon: 'auto_fix_high', label: 'AI data cleanup', color: 'var(--color-primary)' },
];

export const DM_SECTIONS = [
  {
    id: 'import-export',
    index: '01',
    eyebrow: 'IMPORT & EXPORT',
    titleLead: 'Import & ',
    titleAccent: 'Export',
    mockKey: 'ImportExportMock',
    reverse: false,
    leadParagraph: 'Move Your Business Data In And Out Without Manual Work.',
    paragraphs: [
      'Import leads, customers, companies, products, and other important records from Excel, CSV files, or existing tools. Export the data you need for reporting, backup, analysis, or sharing with your team.',
      'AiEngage helps you bring your data into one CRM without spending hours copying information from spreadsheets.',
    ],
    lists: [
      {
        heading: 'Import And Export Data Such As',
        items: [
          'Leads and customer records',
          'Contact details',
          'Company information',
          'Product and service data',
          'Lead sources and campaign details',
          'Tags and labels',
          'Custom field values',
          'Sales pipeline data',
          'Deal information',
          'Payment records',
          'Form submissions',
          'Reports and customer lists',
        ],
      },
    ],
  },
  {
    id: 'products',
    index: '02',
    eyebrow: 'PRODUCTS',
    titleLead: 'Product ',
    titleAccent: 'Catalog',
    mockKey: 'ProductCatalogMock',
    reverse: true,
    leadParagraph: 'Keep Your Products And Services Ready For Every Sales Conversation.',
    paragraphs: [
      'Manage your product catalog inside AiEngage so your team can quickly add the right products, services, packages, or pricing details to leads, deals, quotations, and customer records.',
      'This helps sales teams avoid outdated pricing, reduce manual work, and present accurate information every time.',
    ],
    lists: [
      {
        heading: 'Manage Product Details Like',
        items: [
          'Product and service names',
          'Pricing and package details',
          'Product categories',
          'Product descriptions',
          'Service duration',
          'Product availability',
          'Plan and subscription information',
          'Product-specific notes',
          'Deal-wise product selection',
          'Quotation-ready products',
          'Customer product interest',
          'Sales performance by product',
        ],
      },
    ],
  },
  {
    id: 'forms',
    index: '03',
    eyebrow: 'FORMS',
    titleLead: '',
    titleAccent: 'Forms',
    mockKey: 'FormBuilderMock',
    reverse: false,
    leadParagraph: 'Capture The Right Information From Every Enquiry.',
    paragraphs: [
      'Create forms for your website, landing pages, campaigns, registrations, bookings, support requests, and internal processes. Every submission can flow directly into your CRM with the customer details, source information, and enquiry context attached.',
      'Forms help your team collect structured data from the start, making it easier to route leads, trigger follow-ups, and keep records complete.',
    ],
    lists: [
      {
        heading: 'Create Forms For',
        items: [
          'Lead enquiries',
          'Website contact requests',
          'Demo and consultation bookings',
          'Appointment requests',
          'Product or service interest',
          'Event registrations',
          'Customer feedback',
          'Support requests',
          'Payment or document collection',
          'Internal team requests',
          'Campaign landing pages',
          'Custom business workflows',
        ],
      },
    ],
  },
  {
    id: 'audit-logs',
    index: '04',
    eyebrow: 'AUDIT LOGS',
    titleLead: 'Audit ',
    titleAccent: 'Logs',
    mockKey: 'AuditLogMock',
    reverse: true,
    leadParagraph: 'Know Exactly What Changed And Who Changed It.',
    paragraphs: [
      'Audit Logs give you a clear record of important activity inside your CRM. Track updates to customer details, deals, payments, assignments, workflows, permissions, and other business records.',
      'This helps managers maintain accountability, review changes, and protect the accuracy of important data.',
    ],
    lists: [
      {
        heading: 'Track Important CRM Activity Such As',
        items: [
          'Contact record changes',
          'Lead assignment updates',
          'Deal stage changes',
          'Payment updates',
          'Product edits',
          'User activity',
          'Task updates',
          'Form-related changes',
          'Import and export actions',
          'Tag and custom field changes',
          'Workflow updates',
          'Permission and role updates',
        ],
      },
    ],
  },
  {
    id: 'sheet-view',
    index: '05',
    eyebrow: 'SHEET VIEW',
    titleLead: 'Sheet ',
    titleAccent: 'View',
    mockKey: 'SheetViewMock',
    reverse: false,
    leadParagraph: 'Work With CRM Data In A Familiar Spreadsheet-Style View.',
    paragraphs: [
      'Use Sheet View to review, sort, filter, update, and manage large sets of records without opening each contact one by one.',
      'Your team gets the flexibility of a spreadsheet with the structure and control of a CRM. This makes it easier to clean records, update details, manage lead lists, and take bulk action faster.',
    ],
    lists: [
      {
        heading: 'Use Sheet View To',
        items: [
          'View leads and customers in rows and columns',
          'Sort records by any important field',
          'Filter lists quickly',
          'Update multiple records faster',
          'Review lead ownership',
          'Check deal stages',
          'Edit contact details',
          'Manage tags and custom fields',
          'Find missing information',
          'Create saved views',
          'Review campaign or source data',
          'Take bulk action on selected records',
        ],
      },
    ],
  },
  {
    id: 'data-mapping',
    index: '06',
    eyebrow: 'DATA MAPPING',
    titleLead: 'Data ',
    titleAccent: 'Mapping',
    mockKey: 'DataMappingMock',
    reverse: true,
    leadParagraph: 'Make Sure Every Imported Field Goes To The Right Place.',
    paragraphs: [
      'When you import data from Excel, CSV files, ad platforms, or other tools, field names may not always match your CRM structure. Data Mapping lets you connect each incoming column to the correct AiEngage field before importing.',
      'This keeps your customer data clean, avoids misplaced information, and helps your team start with organised records from day one.',
    ],
    lists: [
      {
        heading: 'Map Fields Such As',
        items: [
          'Name and contact details',
          'Email addresses and phone numbers',
          'Company information',
          'Lead sources',
          'Campaign names',
          'Product or service interest',
          'Sales representatives',
          'Lead stages',
          'Deal values',
          'Tags and labels',
          'Custom fields',
          'Notes and enquiry details',
        ],
      },
    ],
  },
  {
    id: 'ai-data-cleanup',
    index: '07',
    eyebrow: 'AI DATA CLEANUP',
    titleLead: 'AI Data ',
    titleAccent: 'Cleanup',
    mockKey: 'AIDataCleanupMock',
    reverse: false,
    leadParagraph: 'Keep Your CRM Clean Without Spending Hours Checking Records.',
    paragraphs: [
      'AI Data Cleanup helps identify incomplete, duplicate, outdated, or inconsistent information across your CRM. Instead of relying on manual checks, your team can quickly spot records that need attention.',
      'Cleaner data helps your sales, support, and marketing teams work with more confidence and make better decisions.',
    ],
    lists: [
      {
        heading: 'Use AI To Improve Your Data',
        items: [
          'Identify duplicate contacts',
          'Find incomplete customer records',
          'Detect missing email addresses or phone numbers',
          'Spot outdated information',
          'Highlight inconsistent field values',
          'Suggest data standardisation',
          'Review duplicate companies or leads',
          'Flag missing lead sources',
          'Identify records without owners',
          'Find inactive or unused records',
          'Improve data quality before campaigns',
          'Keep customer profiles more accurate',
        ],
      },
    ],
  },
];

export const DM_BENEFITS_HEADING = 'Turn Scattered Data Into Better Business Decisions';

export const DM_BENEFITS = [
  'Import leads, customers, products, and records faster',
  'Export important data whenever your team needs it',
  'Keep products and services ready for sales teams',
  'Capture structured data through custom forms',
  'Track important changes with audit logs',
  'Work with records in an easy spreadsheet-style view',
  'Map imported fields correctly before data enters the CRM',
  'Reduce manual data entry and cleanup',
  'Keep customer information complete and organised',
  'Improve accuracy across sales, support, and marketing',
  'Give every team the data they need in one place',
  'Use AI to identify duplicate and incomplete records',
  'Build stronger reports with cleaner data',
  'Make every customer interaction more informed',
];

export const DM_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT Services', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
];

export const DM_FINAL_CTA = {
  titleLead: 'Keep Your Business Data Clean, Connected, ',
  titleAccent: 'And Ready To Use',
  titleTrail: '',
  description: '',
};
