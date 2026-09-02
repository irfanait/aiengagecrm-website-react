import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './ComingSoon.module.css';

/** Placeholder landing spot for mega-menu items whose real feature page isn't built yet
 * (see data/megaMenu.js) — on-brand, but deliberately minimal since it's temporary. */
export default function ComingSoon() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <span className={styles.icon}>
          <Icon name="hourglass_top" size={28} color="var(--color-primary)" />
        </span>
        <h1 className={styles.title}>This feature page is coming soon</h1>
        <p className={styles.subtitle}>
          We&rsquo;re still building this one out. In the meantime, explore the rest of AiEngage CRM or talk to our team
          about what you&rsquo;re looking for.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeLink}>
            Back to Home
          </Link>
          <Button href={CTA_LINKS.bookDemo} variant="dark">
            Book a Demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
