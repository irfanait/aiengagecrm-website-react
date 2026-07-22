import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './IndustryBusinessTypes.module.css';

/**
 * Centered heading + a wrapping row of icon+name cards (business/provider types). Uses flexbox
 * with a fixed per-card basis (not CSS grid) so an item count that doesn't evenly divide into
 * `columns` (e.g. 7 items over 4 columns) still centers its incomplete last row instead of
 * leaving a lopsided gap.
 */
export default function IndustryBusinessTypes({ heading, items, columns = 4 }) {
  return (
    <section id="business-types" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.grid}>
          {items.map((t) => (
            <div key={t.name} className={styles.card} style={{ flexBasis: `calc(${100 / columns}% - 20px)` }}>
              <span className={styles.iconBox}>
                <Icon name={t.icon} size={30} color="var(--color-primary)" />
              </span>
              <div className={styles.name}>{t.name}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
