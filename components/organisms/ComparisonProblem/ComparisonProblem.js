import Container from '../../common/Container/Container';
import styles from './ComparisonProblem.module.css';

/** "The Problem" section shared by every comparison page: narrative paragraphs + a bold lead-out
 * line on the left, an arbitrary bespoke visual (`visual`) on the right. Keap uses a full-width
 * highlighted card below the grid instead (`belowCard`) rather than an inline lead-out line. */
export default function ComparisonProblem({ paragraphs, leadOut, visual, belowCard }) {
  return (
    <section id="problem" className={styles.section}>
      <Container className={styles.grid}>
        <div>
          {paragraphs.map((p) => (
            <p key={p} className={styles.para}>
              {p}
            </p>
          ))}
          {leadOut && <p className={styles.leadOut}>{leadOut}</p>}
        </div>
        <div className={styles.visual}>{visual}</div>
      </Container>
      {belowCard && (
        <Container>
          <div className={styles.belowCard}>
            <div className={styles.belowCardHeading}>{belowCard.heading}</div>
            <p className={styles.belowCardBody}>{belowCard.body}</p>
          </div>
        </Container>
      )}
    </section>
  );
}
