// Content for the Meetings & Calendars page — Zoom/Google Meet meeting creation, shareable
// booking calendars, website embed, automatic meeting links + customer notifications, one-to-one
// & group meetings, meeting transcripts and AI summaries, team-specific availability, a unified
// meeting calendar/kanban view, and meeting history import. Sourced from the "AiEngage Meetings
// Calendars" design mockup. One section id is fixed because a mega-menu item links to it directly
// (data/megaMenu.js): 'ai-notes' -> Sales Suite "AI Notes".

export const MC_HERO = {
  titleLead: 'Stop Switching Between Your CRM, Zoom, Google Meet & ',
  titleAccent: 'Calendar.',
  description:
    'Create meetings, share booking links, connect Zoom or Google Meet, notify customers, capture transcripts, generate AI summaries, and keep every meeting connected to the customer record.',
};

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
    ],
    lists: [
      {
        heading: "What's Included",
        items: [
          'Create booking calendars',
          'Set available days',
          'Set working hours',
          'Control bookable time slots',
          'Share booking links',
          'Automatically create appointments',
          'Manage bookings inside the CRM',
          'Create different calendars for different teams',
        ],
      },
    ],
  },
  {
    id: 'website-embed',
    index: '03',
    eyebrow: 'WEBSITE EMBED',
    titleLead: 'Put Your Booking Calendar Directly ',
    titleAccent: 'on Your Website',
    mockKey: 'WebsiteEmbedMock',
    reverse: false,
    paragraphs: [
      "Don't make a ready-to-buy visitor fill a form and wait for a callback. Embed the AiEngage booking calendar on your site so visitors can book without leaving the page.",
    ],
    lists: [
      {
        heading: 'Add It To',
        items: ['Book a Demo pages', 'Contact Us pages', 'Landing pages', 'Consultation pages', 'Product pages', 'Onboarding pages', 'Support pages'],
      },
    ],
  },
  {
    id: 'share-booking-link',
    index: '04',
    eyebrow: 'SHARE ANYWHERE',
    titleLead: 'Share One Booking Link ',
    titleAccent: 'Anywhere',
    mockKey: 'ShareLinkMock',
    reverse: true,
    paragraphs: ["Stop asking customers when they're available — send them your booking link instead."],
    lists: [
      {
        heading: 'Share Your Booking Link Through',
        items: ['WhatsApp', 'Email', 'Sales follow-ups', 'Website CTAs', 'Email signatures', 'Marketing campaigns', 'Customer conversations'],
      },
    ],
  },
  {
    id: 'auto-links',
    index: '05',
    eyebrow: 'AUTOMATIC LINKS',
    titleLead: 'Automatically Generate & ',
    titleAccent: 'Save Meeting Links',
    mockKey: 'AutoLinksMock',
    reverse: false,
    paragraphs: [
      'No copy-pasting links. When a Zoom or Google Meet meeting is created, AiEngage generates the join link and keeps it attached to the CRM meeting.',
    ],
    lists: [
      {
        heading: 'Automatically Handle',
        items: ['Meeting creation', 'Meeting platform', 'Joining link', 'Meeting date', 'Meeting time', 'Meeting owner', 'Customer', 'Participants', 'Related CRM record'],
      },
    ],
  },
  {
    id: 'email-notifications',
    index: '06',
    eyebrow: 'CUSTOMER NOTIFICATIONS',
    titleLead: 'Send Meeting Details Without ',
    titleAccent: 'the Extra Follow-Up',
    mockKey: 'EmailNotificationMock',
    reverse: true,
    paragraphs: ['Once the meeting is created, AiEngage can automatically email the customer everything they need to join.'],
    lists: [
      {
        heading: 'Customer Can Receive',
        items: ['Meeting title', 'Date', 'Time', 'Meeting details', 'Zoom or Google Meet platform', 'Joining link'],
      },
    ],
  },
  {
    id: 'group-meetings',
    index: '07',
    eyebrow: 'ONE-TO-ONE & GROUP',
    titleLead: 'Host One-to-One & ',
    titleAccent: 'Group Meetings',
    mockKey: 'GroupMeetingsMock',
    reverse: false,
    paragraphs: ['Create meetings for one customer, multiple customers, internal team members, or a mix.'],
    lists: [
      {
        heading: 'Create',
        items: ['One-to-one meetings', 'Group meetings', 'Sales demos', 'Discovery meetings', 'Customer onboarding calls', 'Training sessions', 'Internal + customer meetings', 'Follow-up meetings'],
      },
      {
        heading: 'Add',
        items: ['CRM contacts', 'Internal participants', 'Meeting owner', 'Zoom or Google Meet', 'Meeting details'],
      },
    ],
  },
  {
    id: 'ai-notes',
    index: '08',
    eyebrow: 'AI NOTES',
    titleLead: 'Get Meeting Transcripts & ',
    titleAccent: 'AI Summaries Instantly',
    mockKey: 'AiNotesMock',
    reverse: true,
    dark: true,
    paragraphs: [
      "The meeting ends, and someone forgets the next step. AiEngage keeps meeting context in the CRM with transcripts and AI summaries.",
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
    index: '09',
    eyebrow: 'TEAM AVAILABILITY',
    titleLead: 'Create Different Booking Calendars ',
    titleAccent: 'for Different Teams',
    mockKey: 'TeamBookingCalendarsMock',
    reverse: false,
    paragraphs: [
      "Sales, onboarding, and support shouldn't share the same availability. Create separate booking calendars per team and meeting type.",
    ],
    lists: [
      {
        heading: 'For Example',
        items: ['Book a Demo — Sales Team', 'Talk to an Expert — Consulting Team', 'Customer Onboarding — Customer Success', 'Support Call — Support Team', 'Product Training — Training Team'],
        columns: 1,
      },
    ],
  },
  {
    id: 'availability-hours',
    index: '10',
    eyebrow: 'WORKING HOURS',
    titleLead: "Let Customers Book Only When ",
    titleAccent: "You're Available",
    mockKey: 'AvailabilityHoursMock',
    reverse: true,
    paragraphs: ['Stop getting requests outside working hours. Set availability and only show the slots you want bookable.'],
    lists: [
      {
        heading: 'Set',
        items: ['Available days', 'Working hours', 'Bookable slots', 'Calendar availability', 'Different schedules', 'Team-specific availability', 'Meeting types'],
      },
    ],
  },
  {
    id: 'calendar',
    index: '11',
    eyebrow: 'UNIFIED CALENDAR',
    titleLead: 'Manage Every Upcoming Meeting ',
    titleAccent: 'From One Calendar',
    mockKey: 'UnifiedCalendarMock',
    reverse: false,
    paragraphs: ['Stop checking separate calendars. Manage upcoming bookings inside AiEngage CRM.'],
    lists: [
      {
        heading: 'See',
        items: ["Today's meetings", 'Upcoming meetings', 'Weekly schedule', 'Monthly schedule', 'Meeting owners', 'Customer details', 'Meeting status', 'Busy days', 'Available slots'],
      },
    ],
  },
  {
    id: 'kanban-views',
    index: '12',
    eyebrow: 'KANBAN VIEWS',
    titleLead: 'Track Meetings the Way ',
    titleAccent: 'Your Team Actually Works',
    mockKey: 'KanbanViewMock',
    reverse: true,
    paragraphs: [
      'Sales cares about meeting status, CS about onboarding stage, management about owner. Create custom Kanban views around your process.',
    ],
    lists: [
      {
        heading: 'Customize',
        items: ['Kanban view name', 'Meeting category', 'Meeting stage', 'Card title', 'Visible fields', 'Field order', 'Aggregation', 'Private or shared views'],
      },
    ],
  },
  {
    id: 'import-meeting-history',
    index: '13',
    eyebrow: 'MIGRATION',
    titleLead: 'Bring Your Existing Meeting ',
    titleAccent: 'History With You',
    mockKey: 'ImportHistoryMock',
    reverse: false,
    paragraphs: ["Moving CRMs shouldn't mean losing customer context. Import previous meetings and notes."],
    lists: [
      {
        heading: 'Import',
        items: ['Past meetings', 'Historical meeting notes', 'Customer meeting history', 'Existing records'],
        columns: 1,
      },
      {
        heading: 'Track',
        items: ['Import status', 'Import progress', 'Previous imports', 'Historical context'],
        columns: 1,
      },
    ],
  },
  {
    id: 'unified-flow',
    titleLead: 'One Meeting. ',
    titleAccent: 'No Tool Switching.',
    mockKey: 'MeetingFlowMock',
    reverse: true,
    centered: true,
    paragraphs: [
      'A customer books, AiEngage creates the meeting, Zoom or Meet generates the link, the customer is notified, your team runs it, transcript and summary stay connected, and follow-up becomes clear.',
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
