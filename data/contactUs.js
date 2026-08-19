// Contact Us page content.

import { CONTACT, CTA_LINKS, SOCIAL_LINKS } from '../utils/constants';

export const CONTACT_HERO = {
  titleLead: "Let's Talk — We'd Love to ",
  titleAccent: 'Hear From You',
  description: 'Whether you have a question about features, pricing, a demo, or anything else, our team is ready to help.',
};

export const CONTACT_WAYS = [
  { icon: 'mail', label: 'Email us', value: CONTACT.emailUpdate, href: `mailto:${CONTACT.emailUpdate}` },
  { icon: 'whatsapp', label: 'WhatsApp', value: CONTACT.phone, href: `https://wa.me/${CONTACT.phone.replace(/[^\d]/g, '')}` },
  { icon: 'event', label: 'Book a demo', linkLabel: 'See AiEngage in action', href: CTA_LINKS.bookDemo },
];

export const CONTACT_OFFICES = [
  { name: 'AiTrillion HQ', address: '2093 Philadelphia Pike #9505, Claymont, DE 19703' },
  { name: 'India Office', address: '607 Apollo Premiere, Vijay Nagar Square, Indore, Madhya Pradesh, India 452001' },
];

export const CONTACT_CONNECT = [
  {
    icon: 'smart_display',
    title: 'Demo',
    description: 'See AiEngage in action with a guided demo.',
    ctaLabel: 'Watch a Demo',
    href: SOCIAL_LINKS.youtube,
    external: true,
  },
  {
    icon: 'menu_book',
    title: 'Knowledge Base',
    description: 'Guides, docs, and answers to common questions.',
    ctaLabel: 'Documentation',
    href: 'https://help.aiengagecrm.com/',
    external: true,
  },
  {
    icon: 'handshake',
    title: 'Become a Partner',
    description: 'Grow with us through our partner program.',
    ctaLabel: 'Join Us',
    href: '/partners',
  },
];
