import Container from '../../common/Container/Container';
import styles from './NewStartFreeStrip.module.css';

/** Slim callout strip below the pricing cards, promoting the always-free contact tier. CTA opens
 * the CRM signup app in a new tab, same as the plan cards' "Try ... For Free" buttons. */
export default function NewStartFreeStrip({ title, descriptionLead, descriptionBold, descriptionTail, ctaLabel, ctaHref }) {
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
          <a href={ctaHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            {ctaLabel}
          </a>
        </div>
      </Container>
    </section>
  );
}
