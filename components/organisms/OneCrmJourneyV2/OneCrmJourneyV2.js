import Image from 'next/image';
import Container from '../../common/Container/Container';
import { ONE_CRM_JOURNEY_COPY } from '../../../data/homeV2Automation';
import styles from './OneCrmJourneyV2.module.css';

export default function OneCrmJourneyV2() {
  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.imageWrap}>
          <Image
            src="/homev2/one-crm-journey.png"
            alt="One CRM connecting every customer touchpoint — ads, WhatsApp, calls, meetings and follow-ups"
            width={1372}
            height={980}
            className={styles.image}
            sizes="(max-width: 900px) 100vw, 640px"
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading}>
            One CRM for Your <span className="textAccent">Entire Customer Journey</span>
          </h2>
          <p className={styles.lead}>{ONE_CRM_JOURNEY_COPY.lead}</p>
          <p className={styles.desc}>{ONE_CRM_JOURNEY_COPY.paragraph1}</p>
          <p className={styles.bold}>{ONE_CRM_JOURNEY_COPY.bold}</p>
          <p className={styles.desc}>{ONE_CRM_JOURNEY_COPY.paragraph2}</p>
        </div>
      </Container>
    </section>
  );
}
