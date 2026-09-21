import ProductHero from '../../components/templates/ProductHero/ProductHero';
import {
  UpcomingMeetingsMock,
  ZoomMeetCreationMock,
  BookingSchedulerMock,
  WebsiteEmbedMock,
  ShareLinkMock,
  AutoLinksMock,
  EmailNotificationMock,
  GroupMeetingsMock,
  AiNotesMock,
  TeamBookingCalendarsMock,
  AvailabilityHoursMock,
  UnifiedCalendarMock,
  KanbanViewMock,
  ImportHistoryMock,
  MeetingFlowMock,
} from '../../components/organisms/MeetingsCalendarsMocks/MeetingsCalendarsMocks';
import FeatureSection from '../../components/organisms/FeatureSection/FeatureSection';
import BenefitBand from '../../components/organisms/BenefitBand/BenefitBand';
import IndustriesGrid from '../../components/organisms/IndustriesGrid/IndustriesGrid';
import CTASection from '../../components/organisms/CTASection/CTASection';
import JsonLd from '../../components/common/JsonLd/JsonLd';
import { buildMetadata, breadcrumbSchema } from '../../utils/seo';
import { seoData } from '../../data/seoData';
import {
  MC_HERO,
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
  WebsiteEmbedMock,
  ShareLinkMock,
  AutoLinksMock,
  EmailNotificationMock,
  GroupMeetingsMock,
  AiNotesMock,
  TeamBookingCalendarsMock,
  AvailabilityHoursMock,
  UnifiedCalendarMock,
  KanbanViewMock,
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
        title={
          <>
            {MC_HERO.titleLead}
            <span className="textAccent">{MC_HERO.titleAccent}</span>
          </>
        }
        description={MC_HERO.description}
        primaryCtaFirst
        mockAlign="start"
        mockWidth="560px"
      >
        <UpcomingMeetingsMock />
      </ProductHero>

      {MC_SECTIONS.map((section) => {
        const Mock = MOCKS[section.mockKey];
        return (
          <FeatureSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            titleLead={section.titleLead}
            titleAccent={section.titleAccent}
            titleTrail={section.titleTrail}
            leadParagraph={section.leadParagraph}
            paragraphs={section.paragraphs}
            lists={section.lists}
            reverse={section.reverse}
            dark={section.dark}
            centered={section.centered}
            trailingParagraph={section.trailingParagraph}
            mock={<Mock />}
          />
        );
      })}

      <BenefitBand heading={MC_BENEFITS_HEADING} items={MC_BENEFITS} columns={4} />

      <IndustriesGrid eyebrow="WHO USES IT" heading="Built For" items={MC_INDUSTRIES} columns={3} showMoreCard={false} />

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
