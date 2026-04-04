import './Testimonials.css';

interface Testimonial {
  name: string;
  initials: string;
  role: string;
  stars: number;
  text: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'James Whitfield',
    initials: 'JW',
    role: 'Regular Client',
    stars: 5,
    text: 'MasterCut is in a league of its own. The attention to detail and the atmosphere make every visit a genuine experience. Wouldn\'t go anywhere else.',
  },
  {
    name: 'David Chen',
    initials: 'DC',
    role: 'Client since 2022',
    stars: 5,
    text: 'From the moment you walk in, you know you\'re in good hands. The barbers here are true craftsmen – every cut is a work of art.',
  },
  {
    name: 'Marcus Rivera',
    initials: 'MR',
    role: 'VIP Member',
    stars: 5,
    text: 'The Royal Treatment package is worth every penny. Hot towel shave, perfect fade, and I leave looking and feeling like a million bucks.',
  },
];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="testimonial-card__stars">
    {'★'.repeat(count)}{'☆'.repeat(5 - count)}
  </div>
);

const Testimonials: React.FC = () => (
  <section className="testimonials" id="testimonials">
    <div className="container">
      <h2 className="section-title">What Clients Say</h2>
      <div className="gold-line" />
      <p className="section-subtitle">Real reviews from our valued patrons</p>

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t) => (
          <div className="testimonial-card" key={t.name}>
            <span className="testimonial-card__quote">"</span>
            <Stars count={t.stars} />
            <p className="testimonial-card__text">{t.text}</p>
            <div className="testimonial-card__author">
              <div className="testimonial-card__avatar">{t.initials}</div>
              <div>
                <div className="testimonial-card__name">{t.name}</div>
                <div className="testimonial-card__role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
