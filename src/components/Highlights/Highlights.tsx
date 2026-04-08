import { useRef, useState, useEffect, useCallback } from 'react';
import './Highlights.css';

/* ── Carousel slides ── */
const SLIDES = [
  {
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=80',
    title: 'Barber Studio',
    subtitle: 'Precision Cuts & Grooming',
    accent: '✂️',
  },
  {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80',
    title: 'Nail Artistry',
    subtitle: 'Manicures & Pedicures',
    accent: '💅',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80',
    title: 'Makeup',
    subtitle: 'Looks That Wow',
    accent: '💄',
  },
  {
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=80',
    title: 'Cosmetic Care',
    subtitle: 'Radiant & Youthful',
    accent: '✨',
  },
  {
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80',
    title: 'Massage',
    subtitle: 'Relax & Recharge',
    accent: '💆',
  },
  {
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    title: 'Bridal & Events',
    subtitle: 'Your Special Day',
    accent: '👰',
  },
  {
    src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80',
    title: 'Hot Stone Therapy',
    subtitle: 'Deep Relaxation',
    accent: '🪨',
  },
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&q=80',
    title: 'Spa Luxury',
    subtitle: 'Total Wellness',
    accent: '🧖',
  },
];

const STATS = [
  { value: '8K+', label: 'Happy Clients' },
  { value: '30+', label: 'Specialists' },
  { value: '5', label: 'Service Categories' },
  { value: '2', label: 'Locations' },
];

const AUTO_SPEED = 0.5;          // px per frame
const AUTO_RESUME_DELAY = 3000;  // ms after release

const Highlights: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const autoPlayRef = useRef(true);
  const resumeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  /* drag state */
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, offset: 0 });

  /* duplicate slides so the strip can loop seamlessly */
  const allSlides = [...SLIDES, ...SLIDES, ...SLIDES];

  /* ── total width of one full set (computed once on mount) ── */
  const singleSetWidth = useRef(0);

  const measure = useCallback(() => {
    if (!trackRef.current) return;
    const children = trackRef.current.children;
    const oneSet = SLIDES.length;
    let w = 0;
    for (let i = 0; i < oneSet && i < children.length; i++) {
      w += (children[i] as HTMLElement).offsetWidth;
      const gap = parseFloat(getComputedStyle(trackRef.current).gap) || 0;
      if (i < oneSet - 1) w += gap;
    }
    singleSetWidth.current = w + (parseFloat(getComputedStyle(trackRef.current).gap) || 0);
  }, []);

  /* ── animation loop ── */
  const tick = useCallback(() => {
    if (autoPlayRef.current && trackRef.current && singleSetWidth.current) {
      offsetRef.current -= AUTO_SPEED;
      /* wrap around seamlessly */
      if (Math.abs(offsetRef.current) >= singleSetWidth.current) {
        offsetRef.current += singleSetWidth.current;
      }
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', measure);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, [measure, tick]);

  /* ── helpers ── */
  const pauseAuto = () => {
    autoPlayRef.current = false;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };

  const scheduleResume = () => {
    resumeTimer.current = setTimeout(() => {
      autoPlayRef.current = true;
    }, AUTO_RESUME_DELAY);
  };

  const applyOffset = (x: number) => {
    const dx = x - dragStart.current.x;
    offsetRef.current = dragStart.current.offset + dx;
    /* keep within bounds for seamless wrap */
    if (singleSetWidth.current) {
      while (offsetRef.current > 0) offsetRef.current -= singleSetWidth.current;
      while (Math.abs(offsetRef.current) >= singleSetWidth.current) offsetRef.current += singleSetWidth.current;
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offsetRef.current}px)`;
    }
  };

  /* ── Mouse events ── */
  const onMouseDown = (e: React.MouseEvent) => {
    pauseAuto();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, offset: offsetRef.current };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    applyOffset(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    scheduleResume();
  };

  /* ── Touch events ── */
  const onTouchStart = (e: React.TouchEvent) => {
    pauseAuto();
    setIsDragging(true);
    dragStart.current = { x: e.touches[0].clientX, offset: offsetRef.current };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    applyOffset(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    scheduleResume();
  };

  /* ── Click to toggle auto-play ── */
  const onClickToggle = () => {
    if (autoPlayRef.current) {
      pauseAuto();
    } else {
      autoPlayRef.current = true;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    }
  };

  return (
    <section className="highlights">
      {/* Carousel */}
      <div
        className={`carousel ${isDragging ? 'grabbing' : ''}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={onClickToggle}
      >
        <div className="carousel__track" ref={trackRef}>
          {allSlides.map((slide, i) => (
            <div className="carousel__slide" key={`${slide.title}-${i}`}>
              <img src={slide.src} alt={slide.title} loading="lazy" draggable={false} />
              <div className="carousel__overlay">
                <h4 className="carousel__title">{slide.title}</h4>
                <p className="carousel__subtitle">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative gradient edges */}
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
