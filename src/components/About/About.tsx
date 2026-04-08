import './About.css';

const About: React.FC = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about__wrapper">
        {/* Image side – replace URL with your own photo */}
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
            <span className="label">Years of Excellence</span>
          </div>
        </div>

        {/* Text side */}
        <div className="about__text">
          <h2>The MasterCut Story</h2>
          <div className="gold-line" />
          <p>
            Founded with a passion for beauty and wellness, MasterCut is more than a salon —
            it's a complete destination. Our specialists across barber, nails, makeup, cosmetic
            treatments, and massage blend classic techniques with contemporary trends to deliver
            an experience that's as refined as it is relaxing.
          </p>
          <p>
            Every detail matters, from the precision of a fresh haircut to the calm of a deep-tissue
            massage. Visit either of our two locations and leave feeling like the best version of yourself.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="value">8K+</span>
              <span className="label">Happy Clients</span>
            </div>
            <div className="about__stat">
              <span className="value">30+</span>
              <span className="label">Specialists</span>
            </div>
            <div className="about__stat">
              <span className="value">2</span>
              <span className="label">Locations</span>
            </div>
            <div className="about__stat">
              <span className="value">5</span>
              <span className="label">Service Categories</span>
            </div>
          </div>

          <a href="#locations" className="btn-primary">Our Locations</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
