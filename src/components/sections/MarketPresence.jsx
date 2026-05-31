import './MarketPresence.css';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const markets = [
  'शहरटाकळी',
  'भावी लिंबगाव',
  'देवगाव',
  'आणि परिसरातील बाजार'
];

export default function MarketPresence() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section section--dark market-presence">
      <div className="container">
        <SectionTitle
          marathi="आमची ओळख"
          english="Our Presence"
          light
        />

        <div ref={ref} className={`market-presence__content ${isVisible ? 'visible' : ''}`}>
          <p className="market-presence__text">
            शहरटाकळी, भावी लिंबगाव, देवगाव आणि परिसरातील साप्ताहिक बाजारांमध्ये अनेक दशकांपासून
            ग्राहकांचा विश्वास संपादन केलेले नाव. उत्कृष्ट दर्जाचे हिरा बेसन, ताजेपणा आणि
            पारंपरिक चव यासाठी दादा माळी फरसाण हे नाव आजही ओळखले जाते.
          </p>

          <div className="market-presence__markets">
            {markets.map((market, index) => (
              <div key={index} className="market-presence__market-badge">
                <span className="market-presence__market-icon">📍</span>
                <span className="market-presence__market-name">{market}</span>
              </div>
            ))}
          </div>

          <div className="market-presence__highlight">
            <div className="market-presence__stat">
              <span className="market-presence__stat-number">५७+</span>
              <span className="market-presence__stat-label">वर्षांचा अनुभव</span>
              <span className="market-presence__stat-en text-english">Years of Experience</span>
            </div>
            <div className="market-presence__stat">
              <span className="market-presence__stat-number">४</span>
              <span className="market-presence__stat-label">पिढ्या</span>
              <span className="market-presence__stat-en text-english">Generations</span>
            </div>
            <div className="market-presence__stat">
              <span className="market-presence__stat-number">१००%</span>
              <span className="market-presence__stat-label">शुद्ध साहित्य</span>
              <span className="market-presence__stat-en text-english">Pure Ingredients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
