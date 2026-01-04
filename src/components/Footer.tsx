import { Instagram, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-foreground">
                QUERABIAN
              </span>
              <span className="text-xs font-body text-primary tracking-widest">BIKES</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Urban mobility for Saudi Arabia's youth
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://snapchat.com/add/querabianbikes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://instagram.com/querabianbikes"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 text-foreground" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Querabian Bikes. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Medina, Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
