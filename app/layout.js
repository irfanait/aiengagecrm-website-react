import { Lexend_Deca } from 'next/font/google';
import AntdProvider from '../components/common/AntdProvider/AntdProvider';
import JsonLd from '../components/common/JsonLd/JsonLd';
import SiteLayout from '../layouts/SiteLayout';
import { organizationSchema, buildMetadata } from '../utils/seo';
import { seoData } from '../data/seoData';
import { SITE_URL } from '../utils/constants';
import './globals.css';

const lexendDeca = Lexend_Deca({
  variable: '--font-lexend-deca',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  ...buildMetadata(seoData.home),
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={lexendDeca.variable}>
      <head>
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
      </head>
      <body>
        <JsonLd data={organizationSchema()} />
        <AntdProvider>
          <SiteLayout>{children}</SiteLayout>
        </AntdProvider>
      </body>
    </html>
  );
}
