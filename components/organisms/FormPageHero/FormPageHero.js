import Container from '../../common/Container/Container';
import styles from './FormPageHero.module.css';

/**
 * Two-column hero shared by /book-a-demo and /contact-us: heading + description + arbitrary
 * body content (checklist, contact info, ...) on the left, an embedded form card on the right.
 */
export default function FormPageHero({ eyebrow, title, description, children, form }) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.content}>
          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
          <h1 className={styles.title}>{title}</h1>
          {description && <p className={styles.desc}>{description}</p>}
          {children}
        </div>
        <div className={styles.formCol}>{form}</div>
      </Container>
    </section>
  );
}
