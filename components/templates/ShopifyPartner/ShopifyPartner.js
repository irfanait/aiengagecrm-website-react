import ShopifyHero from '../../organisms/ShopifyHero/ShopifyHero';
import TrustedByV2 from '../../organisms/TrustedByV2/TrustedByV2';
import ShopifyConnected from '../../organisms/ShopifyConnected/ShopifyConnected';
import ShopifyFeatureRow from '../../organisms/ShopifyFeatureRow/ShopifyFeatureRow';
import ShopifyReplaceTools from '../../organisms/ShopifyReplaceTools/ShopifyReplaceTools';
import ShopifyOurStory from '../../organisms/ShopifyOurStory/ShopifyOurStory';
import ShopifyPricing from '../../organisms/ShopifyPricing/ShopifyPricing';
import ShopifyTestimonial from '../../organisms/ShopifyTestimonial/ShopifyTestimonial';
import CTASection from '../../organisms/CTASection/CTASection';
import JsonLd from '../../common/JsonLd/JsonLd';
import { breadcrumbSchema } from '../../../utils/seo';
import { CTA_LINKS } from '../../../utils/constants';
import { FEATURE_ROWS } from '../../../data/shopifyPartner';

/**
 * The /shopify-partner page — built from the "AiEngage Shopify Apps & Agencies" standalone
 * mockup. TrustedByV2 and CTASection are reused as-is (same logos/dark-CTA pattern as the
 * homepage v2 build); every other section here is page-specific. See app/shopify-partner/page.js.
 */
export default function ShopifyPartner() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Shopify Apps & Agencies', path: '/shopify-partner' },
        ])}
      />
      <ShopifyHero />
      <TrustedByV2 />
      <ShopifyConnected />

      {FEATURE_ROWS.map((row, i) => (
        <ShopifyFeatureRow
          key={row.id}
          {...row}
          groupHeading={i === 0 ? 'One CRM to Automate the Entire Customer Journey' : undefined}
        />
      ))}

      <ShopifyReplaceTools />
      <ShopifyOurStory />
      <ShopifyPricing />
      <ShopifyTestimonial />

      <CTASection
        title={
          <>
            One CRM for Your Entire <span className="textAccentDark">Shopify Business</span>
          </>
        }
        description="From first click to long-term customers — capture, convert, support and grow, all in one platform."
        primaryLabel="Start 14-Day Free Trial →"
        primaryHref={CTA_LINKS.tryFree}
        secondaryLabel="Book a Demo"
        secondaryHref={CTA_LINKS.bookDemo}
        titleSize={38}
      />
    </>
  );
}
