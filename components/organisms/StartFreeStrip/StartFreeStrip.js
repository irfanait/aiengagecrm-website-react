import Link from 'next/link';
import Container from '../../common/Container/Container';
import styles from './StartFreeStrip.module.css';

/** Slim callout strip below the pricing cards, promoting the always-free contact tier. */
export default function StartFreeStrip({ title, descriptionLead, descriptionBold, descriptionTail, ctaLabel, ctaHref }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.strip}>
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <p className={styles.desc}>
              {descriptionLead}
              <strong className={styles.bold}>{descriptionBold}</strong>
              {descriptionTail}
            </p>
          </div>
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
