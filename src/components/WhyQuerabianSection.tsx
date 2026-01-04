import { Trophy, Globe, TrendingUp, Users, Sparkles, Target } from "lucide-react";

const WhyQuerabianSection = () => {
  const advantages = [
    {
      icon: Trophy,
      title: "First to Market",
      description: "We're bringing the OUXI V8 to Saudi Arabia for the very first time. No competition.",
    },
    {
      icon: Globe,
      title: "European-Tested",
      description: "Proven design loved across the Netherlands and Europe. Now available locally.",
    },
    {
      icon: TrendingUp,
      title: "Unbeatable Value",
      description: "Premium quality at a fraction of what others charge. Best ROI in the market.",
    },
    {
      icon: Users,
      title: "Youth-First Brand",
      description: "Built by young entrepreneurs who understand what riders actually want.",
    },
    {
      icon: Sparkles,
      title: "Viral Potential",
      description: "Eye-catching design that's made for social media. Stand out on every ride.",
    },
    {
      icon: Target,
      title: "Local Support",
      description: "Real people in Medina ready to help. Not an overseas call center.",
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden section-glow">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Our Advantage
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Why Querabian Bikes Wins
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just selling bikes. We're starting a movement.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
              className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 hover:bg-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
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
