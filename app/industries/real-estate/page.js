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
import { RE_HERO, RE_PROBLEM, RE_SOLUTIONS, RE_WORKFLOW, RE_BENEFITS, RE_BUSINESS_TYPES, RE_RESULTS } from '../../../data/industries/realEstate';

export const metadata = buildMetadata(seoData.industryRealEstate);

export default function RealEstateIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/' },
          { name: 'Real Estate', path: '/industries/real-estate' },
        ])}
      />

      <ProductHero
        badge={{ label: RE_HERO.eyebrow, bg: 'var(--color-primary-tint)', textColor: 'var(--color-primary)' }}
        title={
          <>
            {RE_HERO.titleLead}
            <span className="textAccent">{RE_HERO.titleAccent}</span>
          </>
        }
        description={RE_HERO.description}
      >
        <div style={{ position: 'relative', width: 560, maxWidth: '100%', aspectRatio: `${RE_HERO.image.width} / ${RE_HERO.image.height}` }}>
          <Image src={RE_HERO.image.src} alt={RE_HERO.image.alt} fill sizes="(max-width: 1120px) 100vw, 560px" style={{ objectFit: 'contain' }} priority />
        </div>
      </ProductHero>

      <IndustryProblem eyebrow={RE_PROBLEM.eyebrow} heading={RE_PROBLEM.heading} problems={RE_PROBLEM.problems} mock={RE_PROBLEM.mock} />

      <IndustrySolutions eyebrow={RE_SOLUTIONS.eyebrow} heading={RE_SOLUTIONS.heading} items={RE_SOLUTIONS.items} />

      <IndustryWorkflow eyebrow={RE_WORKFLOW.eyebrow} heading={RE_WORKFLOW.heading} steps={RE_WORKFLOW.steps} />

      <IndustryBenefits heading={RE_BENEFITS.heading} items={RE_BENEFITS.items} />

      <IndustryBusinessTypes heading={RE_BUSINESS_TYPES.heading} items={RE_BUSINESS_TYPES.items} columns={RE_BUSINESS_TYPES.columns} />

      <IndustryResultsCTA heading={RE_RESULTS.heading} stats={RE_RESULTS.stats} />
    </>
  );
}
