// "What's New" changelog — static UI copy + URL/date helpers only. The entries themselves,
// the sidebar's Modules list, and Years all come from the CMS via utils/whatsNewApi.js: any post
// under the "What's New on AiEngage" category (or one of its child categories) is a What's New
// entry, and every child category becomes a Modules filter — see WHATS_NEW_ROOT_SLUG in
// utils/blogApi.js. Adding an update is a CMS-only change now; nothing here needs to touch it.
//
// Set WHATS_NEW_SOURCE=static in .env.local to fall back to the original hand-authored entries in
// data/whatsNewEntries.js instead (e.g. if the CMS category isn't set up yet) — app/whats-new/
// page.js and app/whats-new/[slug]/page.js branch on this, no other code needs to change either way.
export const WHATS_NEW_SOURCE = process.env.WHATS_NEW_SOURCE === 'static' ? 'static' : 'api';

export const WN_BANNER = {
  title: 'What’s New on AiEngage CRM?',
  subtitle:
    'Stay ahead with AiEngage CRM’s latest AI-powered features to automate customer engagement, streamline workflows, and drive business growth.',
  contactLead: 'Contact us',
  contactHref: '/book-a-demo',
  contactTail: ' if you have any specific suggestions and we are happy to work on them.',
};

// Top pill tabs. `key` (except 'all') is matched against a post's derived type tag — see
// deriveTypeTag() in utils/whatsNewApi.js (read from a CMS tag, since the API has no dedicated
// "new feature vs enhancement" field).
export const WN_TYPE_FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'new-feature-update', label: 'New Features' },
  { key: 'enhancement', label: 'Product Enhancements' },
];

// CTA row shown at the bottom of every detail page.
export const WN_DETAIL_CTA = {
  tryLabel: 'Try on your Store',
  tryHref: 'https://app.aiengagecrm.com/',
  signupLead: 'New to AiEngage CRM? ',
  signupLabel: 'Sign Up',
  signupHref: '/pricing',
};

export const WN_PAGE_SIZE = 10;

/** '2026-07-15' -> '15 Jul, 2026', matching the source site's date display. */
export function formatWhatsNewDate(iso) {
  const [year, month, day] = iso.split('-');
  const monthLabel = new Date(Number(year), Number(month) - 1, 1).toLocaleString('en-US', { month: 'short' });
  return `${Number(day)} ${monthLabel}, ${year}`;
}

/** Builds a /whats-new filter URL, keeping only the facets that are actually set. `module` is a
 * child-category slug. */
export function buildWhatsNewFilterUrl({ type, module, year, page } = {}) {
  const params = new URLSearchParams();
  if (type && type !== 'all') params.set('type', type);
  if (module) params.set('module', module);
  if (year) params.set('year', year);
  if (page && page > 1) params.set('page', String(page));
  const qs = params.toString();
  return qs ? `/whats-new?${qs}` : '/whats-new';
}
