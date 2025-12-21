import { Button } from "@/components/ui/button";
import { Star, Clock, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-hero/80" />
      </div>

      <div className="container mx-auto relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 text-balance">
              Quality Care for Quality Lives
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg">
              We provide compassionate home care services that enhance independence 
              and bring peace of mind to families across the nation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Get Started
              </Button>
              <Button variant="heroOutline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Rating Cluster */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20 animate-fade-in animation-delay-300">
              <div className="flex items-center gap-2 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-primary-foreground font-semibold ml-2">4.9</span>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Trusted by over 5,000+ families nationwide
              </p>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-card text-primary-foreground text-xs font-medium"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center border-2 border-card text-primary-foreground text-xs">
                  +2k
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Strip - Overlapping */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 z-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-primary rounded-xl p-6 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold text-lg mb-1">24/7 Support</h3>
                <p className="text-primary-foreground/80 text-sm">Round-the-clock care whenever you need it most</p>
              </div>
            </div>
            <div className="bg-primary rounded-xl p-6 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-primary-foreground font-semibold text-lg mb-1">Certified Staff</h3>
                <p className="text-primary-foreground/80 text-sm">Fully trained and background-checked caregivers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
