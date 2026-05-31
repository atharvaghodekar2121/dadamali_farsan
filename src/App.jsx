import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Products from './components/sections/Products';
import MarketPresence from './components/sections/MarketPresence';
import Gallery from './components/sections/Gallery';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

import './App.css';

function App() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        मुख्य आशयाकडे जा (Skip to content)
      </a>
      
      <Header />
      
      <main id="main-content">
        <Hero />
        <Products />
        <About />
        <WhyChooseUs />
        <MarketPresence />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;
