import { SITE_NAME, SITE_URL } from './constants';

/**
 * Turns a data/seoData.js entry into a Next.js Metadata object (App Router).
 * Usage in a page.js: `export const metadata = buildMetadata(seoData.whatsappHub);`
 */
export function buildMetadata(entry, overrides = {}) {
  const merged = { ...entry, ...overrides };
  const canonical = `${SITE_URL}${merged.path === '/' ? '' : merged.path}`;
  const imageUrl = merged.image ? `${SITE_URL}${merged.image}` : `${SITE_URL}/og/default.png`;

  return {
    title: merged.title,
    description: merged.description,
    keywords: merged.keywords,
    alternates: {
      canonical,
    },
    robots: merged.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title: merged.title,
      description: merged.description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: merged.title }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: merged.title,
      description: merged.description,
      images: [imageUrl],
    },
  };
}

/** JSON-LD: Organization schema, rendered once in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: [
      'https://www.facebook.com/aiengagecrm',
      'https://www.linkedin.com/company/aiengagecrm',
      'https://twitter.com/aiengagecrm',
      'https://www.instagram.com/aiengagecrm',
    ],
  };
}

/** JSON-LD: BreadcrumbList schema for a feature page. items: [{ name, path }] */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** JSON-LD: WebPage schema for a generic content page. */
export function webPageSchema({ name, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
