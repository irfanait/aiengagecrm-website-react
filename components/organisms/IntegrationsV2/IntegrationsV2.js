import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { INTEGRATIONS } from '../../../data/homeContent';
import styles from './IntegrationsV2.module.css';

export default function IntegrationsV2() {
  return (
    <section className={styles.section}>
      <Container>
        <span className={styles.eyebrow}>CONNECT AIENGAGE WITH THE TOOLS THAT RUN YOUR BUSINESS.</span>
        <div className={styles.headRow}>
          <h2 className={styles.title}>Plays well with the tools you already use.</h2>
          <a href="/integrations" className={styles.link}>
            100+ Integrations
          </a>
        </div>

        <div className={styles.grid}>
          {INTEGRATIONS.map((item) => (
            <div key={item.label} className={styles.item}>
              {item.logo ? (
                <span className={styles.logoMark}>
                  <Image src={item.logo} alt={item.label} width={22} height={22} className={styles.logoImg} />
                </span>
              ) : (
                <span className={styles.mark} style={{ background: item.bg, color: item.color }}>
                  <Icon name={item.icon} size={19} />
                </span>
              )}
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
