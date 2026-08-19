import FormPageHero from '../../components/organisms/FormPageHero/FormPageHero';
import EmbedForm from '../../components/organisms/EmbedForm/EmbedForm';
import ContactChannels from '../../components/organisms/ContactChannels/ContactChannels';
import ContactOffices from '../../components/organisms/ContactOffices/ContactOffices';
import ContactConnect from '../../components/organisms/ContactConnect/ContactConnect';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { CONTACT_HERO, CONTACT_WAYS, CONTACT_OFFICES, CONTACT_CONNECT } from '../../data/contactUs';
import { CTA_LINKS } from '../../utils/constants';

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
        title={
          <>
            {CONTACT_HERO.titleLead}
            <span className="textAccent">{CONTACT_HERO.titleAccent}</span>
          </>
        }
        description={CONTACT_HERO.description}
        ratio="42fr 58fr"
        form={<EmbedForm slug="aiengage-crm-website-contact-form-1" title="AiEngage CRM - Website Contact Form" />}
      >
        <ContactChannels items={CONTACT_WAYS} />
        <ContactOffices items={CONTACT_OFFICES} />
      </FormPageHero>

      <ContactConnect
        heading="Connect With AiEngage"
        description="More ways to explore AiEngage and grow alongside us."
        items={CONTACT_CONNECT}
      />

      <CTASection
        title={
          <>
            Ready to Simplify and Scale Your <span className="textAccentDark">Customer Engagement?</span>
          </>
        }
        description="Switch to AiEngage and unify your customer experience with smarter, automated tools."
        primaryLabel="Get Started"
        primaryHref={CTA_LINKS.tryFree}
        secondaryLabel="Book a Demo"
        secondaryHref={CTA_LINKS.bookDemo}
        titleSize={36}
      />
    </>
  );
}
