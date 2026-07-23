import FormPageHero from '../../components/organisms/FormPageHero/FormPageHero';
import EmbedForm from '../../components/organisms/EmbedForm/EmbedForm';
import ChecklistBlock from '../../components/molecules/ChecklistBlock/ChecklistBlock';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import { DEMO_HERO, DEMO_BENEFITS } from '../../data/bookADemo';

export const metadata = buildMetadata(seoData.bookADemo);

export default function BookADemoPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Book a Demo', path: '/book-a-demo' },
        ])}
      />

      <FormPageHero
        eyebrow={DEMO_HERO.eyebrow}
        title={DEMO_HERO.title}
        description={DEMO_HERO.description}
        form={<EmbedForm slug="aiengage-crm-book-a-demo-form-1" title="AiEngage CRM - Book a Demo Form" />}
      >
        <ChecklistBlock heading={DEMO_BENEFITS.heading} items={DEMO_BENEFITS.items} />
      </FormPageHero>

      <CTASection
        title="Ready To Take Your Business To The Next Level?"
        description="Capture leads, automate follow-ups, boost re-engagement, increase repeat clients, and maximize ROI with our AI-powered CRM."
        titleSize={36}
      />
    </>
  );
}
