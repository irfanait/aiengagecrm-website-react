// Content for the Meetings & Calendars page — Zoom/Google Meet meeting creation, shareable
// booking calendars, automatic meeting links + customer notifications, meeting transcripts and
// AI summaries, team-specific availability, a unified meeting calendar/kanban view, and meeting
// history import. Sourced from the "AiEngage Meetings Calendars" design mockup; three sections
// carry fixed ids because mega-menu items link to them directly (data/megaMenu.js):
//   - 'meeting-scheduler' -> Sales Suite "Meeting Scheduler"
//   - 'ai-notes'          -> Sales Suite "AI Notes"
//   - 'calendar'          -> Service & Support Suite "Calendar, Meetings & AI Notetaker"

export const MC_HERO = {
  badge: { icon: 'event', label: 'MEETINGS & CALENDARS', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'Stop Switching Between Your CRM, Zoom, Google Meet & ',
  titleAccent: 'Calendar.',
  description:
    'Create meetings, share booking links, connect Zoom or Google Meet, notify customers, capture transcripts, generate AI summaries, and keep every meeting connected to the customer record.',
};

export const MC_TRUST_ITEMS = [
  { icon: 'videocam', label: 'Zoom & Google Meet built-in', color: 'var(--color-primary)' },
  { icon: 'link', label: 'Shareable booking links', color: 'var(--color-blue)' },
  { icon: 'summarize', label: 'AI meeting summaries', color: 'var(--color-purple)' },
  { icon: 'calendar_month', label: 'Unified team calendar', color: 'var(--color-whatsapp)' },
];

export const MC_SECTIONS = [
  {
    id: 'zoom-meet-creation',
    index: '01',
    eyebrow: 'MEETING CREATION',
    titleLead: 'Create Zoom & Google Meet Meetings ',
    titleAccent: 'From Your CRM',
    mockKey: 'ZoomMeetCreationMock',
    reverse: false,
    paragraphs: [
      'Stop creating meetings in one tool and managing customers in another. Schedule an online meeting from AiEngage, pick Zoom or Google Meet, and AiEngage creates the meeting, generates the joining link, and saves it with the customer record.',
    ],
    lists: [
      {
        heading: "What's Included",
        items: [
          'Connect Zoom',
          'Connect Google Meet',
          'Create meetings from AiEngage CRM',
          'Automatically generate meeting links',
          'Save joining links inside the CRM',
          'Connect meetings with customers and deals',
          'Add internal participants',
          'Assign meeting owners',
        ],
      },
    ],
  },
  {
    id: 'meeting-scheduler',
    index: '02',
    eyebrow: 'BOOKING LINKS',
    titleLead: 'Let Customers Book Meetings ',
    titleAccent: 'Without the Back-and-Forth',
    mockKey: 'BookingSchedulerMock',
    reverse: true,
    paragraphs: [
      "Scheduling shouldn't take five messages. Create availability, share your booking link, and let customers pick a time — once booked, it's automatically added to your AiEngage calendar.",
      "Embed the booking calendar directly on your website, or share the same link over WhatsApp, email, and sales follow-ups — so you never have to ask a customer when they're free.",
    ],
    lists: [
      {
        heading: 'Add Your Booking Link To',
        items: ['Book a Demo pages', 'Contact Us pages', 'Landing pages', 'WhatsApp conversations', 'Email signatures', 'Sales follow-ups', 'Website CTAs', 'Marketing campaigns'],
      },
    ],
  },
  {
    id: 'auto-links-notifications',
    index: '03',
    eyebrow: 'AUTOMATIC NOTIFICATIONS',
    titleLead: 'Automatically Generate Links & ',
    titleAccent: 'Notify Customers',
    mockKey: 'AutoLinksMock',
    reverse: false,
    paragraphs: [
      'No copy-pasting links. When a Zoom or Google Meet meeting is created, AiEngage generates the join link and keeps it attached to the CRM meeting record.',
      'Once the meeting is created, AiEngage can automatically email the customer everything they need to join — no manual follow-up required.',
    ],
    lists: [
      {
        heading: 'Automatically Handle',
        items: ['Meeting creation', 'Meeting platform', 'Joining link', 'Meeting date and time', 'Meeting owner and customer', 'Participants', 'Related CRM record', 'Customer email notification'],
      },
    ],
  },
  {
    id: 'group-meetings',
    index: '04',
    eyebrow: 'ONE-TO-ONE & GROUP',
    titleLead: 'Host One-to-One & ',
    titleAccent: 'Group Meetings',
    mockKey: 'GroupMeetingsMock',
    reverse: true,
    paragraphs: [
      'Create meetings for one customer, multiple customers, internal team members, or a mix — sales demos, discovery calls, onboarding sessions, and training, all from the same place.',
    ],
    lists: [
      {
        heading: 'Create',
        items: ['One-to-one meetings', 'Group meetings', 'Sales demos', 'Discovery meetings', 'Customer onboarding calls', 'Training sessions', 'Internal + customer meetings', 'Follow-up meetings'],
      },
    ],
  },
  {
    id: 'ai-notes',
    index: '05',
    eyebrow: 'AI NOTES',
    titleLead: 'Get Meeting Transcripts & ',
    titleAccent: 'AI Summaries Instantly',
    mockKey: 'AiNotesMock',
    reverse: false,
    paragraphs: [
      'The meeting ends, and someone forgets the next step. AiEngage keeps meeting context in the CRM with full transcripts and AI-generated summaries.',
    ],
    lists: [
      {
        heading: 'Meeting Intelligence',
        items: ['Meeting transcripts', 'AI meeting summaries', 'Customer requirements', 'Key discussion points', 'Decisions', 'Follow-up items', 'Next steps'],
      },
    ],
  },
  {
    id: 'team-booking-calendars',
    index: '06',
    eyebrow: 'AVAILABILITY',
    titleLead: 'Different Booking Calendars ',
    titleAccent: 'for Different Teams',
    mockKey: 'TeamBookingCalendarsMock',
    reverse: true,
    paragraphs: [
      "Sales, onboarding, and support shouldn't share the same availability. Create separate booking calendars per team and meeting type, and only show slots inside working hours.",
    ],
    lists: [
      {
        heading: 'For Example',
        items: ['Book a Demo — Sales Team', 'Customer Onboarding — Customer Success', 'Support Call — Support Team', 'Talk to an Expert — Consulting Team', 'Product Training — Training Team'],
        columns: 1,
      },
    ],
    trailingParagraph: "Stop getting requests outside working hours — set availability and only show the slots you want bookable.",
  },
  {
    id: 'calendar',
    index: '07',
    eyebrow: 'UNIFIED CALENDAR',
    titleLead: 'Manage Every Meeting ',
    titleAccent: 'From One Calendar',
    mockKey: 'UnifiedCalendarMock',
    reverse: false,
    paragraphs: [
      "Stop checking separate calendars. See today's meetings, upcoming bookings, owners, and status inside AiEngage CRM — then build custom Kanban views around how your team actually works.",
    ],
    lists: [
      {
        heading: 'See & Customize',
        items: ["Today's and upcoming meetings", 'Weekly and monthly schedule', 'Meeting owners and customer details', 'Meeting status', 'Kanban views by meeting stage', 'Private or shared views'],
      },
    ],
  },
  {
    id: 'import-meeting-history',
    index: '08',
    eyebrow: 'MIGRATION',
    titleLead: 'Bring Your Existing Meeting ',
    titleAccent: 'History With You',
    mockKey: 'ImportHistoryMock',
    reverse: true,
    paragraphs: [
      "Moving CRMs shouldn't mean losing customer context. Import previous meetings and notes and keep the full history connected to each customer record.",
    ],
    lists: [
      {
        heading: 'Import & Track',
        items: ['Past meetings', 'Historical meeting notes', 'Customer meeting history', 'Import status and progress'],
        columns: 1,
      },
    ],
  },
  {
    id: 'unified-flow',
    index: '09',
    eyebrow: 'ONE MEETING, NO TOOL SWITCHING',
    titleLead: 'From Booking To Follow-Up, ',
    titleAccent: 'In One CRM',
    mockKey: 'MeetingFlowMock',
    reverse: false,
    paragraphs: [
      'A customer books, AiEngage creates the meeting, Zoom or Meet generates the link, the customer is notified, your team runs it, the transcript and summary stay connected, and follow-up becomes clear.',
    ],
    lists: [],
  },
];

export const MC_BENEFITS_HEADING = 'Book, Meet, Summarize and Follow Up in One CRM';

export const MC_BENEFITS = [
  'Booking Calendars',
  'Shareable Booking Links',
  'Website Calendar Embed',
  'Zoom Integration',
  'Google Meet Integration',
  'Automatic Meeting Links',
  'Automatic Customer Notifications',
  'One-to-One Meetings',
  'Group Meetings',
  'Meeting Transcripts',
  'AI Summaries',
  'Follow-Up Context',
];

export const MC_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', href: '/industries/real-estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', href: '/industries/it', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'medical_services', label: 'Healthcare', href: '/industries/healthcare', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { icon: 'school', label: 'Education', href: '/industries/education', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', href: '/industries/tours-travels', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'account_balance', label: 'Finance', href: '/industries/finance', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
];

export const MC_FINAL_CTA = {
  titleLead: 'Everything You Need to Run ',
  titleAccent: 'Meetings From Your CRM.',
  titleTrail: '',
  description: '',
};
