import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  FiCheck, FiArrowRight, FiArrowLeft, FiCode, FiSmartphone, FiFigma, 
  FiTrendingUp, FiSearch, FiPlay, FiSettings, FiRefreshCw, 
  FiLayers, FiMaximize2, FiSend, FiGrid, FiCompass, FiBriefcase
} from 'react-icons/fi';

const Services = ({ setActivePage }) => {
  const { lang, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("web-dev");

  // Web Dev Sandbox State
  const [codeFile, setCodeFile] = useState("App.jsx");
  const [isRunning, setIsRunning] = useState(false);
  const [runLog, setRunLog] = useState("");

  // Phone App Simulator State
  const [phoneTheme, setPhoneTheme] = useState("dark");
  const [phoneNotif, setPhoneNotif] = useState(false);
  const [phoneTab, setPhoneTab] = useState("stats");

  // Figma Canvas State
  const [canvasBg, setCanvasBg] = useState("#0f0f16");
  const [accentColor, setAccentColor] = useState("#70e942");
  const [activeFigmaTool, setActiveFigmaTool] = useState("select");
  const [elementsOpacity, setElementsOpacity] = useState(1);

  // Marketing Budget State
  const [budget, setBudget] = useState(2500);

  // SEO Diagnostic State
  const [seoDomain, setSeoDomain] = useState("mysite.com");
  const [seoRunning, setSeoRunning] = useState(false);
  const [seoReport, setSeoReport] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const servicesData = [
    {
      id: "web-dev",
      icon: <FiCode />,
      titleKey: "serviceWebTitle",
      descKey: "serviceWebDesc",
      deliverablesEn: [
        "Single Page Applications (SPAs) with React & Vite",
        "Server-Side Rendered websites with Next.js",
        "Robust admin dashboards and backend controls",
        "API integration and secure database architectures"
      ],
      deliverablesAr: [
        "تطبيقات الصفحة الواحدة SPAs باستخدام React & Vite",
        "مواقع فائقة السرعة مع Next.js وSSR",
        "لوحات تحكم متقدمة لإدارة قواعد البيانات والعمليات",
        "ربط بوابات الدفع الإلكتروني والواجهات البرمجية APIs"
      ],
      tagEn: "Full-Stack Development",
      tagAr: "تطوير شامل متكامل"
    },
    {
      id: "mobile-dev",
      icon: <FiSmartphone />,
      titleKey: "serviceMobileTitle",
      descKey: "serviceMobileDesc",
      deliverablesEn: [
        "Hybrid mobile applications (React Native / Flutter)",
        "App Store & Google Play publishing assistance",
        "Push notifications and location-based triggers",
        "Offline synchronization capabilities"
      ],
      deliverablesAr: [
        "تطبيقات هجينة للهواتف باستخدام React Native / Flutter",
        "المساعدة الكاملة في النشر على App Store و Google Play",
        "تفعيل الإشعارات اللحظية والخدمات المستندة للموقع الجغرافي",
        "دعم العمل دون اتصال بالإنترنت والمزامنة التلقائية"
      ],
      tagEn: "iOS & Android",
      tagAr: "أندرويد وآيفون"
    },
    {
      id: "uiux-design",
      icon: <FiFigma />,
      titleKey: "serviceDesignTitle",
      descKey: "serviceDesignDesc",
      deliverablesEn: [
        "Interactive high-fidelity prototypes in Figma",
        "Modern dark-mode and light-mode configurations",
        "Custom design systems, typography & components",
        "UX audit and user journey optimization mappings"
      ],
      deliverablesAr: [
        "نماذج تفاعلية عالية الدقة والوضوح عبر Figma",
        "تصميم واجهات تدعم الوضع المظلم والمضيء بسلاسة",
        "بناء أنظمة التصميم والهويات البصرية المتكاملة للمواقع",
        "تدقيق وتحليل تجربة المستخدم لتسهيل عمليات الشراء والتسجيل"
      ],
      tagEn: "Figma UI/UX Artistry",
      tagAr: "تصميم واجهات احترافي"
    },
    {
      id: "digital-marketing",
      icon: <FiTrendingUp />,
      titleKey: "serviceMarketingTitle",
      descKey: "serviceMarketingDesc",
      deliverablesEn: [
        "Paid advertising structures (Google Ads, Meta, TikTok)",
        "Conversion rate optimization (CRO) setup",
        "Lead generation and email outreach strategies",
        "Full funnel building and analytic dashboards"
      ],
      deliverablesAr: [
        "إدارة الحملات الإعلانية المدفوعة (جوجل، ميتا، تيك توك)",
        "تهيئة وزيادة معدل التحويل للمتاجر والمواقع CRO",
        "استراتيجيات جلب العملاء المحتملين والتسويق بالبريد",
        "بناء مسارات البيع المتكاملة ولوحات تحليل الأداء"
      ],
      tagEn: "ROI & Funnel Scaling",
      tagAr: "إعلانات ممولة ومسارات نمو"
    },
    {
      id: "seo-growth",
      icon: <FiSearch />,
      titleKey: "serviceSeoTitle",
      descKey: "serviceSeoDesc",
      deliverablesEn: [
        "On-page SEO, schema markup, and meta tag optimizations",
        "Technical SEO, site speed enhancements, and indexing",
        "Keyword research, competitors mapping & link-building",
        "Local SEO & Google Business Profile setups"
      ],
      deliverablesAr: [
        "تحسين الكلمات المفتاحية في الصفحات وتنسيقات Schema",
        "التهيئة التقنية وسرعة تحميل الصفحات لرفع الترتيب",
        "دراسة المنافسين وبناء الروابط الخارجية القوية Backlinks",
        "تحسين ظهور الموقع محلياً وتهيئة حساب Google Business"
      ],
      tagEn: "Search Engine Supremacy",
      tagAr: "صدارة محركات البحث"
    }
  ];

  // Simulated Web Code Runner
  const runCodeSample = () => {
    setIsRunning(true);
    setRunLog(lang === 'en' ? "> Compiling bundles...\n> Optimizing assets...\n> Starting hot-reloading server..." : "> جاري التجميع...\n> تحسين الأصول والملفات...\n> تشغيل خادم المزامنة التلقائية...");
    
    setTimeout(() => {
      setRunLog(prev => prev + (lang === 'en' 
        ? "\n✔ Compiled successfully in 142ms!\n✔ Site active at http://localhost:3000\n> Performance Score: 100/100" 
        : "\n✔ تم التجميع بنجاح في 142ms!\n✔ الموقع نشط الآن على http://localhost:3000\n> نتيجة الأداء والسرعة: 100/100"));
      setIsRunning(false);
    }, 1200);
  };

  // Simulated SEO Checker
  const runSeoCheck = (e) => {
    e.preventDefault();
    if (!seoDomain) return;
    setSeoRunning(true);
    setSeoReport(null);

    setTimeout(() => {
      const score = Math.floor(Math.random() * 15) + 85; // 85 to 99
      setSeoReport({
        score,
        speed: (Math.random() * 0.8 + 0.3).toFixed(1) + "s",
        errors: Math.floor(Math.random() * 2),
        warnings: Math.floor(Math.random() * 4) + 1,
        mobileFriendly: true
      });
      setSeoRunning(false);
    }, 1500);
  };

  const currentActiveService = servicesData.find(s => s.id === activeTab) || servicesData[0];

  return (
    <div className={`page-layout services-page ${isVisible ? 'fade-in-active' : ''}`}>
      {/* Banner Section */}
      <section className="page-hero-banner">
        <div className="banner-glow-effect"></div>
        <div className="banner-content">
          <span className="section-badge">{t('navServices')}</span>
          <h1 className="banner-title">{t('servicesTitle')}</h1>
          <p className="banner-subtitle">{t('servicesSubtitle')}</p>
        </div>
      </section>

      {/* Interactive Hub Section */}
      <section className="services-hub-section">
        <div className="services-hub-layout">
          
          {/* Left panel: Service Selector Tabs */}
          <div className="services-nav-panel">
            <div className="panel-header">
              <span className="panel-dot red"></span>
              <span className="panel-dot yellow"></span>
              <span className="panel-dot green"></span>
              <span className="panel-title">{lang === 'en' ? "Growth Engine v2.6" : "محرك النمو الرقمي v2.6"}</span>
            </div>
            
            <div className="services-selectors-list">
              {servicesData.map((service) => {
                const isActive = service.id === activeTab;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setActiveTab(service.id);
                      setRunLog("");
                      setSeoReport(null);
                    }}
                    className={`service-selector-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="selector-icon">{service.icon}</div>
                    <div className="selector-meta">
                      <span className="selector-tag">
                        {lang === 'en' ? service.tagEn : service.tagAr}
                      </span>
                      <h3 className="selector-title">{t(service.titleKey)}</h3>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right panel: Active Sandbox Dashboard */}
          <div className="services-sandbox-panel">
            <div className="sandbox-glow-bg"></div>
            
            {/* Details & Sandbox Header */}
            <div className="sandbox-panel-header">
              <div className="header-icon">{currentActiveService.icon}</div>
              <h2 className="header-title">{t(currentActiveService.titleKey)}</h2>
            </div>
            
            <p className="sandbox-description">{t(currentActiveService.descKey)}</p>

            {/* Sandbox Split Workspace */}
            <div className="sandbox-workspace-grid">
              
              {/* Left Sandbox Grid: Deliverables */}
              <div className="sandbox-deliverables-box">
                <h4 className="box-section-title">
                  {lang === 'en' ? "Included Scope & Capabilities" : "نطاق العمل والحلول الإضافية"}
                </h4>
                <ul className="sandbox-deliverables-list">
                  {(lang === 'en' ? currentActiveService.deliverablesEn : currentActiveService.deliverablesAr).map((item, idx) => (
                    <li key={idx} className="deliverable-item-anim">
                      <div className="check-bullet">
                        <FiCheck />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Sandbox Grid: Interactive Showcase */}
              <div className="sandbox-interactive-display">
                
                {/* 1. WEB DEV SANDBOX */}
                {activeTab === "web-dev" && (
                  <div className="console-visual web-console">
                    <div className="console-tab-header">
                      <button 
                        onClick={() => setCodeFile("App.jsx")} 
                        className={`console-tab-btn ${codeFile === "App.jsx" ? "active" : ""}`}
                      >
                        App.jsx
                      </button>
                      <button 
                        onClick={() => setCodeFile("index.css")} 
                        className={`console-tab-btn ${codeFile === "index.css" ? "active" : ""}`}
                      >
                        index.css
                      </button>
                    </div>
                    
                    <div className="console-editor-body">
                      {codeFile === "App.jsx" ? (
                        <pre className="code-text-area">
                          <code>
                            <span className="hl-k">import</span> React <span className="hl-k">from</span> <span className="hl-s">'react'</span>;<br/>
                            <span className="hl-k">const</span> <span className="hl-f">SmartCodix</span> = () =&gt; &#123;<br/>
                            &nbsp;&nbsp;<span className="hl-k">return</span> (<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="hl-t">div</span> <span className="hl-a">className</span>=<span className="hl-s">"growth-hub"</span>&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="hl-t">h1</span>&gt;Code That Converts&lt;/<span className="hl-t">h1</span>&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="hl-t">p</span>&gt;Marketing That Scales&lt;/<span className="hl-t">p</span>&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="hl-t">div</span>&gt;<br/>
                            &nbsp;&nbsp;);<br/>
                            &#125;;<br/>
                            <span className="hl-k">export default</span> SmartCodix;
                          </code>
                        </pre>
                      ) : (
                        <pre className="code-text-area">
                          <code>
                            <span className="hl-t">:root</span> &#123;<br/>
                            &nbsp;&nbsp;<span className="hl-a">--brand-color</span>: <span className="hl-s">#70e942</span>;<br/>
                            &nbsp;&nbsp;<span className="hl-a">--aesthetic-glow</span>: <span className="hl-s">rgba(112, 233, 66, 0.45)</span>;<br/>
                            &#125;<br/>
                            <span className="hl-t">.growth-hub</span> &#123;<br/>
                            &nbsp;&nbsp;<span className="hl-a">display</span>: flex;<br/>
                            &nbsp;&nbsp;<span className="hl-a">animation</span>: <span className="hl-f">pulse 2s infinite</span>;<br/>
                            &#125;
                          </code>
                        </pre>
                      )}
                    </div>

                    <div className="console-action-footer">
                      <button 
                        onClick={runCodeSample} 
                        disabled={isRunning}
                        className="console-run-btn"
                      >
                        <FiPlay />
                        <span>{isRunning ? (lang === 'en' ? "Running..." : "جاري التشغيل...") : (lang === 'en' ? "Compile & Run" : "تجميع وتشغيل الكود")}</span>
                      </button>
                    </div>

                    {runLog && (
                      <div className="console-output-box">
                        <pre className="console-logs">{runLog}</pre>
                      </div>
                    )}
                  </div>
                )}

                {/* 2. MOBILE APP SANDBOX */}
                {activeTab === "mobile-dev" && (
                  <div className="console-visual phone-console">
                    {/* Device Simulator Options */}
                    <div className="device-controls">
                      <button 
                        onClick={() => setPhoneTheme(phoneTheme === "dark" ? "light" : "dark")} 
                        className="device-control-btn"
                        title="Toggle App Theme"
                      >
                        {phoneTheme === "dark" ? "Light Mode" : "Dark Mode"}
                      </button>
                      <button 
                        onClick={() => {
                          setPhoneNotif(true);
                          setTimeout(() => setPhoneNotif(false), 3000);
                        }} 
                        className="device-control-btn active-lime"
                      >
                        Send Alert
                      </button>
                    </div>

                    {/* Phone Chassis */}
                    <div className={`phone-simulator-frame ${phoneTheme}`}>
                      <div className="phone-earpiece"></div>
                      <div className="phone-screen-area">
                        {/* Status bar */}
                        <div className="phone-status-bar">
                          <span className="time">09:41</span>
                          <div className="signals">
                            <span className="signal-dot filled"></span>
                            <span className="signal-dot filled"></span>
                            <span className="battery"></span>
                          </div>
                        </div>

                        {/* Push Notification Panel */}
                        <div className={`native-notification ${phoneNotif ? "show" : ""}`}>
                          <div className="notif-header">
                            <span className="notif-logo">S</span>
                            <span className="notif-title">Smart Codix</span>
                          </div>
                          <p className="notif-body">
                            {lang === 'en' ? "🎉 Campaign optimized! Sales increased by 38%." : "🎉 تم تحسين الحملة! زيادة المبيعات بمعدل 38%."}
                          </p>
                        </div>

                        {/* App Navigation Header */}
                        <div className="phone-app-navbar">
                          <span className="app-logo">SMART CODIX</span>
                          <FiSettings className="app-icon" />
                        </div>

                        {/* Active Screens */}
                        <div className="phone-screen-content">
                          {phoneTab === "stats" ? (
                            <div className="stats-tab-content">
                              <span className="tab-label">{lang === 'en' ? "Conversion Funnel" : "قمع تحويل المبيعات"}</span>
                              <div className="progress-bar-stat">
                                <div className="bar-label"><span>Landing Views</span><span>88%</span></div>
                                <div className="bar-track"><div className="bar-fill" style={{ width: '88%' }}></div></div>
                              </div>
                              <div className="progress-bar-stat">
                                <div className="bar-label"><span>Cart Additions</span><span>54%</span></div>
                                <div className="bar-track"><div className="bar-fill" style={{ width: '54%' }}></div></div>
                              </div>
                              <div className="progress-bar-stat">
                                <div className="bar-label"><span>Purchases</span><span>21%</span></div>
                                <div className="bar-track"><div className="bar-fill active" style={{ width: '21%' }}></div></div>
                              </div>
                            </div>
                          ) : (
                            <div className="profile-tab-content">
                              <div className="mock-avatar"></div>
                              <h4 className="profile-name">Founder Mohamed</h4>
                              <p className="profile-job">Software Engineer</p>
                              <div className="badge-row-mock">
                                <span className="mock-badge">React Native</span>
                                <span className="mock-badge">Flutter</span>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* App Bottom Tabs */}
                        <div className="phone-app-bottom-nav">
                          <button 
                            onClick={() => setPhoneTab("stats")} 
                            className={`bottom-tab-btn ${phoneTab === "stats" ? "active" : ""}`}
                          >
                            <FiGrid />
                          </button>
                          <button 
                            onClick={() => setPhoneTab("profile")} 
                            className={`bottom-tab-btn ${phoneTab === "profile" ? "active" : ""}`}
                          >
                            <FiCompass />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. UX/UI DESIGN WORKSPACE */}
                {activeTab === "uiux-design" && (
                  <div className="console-visual figma-console">
                    {/* Figma toolbar */}
                    <div className="figma-toolbar-ribbon">
                      <button 
                        onClick={() => setActiveFigmaTool("select")}
                        className={`toolbar-btn ${activeFigmaTool === "select" ? "active" : ""}`}
                        title="Select Element"
                      >
                        Cursor
                      </button>
                      <button 
                        onClick={() => setActiveFigmaTool("colors")}
                        className={`toolbar-btn ${activeFigmaTool === "colors" ? "active" : ""}`}
                        title="Palette Editor"
                      >
                        Colors
                      </button>
                      <button 
                        onClick={() => setElementsOpacity(elementsOpacity === 1 ? 0.6 : 1)}
                        className="toolbar-btn"
                        title="Toggle Transparency"
                      >
                        Opacity
                      </button>
                    </div>

                    {/* Figma Canvas Area */}
                    <div className="figma-canvas-area" style={{ backgroundColor: canvasBg }}>
                      <div className="canvas-grid-pattern"></div>
                      
                      {activeFigmaTool === "colors" && (
                        <div className="canvas-palette-picker">
                          <button onClick={() => setCanvasBg("#0f0f16")} className="color-dot bg-dark-purple"></button>
                          <button onClick={() => setCanvasBg("#1a1a24")} className="color-dot bg-dark-gray"></button>
                          <button onClick={() => setCanvasBg("#0a2512")} className="color-dot bg-dark-green"></button>
                          <span className="picker-text">{lang === 'en' ? "Canvas Theme" : "خلفية اللوحة"}</span>
                        </div>
                      )}

                      {/* Mock Figma Card */}
                      <div 
                        className="figma-card-element"
                        style={{ 
                          opacity: elementsOpacity,
                          borderColor: accentColor,
                          boxShadow: `0 8px 30px ${accentColor}25`
                        }}
                      >
                        <div className="element-badge" style={{ backgroundColor: accentColor + "20", color: accentColor }}>
                          Prototype Wireframe
                        </div>
                        <h4 className="element-title">{lang === 'en' ? "Premium Landing Card" : "بطاقة الواجهة الممتازة"}</h4>
                        <div className="element-desc-line"></div>
                        <div className="element-desc-line short"></div>
                        <button className="element-action-btn" style={{ backgroundColor: accentColor }}>
                          {lang === 'en' ? "Explore" : "استكشف"}
                        </button>
                      </div>

                      {/* Accent Color Picker for Card */}
                      <div className="canvas-accent-picker">
                        <button onClick={() => setAccentColor("#70e942")} className="accent-dot bg-lime"></button>
                        <button onClick={() => setAccentColor("#38bdf8")} className="accent-dot bg-cyan"></button>
                        <button onClick={() => setAccentColor("#ec4899")} className="accent-dot bg-pink"></button>
                        <span className="picker-text">{lang === 'en' ? "Accent Accent" : "اللون الرئيسي"}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. DIGITAL MARKETING SIMULATOR */}
                {activeTab === "digital-marketing" && (
                  <div className="console-visual marketing-console">
                    <div className="marketing-slider-group">
                      <div className="slider-label-row">
                        <span>{lang === 'en' ? "Simulated Ad Budget:" : "ميزانية الإعلانات المقترحة:"}</span>
                        <span className="budget-value">${budget.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" 
                        min="500" 
                        max="10000" 
                        step="500" 
                        value={budget} 
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="marketing-budget-slider"
                      />
                    </div>

                    <div className="simulated-results-dashboard">
                      <div className="sim-metric-box">
                        <span className="metric-title">{lang === 'en' ? "Estimated Reach" : "الوصول المتوقع"}</span>
                        <h3 className="metric-number">{(budget * 12).toLocaleString()}</h3>
                      </div>
                      <div className="sim-metric-box">
                        <span className="metric-title">{lang === 'en' ? "Leads Generated" : "العملاء المحتملين"}</span>
                        <h3 className="metric-number">{(budget * 0.22).toFixed(0)}</h3>
                      </div>
                      <div className="sim-metric-box">
                        <span className="metric-title">{lang === 'en' ? "Conversions / Sales" : "المبيعات المتوقعة"}</span>
                        <h3 className="metric-number" style={{ color: "#70e942" }}>
                          {(budget * 0.08).toFixed(0)}
                        </h3>
                      </div>
                      <div className="sim-metric-box">
                        <span className="metric-title">{lang === 'en' ? "Est. ROAS" : "العائد على الإعلانات"}</span>
                        <h3 className="metric-number">4.2x</h3>
                      </div>
                    </div>

                    <div className="marketing-simulation-chart">
                      <div className="chart-line-indicator">{lang === 'en' ? "Revenue Forecast Curve" : "منحنى المبيعات المتوقع"}</div>
                      <div className="chart-bar-container">
                        <div className="chart-bar-growth" style={{ height: '20%' }}></div>
                        <div className="chart-bar-growth" style={{ height: '40%' }}></div>
                        <div className="chart-bar-growth" style={{ height: '65%' }}></div>
                        <div className="chart-bar-growth active" style={{ height: `${Math.min(95, 30 + (budget / 120))}%` }}></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. SEO SEARCH CONSOLE TESTBED */}
                {activeTab === "seo-growth" && (
                  <div className="console-visual seo-console">
                    <form onSubmit={runSeoCheck} className="seo-testbed-form">
                      <input 
                        type="text" 
                        value={seoDomain} 
                        onChange={(e) => setSeoDomain(e.target.value)} 
                        placeholder="yourdomain.com"
                        className="seo-domain-input"
                      />
                      <button 
                        type="submit" 
                        disabled={seoRunning}
                        className="seo-analyze-btn"
                      >
                        {seoRunning ? (lang === 'en' ? "Analyzing..." : "جاري الفحص...") : (lang === 'en' ? "Scan Site" : "فحص الموقع")}
                      </button>
                    </form>

                    {seoRunning && (
                      <div className="seo-terminal-loader">
                        <FiRefreshCw className="spinner-icon" />
                        <p>{lang === 'en' ? "Analyzing mobile viewport optimization, schema markup metadata, and PageSpeed metrics..." : "جاري فحص سرعة الصفحات، تهيئة Schema، ودعم الهواتف..."}</p>
                      </div>
                    )}

                    {!seoRunning && seoReport ? (
                      <div className="seo-report-card">
                        <div className="report-main-row">
                          <div className="score-circle-meter">
                            <span className="score-number" style={{ color: seoReport.score > 90 ? "#70e942" : "#ffbd2e" }}>
                              {seoReport.score}
                            </span>
                            <span className="score-label">/100</span>
                          </div>
                          
                          <div className="report-details-list">
                            <div className="report-detail-item">
                              <span>{lang === 'en' ? "First Contentful Paint:" : "سرعة استجابة الصفحة:"}</span>
                              <strong className="text-lime">{seoReport.speed}</strong>
                            </div>
                            <div className="report-detail-item">
                              <span>{lang === 'en' ? "Errors & Critical Blunders:" : "الأخطاء البرمجية الحرجة:"}</span>
                              <strong className={seoReport.errors > 0 ? "text-red" : "text-lime"}>{seoReport.errors}</strong>
                            </div>
                            <div className="report-detail-item">
                              <span>{lang === 'en' ? "Mobile Viewport Friendly:" : "التوافق مع الهواتف:"}</span>
                              <strong className="text-lime">{lang === 'en' ? "Yes (Excellent)" : "نعم (ممتاز)"}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="report-verdict-note">
                          <span>{lang === 'en' ? "Verdict:" : "التقرير والنتيجة:"}</span>
                          <p>
                            {lang === 'en' 
                              ? "Excellent meta configuration. We can boost your keywords into the top 3 with dedicated backlink models." 
                              : "تهيئة برمجية وسيو ممتازة. يمكننا دفع موقعك لصدارة أول 3 نتائج بجداول بناء الروابط الذكية."}
                          </p>
                        </div>
                      </div>
                    ) : !seoRunning && (
                      <div className="seo-terminal-placeholder">
                        <FiSearch className="placeholder-icon" />
                        <p>{lang === 'en' ? "Enter your domain to run a simulated SEO and page speed audit report." : "أدخل اسم موقعك لتشغيل تقرير محاكاة السيو وسرعة تحميل الصفحات."}</p>
                      </div>
                    )}
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer Call to Action Block */}
      <section className="services-cta-section">
        <div className="services-cta-card">
          <div className="cta-card-glow"></div>
          <h2 className="cta-card-title">
            {lang === 'en' ? "Ready to Scale Your Digital Presence?" : "هل أنت مستعد لمضاعفة أرباحك وتوسيع نشاطك؟"}
          </h2>
          <p className="cta-card-desc">
            {lang === 'en' 
              ? "Let's build custom web systems and target-oriented marketing plans tailored to your growth goals." 
              : "دعنا نتعاون لبناء حلول ويب برمجية فاخرة وإطلاق حملات تسويقية ذكية تضمن صدارتك في السوق."}
          </p>
          <button 
            onClick={() => {
              if (setActivePage) {
                setActivePage('contact');
              } else {
                window.location.hash = '#contact';
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="cta-primary-btn"
          >
            <span>{t('heroCTA1')}</span>
            {lang === 'en' ? <FiArrowRight /> : <FiArrowLeft />}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;
