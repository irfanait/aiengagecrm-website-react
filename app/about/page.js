import AboutHero from '../../components/templates/AboutHero/AboutHero';
import AboutMission from '../../components/organisms/AboutMission/AboutMission';
import AboutWhyItWorks from '../../components/organisms/AboutWhyItWorks/AboutWhyItWorks';
import AboutFeaturesGrid from '../../components/organisms/AboutFeaturesGrid/AboutFeaturesGrid';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  AB_HERO,
  AB_MISSION,
  AB_WHY_HEADING,
  AB_WHY_CARDS,
  AB_RESULT_LABEL,
  AB_RESULT_STATS,
  AB_FEATURES_HEADING,
  AB_FEATURES,
  AB_INDUSTRIES_HEADING,
  AB_INDUSTRIES,
  AB_FINAL_CTA,
} from '../../data/about';

export const metadata = buildMetadata(seoData.about);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ])}
      />

      <AboutHero
        badge={AB_HERO.badge}
        title={
          <>
            {AB_HERO.titleLead}
            <span className="textAccent">{AB_HERO.titleAccent}</span>
          </>
        }
        description={AB_HERO.description}
      />

      <AboutMission heading={AB_MISSION.heading} tagline={AB_MISSION.tagline} paragraphs={AB_MISSION.paragraphs} />

      <AboutWhyItWorks heading={AB_WHY_HEADING} cards={AB_WHY_CARDS} resultLabel={AB_RESULT_LABEL} stats={AB_RESULT_STATS} />

      <AboutFeaturesGrid heading={AB_FEATURES_HEADING} items={AB_FEATURES} />

      <IndustriesGrid heading={AB_INDUSTRIES_HEADING} items={AB_INDUSTRIES} columns={3} showMoreCard={false} moreNote="And Many More" />

      <CTASection
        title={
          <>
            {AB_FINAL_CTA.titleLead}
            <span className="textAccentDark">{AB_FINAL_CTA.titleAccent}</span>
          </>
        }
        description={AB_FINAL_CTA.description}
        titleSize={40}
      />
    </>
  );
}
