import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navServices: "Services",
    navWorks: "Works",
    navContact: "Contact",
    heroBadge: "Smart Codix Agency",
    heroTitlePart1: "Code That ",
    heroTitleConverts: "Converts",
    heroTitlePart2: "Marketing That ",
    heroTitleScales: "Scales",
    heroDesc: "We build and market high-performance digital products engineered to rank, convert, and scale. From custom web apps to SEO and conversion-driven marketing.",
    heroCTA1: "Get Free Strategy Call",
    heroCTA2: "Explore Our Works",
    statsProjects: "Successful Projects",
    statsClients: "Happy Clients",
    statsExp: "Years Experience",
    statsTeam: "Expert Developers",
    servicesTitle: "Our Services",
    servicesSubtitle: "Growth Services That Turn Clicks Into Customers",
    servicesDesc: "We build premium interactive software and scale brands with target-oriented marketing.",
    serviceWebTitle: "Web Development",
    serviceWebDesc: "Crafting highly performant, secure, and custom web applications tailored to your business operations.",
    serviceMobileTitle: "Mobile Applications",
    serviceMobileDesc: "Creating responsive, fast, and feature-rich Android & iOS mobile applications for a seamless user experience.",
    serviceDesignTitle: "UX/UI Design",
    serviceDesignDesc: "Designing world-class, premium user interfaces that provide unforgettable digital journeys and high conversion rates.",
    serviceMarketingTitle: "Digital Marketing",
    serviceMarketingDesc: "Data-driven marketing campaigns, social media strategy, and paid ads engineered to boost your sales funnel.",
    serviceSeoTitle: "SEO Analytics & Growth",
    serviceSeoDesc: "Strategic search engine optimization to rank your business higher, drive organic traffic, and secure market lead.",
    aboutTitle: "About Smart Codix",
    aboutSubtitle: "We are not just another agency — we are your digital growth partners",
    aboutDesc1: "Smart Codix was founded to bridge the gap between world-class technical engineering and result-driven growth marketing. We specialize in building bespoke web applications, high-performance websites, and executing laser-focused marketing campaigns that scale.",
    aboutDesc2: "Led by Mohamed Abd Elfattah, a Senior Frontend & WordPress Developer with years of experience crafting premium digital solutions, our team delivers high-end aesthetics, smooth scrolling animations, and robust, clean codebases that drive conversions.",
    aboutTeamTitle: "Meet the Founder",
    aboutTeamRole: "Software Engineer",
    aboutTeamDesc: "Crafting premium interactive interfaces, custom web applications, and luxury WordPress platforms with pixel-perfect accuracy and high conversion strategies.",
    worksTitle: "Selected Works",
    worksSubtitle: "Premium Digital Products We Delivered",
    worksAll: "All Projects",
    worksWeb: "Web Apps",
    worksWordpress: "WordPress & CMS",
    worksMarketing: "Marketing & SEO",
    worksVisitLive: "Visit Live Project",
    contactTitle: "Let's Build Something Awesome",
    contactSubtitle: "Start Your Digital Transformation Journey Today",
    contactName: "Full Name",
    contactEmail: "Email Address",
    contactPhone: "Phone Number",
    contactMessage: "Project Details / Message",
    contactSubmit: "Send Message",
    contactSubmitting: "Sending...",
    contactSuccess: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
    contactInfoTitle: "Contact Info",
    contactInfoAddress: "Cairo, Egypt",
    contactInfoEmail: "info@smartcodix.com",
    contactInfoPhone: "+20 109 404 0671",
    whatsappBtn: "Chat on WhatsApp",
    footerText: "Premium web solutions and performance marketing engineered to rank, convert, and scale.",
    footerCopyright: "© 2026 Smart Codix. All rights reserved."
  },
  ar: {
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navWorks: "أعمالنا",
    navContact: "اتصل بنا",
    heroBadge: "وكالة سمارت كودكس",
    heroTitlePart1: "برمجة تحقق ",
    heroTitleConverts: "التحول",
    heroTitlePart2: "وتسويق يحقق ",
    heroTitleScales: "النمو",
    heroDesc: "نحن نقوم ببناء وتسويق منتجات رقمية عالية الأداء مصممة لتتصدر النتائج، تزيد المبيعات، وتتوسع بذكاء. من تطبيقات الويب المخصصة إلى تحسين محركات البحث والتسويق الرقمي.",
    heroCTA1: "احصل على استشارة مجانية",
    heroCTA2: "تصفح أعمالنا",
    statsProjects: "مشروع ناجح",
    statsClients: "عميل سعيد",
    statsExp: "سنوات خبرة",
    statsTeam: "مطورين خبراء",
    servicesTitle: "خدماتنا",
    servicesSubtitle: "خدمات نمو تحول النقرات إلى عملاء دائمين",
    servicesDesc: "نبني برمجيات تفاعلية فاخرة ونساعد الشركات على التوسع بحملات تسويقية دقيقة وهادفة.",
    serviceWebTitle: "تطوير تطبيقات الويب",
    serviceWebDesc: "تطوير تطبيقات ويب مخصصة، آمنة وعالية الأداء مصممة لتلائم عمليات شركتك وتزيد الكفاءة.",
    serviceMobileTitle: "تطبيقات الهواتف الذكية",
    serviceMobileDesc: "إنشاء تطبيقات هواتف ذكية (أندرويد وآيفون) سريعة، مستقرة، وتوفر تجربة مستخدم استثنائية.",
    serviceDesignTitle: "تصميم واجهات المستخدم UX/UI",
    serviceDesignDesc: "تصميم واجهات رقمية عالمية المستوى تضمن رحلة مستخدم لا تُنسى ومعدلات تحويل مرتفعة.",
    serviceMarketingTitle: "التسويق الرقمي",
    serviceMarketingDesc: "إطلاق حملات تسويقية مدروسة مبنية على البيانات وإدارة الإعلانات الممولة لمضاعفة مبيعاتك.",
    serviceSeoTitle: "تحسين محركات البحث SEO",
    serviceSeoDesc: "تهيئة موقعك بالكامل لمحركات البحث لرفع ترتيبك، جلب زيارات مجانية مستهدفة وضمان الصدارة في سوقك.",
    aboutTitle: "عن سمارت كودكس",
    aboutSubtitle: "لسنا مجرد وكالة برمجية — نحن شريك نموك الرقمي",
    aboutDesc1: "تأسست سمارت كودكس لدمج الهندسة البرمجية فائقة الجودة بالتسويق الرقمي الفعال الذي يحقق نتائج حقيقية. نحن متخصصون في بناء تطبيقات الويب المخصصة، المواقع الفاخرة، وإدارة الحملات الإعلانية القوية.",
    aboutDesc2: "بقيادة محمد عبد الفتاح، مطور واجهات المستخدم والووردبريس الخبير مع سنوات من الخبرة في صياغة الحلول الرقمية الراقية، يقدم فريقنا تصميمات بجماليات عصرية، حركة سلسة مع التمرير، وأكواد نظيفة وقوية تضمن أعلى معدلات التحويل.",
    aboutTeamTitle: "مؤسس الشركة",
    aboutTeamRole: "مهندس برمجيات",
    aboutTeamDesc: "خبير في صياغة واجهات الويب التفاعلية الفاخرة وتطوير تطبيقات الويب المخصصة وحلول الووردبريس الاحترافية بأعلى معايير الدقة والجمالية الاستثنائية.",
    worksTitle: "أعمالنا المميزة",
    worksSubtitle: "مواقع ومنتجات رقمية فاخرة قمنا بتسليمها",
    worksAll: "كل المشاريع",
    worksWeb: "تطبيقات الويب",
    worksWordpress: "ووردبريس ومواقع تعريفية",
    worksMarketing: "تسويق وSEO",
    worksVisitLive: "زيارة الموقع الحي",
    contactTitle: "دعنا نبني شيئاً مذهلاً",
    contactSubtitle: "ابدأ رحلة التحول الرقمي لشركتك اليوم",
    contactName: "الاسم الكامل",
    contactEmail: "البريد الإلكتروني",
    contactPhone: "رقم الهاتف",
    contactMessage: "تفاصيل المشروع / الرسالة",
    contactSubmit: "إرسال الرسالة",
    contactSubmitting: "جاري الإرسال...",
    contactSuccess: "شكرًا لك! تم إرسال رسالتك بنجاح. سنتواصل معك في أقرب وقت ممكن.",
    contactInfoTitle: "معلومات الاتصال",
    contactInfoAddress: "القاهرة، مصر",
    contactInfoEmail: "info@smartcodix.com",
    contactInfoPhone: "+20 109 404 0671",
    whatsappBtn: "تحدث معنا عبر واتساب",
    footerText: "حلول ويب برمجية فاخرة وتسويق رقمي مدروس مصمم للنمو، الصدارة، ومضاعفة المبيعات.",
    footerCopyright: "© 2026 سمارت كودكس. جميع الحقوق محفوظة."
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('smartcodix_lang') || 'ar';
  });

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ar' : 'en';
      localStorage.setItem('smartcodix_lang', next);
      return next;
    });
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
