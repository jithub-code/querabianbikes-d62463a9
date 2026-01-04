import { Button } from "@/components/ui/button";
import { Check, Flame, Clock, Truck } from "lucide-react";

const PricingSection = () => {
  const included = [
    "OUXI V8 Fat-Tire E-Bike",
    "Charger & Cable",
    "User Manual",
    "1 Year Warranty",
    "Local Medina Support",
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Launch Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Premium Bike, <span className="text-gradient-accent">Disruptive Price</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're launching at a price that makes premium mobility accessible to everyone.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-card via-card to-primary/10 border-2 border-primary/30 p-8 md:p-12 animate-fade-up delay-100">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-display font-bold">
                <Flame className="w-4 h-4" />
                Launch Special
              </div>
            </div>

            {/* Price Comparison */}
            <div className="text-center mb-8 pt-4">
              <p className="text-muted-foreground mb-2">Others charge</p>
              <p className="text-3xl font-display text-muted-foreground line-through mb-4">
                4,000 - 6,000 SAR
              </p>
              <p className="text-muted-foreground mb-2">Our Launch Price</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl md:text-7xl font-display font-bold text-foreground">
                  2,799
                </span>
                <span className="text-2xl font-display text-muted-foreground">SAR</span>
              </div>
              <p className="text-primary font-medium mt-2">Save over 50%</p>
            </div>

            {/* What's Included */}
            <div className="border-t border-border/50 pt-8 mb-8">
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-4 text-center">
                What's Included
              </p>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Note */}
            <div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-secondary/50 border border-border mb-8">
              <Truck className="w-5 h-5 text-primary" />
              <div>
                <p className="text-sm text-foreground font-medium">Delivery Available</p>
                <p className="text-xs text-muted-foreground">Medina pickup or delivery (fees apply)</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1">
                Reserve Now
              </Button>
              <Button variant="snapchat" size="xl" className="flex-1">
                DM on Snapchat
              </Button>
            </div>

            {/* Urgency */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-primary" />
              <span>First batch limited • Price increases after sellout</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
