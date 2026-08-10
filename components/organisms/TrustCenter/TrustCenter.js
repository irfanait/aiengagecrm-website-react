import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './TrustCenter.module.css';

/** Centered hero + a grid of cards, each linking to one legal/compliance document. */
export default function TrustCenter({ hero, cards }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h1 className={styles.title}>
          {hero.titleLead}
          <span className="textAccent">{hero.titleAccent}</span>
        </h1>
        <p className={styles.desc}>{hero.description}</p>

        <div className={styles.grid}>
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className={styles.card}>
              <span className={styles.iconBox}>
                <Icon name={card.icon} size={24} color="var(--color-primary)" />
              </span>
              <div className={styles.cardTitle}>{card.title}</div>
              <p className={styles.cardDesc}>{card.description}</p>
              <span className={styles.cardLink}>
                Read policy
                <Icon name="arrow_forward" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
