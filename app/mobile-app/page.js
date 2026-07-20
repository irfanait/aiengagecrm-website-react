import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  MobileHeroMock,
  AndroidAppMock,
  IOSAppMock,
  PushNotificationsAppMock,
} from '../../components/organisms/MobileAppMocks/MobileAppMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  MA_HERO,
  MA_TRUST_ITEMS,
  MA_SECTIONS,
  MA_BENEFITS_HEADING,
  MA_BENEFITS,
  MA_INDUSTRIES,
  MA_FINAL_CTA,
} from '../../data/mobileApp';

export const metadata = buildMetadata(seoData.mobileApp);

const MOCKS = {
  AndroidAppMock,
  IOSAppMock,
  PushNotificationsAppMock,
};

export default function MobileAppPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Mobile App', path: '/mobile-app' },
        ])}
      />

      <ProductHero
        badge={MA_HERO.badge}
        title={
          <>
            {MA_HERO.titleLead}
            <span className="textAccent">{MA_HERO.titleAccent}</span>
          </>
        }
        description={MA_HERO.description}
      >
        <MobileHeroMock />
      </ProductHero>

      <TrustStrip items={MA_TRUST_ITEMS} />

      {MA_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            index={section.index}
            eyebrow={section.eyebrow}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={MA_BENEFITS_HEADING} items={MA_BENEFITS} columns={3} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={MA_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {MA_FINAL_CTA.titleLead}
            <span className="textAccentDark">{MA_FINAL_CTA.titleAccent}</span>
            {MA_FINAL_CTA.titleTrail}
          </>
        }
        description={MA_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}
