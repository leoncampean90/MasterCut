import './Team.css';
import { useLanguage } from '../../contexts/LanguageContext';

const TEAM_NAMES = ['James Carter', 'Marcus Thompson', 'Sofia Ramirez', 'Elena Vasquez', 'Dr. Anya Petrova', 'Liam Chen'];
const TEAM_IMAGES = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
];
const TEAM_CATEGORIES = ['Barber', 'Barber', 'Unghii', 'Machiaj', 'Cosmetic', 'Masaj'];

const Team: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="team" id="team">
      <div className="container">
        <h2 className="section-title">{t.team.title}</h2>
        <div className="gold-line" />
        <p className="section-subtitle">{t.team.subtitle}</p>

        <div className="team__grid">
          {t.team.members.map((member, i) => (
            <div className="team-card" key={TEAM_NAMES[i]}>
              <div className="team-card__image-wrap">
                <img
                  src={TEAM_IMAGES[i]}
                  alt={TEAM_NAMES[i]}
                  className="team-card__image"
                  loading="lazy"
                />
                <span className="team-card__badge">{TEAM_CATEGORIES[i]}</span>
              </div>
              <div className="team-card__info">
                <h3 className="team-card__name">{TEAM_NAMES[i]}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
