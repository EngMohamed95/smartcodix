import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiMail, FiPhone, FiMapPin, FiSend, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const { lang, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappNumber = "201094040671"; // Phone number from translations (+20 109 404 0671)
    const messageText = lang === 'en' 
      ? `Hello, I'd like to inquire about a project.\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n*Message:* ${formData.message}`
      : `السلام عليكم، أريد الاستفسار عن مشروع.\n\n*الاسم:* ${formData.name}\n*البريد الإلكتروني:* ${formData.email}\n*رقم الهاتف:* ${formData.phone || 'غير محدد'}\n*الرسالة:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Open WhatsApp chat in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className={`page-layout contact-page ${isVisible ? 'fade-in-active' : ''}`}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="banner-glow-effect"></div>
        <div className="banner-content">
          <span className="section-badge">{t('navContact')}</span>
          <h1 className="banner-title">{t('contactTitle')}</h1>
          <p className="banner-subtitle">{t('contactSubtitle')}</p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-form-section">
        <div className="contact-main-grid">
          {/* Info Card */}
          <div className="contact-info-card">
            <h2 className="info-card-title">{t('contactInfoTitle')}</h2>
            
            <div className="info-list-wrapper">
              <div className="info-item">
                <div className="info-icon-wrapper"><FiMapPin /></div>
                <div className="info-text">
                  <span>{lang === 'en' ? "Location" : "الموقع الجغرافي"}</span>
                  <p>{t('contactInfoAddress')}</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper"><FiMail /></div>
                <div className="info-text">
                  <span>{lang === 'en' ? "Email" : "البريد الإلكتروني"}</span>
                  <a href={`mailto:${t('contactInfoEmail')}`}>{t('contactInfoEmail')}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-wrapper"><FiPhone /></div>
                <div className="info-text">
                  <span>{lang === 'en' ? "Phone & WhatsApp" : "الهاتف والواتساب"}</span>
                  <a href={`tel:${t('contactInfoPhone')}`} dir="ltr">{t('contactInfoPhone')}</a>
                </div>
              </div>
            </div>

            <div className="contact-socials-wrapper" style={{ marginTop: '30px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '20px' }}>
              <span className="socials-label" style={{ display: 'block', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>
                {lang === 'en' ? "Social Media" : "وسائل التواصل الاجتماعي"}
              </span>
              <div className="contact-social-icons" style={{ display: 'flex', gap: '12px' }}>
                <a href="https://www.facebook.com/smartcodix" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Facebook">
                  <FiFacebook />
                </a>
                <a href="https://www.instagram.com/smartcodix/" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Instagram">
                  <FiInstagram />
                </a>
                <a href="https://www.linkedin.com/company/smartcodix" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
            </div>

            <div className="info-map-overlay">
              <div className="map-glow"></div>
              <span className="map-badge">{lang === 'en' ? "Available Worldwide" : "متاحون للعمل عالمياً"}</span>
            </div>
          </div>

          {/* Form Card */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmit} className="project-contact-form">
              <div className="form-group">
                <label htmlFor="name">{t('contactName')}</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                  placeholder={lang === 'en' ? "Your Name" : "اسمك الكريم"}
                />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="email">{t('contactEmail')}</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    required 
                    placeholder="email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('contactPhone')}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="+20 100 000 0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contactMessage')}</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                  rows="6"
                  placeholder={lang === 'en' ? "Tell us about your project requirements..." : "أخبرنا بالتفاصيل ومتطلبات مشروعك..."}
                />
              </div>

              <button 
                type="submit" 
                className="submit-form-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>{t('contactSubmitting')}</span>
                ) : (
                  <>
                    <span>{t('contactSubmit')}</span>
                    <FiSend className="send-icon" />
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="form-success-banner">
                  <p>{t('contactSuccess')}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
