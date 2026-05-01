import { useState, useRef, useCallback } from 'react';
import './Highlights.css';
import { useLanguage } from '../../contexts/LanguageContext';

const SLIDE_IMAGES = [
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
  'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80',
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80',
  'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
];

const STAT_VALUES = ['8K+', '30+', '5', '2'];

const SLIDE_W  = 280;
const SLIDE_GAP = 16;
const STEP = SLIDE_W + SLIDE_GAP;

const Highlights: React.FC = () => {
  const { t } = useLanguage();
  const slides = t.highlights.slides;
  const stats  = t.highlights.stats;

  const [isDragging, setIsDragging] = useState(false);
  const dragStart  = useRef({ x: 0, offset: 0 });
  const offsetRef  = useRef(0);
  const railRef    = useRef<HTMLDivElement>(null);

  const singleSetWidth = STEP * slides.length;

  const applyOffset = useCallback((clientX: number) => {
    const dx  = clientX - dragStart.current.x;
    let next  = dragStart.current.offset + dx;
    const min = -(singleSetWidth * 2);
    const max = 0;
    if (next > max) next = max;
    if (next < min) next = min;
    offsetRef.current = next;
    if (railRef.current) railRef.current.style.transform = `translateX(${next}px)`;
  }, [singleSetWidth]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, offset: offsetRef.current };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    applyOffset(e.clientX);
  };
  const onMouseUp = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.touches[0].clientX, offset: offsetRef.current };
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    applyOffset(e.touches[0].clientX);
  };
  const onTouchEnd = () => setIsDragging(false);

  const doubled = [...slides, ...slides, ...slides];

  return (
    <div className="highlights">
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
        <div
          className="carousel__rail"
          ref={railRef}
          style={{ transform: `translateX(${-singleSetWidth}px)` }}
        >
          {doubled.map((slide, idx) => (
            <div className="carousel__slide" key={idx}>
              <img src={SLIDE_IMAGES[idx % SLIDE_IMAGES.length]} alt={slide.title} loading="lazy" draggable={false} />
              <div className="carousel__info">
                <span className="carousel__title">{slide.title}</span>
                <span className="carousel__subtitle">{slide.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Drag arrows */}
        <div className={`carousel__arrow carousel__arrow--left ${isDragging ? 'carousel__arrow--hidden' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <div className={`carousel__arrow carousel__arrow--right ${isDragging ? 'carousel__arrow--hidden' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>

      {/* Stats bar */}
      <div className="highlights__stats">
        {stats.map((stat, i) => (
          <div className="highlights__stat" key={i}>
            <span className="highlights__stat-value">{STAT_VALUES[i]}</span>
            <span className="highlights__stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
