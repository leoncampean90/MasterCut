import { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__wrapper">
          {/* Info */}
          <div className="contact__info">
            <div>
              <h2>Get In Touch</h2>
              <div className="gold-line" />
              <p>
                Ready to experience the MasterCut difference? Book your appointment
                or drop us a message — we'd love to hear from you.
              </p>
            </div>

            <div className="contact__details">
              <div className="contact__detail">
                <div className="contact__detail-icon">📍</div>
                <div>
                  <div className="contact__detail-label">Address</div>
                  <div className="contact__detail-value">123 Barber Lane, Downtown District</div>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">📞</div>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <div className="contact__detail-value">+1 (555) MASTER-CUT</div>
                </div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">✉️</div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <div className="contact__detail-value">hello@mastercut.com</div>
                </div>
              </div>
            </div>

            <div className="contact__hours">
              <h4>Opening Hours</h4>
              {[
                { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
                { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
                { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
              ].map(({ day, time }) => (
                <div className="contact__hours-row" key={day}>
                  <span className="day">{day}</span>
                  <span className="time">{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Book an Appointment</h3>
            <p>Fill in the form and we'll confirm your booking.</p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Classic Haircut</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="beard">Beard Sculpting</option>
                  <option value="royal">The Royal Treatment</option>
                  <option value="color">Hair Coloring</option>
                  <option value="scalp">Scalp Treatment</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Any special requests or preferred date/time?"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-primary">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
