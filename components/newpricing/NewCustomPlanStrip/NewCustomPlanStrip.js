import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './NewCustomPlanStrip.module.css';

/** Single full-width strip promoting the Custom plan — same treatment as NewStartFreeStrip,
 * rather than a 4th card next to Solo / Business / Business Pro. */
export default function NewCustomPlanStrip({ title, description, features, ctaLabel, ctaHref }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.strip}>
          <div className={styles.text}>
            <div className={styles.title}>{title}</div>
            <p className={styles.desc}>{description}</p>
            <div className={styles.featureRow}>
              {features.map((f) => (
                <span key={f} className={styles.featureChip}>
                  <Icon name="check_circle" size={14} color="var(--color-primary)" />
                  {f}
                </span>
              ))}
            </div>
          </div>
          <Link href={ctaHref} className={styles.cta}>
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}
