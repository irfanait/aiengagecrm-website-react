import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { HOMEV2_INDUSTRIES } from '../../../data/homeV2Industries';
import styles from './IndustriesV2.module.css';

/**
 * New homepage (v2)'s own Industries section — a card grid with a per-industry icon color,
 * distinct from the old homepage's pill-style Industries component (components/organisms/
 * Industries), which stays untouched since homepagev1 still uses it. Same id="industries" as that
 * component so any existing #industries deep link still lands on the right section.
 */
export default function IndustriesV2() {
  return (
    <section id="industries" className={styles.section}>
      <Container className={styles.intro}>
        <h2 className={styles.title}>Built For Your Industry</h2>
        <p className={styles.desc}>Custom pipelines, fields, and automations tailored to the way your industry works.</p>
      </Container>

      <Container>
        <div className={styles.grid}>
          {HOMEV2_INDUSTRIES.map((ind) => {
            const Tag = ind.href ? Link : 'div';
            return (
              <Tag key={ind.label} href={ind.href} className={styles.card}>
                <Icon name={ind.icon} size={40} color={ind.color} />
                <span className={styles.label}>{ind.label}</span>
              </Tag>
            );
          })}
          <div className={styles.card}>
            <Icon name="add" size={40} color="var(--color-primary)" />
            <span className={styles.label}>Many more</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
