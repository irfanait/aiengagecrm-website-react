import HomepageV2 from '../components/templates/Homepage/homepagev2/HomepageV2';
import { buildMetadata } from '../utils/seo';
import { seoData } from '../data/seoData';

export const metadata = buildMetadata(seoData.home);

export default function HomePage() {
  return <HomepageV2 />;
}
