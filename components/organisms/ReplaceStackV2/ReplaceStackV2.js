import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { SCATTERED_STACK_TOOLS, AIENGAGE_REPLACES } from '../../../data/homeV2Automation';
import styles from './ReplaceStackV2.module.css';

export default function ReplaceStackV2() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.heading}>
          Built for the <span className="textAccent">Work Your Team Does</span> Every Day
        </h2>

        <div className={styles.panels}>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>Replace your scattered stack</h3>
            <div className={styles.toolGrid}>
              {SCATTERED_STACK_TOOLS.map((tool) => (
                <div key={tool.name} className={styles.toolChip}>
                  {/* Plain <img>, not next/image — serves the source file's real bytes directly
                      with no resize/re-encode, which was reading as blur on these small logos. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.logo} alt={tool.name} className={styles.toolLogo} loading="lazy" />
                  <span className={styles.toolName}>{tool.name}</span>
                  <span className={styles.toolCategory}>{tool.category}</span>
                </div>
              ))}
            </div>
          </div>

          <span className={styles.arrow}>
            <Icon name="arrow_forward" size={22} color="#fff" />
          </span>

          <div className={`${styles.panel} ${styles.panelAccent}`}>
            <h3 className={styles.panelTitle}>
              Get Everything In <span className="textAccent">AiEngage CRM</span>
            </h3>
            <div className={styles.featureGrid}>
              {AIENGAGE_REPLACES.map((f) => (
                <div key={f.label} className={styles.featureChip}>
                  <span className={styles.featureIcon}>
                    <Icon name={f.icon} size={26} color="var(--color-primary)" weight={800} />
                  </span>
                  <span className={styles.featureLabel}>{f.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
