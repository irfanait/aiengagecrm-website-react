// Content for the Security & Compliance page. Unlike every other product page built this batch,
// this page has no Benefit Band section in the source design — it goes straight from the last
// FeatureSection into Industries, so there is no SC_BENEFITS/SC_BENEFITS_HEADING export here.

export const SC_HERO = {
  badge: { icon: 'shield', label: 'SECURITY & COMPLIANCE', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Keep Your Customer Data ',
  titleAccent: 'Secure, Controlled, And Protected.',
  description:
    'Manage customer data with stronger access controls, activity visibility, account protection, and data recovery options. Give each team member the access they need, track important account actions, protect login access, and maintain a reliable backup of your business data.',
};

export const SC_TRUST_ITEMS = [
  { icon: 'badge', label: 'Role-based access', color: 'var(--color-primary)' },
  { icon: 'receipt_long', label: 'Full audit trail', color: 'var(--color-whatsapp)' },
  { icon: 'cloud_done', label: 'Reliable data backup', color: 'var(--color-yellow-icon)' },
  { icon: 'lock', label: 'Two-factor login', color: 'var(--color-primary)' },
];

export const SC_SECTIONS = [
  {
    id: 'user-roles',
    mockKey: 'UserRolesMock',
    reverse: false,
    titleLead: 'User ',
    titleAccent: 'Roles',
    paragraphs: [
      'Assign roles to every team member based on their responsibilities. Control what admins, managers, sales reps, support staff, and branch users can access inside the CRM.',
      'Roles help you keep sensitive customer information secure while making sure every team member has exactly what they need to do their job.',
    ],
    lists: [
      {
        heading: 'Control Access For',
        items: [
          'Leads and contacts',
          'Companies and deals',
          'Sales pipelines',
          'WhatsApp conversations',
          'Calling and recordings',
          'Campaigns',
          'Reports and dashboards',
          'Tasks and follow-ups',
          'Customer imports and exports',
          'Integrations and settings',
          'Custom modules',
          'Account configuration',
        ],
      },
    ],
  },
  {
    id: 'audit-logs',
    mockKey: 'SecurityAuditLogMock',
    reverse: true,
    dark: true,
    titleLead: 'Audit ',
    titleAccent: 'Logs',
    paragraphs: [
      'Track every important action taken inside your CRM. See who changed what, when it happened, and from where — so nothing goes unnoticed.',
    ],
    lists: [
      {
        heading: 'Track Activities Such As',
        items: [
          'Lead and contact updates',
          'Deal stage changes',
          'Customer record edits',
          'Lead ownership changes',
          'Task creation and completion',
          'Notes and follow-up updates',
          'Campaign activity',
          'User login activity',
          'Role and permission changes',
          'Import and export actions',
          'Deleted records',
          'Integration and settings updates',
        ],
      },
    ],
  },
  {
    id: 'data-backup',
    mockKey: 'DataBackupMock',
    reverse: false,
    titleLead: 'Data ',
    titleAccent: 'Backup',
    paragraphs: [
      'Your business data is backed up automatically so you never have to worry about losing important records. Restore leads, deals, tasks, and more whenever needed.',
    ],
    lists: [
      {
        heading: 'Protect Important Data Such As',
        items: [
          'Leads and contacts',
          'Companies and customer profiles',
          'Deals and pipelines',
          'Tasks and follow-ups',
          'Notes and customer activity',
          'WhatsApp and communication records',
          'Call logs and recordings',
          'Campaign data',
          'Custom fields and modules',
          'User and role settings',
          'Reports and business activity',
        ],
      },
    ],
  },
  {
    id: 'two-factor-authentication',
    eyebrow: 'TWO-FACTOR AUTHENTICATION',
    mockKey: 'TwoFactorAuthMock',
    reverse: true,
    titleLead: 'Add An Extra Layer Of Protection To ',
    titleAccent: 'Every Login.',
    paragraphs: [
      'Protect every account with two-factor authentication. Reduce the risk of unauthorized access even if a password is compromised.',
    ],
    lists: [
      {
        heading: 'Two-Factor Authentication Helps Protect',
        items: [
          'Customer contact information',
          'Sales pipeline data',
          'WhatsApp conversations',
          'Call recordings and logs',
          'Campaign access',
          'Team permissions',
          'Account settings',
          'Integration credentials',
          'Business reports',
          'CRM exports',
        ],
      },
    ],
  },
];

export const SC_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'account_balance', label: 'Finance', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
];

export const SC_FINAL_CTA = {
  titleLead: 'Protect Your Business With ',
  titleAccent: 'Enterprise-Grade Security.',
  titleTrail: '',
  description: '',
};
