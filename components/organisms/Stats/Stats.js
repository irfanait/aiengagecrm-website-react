import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { STATS } from '../../../data/homeContent';
import styles from './Stats.module.css';

export default function Stats() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading index="04" label="THE RESULTS" className={styles.heading} />
        <div className={styles.grid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <div className={styles.value}>
                {stat.value}
                {stat.unit && <span className={styles.unit}>{stat.unit}</span>}
              </div>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.desc}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
