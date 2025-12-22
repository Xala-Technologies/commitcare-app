import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <div className="bg-hero rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div>
              <p className="text-primary-foreground/70 text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
                <span>+</span> GET STARTED
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-4 leading-tight">
                Your Journey Begins Here
              </h2>
              <p className="text-primary-foreground/70 text-sm mb-6 max-w-md leading-relaxed">
                Have questions or need assistance? Our dedicated team is here to help you every step of the way. Reach out today, and let's start a conversation.
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

            {/* Right Content - Rating */}
            <div className="flex justify-end items-center">
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
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
