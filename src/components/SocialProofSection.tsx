import { MapPin, Star, Shield, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SocialProofSection = () => {
  const { t, isRTL } = useLanguage();

  const proofPoints = [
    {
      icon: MapPin,
      title: t("proof.item1.title"),
      description: t("proof.item1.desc"),
    },
    {
      icon: Star,
      title: t("proof.item2.title"),
      description: t("proof.item2.desc"),
    },
    {
      icon: Shield,
      title: t("proof.item3.title"),
      description: t("proof.item3.desc"),
    },
    {
      icon: Users,
      title: t("proof.item4.title"),
      description: t("proof.item4.desc"),
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            {t("proof.label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            {t("proof.headline1")} <span className="text-gradient-accent">{t("proof.headline2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("proof.subheadline")}
          </p>
        </div>

        {/* Proof Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {proofPoints.map((point, index) => (
            <div
              key={point.title}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/30 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-1">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Placeholder */}
        <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center animate-fade-up delay-400">
          <p className="text-muted-foreground italic mb-4">
            "{t("proof.testimonial")}"
          </p>
          <p className="text-sm text-primary font-medium">
            {t("proof.testimonialCta")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
