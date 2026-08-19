import Container from '../../common/Container/Container';
import styles from './FormPageHero.module.css';

/**
 * Two-column hero shared by /book-a-demo and /contact-us: heading + description + arbitrary
 * body content (checklist, contact info, ...) on the left, an embedded form card on the right.
 * `ratio` sets the two-column split (content fr, form fr) — defaults to an even split.
 */
export default function FormPageHero({ eyebrow, title, description, children, form, ratio = '1fr 1fr' }) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid} style={{ gridTemplateColumns: ratio }}>
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
