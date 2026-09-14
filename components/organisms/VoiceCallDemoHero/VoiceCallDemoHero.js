import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import EmbedForm from '../EmbedForm/EmbedForm';
import styles from './VoiceCallDemoHero.module.css';

const FEATURES = [
  { icon: 'call', text: "Natural, human-like conversations in your customer's language" },
  { icon: 'hub', text: 'Outcomes & transcripts sync automatically to your CRM' },
  { icon: 'schedule', text: 'Available 24×7 — never miss a lead' },
];

export default function VoiceCallDemoHero() {
  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.left}>
          <span className={styles.badge}>
            <Icon name="graphic_eq" size={16} />
            AI VOICE AGENT
          </span>
          <h1 className={styles.title}>
            Hear It For Yourself. <span className="textAccent">A Real AI Voice Call.</span>
          </h1>
          <p className={styles.desc}>
            Drop your number and our AI Voice Agent will call you within seconds — qualifying, answering questions and
            booking the next step. Every call is logged straight into your CRM.
          </p>

          <div className={styles.features}>
            {FEATURES.map((f) => (
              <div key={f.text} className={styles.feature}>
                <span className={styles.featureIcon}>
                  <Icon name={f.icon} size={21} color="var(--color-primary)" />
                </span>
                <div className={styles.featureText}>{f.text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {/* <h2 className={styles.formHeading}>
            Request a call back from our AI Voice Agent <span className={styles.formHeadingMuted}>(DEMO)</span>
          </h2> */}
          <EmbedForm
            slug="request-call-back-from-ai-voice-agent-demo"
            title="Request call back from AI Voice Agent (DEMO)"
            height={520}
          />
        </div>
      </Container>
    </section>
  );
}
