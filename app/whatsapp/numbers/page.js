import WhatsAppHero from '../../../components/templates/WhatsAppHero/WhatsAppHero';
import { NumbersMock } from '../../../components/organisms/WhatsAppMocks/WhatsAppMocks';
import BenefitsGrid from '../../../components/molecules/BenefitsGrid/BenefitsGrid';
import CTASection from '../../../components/organisms/CTASection/CTASection';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import { WHATSAPP_SUBPAGES } from '../../../data/whatsappPages';

const page = WHATSAPP_SUBPAGES.numbers;

export const metadata = buildMetadata(seoData[page.seoKey]);

export default function WhatsAppNumbersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'WhatsApp Business', path: '/whatsapp' },
          { name: page.breadcrumbLabel, path: '/whatsapp/numbers' },
        ])}
      />

      <WhatsAppHero
        icon={page.icon}
        iconBg={page.iconBg}
        iconColor={page.iconColor}
        title={page.title}
        description={page.description}
      >
        <NumbersMock />
      </WhatsAppHero>

      <BenefitsGrid heading={page.benefitsHeading} items={page.benefits} />

      <CTASection title={page.ctaTitle} description={page.ctaDesc} secondaryLabel="Back to WhatsApp" secondaryHref="/whatsapp" />
    </>
  );
}
