import { Button } from "@/components/ui/button";
import { MapPin, MessageCircle, Instagram, Send, Phone } from "lucide-react";

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      name: "Snapchat",
      handle: "@querabianbikes",
      action: "DM Us",
      variant: "snapchat" as const,
      href: "https://snapchat.com/add/querabianbikes",
    },
    {
      icon: Phone,
      name: "WhatsApp",
      handle: "Click to Chat",
      action: "Message",
      variant: "whatsapp" as const,
      href: "https://wa.me/966500000000",
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@querabianbikes",
      action: "Follow",
      variant: "heroOutline" as const,
      href: "https://instagram.com/querabianbikes",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-sm font-medium text-primary uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Join the <span className="text-gradient-accent">Movement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to own the streets? Reach out now to reserve your OUXI V8 
            or ask any questions. We're here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-1">
                {method.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{method.handle}</p>
              <Button variant={method.variant} size="default" className="w-full">
                {method.action}
              </Button>
            </a>
          ))}
        </div>

        {/* Location */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-card border border-border text-center animate-fade-up delay-300">
          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display font-bold text-2xl text-foreground mb-2">
            Pickup Location
          </h3>
          <p className="text-lg text-muted-foreground mb-2">Medina, Saudi Arabia</p>
          <p className="text-sm text-muted-foreground">
            Local pickup available • Delivery to other cities (fees apply)
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto mt-16 animate-fade-up delay-400">
          <div className="p-8 rounded-2xl bg-card border border-border">
            <h3 className="font-display font-bold text-xl text-foreground mb-6 text-center">
              Quick Inquiry
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone / WhatsApp"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
