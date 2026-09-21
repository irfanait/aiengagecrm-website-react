import { SITE_URL } from '../utils/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        // Thin/duplicate content, not meant to be indexed.
        '/blog/search',
        // No unique content to rank — partner sign-up/application form.
        '/partners/signup',
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
