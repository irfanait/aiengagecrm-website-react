import { Lexend_Deca } from 'next/font/google';
import Script from 'next/script';
import AntdProvider from '../components/common/AntdProvider/AntdProvider';
import JsonLd from '../components/common/JsonLd/JsonLd';
import SiteLayout from '../layouts/SiteLayout';
import { organizationSchema, localBusinessSchema, buildMetadata } from '../utils/seo';
import { seoData } from '../data/seoData';
import { SITE_URL } from '../utils/constants';
import './globals.css';

const GTM_ID = 'GTM-NRFJ9H42';

const lexendDeca = Lexend_Deca({
  variable: '--font-lexend-deca',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  ...buildMetadata(seoData.home),
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexendDeca.variable}>
      <head>
        <meta name="facebook-domain-verification" content="1jbkuhbe2nwziec2cgkazpb2pg4vqm" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols isn't in next/font/google's manifest (icon fonts aren't supported there),
            so it's loaded the same way the design source does. Applied once, globally, via the root layout. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,300..600,0..1,0&display=swap"
          rel="stylesheet"
          precedence="default"
        />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SQP4SHJVJM" strategy="afterInteractive" />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-SQP4SHJVJM');`,
          }}
        />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1938993346752336');
fbq('track', 'PageView');`,
          }}
        />

        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />

        {/* AiTrillion CRM chat widget */}
        <Script
          id="crm-widget-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (w, d, s) {
  w.crmwidget = w.crmwidget || function () { (w.crmwidget.q = w.crmwidget.q || []).push(arguments); };
  var js = d.createElement(s); js.async = true;
  js.src = 'https://crm.aitrillion.com/widget/crm-widget-loader.js';
  var f = d.getElementsByTagName(s)[0]; f.parentNode.insertBefore(js, f);
})(window, document, 'script');

crmwidget('init', 'agt_01KWM48SGAQWQRVAMZ3T00WN9Y', { agentName: 'CRM Assistant' });`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="gtm"
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1938993346752336&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <AntdProvider>
          <SiteLayout>{children}</SiteLayout>
        </AntdProvider>
      </body>
    </html>
  );
}
