import { useState, useEffect, useRef, useCallback } from 'react';
import './Services.css';

interface Service {
  image: string;
  title: string;
  description: string;
  price: string;
}

interface ServiceCategory {
  key: string;
  label: string;
  photo: string;          // hero photo for the category button
  description: string;
  services: Service[];
}

const CATEGORIES: ServiceCategory[] = [
  {
    key: 'barber',
    label: 'Barber',
    photo: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80',
    description: 'Classic cuts and grooming for the modern gentleman',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80',
        title: 'Classic Haircut',
        description: 'Precision cut tailored to your face shape and personal style, finished with styling.',
        price: '$35',
      },
      {
        image: 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=900&q=80',
        title: 'Hot Towel Shave',
        description: 'Traditional straight-razor shave with hot towel treatment and premium aftercare.',
        price: '$30',
      },
      {
        image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=900&q=80',
        title: 'Beard Sculpting',
        description: 'Expert beard trimming, shaping, and conditioning to keep your beard looking sharp.',
        price: '$25',
      },
      {
        image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=80',
        title: 'The Royal Treatment',
        description: 'Full haircut, hot shave, beard trim, scalp massage, and facial – the complete experience.',
        price: '$85',
      },
      {
        image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80',
        title: 'Hair Coloring',
        description: 'Professional coloring, highlights, or grey blending with top-tier products.',
        price: '$50+',
      },
      {
        image: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=900&q=80',
        title: 'Scalp Treatment',
        description: 'Revitalizing scalp therapy with essential oils and deep conditioning massage.',
        price: '$40',
      },
    ],
  },
  {
    key: 'nails',
    label: 'Nails',
    photo: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    description: 'Professional nail care, from classic manicures to artistic designs',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
        title: 'Classic Manicure',
        description: 'Nail shaping, cuticle care, hand massage, and polish for perfectly groomed hands.',
        price: '$25',
      },
      {
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=80',
        title: 'Gel Nails',
        description: 'Long-lasting gel polish with chip-free shine that lasts up to three weeks.',
        price: '$40',
      },
      {
        image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=900&q=80',
        title: 'Nail Art & Design',
        description: 'Custom hand-painted designs, rhinestones, and creative nail art tailored to you.',
        price: '$55+',
      },
      {
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=900&q=80',
        title: 'Spa Pedicure',
        description: 'Luxurious foot soak, exfoliation, massage, and polish for ultimate relaxation.',
        price: '$45',
      },
      {
        image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80',
        title: 'Acrylic Extensions',
        description: 'Durable, sculpted acrylic nail extensions with your choice of length and shape.',
        price: '$60',
      },
      {
        image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
        title: 'Express Mani-Pedi',
        description: 'Quick refresh for hands and feet — perfect for a lunch-break pampering session.',
        price: '$35',
      },
    ],
  },
  {
    key: 'makeup',
    label: 'Makeup',
    photo: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    description: 'Professional makeup artistry for every occasion',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80',
        title: 'Bridal Makeup',
        description: 'Stunning, long-lasting bridal look with trial session and day-of application.',
        price: '$150',
      },
      {
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
        title: 'Evening Glam',
        description: 'Bold, camera-ready makeup perfect for galas, parties, and special nights out.',
        price: '$80',
      },
      {
        image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=900&q=80',
        title: 'Natural Everyday Look',
        description: 'Subtle, enhancing makeup that highlights your features with a fresh, dewy finish.',
        price: '$55',
      },
      {
        image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
        title: 'Makeup Lesson',
        description: 'One-on-one tutorial tailored to your face shape, skin type, and personal style.',
        price: '$90',
      },
      {
        image: 'https://images.unsplash.com/photo-1457972729786-0411a3b2b626?w=900&q=80',
        title: 'Lash Extensions',
        description: 'Dramatic or natural lash extensions applied individually for a seamless look.',
        price: '$70+',
      },
      {
        image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&q=80',
        title: 'Brow Shaping & Tint',
        description: 'Precision brow shaping with optional tinting for defined, fuller-looking brows.',
        price: '$35',
      },
    ],
  },
  {
    key: 'cosmetic',
    label: 'Cosmetic',
    photo: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
    description: 'Advanced aesthetic treatments for radiant, youthful skin',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80',
        title: 'Deep Cleanse Facial',
        description: 'Professional deep cleansing, extraction, and hydration for clear, glowing skin.',
        price: '$65',
      },
      {
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80',
        title: 'Chemical Peel',
        description: 'Controlled exfoliation to reduce fine lines, acne scars, and uneven skin tone.',
        price: '$85',
      },
      {
        image: 'https://images.unsplash.com/photo-1612908689090-518a7ffa0891?w=900&q=80',
        title: 'Microdermabrasion',
        description: 'Non-invasive skin resurfacing that reveals smoother, brighter skin underneath.',
        price: '$95',
      },
      {
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80',
        title: 'Anti-Aging Treatment',
        description: 'Targeted treatment using serums and advanced techniques to reduce signs of aging.',
        price: '$120',
      },
      {
        image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=900&q=80',
        title: 'LED Light Therapy',
        description: 'Collagen-boosting light therapy that improves skin texture and reduces redness.',
        price: '$75',
      },
      {
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=900&q=80',
        title: 'Hydrating Mask',
        description: 'Intensive moisture infusion with hyaluronic acid for plump, dewy, radiant skin.',
        price: '$50',
      },
    ],
  },
  {
    key: 'massage',
    label: 'Massage',
    photo: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
    description: 'Therapeutic and relaxation massage for body and mind',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
        title: 'Swedish Massage',
        description: 'Classic full-body relaxation massage with long, flowing strokes to release tension.',
        price: '$70',
      },
      {
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80',
        title: 'Deep Tissue Massage',
        description: 'Intense pressure targeting deep muscle layers to relieve chronic pain and stiffness.',
        price: '$85',
      },
      {
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80',
        title: 'Hot Stone Therapy',
        description: 'Heated basalt stones placed on key points to melt away stress and muscle tension.',
        price: '$95',
      },
      {
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbec6b?w=900&q=80',
        title: 'Aromatherapy Massage',
        description: 'Essential oil-infused massage combining scent therapy with gentle, soothing strokes.',
        price: '$80',
      },
      {
        image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&q=80',
        title: 'Couples Massage',
        description: 'Side-by-side relaxation for two — the perfect shared experience for couples.',
        price: '$140',
      },
      {
        image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=900&q=80',
        title: 'Head & Shoulder Relief',
        description: 'Focused tension release for head, neck, and shoulders — ideal for desk workers.',
        price: '$45',
      },
    ],
  },
];

