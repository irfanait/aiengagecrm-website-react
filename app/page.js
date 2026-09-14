import HomepageV2 from '../components/templates/Homepage/homepagev2/HomepageV2';
import { buildMetadata } from '../utils/seo';
import { seoData } from '../data/seoData';

export const metadata = buildMetadata(seoData.home);

// Swap which homepage template renders here — homepagev1 is the current live design,
// homepagev2 is the new one in progress (components/templates/Homepage/homepagev2).
export default function HomePage() {
  return <HomepageV2 />;
}
