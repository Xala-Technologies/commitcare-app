import { Button } from "@/components/ui/button";
import { Star, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[85vh] flex items-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hero/90" />
      
      <div className="container mx-auto relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <p className="text-primary-foreground/80 text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
              <span className="text-primary-foreground">+</span> EVERLY HOME CARE
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Quality Care for<br />Quality Lives
            </h1>
            <p className="text-primary-foreground/70 text-base mb-8 max-w-md leading-relaxed">
              We're here to provide trusted, heart-centered care so seniors can live independently with confidence Empowering seniors to enjoy life's golden years
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="default" className="px-6">
                Get Started
              </Button>
              <Button variant="heroOutline" size="default" className="px-6">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right Content - Rating Cluster */}
          <div className="hidden lg:flex justify-end items-end h-full">
            <div className="flex items-center gap-3 bg-hero/40 backdrop-blur-sm rounded-full py-3 px-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/90 text-sm">4.9 Google review</span>
              <div className="flex -space-x-2 ml-2">
                {[
                  "bg-teal-500",
                  "bg-teal-400", 
                  "bg-teal-600",
                  "bg-teal-500",
                  "bg-teal-400"
                ].map((bg, i) => (
                  <div 
                    key={i}
                    className={`w-8 h-8 rounded-full ${bg} flex items-center justify-center border-2 border-primary-foreground/20`}
                  >
                    <span className="sr-only">User {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Strip - Overlapping */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-20">
        <div className="flex shadow-xl">
          <div className="bg-primary rounded-l-xl px-8 py-6 flex items-start gap-4 min-w-[280px]">
            <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-primary-foreground font-serif text-lg mb-1">24/7 Support</h3>
              <p className="text-primary-foreground/70 text-sm">Committed to being there every<br />hour, every day</p>
            </div>
          </div>
          <div className="w-px bg-primary-foreground/20"></div>
          <div className="bg-primary rounded-r-xl px-8 py-6 flex items-start gap-4 min-w-[280px]">
            <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-primary-foreground font-serif text-lg mb-1">Certified Best</h3>
              <p className="text-primary-foreground/70 text-sm">Warded for our commitment to<br />quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
