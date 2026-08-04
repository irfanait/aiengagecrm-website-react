import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './AboutIndustriesShowcase.module.css';

/** Left-aligned heading + intro paragraphs, and a 4-col grid of industry cards (icon + label,
 * linking to the matching /industries/* page when one exists). */
export default function AboutIndustriesShowcase({ heading, intro, items }) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>{heading}</h2>
        {intro.map((p) => (
          <p key={p} className={styles.intro}>
            {p}
          </p>
        ))}

        <div className={styles.grid}>
          {items.map((ind) => {
            const Tag = ind.href ? Link : 'span';
            return (
              <Tag key={ind.label} href={ind.href} className={styles.card}>
                <span className={styles.iconBubble}>
                  <Icon name={ind.icon} size={24} color="var(--color-primary)" />
                </span>
                <span className={styles.label}>{ind.label}</span>
              </Tag>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
