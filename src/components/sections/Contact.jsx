import './Contact.css';
import SectionTitle from '../ui/SectionTitle';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Contact() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle
          marathi="संपर्क"
          english="Contact Us"
        />

        <div className="contact__wrapper">
          <div ref={ref} className={`contact__info ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <h3 className="contact__title">आमचा पत्ता</h3>
            
            <div className="contact__details">
              <div className="contact__detail-item">
                <span className="contact__icon">📍</span>
                <div>
                  <h4 className="contact__detail-title">पत्ता</h4>
                  <p className="contact__detail-text">
                    बस स्टँड,<br />
                    शहरटाकळी, ता. शेवगाव,<br />
                    जि. अहिल्यानगर,<br />
                    महाराष्ट्र - ४१४५०२
                  </p>
                </div>
              </div>

              <div className="contact__detail-item">
                <span className="contact__icon">📞</span>
                <div>
                  <h4 className="contact__detail-title">फोन</h4>
                  <div className="contact__phone-links">
                    <a href="tel:+919822262526" className="contact__link text-english">+91 98222 62526</a>
                    <a href="tel:+919921458426" className="contact__link text-english">+91 99214 58426</a>
                  </div>
                </div>
              </div>

              <div className="contact__detail-item">
                <span className="contact__icon">🕒</span>
                <div>
                  <h4 className="contact__detail-title">वेळ</h4>
                  <p className="contact__detail-text">दररोज सकाळी ८:०० ते रात्री ८:००</p>
                </div>
              </div>
            </div>

            <div className="contact__actions">
              <a
                href="tel:+919822262526"
                className="btn btn--call"
              >
                कॉल करा
              </a>
              <a
                href="https://wa.me/919822262526?text=नमस्कार%20दादा%20माळी%20फरसाण,%20मला%20तुमच्या%20उत्पादनांबद्दल%20माहिती%20हवी%20आहे."
                className="btn btn--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a
                href="https://share.google/gzGJdWaWjw8w8PL6A"
                className="btn btn--directions"
                target="_blank"
                rel="noopener noreferrer"
              >
                मार्गदर्शक (Directions)
              </a>
            </div>
          </div>

          <div className={`contact__map-wrapper ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <iframe
              title="Dada Mali Farsan Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.184347781035!2d75.13783935!3d19.3802905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb0932c02cda47%3A0x6b4291880436d8d9!2sShahar%20Takali%2C%20Maharashtra%20414502!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="contact__map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
