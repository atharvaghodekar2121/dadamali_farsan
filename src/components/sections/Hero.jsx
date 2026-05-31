import './Hero.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const trustBadges = [
  { icon: '🏛️', text: '१९६७ पासून', subtext: 'Since 1967' },
  { icon: '😋', text: 'अस्सल चव', subtext: 'Authentic Taste' },
  { icon: '⭐', text: 'उत्कृष्ट दर्जा', subtext: 'Quality Ingredients' },
  { icon: '🤝', text: 'विश्वासाची परंपरा', subtext: 'Trusted by Generations' },
];

export default function Hero() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="hero__bg-pattern"></div>
      <div className="container hero__container">
        <div className={`hero__content ${isVisible ? 'visible' : ''}`}>
          <div className="hero__logo-wrapper">
            <img
              src="/assets/logo/logo.png"
              alt="दादा माळी फरसाण"
              className="hero__logo"
              width="180"
              height="180"
            />
          </div>

          <h1 className="hero__title">
            अस्सल चव आणि<br />
            <span className="text-saffron">विश्वासाची परंपरा</span>
          </h1>
          <p className="hero__subtitle text-english">Dada Mali Farsan</p>
          <p className="hero__tagline">
            १९६७ पासून अस्सल चव आणि विश्वासाची परंपरा
          </p>
          <p className="hero__description">
            सुप्रसिद्ध गावाकडील फरसाण.<br/>
            <b>शहरटाकळी आणि परिसरातील प्रसिद्ध नाव.</b>
          </p>

          <div className="hero__buttons">
            <a
              href="https://wa.me/919822262526?text=नमस्कार%20दादा%20माळी%20फरसाण,%20मला%20तुमच्या%20उत्पादनांबद्दल%20माहिती%20हवी%20आहे."
              className="btn btn--whatsapp btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-btn"
              aria-label="WhatsApp वर संपर्क करा"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp वर संपर्क करा
            </a>
            <a
              href="tel:+919822262526"
              className="btn btn--call btn--lg"
              id="hero-call-btn"
              aria-label="कॉल करा"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
              </svg>
              कॉल करा
            </a>
            <a
              href="https://share.google/gzGJdWaWjw8w8PL6A"
              className="btn btn--directions btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-directions-btn"
              aria-label="मार्गदर्शक (Directions)"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              दिशा (Directions)
            </a>
          </div>
        </div>

        <div className={`hero__badges ${isVisible ? 'visible' : ''}`}>
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="hero__trust-badge"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="hero__trust-badge-icon">{badge.icon}</span>
              <span className="hero__trust-badge-text">{badge.text}</span>
              <span className="hero__trust-badge-subtext text-english">
                {badge.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
