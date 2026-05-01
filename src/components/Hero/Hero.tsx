import { useState, useEffect } from 'react';
import './Hero.css';
import { useLanguage } from '../../contexts/LanguageContext';

const BG_SRCS = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80',
  'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=1920&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
];

const INTERVAL = 5500;

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current);
      setCurrent(c => (c + 1) % BG_SRCS.length);
    }, INTERVAL);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true">
        {BG_SRCS.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            draggable={false}
            className={[
              'hero__bg-slide',
              i === current ? 'hero__bg-slide--active' : '',
              i === prev    ? 'hero__bg-slide--leaving' : '',
            ].join(' ').trim()}
          />
        ))}
      </div>

      <div className="hero__overlay" aria-hidden="true" />

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

      <div className="hero__dots" aria-label="Slide navigation">
        {BG_SRCS.map((_, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            onClick={() => { setPrev(current); setCurrent(i); }}
            aria-label={t.hero.slides[i]}
          />
        ))}
      </div>

      <span className="hero__slide-label" key={`${current}-${t.hero.slides[current]}`}>
        {t.hero.slides[current]}
      </span>

      <div className="hero__scroll-indicator">
        <span>{t.hero.scroll}</span>
        <div className="arrow" />
      </div>
    </section>
  );
};

export default Hero;
