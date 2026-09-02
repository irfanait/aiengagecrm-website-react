// Content for the Ads & Analytics page. Structure mirrors data/securityCompliance.js.

export const AA_HERO = {
  badge: { icon: 'insights', label: 'ADS & ANALYTICS', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Track Every Ad, Lead, and ',
  titleAccent: 'Revenue in One Place.',
  description:
    'Connect Meta Lead Ads, Google Lead Form Ads, and custom advertising platforms to capture leads, monitor performance, and track business outcomes from one place.',
};

export const AA_TRUST_ITEMS = [
  { icon: 'ads_click', label: 'Meta & Google lead ads', color: 'var(--color-primary)' },
  { icon: 'sync', label: 'Real-time lead sync', color: 'var(--color-whatsapp)' },
  { icon: 'trending_up', label: 'Revenue attribution', color: 'var(--color-yellow-icon)' },
  { icon: 'query_stats', label: 'ROAS tracking', color: 'var(--color-primary)' },
];

export const AA_SECTIONS = [
  {
    id: 'meta-lead-ads',
    mockKey: 'MetaLeadAdsMock',
    reverse: false,
    titleLead: 'Meta Lead Ads',
    titleAccent: '',
    paragraphs: [
      'Connect Facebook and Instagram Lead Ads and capture every submitted lead in real time.',
      'New leads are automatically added as contacts, so your team can follow up fast via WhatsApp, calls, email, or meetings.',
    ],
    lists: [
      {
        heading: 'What You Can Manage',
        items: [
          'Facebook and Instagram lead forms',
          'Real-time lead capture',
          'CRM contact creation',
          'Form configuration',
          'Field mapping',
          'Lead assignment',
          'Connection status',
          'Sync monitoring',
        ],
      },
    ],
  },
  {
    id: 'google-lead-ads',
    mockKey: 'GoogleLeadAdsMock',
    reverse: true,
    titleLead: 'Google Lead Form ',
    titleAccent: 'Ads',
    paragraphs: [
      'Capture leads from Google Ads Lead Form extensions and add them to your CRM automatically.',
      'Route each lead to the right team and track its journey from submission to conversion.',
    ],
    lists: [
      {
        heading: 'What You Can Manage',
        items: [
          'Google Ads lead forms',
          'Real-time lead synchronization',
          'Contact creation',
          'Form-level configuration',
          'CRM field mapping',
          'Lead source identification',
          'Sales team routing',
          'Sync status tracking',
        ],
      },
    ],
  },
  {
    id: 'offline-campaigns',
    mockKey: 'OfflineCampaignsMock',
    reverse: false,
    titleLead: 'Offline & Custom ',
    titleAccent: 'Campaigns',
    paragraphs: [
      "Track campaigns that don't come from Meta or Google. Add custom platforms for newspapers, radio, events, hoardings, partnerships, and other sources.",
    ],
    lists: [
      {
        heading: 'Track Custom Campaigns From',
        items: [
          'Newspapers',
          'Radio advertising',
          'Events and exhibitions',
          'Outdoor hoardings',
          'Partner campaigns',
          'Referral campaigns',
          'Offline promotions',
          'Custom digital platforms',
        ],
      },
    ],
  },
  {
    id: 'ad-integrations',
    mockKey: 'AdIntegrationsMock',
    reverse: true,
    dark: true,
    titleLead: 'Keep All Your Ad ',
    titleAccent: 'Platforms Connected',
    paragraphs: [
      'View and configure every connected advertising source from the Integrations dashboard — status, per-platform configuration, conversion settings, and requests for new integrations.',
    ],
    lists: [
      {
        heading: 'Integration Controls',
        items: [
          'Connected platform status',
          'Individual platform configuration',
          'Conversion settings',
          'Integration search',
          'Advertising category filters',
          'New integration requests',
          'Documentation access',
        ],
      },
    ],
  },
  {
    id: 'offline-reporting',
    mockKey: 'OfflineReportingMock',
    reverse: false,
    titleLead: 'Offline Channel ',
    titleAccent: 'Reporting',
    paragraphs: [
      'Add offline channels so their spend and performance sit in your unified reports, alongside Meta and Google.',
    ],
    lists: [
      {
        heading: 'Track Offline Campaigns From',
        items: [
          'Newspapers',
          'Radio',
          'Hoardings',
          'Events',
          'Exhibitions',
          'Print campaigns',
          'Referral partnerships',
          'Other offline promotions',
        ],
      },
    ],
  },
  {
    id: 'cost-per-lead',
    mockKey: 'CostPerLeadMock',
    reverse: true,
    titleLead: 'Cost Per Lead ',
    titleAccent: 'Comparison',
    paragraphs: [
      'See the real cost of leads across accounts and currencies. AiEngage combines spend with captured leads to compare campaigns and find where budget works hardest.',
    ],
    lists: [
      {
        heading: 'Measure',
        items: [
          'Total spend',
          'Total leads',
          'Cost per lead',
          'Pixel-attributed leads',
          'Platform-wise CPL',
          'Account-wise CPL',
          'Campaign-wise CPL',
          'Currency-specific performance',
        ],
      },
    ],
  },
  {
    id: 'revenue-roas',
    mockKey: 'RevenueRoasMock',
    reverse: false,
    titleLead: 'Revenue & ',
    titleAccent: 'ROAS Tracking',
    paragraphs: [
      'Connect ad activity to business results. Track revenue and ROAS per platform, account, campaign, and ad.',
    ],
    lists: [
      {
        heading: 'Track Business Outcomes',
        items: [
          'Revenue generated',
          'Return on ad spend',
          'Revenue by platform',
          'Revenue by campaign',
          'Revenue by account',
          'Lead-to-sale conversion',
          'Cost per acquired customer',
        ],
      },
    ],
  },
  {
    id: 'platform-comparison',
    mockKey: 'PlatformComparisonMock',
    reverse: true,
    titleLead: 'Measure Spend, Leads & ',
    titleAccent: 'Revenue Across Platforms',
    paragraphs: [
      'Compare every connected platform in one table — spend, leads, engagement, and returns.',
    ],
    lists: [
      {
        heading: 'Track',
        items: [
          'Advertising spend',
          'Leads generated',
          'Pixel leads',
          'Cost per lead',
          'Revenue',
          'Return on ad spend',
          'Impressions',
          'Clicks',
          'Click-through rate',
          'Cost per click',
          'Currency-wise performance',
        ],
      },
    ],
  },
  {
    id: 'campaign-reports',
    mockKey: 'CampaignReportsMock',
    reverse: false,
    titleLead: 'Customize Reports For Better ',
    titleAccent: 'Decision-Making',
    paragraphs: [
      'Quickly find the data you need and export it. Customize the view, search records, and download advertising data.',
    ],
    lists: [
      {
        heading: 'Reporting Tools',
        items: [
          'Search advertising records',
          'Export report data',
          'Customize table views',
          'Sort performance metrics',
          'Adjust rows per page',
          'Review account-level results',
        ],
      },
    ],
  },
];

export const AA_BENEFITS_HEADING = 'See Exactly Where Your Ad Budget Is Going';

export const AA_BENEFITS = [
  'Meta Lead Ads Integration',
  'Google Lead Form Ads Integration',
  'Custom Platform Tracking',
  'Unified Advertising Dashboard',
  'Campaign-Level Filters',
  'Cost Per Lead Reporting',
  'Revenue Attribution',
  'ROAS Tracking',
  'Multi-Currency Reporting',
  'Real-Time Data Sync',
  'Searchable Performance Reports',
  'Exportable Analytics',
];

export const AA_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', href: '/industries/real-estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', href: '/industries/it', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', href: '/industries/healthcare', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { icon: 'school', label: 'Education', href: '/industries/education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', href: '/industries/tours-travels', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'account_balance', label: 'Finance', href: '/industries/finance', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
];

export const AA_FINAL_CTA = {
  titleLead: 'Track Every Lead From ',
  titleAccent: 'Ad Click to Revenue.',
  titleTrail: '',
  description: '',
};
