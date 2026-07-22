// Top-level header nav. "Features" opens the MegaMenu; "Why AiEngage" opens a small NavDropdown.
export const NAV_LINKS = [
  { label: 'About Us', href: '/about' },
  {
    label: 'Why AiEngage',
    href: '#',
    isDropdownTrigger: true,
    dropdownItems: [
      { label: 'AiEngage vs HubSpot', href: '#' },
      { label: 'AiEngage vs Zoho', href: '#' },
      { label: 'AiEngage vs Keap', href: '#' },
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
    dropdownItems: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Event Management', href: '/industries/event-management' },
      { label: 'Education', href: '/industries/education' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'Tours & Travels', href: '/industries/tours-travels' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
];
