import './Testimonials.css';
import { useLanguage } from '../../contexts/LanguageContext';

const NAMES = ['James Whitfield', 'Maria Santos', 'David Chen'];
const INITIALS = ['JW', 'MS', 'DC'];
const STARS = [5, 5, 5];

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="testimonial-card__stars">
    {'★'.repeat(count)}{'☆'.repeat(5 - count)}
  </div>
);

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">{t.testimonials.title}</h2>
        <div className="gold-line" />
        <p className="section-subtitle">{t.testimonials.subtitle}</p>

        <div className="testimonials__grid">
          {t.testimonials.items.map((item, i) => (
            <div className="testimonial-card" key={NAMES[i]}>
              <span className="testimonial-card__quote">&quot;</span>
              <Stars count={STARS[i]} />
              <p className="testimonial-card__text">{item.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{INITIALS[i]}</div>
                <div>
                  <div className="testimonial-card__name">{NAMES[i]}</div>
                  <div className="testimonial-card__role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
