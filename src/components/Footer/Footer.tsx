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
            <a href="#" className="footer__social-link" aria-label="Instagram">📷</a>
            <a href="#" className="footer__social-link" aria-label="Facebook">📘</a>
            <a href="#" className="footer__social-link" aria-label="Twitter / X">🐦</a>
            <a href="#" className="footer__social-link" aria-label="TikTok">🎵</a>
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
