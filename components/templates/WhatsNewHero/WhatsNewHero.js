import Link from 'next/link';
import Container from '../../common/Container/Container';
import styles from './WhatsNewHero.module.css';

/**
 * Centered banner shared by the listing page and every detail page: title, subtitle, contact
 * note, and — via `children` — the type-filter tabs, so they sit inside the same tinted section.
 * Detail pages pass titleAs="h2" since the post's own title (rendered elsewhere on that page) is
 * the page's real H1 — a page should have exactly one.
 */
export default function WhatsNewHero({ banner, children, titleAs: TitleTag = 'h1' }) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <TitleTag className={styles.title}>{banner.title}</TitleTag>
        <p className={styles.subtitle}>
          {banner.subtitle}
          <br />
          <Link href={banner.contactHref} className={styles.contactLink}>
            {banner.contactLead}
          </Link>
          {banner.contactTail}
        </p>
        {children}
      </Container>
    </section>
  );
}
