import { useState, useEffect } from 'react';
import './Header.css';

const menuItems = [
  { id: 'home', label: 'मुख्यपृष्ठ', href: '#home' },
  { id: 'about', label: 'आमच्याविषयी', href: '#about' },
  { id: 'products', label: 'उत्पादने', href: '#products' },
  { id: 'gallery', label: 'गॅलरी', href: '#gallery' },
  { id: 'contact', label: 'संपर्क', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleSectionObserver = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
      );

      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return observer;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    const observer = handleSectionObserver();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleMenuClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      role="banner"
    >
      <div className="container header__container">
        <a
          href="#home"
          className="header__logo"
          onClick={(e) => handleMenuClick(e, '#home')}
          aria-label="दादा माळी फरसाण - मुख्यपृष्ठ"
        >
          <img
            src="/assets/logo/logo.png"
            alt="दादा माळी फरसाण"
            className="header__logo-img"
            width="44"
            height="44"
          />
          <div className="header__logo-text">
            <span className="header__logo-name">दादा माळी फरसाण</span>
            <span className="header__logo-tagline text-english">Since 1967</span>
          </div>
        </a>

        <nav
          className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}
          role="navigation"
          aria-label="मुख्य मेनू"
        >
          <ul className="header__menu">
            {menuItems.map((item) => (
              <li key={item.id} className="header__menu-item">
                <a
                  href={item.href}
                  className={`header__menu-link ${activeSection === item.id ? 'header__menu-link--active' : ''}`}
                  onClick={(e) => handleMenuClick(e, item.href)}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="https://wa.me/919822262526?text=नमस्कार%20दादा%20माळी%20फरसाण,%20मला%20तुमच्या%20उत्पादनांबद्दल%20माहिती%20हवी%20आहे."
            className="btn btn--whatsapp btn--sm header__cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp वर संपर्क करा"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </nav>

        <button
          className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'मेनू बंद करा' : 'मेनू उघडा'}
          aria-expanded={isMobileMenuOpen}
          id="mobile-menu-toggle"
        >
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
          <span className="header__hamburger-line"></span>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="header__overlay"
          onClick={closeMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}
