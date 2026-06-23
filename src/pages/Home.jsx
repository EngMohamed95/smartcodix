import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import HeroCanvasBackground from '../components/HeroCanvasBackground';
import { FiArrowRight, FiArrowLeft, FiMonitor, FiSmartphone, FiFigma, FiTrendingUp, FiSearch } from 'react-icons/fi';

const Home = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredServices = [
    { icon: <FiMonitor />, title: 'serviceWebTitle', desc: 'serviceWebDesc' },
    { icon: <FiSmartphone />, title: 'serviceMobileTitle', desc: 'serviceMobileDesc' },
    { icon: <FiFigma />, title: 'serviceDesignTitle', desc: 'serviceDesignDesc' },
    { icon: <FiTrendingUp />, title: 'serviceMarketingTitle', desc: 'serviceMarketingDesc' }
  ];

  return (
    <div className={`page-layout home-page ${isVisible ? 'fade-in-active' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section-wrapper">
        <HeroCanvasBackground />
        <div className="hero-grid-background"></div>
        <div className="hero-orb shape-1"></div>
        <div className="hero-orb shape-2"></div>

        <div className="hero-content-container">
          <div className="hero-badge-item animate-up">
            <span className="badge-dot"></span>
            <span>{t('heroBadge')}</span>
          </div>

          <h1 className="hero-title animate-up delay-1">
            {t('heroTitlePart1')}
            <span className="purple-gradient-text">{t('heroTitleConverts')}</span>
            <br />
            {t('heroTitlePart2')}
            <span className="green-gradient-text">{t('heroTitleScales')}</span>
          </h1>

          <p className="hero-desc-text animate-up delay-2">
            {t('heroDesc')}
          </p>

          <div className="hero-ctas animate-up delay-3">
            <button 
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="cta-primary-btn"
            >
              <span>{t('heroCTA1')}</span>
              {lang === 'en' ? <FiArrowRight /> : <FiArrowLeft />}
            </button>
            <button 
              onClick={() => {
                setActivePage('works');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="cta-secondary-btn"
            >
              <span>{t('heroCTA2')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section-wrapper">
        <div className="stats-container">
          <div className="stat-card">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">{t('statsProjects')}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">40+</h3>
            <p className="stat-label">{t('statsClients')}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">6+</h3>
            <p className="stat-label">{t('statsExp')}</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">{t('statsTeam')}</p>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="services-teaser-wrapper">
        <div className="section-header-centered">
          <span className="section-badge">{t('servicesTitle')}</span>
          <h2 className="section-main-title">{t('servicesSubtitle')}</h2>
          <p className="section-subtitle-desc">{t('servicesDesc')}</p>
        </div>

        <div className="services-teaser-grid">
          {featuredServices.map((service, idx) => (
            <div key={idx} className="service-teaser-card">
              <div className="service-icon-box">{service.icon}</div>
              <h3 className="service-card-title">{t(service.title)}</h3>
              <p className="service-card-desc">{t(service.desc)}</p>
            </div>
          ))}
        </div>

        <div className="center-btn-wrapper">
          <button 
            onClick={() => {
              setActivePage('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="cta-secondary-btn border-glow"
          >
            <span>{lang === 'en' ? "View All Services" : "عرض جميع الخدمات"}</span>
            {lang === 'en' ? <FiArrowRight /> : <FiArrowLeft />}
          </button>
        </div>
      </section>

      {/* Works Teaser */}
      <section className="works-teaser-wrapper">
        <div className="section-header-side">
          <div>
            <span className="section-badge">{t('navWorks')}</span>
            <h2 className="section-main-title">{t('worksSubtitle')}</h2>
          </div>
          <button 
            onClick={() => {
              setActivePage('works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="cta-primary-btn"
          >
            <span>{t('heroCTA2')}</span>
            {lang === 'en' ? <FiArrowRight /> : <FiArrowLeft />}
          </button>
        </div>

        <div className="works-teaser-cards">
          <div className="teaser-card" onClick={() => { setActivePage('works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="teaser-card-visual" style={{ 
              backgroundImage: "url(/img/healthcare.jpg)", 
              backgroundSize: 'cover', 
              backgroundPosition: 'top center' 
            }}>
              <span className="teaser-link-tag">Healthcare H2era</span>
            </div>
            <h4 className="teaser-card-title">{lang === 'en' ? "Healthcare Portal" : "بوابة هيلث كير"}</h4>
          </div>

          <div className="teaser-card" onClick={() => { setActivePage('works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="teaser-card-visual" style={{ 
              backgroundImage: "url(/img/abusoud.png)", 
              backgroundSize: 'cover', 
              backgroundPosition: 'top center' 
            }}>
              <span className="teaser-link-tag">Abuelsuod Group</span>
            </div>
            <h4 className="teaser-card-title">{lang === 'en' ? "Corporate Platform" : "منصة شركات"}</h4>
          </div>

          <div className="teaser-card" onClick={() => { setActivePage('works'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="teaser-card-visual" style={{ 
              backgroundImage: "url(/img/screencapture-basmateck-2026-05-16-12_41_20.png)", 
              backgroundSize: 'cover', 
              backgroundPosition: 'top center' 
            }}>
              <span className="teaser-link-tag">Basma Teck</span>
            </div>
            <h4 className="teaser-card-title">{lang === 'en' ? "SaaS Solutions" : "بصمة تك"}</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
