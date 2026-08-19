// Content for the /partners page (AiEngage Partner Program).

export const PARTNER_HERO = {
  badge: 'AiEngage Partner Program',
  headingLine1: 'Build Your AI Business.',
  headingLine2: 'Grow With ',
  headingAccent: 'AiEngage.',
  description:
    'Help businesses automate sales, WhatsApp, calling, marketing and customer engagement with AI — while building your own recurring revenue.',
  highlight: 'Earn up to 35% commission for 1 year.',
  ctaLabel: 'Sign Up as a Partner',
  ctaHref: '/partners/signup',
  checks: ['Free to join', 'Partner training', 'Sales support', 'Business opportunities'],
};

export const PARTNER_DASHBOARD = {
  title: 'Your Partner Business',
  period: 'Last 6 months',
  stats: [
    { value: '12', label: 'Active Clients' },
    { value: '₹1.8L', label: 'Partner Earnings' },
    { value: '4', label: 'New Opportunities' },
    { value: 'Growth Partner', level: 'Level 2', highlight: true },
  ],
  chart: {
    points: [40, 55, 50, 68, 76, 88],
    months: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    callout: '₹1.8L',
  },
  sources: [
    { icon: 'group', label: 'Referrals', value: '8' },
    { icon: 'rocket_launch', label: 'Onboarding', value: '3' },
    { icon: 'ads_click', label: 'Ads Management', value: '2' },
    { icon: 'psychology', label: 'Consulting', value: '1' },
  ],
};

export const PARTNER_ROLES = {
  label: 'More Than Referrals',
  headingLine1: "Don't Just Refer Software.",
  headingLine2: 'Become Their ',
  headingAccent: 'AI',
  headingLine2Suffix: ' Partner.',
  paragraphs: [
    "Businesses need more than a CRM. They need someone who can help them understand how to use AI, automation and marketing to grow. That's where you come in.",
  ],
  paragraphLead: 'AiEngage provides the technology. ',
  paragraphAccent: 'You become their trusted consultant.',
  items: [
    {
      icon: 'smart_toy',
      title: 'AI & CRM Consultant',
      description: 'Help businesses automate sales and customer engagement.',
      tags: [
        { icon: 'auto_awesome', label: 'AI Lead Qualification' },
        { icon: 'chat', label: 'WhatsApp AI Agents' },
        { icon: 'settings', label: 'Smart Workflows' },
        { icon: 'bar_chart', label: 'Sales Pipelines' },
      ],
    },
    {
      icon: 'settings',
      title: 'Technology Partner',
      description: 'Implement CRM, integrations, workflows and AI agents.',
      tags: [
        { icon: 'person', label: 'CRM Setup' },
        { icon: 'link', label: 'Integrations' },
        { icon: 'settings', label: 'Automation' },
        { icon: 'smart_toy', label: 'AI Agents' },
      ],
    },
    {
      icon: 'trending_up',
      title: 'Growth Partner',
      description: 'Generate and manage leads through Meta, Google and other channels.',
      tags: [
        { icon: 'campaign', label: 'Meta Ads' },
        { icon: 'ads_click', label: 'Google Ads' },
        { icon: 'my_location', label: 'Lead Generation' },
        { icon: 'campaign', label: 'Manage Campaign' },
      ],
    },
  ],
};

export const PARTNER_EARN = {
  label: 'Earn More',
  titleLead: 'One Partnership.',
  titleAccent: 'Multiple Ways to Earn.',
  items: [
    {
      icon: 'database',
      title: 'Recurring Commission',
      description: 'Earn 20%–35% on eligible customer subscriptions for their first 12 months.',
    },
    {
      icon: 'fact_check',
      title: 'Setup & Onboarding',
      description: 'Charge customers for CRM setup, pipelines, integrations, AI agents and automation services.',
    },
    {
      icon: 'campaign',
      title: 'Marketing Services',
      description: 'Offer Meta Ads, Google Ads, lead generation and campaign management.',
    },
    {
      icon: 'psychology',
      title: 'AI & Business Consulting',
      description: 'Help clients redesign their sales and customer engagement processes with AI.',
    },
    {
      icon: 'groups',
      title: 'Get Leads From AiEngage',
      description:
        'Grow your partner level and become eligible to receive consulting, implementation and marketing opportunities directly from AiEngage.',
    },
  ],
  flow: [
    { icon: 'person_add', label: 'Refer' },
    { icon: 'settings', label: 'Implement' },
    { icon: 'forum', label: 'Consult' },
    { icon: 'campaign', label: 'Market' },
  ],
  flowHeading: 'Refer. Implement. Consult. Market.',
  flowAccent: 'Earn at Every Stage.',
};

