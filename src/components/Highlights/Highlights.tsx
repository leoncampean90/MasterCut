import { useRef, useState, useEffect, useCallback } from 'react';
import './Highlights.css';

/* ── Carousel slides ── */
const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80',
    title: 'Barber Studio',
    subtitle: 'Precision Cuts & Grooming',
    category: '01',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
    title: 'Nail Artistry',
    subtitle: 'Manicures & Pedicures',
    category: '02',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80',
    title: 'Makeup',
    subtitle: 'Looks That Wow',
    category: '03',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80',
    title: 'Cosmetic Care',
    subtitle: 'Radiant & Youthful',
    category: '04',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
    title: 'Massage',
    subtitle: 'Relax & Recharge',
    category: '05',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    title: 'Bridal & Events',
    subtitle: 'Your Special Day',
    category: '06',
  },
  {
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80',
    title: 'Hot Stone Therapy',
    subtitle: 'Deep Relaxation',
    category: '07',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
    title: 'Spa Luxury',
    subtitle: 'Total Wellness',
    category: '08',
  },
];

const STATS = [
  { value: '8K+', label: 'Happy Clients' },
  { value: '30+', label: 'Specialists' },
  { value: '5',   label: 'Service Categories' },
  { value: '2',   label: 'Locations' },
];

const Highlights: React.FC = () => {
  const trackRef    = useRef<HTMLDivElement>(null);
  const offsetRef   = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const dragStart   = useRef({ x: 0, offset: 0 });
  const singleSetWidth = useRef(0);
  const hasDragged  = useRef(false);

  /* duplicate slides for seamless loop */
  const allSlides = [...SLIDES, ...SLIDES, ...SLIDES];

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const children = trackRef.current.children;
    const oneSet = SLIDES.length;
    const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
    let w = 0;
    for (let i = 0; i < oneSet && i < children.length; i++) {
      w += (children[i] as HTMLElement).offsetWidth;
      if (i < oneSet - 1) w += gap;
    }
    singleSetWidth.current = w + gap;
    /* start offset at -1 set so centre set is visible */
    if (offsetRef.current === 0) {
      offsetRef.current = -singleSetWidth.current;
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
      }
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const clampOffset = () => {
    if (!singleSetWidth.current) return;
    while (offsetRef.current > 0) offsetRef.current -= singleSetWidth.current;
    while (offsetRef.current < -singleSetWidth.current * 2) offsetRef.current += singleSetWidth.current;
  };

  const applyOffset = (clientX: number) => {
    const dx = clientX - dragStart.current.x;
    offsetRef.current = dragStart.current.offset + dx;
    clampOffset();
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  };

  const dismissHint = () => {
    if (!hasDragged.current) {
      hasDragged.current = true;
      setHintVisible(false);
    }
  };

  /* ── Mouse ── */
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, offset: offsetRef.current };
    dismissHint();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    applyOffset(e.clientX);
  };

  const onMouseUp = () => setIsDragging(false);

  /* ── Touch ── */
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.touches[0].clientX, offset: offsetRef.current };
    dismissHint();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    applyOffset(e.touches[0].clientX);
  };

  const onTouchEnd = () => setIsDragging(false);

  return (
    <section className="highlights">
      {/* Drag-to-explore carousel */}
      <div
        className={`carousel ${isDragging ? 'grabbing' : ''}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="carousel__track" ref={trackRef}>
          {allSlides.map((slide, i) => (
            <div className="carousel__slide" key={`${slide.title}-${i}`}>
              <img src={slide.src} alt={slide.title} loading="lazy" draggable={false} />
              <div className="carousel__overlay">
                <span className="carousel__category">{slide.category}</span>
                <div className="carousel__info">
                  <h4 className="carousel__title">{slide.title}</h4>
                  <p className="carousel__subtitle">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Drag hint */}
        <div className={`carousel__drag-hint ${hintVisible ? '' : 'carousel__drag-hint--hidden'}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M5 12l4-4M5 12l4 4M19 12l-4-4M19 12l-4 4" />
          </svg>
          <span>Drag to explore</span>
        </div>

        <div className="carousel__fade carousel__fade--left" />
        <div className="carousel__fade carousel__fade--right" />
      </div>

      {/* Stats bar */}
      <div className="highlights__stats">
        {STATS.map((s) => (
          <div className="highlights__stat" key={s.label}>
            <span className="highlights__stat-value">{s.value}</span>
            <span className="highlights__stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
