import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiArrowUp } from 'react-icons/fi';

const Footer = ({ setActivePage }) => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const handleNavClick = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-shapes">
        <div className="footer-shape-glow"></div>
      </div>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-section">
            <div className="logo-area" onClick={() => handleNavClick('home')}>
              <img 
                src="/logo/logo White.png" 
                alt="Smart Codix Logo" 
                style={{ height: '42px', objectFit: 'contain' }} 
              />
            </div>
            <p className="footer-brand-desc">{t('footerText')}</p>
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-section">
            <h4 className="footer-sec-title">{t('worksAll')}</h4>
            <ul className="footer-links-list">
              <li><button onClick={() => handleNavClick('home')}>{t('navHome')}</button></li>
              <li><button onClick={() => handleNavClick('about')}>{t('navAbout')}</button></li>
              <li><button onClick={() => handleNavClick('services')}>{t('navServices')}</button></li>
              <li><button onClick={() => handleNavClick('works')}>{t('navWorks')}</button></li>
              <li><button onClick={() => handleNavClick('contact')}>{t('navContact')}</button></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-section">
            <h4 className="footer-sec-title">{t('contactInfoTitle')}</h4>
            <ul className="footer-contact-list">
              <li>
                <FiMapPin className="contact-icon-inline" />
                <span>{t('contactInfoAddress')}</span>
              </li>
              <li>
                <FiMail className="contact-icon-inline" />
                <a href={`mailto:${t('contactInfoEmail')}`}>{t('contactInfoEmail')}</a>
              </li>
              <li>
                <FiPhone className="contact-icon-inline" />
                <a href={`tel:${t('contactInfoPhone')}`}>{t('contactInfoPhone')}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copy">{t('footerCopyright')}</p>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to Top">
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
