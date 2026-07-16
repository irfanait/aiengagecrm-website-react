'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { NAV_LINKS } from '../../../data/navLinks';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openMenu = () => {
    clearTimeout(closeTimer.current);
    setMenuOpen(true);
  };

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenuOpen(false), 180);
  };

  const closeMenuNow = () => {
    clearTimeout(closeTimer.current);
    setMenuOpen(false);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <Image src="/brand/logo.svg" alt="AiEngage CRM" width={150} height={37} className={styles.logoImg} priority />
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) =>
            link.isMegaMenuTrigger ? (
              <div key={link.label} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${styles.navTrigger} ${menuOpen ? styles.navTriggerActive : ''}`}
                  onClick={closeMenuNow}
                >
                  {link.label}
                  <Icon name="keyboard_arrow_down" size={17} className={`${styles.chevron} ${menuOpen ? styles.chevronOpen : ''}`} />
                </Link>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={styles.navLink} onClick={closeMenuNow}>
                {link.label}
              </Link>
            )
          )}
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

        {menuOpen && <MegaMenu onMouseEnter={openMenu} onMouseLeave={closeMenu} onNavigate={closeMenuNow} />}
      </Container>

      <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
