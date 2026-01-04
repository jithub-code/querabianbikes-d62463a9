import { TrendingDown, Frown, Sparkles, Rocket } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Overpriced",
      description: "E-bikes in Saudi cost 4,000–6,000 SAR",
    },
    {
      icon: Frown,
      title: "Boring Designs",
      description: "Generic looks that don't stand out",
    },
    {
      icon: Sparkles,
      title: "Not Youth-Focused",
      description: "Made for utility, not style",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden section-glow">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <div className="animate-fade-up">
            <span className="text-sm font-medium text-destructive uppercase tracking-widest mb-4 block">
              The Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
              E-Bikes in Saudi 
              <span className="block text-muted-foreground">Aren't Made For You</span>
            </h2>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-destructive/50 transition-colors duration-300"
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
          <div className="relative animate-fade-up delay-200">
            <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-8">
              Querabian Bikes
              <span className="block text-gradient-accent">Changes Everything</span>
            </h2>

            <div className="p-8 rounded-2xl gradient-card border border-primary/20 glow-accent">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">OUXI V8</h3>
                  <p className="text-primary text-sm">Europe's Favorite Fat-Tire E-Bike</p>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Premium European design & quality</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Viral-ready, Instagram-worthy style</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Disruptive pricing — finally affordable</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-foreground">Built for Saudi streets & climate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
