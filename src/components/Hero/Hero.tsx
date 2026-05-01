import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext';

const BG = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80'; // barbershop interior

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        <img src={BG} alt="" draggable={false} className="hero__bg-slide" />
      </div>

      <div className="hero__overlay" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__badge">{t.hero.badge}</span>

        <h1 className="hero__title">
          <span>{t.hero.title1}</span>
          <span>{t.hero.title2}</span>
        </h1>

        <div className="hero__actions">
          <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="btn-primary">{t.hero.bookBtn}</a>
          <a href="#services" className="btn-outline">{t.hero.exploreBtn}</a>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>{t.hero.scroll}</span>
        <div className="arrow" />
      </div>
    </section>
  );
};

export default Hero;
