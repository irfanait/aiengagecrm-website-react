import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { TOOL_STACK_TOOLS, TOOL_STACK_FEATURES } from '../../../data/homeV3ToolStack';
import styles from './ToolStackV3.module.css';

/** Homepage v3's "From Multiple Tools to One Powerful CRM" section — a "before" panel of
 * competing point tools and an "after" panel of AiEngage feature areas, connected by an arrow.
 * Extracted from the "Home V6" mockup; own component/data, doesn't touch ReplaceStackV2 (v2's
 * equivalent). */
export default function ToolStackV3() {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>
          From Multiple Tools to <span className="textAccent">One Powerful CRM</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.panel}>
            <h3 className={styles.panelTitle}>Juggling Multiple Tools?</h3>
            <div className={styles.toolGrid}>
              {TOOL_STACK_TOOLS.map((tool) => (
                <div key={tool.label} className={styles.toolCard}>
                  <div className={styles.toolLogoWrap}>
                    {/* Plain <img>, not next/image — serves the source file's real bytes directly
                        with no resize/re-encode. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tool.logo} alt={tool.label} className={styles.toolLogo} loading="lazy" />
                  </div>
                  <div className={styles.toolLabel}>{tool.label}</div>
                  <div className={styles.toolSub}>{tool.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <span className={styles.arrow}>
            <Icon name="arrow_forward" size={26} color="#fff" />
          </span>

          <div className={`${styles.panel} ${styles.panelAccent}`}>
            <h3 className={styles.panelTitle}>
              Get Everything in <span className="textAccent">AiEngage CRM</span>
            </h3>
            <div className={styles.toolGrid}>
              {TOOL_STACK_FEATURES.map((f) => (
                <div key={f.label} className={styles.featureCard}>
                  <div className={styles.featureIconWrap}>
                    <Icon name={f.icon} size={32} color="var(--color-primary)" />
                  </div>
                  <div className={styles.toolLabel}>{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
