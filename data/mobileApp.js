// Content for the Mobile App page — a single scrolling page with anchor-linked sections,
// mirroring the Automation page's structure (see data/automation.js).

export const MA_HERO = {
  badge: { icon: 'smartphone', label: 'MOBILE APP', bg: '#fff3ea', iconColor: 'var(--color-primary)', textColor: 'var(--color-primary-hover)' },
  titleLead: 'The Mobile CRM That Keeps Your Business ',
  titleAccent: 'Connected.',
  description:
    'AiEngage mobile app gives your team access to leads, customers, tasks, follow-ups, chats, and sales activity while they are away from their desk.',
};

export const MA_TRUST_ITEMS = [
  { icon: 'android', label: 'Android app', color: 'var(--color-whatsapp)' },
  { icon: 'phone_iphone', label: 'iOS app', color: 'var(--color-dark-bg)' },
  { icon: 'notifications_active', label: 'Instant push alerts', color: 'var(--color-primary)' },
  { icon: 'sync', label: 'Synced with your CRM', color: 'var(--color-dark-bg)' },
];

export const MA_SECTIONS = [
  {
    id: 'android-app',
    index: '01',
    eyebrow: 'ANDROID',
    titleLead: '',
    titleAccent: 'Android',
    titleTrail: ' App',
    mockKey: 'AndroidAppMock',
    reverse: false,
    leadParagraph: 'Manage Leads And Customers From Your Android Device.',
    paragraphs: ['View customer details, respond to leads, update deal stages, add notes, complete tasks, and track follow-ups.'],
    lists: [
      {
        heading: 'Your Team Can Do',
        items: [
          'View assigned leads and customers',
          'Access customer contact details',
          'Call or message customers instantly',
          'Update lead stages',
          'Add notes after meetings or calls',
          'Create and complete tasks',
          'Schedule follow-ups',
          'View deal and pipeline details',
          'Check customer activity history',
          'Receive important alerts',
        ],
      },
    ],
  },
  {
    id: 'ios-app',
    index: '02',
    eyebrow: 'IOS',
    titleLead: '',
    titleAccent: 'iOS',
    titleTrail: ' App',
    mockKey: 'IOSAppMock',
    reverse: true,
    leadParagraph: 'Stay Connected To Every Customer On iPhone.',
    paragraphs: [
      'Your team can instantly check customer information before a call, update important details after a meeting, and stay on top of daily priorities from anywhere.',
    ],
    lists: [
      {
        heading: 'Your Team Can Do',
        items: [
          'View leads, contacts, and companies',
          'Access complete customer profiles',
          'Make calls from customer records',
          'Send messages and follow up quickly',
          'Update deal stages',
          'Add notes and meeting updates',
          'Create follow-up reminders',
          'Manage daily tasks',
          'View sales pipeline activity',
          'Track pending actions',
        ],
      },
    ],
  },
  {
    id: 'push-notifications',
    index: '03',
    eyebrow: 'PUSH NOTIFICATIONS',
    titleLead: 'Push ',
    titleAccent: 'Notifications',
    mockKey: 'PushNotificationsAppMock',
    reverse: false,
    leadParagraph: 'Get Instant Alerts For Leads, Follow-Ups, And Customer Activity.',
    paragraphs: [
      'It enables your team to respond quickly to new leads, incoming messages, assigned tasks, missed calls, follow-up reminders, and important deal updates.',
    ],
    lists: [
      {
        heading: 'Get Alerts For',
        items: [
          'New lead assignments',
          'New WhatsApp messages',
          'Incoming customer enquiries',
          'Missed calls',
          'Task assignments',
          'Follow-up reminders',
          'Overdue follow-ups',
          'Deal stage updates',
          'New notes or internal mentions',
          'Appointment reminders',
          'Booking confirmations',
          'Payment follow-ups',
        ],
      },
    ],
  },
];

export const MA_BENEFITS_HEADING = 'Work From Anywhere Without Losing Momentum';

export const MA_BENEFITS = [
  'Respond to new enquiries faster',
  'Reduce missed follow-ups',
  'Keep urgent customer activity visible',
  'Help teams stay accountable',
  'Improve lead response time',
  'Keep sales activity moving throughout the day',
];

export const MA_INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'memory', label: 'IT', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { icon: 'medical_services', label: 'Healthcare', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'school', label: 'Education', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  { icon: 'flight_takeoff', label: 'Tours & Travels', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'account_balance', label: 'Finance', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', dark: true },
];

export const MA_FINAL_CTA = {
  titleLead: 'One Mobile CRM For Every ',
  titleAccent: 'Customer Interaction.',
  titleTrail: '',
  description: '',
};
