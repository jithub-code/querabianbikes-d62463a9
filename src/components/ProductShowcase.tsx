import { Button } from "@/components/ui/button";
import { Zap, Battery, Gauge, Shield, Mountain, Camera } from "lucide-react";
import bikeSide from "@/assets/bike-side.jpg";
import tireDetail from "@/assets/tire-detail.jpg";
import motorDetail from "@/assets/motor-detail.jpg";
import batteryDetail from "@/assets/battery-detail.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductShowcase = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Mountain,
      title: t("product.feature1.title"),
      description: t("product.feature1.desc"),
      image: tireDetail,
    },
    {
      icon: Zap,
      title: t("product.feature2.title"),
      description: t("product.feature2.desc"),
      image: motorDetail,
    },
    {
      icon: Battery,
      title: t("product.feature3.title"),
      description: t("product.feature3.desc"),
      image: batteryDetail,
    },
  ];

  const specs = [
    { icon: Gauge, label: t("product.spec1"), value: "45 km/h" },
    { icon: Battery, label: t("product.spec2"), value: "60 km" },
    { icon: Zap, label: t("product.spec3"), value: "750W" },
    { icon: Shield, label: t("product.spec4"), value: isRTL ? "سنة" : "1 Year" },
  ];

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            {t("product.label")}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            {t("product.headline")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("product.subheadline")}
          </p>
        </div>

        {/* Main Product Image */}
        <div className="relative mb-20 animate-fade-up delay-100">
          <div className="max-w-4xl mx-auto relative">
            <img
              src={bikeSide}
              alt="OUXI V8 Electric Bike Side View"
              className="w-full rounded-2xl"
            />
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl -z-10 scale-110" />
          </div>

          {/* Instagram Badge */}
          <div className={`absolute top-4 ${isRTL ? "left-4 md:left-8" : "right-4 md:right-8"} flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border`}>
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{t("product.badge")}</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className={`absolute bottom-0 left-0 right-0 p-6 ${isRTL ? "text-right" : ""}`}>
                <div className={`flex items-center gap-3 mb-2 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-card border border-border mb-12 animate-fade-up delay-500">
          {specs.map((spec) => (
            <div key={spec.label} className="text-center p-4">
              <spec.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl md:text-3xl font-display font-bold text-foreground">{spec.value}</p>
              <p className="text-sm text-muted-foreground">{spec.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up delay-600">
          <Button variant="hero" size="xl">
            {t("product.cta")}
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            {t("product.footer")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
