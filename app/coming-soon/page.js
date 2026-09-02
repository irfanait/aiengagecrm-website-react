import ComingSoon from '../../components/organisms/ComingSoon/ComingSoon';
import { buildMetadata } from '../../utils/seo';

// Not indexed — this is a temporary placeholder for mega-menu items whose real page isn't
// built yet (see data/megaMenu.js). No entry in data/seoData.js on purpose.
export const metadata = buildMetadata({
  path: '/coming-soon',
  title: 'Coming Soon | AiEngage CRM',
  description: "This feature page isn't live yet — check back soon.",
  noindex: true,
});

export default function ComingSoonPage() {
  return <ComingSoon />;
}
