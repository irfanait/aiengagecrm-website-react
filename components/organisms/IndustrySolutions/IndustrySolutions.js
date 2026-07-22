import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './IndustrySolutions.module.css';

function CardBody({ s }) {
  return (
    <>
      <span className={styles.iconBox} style={{ background: s.chipBg }}>
        <Icon name={s.icon} size={25} color={s.iconColor} />
      </span>
      <div className={styles.title}>{s.title}</div>
      <div className={styles.bodyWrap}>
        <p className={styles.body}>{s.body}</p>
        {s.body2 && <p className={styles.body}>{s.body2}</p>}
      </div>
    </>
  );
}

/** Centered eyebrow + heading, then a 3-column grid of solution cards — a card with `href` links
 * to the relevant feature page; without one it's a plain (non-clickable) info card. */
export default function IndustrySolutions({ eyebrow, heading, items }) {
  return (
    <section id="solutions" className={styles.section}>
      <Container>
        <div className={styles.headingWrap}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {items.map((s) =>
            s.href ? (
              <Link key={s.title} href={s.href} className={styles.card}>
                <CardBody s={s} />
              </Link>
            ) : (
              <div key={s.title} className={styles.card}>
                <CardBody s={s} />
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}
