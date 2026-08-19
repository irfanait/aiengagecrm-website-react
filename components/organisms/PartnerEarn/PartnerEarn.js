import { Fragment } from 'react';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerEarn.module.css';

/** "Earn More" section: centered heading, 5 circular-icon cards, and a Refer→Implement→Consult→Market flow band. */
export default function PartnerEarn({ data }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.label}>{data.label}</div>
        <h2 className={styles.heading}>
          {data.titleLead}
          <br />
          <span className="textAccent">{data.titleAccent}</span>
        </h2>

        <div className={styles.grid}>
          {data.items.map((item) => (
            <div key={item.title} className={styles.card}>
              <span className={styles.iconBox}>
                <Icon name={item.icon} size={28} color="var(--color-primary)" />
              </span>
              <div className={styles.cardTitle}>{item.title}</div>
              <span className={styles.divider} />
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.flowBand}>
          <div className={styles.flowSteps}>
            {data.flow.map((step, i) => (
              <Fragment key={step.label}>
                <div className={styles.flowStep}>
                  <span className={styles.flowIcon}>
                    <Icon name={step.icon} size={25} color="#fff" />
                  </span>
                  <div className={styles.flowLabel}>{step.label}</div>
                </div>
                {i < data.flow.length - 1 && <span className={styles.flowLine} />}
              </Fragment>
            ))}
          </div>
          <span className={styles.flowDivider} />
          <div>
            <div className={styles.flowHeading}>{data.flowHeading}</div>
            <div className={styles.flowAccent}>{data.flowAccent}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
