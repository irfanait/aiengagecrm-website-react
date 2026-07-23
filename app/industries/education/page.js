import Image from 'next/image';
import ProductHero from '../../../components/templates/ProductHero/ProductHero';
import IndustryProblem from '../../../components/organisms/IndustryProblem/IndustryProblem';
import IndustrySolutions from '../../../components/organisms/IndustrySolutions/IndustrySolutions';
import IndustryWorkflow from '../../../components/organisms/IndustryWorkflow/IndustryWorkflow';
import IndustryBenefits from '../../../components/organisms/IndustryBenefits/IndustryBenefits';
import IndustryBusinessTypes from '../../../components/organisms/IndustryBusinessTypes/IndustryBusinessTypes';
import FAQAccordion from '../../../components/organisms/FAQAccordion/FAQAccordion';
import IndustryStatsCTA from '../../../components/organisms/IndustryStatsCTA/IndustryStatsCTA';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import {
  EDU_HERO,
  EDU_PROBLEM,
  EDU_SOLUTIONS,
  EDU_WORKFLOW,
  EDU_BENEFITS,
  EDU_INSTITUTION_TYPES,
  EDU_FAQS,
  EDU_RESULTS,
} from '../../../data/industries/education';

export const metadata = buildMetadata(seoData.industryEducation);

export default function EducationIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/' },
          { name: 'Education', path: '/industries/education' },
        ])}
      />

      <ProductHero
        badge={{ label: EDU_HERO.eyebrow, bg: 'var(--color-primary-tint)', textColor: 'var(--color-primary)' }}
        title={
          <>
            {EDU_HERO.titleLead}
            <span className="textAccent">{EDU_HERO.titleAccent}</span>
          </>
        }
        description={EDU_HERO.description}
      >
        <div style={{ position: 'relative', width: 560, maxWidth: '100%', aspectRatio: `${EDU_HERO.image.width} / ${EDU_HERO.image.height}` }}>
          <Image src={EDU_HERO.image.src} alt={EDU_HERO.image.alt} fill sizes="(max-width: 1120px) 100vw, 560px" style={{ objectFit: 'contain' }} priority />
        </div>
      </ProductHero>

      <IndustryProblem eyebrow={EDU_PROBLEM.eyebrow} heading={EDU_PROBLEM.heading} problems={EDU_PROBLEM.problems} mock={EDU_PROBLEM.mock} />

      <IndustrySolutions eyebrow={EDU_SOLUTIONS.eyebrow} heading={EDU_SOLUTIONS.heading} items={EDU_SOLUTIONS.items} />

      <IndustryWorkflow eyebrow={EDU_WORKFLOW.eyebrow} heading={EDU_WORKFLOW.heading} steps={EDU_WORKFLOW.steps} />

      <IndustryBenefits heading={EDU_BENEFITS.heading} items={EDU_BENEFITS.items} />

      <IndustryBusinessTypes
        heading={EDU_INSTITUTION_TYPES.heading}
        items={EDU_INSTITUTION_TYPES.items}
        columns={EDU_INSTITUTION_TYPES.columns}
        variant={EDU_INSTITUTION_TYPES.variant}
      />

      <FAQAccordion heading={EDU_FAQS.heading} faqs={EDU_FAQS.items} />

      <IndustryStatsCTA statRows={EDU_RESULTS.statRows} heading={EDU_RESULTS.heading} description={EDU_RESULTS.description} />
    </>
  );
}
