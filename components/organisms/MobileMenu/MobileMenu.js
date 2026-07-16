'use client';

import { Drawer, Collapse } from 'antd';
import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { NAV_LINKS } from '../../../data/navLinks';
import { MEGA_MENU } from '../../../data/megaMenu';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './MobileMenu.module.css';

/** Mobile navigation: Ant Design Drawer + Collapse accordion mirroring the desktop mega menu. */
export default function MobileMenu({ open, onClose }) {
  const collapseItems = MEGA_MENU.map((cat) => ({
    key: cat.name,
    label: (
      <span className={styles.collapseHeader}>
        <Icon name={cat.icon} size={19} color="var(--color-primary)" />
        {cat.name}
      </span>
    ),
    children: (
      <div>
        {cat.features.map(([name, icon, desc, href]) => (
          <Link key={name} href={href} className={styles.catFeatureLink} onClick={onClose}>
            <Icon name={icon} size={18} color="var(--color-primary)" />
            <span>
              <span className={styles.catFeatureName}>{name}</span>
              <span className={styles.catFeatureDesc}>{desc}</span>
            </span>
          </Link>
        ))}
      </div>
    ),
  }));

  return (
    <Drawer title="Menu" placement="right" onClose={onClose} open={open} size={340}>
      <div className={styles.drawerBody}>
        {NAV_LINKS.filter((l) => !l.isMegaMenuTrigger).map((link) => (
          <Link key={link.label} href={link.href} className={styles.navLink} onClick={onClose}>
            {link.label}
          </Link>
        ))}

        <div className={styles.collapseWrap}>
          <Collapse ghost items={collapseItems} />
        </div>

        <div className={styles.actions}>
          <Button href={CTA_LINKS.tryFree} variant="outlineDark" onClick={onClose}>
            Try for Free
          </Button>
          <Button href={CTA_LINKS.bookDemo} variant="dark" onClick={onClose}>
            Book a Demo
          </Button>
          <Link href={CTA_LINKS.login} className={styles.navLink} onClick={onClose}>
            Login
          </Link>
        </div>
      </div>
    </Drawer>
  );
}
