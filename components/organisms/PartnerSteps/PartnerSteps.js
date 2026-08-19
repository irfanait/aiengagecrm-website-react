import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerSteps.module.css';

/** Dark "How It Works" band: 5-step horizontal process with numbered icons. */
export default function PartnerSteps({ data }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.label}>{data.label}</div>
        <h2 className={styles.heading}>{data.heading}</h2>

        <div className={styles.steps}>
          {data.steps.map((step, i) => (
            <div key={step.title} className={styles.step}>
              <div className={styles.stepHead}>
                <span className={styles.stepIcon}>
                  <Icon name={step.icon} size={22} color="var(--color-primary)" />
                </span>
                <span className={styles.stepIndex}>STEP {i + 1}</span>
                <span className={styles.stepLine} />
              </div>
              <div className={styles.stepTitle}>{step.title}</div>
              <p className={styles.stepDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
