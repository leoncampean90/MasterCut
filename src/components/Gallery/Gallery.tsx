import './Gallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

/*
 * Replace the URLs below with your own barber / hairstyling photos.
 */
const GALLERY_ITEMS: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80', alt: 'Classic barbering', label: 'Classic Barbering' },
  { src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80', alt: 'Nail artistry', label: 'Nail Artistry' },
  { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80', alt: 'Makeup artistry', label: 'Makeup Artistry' },
  { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80', alt: 'Cosmetic treatment', label: 'Cosmetic Glow' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80', alt: 'Relaxing massage', label: 'Relaxing Massage' },
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80', alt: 'Premium studio', label: 'Premium Studio' },
];

const Gallery: React.FC = () => (
  <section className="gallery" id="gallery">
    <div className="container">
      <h2 className="section-title">Our Work</h2>
      <div className="gold-line" />
      <p className="section-subtitle">A glimpse into the MasterCut experience across all our services</p>

      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <div className="gallery__item" key={item.label}>
            <img
              src={item.src}
              alt={item.alt}
              className="gallery__item-image"
              loading="lazy"
            />
            <div className="gallery__overlay">
              <span className="gallery__overlay-text">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
