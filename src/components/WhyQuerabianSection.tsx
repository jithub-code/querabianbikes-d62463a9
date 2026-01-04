import { Trophy, Globe, TrendingUp, Users, Sparkles, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyQuerabianSection = () => {
  const { t, isRTL } = useLanguage();

  const advantages = [
    {
      icon: Trophy,
      title: t("why.item1.title"),
      description: t("why.item1.desc"),
    },
    {
      icon: Globe,
      title: t("why.item2.title"),
      description: t("why.item2.desc"),
    },
    {
      icon: TrendingUp,
      title: t("why.item3.title"),
      description: t("why.item3.desc"),
    },
    {
      icon: Users,
      title: t("why.item4.title"),
      description: t("why.item4.desc"),
    },
    {
      icon: Sparkles,
      title: t("why.item5.title"),
      description: t("why.item5.desc"),
    },
    {
      icon: Target,
      title: t("why.item6.title"),
      description: t("why.item6.desc"),
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            {t("why.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            {t("why.headline")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("why.subheadline")}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className={`group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 animate-fade-up ${isRTL ? "text-right" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300 ${isRTL ? "mr-0 ml-auto" : ""}`}>
                <advantage.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-2">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyQuerabianSection;
