import Container from '../../common/Container/Container';
import CheckItem from '../../molecules/CheckItem/CheckItem';
import styles from './BenefitBand.module.css';

/** Full-width brand-orange band summarizing every feature covered on the page, as a checklist. */
export default function BenefitBand({ eyebrow, heading, items, columns = 4 }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.head}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid} style={{ '--band-columns': columns }}>
          {items.map((item) => (
            <CheckItem key={item} dark top color="#fff">
              {item}
            </CheckItem>
          ))}
        </div>
      </Container>
    </section>
  );
}
