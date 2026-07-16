import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import CheckItem from '../CheckItem/CheckItem';
import styles from './BenefitsGrid.module.css';

/**
 * Centered heading + a 3 or 4-column grid of bare-icon cards. Used by every WhatsApp feature page
 * (mirrors the design's "Benefits" / "What it does" grid pattern — icon, title, one-line description).
 * `extraChecks` renders an optional bordered checklist panel below the grid (Team Inbox page).
 */
export default function BenefitsGrid({ eyebrow, heading, items, columns = 3, small = false, extraChecks }) {
  return (
    <section className={styles.section}>
      <Container>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h2 className={styles.heading}>{heading}</h2>
        <div className={`${styles.grid} ${columns === 4 ? styles.cols4 : styles.cols3}`}>
          {items.map((item) => (
            <div key={item.title} className={`${styles.card} ${columns === 4 ? styles.cardCompact : ''}`}>
              <Icon name={item.icon} size={26} color={item.iconColor || 'var(--color-primary)'} />
              <div className={`${styles.cardTitle} ${small ? styles.cardTitleSm : ''}`}>{item.title}</div>
              <p className={`${styles.cardDesc} ${small ? styles.cardDescSm : ''}`}>{item.description}</p>
            </div>
          ))}
        </div>
        {extraChecks && (
          <div className={styles.extra}>
            {extraChecks.map((text) => (
              <CheckItem key={text}>{text}</CheckItem>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
