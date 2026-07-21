// Content for the Reports & Analytics page — a single scrolling page with anchor-linked sections,
// mirroring the Automation page's structure (see data/automation.js).

export const RA_HERO = {
  badge: { icon: 'monitoring', label: 'REPORTS & ANALYTICS', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Understand Every Stage Of Your ',
  titleAccent: 'Customer Journey.',
  description:
    'Track what is working, identify where leads are dropping, measure campaign impact, and help your team focus on the actions that drive more revenue.',
};

export const RA_TRUST_ITEMS = [
  { icon: 'dashboard', label: 'Real-time dashboards', color: 'var(--color-primary)' },
  { icon: 'bar_chart', label: 'Sales & campaign reports', color: 'var(--color-green)' },
  { icon: 'filter_alt', label: 'Funnel conversion insights', color: 'var(--color-primary-dark-accent)' },
  { icon: 'track_changes', label: 'KPI & target tracking', color: 'var(--color-dark-bg)' },
];

export const RA_SECTIONS = [
  {
    id: 'dashboards',
    index: '01',
    eyebrow: 'DASHBOARDS',
    titleLead: 'Real-Time ',
    titleAccent: 'Dashboards',
    mockKey: 'DashboardMock',
    reverse: false,
    leadParagraph: '',
    paragraphs: [
      'Get a real-time view of the numbers that matter most. Get complete visibility into lead activity, sales progress, campaign performance, customer engagement, and team workflow.',
    ],
    lists: [
      {
        heading: 'Track From Your Dashboard',
        items: [
          'New leads received',
          'Active leads and deals',
          'Sales pipeline value',
          'Deals won and lost',
          'Pending follow-ups',
          'Overdue tasks',
          'WhatsApp and call activity',
          'Campaign performance',
          'Team activity',
          'Revenue trends',
        ],
      },
    ],
  },
  {
    id: 'sales-reports',
    index: '02',
    eyebrow: 'SALES REPORTS',
    titleLead: 'Sales ',
    titleAccent: 'Reports',
    mockKey: 'SalesReportsMock',
    reverse: true,
    leadParagraph: '',
    paragraphs: [
      'Track every stage of your sales process, from lead creation to deal closure. Sales reports help you understand which pipelines are performing, which deals need attention, and how much revenue your team is expected to close.',
    ],
    lists: [
      {
        heading: 'Track Sales Performance',
        items: [
          'Total leads created',
          'Active opportunities',
          'Pipeline value',
          'Expected revenue',
          'Deals won and lost',
          'Deal conversion rate',
          'Average deal value',
          'Sales by pipeline stage',
          'Revenue by product or service',
          'Lost deal reasons',
          'Follow-up activity',
          'Sales by team member',
        ],
      },
    ],
  },
  {
    id: 'campaign-reports',
    index: '03',
    eyebrow: 'CAMPAIGN REPORTS',
    titleLead: 'Campaign ',
    titleAccent: 'Reports',
    mockKey: 'CampaignReportsMock',
    reverse: false,
    leadParagraph: '',
    paragraphs: [
      'Track how your email, WhatsApp, and SMS campaigns are performing. See which messages are reaching customers, generating responses, creating inquiries, and contributing to sales.',
    ],
    lists: [
      {
        heading: 'Track Campaign Metrics',
        items: [
          'Campaigns sent',
          'Delivered messages',
          'Open rate',
          'Read rate',
          'Click-through rate',
          'Customer responses',
          'Failed deliveries',
          'Unsubscribes',
          'Leads generated',
          'Appointments booked',
          'Sales conversions',
          'Revenue attributed',
        ],
      },
    ],
  },
  {
    id: 'funnel-reports',
    index: '04',
    eyebrow: 'FUNNEL REPORTS',
    titleLead: 'Funnel ',
    titleAccent: 'Reports',
    mockKey: 'FunnelReportsMock',
    reverse: true,
    leadParagraph: '',
    paragraphs: [
      'Track how leads move through your sales funnel from first enquiry to final conversion. Funnel reports help you identify weak stages, follow-up gaps, and opportunities to improve your customer journey.',
    ],
    lists: [
      {
        heading: 'Track Your Funnel',
        items: [
          'Leads captured',
          'Leads contacted',
          'Qualified leads',
          'Meetings booked',
          'Proposals sent',
          'Deals created',
          'Deals won',
          'Deals lost',
          'Customer conversions',
          'Stage-to-stage conversion rate',
        ],
      },
    ],
  },
  {
    id: 'team-performance',
    index: '05',
    eyebrow: 'TEAM PERFORMANCE',
    titleLead: 'Team ',
    titleAccent: 'Performance',
    mockKey: 'TeamPerformanceMock',
    reverse: false,
    leadParagraph: 'Track Team Activity, Response Speed, And Sales Contribution.',
    paragraphs: [
      'Measure how effectively your sales, support, and marketing teams are handling leads, calls, conversations, tasks, and deals.',
    ],
    lists: [
      {
        heading: 'Track Team Performance',
        items: [
          'Leads assigned',
          'Leads contacted',
          'Calls made and received',
          'WhatsApp conversations handled',
          'Average response time',
          'Tasks completed',
          'Pending and overdue tasks',
          'Follow-ups completed',
          'Meetings scheduled',
          'Deals created',
          'Deals won',
          'Revenue generated',
          'Campaign activity',
        ],
      },
    ],
  },
  {
    id: 'kpis',
    index: '06',
    eyebrow: 'KPI TRACKING',
    titleLead: 'KPI ',
    titleAccent: 'Tracking',
    mockKey: 'KPITrackingMock',
    reverse: true,
    leadParagraph: 'Keep Your Team Focused On The Numbers That Matter Most.',
    paragraphs: [
      'Set key performance indicators for sales, marketing, support, and operations. Track progress against the goals your business cares about and make sure teams stay focused on outcomes, not just activity.',
      'KPI tracking helps managers quickly see whether performance is improving, slowing down, or falling behind target.',
    ],
    lists: [
      {
        heading: 'Track KPIs For',
        items: [
          'Revenue targets',
          'Lead response time',
          'Lead conversion rate',
          'Deal conversion rate',
          'Follow-up completion',
          'Sales activity',
          'Campaign engagement',
          'Customer retention',
          'Payment collection',
          'Appointment bookings',
          'Team productivity',
          'Customer satisfaction',
        ],
      },
    ],
  },
  {
    id: 'target-meters',
    index: '07',
    eyebrow: 'TARGET METERS',
    titleLead: 'Target ',
    titleAccent: 'Meters',
    mockKey: 'TargetMetersMock',
    reverse: false,
    leadParagraph: 'Make Goals Visible Before They Become Missed Targets.',
    paragraphs: [
      'Set clear goals for revenue, leads, calls, deals, follow-ups, bookings, campaign performance, and team activity. Target Meters show exactly how close your team is to achieving the goal.',
      'This gives managers and teams a simple way to stay focused and take action before the month ends.',
    ],
    lists: [
      {
        heading: 'Set Targets For',
        items: [
          'Monthly revenue',
          'New lead generation',
          'Deals closed',
          'Calls completed',
          'Follow-ups completed',
          'Meetings booked',
          'Payment collection',
          'Campaign responses',
          'Customer onboarding',
          'Team activity',
          'Sales conversion',
          'Department performance',
        ],
      },
    ],
  },
  {
    id: 'charts',
    index: '08',
    eyebrow: 'CHARTS',
    titleLead: 'Visual ',
    titleAccent: 'Charts',
    mockKey: 'ChartsLibraryMock',
    reverse: true,
    leadParagraph: 'Understand Performance Faster With Clear Visual Reports.',
    paragraphs: [
      'Use easy-to-read charts to understand trends, compare team performance, measure progress, and identify areas that need attention.',
      'Instead of reading rows of numbers, your team can quickly see what is growing, what is slowing down, and where to focus next.',
    ],
    lists: [
      {
        heading: 'Visualize Business Performance With',
        items: [
          'Sales trend charts',
          'Revenue by month',
          'Deals by stage',
          'Lead source comparison',
          'Campaign engagement charts',
          'Funnel conversion charts',
          'Team performance comparisons',
          'Target progress charts',
          'Call activity trends',
          'Customer growth charts',
          'Payment collection trends',
          'Product and service performance',
        ],
      },
    ],
  },
];

export const RA_BENEFITS_HEADING = 'Turn Business Data Into Better Decisions.';

export const RA_BENEFITS = [
  'Real-time business dashboards',
  'Sales pipeline visibility',
  'Revenue tracking',
  'Campaign performance reports',
  'Funnel conversion insights',
  'Lead source analysis',
  'Team productivity tracking',
  'Follow-up and task visibility',
  'Deal stage reporting',
  'Customer engagement metrics',
  'Better forecasting',
  'Smarter business decisions',
];

export const RA_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT Services', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
];

export const RA_FINAL_CTA = {
  titleLead: 'See The Complete Picture Of ',
  titleAccent: 'Your Business',
  titleTrail: '',
  description: '',
};
