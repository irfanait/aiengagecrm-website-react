import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { HOMEV2_INTEGRATIONS } from '../../../data/homeV2Integrations';
import styles from './IntegrationsV2.module.css';

export default function IntegrationsV2() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.row}>
          <div className={styles.left}>
            <h2 className={styles.title}>Connect AiEngage CRM With the Tools That You Run Your Business</h2>
            <a href="/integrations" className={styles.badge}>
              <Icon name="hub" size={19} color="var(--color-primary)" />
              100+ Integrations
            </a>
          </div>

          <div className={styles.grid}>
            {HOMEV2_INTEGRATIONS.map((item) => (
              <div key={item.label} className={styles.item}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.logo} alt={item.label} className={styles.logoImg} loading="lazy" />
                <span className={styles.label}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
