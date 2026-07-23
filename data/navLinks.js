// Top-level header nav. "Features" opens the MegaMenu; "Why AiEngage" opens a small NavDropdown.
export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Why AiEngage',
    href: '#',
    isDropdownTrigger: true,
    dropdownItems: [
      { label: 'AiEngage vs HubSpot', href: '/hubspot-alternative' },
      { label: 'AiEngage vs Zoho', href: '/zoho-alternative' },
      { label: 'AiEngage vs Keap', href: '/keap-alternative' },
    ],
  },
  { label: 'Features', href: '/#platform', isMegaMenuTrigger: true },
  {
    label: 'Solutions',
    href: '#',
    isDropdownTrigger: true,
    dropdownItems: [
      { label: 'Knowledge Base', href: 'https://help.aiengagecrm.com/', external: true },
      { label: "What's New", href: '/whats-new' },
    ],
  },
  {
    label: 'Industries',
    href: '#',
    isDropdownTrigger: true,
    dropdownVariant: 'grid',
    dropdownItems: [
      { label: 'Real Estate', href: '/industries/real-estate', icon: 'apartment' },
      { label: 'Healthcare', href: '/industries/healthcare', icon: 'medical_services' },
      { label: 'Event Management', href: '/industries/event-management', icon: 'celebration' },
      { label: 'Tours & Travels', href: '/industries/tours-travels', icon: 'flight' },
      { label: 'Finance', href: '/industries/finance', icon: 'account_balance' },
      { label: 'Education', href: '/industries/education', icon: 'school' },
      { label: 'IT & Technology', href: '/industries/it', icon: 'computer' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
];
