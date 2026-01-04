import { Target, Lightbulb, Rocket } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Built by Young <span className="text-gradient-accent">Entrepreneurs</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Querabian Bikes was founded with a simple belief: premium mobility 
              should be accessible to everyone. We're young, we're driven, and 
              we're here to change how Saudi Arabia moves.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground">
                    Make stylish, reliable mobility accessible to every young person in Saudi Arabia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground">
                    Become Saudi Arabia's leading youth mobility brand, 
                    expanding nationwide and beyond.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-1">
                    Our Promise
                  </h3>
                  <p className="text-muted-foreground">
                    Quality you can trust, style you'll love, and prices that make sense.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up delay-200">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-display font-bold text-primary mb-2">1st</p>
                  <p className="text-sm text-muted-foreground">OUXI V8 importer in KSA</p>
                </div>
                <div className="p-6 rounded-2xl gradient-card border border-primary/20">
                  <p className="text-4xl font-display font-bold text-foreground mb-2">50%+</p>
                  <p className="text-sm text-muted-foreground">Savings vs competitors</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-display font-bold text-primary mb-2">16-30</p>
                  <p className="text-sm text-muted-foreground">Target age group</p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <p className="text-4xl font-display font-bold text-foreground mb-2">🇸🇦</p>
                  <p className="text-sm text-muted-foreground">Made for Saudi streets</p>
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
