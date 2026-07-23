import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import WhatsAppFloat from '../components/common/WhatsAppFloat/WhatsAppFloat';

/** Shared shell (Header + Footer) applied to every page via the root layout. */
export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
