import Container from '../../common/Container/Container';
import styles from './PartnerVideo.module.css';

/** Partner program walkthrough video. */
export default function PartnerVideo() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.label}>Partner Program Video</div>
        <video className={styles.video} src="/videos/partner-program.mp4" autoPlay muted loop playsInline controls />
      </Container>
    </section>
  );
}
