import './Gallery.css';
import { useLanguage } from '../../contexts/LanguageContext';

const GALLERY_SRCS = [
  'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80',
];

const Gallery: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">{t.gallery.title}</h2>
        <div className="gold-line" />
        <p className="section-subtitle">{t.gallery.subtitle}</p>

        <div className="gallery__grid">
          {t.gallery.labels.map((label, i) => (
            <div className="gallery__item" key={i}>
              <img
                src={GALLERY_SRCS[i]}
                alt={label}
                className="gallery__item-image"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <span className="gallery__overlay-text">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
