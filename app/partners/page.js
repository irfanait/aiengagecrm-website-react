import PartnerHero from '../../components/organisms/PartnerHero/PartnerHero';
import PartnerRoles from '../../components/organisms/PartnerRoles/PartnerRoles';
import PartnerEarn from '../../components/organisms/PartnerEarn/PartnerEarn';
import PartnerTiers from '../../components/organisms/PartnerTiers/PartnerTiers';
import PartnerSupport from '../../components/organisms/PartnerSupport/PartnerSupport';
import PartnerVideo from '../../components/organisms/PartnerVideo/PartnerVideo';
import PartnerSteps from '../../components/organisms/PartnerSteps/PartnerSteps';
import PartnerIndustries from '../../components/organisms/PartnerIndustries/PartnerIndustries';
import PartnerWho from '../../components/organisms/PartnerWho/PartnerWho';
import PartnerFinalCTA from '../../components/organisms/PartnerFinalCTA/PartnerFinalCTA';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  PARTNER_HERO,
  PARTNER_DASHBOARD,
  PARTNER_ROLES,
  PARTNER_EARN,
  PARTNER_TIERS,
  PARTNER_SUPPORT,
  PARTNER_STEPS,
  PARTNER_INDUSTRIES,
  PARTNER_WHO,
  PARTNER_CTA,
} from '../../data/partners';

export const metadata = buildMetadata(seoData.partners);

export default function PartnersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Partners', path: '/partners' },
        ])}
      />

      <PartnerHero hero={PARTNER_HERO} dashboard={PARTNER_DASHBOARD} />
      <PartnerRoles data={PARTNER_ROLES} />
      <PartnerEarn data={PARTNER_EARN} />
      <PartnerTiers data={PARTNER_TIERS} />
      <PartnerSupport data={PARTNER_SUPPORT} />
      <PartnerVideo />
      <PartnerSteps data={PARTNER_STEPS} />
      <PartnerIndustries data={PARTNER_INDUSTRIES} />
      <PartnerWho data={PARTNER_WHO} />
      <PartnerFinalCTA data={PARTNER_CTA} />
    </>
  );
}
