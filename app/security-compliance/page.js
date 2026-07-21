import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  SecurityOverviewMock,
  UserRolesMock,
  SecurityAuditLogMock,
  DataBackupMock,
  TwoFactorAuthMock,
} from '../../components/organisms/SecurityComplianceMocks/SecurityComplianceMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  SC_HERO,
  SC_TRUST_ITEMS,
  SC_SECTIONS,
  SC_INDUSTRIES,
  SC_FINAL_CTA,
} from '../../data/securityCompliance';

export const metadata = buildMetadata(seoData.securityCompliance);

const MOCKS = {
  UserRolesMock,
  SecurityAuditLogMock,
  DataBackupMock,
  TwoFactorAuthMock,
};

export default function SecurityCompliancePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Security & Compliance', path: '/security-compliance' },
        ])}
      />

      <ProductHero
        badge={SC_HERO.badge}
        title={
          <>
            {SC_HERO.titleLead}
            <span className="textAccent">{SC_HERO.titleAccent}</span>
          </>
        }
        description={SC_HERO.description}
      >
        <SecurityOverviewMock />
      </ProductHero>

      <TrustStrip items={SC_TRUST_ITEMS} />

      {SC_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            dark={section.dark}
            mock={<Mock />}
          />
        );
      })}

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={SC_INDUSTRIES} columns={3} showMoreCard={false} />

      <CTASection
        title={
          <>
            {SC_FINAL_CTA.titleLead}
            <span className="textAccentDark">{SC_FINAL_CTA.titleAccent}</span>
            {SC_FINAL_CTA.titleTrail}
          </>
        }
        description={SC_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}
