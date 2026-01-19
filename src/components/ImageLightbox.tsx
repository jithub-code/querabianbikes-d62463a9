import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import bikeAngle1 from "@/assets/bike-angle-1.jpg";
import bikeAngle2 from "@/assets/bike-angle-2.jpg";
import bikeAngle3 from "@/assets/bike-angle-3.jpg";
import bikeAngle4 from "@/assets/bike-angle-4.jpg";
import bikeFront from "@/assets/bike-front.jpg";
import tireDetail from "@/assets/tire-detail.jpg";
import motorDetail from "@/assets/motor-detail.jpg";
import batteryDetail from "@/assets/battery-detail.jpg";

interface ImageLightboxProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const images = [
  { src: bikeAngle1, alt: "OUXI V8 Rear Angle View" },
  { src: bikeAngle2, alt: "OUXI V8 Side Profile" },
  { src: bikeAngle3, alt: "OUXI V8 Front Angle View" },
  { src: bikeAngle4, alt: "OUXI V8 Three Quarter View" },
  { src: bikeFront, alt: "OUXI V8 Front View" },
  { src: tireDetail, alt: "OUXI V8 Fat Tire Detail" },
  { src: motorDetail, alt: "OUXI V8 Motor Detail" },
  { src: batteryDetail, alt: "OUXI V8 Battery Detail" },
];

const ImageLightbox = ({ open, onOpenChange }: ImageLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToPrevious = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 200);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-background/95 backdrop-blur-xl border-border overflow-hidden"
        onKeyDown={handleKeyDown}
      >
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-card hover:scale-110 transition-all duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:border-primary transition-all duration-300 group"
        >
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform duration-300" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:border-primary transition-all duration-300 group"
        >
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform duration-300" />
        </button>

        {/* Image container */}
        <div className="w-full h-full flex items-center justify-center p-12">
          <div 
            className={`relative w-full h-full flex items-center justify-center transition-all duration-300 ${
              isAnimating 
                ? direction === "right" 
                  ? "opacity-0 translate-x-8" 
                  : "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 bg-primary" 
                  : "bg-muted-foreground/50 hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>

        {/* Image counter */}
        <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border">
          <span className="text-sm font-medium text-foreground">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
