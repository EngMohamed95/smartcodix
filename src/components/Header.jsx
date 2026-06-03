import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FiMenu, FiX, FiGlobe, FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ activePage, setActivePage }) => {
  const { lang, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'navHome' },
    { id: 'about', label: 'navAbout' },
    { id: 'services', label: 'navServices' },
    { id: 'works', label: 'navWorks' },
    { id: 'contact', label: 'navContact' }
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <div className="logo-area" onClick={() => handleNavClick('home')}>
          <img 
            src={theme === 'dark' ? "/logo/logo White.png" : "/logo/ChatGPT-Image-Jul-7-2025-04_23_49-PM.webp"} 
            alt="Smart Codix Logo" 
            style={{ height: '42px', objectFit: 'contain' }} 
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div className="header-actions">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <button onClick={toggleLanguage} className="lang-toggle-btn" aria-label="Toggle Language">
            <FiGlobe className="globe-icon" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {t(item.label)}
            </button>
          ))}
          <button 
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }} 
            className="mobile-lang-link"
          >
            <FiGlobe className="globe-icon" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
