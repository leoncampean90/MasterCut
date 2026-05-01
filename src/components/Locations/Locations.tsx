import { useRef, useEffect, useCallback, useState } from 'react';
import './Locations.css';
import { useLanguage } from '../../contexts/LanguageContext';

interface Location {
  name: string;
  address: string;
  phone: string;
  email: string;
  image: string;
  mapUrl: string;
  hours: { day: string; time: string }[];
  services: string[];
  about: string;
  amenities: string[];
  gallery: { src: string; caption: string }[];
}

/* Static (language-independent) data */
const LOCATION_STATIC = [
  {
    name: 'MasterCut Downtown',
    address: '123 Barber Lane, Downtown District',
    phone: '+1 (555) 100-2000',
    email: 'downtown@mastercut.com',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80',
    mapUrl: 'https://maps.google.com',
    gallerySrcs: [
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80',
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&q=80',
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=80',
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80',
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
    ],
  },
  {
    name: 'MasterCut Uptown',
    address: '456 Elegance Ave, Uptown Quarter',
    phone: '+1 (555) 300-4000',
    email: 'uptown@mastercut.com',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
    mapUrl: 'https://maps.google.com',
    gallerySrcs: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
      'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80',
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80',
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=80',
      'https://images.unsplash.com/photo-1593702288056-7927b442d0fa?w=900&q=80',
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbec6b?w=900&q=80',
    ],
  },
] as const;

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
  const { t } = useLanguage();
  const lc = t.locations;

  const LOCATIONS: Location[] = LOCATION_STATIC.map((s, i) => {
    const td = lc.locationData[i];
    return {
      name: s.name,
      address: s.address,
      phone: s.phone,
      email: s.email,
      image: s.image,
      mapUrl: s.mapUrl,
      about: td.about,
      amenities: [...td.amenities],
      hours: td.hours.map((h) => ({ ...h })),
      services: [...td.services],
      gallery: s.gallerySrcs.map((src, j) => ({ src, caption: td.galleryCaptions[j] })),
    };
  });

  const ref = useReveal();
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeLocation, setActiveLocation] = useState<Location | null>(null);
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const openLocation = (loc: Location) => {
    setActiveLocation(loc);
    setActivePhoto(0);
    document.body.style.overflow = 'hidden';
  };

  const closeLocation = () => {
    setActiveLocation(null);
    document.body.style.overflow = '';
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLocation(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <h2 className="section-title">{lc.sectionTitle}</h2>
        <div className="gold-line" />
        <p className="section-subtitle">{lc.sectionSubtitle}</p>
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
                  <svg className="loc-panel__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                  <span>{loc.address}</span>
                </div>
                <div className="loc-panel__detail">
                  <svg className="loc-panel__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
                  <span>{loc.phone}</span>
                </div>
                <div className="loc-panel__detail">
                  <svg className="loc-panel__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                  <span>{loc.email}</span>
                </div>
              </div>
            </div>

            {/* Row 3 — Opening hours */}
            <div className="loc-panel__block" ref={ref()}>
              <h4 className="loc-panel__sub-title">{lc.hoursTitle}</h4>
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
              <h4 className="loc-panel__sub-title">{lc.servicesTitle}</h4>
              <div className="loc-panel__tags">
                {loc.services.map((s) => (
                  <span className="loc-panel__tag" key={s}>{s}</span>
                ))}
              </div>
            </div>

            {/* Row 5 — Actions */}
            <div className="loc-panel__block" ref={ref()}>
              <div className="loc-panel__actions">
                <button
                  className="btn-primary"
                  onClick={() => openLocation(loc)}
                >
                  {lc.exploreBtn}
                </button>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  {lc.getDirections}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── Location Explorer Modal ── */}
      {activeLocation && (
        <div
          className={`loc-modal ${activeLocation ? 'loc-modal--open' : ''}`}
          onClick={(e) => { if (e.target === e.currentTarget) closeLocation(); }}
        >
          <div className="loc-modal__panel">
            {/* Header */}
            <div className="loc-modal__header">
              <div>
                <p className="loc-modal__label">MasterCut Studio</p>
                <h2 className="loc-modal__title">{activeLocation.name}</h2>
              </div>
              <button className="loc-modal__close" onClick={closeLocation} aria-label="Close">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="loc-modal__body">
              {/* ── Main photo + gallery ── */}
              <div className="loc-modal__gallery">
                <div className="loc-modal__gallery-main">
                  <img
                    src={activeLocation.gallery[activePhoto].src}
                    alt={activeLocation.gallery[activePhoto].caption}
                    className="loc-modal__gallery-main-img"
                  />
                  <span className="loc-modal__gallery-caption">
                    {activeLocation.gallery[activePhoto].caption}
                  </span>
                  <span className="loc-modal__gallery-counter">
                    {activePhoto + 1} / {activeLocation.gallery.length}
                  </span>
                  <button
                    className="loc-modal__gallery-nav loc-modal__gallery-nav--prev"
                    onClick={() => setActivePhoto(p => (p - 1 + activeLocation.gallery.length) % activeLocation.gallery.length)}
                    aria-label="Previous"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/></svg>
                  </button>
                  <button
                    className="loc-modal__gallery-nav loc-modal__gallery-nav--next"
                    onClick={() => setActivePhoto(p => (p + 1) % activeLocation.gallery.length)}
                    aria-label="Next"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/></svg>
                  </button>
                </div>

                {/* Thumbnail strip */}
                <div className="loc-modal__thumbs">
                  {activeLocation.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      className={`loc-modal__thumb ${idx === activePhoto ? 'loc-modal__thumb--active' : ''}`}
                      onClick={() => setActivePhoto(idx)}
                    >
                      <img src={img.src} alt={img.caption} loading="lazy" />
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Details column ── */}
              <div className="loc-modal__details">
                {/* About */}
                <div className="loc-modal__section">
                  <h4 className="loc-modal__section-title">{lc.aboutTitle}</h4>
                  <p className="loc-modal__about">{activeLocation.about}</p>
                </div>

                {/* Contact */}
                <div className="loc-modal__section">
                  <h4 className="loc-modal__section-title">{lc.contactTitle}</h4>
                  <div className="loc-modal__contacts">
                    <div className="loc-modal__contact-row">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                      <span>{activeLocation.address}</span>
                    </div>
                    <div className="loc-modal__contact-row">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
                      <span>{activeLocation.phone}</span>
                    </div>
                    <div className="loc-modal__contact-row">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                      <span>{activeLocation.email}</span>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="loc-modal__section">
                  <h4 className="loc-modal__section-title">{lc.hoursTitle}</h4>
                  <div className="loc-modal__hours">
                    {activeLocation.hours.map(({ day, time }) => (
                      <div className="loc-modal__hours-row" key={day}>
                        <span>{day}</span>
                        <span className="loc-modal__hours-time">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="loc-modal__section">
                  <h4 className="loc-modal__section-title">{lc.amenitiesTitle}</h4>
                  <div className="loc-modal__amenities">
                    {activeLocation.amenities.map((a) => (
                      <span className="loc-modal__amenity" key={a}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="loc-modal__section">
                  <h4 className="loc-modal__section-title">{lc.servicesTitle}</h4>
                  <div className="loc-modal__tags">
                    {activeLocation.services.map((s) => (
                      <span className="loc-panel__tag" key={s}>{s}</span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="loc-modal__cta">
                  <a
                    href="https://mero.ro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {lc.modalBookBtn}
                  </a>
                  <a
                    href={activeLocation.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    {lc.getDirections}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Locations;
