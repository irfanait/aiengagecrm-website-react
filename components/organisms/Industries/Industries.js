import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { INDUSTRIES } from '../../../data/homeContent';
import styles from './Industries.module.css';

export default function Industries() {
  return (
    <section id="industries" className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.intro}>
          <SectionHeading index="05" label="INDUSTRIES" title="" className={styles.tagOnly} />
          <h2 className={styles.title}>Built for the way your industry sells.</h2>
          <p className={styles.desc}>
            Custom pipelines, fields and automations shape AiEngage around your business — not the other way round.
          </p>
        </div>

        <div className={styles.pills}>
          {INDUSTRIES.map((ind) => (
            <span key={ind.label} className={styles.pill}>
              <Icon name={ind.icon} size={18} color="var(--color-primary)" />
              {ind.label}
            </span>
          ))}
          <span className={styles.pillMore}>+ many more</span>
        </div>
      </Container>
    </section>
  );
}
