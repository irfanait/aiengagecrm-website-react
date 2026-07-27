import { cookies } from 'next/headers';
import NewPricingPlansSection from '../../components/newpricing/NewPricingPlansSection/NewPricingPlansSection';
import NewCustomPlanStrip from '../../components/newpricing/NewCustomPlanStrip/NewCustomPlanStrip';
import NewStartFreeStrip from '../../components/newpricing/NewStartFreeStrip/NewStartFreeStrip';
import NewPricingComparison from '../../components/newpricing/NewPricingComparison/NewPricingComparison';
import NewPricingPlatformTiles from '../../components/newpricing/NewPricingPlatformTiles/NewPricingPlatformTiles';
import NewPricingFAQ from '../../components/newpricing/NewPricingFAQ/NewPricingFAQ';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  NP_HERO,
  NP_PRICES,
  NP_PLANS,
  NP_CUSTOM_PLAN,
  NP_FEATURE_TABLE,
  NP_START_FREE,
  NP_COMPARISON,
  NP_PLATFORM,
  NP_FAQS,
  NP_FINAL_CTA,
} from '../../data/newPricing';

export const metadata = buildMetadata(seoData.pricing);

export default async function NewPricingPage() {
  const countryCookie = (await cookies()).get('aie_country')?.value;
  const initialRegion = countryCookie ? (countryCookie === 'IN' ? 'india' : 'international') : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />

      <NewPricingPlansSection hero={NP_HERO} prices={NP_PRICES} plans={NP_PLANS} featureTable={NP_FEATURE_TABLE} initialRegion={initialRegion} />

      <NewCustomPlanStrip
        title={NP_CUSTOM_PLAN.title}
        description={NP_CUSTOM_PLAN.description}
        features={NP_CUSTOM_PLAN.features}
        ctaLabel={NP_CUSTOM_PLAN.ctaLabel}
        ctaHref={NP_CUSTOM_PLAN.ctaHref}
      />

      <NewStartFreeStrip
        title={NP_START_FREE.title}
        descriptionLead={NP_START_FREE.descriptionLead}
        descriptionBold={NP_START_FREE.descriptionBold}
        descriptionTail={NP_START_FREE.descriptionTail}
        ctaLabel={NP_START_FREE.ctaLabel}
        ctaHref={NP_START_FREE.ctaHref}
      />

      <NewPricingComparison
        titleLead={NP_COMPARISON.titleLead}
        titleAccent={NP_COMPARISON.titleAccent}
        titleTail={NP_COMPARISON.titleTail}
        aiList={NP_COMPARISON.aiList}
        tradList={NP_COMPARISON.tradList}
        ctaLabel={NP_COMPARISON.ctaLabel}
        ctaHref={NP_COMPARISON.ctaHref}
      />

      <NewPricingPlatformTiles eyebrow={NP_PLATFORM.eyebrow} heading={NP_PLATFORM.heading} whatsappTile={NP_PLATFORM.whatsappTile} tiles={NP_PLATFORM.tiles} />

      <NewPricingFAQ heading="Frequently Asked Questions" faqs={NP_FAQS} />

      <CTASection
        title={
          <>
            {NP_FINAL_CTA.titleLead}
            <span className="textAccentDark">{NP_FINAL_CTA.titleAccent}</span>
          </>
        }
        description={NP_FINAL_CTA.description}
        titleSize={40}
      />
    </>
  );
}
