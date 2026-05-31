import './About.css';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section section--alt about">
      <div className="container">
        <SectionTitle
          marathi="आमची परंपरा"
          english="Our Legacy"
        />

        <div className="about__intro fade-in-up" ref={ref} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 0.6s ease' }}>
          <p className="about__intro-text">
            दादा माळी गादे यांनी १९६७ मध्ये व्यवसायाची सुरुवात केली. त्यानंतर मारुतीराव गादे, शंकरराव गादे (आबा), आणि सोमनाथ गादे यांनी ही परंपरा पुढे नेली. 
            आज चौथी पिढी म्हणून चाणक्य गादे आणि सिद्धांत गादे ही अस्सल गावाकडील चव आणि विश्वासाची परंपरा अभिमानाने पुढे नेत आहेत.
          </p>
        </div>
      </div>
    </section>
  );
}
