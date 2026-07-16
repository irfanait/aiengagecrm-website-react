import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { TESTIMONIAL } from '../../../data/homeContent';
import styles from './Testimonial.module.css';

export default function Testimonial() {
  const { quote, highlight, name, role, initials, stats } = TESTIMONIAL;
  const [before, after] = quote.split(highlight);

  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.side}>
          <SectionHeading index="06" label="CUSTOMERS" title="" className={styles.tagOnly} />
        </div>

        <div className={styles.content}>
          <p className={styles.quote}>
            &quot;{before}
            <span className="highlight">{highlight}</span>
            {after}&quot;
          </p>
          <div className={styles.footer}>
            <span className={styles.avatar}>{initials}</span>
            <span>
              <span className={styles.name}>{name}</span>
              <span className={styles.role}>{role}</span>
            </span>
            <span className={styles.stats}>
              {stats.map((s, i) => (
                <span key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  {i > 0 && <span className={styles.statDivider} />}
                  <span>
                    <b className={styles.statValue}>{s.value}</b> {s.label}
                  </span>
                </span>
              ))}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
