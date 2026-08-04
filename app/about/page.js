import AboutHero from '../../components/templates/AboutHero/AboutHero';
import AboutMission from '../../components/organisms/AboutMission/AboutMission';
import AboutChallenges from '../../components/organisms/AboutChallenges/AboutChallenges';
import AboutIndustriesShowcase from '../../components/organisms/AboutIndustriesShowcase/AboutIndustriesShowcase';
import AboutWhyItWorks from '../../components/organisms/AboutWhyItWorks/AboutWhyItWorks';
import AboutMissionBanner from '../../components/organisms/AboutMissionBanner/AboutMissionBanner';
import AboutTrust from '../../components/organisms/AboutTrust/AboutTrust';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  AB_HERO,
  AB_STORY_HEADING,
  AB_STORY_PARAGRAPHS,
  AB_STORY_STATS,
  AB_CHALLENGES_HEADING,
  AB_CHALLENGES_SUBTITLE,
  AB_CHALLENGES,
  AB_CHALLENGES_NOTE,
  AB_INDUSTRIES_HEADING,
  AB_INDUSTRIES_INTRO,
  AB_INDUSTRIES,
  AB_APPROACH_HEADING,
  AB_APPROACH_SUBTITLE,
  AB_APPROACH_CARDS,
  AB_APPROACH_NOTE,
  AB_MISSION_BANNER,
  AB_TRUST_HEADING,
  AB_TRUST_ITEMS,
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
            <br />
            <span className="textAccent">{AB_HERO.titleAccent}</span>
          </>
        }
        description={AB_HERO.description}
      />

      <AboutMission heading={AB_STORY_HEADING} paragraphs={AB_STORY_PARAGRAPHS} stats={AB_STORY_STATS} />

      <AboutChallenges heading={AB_CHALLENGES_HEADING} subtitle={AB_CHALLENGES_SUBTITLE} items={AB_CHALLENGES} note={AB_CHALLENGES_NOTE} />

      <AboutIndustriesShowcase heading={AB_INDUSTRIES_HEADING} intro={AB_INDUSTRIES_INTRO} items={AB_INDUSTRIES} />

      <AboutWhyItWorks heading={AB_APPROACH_HEADING} subtitle={AB_APPROACH_SUBTITLE} cards={AB_APPROACH_CARDS} note={AB_APPROACH_NOTE} />

      <AboutMissionBanner eyebrow={AB_MISSION_BANNER.eyebrow} heading={AB_MISSION_BANNER.heading} description={AB_MISSION_BANNER.description} />

      <AboutTrust heading={AB_TRUST_HEADING} items={AB_TRUST_ITEMS} />

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
