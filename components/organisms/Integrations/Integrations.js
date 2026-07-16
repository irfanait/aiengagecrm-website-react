import Icon from '../../atoms/Icon/Icon';
import { LinkButton } from '../../atoms/Button/Button';
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
          <LinkButton href="#">Browse all 100+ integrations</LinkButton>
        </div>

        <div className={styles.grid}>
          {INTEGRATIONS.map((item) => (
            <div key={item.label} className={styles.item}>
              <span className={styles.mark} style={{ background: item.bg, color: item.color }}>
                {item.icon ? <Icon name={item.icon} size={19} /> : item.letter}
              </span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
