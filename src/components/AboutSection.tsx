import { Target, Lightbulb, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("about.mission.title"),
      description: t("about.mission.desc"),
    },
    {
      icon: Lightbulb,
      title: t("about.vision.title"),
      description: t("about.vision.desc"),
    },
    {
      icon: Rocket,
      title: t("about.promise.title"),
      description: t("about.promise.desc"),
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Content */}
          <div className={`animate-fade-up ${isRTL ? "lg:col-start-2 text-right" : ""}`}>
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              {t("about.label")}
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {t("about.headline1")} <span className="text-gradient-accent">{t("about.headline2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("about.description")}
            </p>

            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className={`relative animate-fade-up delay-200 ${isRTL ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className={`p-6 rounded-2xl bg-card border border-border ${isRTL ? "text-right" : ""}`}>
                  <p className="text-4xl font-display font-bold text-primary mb-2">{t("about.stat1.value")}</p>
                  <p className="text-sm text-muted-foreground">{t("about.stat1.label")}</p>
                </div>
                <div className={`p-6 rounded-2xl gradient-card border border-primary/20 ${isRTL ? "text-right" : ""}`}>
                  <p className="text-4xl font-display font-bold text-foreground mb-2">{t("about.stat2.value")}</p>
                  <p className="text-sm text-muted-foreground">{t("about.stat2.label")}</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className={`p-6 rounded-2xl bg-card border border-border ${isRTL ? "text-right" : ""}`}>
                  <p className="text-4xl font-display font-bold text-primary mb-2">{t("about.stat3.value")}</p>
                  <p className="text-sm text-muted-foreground">{t("about.stat3.label")}</p>
                </div>
                <div className={`p-6 rounded-2xl bg-card border border-border ${isRTL ? "text-right" : ""}`}>
                  <p className="text-4xl font-display font-bold text-foreground mb-2">🇸🇦</p>
                  <p className="text-sm text-muted-foreground">{t("about.stat4.label")}</p>
                </div>
              </div>
            </div>
            
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
