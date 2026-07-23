import Container from '../../common/Container/Container';
import styles from './ComparisonDifferentiators.module.css';

/** Centered heading + paragraph, then a 3-column grid of differentiator cards (each a small
 * bespoke `visual` node + title + body) — used by the HubSpot and Zoho comparison pages. */
export default function ComparisonDifferentiators({ heading, description, items }) {
  return (
    <section id="how-we-work" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.desc}>{description}</p>
        <div className={styles.grid}>
          {items.map((it) => (
            <div key={it.title} className={styles.card}>
              <div className={styles.visual}>{it.visual}</div>
              <div className={styles.title}>{it.title}</div>
              <p className={styles.body}>{it.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
