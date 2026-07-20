import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import { INTEGRATIONS } from '../../../data/homeContent';
import styles from './Integrations.module.css';

export default function Integrations() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading index="07" label="INTEGRATIONS" title="" className={styles.tagOnly} />
        <div className={styles.headerRow}>
          <h2 className={styles.title}>Plays well with the tools you already use.</h2>
          <span className={styles.allCount}>All 100+ integrations</span>
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
