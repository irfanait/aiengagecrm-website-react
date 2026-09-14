import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { CONNECTED_COLUMNS } from '../../../data/shopifyPartner';
import styles from './ShopifyConnected.module.css';

export default function ShopifyConnected() {
  return (
    <section id="connected" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.heading}>
            Marketing. Sales. Support. <span className="textAccent">Finally Connected.</span>
          </h2>
          <p className={styles.desc}>
            One customer journey shouldn&apos;t be divided between multiple tools and teams. AiEngage CRM keeps every
            conversation, activity and opportunity connected.
          </p>
        </div>

        <div className={styles.grid}>
          {CONNECTED_COLUMNS.map((col) => (
            <div key={col.title} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardIcon}>
                  <Icon name={col.icon} size={28} color="var(--color-primary)" />
                </span>
                <div>
                  <div className={styles.cardTitle}>{col.title}</div>
                  <div className={styles.cardSubtitle}>{col.subtitle}</div>
                </div>
              </div>

              <ul className={styles.list}>
                {col.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={19} color="var(--color-primary)" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className={styles.tags}>
                {col.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
