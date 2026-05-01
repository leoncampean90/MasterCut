import { useState } from 'react';
import './Contact.css';

const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact__icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact__icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact__icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
  </svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="contact__icon">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', location: '', date: '', time: '', message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will confirm your appointment shortly.');
    setFormData({ name: '', email: '', phone: '', service: '', location: '', date: '', time: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">

        {/* ── Left info panel ── */}
        <div className="contact__info">
          <div className="contact__info-top">
            <span className="contact__label">Appointments &amp; Enquiries</span>
            <h2 className="contact__heading">Book Your<br/>Experience</h2>
            <div className="contact__rule" />
            <p className="contact__lead">
              Choose your service, pick a location, and tell us your preferred time —
              we'll take care of the rest.
            </p>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconPin /></div>
              <div>
                <div className="contact__detail-label">Downtown</div>
                <div className="contact__detail-value">123 Barber Lane, Downtown District</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconPin /></div>
              <div>
                <div className="contact__detail-label">Uptown</div>
                <div className="contact__detail-value">456 Elegance Ave, Uptown Quarter</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconPhone /></div>
              <div>
                <div className="contact__detail-label">Phone</div>
                <div className="contact__detail-value">+1 (555) 100-2000 / 300-4000</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconMail /></div>
              <div>
                <div className="contact__detail-label">Email</div>
                <div className="contact__detail-value">hello@mastercut.com</div>
              </div>
            </div>
          </div>

          <div className="contact__hours">
            <div className="contact__hours-head">
              <IconClock />
              <span>Opening Hours</span>
            </div>
            {[
              { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
              { day: 'Saturday',        time: '8:00 AM – 6:00 PM' },
              { day: 'Sunday',          time: '10:00 AM – 4:00 PM' },
            ].map(({ day, time }) => (
              <div className="contact__hours-row" key={day}>
                <span className="day">{day}</span>
                <span className="time">{time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right form panel ── */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-header">
            <h3>Book an Appointment</h3>
            <p>Fill in the details below and we'll confirm within 24 hours.</p>
          </div>

          <div className="contact__form-body">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="John Doe"
                  value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="john@example.com"
                  value={formData.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000"
                  value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <select id="location" name="location" value={formData.location}
                  onChange={handleChange} required>
                  <option value="">Select location</option>
                  <option value="downtown">MasterCut Downtown</option>
                  <option value="uptown">MasterCut Uptown</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select id="service" name="service" value={formData.service}
                onChange={handleChange} required>
                <option value="">Select a service</option>
                <optgroup label="Barber">
                  <option value="haircut">Classic Haircut</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="beard">Beard Sculpting</option>
                  <option value="royal">The Royal Treatment</option>
                  <option value="color">Hair Coloring</option>
                  <option value="scalp">Scalp Treatment</option>
                </optgroup>
                <optgroup label="Nails">
                  <option value="manicure">Classic Manicure</option>
                  <option value="gel-nails">Gel Nails</option>
                  <option value="nail-art">Nail Art &amp; Design</option>
                  <option value="pedicure">Spa Pedicure</option>
                  <option value="acrylic">Acrylic Extensions</option>
                  <option value="mani-pedi">Express Mani-Pedi</option>
                </optgroup>
                <optgroup label="Makeup">
                  <option value="bridal">Bridal Makeup</option>
                  <option value="evening">Evening Glam</option>
                  <option value="natural">Natural Everyday Look</option>
                  <option value="lesson">Makeup Lesson</option>
                  <option value="lashes">Lash Extensions</option>
                  <option value="brows">Brow Shaping &amp; Tint</option>
                </optgroup>
                <optgroup label="Cosmetic">
                  <option value="facial">Deep Cleanse Facial</option>
                  <option value="peel">Chemical Peel</option>
                  <option value="microderm">Microdermabrasion</option>
                  <option value="anti-aging">Anti-Aging Treatment</option>
                  <option value="led">LED Light Therapy</option>
                  <option value="hydrating">Hydrating Mask</option>
                </optgroup>
                <optgroup label="Massage">
                  <option value="swedish">Swedish Massage</option>
                  <option value="deep-tissue">Deep Tissue Massage</option>
                  <option value="hot-stone">Hot Stone Therapy</option>
                  <option value="aromatherapy">Aromatherapy Massage</option>
                  <option value="couples">Couples Massage</option>
                  <option value="head-shoulder">Head &amp; Shoulder Relief</option>
                </optgroup>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input id="date" name="date" type="date"
                  value={formData.date} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time</label>
                <select id="time" name="time" value={formData.time}
                  onChange={handleChange} required>
                  <option value="">Select a time slot</option>
                  <optgroup label="Morning">
                    <option value="09:00">9:00 AM</option>
                    <option value="09:30">9:30 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="10:30">10:30 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                  </optgroup>
                  <optgroup label="Afternoon">
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                  </optgroup>
                  <optgroup label="Evening">
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Notes <span className="form-optional">(optional)</span></label>
              <textarea id="message" name="message"
                placeholder="Any special requests, allergies, or preferences..."
                value={formData.message} onChange={handleChange} />
            </div>
          </div>

          <div className="contact__form-footer">
            <button type="submit" className="contact__submit">
              <span>Confirm Booking</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
              </svg>
            </button>
            <p className="contact__disclaimer">We'll confirm your appointment within 24 hours.</p>
          </div>
        </form>

      </div>
    </section>
  );
};

export default Contact;
