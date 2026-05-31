import { useState, useCallback } from 'react';
import './Gallery.css';
import SectionTitle from '../ui/SectionTitle';
import Lightbox from '../ui/Lightbox';
import galleryData from '../../data/gallery.json';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Gallery() {
  const [ref, isVisible] = useScrollReveal();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox = useCallback((index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(-1);
    document.body.style.overflow = '';
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryData.length);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  }, []);

  return (
    <section id="gallery" className="section section--warm gallery">
      <div className="container">
        <SectionTitle
          marathi="गॅलरी"
          english="Gallery"
        />

        <div
          ref={ref}
          className={`gallery__grid stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {galleryData.map((image, index) => (
            <button
              key={image.id}
              className="gallery__item"
              onClick={() => openLightbox(index)}
              aria-label={`${image.alt} - मोठे पहा`}
              id={`gallery-item-${image.id}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery__image"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="gallery__fallback" style={{ display: 'none' }}>
                <span>📷</span>
                <span>{image.altEnglish}</span>
              </div>
              <div className="gallery__overlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex >= 0 && (
        <Lightbox
          images={galleryData}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </section>
  );
}
