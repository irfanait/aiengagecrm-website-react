import PartnerSignupHero from '../../../components/organisms/PartnerSignupHero/PartnerSignupHero';
import PartnerFAQ from '../../../components/organisms/PartnerFAQ/PartnerFAQ';
import PartnerSignupTerms from '../../../components/organisms/PartnerSignupTerms/PartnerSignupTerms';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import { PARTNER_SIGNUP_HERO, PARTNER_SIGNUP_BANDS, PARTNER_FAQS, PARTNER_SIGNUP_TERMS } from '../../../data/partners';

export const metadata = buildMetadata(seoData.partnerSignup);

export default async function PartnerSignupPage({ searchParams }) {
  const params = await searchParams;
  const tier = typeof params.tier === 'string' ? params.tier : null;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Partners', path: '/partners' },
          { name: 'Partner Signup', path: '/partners/signup' },
        ])}
      />

      <PartnerSignupHero hero={PARTNER_SIGNUP_HERO} bands={PARTNER_SIGNUP_BANDS} initialTier={tier} />
      <PartnerFAQ items={PARTNER_FAQS} />
      <PartnerSignupTerms data={PARTNER_SIGNUP_TERMS} />
    </>
  );
}
