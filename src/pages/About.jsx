import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { FiCheckCircle, FiUsers, FiAward, FiTarget } from 'react-icons/fi';

const About = () => {
  const { lang, t } = useLanguage();
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      icon: <FiTarget />,
      titleEn: "Quality First",
      titleAr: "الجودة أولاً",
      descEn: "We maintain absolute pixel-perfection and clean code standards in all deliverables.",
      descAr: "نلتزم بأعلى معايير الدقة والبرمجة النظيفة في جميع تسليماتنا."
    },
    {
      icon: <FiAward />,
      titleEn: "Result-Driven",
      titleAr: "التوجيه بالنتائج",
      descEn: "We design structures focused on business conversions, SEO rankings, and revenue growth.",
      descAr: "نصمم واجهات برمجية تركز بالكامل على زيادة المبيعات وتصدر محركات البحث."
    },
    {
      icon: <FiUsers />,
      titleEn: "Transparent Partnership",
      titleAr: "شراكة شفافة",
      descEn: "We offer continuous maintenance, open reporting, and clear milestones.",
      descAr: "نقدم دعماً مستمراً، تقارير أداء دورية، وجدول عمل واضح للمشروعات."
    }
  ];

  return (
    <div className={`page-layout about-page ${isVisible ? 'fade-in-active' : ''}`}>
      {/* Banner */}
      <section className="page-hero-banner">
        <div className="banner-glow-effect"></div>
        <div className="banner-content">
          <span className="section-badge">{t('navAbout')}</span>
          <h1 className="banner-title">{t('aboutTitle')}</h1>
          <p className="banner-subtitle">{t('aboutSubtitle')}</p>
        </div>
      </section>

      {/* Main Backstory */}
      <section className="about-details-section">
        <div className="about-grid">
          <div className="about-text-content">
            <h2 className="about-heading">{lang === 'en' ? "Who We Are" : "من نحن"}</h2>
            <p className="about-paragraph">{t('aboutDesc1')}</p>
            <p className="about-paragraph">{t('aboutDesc2')}</p>

            <div className="stats-mini-grid">
              <div className="mini-stat">
                <h4>50+</h4>
                <span>{t('statsProjects')}</span>
              </div>
              <div className="mini-stat">
                <h4>6+</h4>
                <span>{t('statsExp')}</span>
              </div>
            </div>
          </div>

          <div className="about-image-visual">
            <div className="aesthetic-box">
              <div className="aesthetic-glow"></div>
              <div className="aesthetic-inner" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <img 
                  src={theme === 'dark' ? "/logo/logo White.png" : "/logo/ChatGPT-Image-Jul-7-2025-04_23_49-PM.webp"} 
                  alt="Smart Codix Logo" 
                  style={{ width: '180px', objectFit: 'contain' }}
                />
                <span className="aesthetic-tagline" style={{ textTransform: 'uppercase', letterSpacing: '1px', fontSize: '13px', color: 'var(--green-accent)' }}>
                  {t('heroTitlePart1')}{t('heroTitleConverts')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="founder-section-wrapper">
        <div className="section-header-centered">
          <span className="section-badge">{t('aboutTeamTitle')}</span>
          <h2 className="section-main-title">{lang === 'en' ? "Leadership & Engineering" : "القيادة والهندسة البرمجية"}</h2>
        </div>

        <div className="founder-card-container">
          <div className="founder-card">
            <div className="founder-avatar-wrapper">
              <img 
                src="/logo/me.jpg" 
                alt="Mohamed Abd Elfattah" 
                style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--purple-primary)', boxShadow: '0 10px 25px var(--purple-glow)' }} 
              />
            </div>
            <div className="founder-info">
              <h3 className="founder-name">{lang === 'en' ? "Mohamed Abd Elfattah" : "محمد عبد الفتاح"}</h3>
              <span className="founder-role">{t('aboutTeamRole')}</span>
              <p className="founder-bio">{t('aboutTeamDesc')}</p>
              <div className="founder-bullets">
                <div className="bullet"><FiCheckCircle className="bullet-icon" /> <span>{lang === 'en' ? "Senior Frontend Engineer" : "مهندس واجهات مستخدم محترف"}</span></div>
                <div className="bullet"><FiCheckCircle className="bullet-icon" /> <span>{lang === 'en' ? "WordPress & CMS Architect" : "خبير ومطور ووردبريس متكامل"}</span></div>
                <div className="bullet"><FiCheckCircle className="bullet-icon" /> <span>{lang === 'en' ? "UI/UX Specialist" : "متخصص في تصميم تجربة واجهات المستخدم"}</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-wrapper">
        <div className="section-header-centered">
          <h2 className="section-main-title">{lang === 'en' ? "Our Core Values" : "القيم الأساسية التي نوجه بها عملنا"}</h2>
        </div>

        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-box">{value.icon}</div>
              <h3 className="value-title">{lang === 'en' ? value.titleEn : value.titleAr}</h3>
              <p className="value-desc">{lang === 'en' ? value.descEn : value.descAr}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
