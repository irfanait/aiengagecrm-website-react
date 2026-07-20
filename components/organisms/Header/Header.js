'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import MegaMenu from '../MegaMenu/MegaMenu';
import NavDropdown from '../NavDropdown/NavDropdown';
import MobileMenu from '../MobileMenu/MobileMenu';
import { NAV_LINKS } from '../../../data/navLinks';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openKey, setOpenKey] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = (key) => {
    clearTimeout(closeTimer.current);
    setOpenKey(key);
  };

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenKey(null), 180);
  };

  const closeMenuNow = () => {
    clearTimeout(closeTimer.current);
    setOpenKey(null);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <Image src="/brand/logo.svg" alt="AiEngage CRM" width={180} height={44} className={styles.logoImg} priority />
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) => {
            if (link.isMegaMenuTrigger) {
              const isOpen = openKey === link.label;
              return (
                <div key={link.label} onMouseEnter={() => openMenu(link.label)} onMouseLeave={closeMenu}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${styles.navTrigger} ${isOpen ? styles.navTriggerActive : ''}`}
                    onClick={closeMenuNow}
                  >
                    {link.label}
                    <Icon name="keyboard_arrow_down" size={17} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
                  </Link>
                  {isOpen && <MegaMenu onMouseEnter={() => openMenu(link.label)} onMouseLeave={closeMenu} onNavigate={closeMenuNow} />}
                </div>
              );
            }

            if (link.isDropdownTrigger) {
              const isOpen = openKey === link.label;
              return (
                <div
                  key={link.label}
                  className={styles.navTriggerWrap}
                  onMouseEnter={() => openMenu(link.label)}
                  onMouseLeave={closeMenu}
                >
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${styles.navTrigger} ${isOpen ? styles.navTriggerActive : ''}`}
                    onClick={closeMenuNow}
                  >
                    {link.label}
                    <Icon name="keyboard_arrow_down" size={17} className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} />
                  </Link>
                  {isOpen && (
                    <NavDropdown
                      items={link.dropdownItems}
                      onMouseEnter={() => openMenu(link.label)}
                      onMouseLeave={closeMenu}
                      onNavigate={closeMenuNow}
                    />
                  )}
                </div>
              );
            }

            return (
              <Link key={link.label} href={link.href} className={styles.navLink} onClick={closeMenuNow}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <div className={styles.desktopActions}>
            <Link href={CTA_LINKS.login} className={styles.loginLink}>
              Login
            </Link>
            <Button href={CTA_LINKS.tryFree} variant="outlineDark">
              Try for Free
            </Button>
            <Button href={CTA_LINKS.bookDemo} variant="dark">
              Book a Demo
            </Button>
          </div>
          <button type="button" className={styles.hamburger} aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <Icon name="menu" size={22} />
          </button>
        </div>
      </Container>

      <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
