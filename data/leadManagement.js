// Content for the Lead Management page — a single scrolling page with anchor-linked sections,
// following the same structure as data/customerManagement.js (no trust strip, no numbered
// eyebrows, "check" icon, muted uppercase list headings — see app/lead-management/page.js).

export const LM_HERO = {
  badge: { icon: 'person_search', label: 'LEAD MANAGEMENT', bg: 'var(--color-primary-tint)', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Capture, assign, and convert every lead ',
  titleHighlight: '10x faster',
  titleTrail: '.',
  description:
    'Bring every customer inquiry into one CRM and route it to the right team. Create lead capture forms for your website, landing pages, campaigns, WhatsApp, service requests, appointments, and more, with every submission instantly added to AiEngage CRM for faster follow-ups and higher conversions.',
};

export const LM_SECTIONS = [
  {
    id: 'lead-capture-forms',
    titleLead: 'Lead Capture ',
    titleAccent: 'Forms',
    mockKey: 'CaptureFormMock',
    reverse: false,
    leadParagraph: 'Capture every enquiry before it gets lost.',
    paragraphs: [
      'Create simple, high-converting forms for your website, landing pages, ads, events, and campaigns. Every form submission goes directly into AiEngage, so your team can respond faster and start the conversation while the lead is still interested.',
      'Collect the right details, route leads to the right team, and trigger follow-ups automatically without relying on spreadsheets or manual data entry.',
    ],
    lists: [
      {
        heading: 'Turn Website Visitors Into Sales-Ready Leads',
        items: [
          'Create custom lead capture forms',
          'Add forms to your website and landing pages',
          'Collect names, phone numbers, emails, and enquiry details',
          'Add custom fields based on your business needs',
          'Capture product, service, location, or budget interest',
          'Send every submission directly to the CRM',
          'Assign new leads automatically',
          'Trigger instant email, WhatsApp, or task follow-ups',
          'Track which form generated each lead',
          'Reduce manual data entry',
          'Keep all enquiries linked to the right source',
          'Help your team respond while interest is high',
        ],
      },
    ],
  },
  {
    id: 'lead-assignment',
    titleLead: 'Lead ',
    titleAccent: 'Assignment',
    mockKey: 'AssignmentRuleMock',
    reverse: true,
    paragraphs: [
      'A lead is more likely to convert when the right team member follows up quickly. AiEngage CRM helps you automatically assign leads based on rules such as source, location, department, service interest, or team workload.',
    ],
    lists: [
      {
        heading: 'Assign Leads Based On',
        items: ['Lead source', 'Location or city', 'Product or service interest', 'Team or department', 'Assigned branch', 'Campaign or form', 'Sales representative workload', 'Custom lead details'],
      },
    ],
  },
  {
    id: 'lead-scoring',
    titleLead: 'AI Lead ',
    titleAccent: 'Scoring',
    mockKey: 'LeadScoringMock',
    reverse: false,
    paragraphs: [
      'Lead scoring helps your team identify high-priority opportunities by tracking important signals such as inquiry source, form responses, engagement, activity, and lead status. Give your sales team a clear view of which leads need immediate attention and which leads need nurturing.',
    ],
    lists: [
      {
        heading: 'Score Leads Based On',
        items: [
          'Lead source quality',
          'Form responses',
          'Product or service interest',
          'Budget or requirements',
          'WhatsApp engagement',
          'Email opens and clicks',
          'Call activity',
          'Website or campaign interactions',
          'Follow-up activity',
          'Lead stage progress',
        ],
      },
    ],
  },
  {
    id: 'lead-sync',
    titleLead: 'Lead Sync From Meta & ',
    titleAccent: 'Google Ads',
    mockKey: 'LeadSyncMock',
    reverse: true,
    leadParagraph: 'Bring ad leads directly into your CRM.',
    paragraphs: [
      'When someone fills out a lead form from Meta Ads or Google Ads, their details can flow straight into AiEngage. Your team does not need to download files, copy data manually, or wait for someone to share a spreadsheet.',
      'Every new lead enters your CRM with the source, campaign, and enquiry details attached. This helps your team respond quickly and understand where each lead came from.',
    ],
    lists: [
      {
        heading: 'Keep Every Ad Lead Ready For Action',
        items: [
          'Sync leads from Meta Lead Ads',
          'Sync leads from Google Ads',
          'Capture lead details automatically',
          'See campaign and source information',
          'Avoid manual Excel imports',
          'Reduce missed or delayed enquiries',
          'Send leads directly into your CRM',
          'Trigger instant follow-ups',
          'Route leads to the right salesperson',
          'Track which campaigns bring better leads',
        ],
      },
    ],
  },
  {
    id: 'lead-sources',
    titleLead: 'Lead ',
    titleAccent: 'Sources',
    mockKey: 'LeadSourcesMock',
    reverse: false,
    leadParagraph: 'Know exactly where every lead comes from.',
    paragraphs: [
      'Track the source behind every inquiry so you know which campaigns, channels, and marketing efforts are generating the best leads.',
    ],
    lists: [
      {
        heading: 'Track Lead Sources Such As',
        items: [
          'Meta Lead Ads',
          'Google Ads',
          'Website forms',
          'Landing pages',
          'WhatsApp enquiries',
          'Organic website traffic',
          'Referrals',
          'Phone calls',
          'Events and exhibitions',
          'Partner channels',
          'Manual lead entries',
          'Imported lead lists',
        ],
      },
    ],
  },
  {
    id: 'import-leads',
    titleLead: 'Import ',
    titleAccent: 'Leads',
    mockKey: 'ImportLeadsMock',
    reverse: true,
    paragraphs: [
      'Move your existing lead lists from excel, old CRMs, events, campaigns, or other tools into AiEngage CRM. Import leads in bulk, map the right fields, assign owners, apply tags, and begin follow-ups immediately.',
    ],
    lists: [
      {
        heading: 'What You Can Import',
        items: [
          'Name and contact details',
          'Company information',
          'Lead source',
          'Lead stage',
          'Assigned lead owner',
          'Tags and labels',
          'Product interest',
          'Notes and requirements',
          'Custom field data',
          'Existing follow-up details',
        ],
      },
    ],
  },
  {
    id: 'round-robin',
    titleLead: 'Round-Robin ',
    titleAccent: 'Assignment',
    mockKey: 'RoundRobinMock',
    reverse: false,
    leadParagraph: 'Distribute new leads fairly across your sales team.',
    paragraphs: [
      'Automatically assign incoming leads to team members in rotation. This helps prevent one salesperson from getting overloaded while another misses opportunities.',
      'Round-robin assignment keeps lead distribution balanced and ensures new enquiries are handled faster by the available team.',
    ],
    lists: [
      {
        heading: 'Assign Leads Without Manual Effort',
        items: [
          'Rotate leads across team members',
          'Distribute enquiries fairly',
          'Reduce lead response delays',
          'Avoid missed assignments',
          'Balance workload across sales teams',
          'Assign leads by team or department',
          'Keep ownership clear from the start',
          'Improve accountability for follow-ups',
          'Help managers track team performance',
          'Make sure every lead has an owner',
        ],
      },
    ],
  },
  {
    id: 'ai-lead-qualification',
    titleLead: 'AI Lead ',
    titleAccent: 'Qualification',
    mockKey: 'LeadQualificationMock',
    reverse: true,
    leadParagraph: "Know which leads are worth your team's attention first.",
    paragraphs: [
      'AiEngage helps your team understand whether a new enquiry looks serious, relevant, urgent, or still exploring.',
      'Instead of treating every lead the same, your sales team can focus more time on leads that match the right profile, show stronger interest, or need a faster response.',
    ],
    lists: [
      {
        heading: 'Understand Lead Quality Faster',
        items: [
          'Identify high-intent enquiries',
          'Spot leads that need urgent follow-up',
          'Understand likely customer interest',
          'Highlight leads that match your ideal profile',
          'Reduce time spent on low-quality leads',
          'Help teams prioritize serious buyers',
          'Support faster first responses',
          'Improve qualification consistency',
          'Give sales teams better context before calling',
          'Move stronger leads into the right pipeline stage',
        ],
      },
    ],
  },
];

export const LM_BENEFITS_EYEBROW = 'WHY LEAD MANAGEMENT';
export const LM_BENEFITS_HEADING = 'Turn every enquiry into a customer.';

export const LM_BENEFITS = [
  'Capture leads from every channel',
  'Create leads automatically',
  'Assign the right sales owner',
  'Prioritize high-intent leads',
  'Track source and campaign performance',
  'Keep lead data organized',
  'Reduce missed follow-ups',
  'Improve sales response time',
  'Track every lead stage',
  'Convert more enquiries into customers',
];

export const LM_INDUSTRIES_HEADING = 'Teams in every industry.';

export const LM_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate' },
  { icon: 'code', label: 'IT' },
  { icon: 'medical_services', label: 'Healthcare' },
  { icon: 'school', label: 'Education' },
  { icon: 'travel_explore', label: 'Tours & Travels' },
  { icon: 'payments', label: 'Finance' },
].map((i) => ({ ...i, bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' }));

export const LM_FINAL_CTA = {
  title: 'End-to-end lead management for every business.',
  description: 'Start your 14-day free trial — no credit card required.',
};
