import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  UpcomingMeetingsMock,
  ZoomMeetCreationMock,
  BookingSchedulerMock,
  AutoLinksMock,
  GroupMeetingsMock,
  AiNotesMock,
  TeamBookingCalendarsMock,
  UnifiedCalendarMock,
  ImportHistoryMock,
  MeetingFlowMock,
} from '../../components/organisms/MeetingsCalendarsMocks/MeetingsCalendarsMocks';
import TrustStrip from '../../components/molecules/TrustStrip/TrustStrip';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  MC_HERO,
  MC_TRUST_ITEMS,
  MC_SECTIONS,
  MC_BENEFITS_HEADING,
  MC_BENEFITS,
  MC_INDUSTRIES,
  MC_FINAL_CTA,
} from '../../data/meetingsCalendars';

export const metadata = buildMetadata(seoData.meetingsCalendars);

const MOCKS = {
  ZoomMeetCreationMock,
  BookingSchedulerMock,
  AutoLinksMock,
  GroupMeetingsMock,
  AiNotesMock,
  TeamBookingCalendarsMock,
  UnifiedCalendarMock,
  ImportHistoryMock,
  MeetingFlowMock,
};

export default function MeetingsCalendarsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Meetings & Calendars', path: '/meetings-calendars' },
        ])}
      />

      <ProductHero
        badge={MC_HERO.badge}
        title={
          <>
            {MC_HERO.titleLead}
            <span className="textAccent">{MC_HERO.titleAccent}</span>
          </>
        }
        description={MC_HERO.description}
      >
        <UpcomingMeetingsMock />
      </ProductHero>

      <TrustStrip items={MC_TRUST_ITEMS} />

      {MC_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            index={section.index}
            eyebrow={section.eyebrow}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            trailingParagraph={section.trailingParagraph}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={MC_BENEFITS_HEADING} items={MC_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Trusted Across Industries" items={MC_INDUSTRIES} columns={4} showMoreCard />

      <CTASection
        title={
          <>
            {MC_FINAL_CTA.titleLead}
            <span className="textAccentDark">{MC_FINAL_CTA.titleAccent}</span>
            {MC_FINAL_CTA.titleTrail}
          </>
        }
        description={MC_FINAL_CTA.description}
        titleSize={42}
      />
    </>
  );
}
