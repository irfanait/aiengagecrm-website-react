// Content for the Marketing Campaigns page — a single scrolling page with anchor-linked sections,
// following the WhatsApp/Sales Pipeline convention (numbered eyebrows, trust strip, check_circle
// icon, bold list headings). Most sections also carry an optional "Key Benefits" strip below the
// row (see FeatureSection's keyBenefits prop) — a pattern unique to this page.

export const MKT_HERO = {
  badge: { icon: 'campaign', label: 'MARKETING CAMPAIGNS', bg: 'var(--color-primary-tint)', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Reach The Right Customers Across ',
  titleAccent: 'Every Marketing Channel',
  description:
    'Create, send, and track marketing campaigns from one place. Send targeted promotions, service updates, reminders, announcements, and follow-up campaigns without managing multiple tools.',
};

export const MKT_TRUST_ITEMS = [
  { icon: 'mail', label: 'Email campaigns', color: 'var(--color-blue)' },
  { icon: 'chat', label: 'WhatsApp campaigns', color: 'var(--color-whatsapp)' },
  { icon: 'auto_awesome', label: 'AI campaign builder', color: 'var(--color-purple)' },
  { icon: 'insights', label: 'Multi-channel insights', color: 'var(--color-primary)' },
];

export const MKT_SECTIONS = [
  {
    id: 'email-campaigns',
    index: '01',
    eyebrow: 'EMAIL',
    titleLead: 'Email ',
    titleAccent: 'Campaigns',
    mockKey: 'EmailBuilderMock',
    reverse: false,
    paragraphs: [
      'Design and send professional email campaigns to engage leads, nurture prospects, and bring existing customers back. Use customer segments, personalized fields, and campaign templates to make every email more relevant to the recipient.',
    ],
    lists: [
      {
        heading: 'Send Email Campaigns For',
        items: ['Product launches', 'New service announcements', 'Offers and discounts', 'Event invitations', 'Newsletter updates', 'Proposal follow-ups', 'Customer re-engagement', 'Birthday and anniversary wishes', 'Renewal reminders', 'Post-purchase communication'],
      },
      {
        heading: 'Email Campaign Features',
        items: ['Drag-and-drop email builder', 'Ready-to-use email templates', 'Personalized customer fields', 'Audience segmentation', 'Scheduled email sending', 'Test email sending', 'Subject line and sender settings', 'Campaign drafts', 'Email preview', 'Unsubscribe management'],
      },
    ],
    keyBenefits: {
      heading: 'KEY BENEFITS',
      items: ['Create campaigns without design effort', 'Send personalized communication at scale', 'Reach leads with relevant updates', 'Build stronger customer relationships', 'Keep customers engaged over time'],
    },
  },
  {
    id: 'whatsapp-campaigns',
    index: '02',
    eyebrow: 'WHATSAPP',
    titleLead: 'WhatsApp ',
    titleAccent: 'Campaigns',
    mockKey: 'WhatsAppCampaignBuilderMock',
    reverse: true,
    leadParagraph: 'Send High-Visibility Campaigns On WhatsApp.',
    paragraphs: [
      'Run personalized WhatsApp campaigns for offers, product updates, reminders, service announcements, events, and customer engagement.',
    ],
    lists: [
      {
        heading: 'Send WhatsApp Campaigns For',
        items: ['Festival promotions', 'New product launches', 'Discount offers', 'Appointment reminders', 'Payment reminders', 'Event invitations', 'Service updates', 'New arrivals', 'Birthday wishes', 'Customer re-engagement'],
      },
      {
        heading: 'WhatsApp Campaign Features',
        items: ['Personalized WhatsApp templates', 'Images and videos', 'PDFs and documents', 'CTA buttons', 'Product catalog sharing', 'Customer segmentation', 'Campaign scheduling', 'Template approval support', 'Delivery and read tracking', 'Response tracking'],
      },
    ],
    keyBenefits: {
      heading: 'KEY BENEFITS',
      items: ['Reach customers faster', 'Improve message visibility', 'Drive quicker responses', 'Share rich campaign content', 'Turn conversations into enquiries'],
    },
  },
  {
    id: 'ai-campaign-builder',
    index: '03',
    eyebrow: 'AI BUILDER',
    titleLead: 'AI Campaign ',
    titleAccent: 'Builder',
    mockKey: 'AICampaignBuilderMock',
    reverse: false,
    leadParagraph: 'Create Campaigns Faster Without Starting From A Blank Screen.',
    paragraphs: [
      'Use AI to turn a campaign idea into ready-to-use messaging for emails and WhatsApp. Generate subject lines, message drafts, campaign angles, follow-up ideas, and audience suggestions in less time.',
      'Your team gets a faster starting point while keeping control over the final message.',
    ],
    lists: [
      {
        heading: 'Create Better Campaigns With AI',
        items: ['Campaign ideas', 'Email copy drafts', 'WhatsApp message drafts', 'Subject line suggestions', 'Offer messaging', 'Follow-up message ideas', 'Audience suggestions', 'Campaign themes', 'Re-engagement campaigns', 'Seasonal campaign concepts', 'Call-to-action suggestions', 'Content variations for testing'],
      },
    ],
  },
  {
    id: 'campaign-insights',
    index: '04',
    eyebrow: 'INSIGHTS',
    titleLead: 'AI Campaign ',
    titleAccent: 'Insights',
    mockKey: 'CampaignInsightsMock',
    reverse: true,
    paragraphs: [
      'Track campaign performance across email, WhatsApp, and SMS from one dashboard. Use campaign data to improve targeting, messaging, timing, and future marketing decisions.',
    ],
    lists: [
      {
        heading: 'Track Campaign Performance',
        items: ['Campaigns sent', 'Delivery rate', 'Open rate', 'Click-through rate', 'Read rate', 'Customer responses', 'Unsubscribes', 'Failed deliveries', 'Lead conversions', 'Revenue generated', 'Campaign-wise engagement', 'Channel-wise performance'],
      },
      {
        heading: 'Analyze By',
        items: ['Campaign type', 'Customer segment', 'Marketing channel', 'Date range', 'Product or service', 'Lead source', 'Team or campaign owner', 'Customer response activity'],
      },
    ],
    keyBenefits: {
      heading: 'KEY BENEFITS',
      items: ['Identify high-performing campaigns', 'Improve campaign targeting', 'Understand customer engagement', 'Compare email, WhatsApp, and SMS results', 'Track conversions from campaigns', 'Make better marketing decisions'],
    },
  },
];

export const MKT_BENEFITS_HEADING = 'Run Smarter Campaigns. Build Stronger Customer Engagement.';

export const MKT_BENEFITS = [
  'Email Campaign Management',
  'WhatsApp Campaign Management',
  'SMS Campaign Management',
  'Audience Segmentation',
  'Personalized Messaging',
  'Campaign Scheduling',
  'Multi-channel Engagement',
  'Delivery & Response Tracking',
  'Campaign performance reports',
  'Lead Conversion Visibility',
];

export const MKT_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT Companies', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  { icon: 'precision_manufacturing', label: 'Manufacturing', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'groups', label: 'Agencies', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { icon: 'account_balance', label: 'Financial Services', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'handshake', label: 'Service Businesses', dark: true },
];

export const MKT_FINAL_CTA = {
  titleLead: 'Launch Campaigns That Drive ',
  titleAccent: 'Replies, Leads, And Revenue',
};
