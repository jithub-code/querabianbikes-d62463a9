import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.product": "OUXI V8",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve Now",
    
    // Hero Section
    "hero.badge": "First Time in Saudi Arabia",
    "hero.headline1": "Europe's Most Popular",
    "hero.headline2": "Fat-Tire E-Bike",
    "hero.subheadline": "The OUXI V8 — dominating streets across the Netherlands. Now bringing premium urban mobility to Medina at a disruptive price.",
    "hero.badge1": "European Best-Seller",
    "hero.badge2": "Premium Quality",
    "hero.cta1": "Reserve Yours",
    "hero.cta2": "View OUXI V8",
    "hero.urgency": "⚡ Limited launch units available — First batch shipping soon",
    
    // Problem Solution Section
    "problem.label": "The Problem",
    "problem.headline1": "E-Bikes in Saudi",
    "problem.headline2": "Aren't Made For You",
    "problem.item1.title": "Overpriced",
    "problem.item1.desc": "E-bikes in Saudi cost 4,000–6,000 SAR",
    "problem.item2.title": "Boring Designs",
    "problem.item2.desc": "Generic looks that don't stand out",
    "problem.item3.title": "Not Youth-Focused",
    "problem.item3.desc": "Made for utility, not style",
    "solution.label": "The Solution",
    "solution.headline1": "Querabian Bikes",
    "solution.headline2": "Changes Everything",
    "solution.product": "OUXI V8",
    "solution.productSub": "Europe's Favorite Fat-Tire E-Bike",
    "solution.item1": "Premium European design & quality",
    "solution.item2": "Viral-ready, Instagram-worthy style",
    "solution.item3": "Disruptive pricing — finally affordable",
    "solution.item4": "Built for Saudi streets & climate",
    
    // Product Showcase
    "product.label": "Introducing",
    "product.headline": "The OUXI V8",
    "product.subheadline": "The fat-tire e-bike that's dominating European streets. Bold design meets unstoppable performance.",
    "product.badge": "Instagram-Ready Design",
    "product.feature1.title": "Fat Tires",
    "product.feature1.desc": "4-inch wide tires for maximum stability on any terrain",
    "product.feature2.title": "Powerful Motor",
    "product.feature2.desc": "High-torque motor for smooth acceleration up to 45 km/h",
    "product.feature3.title": "Long Range",
    "product.feature3.desc": "Up to 60km range on a single charge",
    "product.spec1": "Top Speed",
    "product.spec2": "Range",
    "product.spec3": "Motor",
    "product.spec4": "Warranty",
    "product.cta": "Reserve Your Bike",
    "product.footer": "Built for Saudi streets • Perfect for any terrain",
    
    // Why Querabian Section
    "why.label": "Our Advantage",
    "why.headline": "Why Querabian Bikes Wins",
    "why.subheadline": "We're not just selling bikes. We're starting a movement.",
    "why.item1.title": "First to Market",
    "why.item1.desc": "We're bringing the OUXI V8 to Saudi Arabia for the very first time. No competition.",
    "why.item2.title": "European-Tested",
    "why.item2.desc": "Proven design loved across the Netherlands and Europe. Now available locally.",
    "why.item3.title": "Unbeatable Value",
    "why.item3.desc": "Premium quality at a fraction of what others charge. Best ROI in the market.",
    "why.item4.title": "Youth-First Brand",
    "why.item4.desc": "Built by young entrepreneurs who understand what riders actually want.",
    "why.item5.title": "Viral Potential",
    "why.item5.desc": "Eye-catching design that's made for social media. Stand out on every ride.",
    "why.item6.title": "Local Support",
    "why.item6.desc": "Real people in Medina ready to help. Not an overseas call center.",
    
    // Pricing Section
    "pricing.label": "Launch Pricing",
    "pricing.headline1": "Premium Bike,",
    "pricing.headline2": "Disruptive Price",
    "pricing.subheadline": "We're launching at a price that makes premium mobility accessible to everyone.",
    "pricing.badge": "Launch Special",
    "pricing.othersCharge": "Others charge",
    "pricing.ourPrice": "Our Launch Price",
    "pricing.save": "Save over 50%",
    "pricing.included": "What's Included",
    "pricing.item1": "OUXI V8 Fat-Tire E-Bike",
    "pricing.item2": "Charger & Cable",
    "pricing.item3": "User Manual",
    "pricing.item4": "1 Year Warranty",
    "pricing.item5": "Local Medina Support",
    "pricing.delivery": "Delivery Available",
    "pricing.deliveryNote": "Medina pickup or delivery (fees apply)",
    "pricing.cta1": "Reserve Now",
    "pricing.cta2": "DM on Snapchat",
    "pricing.urgency": "First batch limited • Price increases after sellout",
    
    // Social Proof Section
    "proof.label": "Why Trust Us",
    "proof.headline1": "Be Part of Something",
    "proof.headline2": "New",
    "proof.subheadline": "We're launching a new era of urban mobility in Saudi Arabia. Early adopters get the best price and bragging rights.",
    "proof.item1.title": "Coming Soon to Medina",
    "proof.item1.desc": "Local presence, real support",
    "proof.item2.title": "European Best-Seller",
    "proof.item2.desc": "Loved across the Netherlands",
    "proof.item3.title": "Trusted Quality",
    "proof.item3.desc": "Premium build, reliable performance",
    "proof.item4.title": "Youth Movement",
    "proof.item4.desc": "Join the mobility revolution",
    "proof.testimonial": "Customer reviews and influencer clips coming soon as we launch.",
    "proof.testimonialCta": "Be one of the first to share your experience",
    
    // About Section
    "about.label": "About Us",
    "about.headline1": "Built by Young",
    "about.headline2": "Entrepreneurs",
    "about.description": "Querabian Bikes was founded with a simple belief: premium mobility should be accessible to everyone. We're young, we're driven, and we're here to change how Saudi Arabia moves.",
    "about.mission.title": "Our Mission",
    "about.mission.desc": "Make stylish, reliable mobility accessible to every young person in Saudi Arabia.",
    "about.vision.title": "Our Vision",
    "about.vision.desc": "Become Saudi Arabia's leading youth mobility brand, expanding nationwide and beyond.",
    "about.promise.title": "Our Promise",
    "about.promise.desc": "Quality you can trust, style you'll love, and prices that make sense.",
    "about.stat1.value": "1st",
    "about.stat1.label": "OUXI V8 importer in KSA",
    "about.stat2.value": "50%+",
    "about.stat2.label": "Savings vs competitors",
    "about.stat3.value": "16-30",
    "about.stat3.label": "Target age group",
    "about.stat4.label": "Made for Saudi streets",
    
    // Contact Section
    "contact.label": "Get In Touch",
    "contact.headline1": "Join the",
    "contact.headline2": "Movement",
    "contact.subheadline": "Ready to own the streets? Reach out now to reserve your OUXI V8 or ask any questions. We're here to help.",
    "contact.snapchat": "Snapchat",
    "contact.whatsapp": "WhatsApp",
    "contact.instagram": "Instagram",
    "contact.clickToChat": "Click to Chat",
    "contact.dmUs": "DM Us",
    "contact.message": "Message",
    "contact.follow": "Follow",
    "contact.location.title": "Pickup Location",
    "contact.location.city": "Medina, Saudi Arabia",
    "contact.location.note": "Local pickup available • Delivery to other cities (fees apply)",
    "contact.form.title": "Quick Inquiry",
    "contact.form.name": "Your Name",
    "contact.form.phone": "Phone / WhatsApp",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    
    // Footer
    "footer.tagline": "Urban mobility for Saudi Arabia's youth",
    "footer.rights": "All rights reserved.",
    "footer.location": "Medina, Saudi Arabia",
  },
  ar: {
    // Header
    "nav.product": "OUXI V8",
    "nav.features": "المميزات",
    "nav.pricing": "الأسعار",
    "nav.about": "من نحن",
    "nav.contact": "تواصل معنا",
    "nav.reserve": "احجز الآن",
    
    // Hero Section
    "hero.badge": "لأول مرة في السعودية",
    "hero.headline1": "الدراجة الكهربائية الأكثر شهرة",
    "hero.headline2": "في أوروبا",
    "hero.subheadline": "دراجة OUXI V8 — تسيطر على شوارع هولندا. الآن نقدم لكم التنقل الحضري الفاخر في المدينة المنورة بسعر منافس.",
    "hero.badge1": "الأكثر مبيعاً في أوروبا",
    "hero.badge2": "جودة عالية",
    "hero.cta1": "احجز دراجتك",
    "hero.cta2": "شاهد OUXI V8",
    "hero.urgency": "⚡ كميات محدودة — الدفعة الأولى قريباً",
    
    // Problem Solution Section
    "problem.label": "المشكلة",
    "problem.headline1": "الدراجات الكهربائية في السعودية",
    "problem.headline2": "ليست مصممة لك",
    "problem.item1.title": "أسعار مرتفعة",
    "problem.item1.desc": "الدراجات الكهربائية تكلف 4,000-6,000 ريال",
    "problem.item2.title": "تصاميم مملة",
    "problem.item2.desc": "مظهر عادي لا يلفت الانتباه",
    "problem.item3.title": "ليست للشباب",
    "problem.item3.desc": "مصممة للنقل فقط، وليس للأناقة",
    "solution.label": "الحل",
    "solution.headline1": "كيورابيان بايكس",
    "solution.headline2": "تغير كل شيء",
    "solution.product": "OUXI V8",
    "solution.productSub": "الدراجة الكهربائية المفضلة في أوروبا",
    "solution.item1": "تصميم وجودة أوروبية فاخرة",
    "solution.item2": "تصميم جاهز للانستغرام والسوشيال ميديا",
    "solution.item3": "سعر منافس — أخيراً في متناول الجميع",
    "solution.item4": "مصممة لشوارع ومناخ السعودية",
    
    // Product Showcase
    "product.label": "نقدم لكم",
    "product.headline": "OUXI V8",
    "product.subheadline": "الدراجة ذات الإطارات العريضة التي تسيطر على الشوارع الأوروبية. تصميم جريء يلتقي بأداء لا يُقهر.",
    "product.badge": "تصميم جاهز للانستغرام",
    "product.feature1.title": "إطارات عريضة",
    "product.feature1.desc": "إطارات بعرض 4 إنش لأقصى ثبات على أي تضاريس",
    "product.feature2.title": "محرك قوي",
    "product.feature2.desc": "محرك عالي العزم لتسارع سلس حتى 45 كم/س",
    "product.feature3.title": "مدى طويل",
    "product.feature3.desc": "حتى 60 كم بشحنة واحدة",
    "product.spec1": "السرعة القصوى",
    "product.spec2": "المدى",
    "product.spec3": "المحرك",
    "product.spec4": "الضمان",
    "product.cta": "احجز دراجتك",
    "product.footer": "مصممة لشوارع السعودية • مثالية لأي تضاريس",
    
    // Why Querabian Section
    "why.label": "مميزاتنا",
    "why.headline": "لماذا كيورابيان بايكس؟",
    "why.subheadline": "نحن لا نبيع دراجات فقط. نحن نبدأ حركة.",
    "why.item1.title": "الأول في السوق",
    "why.item1.desc": "نحن نجلب OUXI V8 للسعودية لأول مرة. بدون منافسة.",
    "why.item2.title": "مختبرة أوروبياً",
    "why.item2.desc": "تصميم مثبت ومحبوب في هولندا وأوروبا. الآن متاحة محلياً.",
    "why.item3.title": "قيمة لا تُقاوم",
    "why.item3.desc": "جودة عالية بجزء من أسعار المنافسين. أفضل عائد على الاستثمار.",
    "why.item4.title": "علامة تجارية للشباب",
    "why.item4.desc": "بناها رواد أعمال شباب يفهمون ما يريده الراكبون حقاً.",
    "why.item5.title": "إمكانية الانتشار",
    "why.item5.desc": "تصميم ملفت للنظر مصمم للسوشيال ميديا. تميز في كل رحلة.",
    "why.item6.title": "دعم محلي",
    "why.item6.desc": "أشخاص حقيقيون في المدينة المنورة جاهزون للمساعدة.",
    
    // Pricing Section
    "pricing.label": "سعر الإطلاق",
    "pricing.headline1": "دراجة فاخرة،",
    "pricing.headline2": "سعر منافس",
    "pricing.subheadline": "نطلق بسعر يجعل التنقل الفاخر في متناول الجميع.",
    "pricing.badge": "عرض الإطلاق",
    "pricing.othersCharge": "الآخرون يبيعون بـ",
    "pricing.ourPrice": "سعر الإطلاق",
    "pricing.save": "وفر أكثر من 50%",
    "pricing.included": "يشمل",
    "pricing.item1": "دراجة OUXI V8 الكهربائية",
    "pricing.item2": "شاحن وكيبل",
    "pricing.item3": "دليل المستخدم",
    "pricing.item4": "ضمان سنة",
    "pricing.item5": "دعم محلي في المدينة",
    "pricing.delivery": "التوصيل متاح",
    "pricing.deliveryNote": "استلام من المدينة أو توصيل (رسوم إضافية)",
    "pricing.cta1": "احجز الآن",
    "pricing.cta2": "راسلنا على سناب شات",
    "pricing.urgency": "الدفعة الأولى محدودة • السعر يرتفع بعد النفاذ",
    
    // Social Proof Section
    "proof.label": "لماذا تثق بنا",
    "proof.headline1": "كن جزءاً من شيء",
    "proof.headline2": "جديد",
    "proof.subheadline": "نحن نطلق عصراً جديداً من التنقل الحضري في السعودية. المتبنون الأوائل يحصلون على أفضل سعر.",
    "proof.item1.title": "قريباً في المدينة",
    "proof.item1.desc": "تواجد محلي، دعم حقيقي",
    "proof.item2.title": "الأكثر مبيعاً في أوروبا",
    "proof.item2.desc": "محبوبة في هولندا",
    "proof.item3.title": "جودة موثوقة",
    "proof.item3.desc": "بناء فاخر، أداء موثوق",
    "proof.item4.title": "حركة الشباب",
    "proof.item4.desc": "انضم لثورة التنقل",
    "proof.testimonial": "آراء العملاء ومقاطع المؤثرين قريباً مع الإطلاق.",
    "proof.testimonialCta": "كن من أوائل من يشارك تجربته",
    
    // About Section
    "about.label": "من نحن",
    "about.headline1": "بناها رواد أعمال",
    "about.headline2": "شباب",
    "about.description": "تأسست كيورابيان بايكس بإيمان بسيط: التنقل الفاخر يجب أن يكون في متناول الجميع. نحن شباب، نحن طموحون، ونحن هنا لتغيير طريقة تنقل السعودية.",
    "about.mission.title": "مهمتنا",
    "about.mission.desc": "جعل التنقل الأنيق والموثوق في متناول كل شاب في السعودية.",
    "about.vision.title": "رؤيتنا",
    "about.vision.desc": "أن نصبح العلامة التجارية الرائدة للتنقل الشبابي في السعودية والتوسع على مستوى المملكة.",
    "about.promise.title": "وعدنا",
    "about.promise.desc": "جودة تثق بها، أناقة تحبها، وأسعار منطقية.",
    "about.stat1.value": "الأول",
    "about.stat1.label": "مستورد OUXI V8 في السعودية",
    "about.stat2.value": "+50%",
    "about.stat2.label": "توفير مقارنة بالمنافسين",
    "about.stat3.value": "16-30",
    "about.stat3.label": "الفئة العمرية المستهدفة",
    "about.stat4.label": "مصممة لشوارع السعودية",
    
    // Contact Section
    "contact.label": "تواصل معنا",
    "contact.headline1": "انضم إلى",
    "contact.headline2": "الحركة",
    "contact.subheadline": "جاهز لامتلاك الشوارع؟ تواصل الآن لحجز OUXI V8 أو لأي استفسارات. نحن هنا للمساعدة.",
    "contact.snapchat": "سناب شات",
    "contact.whatsapp": "واتساب",
    "contact.instagram": "انستغرام",
    "contact.clickToChat": "اضغط للمحادثة",
    "contact.dmUs": "راسلنا",
    "contact.message": "رسالة",
    "contact.follow": "تابعنا",
    "contact.location.title": "موقع الاستلام",
    "contact.location.city": "المدينة المنورة، السعودية",
    "contact.location.note": "استلام محلي متاح • توصيل لمدن أخرى (رسوم إضافية)",
    "contact.form.title": "استفسار سريع",
    "contact.form.name": "اسمك",
    "contact.form.phone": "الهاتف / واتساب",
    "contact.form.message": "رسالتك",
    "contact.form.submit": "إرسال",
    
    // Footer
    "footer.tagline": "التنقل الحضري لشباب السعودية",
    "footer.rights": "جميع الحقوق محفوظة.",
    "footer.location": "المدينة المنورة، السعودية",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language | null>(null);
  const [showSelector, setShowSelector] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("querabian-language") as Language | null;
    if (savedLang && (savedLang === "en" || savedLang === "ar")) {
      setLanguageState(savedLang);
    } else {
      setShowSelector(true);
    }
  }, []);

  useEffect(() => {
    if (language) {
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("querabian-language", lang);
    setShowSelector(false);
  };

  const t = (key: string): string => {
    if (!language) return translations.en[key] || key;
    return translations[language][key] || translations.en[key] || key;
  };

  const isRTL = language === "ar";

  // Show language selector if no language is set
  if (showSelector || language === null) {
    return <LanguageSelector onSelect={setLanguage} />;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Language Selector Component
function LanguageSelector({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="relative z-10 text-center max-w-md w-full">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <span className="text-3xl font-display font-bold text-foreground">
            QUERABIAN
          </span>
          <span className="text-sm font-body text-primary tracking-widest ml-2">BIKES</span>
        </div>
        
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 animate-fade-up delay-100">
          Choose Your Language
        </h1>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-up delay-100 font-arabic">
          اختر لغتك
        </p>
        
        {/* Language Options */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-200">
          <button
            onClick={() => onSelect("en")}
            className="flex-1 group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 p-6"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">🇬🇧</div>
              <p className="font-display font-bold text-xl text-foreground mb-1">English</p>
              <p className="text-sm text-muted-foreground">Continue in English</p>
            </div>
          </button>
          
          <button
            onClick={() => onSelect("ar")}
            className="flex-1 group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-300 p-6"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="text-4xl mb-3">🇸🇦</div>
              <p className="font-display font-bold text-xl text-foreground mb-1 font-arabic">العربية</p>
              <p className="text-sm text-muted-foreground font-arabic">الاستمرار بالعربية</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
