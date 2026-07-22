import PricingPlansSection from '../../components/organisms/PricingPlansSection/PricingPlansSection';
import StartFreeStrip from '../../components/organisms/StartFreeStrip/StartFreeStrip';
import PricingComparison from '../../components/organisms/PricingComparison/PricingComparison';
import PricingPlatformTiles from '../../components/organisms/PricingPlatformTiles/PricingPlatformTiles';
import PricingFAQ from '../../components/organisms/PricingFAQ/PricingFAQ';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  PR_HERO,
  PR_PRICES,
  PR_PLANS,
  PR_FEATURE_TABLE,
  PR_START_FREE,
  PR_COMPARISON,
  PR_PLATFORM,
  PR_FAQS,
  PR_FINAL_CTA,
} from '../../data/pricing';

export const metadata = buildMetadata(seoData.pricing);

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />

      <PricingPlansSection hero={PR_HERO} prices={PR_PRICES} plans={PR_PLANS} featureTable={PR_FEATURE_TABLE} />

      <StartFreeStrip
        title={PR_START_FREE.title}
        descriptionLead={PR_START_FREE.descriptionLead}
        descriptionBold={PR_START_FREE.descriptionBold}
        descriptionTail={PR_START_FREE.descriptionTail}
        ctaLabel={PR_START_FREE.ctaLabel}
        ctaHref={PR_START_FREE.ctaHref}
      />

      <PricingComparison
        titleLead={PR_COMPARISON.titleLead}
        titleAccent={PR_COMPARISON.titleAccent}
        titleTail={PR_COMPARISON.titleTail}
        aiList={PR_COMPARISON.aiList}
        tradList={PR_COMPARISON.tradList}
        ctaLabel={PR_COMPARISON.ctaLabel}
        ctaHref={PR_COMPARISON.ctaHref}
      />

      <PricingPlatformTiles eyebrow={PR_PLATFORM.eyebrow} heading={PR_PLATFORM.heading} whatsappTile={PR_PLATFORM.whatsappTile} tiles={PR_PLATFORM.tiles} />

      <PricingFAQ heading="Frequently Asked Questions" faqs={PR_FAQS} />

      <CTASection
        title={
          <>
            {PR_FINAL_CTA.titleLead}
            <span className="textAccentDark">{PR_FINAL_CTA.titleAccent}</span>
          </>
        }
        description={PR_FINAL_CTA.description}
        titleSize={40}
      />
    </>
  );
}
