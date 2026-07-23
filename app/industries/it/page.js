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
import { IT_HERO, IT_PROBLEM, IT_SOLUTIONS, IT_WORKFLOW, IT_BENEFITS, IT_BUSINESS_TYPES, IT_RESULTS } from '../../../data/industries/it';

export const metadata = buildMetadata(seoData.industryIT);

export default function ITIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/' },
          { name: 'IT & Technology', path: '/industries/it' },
        ])}
      />

      <ProductHero
        badge={{ label: IT_HERO.eyebrow, bg: 'var(--color-primary-tint)', textColor: 'var(--color-primary)' }}
        title={
          <>
            {IT_HERO.titleLead}
            <span className="textAccent">{IT_HERO.titleAccent}</span>
          </>
        }
        description={IT_HERO.description}
      >
        <div style={{ position: 'relative', width: 560, maxWidth: '100%', aspectRatio: `${IT_HERO.image.width} / ${IT_HERO.image.height}` }}>
          <Image src={IT_HERO.image.src} alt={IT_HERO.image.alt} fill sizes="(max-width: 1120px) 100vw, 560px" style={{ objectFit: 'contain' }} priority />
        </div>
      </ProductHero>

      <IndustryProblem eyebrow={IT_PROBLEM.eyebrow} heading={IT_PROBLEM.heading} problems={IT_PROBLEM.problems} mock={IT_PROBLEM.mock} />

      <IndustrySolutions eyebrow={IT_SOLUTIONS.eyebrow} heading={IT_SOLUTIONS.heading} items={IT_SOLUTIONS.items} />

      <IndustryWorkflow eyebrow={IT_WORKFLOW.eyebrow} heading={IT_WORKFLOW.heading} steps={IT_WORKFLOW.steps} />

      <IndustryBenefits heading={IT_BENEFITS.heading} items={IT_BENEFITS.items} />

      <IndustryBusinessTypes
        heading={IT_BUSINESS_TYPES.heading}
        items={IT_BUSINESS_TYPES.items}
        columns={IT_BUSINESS_TYPES.columns}
        variant={IT_BUSINESS_TYPES.variant}
      />

      <IndustryResultsCTA heading={IT_RESULTS.heading} stats={IT_RESULTS.stats} />
    </>
  );
}
