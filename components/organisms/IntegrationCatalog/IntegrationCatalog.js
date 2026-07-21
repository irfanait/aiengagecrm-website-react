import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import IntegrationCard from '../../molecules/IntegrationCard/IntegrationCard';
import styles from './IntegrationCatalog.module.css';

/**
 * The Integrations page's main grid: eyebrow/heading, a static category filter row,
 * and a 3-column grid of IntegrationCard tiles (one per connected app).
 */
export default function IntegrationCatalog({ eyebrow, heading, filters, items }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <SectionHeading layout="centered" label={eyebrow} title={heading} titleSize={38} />
        </div>
        <div className={styles.filterRow}>
          {filters.map((f, i) => (
            <span key={f} className={i === 0 ? styles.filterActive : styles.filterChip}>
              {f}
            </span>
          ))}
        </div>
        <div className={styles.grid}>
          {items.map((item) => (
            <IntegrationCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
