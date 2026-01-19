import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Star, ChevronDown } from "lucide-react";
import heroBike from "@/assets/hero-bike.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import ReservationModal from "./ReservationModal";
import ImageLightbox from "./ImageLightbox";
const HeroSection = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return <>
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
                <Button variant="hero" size="xl" onClick={() => setIsReservationOpen(true)}>
                  {t("hero.cta1")}
                </Button>
                <Button variant="heroOutline" size="xl" onClick={() => setIsLightboxOpen(true)}>
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
              <div className="relative z-10 cursor-pointer group" onClick={() => setIsLightboxOpen(true)}>
                <img alt="OUXI V8 Fat-Tire Electric Bike" className="w-full max-w-2xl mx-auto animate-float group-hover:scale-105 transition-transform duration-500 rounded-lg" src="/lovable-uploads/8b8913cb-27c1-4ed2-962c-b90651a55106.jpg" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-2xl transition-colors duration-300" />
              </div>
              {/* Glow behind bike */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">
            {isRTL ? "مرر للأسفل" : "Scroll"}
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <ChevronDown className="w-4 h-4 text-primary animate-pulse" />
          </div>
        </div>
      </section>

      <ReservationModal open={isReservationOpen} onOpenChange={setIsReservationOpen} />
      <ImageLightbox open={isLightboxOpen} onOpenChange={setIsLightboxOpen} />
    </>;
};
export default HeroSection;