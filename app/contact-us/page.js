import FormPageHero from '../../components/organisms/FormPageHero/FormPageHero';
import EmbedForm from '../../components/organisms/EmbedForm/EmbedForm';
import ContactChannels from '../../components/organisms/ContactChannels/ContactChannels';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { CONTACT_HERO, CONTACT_CHANNELS } from '../../data/contactUs';

export const metadata = buildMetadata(seoData.contactUs);

export default function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact-us' },
        ])}
      />

      <FormPageHero
        eyebrow={CONTACT_HERO.eyebrow}
        title={CONTACT_HERO.title}
        description={CONTACT_HERO.description}
        form={<EmbedForm slug="aiengage-crm-website-contact-form-1" title="AiEngage CRM - Website Contact Form" />}
      >
        <ContactChannels items={CONTACT_CHANNELS} />
      </FormPageHero>

      <CTASection
        title="Ready To Take Your Business To The Next Level?"
        description="Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM."
        titleSize={36}
      />
    </>
  );
}
