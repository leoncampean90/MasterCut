import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__brand-name">MasterCut</div>
          <p>
            Premium beauty &amp; wellness studio. Barber, nails, makeup, cosmetic,
            and massage — two locations, one elevated experience.
          </p>
          <div className="footer__socials">
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="footer__social-link" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#locations">Locations</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer__col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Barber</a></li>
            <li><a href="#services">Nails</a></li>
            <li><a href="#services">Makeup</a></li>
            <li><a href="#services">Cosmetic</a></li>
            <li><a href="#services">Massage</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer__col footer__newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe for exclusive offers and beauty tips.</p>
          <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} MasterCut. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
