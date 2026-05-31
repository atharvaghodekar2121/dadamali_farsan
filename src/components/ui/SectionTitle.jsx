import './SectionTitle.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SectionTitle({ marathi, english, light = false }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`section-title ${light ? 'section-title--light' : ''} ${isVisible ? 'visible' : ''}`}
    >
      <h2 className="section-title__main">{marathi}</h2>
      {english && (
        <p className="section-title__sub text-english">{english}</p>
      )}
      <div className="section-title__ornament">
        <span className="section-title__ornament-dot"></span>
        <span className="section-title__ornament-line"></span>
        <span className="section-title__ornament-dot"></span>
      </div>
    </div>
  );
}
