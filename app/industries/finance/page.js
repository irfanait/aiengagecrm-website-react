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
import { FIN_HERO, FIN_PROBLEM, FIN_SOLUTIONS, FIN_WORKFLOW, FIN_BENEFITS, FIN_BUSINESS_TYPES, FIN_RESULTS } from '../../../data/industries/finance';

export const metadata = buildMetadata(seoData.industryFinance);

export default function FinanceIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/' },
          { name: 'Finance', path: '/industries/finance' },
        ])}
      />

      <ProductHero
        badge={{ label: FIN_HERO.eyebrow, bg: 'var(--color-primary-tint)', textColor: 'var(--color-primary)' }}
        title={
          <>
            {FIN_HERO.titleLead}
            <span className="textAccent">{FIN_HERO.titleAccent}</span>
          </>
        }
        description={FIN_HERO.description}
      >
        <div style={{ position: 'relative', width: 560, maxWidth: '100%', aspectRatio: `${FIN_HERO.image.width} / ${FIN_HERO.image.height}` }}>
          <Image src={FIN_HERO.image.src} alt={FIN_HERO.image.alt} fill sizes="(max-width: 1120px) 100vw, 560px" style={{ objectFit: 'contain' }} priority />
        </div>
      </ProductHero>

      <IndustryProblem eyebrow={FIN_PROBLEM.eyebrow} heading={FIN_PROBLEM.heading} problems={FIN_PROBLEM.problems} mock={FIN_PROBLEM.mock} />

      <IndustrySolutions eyebrow={FIN_SOLUTIONS.eyebrow} heading={FIN_SOLUTIONS.heading} items={FIN_SOLUTIONS.items} />

      <IndustryWorkflow eyebrow={FIN_WORKFLOW.eyebrow} heading={FIN_WORKFLOW.heading} steps={FIN_WORKFLOW.steps} />

      <IndustryBenefits heading={FIN_BENEFITS.heading} items={FIN_BENEFITS.items} />

      <IndustryBusinessTypes heading={FIN_BUSINESS_TYPES.heading} items={FIN_BUSINESS_TYPES.items} columns={FIN_BUSINESS_TYPES.columns} />

      <IndustryResultsCTA
        heading={
          <>
            {FIN_RESULTS.headingLead}
            <span className="textAccentDark">{FIN_RESULTS.headingAccent}</span>
          </>
        }
        stats={FIN_RESULTS.stats}
        primaryLabel={FIN_RESULTS.primaryLabel}
      />
    </>
  );
}
