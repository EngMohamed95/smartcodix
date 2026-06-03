import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate premium preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Dynamically load Google Fonts
  useEffect(() => {
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Tajawal:wght@400;500;700;800&family=Inter:wght@300;400;500;600;700&display=swap';
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'works':
        return <Works />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="preloader-overlay">
          <div className="preloader-spinner-wrapper">
            <div className="preloader-circle"></div>
            <div className="preloader-logo-img">
              <img src="/logo/logo White.png" alt="Smart Codix" style={{ height: '40px', objectFit: 'contain' }} />
            </div>
            <div className="preloader-text-bar">
              <span className="loading-letter">L</span>
              <span className="loading-letter">o</span>
              <span className="loading-letter">a</span>
              <span className="loading-letter">d</span>
              <span className="loading-letter">i</span>
              <span className="loading-letter">n</span>
              <span className="loading-letter">g</span>
              <span className="loading-letter">.</span>
              <span className="loading-letter">.</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="app-shell">
          <Header activePage={activePage} setActivePage={setActivePage} />
          <main className="main-content-flow">
            {renderPage()}
          </main>
          <Footer setActivePage={setActivePage} />
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}

export default App;
