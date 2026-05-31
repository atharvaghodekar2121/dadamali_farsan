import './WhyChooseUs.css';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const features = [
  {
    icon: '🍛',
    title: 'अस्सल चव',
    titleEnglish: 'Authentic Taste',
    description: 'पारंपरिक पद्धतीने तयार केलेली अस्सल गावाकडील चव.'
  },
  {
    icon: '⭐',
    title: 'उत्कृष्ट दर्जा',
    titleEnglish: 'Premium Quality',
    description: 'उत्कृष्ट दर्जाचे हिरा बेसन आणि शुद्ध साहित्य.'
  },
  {
    icon: '🌿',
    title: 'ताजेपणा',
    titleEnglish: 'Freshness',
    description: 'दररोज ताजे बनवलेले पदार्थ. कोणतेही preservative नाही.'
  },
  {
    icon: '🏅',
    title: 'गुणवत्तापूर्ण साहित्य',
    titleEnglish: 'Quality Ingredients',
    description: 'शुद्ध तूप, उत्कृष्ट तेल आणि निवडक मसाले.'
  },
  {
    icon: '🤝',
    title: 'ग्राहकांचा विश्वास',
    titleEnglish: 'Customer Trust',
    description: 'अनेक दशकांपासून ग्राहकांचा अतूट विश्वास.'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'पिढ्यानपिढ्यांची परंपरा',
    titleEnglish: 'Generational Legacy',
    description: 'चार पिढ्यांचा अनुभव आणि समर्पण.'
  }
];

export default function WhyChooseUs() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section className="section section--warm why-choose-us">
      <div className="container">
        <SectionTitle
          marathi="आमची खासियत"
          english="Why Choose Us"
        />

        <div
          ref={ref}
          className={`why-choose-us__grid stagger-children ${isVisible ? 'visible' : ''}`}
        >
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card__icon-wrapper">
                <span className="feature-card__icon">{feature.icon}</span>
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__title-en text-english">{feature.titleEnglish}</p>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