export const PARTNER_TIERS = {
  headingLead: 'The More You Grow, The More You ',
  headingAccent: 'Unlock',
  headingSuffix: '.',
  tiers: [
    {
      kicker: 'Starter',
      name: 'Associate Partner',
      range: '1–5 Active Customers',
      commission: '20%',
      features: ['Partner training', 'Demo support', 'Sales resources', 'Setup opportunities'],
      ctaLabel: 'Become an Associate Partner',
      ctaHref: '/partners/signup?tier=associate',
      variant: 'outline',
    },
    {
      kicker: 'Growth',
      name: 'Growth Partner',
      range: '6–15 Active Customers',
      commission: '30%',
      features: [
        'Everything in Associate',
        'Priority demo support',
        'Joint customer meetings',
        'Co-marketing opportunities',
        'Selected AiEngage leads',
      ],
      ctaLabel: 'Become a Growth Partner',
      ctaHref: '/partners/signup?tier=growth',
      variant: 'filled',
      badge: 'MOST POPULAR',
      featured: true,
    },
    {
      kicker: 'Elite',
      name: 'Elite Partner',
      range: '16+ Active Customers',
      commission: '35%',
      features: [
        'Everything in Growth',
        'Priority sales support',
        'Advanced partner training',
        'Priority AiEngage opportunities',
        'Consulting & implementation leads',
        'Marketing opportunities',
        'Joint GTM opportunities',
      ],
      ctaLabel: 'Become an Elite Partner',
      ctaHref: '/partners/signup?tier=elite',
      variant: 'outline',
    },
  ],
  progression: [
    { icon: 'group_add', label: 'More Customers' },
    { icon: 'stairs', label: 'Higher Level' },
    { icon: 'payments', label: 'Higher Commission' },
    { icon: 'trending_up', label: 'More Business' },
  ],
  notes: [
    "Commission applies to eligible subscription revenue for the customer's first 12 months.",
    'Levels, commissions and lead allocation are subject to Partner Program terms.',
  ],
};

export const PARTNER_SUPPORT = {
  label: 'We Help You Win',
  headingLine1: 'You Bring the Relationship.',
  headingLine2: "We'll Help With ",
  headingAccent: 'the Technology',
  headingLine2Suffix: '.',
  items: [
    { icon: 'support_agent', title: 'Sales Support', description: 'Bring our team into important customer conversations.' },
    { icon: 'play_circle', title: 'Live Demo Support', description: "We'll help demonstrate AiEngage based on the client's business." },
    { icon: 'build_circle', title: 'Technical Support', description: 'Get help with AI agents, CRM, integrations and automation.' },
    { icon: 'school', title: 'Partner Training', description: 'Learn how to identify AI and automation opportunities.' },
    { icon: 'folder_open', title: 'Marketing Resources', description: 'Get decks, use cases, creatives and sales material.' },
    {
      icon: 'workspace_premium',
      title: 'Business Opportunities',
      description: 'Higher-level partners can receive relevant opportunities from AiEngage.',
    },
  ],
};

export const PARTNER_STEPS = {
  label: 'How It Works',
  heading: 'Start Today. Grow With Us.',
  steps: [
    { icon: 'how_to_reg', title: 'Sign Up', description: 'Complete the partner application.' },
    { icon: 'school', title: 'Get Trained', description: 'Understand AiEngage, use cases and how to pitch it.' },
    { icon: 'handshake', title: 'Refer & Consult', description: 'Introduce businesses or sell your own consulting services.' },
    { icon: 'support_agent', title: 'We Help You Close', description: "Use AiEngage's sales, demo and technical support." },
    { icon: 'trending_up', title: 'Earn & Level Up', description: 'Build recurring commissions and unlock more opportunities.' },
  ],
};

export const PARTNER_INDUSTRIES = {
  label: 'Sell Across Industries',
  titleLead: 'One Platform.',
  titleAccent: 'Many Opportunities.',
  items: [
    { icon: 'apartment', label: 'Real Estate', href: '/industries/real-estate' },
    { icon: 'account_balance', label: 'Finance & Loans', href: '/industries/finance' },
    { icon: 'school', label: 'Education', href: '/industries/education' },
    { icon: 'local_hospital', label: 'Healthcare', href: '/industries/healthcare' },
    { icon: 'computer', label: 'IT & Technology', href: '/industries/it' },
    { icon: 'flight', label: 'Travel and Agencies', href: '/industries/tours-travels' },
    { icon: 'factory', label: 'Manufacturing' },
    { icon: 'campaign', label: '+ Many More', muted: true },
  ],
  ctaLabel: 'Become a Partner',
  ctaHref: '/partners/signup',
};

