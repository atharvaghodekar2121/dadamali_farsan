import { useEffect, useCallback, useRef } from 'react';
import './Lightbox.css';

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  const currentImage = images[currentIndex];
  if (!currentImage) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="इमेज गॅलरी"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="lightbox__backdrop" onClick={onClose}></div>

      <button
        className="lightbox__close"
        onClick={onClose}
        aria-label="बंद करा"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>

      <button
        className="lightbox__nav lightbox__nav--prev"
        onClick={onPrev}
        aria-label="मागील"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15,18 9,12 15,6"/>
        </svg>
      </button>

      <div className="lightbox__content">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox__image"
          onError={(e) => {
            e.target.src = '';
            e.target.alt = 'Image not available';
          }}
        />
        <p className="lightbox__caption">{currentImage.alt}</p>
        <p className="lightbox__counter text-english">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <button
        className="lightbox__nav lightbox__nav--next"
        onClick={onNext}
        aria-label="पुढील"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9,18 15,12 9,6"/>
        </svg>
      </button>
    </div>
  );
}