/* ── Scroll-reveal hook ── */
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

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });

  return setRef;
}

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const category = activeCategory !== null ? CATEGORIES[activeCategory] : null;
  const setRef = useRevealOnScroll();

  const handleSelect = (i: number) => {
    setActiveCategory(i);
  };

  const handleBack = () => {
    setActiveCategory(null);
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="gold-line" />
        <p className="section-subtitle">
          Choose a category to explore our treatments
        </p>

        {/* ── Photo Buttons (category picker) ── */}
        {activeCategory === null && (
          <div className="services__picker">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.key}
                className="services__photo-btn"
                onClick={() => handleSelect(i)}
              >
                <img
                  src={cat.photo}
                  alt={cat.label}
                  className="services__photo-btn-img"
                  loading="lazy"
                />
                <div className="services__photo-btn-overlay">
                  <span className="services__photo-btn-label">{cat.label}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* ── Detail header (inside container) ── */}
        {category && (
          <div className="services__detail-top">
            <button className="services__back" onClick={handleBack}>
              <span className="services__back-arrow">←</span>
              All Categories
            </button>

            <div className="services__detail-header">
              <h3 className="services__detail-title">{category.label}</h3>
              <p className="services__detail-desc">{category.description}</p>
            </div>
          </div>
        )}
      </div>

      {/* ── Full-width showcase cards (outside container) ── */}
      {category && (
        <div className="services__showcase">
          {category.services.map((s, i) => (
            <div
              className="showcase-card"
              key={s.title}
              ref={setRef(i)}
            >
              <img src={s.image} alt={s.title} className="showcase-card__bg" loading="lazy" />
              <div className="showcase-card__overlay" />
              <div className={`showcase-card__content ${i % 2 === 0 ? 'align-left' : 'align-right'}`}>
                <span className="showcase-card__price">{s.price}</span>
                <h4 className="showcase-card__title">{s.title}</h4>
                <p className="showcase-card__desc">{s.description}</p>
                <a href="#contact" className="btn-primary showcase-card__book">Book Now</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