export const PARTNER_WHO = {
  label: 'Who Should Join?',
  headingLead: "Already Helping Businesses Grow? You're a ",
  headingAccent: 'Perfect Fit',
  headingSuffix: '.',
  description: 'If you already advise, build for or market to businesses, you can add AiEngage to what you sell today.',
  items: [
    { icon: 'campaign', label: 'Marketing Agencies' },
    { icon: 'dns', label: 'IT Companies' },
    { icon: 'business_center', label: 'Business Consultants' },
    { icon: 'contacts', label: 'CRM Consultants' },
    { icon: 'ads_click', label: 'Performance Marketers' },
    { icon: 'person', label: 'Freelancers' },
    { icon: 'memory', label: 'Technology Consultants' },
    { icon: 'workspace_premium', label: 'Industry Experts' },
  ],
};

export const PARTNER_CTA = {
  label: 'AiEngage Partner Program',
  headingLine1: 'Your Network Has Value.',
  headingLine2: 'Turn It Into a ',
  headingAccent: 'Business',
  headingLine2Suffix: '.',
  checks: [
    'Help businesses adopt AI.',
    'Build recurring income.',
    'Offer consulting & marketing services.',
    'And unlock new business opportunities from AiEngage as you grow.',
  ],
  earnLabel: 'Earn Up to 35% for 1 Year',
  ctaLabel: 'Sign Up as a Partner',
  ctaHref: '/partners/signup',
  note: 'Free to join · No technical expertise required',
  footerNote: 'You build the relationship. AiEngage powers the technology.',
};

// --- /partners/signup ---------------------------------------------------

// Keyed by the `?tier=` query param the tier cards on /partners link with, so the signup
// page can preselect the matching band (defaults to 'associate' when the param is absent/unknown).
export const PARTNER_SIGNUP_BANDS = {
  associate: { key: '1-5', label: '1–5', level: 'STARTER', name: 'Associate Partner', range: '1–5 Active Customers', pct: '20%' },
  growth: { key: '6-15', label: '6–15', level: 'GROWTH', name: 'Growth Partner', range: '6–15 Active Customers', pct: '30%' },
  elite: { key: '16+', label: '16+', level: 'ELITE', name: 'Elite Partner', range: '16+ Active Customers', pct: '35%' },
};

export const PARTNER_SIGNUP_HERO = {
  title: 'Become an AiEngage Partner',
  description:
    'Help businesses automate sales, WhatsApp, calling and marketing with AI — while building your own recurring revenue.',
  highlight: 'Earn up to 35% commission for 1 year.',
  selectorLabel: "Where you'll start",
  selectorQuestion: 'How many active customers do you manage?',
  exploreLevelsLabel: 'Explore all partner levels',
  exploreLevelsHref: '/partners#partner-levels',
  checks: ['Free to join', 'Partner training', 'Sales support', 'Business opportunities'],
  termsNoteLead: 'By submitting, you agree to the AiEngage Partner Program Terms and ',
  termsNoteSuffix: '.',
};

export const PARTNER_FAQS = [
  { q: 'Is there a cost to join?', a: 'No, joining is free.' },
  {
    q: 'How much can I earn?',
    a: "20–35% recurring commission on eligible subscription revenue for the customer's first 12 months, based on your partner level.",
  },
  {
    q: 'How do partner levels work?',
    a: 'Levels are based on active customers: 1–5 = Associate (20%), 6–15 = Growth (30%), 16+ = Elite (35%).',
  },
  { q: 'Do I need technical expertise?', a: 'No — you get sales, live demo and technical support from AiEngage.' },
  {
    q: 'What support do I get?',
    a: 'Partner training, sales support, live demo support, technical support and marketing resources.',
  },
  {
    q: 'How are AiEngage leads and opportunities allocated?',
    a: 'Higher levels get priority access to consulting, implementation and marketing opportunities; subject to program terms.',
  },
  { q: 'When and how do I get paid?', a: '[Placeholder — confirm payout schedule and method.]' },
];

export const PARTNER_SIGNUP_TERMS = {
  label: 'Terms & Eligibility',
  items: [
    'Open to agencies, IT companies, consultants, freelancers, marketers and industry experts.',
    "Commission applies to eligible subscription revenue for the customer's first 12 months.",
    'Levels, commissions and lead allocation are subject to Partner Program terms.',
  ],
  linkLabel: 'Read the full Partner Program Terms',
  linkHref: '#',
};
