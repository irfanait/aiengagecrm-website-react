import Image from 'next/image';
import { TRUSTED_LOGOS } from '../../../data/homeV2Discovery';
import styles from './TrustedByV2.module.css';

/** Logo list is rendered twice back-to-back so the CSS marquee animation can loop seamlessly
 * (scrolling the track exactly -50% snaps back to an identical starting frame). */
export default function TrustedByV2() {
  const logos = [...TRUSTED_LOGOS, ...TRUSTED_LOGOS];
  return (
    <section className={styles.section}>
      <p className={styles.label}>Trusted by growing teams</p>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {logos.map((client, i) => (
            <span key={`${client.name}-${i}`} className={styles.logoSlot}>
              <Image src={client.logo} alt={client.name} width={150} height={44} className={styles.logoImg} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
