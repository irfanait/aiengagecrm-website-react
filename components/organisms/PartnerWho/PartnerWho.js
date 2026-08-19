import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './PartnerWho.module.css';

/** "Who Should Join?" section: heading/paragraph on the left, a wrapped pill list on the right. */
export default function PartnerWho({ data }) {
  return (
    <section className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <div className={styles.label}>{data.label}</div>
          <h2 className={styles.heading}>
            {data.headingLead}
            <span className="textAccent">{data.headingAccent}</span>
            {data.headingSuffix}
          </h2>
          <p className={styles.desc}>{data.description}</p>
        </div>

        <div className={styles.pills}>
          {data.items.map((item) => (
            <span key={item.label} className={styles.pill}>
              <Icon name={item.icon} size={20} color="var(--color-primary)" />
              {item.label}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
