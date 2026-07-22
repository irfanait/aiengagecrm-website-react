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
import { TT_HERO, TT_PROBLEM, TT_SOLUTIONS, TT_WORKFLOW, TT_BENEFITS, TT_BUSINESS_TYPES, TT_RESULTS } from '../../../data/industries/toursTravels';

export const metadata = buildMetadata(seoData.industryToursTravels);

export default function ToursTravelsIndustryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Industries', path: '/' },
          { name: 'Tours & Travels', path: '/industries/tours-travels' },
        ])}
      />

      <ProductHero
        badge={{ label: TT_HERO.eyebrow, bg: 'var(--color-primary-tint)', textColor: 'var(--color-primary)' }}
        title={
          <>
            {TT_HERO.titleLead}
            <span className="textAccent">{TT_HERO.titleAccent}</span>
          </>
        }
        description={TT_HERO.description}
      >
        <div style={{ position: 'relative', width: 560, maxWidth: '100%', aspectRatio: `${TT_HERO.image.width} / ${TT_HERO.image.height}` }}>
          <Image src={TT_HERO.image.src} alt={TT_HERO.image.alt} fill sizes="(max-width: 1120px) 100vw, 560px" style={{ objectFit: 'contain' }} priority />
        </div>
      </ProductHero>

      <IndustryProblem eyebrow={TT_PROBLEM.eyebrow} heading={TT_PROBLEM.heading} problems={TT_PROBLEM.problems} mock={TT_PROBLEM.mock} />

      <IndustrySolutions eyebrow={TT_SOLUTIONS.eyebrow} heading={TT_SOLUTIONS.heading} items={TT_SOLUTIONS.items} />

      <IndustryWorkflow eyebrow={TT_WORKFLOW.eyebrow} heading={TT_WORKFLOW.heading} steps={TT_WORKFLOW.steps} />

      <IndustryBenefits heading={TT_BENEFITS.heading} items={TT_BENEFITS.items} />

      <IndustryBusinessTypes heading={TT_BUSINESS_TYPES.heading} items={TT_BUSINESS_TYPES.items} columns={TT_BUSINESS_TYPES.columns} />

      <IndustryResultsCTA
        heading={
          <>
            {TT_RESULTS.headingLead}
            <span className="textAccentDark">{TT_RESULTS.headingAccent}</span>
          </>
        }
        stats={TT_RESULTS.stats}
      />
    </>
  );
}
