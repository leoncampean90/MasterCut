import { useState, useEffect } from 'react';
import './Hero.css';

const BG_SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80',
    label: 'Precision Cuts',
  },
  {
    src: 'https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=1920&q=80',
    label: 'Barbershop Excellence',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80',
    label: 'Nail Artistry',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1920&q=80',
    label: 'Makeup & Beauty',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
    label: 'Cosmetic Treatments',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1920&q=80',
    label: 'Relaxing Massage',
  },
];

const INTERVAL = 5500;

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current);
      setCurrent(c => (c + 1) % BG_SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  return (
    <section className="hero" id="hero">
      {/* ── Background slideshow ── */}
      <div className="hero__bg" aria-hidden="true">
        {BG_SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
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

      {/* ── Overlay ── */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="hero__content">
        <span className="hero__badge">Est. 2024 — Beauty &amp; Wellness Studio</span>

        <h1 className="hero__title">
          <span>Your Complete</span>
          <span>Beauty Destination</span>
        </h1>

        <div className="hero__actions">
          <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="btn-primary">Book on Mero</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="hero__dots" aria-label="Slide navigation">
        {BG_SLIDES.map((slide, i) => (
          <button
            key={i}
            className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            onClick={() => { setPrev(current); setCurrent(i); }}
            aria-label={slide.label}
          />
        ))}
      </div>

      {/* ── Current slide label ── */}
      <span className="hero__slide-label" key={current}>
        {BG_SLIDES[current].label}
      </span>

      {/* ── Scroll hint ── */}
      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="arrow" />
      </div>
    </section>
  );
};

export default Hero;
