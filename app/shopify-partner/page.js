import ShopifyPartner from '../../components/templates/ShopifyPartner/ShopifyPartner';
import { buildMetadata } from '../../utils/seo';
import { seoData } from '../../data/seoData';

export const metadata = buildMetadata(seoData.shopifyPartner);

export default function ShopifyPartnerPage() {
  return <ShopifyPartner />;
}
