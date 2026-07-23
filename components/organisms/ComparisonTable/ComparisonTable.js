import Container from '../../common/Container/Container';
import styles from './ComparisonTable.module.css';

/** Generic "Compare platforms" capability table shared by every comparison page — just the
 * competitor's name and per-row capability/competitor/AiEngage text differ. */
export default function ComparisonTable({ competitor, rows }) {
  return (
    <section id="compare" className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.heading}>Compare platforms</h2>
        <div className={styles.table}>
          <div className={styles.headerRow}>
            <div className={styles.headerCell}>Capability</div>
            <div className={styles.headerCellCenter}>{competitor}</div>
            <div className={styles.headerCellAccent}>AiEngage</div>
          </div>
          {rows.map((r) => (
            <div key={r.cap} className={styles.row} style={{ background: r.bg }}>
              <div className={styles.cellLabel}>{r.cap}</div>
              <div className={styles.cellCompetitor}>{r.competitor}</div>
              <div className={styles.cellAi}>{r.ai}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
