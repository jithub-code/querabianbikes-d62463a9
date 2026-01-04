import { Button } from "@/components/ui/button";
import { Zap, Shield, Star } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Animated glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}>
          {/* Content */}
          <div className={`text-center ${isRTL ? "lg:text-right lg:col-start-2" : "lg:text-left"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-up">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("hero.badge")}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              {t("hero.headline1")}
              <span className="block text-gradient-accent">{t("hero.headline2")}</span>
            </h1>

            {/* Sub-headline */}
            <p className={`text-lg md:text-xl text-muted-foreground max-w-xl mb-8 animate-fade-up delay-200 ${isRTL ? "mr-0 lg:mr-0 ml-auto lg:ml-0" : "mx-auto lg:mx-0"}`}>
              {t("hero.subheadline")}
            </p>

            {/* Social proof badges */}
            <div className={`flex flex-wrap items-center gap-4 mb-8 animate-fade-up delay-300 ${isRTL ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-medium">{t("hero.badge1")}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{t("hero.badge2")}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-400 ${isRTL ? "justify-center lg:justify-end" : "justify-center lg:justify-start"}`}>
              <Button variant="hero" size="xl">
                {t("hero.cta1")}
              </Button>
              <Button variant="heroOutline" size="xl">
                {t("hero.cta2")}
              </Button>
            </div>

            {/* Urgency */}
            <p className="text-sm text-muted-foreground mt-6 animate-fade-up delay-500">
              {t("hero.urgency")}
            </p>
          </div>

          {/* Hero Image */}
          <div className={`relative animate-fade-up delay-300 ${isRTL ? "lg:col-start-1 lg:row-start-1" : ""}`}>
            <div className="relative z-10">
              <img
                src={heroBike}
                alt="OUXI V8 Fat-Tire Electric Bike"
                className="w-full max-w-2xl mx-auto animate-float"
              />
            </div>
            {/* Glow behind bike */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
