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
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80', alt: 'Precision haircut', label: 'Precision Cuts' },
  { src: 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=600&q=80', alt: 'Clean shave', label: 'Clean Shaves' },
  { src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80', alt: 'Gentleman styling', label: "Gentleman's Style" },
  { src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80', alt: 'Modern fade', label: 'Modern Fades' },
  { src: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80', alt: 'Premium products', label: 'Premium Products' },
];

const Gallery: React.FC = () => (
  <section className="gallery" id="gallery">
    <div className="container">
      <h2 className="section-title">Our Work</h2>
      <div className="gold-line" />
      <p className="section-subtitle">A glimpse into the MasterCut experience</p>

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
