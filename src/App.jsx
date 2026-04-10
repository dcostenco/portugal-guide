import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tours from './components/Tours';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Импорт данных сайта
import siteData from './data/content.json';

function App() {
  useEffect(() => {
    document.title = siteData.siteVars.title;
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero content={siteData.hero} />
        <About content={siteData.about} />
        <Tours tours={siteData.tours} />
        <Reviews reviews={siteData.reviews} />
        <Contact siteVars={siteData.siteVars} />
      </main>
      <Footer siteVars={siteData.siteVars} />
    </div>
  );
}

export default App;
