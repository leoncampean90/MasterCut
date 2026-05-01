import { useState, useEffect } from 'react';
import './Navbar.css';
import { useLanguage } from '../../contexts/LanguageContext';

const NAV_HREFS = ['#hero', '#services', '#locations', '#team', '#about', '#gallery', '#contact'];

const Navbar: React.FC = () => {
  const { t, toggleLang, langSwitch } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLabels = [
    t.nav.home, t.nav.services, t.nav.locations, t.nav.team,
    t.nav.about, t.nav.gallery, t.nav.contact,
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="navbar__logo">
          <svg className="navbar__logo-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2.5"/>
            <text x="32" y="40" textAnchor="middle" fontSize="28" fontFamily="Playfair Display, serif" fontWeight="700" fill="currentColor">M</text>
          </svg>
          MasterCut
        </a>

        <div className="navbar__links">
          {navLabels.map((label, i) => (
            <a key={NAV_HREFS[i]} href={NAV_HREFS[i]}>{label}</a>
          ))}
        </div>

        <div className="navbar__right">
          <button className="navbar__lang" onClick={toggleLang} aria-label="Switch language">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
            </svg>
            {langSwitch}
          </button>
          <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="btn-primary navbar__cta">{t.nav.bookNow}</a>
        </div>

        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`navbar__overlay ${menuOpen ? 'open' : ''}`} onClick={closeMenu} />

      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {navLabels.map((label, i) => (
          <a key={NAV_HREFS[i]} href={NAV_HREFS[i]} onClick={closeMenu}>{label}</a>
        ))}
        <button className="navbar__lang navbar__lang--mobile" onClick={() => { toggleLang(); closeMenu(); }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/>
          </svg>
          {langSwitch === 'EN' ? 'Switch to English' : 'Comută în Română'}
        </button>
        <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={closeMenu}>{t.nav.bookNow}</a>
      </div>
    </>
  );
};

export default Navbar;
