import Image from 'next/image';
import ProductHero from '../../../components/templates/ProductHero/ProductHero';
import IndustryProblem from '../../../components/organisms/IndustryProblem/IndustryProblem';
import IndustrySolutions from '../../../components/organisms/IndustrySolutions/IndustrySolutions';
import IndustryWorkflow from '../../../components/organisms/IndustryWorkflow/IndustryWorkflow';
import IndustryBenefits from '../../../components/organisms/IndustryBenefits/IndustryBenefits';
import IndustryBusinessTypes from '../../../components/organisms/IndustryBusinessTypes/IndustryBusinessTypes';
import IndustryResultsCTA from '../../../components/organisms/IndustryResultsCTA/IndustryResultsCTA';
import JsonLd from '../../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../../utils/seo';
import { seoData } from '../../../data/seoData';
import { HC_HERO, HC_PROBLEM, HC_SOLUTIONS, HC_WORKFLOW, HC_BENEFITS, HC_BUSINESS_TYPES, HC_RESULTS } from '../../../data/industries/healthcare';

export const metadata = buildMetadata(seoData.industryHealthcare);

export default function HealthcareIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/' },
          { name: 'Healthcare', path: '/industries/healthcare' },
        ])}
      />

      <ProductHero
        badge={{ label: HC_HERO.eyebrow, bg: 'var(--color-primary-tint)', textColor: 'var(--color-primary)' }}
        title={
          <>
            {HC_HERO.titleLead}
            <span className="textAccent">{HC_HERO.titleAccent}</span>
          </>
        }
        description={HC_HERO.description}
      >
        <div style={{ position: 'relative', width: 560, maxWidth: '100%', aspectRatio: `${HC_HERO.image.width} / ${HC_HERO.image.height}` }}>
          <Image src={HC_HERO.image.src} alt={HC_HERO.image.alt} fill sizes="(max-width: 1120px) 100vw, 560px" style={{ objectFit: 'contain' }} priority />
        </div>
      </ProductHero>

      <IndustryProblem eyebrow={HC_PROBLEM.eyebrow} heading={HC_PROBLEM.heading} problems={HC_PROBLEM.problems} mock={HC_PROBLEM.mock} />

      <IndustrySolutions eyebrow={HC_SOLUTIONS.eyebrow} heading={HC_SOLUTIONS.heading} items={HC_SOLUTIONS.items} />

      <IndustryWorkflow eyebrow={HC_WORKFLOW.eyebrow} heading={HC_WORKFLOW.heading} steps={HC_WORKFLOW.steps} />

      <IndustryBenefits heading={HC_BENEFITS.heading} items={HC_BENEFITS.items} />

      <IndustryBusinessTypes heading={HC_BUSINESS_TYPES.heading} items={HC_BUSINESS_TYPES.items} columns={HC_BUSINESS_TYPES.columns} />

      <IndustryResultsCTA heading={HC_RESULTS.heading} stats={HC_RESULTS.stats} />
    </>
  );
}
