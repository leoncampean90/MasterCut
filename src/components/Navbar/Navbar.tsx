import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Team', href: '#team' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Logo */}
        <a href="#hero" className="navbar__logo">
          <svg className="navbar__logo-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="2.5"/>
            <text x="32" y="40" textAnchor="middle" fontSize="28" fontFamily="Playfair Display, serif" fontWeight="700" fill="currentColor">M</text>
          </svg>
          MasterCut
        </a>

        {/* Desktop links */}
        <div className="navbar__links">
          {NAV_ITEMS.map(({ label, href }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="btn-primary navbar__cta">Book Now</a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`navbar__overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(({ label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>{label}</a>
        ))}
        <a href="#contact" className="btn-primary" onClick={closeMenu}>Book Now</a>
      </div>
    </>
  );
};

export default Navbar;
