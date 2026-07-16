import Container from '../../common/Container/Container';
import styles from './NumberedSteps.module.css';

export default function NumberedSteps({ eyebrow, heading, steps }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.headWrap}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.circle}>{i + 1}</div>
              <div className={styles.title}>{step.title}</div>
              <p className={styles.desc}>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
