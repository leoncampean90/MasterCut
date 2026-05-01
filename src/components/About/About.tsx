import './About.css';
import { useLanguage } from '../../contexts/LanguageContext';

const STAT_VALUES = ['8K+', '30+', '2', '5'];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__image-block">
            <div className="about__image-placeholder">
              <img
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80"
                alt="MasterCut barber at work"
                className="about__image"
              />
            </div>
            <div className="about__experience-badge">
              <span className="number">10+</span>
              <span className="label">{t.about.experienceBadge}</span>
            </div>
          </div>

          <div className="about__text">
            <h2>{t.about.title}</h2>
            <div className="gold-line" />
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>

            <div className="about__stats">
              {t.about.stats.map((stat, i) => (
                <div className="about__stat" key={i}>
                  <span className="value">{STAT_VALUES[i]}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>

            <a href="#locations" className="btn-primary">{t.about.locationsBtn}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
