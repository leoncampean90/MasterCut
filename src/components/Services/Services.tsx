import './Services.css';

interface Service {
  image: string;
  title: string;
  description: string;
  price: string;
}

const SERVICES: Service[] = [
  {
    image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80',
    title: 'Classic Haircut',
    description: 'Precision cut tailored to your face shape and personal style, finished with styling.',
    price: '$35',
  },
  {
    image: 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=400&q=80',
    title: 'Hot Towel Shave',
    description: 'Traditional straight-razor shave with hot towel treatment and premium aftercare.',
    price: '$30',
  },
  {
    image: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&q=80',
    title: 'Beard Sculpting',
    description: 'Expert beard trimming, shaping, and conditioning to keep your beard looking sharp.',
    price: '$25',
  },
  {
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80',
    title: 'The Royal Treatment',
    description: 'Full haircut, hot shave, beard trim, scalp massage, and facial – the complete experience.',
    price: '$85',
  },
  {
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80',
    title: 'Hair Coloring',
    description: 'Professional coloring, highlights, or grey blending with top-tier products.',
    price: '$50+',
  },
  {
    image: 'https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=400&q=80',
    title: 'Scalp Treatment',
    description: 'Revitalizing scalp therapy with essential oils and deep conditioning massage.',
    price: '$40',
  },
];

const Services: React.FC = () => (
  <section className="services" id="services">
    <div className="container">
      <h2 className="section-title">Our Services</h2>
      <div className="gold-line" />
      <p className="section-subtitle">
        Crafted experiences for the modern gentleman
      </p>

      <div className="services__grid">
        {SERVICES.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-card__image-wrap">
              <img src={s.image} alt={s.title} className="service-card__image" loading="lazy" />
            </div>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.description}</p>
            <span className="service-card__price">{s.price}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
