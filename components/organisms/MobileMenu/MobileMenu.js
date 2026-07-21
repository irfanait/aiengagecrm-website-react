'use client';

import { Drawer, Collapse } from 'antd';
import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import { NAV_LINKS } from '../../../data/navLinks';
import { MEGA_MENU } from '../../../data/megaMenu';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './MobileMenu.module.css';

/** Mobile navigation: Ant Design Drawer + Collapse accordion mirroring the desktop mega menu.
 * Renders NAV_LINKS in the same order as the desktop header — plain links stay plain links,
 * "Features" and "Why AiEngage" become their own collapsed-by-default accordion panels. */
export default function MobileMenu({ open, onClose }) {
  const featureCollapseItems = MEGA_MENU.map((cat) => ({
    key: cat.name,
    label: (
      <span className={styles.collapseHeader}>
        <Icon name={cat.icon} size={19} color="var(--color-primary)" />
        {cat.name}
      </span>
    ),
    children: (
      <div>
        <Link href={cat.href} className={styles.catOverviewLink} onClick={onClose}>
          Complete Overview
          <Icon name="arrow_forward" size={16} />
        </Link>
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
        {NAV_LINKS.map((link) => {
          if (link.isMegaMenuTrigger) {
            return (
              <div key={link.label} className={styles.collapseWrap}>
                <Collapse
                  ghost
                  items={[
                    {
                      key: link.label,
                      label: <span className={styles.collapseHeader}>{link.label}</span>,
                      children: (
                        <div className={styles.nestedWrap}>
                          <Collapse ghost items={featureCollapseItems} />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            );
          }

          if (link.isDropdownTrigger) {
            return (
              <div key={link.label} className={styles.collapseWrap}>
                <Collapse
                  ghost
                  items={[
                    {
                      key: link.label,
                      label: <span className={styles.collapseHeader}>{link.label}</span>,
                      children: (
                        <div>
                          {link.dropdownItems.map((item) => (
                            <Link key={item.label} href={item.href} className={styles.navLink} onClick={onClose}>
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            );
          }

          return (
            <Link key={link.label} href={link.href} className={styles.navLink} onClick={onClose}>
              {link.label}
            </Link>
          );
        })}

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
