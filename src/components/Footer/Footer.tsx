import './Footer.css';
import { useLanguage } from '../../contexts/LanguageContext';

const NAV_HREFS = ['#hero', '#services', '#locations', '#about', '#gallery', '#contact'];

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const navKeys = [t.nav.home, t.nav.services, t.nav.locations, t.nav.about, t.nav.gallery, t.nav.contact];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-name">MasterCut</div>
            <p>{t.footer.brandDesc}</p>
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

          <div className="footer__col">
            <h4>{t.footer.quickLinks}</h4>
            <ul>
              {navKeys.map((label, i) => (
                <li key={i}><a href={NAV_HREFS[i]}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>{t.footer.servicesCol}</h4>
            <ul>
              {t.services.categories.map((cat) => (
                <li key={cat.label}><a href="#services">{cat.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__newsletter">
            <h4>{t.footer.newsletter}</h4>
            <p>{t.footer.newsletterDesc}</p>
            <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder={t.footer.newsletterPlaceholder} />
              <button type="submit" aria-label="Subscribe">{t.footer.newsletterBtn}</button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} MasterCut. {t.footer.rights}</p>
          <div className="footer__bottom-links">
            <a href="#">{t.footer.privacy}</a>
            <a href="#">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
