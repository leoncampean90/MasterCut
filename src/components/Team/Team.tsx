import './Team.css';

interface TeamMember {
  name: string;
  role: string;
  category: string;
  bio: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'James Carter',
    role: 'Master Barber',
    category: 'Barber',
    bio: 'Over 15 years of experience crafting classic and modern styles.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
  },
  {
    name: 'Marcus Thompson',
    role: 'Senior Stylist',
    category: 'Barber',
    bio: 'Specialist in fades, tapers, and contemporary textured cuts.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80',
  },
  {
    name: 'Sofia Ramirez',
    role: 'Nail Artist',
    category: 'Nails',
    bio: 'Creative nail designer specializing in intricate art and gel extensions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80',
  },
  {
    name: 'Elena Vasquez',
    role: 'Makeup Artist',
    category: 'Makeup',
    bio: 'Bridal and editorial specialist with an eye for enhancing natural beauty.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80',
  },
  {
    name: 'Dr. Anya Petrova',
    role: 'Cosmetic Specialist',
    category: 'Cosmetic',
    bio: 'Certified aesthetician specialising in facials, peels, and skin rejuvenation.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80',
  },
  {
    name: 'Liam Chen',
    role: 'Massage Therapist',
    category: 'Massage',
    bio: 'Licensed therapist trained in Swedish, deep tissue, and hot stone techniques.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80',
  },
];

const Team: React.FC = () => (
  <section className="team" id="team">
    <div className="container">
      <h2 className="section-title">Meet Our Specialists</h2>
      <div className="gold-line" />
      <p className="section-subtitle">Talented professionals across every discipline</p>

      <div className="team__grid">
        {TEAM_MEMBERS.map((member) => (
          <div className="team-card" key={member.name}>
            <div className="team-card__image-wrap">
              <img
                src={member.image}
                alt={member.name}
                className="team-card__image"
                loading="lazy"
              />
              <span className="team-card__badge">{member.category}</span>
            </div>
            <div className="team-card__info">
              <h3 className="team-card__name">{member.name}</h3>
              <p className="team-card__role">{member.role}</p>
              <p className="team-card__bio">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
