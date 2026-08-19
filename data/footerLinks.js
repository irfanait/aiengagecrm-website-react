// Mirrors the updated footer design: FEATURES spans two columns (the second has no heading of
// its own, it's a visual continuation), then INDUSTRIES, WHY AIENGAGE and COMPANY.
export const FOOTER_COLUMNS = [
  {
    heading: 'FEATURES',
    links: [
      { label: 'WhatsApp Business', href: '/whatsapp' },
      { label: 'Marketing Campaigns', href: '/marketing-campaigns' },
      { label: 'Multi-Channel Communication', href: '/multichannel-communication' },
      { label: 'Customer Management', href: '/customer-management' },
      { label: 'Lead Management', href: '/lead-management' },
      { label: 'Sales Pipeline', href: '/sales-pipeline' },
      { label: 'Automation', href: '/automation' },
      { label: 'AI', href: '/ai' },
    ],
  },
  {
    heading: null,
    links: [
      { label: 'Calling', href: '/calling' },
      { label: 'Mobile App', href: '/mobile-app' },
      { label: 'Data Management', href: '/data-management' },
      { label: 'Reports & Analytics', href: '/reports-analytics' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Customization', href: '/customization' },
      { label: 'Security & Compliance', href: '/security-compliance' },
    ],
  },
  {
    heading: 'INDUSTRIES',
    links: [
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Tours & Travels', href: '/industries/tours-travels' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'IT', href: '/industries/it' },
    ],
  },
  {
    heading: 'WHY AIENGAGE',
    links: [
      { label: 'AiEngage vs HubSpot', href: '/hubspot-alternative' },
      { label: 'AiEngage vs Zoho', href: '/zoho-alternative' },
      { label: 'AiEngage vs Keap', href: '/keap-alternative' },
    ],
  },
  {
    heading: 'COMPANY',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Pricing', href: '/pricing' },
      { label: "What's New", href: '/whats-new' },
      { label: 'Knowledge Base', href: 'https://help.aiengagecrm.com/', external: true },
      { label: 'Partner Program', href: '/partners' },
      { label: 'Trust Center', href: '/trust' },
    ],
  },
];

export const FOOTER_SOCIALS = [
  { icon: 'facebook', name: 'Facebook', href: 'https://www.facebook.com/aiengagecrm' },
  { icon: 'linkedin', name: 'LinkedIn', href: 'https://www.linkedin.com/company/aiengage-crm' },
  { icon: 'instagram', name: 'Instagram', href: 'https://www.instagram.com/aiengage.crm' },
  { icon: 'youtube', name: 'YouTube', href: 'https://www.youtube.com/@AiEngageCRM' },
];
