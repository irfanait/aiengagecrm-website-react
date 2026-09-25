// Content for homepage v3's "AI That Works Across Your Entire Customer Journey" section — 5 step
// cards, each with a distinct small mock UI (chat bubble, checklist, slot picker, task list,
// confirmation bubble). Own data file, independent from data/homeV2Discovery.js's AI_JOURNEY_CARDS
// (v2's own AI section, which stays untouched).

export const AI_JOURNEY_STEPS = [
  {
    key: 'engage',
    title: 'Engage',
    iconBg: 'rgb(231, 248, 236)',
    kind: 'chat',
    subtitle: 'WhatsApp AI Agent',
    desc: 'Answer customer questions and respond to new inquiries on WhatsApp.',
    mock: { message: 'Hi! 👋 How can I help you today?', time: '10:24 AM' },
  },
  {
    key: 'qualify',
    title: 'Qualify',
    iconBg: 'rgb(239, 234, 254)',
    iconColor: 'rgb(107, 79, 224)',
    icon: 'group',
    subtitle: 'AI Lead Qualification',
    desc: 'Ask the right questions and identify hot, warm, and cold leads.',
    mock: { kind: 'checklist', items: ['Budget', 'Need', 'Timeline'] },
  },
  {
    key: 'book-meetings',
    title: 'Book Meetings',
    iconBg: 'rgb(230, 240, 254)',
    iconColor: 'rgb(31, 111, 224)',
    icon: 'event',
    subtitle: 'AI Meeting',
    desc: 'Capture meeting transcripts, summaries, decisions, and next steps.',
    mock: { kind: 'slots', label: 'Select your preffered slot', slots: [{ time: '10:00 AM', active: true }, { time: '11:00 AM', active: false }] },
  },
  {
    key: 'close-deals',
    title: 'Close Deals',
    iconBg: 'rgb(255, 237, 230)',
    iconColor: 'rgb(255, 95, 56)',
    icon: 'bar_chart',
    subtitle: 'AI Calling',
    desc: 'Handle lead conversations and follow-ups to keep deals moving.',
    mock: { kind: 'tasks', items: [{ label: 'Follow up', done: true }, { label: 'Send proposal', done: false }, { label: 'Move to close', done: false }] },
  },
  {
    key: 'support-retain',
    title: 'Support & Retain',
    iconBg: 'rgb(253, 232, 242)',
    iconColor: 'rgb(230, 51, 122)',
    icon: 'headset_mic',
    subtitle: 'AI Support Agent',
    desc: 'Answer common questions and hand conversations to your team when needed.',
    mock: { kind: 'bubble', message: 'Your order is confirmed! Let us know if you need anything else. 😊' },
  },
];
