// Data for the new homepage (v2) IndustriesV2 section. Independent from data/homeContent.js's
// INDUSTRIES array, which backs the old homepage's Industries component (homepagev1) — that file
// and component must stay untouched so the live site is unaffected. IndustriesV2 uses its own
// per-item icon color (the old pill-style Industries component uses a single shared color), so a
// separate array rather than reusing INDUSTRIES.

export const HOMEV2_INDUSTRIES = [
  { icon: 'payments', label: 'Finance', href: '/industries/finance', color: 'rgb(31, 175, 100)' },
  { icon: 'school', label: 'Education', href: '/industries/education', color: 'rgb(124, 77, 255)' },
  { icon: 'code', label: 'IT & Technology', href: '/industries/it', color: 'rgb(99, 91, 255)' },
  { icon: 'medical_services', label: 'Healthcare', href: '/industries/healthcare', color: 'rgb(242, 47, 70)' },
  { icon: 'flight', label: 'Tours & Travels', href: '/industries/tours-travels', color: 'rgb(34, 184, 207)' },
  { icon: 'apartment', label: 'Real Estate', href: '/industries/real-estate', color: 'rgb(42, 111, 219)' },
  { icon: 'factory', label: 'Manufacturing', color: 'rgb(85, 97, 122)' },
  { icon: 'storefront', label: 'Retail', color: 'rgb(249, 171, 0)' },
  { icon: 'handshake', label: 'Agencies', color: 'rgb(18, 184, 134)' },
];
