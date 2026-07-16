import { seoData } from '../data/seoData';
import { SITE_URL } from '../utils/constants';

export default function sitemap() {
  return Object.values(seoData).map((entry) => ({
    url: `${SITE_URL}${entry.path === '/' ? '' : entry.path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: entry.path === '/' ? 1 : 0.8,
  }));
}
