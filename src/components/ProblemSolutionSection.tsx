import { TrendingDown, Frown, Sparkles, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSolutionSection = () => {
  const { t, isRTL } = useLanguage();

  const problems = [
    {
      icon: TrendingDown,
      title: t("problem.item1.title"),
      description: t("problem.item1.desc"),
    },
    {
      icon: Frown,
      title: t("problem.item2.title"),
      description: t("problem.item2.desc"),
    },
    {
      icon: Sparkles,
      title: t("problem.item3.title"),
      description: t("problem.item3.desc"),
    },
  ];

  const solutionItems = [
    t("solution.item1"),
    t("solution.item2"),
    t("solution.item3"),
    t("solution.item4"),
  ];

  return (
    <section className="py-24 relative overflow-hidden section-glow">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Problem Side */}
          <div className={`animate-fade-up ${isRTL ? "lg:col-start-2" : ""}`}>
            <span className="text-sm font-medium text-destructive uppercase tracking-widest mb-4 block">
              {t("problem.label")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
              {t("problem.headline1")}
              <span className="block text-muted-foreground">{t("problem.headline2")}</span>
            </h2>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className={`flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-destructive/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-destructive/5 transition-all duration-300 cursor-default ${isRTL ? "flex-row-reverse text-right" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className={`relative animate-fade-up delay-200 ${isRTL ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              {t("solution.label")}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
              {t("solution.headline1")}
              <span className="block text-gradient-accent">{t("solution.headline2")}</span>
            </h2>

            <div className="p-8 rounded-2xl gradient-card border border-primary/20 glow-accent hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
              <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <h3 className="font-display font-bold text-xl text-foreground">{t("solution.product")}</h3>
                  <p className="text-primary text-sm">{t("solution.productSub")}</p>
                </div>
              </div>

              <ul className="space-y-4">
                {solutionItems.map((item) => (
                  <li key={item} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
