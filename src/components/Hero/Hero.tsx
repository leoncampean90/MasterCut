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
      <span className="hero__badge">Est. 2024 — Premium Grooming</span>

      <h1 className="hero__title">
        <span>Where Tradition</span>
        <span>Meets Style</span>
      </h1>

      <p className="hero__subtitle">
        Experience the art of precision grooming. Crafted cuts, hot towel shaves,
        and a timeless atmosphere designed for the modern gentleman.
      </p>

      <div className="hero__actions">
        <a href="#contact" className="btn-primary">Book Appointment</a>
        <a href="#services" className="btn-outline">Our Services</a>
      </div>
    </div>

    <div className="hero__scroll-indicator">
      <span>Scroll</span>
      <div className="arrow" />
    </div>
  </section>
);

export default Hero;
