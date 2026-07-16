import WhatsAppHero from '../../../components/templates/WhatsAppHero/WhatsAppHero';
import { TeamInboxMock } from '../../../components/organisms/WhatsAppMocks/WhatsAppMocks';
import BenefitsGrid from '../../../components/molecules/BenefitsGrid/BenefitsGrid';
import CTASection from '../../../components/organisms/CTASection/CTASection';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import { WHATSAPP_SUBPAGES } from '../../../data/whatsappPages';

const page = WHATSAPP_SUBPAGES['shared-inbox'];

export const metadata = buildMetadata(seoData[page.seoKey]);

export default function WhatsAppTeamInboxPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'WhatsApp Business', path: '/whatsapp' },
          { name: page.breadcrumbLabel, path: '/whatsapp/shared-inbox' },
        ])}
      />

      <WhatsAppHero
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'WhatsApp Business', href: '/whatsapp' },
          { label: page.breadcrumbLabel, href: '/whatsapp/shared-inbox' },
        ]}
        icon={page.icon}
        iconBg={page.iconBg}
        iconColor={page.iconColor}
        title={page.title}
        description={page.description}
      >
        <TeamInboxMock />
      </WhatsAppHero>

      <BenefitsGrid heading={page.benefitsHeading} items={page.benefits} extraChecks={page.extraChecks} />

      <CTASection title={page.ctaTitle} description={page.ctaDesc} secondaryLabel="Back to WhatsApp" secondaryHref="/whatsapp" />
    </>
  );
}
