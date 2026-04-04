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
            Founded with a passion for timeless grooming, MasterCut is more than a barbershop —
            it's a destination. Our master barbers blend classic techniques with contemporary trends
            to deliver an experience that's as refined as it is relaxing.
          </p>
          <p>
            Every detail matters, from the warm towel on your face to the final touch of styling.
            Step into our shop and leave feeling like the best version of yourself.
          </p>

          <div className="about__stats">
            <div className="about__stat">
              <span className="value">5K+</span>
              <span className="label">Happy Clients</span>
            </div>
            <div className="about__stat">
              <span className="value">12</span>
              <span className="label">Expert Barbers</span>
            </div>
            <div className="about__stat">
              <span className="value">15+</span>
              <span className="label">Awards Won</span>
            </div>
          </div>

          <a href="#contact" className="btn-primary">Visit Us</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;
