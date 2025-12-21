import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <div className="bg-hero rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
                Your Journey Begins Here
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8 max-w-lg">
                Take the first step towards quality care for yourself or your loved ones. 
                Our team is ready to create a personalized care plan just for you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg">
                  Book Now
                </Button>
                <Button variant="heroOutline" size="lg">
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right Content - Rating */}
            <div className="flex justify-end">
              <div className="bg-card/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-primary-foreground font-semibold ml-2">4.9/5</span>
                </div>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Rated excellent by families we serve
                </p>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center border-2 border-hero text-primary-foreground text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center border-2 border-hero text-primary-foreground text-xs">
                    +5k
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
