import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import styles from './ContactConnect.module.css';

/** "Connect With AiEngage" section: 3 resource cards (demo, docs, partner program). */
export default function ContactConnect({ heading, description, items }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.desc}>{description}</p>

        <div className={styles.grid}>
          {items.map((c) => (
            <div key={c.title} className={styles.card}>
              <span className={styles.iconBox}>
                <Icon name={c.icon} size={28} color="var(--color-primary)" />
              </span>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardDesc}>{c.description}</p>
              <Button
                href={c.href}
                variant="primary"
                size="md"
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
              >
                {c.ctaLabel}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
