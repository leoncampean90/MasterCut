import { useState, useEffect, useRef, useCallback } from 'react';
import './Services.css';
import { useLanguage } from '../../contexts/LanguageContext';

const CAT_PHOTOS = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
];

const SERVICE_IMAGES = [
  [
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80',
    'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=900&q=80',
    'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=900&q=80',
    'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80',
    'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80',
    'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=900&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
    'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=80',
    'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=80',
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&q=80',
    'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=900&q=80',
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
    'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&q=80',
    'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80',
    'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80',
    'https://images.unsplash.com/photo-1612908689090-518a7ffa0891?w=900&q=80',
    'https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80',
    'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80',
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80',
  ],
  [
    'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
    'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80',
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbec6b?w=900&q=80',
    'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&q=80',
    'https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80',
  ],
];

function useRevealOnScroll() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    refs.current[index] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
          } else {
            (entry.target as HTMLElement).classList.remove('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );
    refs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  });

  return setRef;
}

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const setRef = useRevealOnScroll();

  const category = activeCategory !== null ? t.services.categories[activeCategory] : null;

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">{t.services.sectionTitle}</h2>
        <div className="gold-line" />
        <p className="section-subtitle">{t.services.sectionSubtitle}</p>

        {category && (
          <div className="services__detail-top">
            <button className="services__back" onClick={() => setActiveCategory(null)}>
              <span className="services__back-arrow">&#8592;</span>
              {t.services.sectionTitle}
            </button>
            <div className="services__detail-header">
              <h3 className="services__detail-title">{category.label}</h3>
              <p className="services__detail-desc">{category.description}</p>
            </div>
          </div>
        )}
      </div>

      {activeCategory === null && (
        <div className="services__picker">
          {t.services.categories.map((cat, i) => (
            <button
              key={cat.label}
              className="services__photo-btn"
              onClick={() => setActiveCategory(i)}
            >
              <img src={CAT_PHOTOS[i]} alt={cat.label} className="services__photo-btn-img" loading="lazy" />
              <div className="services__photo-btn-overlay">
                <div className="services__photo-btn-footer">
                  <span className="services__photo-btn-label">{cat.label}</span>
                  <span className="services__photo-btn-desc">{cat.description}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {category && (
        <div className="services__showcase">
          {category.services.map((s, i) => (
            <div className="showcase-card" key={s.title} ref={setRef(i)}>
              <img src={SERVICE_IMAGES[activeCategory!][i]} alt={s.title} className="showcase-card__bg" loading="lazy" />
              <div className="showcase-card__overlay" />
              <div className={`showcase-card__content ${i % 2 === 0 ? 'align-left' : 'align-right'}`}>
                <span className="showcase-card__price">{s.price}</span>
                <h4 className="showcase-card__title">{s.title}</h4>
                <p className="showcase-card__desc">{s.description}</p>
                <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="btn-primary showcase-card__book">{t.services.bookBtn}</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
