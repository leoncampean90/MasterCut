import { useRef, useEffect, useCallback } from 'react';
import './Locations.css';

interface Location {
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  mapUrl: string;
  hours: { day: string; time: string }[];
  services: string[];
}

const LOCATIONS: Location[] = [
  {
    name: 'MasterCut Downtown',
    address: '123 Barber Lane, Downtown District',
    phone: '+1 (555) 100-2000',
    email: 'downtown@mastercut.com',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80',
    mapUrl: 'https://maps.google.com',
    hours: [
      { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
      { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
      { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
    ],
    services: ['Barber', 'Nails', 'Makeup', 'Cosmetic', 'Massage'],
  },
  {
    name: 'MasterCut Uptown',
    address: '456 Elegance Ave, Uptown Quarter',
    phone: '+1 (555) 300-4000',
    email: 'uptown@mastercut.com',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
    mapUrl: 'https://maps.google.com',
    hours: [
      { day: 'Monday – Friday', time: '10:00 AM – 9:00 PM' },
      { day: 'Saturday', time: '9:00 AM – 7:00 PM' },
      { day: 'Sunday', time: '10:00 AM – 5:00 PM' },
    ],
    services: ['Barber', 'Nails', 'Makeup', 'Cosmetic', 'Massage'],
  },
];

/* ── Scroll-reveal hook (bidirectional) ── */
function useReveal() {
  const refs = useRef<(HTMLElement | null)[]>([]);
  let idx = 0;

  const setRef = useCallback(
    () => {
      const currentIdx = idx++;
      return (el: HTMLElement | null) => {
        refs.current[currentIdx] = el;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('revealed');
          } else {
            (entry.target as HTMLElement).classList.remove('revealed');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    );
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  });

  return setRef;
}

const Locations: React.FC = () => {
  const ref = useReveal();
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-driven cross-fade: as panel[i] enters, fade its photo IN
  // while simultaneously fading panel[i-1]'s photo and text OUT
  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      panelRefs.current.forEach((panel, i) => {
        if (i === 0 || !panel) return;
        const prevPanel = panelRefs.current[i - 1];
        if (!prevPanel) return;

        // 0 = panel[i] just entered bottom of screen, 1 = reached top
        const top = panel.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, 1 - top / vh));

        // Fade IN current panel's photo
        const curBgWrap = panel.querySelector<HTMLDivElement>('.loc-panel__bg-wrap');
        if (curBgWrap) curBgWrap.style.opacity = String(progress);

        // Fade OUT previous panel's photo (brightness) and text
        const prevBg = prevPanel.querySelector<HTMLImageElement>('.loc-panel__bg');
        const prevContent = prevPanel.querySelector<HTMLDivElement>('.loc-panel__scroll-content');
        if (prevBg) prevBg.style.filter = `brightness(${0.35 * (1 - progress)}) saturate(0.85)`;
        if (prevContent) prevContent.style.opacity = String(1 - progress);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="locations" id="locations">
      {/* Section header */}
      <div className="container locations__header">
        <h2 className="section-title">Our Locations</h2>
        <div className="gold-line" />
        <p className="section-subtitle">
          Two premium studios — choose the one closest to you
        </p>
      </div>

      {/* Full-width location panels */}
      {LOCATIONS.map((loc, i) => (
        <div
          className="loc-panel"
          key={loc.name}
          ref={(el: HTMLDivElement | null) => { panelRefs.current[i] = el; }}
        >
          {/* Sticky wide background photo */}
          <div className="loc-panel__bg-wrap">
            <img
              src={loc.image}
              alt={loc.name}
              className="loc-panel__bg"
              loading="lazy"
            />
            <div className="loc-panel__bg-overlay" />
          </div>

          {/* Scrollable content that appears progressively */}
          <div className="loc-panel__scroll-content">
            {/* Row 1 — Name */}
            <div className="loc-panel__block" ref={ref()}>
              <h3 className="loc-panel__name">{loc.name}</h3>
            </div>

            {/* Row 2 — Contact details */}
            <div className="loc-panel__block" ref={ref()}>
              <div className="loc-panel__details">
                <div className="loc-panel__detail">
                  <span className="loc-panel__icon">📍</span>
                  <span>{loc.address}</span>
                </div>
                <div className="loc-panel__detail">
                  <span className="loc-panel__icon">📞</span>
                  <span>{loc.phone}</span>
                </div>
                <div className="loc-panel__detail">
                  <span className="loc-panel__icon">✉️</span>
                  <span>{loc.email}</span>
                </div>
              </div>
            </div>

            {/* Row 3 — Opening hours */}
            <div className="loc-panel__block" ref={ref()}>
              <h4 className="loc-panel__sub-title">Opening Hours</h4>
              <div className="loc-panel__hours">
                {loc.hours.map(({ day, time }) => (
                  <div className="loc-panel__hours-row" key={day}>
                    <span className="day">{day}</span>
                    <span className="time">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 4 — Services */}
            <div className="loc-panel__block" ref={ref()}>
              <h4 className="loc-panel__sub-title">Available Services</h4>
              <div className="loc-panel__tags">
                {loc.services.map((s) => (
                  <span className="loc-panel__tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            {/* Row 5 — Actions */}
            <div className="loc-panel__block" ref={ref()}>
              <div className="loc-panel__actions">
                <a href="#contact" className="btn-primary">Book Here</a>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Locations;
