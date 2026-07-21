// Content for the Customization page — a single scrolling page with anchor-linked sections,
// mirroring the Automation page's structure (see data/automation.js). Sections 1-3, 5 have no
// eyebrow in the source design (they open straight into the heading); the Roles & Permissions
// section additionally uses FeatureSection's `dark` variant to match its navy background.

export const CU_HERO = {
  badge: { icon: 'tune', label: 'CUSTOMIZATION', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Customize Your CRM To ',
  titleAccent: 'Fit Your Business.',
  description:
    'We understand every business has its own sales process, customer data, teams, and internal workflows. AiEngage CRM gives you the flexibility to customize fields, modules, pipelines, permissions, and branding so your CRM feels built for your business.',
};

export const CU_TRUST_ITEMS = [
  { icon: 'edit_attributes', label: 'Business-specific fields', color: 'var(--color-primary)' },
  { icon: 'widgets', label: 'Flexible modules', color: 'var(--color-green)' },
  { icon: 'admin_panel_settings', label: 'Role-based access', color: 'var(--color-yellow-icon)' },
  { icon: 'palette', label: 'Branded experience', color: 'var(--color-primary)' },
];

export const CU_SECTIONS = [
  {
    id: 'custom-fields',
    mockKey: 'FieldBuilderMock',
    reverse: false,
    titleLead: 'Custom ',
    titleAccent: 'Fields',
    paragraphs: ['Store more than just name, phone number, and email. Create custom fields for leads, contacts, companies, deals, forms, and other CRM records.'],
    lists: [
      {
        heading: 'Create Custom Fields For',
        items: [
          'Budget range',
          'Location or branch preference',
          'Product interest',
          'Service requirement',
          'Preferred appointment time',
          'Property type',
          'Course selection',
          'Company size',
          'Payment status',
          'Renewal date',
          'Customer category',
          'Internal remarks',
        ],
      },
    ],
  },
  {
    id: 'custom-modules',
    mockKey: 'CustomModulesMock',
    reverse: true,
    titleLead: 'Custom ',
    titleAccent: 'Modules',
    paragraphs: ['Some businesses need more than standard leads, contacts, and deals. Custom Modules help you create dedicated sections for the records your team manages every day.'],
    lists: [
      {
        heading: 'Create Custom Modules For',
        items: [
          'Properties',
          'Projects',
          'Bookings',
          'Admissions',
          'Courses',
          'Service requests',
          'Quotations',
          'Policies',
          'Events',
          'Vendors',
          'Branches',
          'Partner accounts',
        ],
      },
    ],
  },
  {
    id: 'custom-pipelines',
    mockKey: 'CustomPipelinesMock',
    reverse: false,
    titleLead: 'Custom ',
    titleAccent: 'Pipelines',
    paragraphs: [
      'Create pipelines that reflect how your business moves leads, deals, bookings, or service requests from start to finish. Use different pipelines for different teams, products, branches, or customer journeys so every opportunity follows the right process.',
    ],
    lists: [
      {
        heading: 'Create Pipelines For',
        items: [
          'New sales enquiries',
          'Property bookings',
          'Corporate sales',
          'Service requests',
          'Admissions',
          'Event registrations',
          'Renewal opportunities',
          'Partner onboarding',
          'Customer onboarding',
          'Payment collection',
        ],
      },
    ],
  },
  {
    id: 'roles-permissions',
    eyebrow: 'ROLES & PERMISSIONS',
    mockKey: 'RolesPermissionsMock',
    reverse: true,
    dark: true,
    titleLead: 'Give Every Team Member The Right Level Of ',
    titleAccent: 'CRM Access.',
    paragraphs: [
      'Control what each user can view, edit, manage, or export inside the AiEngage CRM. Set role-based permissions so sales, support, marketing, managers, branches, and external teams only access the information relevant to their work.',
    ],
    lists: [
      {
        heading: 'Control Access For',
        items: [
          'Leads and contacts',
          'Companies and deals',
          'WhatsApp conversations',
          'Business phone numbers',
          'Campaigns',
          'Reports and dashboards',
          'Pipelines',
          'Tasks and follow-ups',
          'Custom modules',
          'Import and export actions',
          'Team settings',
          'Account configuration',
        ],
      },
    ],
  },
  {
    id: 'branding',
    mockKey: 'BrandingMock',
    reverse: false,
    titleLead: 'Branding',
    paragraphs: [
      'Customize the visible parts of AiEngage CRM to reflect your company identity. Use your business name, logo, colors, and communication details across customer-facing and internal CRM experiences.',
    ],
    lists: [
      {
        heading: 'Customize Your Branding',
        items: [
          'Company logo',
          'Brand name',
          'Brand colors',
          'Email sender name',
          'Email signature',
          'WhatsApp sender identity',
          'Business phone number display',
          'Form design',
          'Landing page styling',
          'Customer communication templates',
        ],
      },
    ],
  },
  {
    id: 'custom-tags',
    eyebrow: 'CUSTOM TAGS',
    mockKey: 'CustomTagsMock',
    reverse: true,
    titleLead: 'Organize Leads And Customers In A Way Your ',
    titleAccent: 'Team Understands.',
    paragraphs: [
      'Use tags to quickly group contacts based on interest, priority, source, stage, customer type, activity, or any detail that matters to your business.',
      'Tags make it easier to filter records, build segments, create targeted campaigns, and help teams understand customer context at a glance.',
    ],
    lists: [
      {
        heading: 'Use Tags For',
        items: [
          'Hot, warm, and cold leads',
          'High-value customers',
          'Product or service interest',
          'Campaign source',
          'Customer category',
          'Follow-up priority',
          'Location or branch',
          'New and returning customers',
          'Payment status',
          'Event or webinar attendees',
          'Customer lifecycle stage',
          'Internal team labels',
        ],
      },
    ],
  },
  {
    id: 'custom-views',
    eyebrow: 'CUSTOM VIEWS',
    mockKey: 'CustomViewsMock',
    reverse: false,
    titleLead: 'Let Every Team See The Records That ',
    titleAccent: 'Matter To Them.',
    paragraphs: [
      'Create custom views for sales, support, marketing, finance, managers, or individual teams. Filter and organize records based on the fields, stages, tags, owners, or activities most relevant to their work.',
      'This helps everyone stay focused without sorting through unnecessary data.',
    ],
    lists: [
      {
        heading: 'Create Views For',
        items: [
          "New leads needing follow-up",
          'High-value deals',
          'Pending payments',
          "Today's appointments",
          'Leads by owner',
          'Customers by location',
          'Deals by stage',
          'Inactive leads',
          'Upcoming renewals',
          'Campaign-generated leads',
          'Team workload',
          'Custom business reports',
        ],
      },
    ],
  },
];

export const CU_BENEFITS_HEADING = 'A CRM That Adapts To Your Team, Process, And Brand';

export const CU_BENEFITS = [
  'Business-specific custom fields',
  'Flexible custom modules',
  'Multiple sales pipelines',
  'Process-based stages',
  'Role-based permissions',
  'Department-level access control',
  'Secure customer data visibility',
  'Custom workflows and records',
  'Branded customer communication',
  'Scalable CRM setup',
  'Better team adoption',
  'Less dependence on spreadsheets',
];

export const CU_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'account_balance', label: 'Finance', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
];

export const CU_FINAL_CTA = {
  titleLead: 'Build A CRM That Works The Way ',
  titleAccent: 'Your Business Works',
  titleTrail: '',
  description: '',
};
