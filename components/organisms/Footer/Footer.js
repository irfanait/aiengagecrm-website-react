import Link from 'next/link';
import Image from 'next/image';
import Container from '../../common/Container/Container';
import { FOOTER_COLUMNS, FOOTER_SOCIALS } from '../../../data/footerLinks';
import { SITE_NAME } from '../../../utils/constants';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <Image src="/brand/logo-light.svg" alt="AiEngage CRM" width={202} height={48} className={styles.brandLogo} />
            </div>
            <p className={styles.brandDesc}>
              An AI-first CRM that helps businesses capture leads, engage customers, automate communication and grow
              faster.
            </p>
            <div className={styles.socials}>
              {FOOTER_SOCIALS.map((s) => (
                <a key={s.name} href={s.href} className={styles.socialIcon} aria-label={s.name} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.columns}>
            {FOOTER_COLUMNS.map((col, i) => (
              <div className={styles.column} key={col.heading || `col-${i}`}>
                {col.heading && <span className={styles.columnHeading}>{col.heading}</span>}
                {col.links.map((link) =>
                  link.external ? (
                    <a key={link.label} href={link.href} className={styles.columnLink} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ) : (
                    <Link key={link.label} href={link.href} className={styles.columnLink}>
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {year} <Link href="/">{SITE_NAME}</Link>. All rights reserved.
          </span>
          <div className={styles.legalLinks}>
            <Link href="https://www.aitrillion.com/terms-of-service" target='_blank' className={styles.legalLink}>
              Terms of Use
            </Link>
            <Link href="https://www.aitrillion.com/privacy-policy" target='_blank' className={styles.legalLink}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
