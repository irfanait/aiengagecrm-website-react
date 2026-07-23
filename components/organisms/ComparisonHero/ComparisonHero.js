import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './ComparisonHero.module.css';

/** Centered hero used by every "AiEngage vs X" page: pill badge, H1 (accent word inline via
 * ReactNode), and the Book a Demo / Try for Free CTA row. No visual — these pages open straight
 * into the problem section's mock. */
export default function ComparisonHero({ badge, title }) {
  return (
    <section className={styles.hero}>
      <Container className={styles.inner}>
        <span className={styles.badge}>{badge}</span>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.ctaRow}>
          <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
            Book a Demo
          </Button>
          <Button href={CTA_LINKS.tryFree} variant="outline" size="lg">
            Try for Free
          </Button>
        </div>
      </Container>
    </section>
  );
}
