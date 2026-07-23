import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './IndustryBusinessTypes.module.css';

/**
 * Centered heading + a wrapping row of icon+name cards (business/provider types). Uses flexbox
 * with a fixed per-card basis (not CSS grid) so an item count that doesn't evenly divide into
 * `columns` (e.g. 7 items over 4 columns) still centers its incomplete last row instead of
 * leaving a lopsided gap.
 */
export default function IndustryBusinessTypes({ heading, items, columns = 4, variant = 'vertical' }) {
  const variantClass = variant === 'horizontal' ? styles.cardHorizontal : variant === 'card' ? styles.cardBody : '';
  return (
    <section id="business-types" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        <div className={styles.grid}>
          {items.map((t) => (
            <div key={t.name} className={`${styles.card} ${variantClass}`} style={{ flexBasis: `calc(${100 / columns}% - 20px)` }}>
              <span className={variant === 'horizontal' ? styles.iconBoxHorizontal : styles.iconBox}>
                <Icon name={t.icon} size={variant === 'horizontal' ? 27 : 30} color="var(--color-primary)" />
              </span>
              <div>
                <div className={styles.name}>{t.name}</div>
                {t.body && <p className={styles.body}>{t.body}</p>}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
