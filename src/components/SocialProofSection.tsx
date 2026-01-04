import { MapPin, Star, Shield, Users } from "lucide-react";

const SocialProofSection = () => {
  const proofPoints = [
    {
      icon: MapPin,
      title: "Coming Soon to Medina",
      description: "Local presence, real support",
    },
    {
      icon: Star,
      title: "European Best-Seller",
      description: "Loved across the Netherlands",
    },
    {
      icon: Shield,
      title: "Trusted Quality",
      description: "Premium build, reliable performance",
    },
    {
      icon: Users,
      title: "Youth Movement",
      description: "Join the mobility revolution",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Why Trust Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Be Part of Something <span className="text-gradient-accent">New</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're launching a new era of urban mobility in Saudi Arabia. 
            Early adopters get the best price and bragging rights.
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
            "Customer reviews and influencer clips coming soon as we launch."
          </p>
          <p className="text-sm text-primary font-medium">
            Be one of the first to share your experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
