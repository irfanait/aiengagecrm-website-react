import HomepageV3 from '../components/templates/Homepage/homepagev3/HomepageV3';
import { buildMetadata } from '../utils/seo';
import { seoData } from '../data/seoData';

export const metadata = buildMetadata(seoData.home);

// Swap which homepage template renders here — homepagev2 is the previous live design (kept
// in the codebase, untouched), homepagev3 is the new one from the "Home V6" mockup.
export default function HomePage() {
  return <HomepageV3 />;
}
