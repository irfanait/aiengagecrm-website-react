import { cookies } from 'next/headers';
import NewPricingPlansSection from '../../components/newpricing/NewPricingPlansSection/NewPricingPlansSection';
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
  NP_FEATURE_TABLE,
  NP_START_FREE,
  NP_COMPARISON,
  NP_PLATFORM,
  NP_FAQS,
  NP_FINAL_CTA,
} from '../../data/newPricing';

export const metadata = buildMetadata(seoData.pricingNew);

// Staging route for the new Business / Business Pro plan structure. Intentionally isolated from
// app/pricing/page.js and everything it imports — see data/newPricing.js and
// components/newpricing/* for why. Once this is ready to go live, this route gets renamed to
// /pricing (and the current /pricing page archived), rather than the two being merged.
export default async function NewPricingPage() {
  const countryCookie = (await cookies()).get('aie_country')?.value;
  const initialRegion = countryCookie ? (countryCookie === 'IN' ? 'india' : 'international') : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing-new' },
        ])}
      />

      <NewPricingPlansSection hero={NP_HERO} prices={NP_PRICES} plans={NP_PLANS} featureTable={NP_FEATURE_TABLE} initialRegion={initialRegion} />

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
