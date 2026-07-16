'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import MegaMenu from '../MegaMenu/MegaMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import { NAV_LINKS } from '../../../data/navLinks';
import { CTA_LINKS, SITE_BY } from '../../../utils/constants';
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

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <Container className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <Icon name="equalizer" size={20} color="#fff" />
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoTitleRow}>
              <span className={styles.logoName}>
                <span className={styles.logoAi}>Ai</span>Engage
              </span>
              <span className={styles.logoCrm}>CRM</span>
            </span>
            <span className={styles.logoBy}>BY {SITE_BY}</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          {NAV_LINKS.map((link) =>
            link.isMegaMenuTrigger ? (
              <div key={link.label} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${styles.navTrigger} ${menuOpen ? styles.navTriggerActive : ''}`}
                >
                  {link.label}
                  <Icon name="keyboard_arrow_down" size={17} className={`${styles.chevron} ${menuOpen ? styles.chevronOpen : ''}`} />
                </Link>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.actions}>
          <Link href={CTA_LINKS.login} className={styles.loginLink}>
            Login
          </Link>
          <Button href={CTA_LINKS.tryFree} variant="outlineDark" className={styles.ctaOutline}>
            Try for Free
          </Button>
          <Button href={CTA_LINKS.bookDemo} variant="dark" className={styles.ctaDark}>
            Book a Demo
          </Button>
          <button type="button" className={styles.hamburger} aria-label="Open menu" onClick={() => setDrawerOpen(true)}>
            <Icon name="menu" size={22} />
          </button>
        </div>

        {menuOpen && <MegaMenu onMouseEnter={openMenu} onMouseLeave={closeMenu} />}
      </Container>

      <MobileMenu open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
