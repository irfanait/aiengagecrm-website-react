import Link from 'next/link';
import Container from '../../common/Container/Container';
import styles from './WhatsNewHero.module.css';

/**
 * Centered banner shared by the listing page and every detail page: title, subtitle, contact
 * note, and — via `children` — the type-filter tabs, so they sit inside the same tinted section.
 */
export default function WhatsNewHero({ banner, children }) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>{banner.title}</h1>
        <p className={styles.subtitle}>{banner.subtitle}</p>
        <p className={styles.contactNote}>
          <Link href={banner.contactHref}>{banner.contactLead}</Link>
          {banner.contactTail}
        </p>
        {children}
      </Container>
    </section>
  );
}
