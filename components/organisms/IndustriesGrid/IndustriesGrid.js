import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './IndustriesGrid.module.css';

/**
 * Centered heading + a 4-col grid of industry cards (icon + label), ending in a dark
 * "and many more" card. Used on product feature pages (WhatsApp Business, and future ones).
 */
export default function IndustriesGrid({ eyebrow, heading, items, columns = 4, showMoreCard = true, moreNote }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid} style={{ '--industries-columns': columns }}>
          {items.map((ind) => (
            <span key={ind.label} className={`${styles.card} ${ind.dark ? styles.cardMore : ''}`}>
              <span className={`${styles.iconBubble} ${ind.dark ? styles.iconBubbleMore : ''}`} style={ind.dark ? undefined : { background: ind.bg }}>
                <Icon name={ind.icon} size={24} color={ind.dark ? 'var(--color-primary-dark-accent)' : ind.color} />
              </span>
              <span className={`${styles.label} ${ind.dark ? styles.labelMore : ''}`}>{ind.label}</span>
            </span>
          ))}
          {showMoreCard && (
            <span className={styles.cardMore}>
              <span className={styles.iconBubbleMore}>
                <Icon name="more_horiz" size={24} color="var(--color-primary-dark-accent)" />
              </span>
              <span className={styles.labelMore}>And Many More</span>
            </span>
          )}
        </div>
        {moreNote && <div className={styles.moreNote}>{moreNote}</div>}
      </Container>
    </section>
  );
}
