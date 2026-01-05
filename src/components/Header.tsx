import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import ReservationModal from "./ReservationModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const { t, language, setLanguage, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#product", label: t("nav.product") },
    { href: "#features", label: t("nav.features") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/60 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-background/20"
            : "bg-background/20 backdrop-blur-lg"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-foreground">
                QUERABIAN
              </span>
              <span className="text-xs font-body text-primary tracking-widest">BIKES</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA + Language Toggle */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-sm font-medium backdrop-blur-sm"
              >
                <Globe className="w-4 h-4" />
                {language === "en" ? "العربية" : "English"}
              </button>
              <a
                href="https://snapchat.com/add/querabianbikes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="snapchat" size="default" className="shadow-lg shadow-[#FFFC00]/20">
                  {isRTL ? "راسلنا" : "DM us"}
                </Button>
              </a>
              <Button 
                variant="default" 
                size="default"
                onClick={() => setIsReservationOpen(true)}
              >
                {t("nav.reserve")}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors font-medium"
                >
                  <Globe className="w-4 h-4" />
                  {language === "en" ? "العربية" : "English"}
                </button>
                <a
                  href="https://snapchat.com/add/querabianbikes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="snapchat" size="lg" className="w-full">
                    {isRTL ? "راسلنا على سناب شات" : "DM us on Snapchat"}
                  </Button>
                </a>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="mt-2"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsReservationOpen(true);
                  }}
                >
                  {t("nav.reserve")}
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      <ReservationModal 
        open={isReservationOpen} 
        onOpenChange={setIsReservationOpen} 
      />
    </>
  );
};

export default Header;
