# AiEngage CRM — Marketing Website

Next.js (App Router, JavaScript) marketing site. Homepage (Home v2) plus the 7
WhatsApp feature pages, built from the design source with a shared Header,
Mega Menu and Footer.

## Stack

- Next.js (App Router) + React — JavaScript only, no TypeScript
- Ant Design v6 (`Drawer`, `Collapse`, `Button`, `ConfigProvider`) for interactive chrome
- CSS Modules for everything else (no Tailwind/Bootstrap)
- `next/font/google` for Lexend Deca; Material Symbols Rounded loaded globally for icons
- Brand primary color: `#FF5F38` (see `styles/variables.css`)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
app/                        Routes (App Router)
  layout.js                 Fonts, Ant Design provider, Header/Footer shell, SEO base
  page.js                   Homepage (Home v2)
  whatsapp/
    page.js                 WhatsApp Business hub
    shared-inbox/page.js    /whatsapp/shared-inbox
    numbers/page.js         /whatsapp/numbers
    broadcast/page.js       /whatsapp/broadcast
    automation/page.js      /whatsapp/automation
    analytics/page.js       /whatsapp/analytics
    ai-agent/page.js        /whatsapp/ai-agent

components/                 Atomic-design component library
  atoms/                    Icon, Button, Badge, IconBubble — smallest reusable pieces
  molecules/                SectionHeading, Breadcrumb, FeatureCard, BenefitsGrid, ...
  organisms/                Header, MegaMenu, Footer, Hero, ProductMock, CTASection, ...
  templates/                WhatsAppHero — full-width page section templates
  common/                   Container, JsonLd, AntdProvider — cross-cutting helpers

layouts/                    SiteLayout.js wraps every route with Header + Footer

data/                       Content, kept out of components so copy edits don't touch JSX
  megaMenu.js                Mega menu categories/features + routes
  navLinks.js                 Top-level header nav
  footerLinks.js              Footer columns + socials
  homeContent.js               Homepage section content
  whatsappPages.js            Hub + 6 sub-page content
  seoData.js                  Per-route SEO metadata (source of truth for utils/seo.js)

utils/
  seo.js                     buildMetadata() + JSON-LD schema builders
  constants.js                Site name/URL, CTA links, socials

styles/
  variables.css                Design tokens (color, radius, shadow, spacing) as CSS custom properties
  typography.css               Shared type utility classes (.eyebrow, .h2, .highlight, ...)
  antTheme.js                  Ant Design ConfigProvider theme tokens, kept in sync with variables.css
```

## Adding a new page

1. Add its content to a `data/*.js` file (or a new one).
2. Add its SEO entry to `data/seoData.js`.
3. Create `app/<route>/page.js`, compose it from existing `organisms`/`molecules`
   (`WhatsAppHero`, `BenefitsGrid`, `CTASection`, `FeatureCard`, ...) and call
   `buildMetadata(seoData.<key>)` for `export const metadata`.
4. Header/Footer are automatic — every route renders inside `layouts/SiteLayout.js`
   via the root layout.
5. It'll be picked up by `app/sitemap.js` automatically (it iterates `seoData`).

## Notes

- The Hero and CTA sections reserve a mascot illustration slot in the design source,
  but no artwork was included in the design ZIP — those spots are currently omitted
  from the layout. Drop in real art later via the `ProductMock`/`CTASection` components.
- The design source's accent orange (`#F4500A`) was intentionally replaced with the
  brand color `#FF5F38` per the brief; all other design colors (neutrals, greens,
  blues, WhatsApp green) are unchanged from the source.
