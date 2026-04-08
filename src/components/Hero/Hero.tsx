import './Hero.css';

const Hero: React.FC = () => (
  <section className="hero" id="hero">
    {/* Background image – replace URL with your own photo */}
    <img
      src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=1920&q=80"
      alt="MasterCut barbershop interior"
      className="hero__bg-image"
    />
    <div className="hero__content">
      <span className="hero__badge">Est. 2024 — Beauty & Wellness Studio</span>

      <h1 className="hero__title">
        <span>Your Complete</span>
        <span>Beauty Destination</span>
      </h1>

      <p className="hero__subtitle">
        Barber, nails, makeup, cosmetic treatments &amp; massage — all under one roof.
        Two premium locations designed to make you look and feel your absolute best.
      </p>

      <div className="hero__actions">
        <a href="#contact" className="btn-primary">Book Appointment</a>
        <a href="#services" className="btn-outline">Explore Services</a>
      </div>
    </div>

    <div className="hero__scroll-indicator">
      <span>Scroll</span>
      <div className="arrow" />
    </div>
  </section>
);

export default Hero;
