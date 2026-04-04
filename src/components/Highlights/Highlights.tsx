import './Highlights.css';

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
    title: 'Expert Cuts',
    subtitle: 'Precision & Style',
  },
  {
    src: 'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=600&q=80',
    title: 'Hot Shaves',
    subtitle: 'Traditional Grooming',
  },
  {
    src: 'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&q=80',
    title: 'Beard Care',
    subtitle: 'Sculpted to Perfection',
  },
  {
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80',
    title: 'The Experience',
    subtitle: 'Relax & Refresh',
  },
];

const STATS = [
  { value: '5K+', label: 'Happy Clients' },
  { value: '12', label: 'Expert Barbers' },
  { value: '10+', label: 'Years Experience' },
  { value: '15+', label: 'Awards Won' },
];

const Highlights: React.FC = () => (
  <section className="highlights">
    {/* Image strip */}
    <div className="highlights__strip">
      {IMAGES.map((img) => (
        <div className="highlights__item" key={img.title}>
          <img src={img.src} alt={img.title} loading="lazy" />
          <div className="highlights__item-overlay">
            <div className="highlights__item-text">
              <h4>{img.title}</h4>
              <p>{img.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Stats bar */}
    <div className="highlights__stats">
      {STATS.map((s) => (
        <div className="highlights__stat" key={s.label}>
          <span className="highlights__stat-value">{s.value}</span>
          <span className="highlights__stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Highlights;
