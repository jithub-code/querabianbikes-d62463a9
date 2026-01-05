import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "@/hooks/use-toast";

interface ReservationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "971505327617";

const ReservationModal = ({ open, onOpenChange }: ReservationModalProps) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim() || !formData.city.trim()) {
      toast({
        title: isRTL ? "الرجاء ملء جميع الحقول المطلوبة" : "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const message = `*New OUXI V8 Reservation*
    
👤 Name: ${formData.name}
📱 Contact: ${formData.phone}
📍 City: ${formData.city}
${formData.message ? `💬 Message: ${formData.message}` : ""}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", city: "", message: "" });
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-12 animate-scale-in">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              {isRTL ? "تم الإرسال!" : "Sent Successfully!"}
            </h3>
            <p className="text-muted-foreground text-center">
              {isRTL ? "سيتم التواصل معك قريباً" : "We'll contact you soon"}
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className={`text-2xl font-display ${isRTL ? "text-right" : ""}`}>
                {isRTL ? "احجز OUXI V8" : "Reserve Your OUXI V8"}
              </DialogTitle>
              <p className={`text-sm text-primary font-medium ${isRTL ? "text-right" : ""}`}>
                {isRTL ? "⚡ كميات إطلاق محدودة" : "⚡ Limited launch units available"}
              </p>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <input
                  type="text"
                  placeholder={isRTL ? "الاسم الكامل *" : "Full Name *"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${isRTL ? "text-right" : ""}`}
                  maxLength={100}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={isRTL ? "الهاتف / واتساب *" : "Phone / WhatsApp *"}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${isRTL ? "text-right" : ""}`}
                  maxLength={20}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={isRTL ? "المدينة *" : "City *"}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors ${isRTL ? "text-right" : ""}`}
                  maxLength={50}
                />
              </div>
              <div>
                <textarea
                  placeholder={isRTL ? "رسالة (اختياري)" : "Message (Optional)"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none ${isRTL ? "text-right" : ""}`}
                  maxLength={500}
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                <Send className="w-4 h-4" />
                {isRTL ? "إرسال الحجز" : "Send Reservation"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ReservationModal;
