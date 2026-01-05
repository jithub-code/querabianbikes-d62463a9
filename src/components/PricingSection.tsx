import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Flame, Clock, Truck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ReservationModal from "./ReservationModal";

const PricingSection = () => {
  const { t, isRTL } = useLanguage();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const included = [
    t("pricing.item1"),
    t("pricing.item2"),
    t("pricing.item3"),
    t("pricing.item4"),
    t("pricing.item5"),
  ];

  return (
    <>
      <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              {t("pricing.label")}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              {t("pricing.headline1")} <span className="text-gradient-accent">{t("pricing.headline2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("pricing.subheadline")}
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 p-8 md:p-12 animate-fade-up delay-100 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className={`flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-display font-bold ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Flame className="w-4 h-4" />
                  {t("pricing.badge")}
                </div>
              </div>

              {/* Price Comparison */}
              <div className="text-center mb-8 pt-4">
                <p className="text-muted-foreground mb-2">{t("pricing.othersCharge")}</p>
                <p className="text-3xl font-display text-muted-foreground line-through mb-4">
                  4,000 - 6,000 {isRTL ? "ريال" : "SAR"}
                </p>
                <p className="text-muted-foreground mb-2">{t("pricing.ourPrice")}</p>
                <div className={`flex items-baseline justify-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <span className="text-6xl md:text-7xl font-display font-bold text-foreground">
                    2,799
                  </span>
                  <span className="text-2xl font-display text-muted-foreground">{isRTL ? "ريال" : "SAR"}</span>
                </div>
                <p className="text-primary font-medium mt-2">{t("pricing.save")}</p>
              </div>

              {/* What's Included */}
              <div className="border-t border-border/50 pt-8 mb-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 text-center">
                  {t("pricing.included")}
                </p>
                <ul className="space-y-3">
                  {included.map((item) => (
                    <li key={item} className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Note */}
              <div className={`flex items-center justify-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                <Truck className="w-5 h-5 text-primary" />
                <div className={isRTL ? "text-right" : ""}>
                  <p className="text-sm text-foreground font-medium">{t("pricing.delivery")}</p>
                  <p className="text-xs text-muted-foreground">{t("pricing.deliveryNote")}</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="flex-1"
                  onClick={() => setIsReservationOpen(true)}
                >
                  {t("pricing.cta1")}
                </Button>
                <a
                  href="https://snapchat.com/add/querabianbikes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="snapchat" size="xl" className="w-full">
                    {t("pricing.cta2")}
                  </Button>
                </a>
              </div>

              {/* Urgency */}
              <div className={`flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <Clock className="w-4 h-4 text-primary" />
                <span>{t("pricing.urgency")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationModal 
        open={isReservationOpen} 
        onOpenChange={setIsReservationOpen} 
      />
    </>
  );
};

export default PricingSection;
