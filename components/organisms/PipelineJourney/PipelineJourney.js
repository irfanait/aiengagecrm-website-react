import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { JOURNEY_STEPS } from '../../../data/homeContent';
import styles from './PipelineJourney.module.css';

export default function PipelineJourney() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          index="03"
          label="HOW IT WORKS"
          title="From first inquiry to repeat business."
          description="Every lead gets an owner, a next step and a follow-up — automatically."
          layout="split"
          titleSize={42}
          titleMaxWidth={560}
        />

        <div className={styles.wrap}>
          <div className={styles.line} />
          <div className={styles.grid}>
            {JOURNEY_STEPS.map((step) => (
              <div key={step.number}>
                <div className={`${styles.number} ${step.dark ? styles.numberDark : ''}`}>{step.number}</div>
                <div className={styles.title}>{step.title}</div>
                <p className={styles.desc}>{step.desc}</p>
                <div className={styles.tags}>
                  {step.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
