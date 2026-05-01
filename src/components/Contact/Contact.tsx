import './Contact.css';
import { useLanguage } from '../../contexts/LanguageContext';

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
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <section className="contact" id="contact">
      <div className="contact__inner">

        <div className="contact__info">
          <div className="contact__info-top">
            <span className="contact__label">{c.label}</span>
            <h2 className="contact__heading">{c.heading1}<br/>{c.heading2}</h2>
            <div className="contact__rule" />
            <p className="contact__lead">{c.lead}</p>
          </div>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconPin /></div>
              <div>
                <div className="contact__detail-label">{c.downtown}</div>
                <div className="contact__detail-value">123 Barber Lane, Downtown District</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconPin /></div>
              <div>
                <div className="contact__detail-label">{c.uptown}</div>
                <div className="contact__detail-value">456 Elegance Ave, Uptown Quarter</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconPhone /></div>
              <div>
                <div className="contact__detail-label">{c.phone}</div>
                <div className="contact__detail-value">+1 (555) 100-2000 / 300-4000</div>
              </div>
            </div>
            <div className="contact__detail">
              <div className="contact__detail-icon"><IconMail /></div>
              <div>
                <div className="contact__detail-label">{c.email}</div>
                <div className="contact__detail-value">hello@mastercut.com</div>
              </div>
            </div>
          </div>

          <div className="contact__hours">
            <div className="contact__hours-head">
              <IconClock />
              <span>{c.hours}</span>
            </div>
            {c.hourRows.map(({ day, time }) => (
              <div className="contact__hours-row" key={day}>
                <span className="day">{day}</span>
                <span className="time">{time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="contact__mero">
          <div className="contact__mero-bg" aria-hidden="true" />
          <div className="contact__mero-inner">

            <div className="contact__mero-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              {c.meroBadge}
            </div>

            <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="contact__mero-logo" aria-label="Book on Mero.ro">
              <svg className="mero-logo__svg" viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="mero">
                <path d="M4 32V14h4l6 10 6-10h4v18h-4V21l-6 10-6-10v11H4Z" fill="white"/>
                <path d="M32 23c0-5.5 3.8-9.5 9-9.5s8.5 3.8 8.5 9v1.5H36.2c.4 2.5 2 4 4.8 4 1.8 0 3.4-.7 4.5-2l2.8 2.5C46.5 31 44 32.5 41 32.5c-5.5 0-9-3.8-9-9.5Zm4.3-1.5h9.2c-.3-2.3-1.8-3.8-4.4-3.8-2.5 0-4.2 1.4-4.8 3.8Z" fill="white"/>
                <path d="M54 32V14h4v3c1.2-2 3-3.5 5.5-3.5.7 0 1.3.1 1.8.3l-.5 4c-.6-.3-1.2-.4-1.8-.4-2.8 0-4.8 2-5 5.5V32h-4Z" fill="white"/>
                <path d="M67 23c0-5.5 4-9.5 9.5-9.5S86 17.5 86 23s-4 9.5-9.5 9.5S67 28.5 67 23Zm4.2 0c0 3.2 2 5.5 5.3 5.5s5.3-2.3 5.3-5.5-2-5.5-5.3-5.5-5.3 2.3-5.3 5.5Z" fill="white"/>
                <circle cx="96" cy="29" r="3" fill="#D4A843"/>
                <text x="103" y="32" fontFamily="Montserrat, sans-serif" fontSize="12" fontWeight="600" fill="rgba(255,255,255,0.5)" letterSpacing="0.5">ro</text>
              </svg>
            </a>

            <p className="contact__mero-desc">{c.meroDesc}</p>

            <div className="contact__mero-features">
              {c.meroFeatures.map((f) => (
                <div className="mero-feature" key={f.title}>
                  <div className="mero-feature__icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                  </div>
                  <div>
                    <strong>{f.title}</strong>
                    <span>{f.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://mero.ro" target="_blank" rel="noopener noreferrer" className="contact__mero-btn">
              <span>{c.meroBtn}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"/>
              </svg>
            </a>

            <p className="contact__mero-note">{c.meroNote}</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
