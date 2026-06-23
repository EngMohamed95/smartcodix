import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FiExternalLink, FiSearch } from 'react-icons/fi';

const projectsData = [
  {
    "id": 1,
    "url": "https://healthcare-h2era.com/",
    "category": "wordpress",
    "titleEn": "Healthcare H2era",
    "titleAr": "هيلث كير إتش تو إيرا",
    "descEn": "Healthcare Portal",
    "descAr": "منصة رقمية متكاملة لـ هيلث كير إتش تو إيرا.",
    "tags": [
      "WordPress",
      "UI/UX",
      "Elementor"
    ],
    "img": "/img/healthcare.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 3,
    "url": "https://www.royal-fc.com/",
    "category": "wordpress",
    "titleEn": "Royal FC",
    "titleAr": "نادي رويال الرياضي",
    "descEn": "Sports Website",
    "descAr": "منصة رقمية متكاملة لـ نادي رويال الرياضي.",
    "tags": [
      "WordPress",
      "PHP",
      "Custom Design"
    ],
    "img": "/img/royal.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 4,
    "url": "https://www.darelzokora.com/",
    "category": "wordpress",
    "titleEn": "Dar Elzokora",
    "titleAr": "دار الذكورة الطبي",
    "descEn": "Medical Center",
    "descAr": "منصة رقمية متكاملة لـ دار الذكورة الطبي.",
    "tags": [
      "WordPress",
      "Custom UI"
    ],
    "img": "/img/darelzokora.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 5,
    "url": "http://drakrammilad.com/",
    "category": "wordpress",
    "titleEn": "Dr. Akram Milad",
    "titleAr": "عيادة د. أكرم ميلاد",
    "descEn": "Medical Center",
    "descAr": "منصة رقمية متكاملة لـ عيادة د. أكرم ميلاد.",
    "tags": [
      "WordPress",
      "Elementor",
      "SEO"
    ],
    "img": "/img/akram.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 6,
    "url": "https://stepcentereg.com/",
    "category": "wordpress",
    "titleEn": "Step Center EG",
    "titleAr": "مركز خطوة للتعليم",
    "descEn": "Education",
    "descAr": "منصة رقمية متكاملة لـ مركز خطوة للتعليم.",
    "tags": [
      "WordPress",
      "Custom Theme"
    ],
    "img": "/img/step.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },

  {
    "id": 10,
    "url": "https://advertupeg.com/",
    "category": "marketing",
    "titleEn": "AdvertUp EG",
    "titleAr": "إدفرت آب للتسويق",
    "descEn": "Marketing Agency",
    "descAr": "منصة رقمية متكاملة لـ إدفرت آب للتسويق.",
    "tags": [
      "WordPress",
      "PHP"
    ],
    "img": "/img/advertup.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 11,
    "url": "https://almaha-agency.com/",
    "category": "wordpress",
    "titleEn": "Almaha Agency",
    "titleAr": "وكالة المها الإبداعية",
    "descEn": "Marketing Agency",
    "descAr": "منصة رقمية متكاملة لـ وكالة المها الإبداعية.",
    "tags": [
      "WordPress",
      "Design"
    ],
    "img": "/img/almaha.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 13,
    "url": "https://hiconnecteg.com/",
    "category": "wordpress",
    "titleEn": "HiConnect EG",
    "titleAr": "هاي كونكت للتوظيف",
    "descEn": "Outsourcing",
    "descAr": "منصة رقمية متكاملة لـ هاي كونكت للتوظيف.",
    "tags": [
      "WordPress",
      "UI/UX"
    ],
    "img": "/img/hiconnect.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 14,
    "url": "https://metal-carbon.com/",
    "category": "wordpress",
    "titleEn": "Metal Carbon",
    "titleAr": "ميتال كاربون للصناعة",
    "descEn": "Industrial",
    "descAr": "منصة رقمية متكاملة لـ ميتال كاربون للصناعة.",
    "tags": [
      "WordPress",
      "PHP"
    ],
    "img": "/img/metal.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 15,
    "url": "https://atecoo.com/",
    "category": "wordpress",
    "titleEn": "Atecoo",
    "titleAr": "شركة عتيكو للأعمال",
    "descEn": "Business Portal",
    "descAr": "منصة رقمية متكاملة لـ شركة عتيكو للأعمال.",
    "tags": [
      "WordPress",
      "Custom Theme"
    ],
    "img": "/img/atecoo.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 17,
    "url": "https://sharhanex.com/",
    "category": "wordpress",
    "titleEn": "Sharhan Exchange",
    "titleAr": "الشرهان للصرافة",
    "descEn": "Financial",
    "descAr": "منصة رقمية متكاملة لـ الشرهان للصرافة.",
    "tags": [
      "WordPress",
      "Security"
    ],
    "img": "/img/sharhan.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 18,
    "url": "https://galaxynew.net/",
    "category": "wordpress",
    "titleEn": "Galaxy New",
    "titleAr": "جلاكسي نيو العقارية",
    "descEn": "Corporate",
    "descAr": "منصة رقمية متكاملة لـ جلاكسي نيو العقارية.",
    "tags": [
      "WordPress"
    ],
    "img": "/img/galaxy.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 19,
    "url": "https://elsaftyshop.com/",
    "category": "wordpress",
    "titleEn": "El Safty Shop",
    "titleAr": "متجر الصفتي للمعدات",
    "descEn": "E-commerce",
    "descAr": "منصة رقمية متكاملة لـ متجر الصفتي للمعدات.",
    "tags": [
      "WooCommerce"
    ],
    "img": "/img/safty.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 20,
    "url": "https://telaleg.com/",
    "category": "wordpress",
    "titleEn": "Telal EG",
    "titleAr": "تلال العقارية",
    "descEn": "Real Estate",
    "descAr": "منصة رقمية متكاملة لـ تلال العقارية.",
    "tags": [
      "WordPress"
    ],
    "img": "/img/telal.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },

  {
    "id": 23,
    "url": "https://jwatha.net/",
    "category": "wordpress",
    "titleEn": "Jwatha",
    "titleAr": "شبكة جواثا الإخبارية",
    "descEn": "Information",
    "descAr": "منصة رقمية متكاملة لـ شبكة جواثا الإخبارية.",
    "tags": [
      "WordPress"
    ],
    "img": "/img/jwatha.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 24,
    "url": "https://beautykoshk.com/",
    "category": "wordpress",
    "titleEn": "Beauty Koshk",
    "titleAr": "بوتيك كشك التجميل",
    "descEn": "Beauty Store",
    "descAr": "منصة رقمية متكاملة لـ بوتيك كشك التجميل.",
    "tags": [
      "WooCommerce"
    ],
    "img": "/img/beautykoshk.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 25,
    "url": "https://beautygateco.com/",
    "category": "wordpress",
    "titleEn": "Beauty Gate",
    "titleAr": "بوابة الجمال التجارية",
    "descEn": "Beauty Store",
    "descAr": "منصة رقمية متكاملة لـ بوابة الجمال التجارية.",
    "tags": [
      "WooCommerce"
    ],
    "img": "/img/beautygate.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 26,
    "url": "https://mstwrdalenaya.com/",
    "category": "wordpress",
    "titleEn": "Mstwrd Alenaya",
    "titleAr": "متجر مستورد العناية",
    "descEn": "Medical Store",
    "descAr": "منصة رقمية متكاملة لـ متجر مستورد العناية.",
    "tags": [
      "WooCommerce"
    ],
    "img": "/img/mstwrd.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 27,
    "url": "http://4trendneon.com/",
    "category": "wordpress",
    "titleEn": "4Trend Neon",
    "titleAr": "فور تريند نيون للإضاءة",
    "descEn": "E-commerce",
    "descAr": "منصة رقمية متكاملة لـ فور تريند نيون للإضاءة.",
    "tags": [
      "WordPress"
    ],
    "img": "/img/trendneon.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },

  {
    "id": 33,
    "url": "https://movacarpets.com/",
    "category": "wordpress",
    "titleEn": "Movacarpets",
    "titleAr": "سجاد موفا الفاخر",
    "descEn": "E-commerce",
    "descAr": "منصة رقمية متكاملة لـ سجاد موفا الفاخر.",
    "tags": [
      "WooCommerce"
    ],
    "img": "/img/movacarpets.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 34,
    "url": "https://spiral-tax.com/",
    "category": "web",
    "titleEn": "Spiral Tax Full",
    "titleAr": "سبايرال للضرائب",
    "descEn": "Financial App",
    "descAr": "منصة رقمية متكاملة لـ سبايرال للضرائب.",
    "tags": [
      "React",
      "Next.js"
    ],
    "img": "/img/spiraltax.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 35,
    "url": "https://al-kasid.com/",
    "category": "wordpress",
    "titleEn": "Al-Kasid",
    "titleAr": "مجموعة القاصد للتجارة",
    "descEn": "Corporate",
    "descAr": "منصة رقمية متكاملة لـ مجموعة القاصد للتجارة.",
    "tags": [
      "WordPress"
    ],
    "img": "/img/alkasid.jpg",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 36,
    "url": "https://aslalhaneeth.com/",
    "category": "wordpress",
    "titleEn": "Asl Alhaneeth",
    "titleAr": "مطعم أصل الحنيذ",
    "descEn": "Food & Beverage",
    "descAr": "منصة رقمية متكاملة لـ مطعم أصل الحنيذ.",
    "tags": [
      "WordPress"
    ],
    "img": "/img/alhaneeth.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 37,
    "url": "https://fostq.com/",
    "category": "web",
    "titleEn": "Fostq Agency",
    "titleAr": "وكالة فستق التسويقية",
    "descEn": "Marketing Agency",
    "descAr": "منصة رقمية متكاملة لـ وكالة فستق التسويقية.",
    "tags": [
      "React",
      "Tailwind",
      "Motion"
    ],
    "img": "/img/fostoq.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 38,
    "url": "https://elhodagold.com/",
    "category": "web",
    "titleEn": "El Hoda Gold",
    "titleAr": "الهدى للذهب والمجوهرات",
    "descEn": "Jewelry Store",
    "descAr": "منصة رقمية متكاملة لـ الهدى للذهب والمجوهرات.",
    "tags": [
      "React",
      "Next.js",
      "Tailwind"
    ],
    "img": "/img/elhodagold.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 39,
    "url": "https://www.hisas-contracting.com/",
    "category": "web",
    "titleEn": "Hisas Contracting",
    "titleAr": "حصص للمقاولات",
    "descEn": "Construction",
    "descAr": "منصة رقمية متكاملة لـ حصص للمقاولات.",
    "tags": [
      "React",
      "Tailwind",
      "Framermotion"
    ],
    "img": "/img/hisas.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 40,
    "url": "https://jawharatalrafidaintransport.com/",
    "category": "web",
    "titleEn": "Jawharat Al-Rafidain",
    "titleAr": "جوهرة الرافدين للنقل",
    "descEn": "Transport",
    "descAr": "منصة رقمية متكاملة لـ جوهرة الرافدين للنقل.",
    "tags": [
      "React",
      "Next.js",
      "Tailwind"
    ],
    "img": "/img/jawhra.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 41,
    "url": "https://aliens-space.org/",
    "category": "wordpress",
    "titleEn": "Aliens Space",
    "titleAr": "أليانز سبيس للتعليم",
    "descEn": "Business Solutions",
    "descAr": "منصة رقمية متكاملة لـ أليانز سبيس للتعليم.",
    "tags": [
      "WordPress",
      "Elementor"
    ],
    "img": "/img/alians.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 42,
    "url": "https://basmateck.com/",
    "category": "web",
    "titleEn": "Basma Teck",
    "titleAr": "بصمة تك",
    "descEn": "Software Solutions",
    "descAr": "منصة رقمية متكاملة لـ بصمة تك.",
    "tags": [
      "React",
      "Next.js",
      "Tailwind"
    ],
    "img": "/img/screencapture-basmateck-2026-05-16-12_41_20.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  },
  {
    "id": 43,
    "url": "https://abuelsuod.com/",
    "category": "web",
    "titleEn": "Abuelsuod Group",
    "titleAr": "مجموعة أبو السعود",
    "descEn": "Corporate Website",
    "descAr": "منصة رقمية متكاملة لـ مجموعة أبو السعود.",
    "tags": [
      "React",
      "Next.js",
      "Tailwind"
    ],
    "img": "/img/abusoud.png",
    "gradient": "linear-gradient(135deg, #12111a 0%, #07070a 100%)"
  }
];

const Works = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const title = lang === 'en' ? project.titleEn.toLowerCase() : project.titleAr;
    const desc = lang === 'en' ? project.descEn.toLowerCase() : project.descAr;
    const query = searchQuery.toLowerCase();
    const matchesSearch = title.includes(query) || desc.includes(query);
    return matchesFilter && matchesSearch;
  }).sort((a, b) => b.id - a.id);

  return (
    <div className={`page-layout works-page ${isVisible ? 'fade-in-active' : ''}`}>
      {/* Page Header */}
      <section className="page-hero-banner">
        <div className="banner-glow-effect"></div>
        <div className="banner-content">
          <span className="section-badge">{t('navWorks')}</span>
          <h1 className="banner-title">{t('worksTitle')}</h1>
          <p className="banner-subtitle">{t('worksSubtitle')}</p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="portfolio-filter-section">
        <div className="filter-wrapper">
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              {t('worksAll')}
            </button>
            <button 
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              {t('worksWeb')}
            </button>
            <button 
              className={`filter-btn ${filter === 'wordpress' ? 'active' : ''}`}
              onClick={() => setFilter('wordpress')}
            >
              {t('worksWordpress')}
            </button>
            <button 
              className={`filter-btn ${filter === 'marketing' ? 'active' : ''}`}
              onClick={() => setFilter('marketing')}
            >
              {t('worksMarketing')}
            </button>
          </div>

          <div className="search-bar-wrapper">
            <FiSearch className="search-bar-icon" />
            <input 
              type="text" 
              placeholder={lang === 'en' ? "Search projects..." : "ابحث عن المشاريع..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="portfolio-grid-section">
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card scroll-reveal-element show"
            >
              <div className="project-card-image" style={{ background: project.gradient }}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="mockup-link-wrapper" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                  <div className="mockup-frame">
                    <div className="mockup-header">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <div 
                      className="mockup-body" 
                      style={{ backgroundImage: `url(${project.img})` }}
                    >
                    </div>
                  </div>
                </a>
              </div>

              <div className="project-card-info">
                <div className="project-card-meta-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span className="project-category-badge">{project.category === 'web' ? t('worksWeb') : project.category === 'wordpress' ? t('worksWordpress') : t('worksMarketing')}</span>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="visit-live-icon-btn" title={t('worksVisitLive')} style={{ color: 'var(--purple-primary)', fontSize: '18px', display: 'flex' }}>
                    <FiExternalLink />
                  </a>
                </div>
                <h3 className="project-card-title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    {lang === 'en' ? project.titleEn : project.titleAr}
                  </a>
                </h3>
                <p className="project-card-desc">
                  {lang === 'en' ? project.descEn : project.descAr}
                </p>
                <div className="project-card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects-found">
            <p>{lang === 'en' ? "No projects match your search/filter criteria." : "لم يتم العثور على مشاريع تطابق معايير البحث."}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Works;
