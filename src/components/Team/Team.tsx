import './Team.css';

interface Barber {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const BARBERS: Barber[] = [
  {
    name: 'James Carter',
    role: 'Master Barber',
    bio: 'Over 15 years of experience crafting classic and modern styles.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    name: 'Marcus Thompson',
    role: 'Senior Stylist',
    bio: 'Specialist in fades, tapers, and contemporary textured cuts.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  },
  {
    name: 'David Kim',
    role: 'Beard Specialist',
    bio: 'Expert in beard sculpting, hot towel shaves, and facial grooming.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
  },
  {
    name: 'Andre Williams',
    role: 'Color Expert',
    bio: 'Creative visionary specializing in color, highlights, and transformations.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80',
  },
];

const Team: React.FC = () => (
  <section className="team" id="team">
    <div className="container">
      <h2 className="section-title">Meet Our Barbers</h2>
      <div className="gold-line" />
      <p className="section-subtitle">The craftsmen behind every perfect cut</p>

      <div className="team__grid">
        {BARBERS.map((barber) => (
          <div className="team-card" key={barber.name}>
            <div className="team-card__image-wrap">
              <img
                src={barber.image}
                alt={barber.name}
                className="team-card__image"
                loading="lazy"
              />
            </div>
            <div className="team-card__info">
              <h3 className="team-card__name">{barber.name}</h3>
              <p className="team-card__role">{barber.role}</p>
              <p className="team-card__bio">{barber.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
