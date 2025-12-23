import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Star } from "lucide-react";

export function CTASection() {
  return (
    <Section variant="default" className="py-10 md:py-12">
      <Container>
        <div className="bg-hero rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center lg:justify-start gap-2 font-semibold">
                <span>+</span> KONTAKT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                Veien videre starter her
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Har du spørsmål eller vil du diskutere hvordan vi kan hjelpe? Vi er her for å hjelpe deg videre.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button 
                  asChild
                  variant="hero" 
                  size="default" 
                  className="w-full sm:w-auto px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <Link to="/kontakt">Ta kontakt</Link>
                </Button>
                <Button 
                  asChild
                  variant="heroOutline" 
                  size="default" 
                  className="w-full sm:w-auto px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <Link to="/tjenester">Se tjenester</Link>
                </Button>
              </div>
            </div>

            {/* Right Content - Rating */}
            <div className="flex justify-center lg:justify-end items-center">
              <div className="flex items-center gap-2 md:gap-3 bg-hero/40 backdrop-blur-sm rounded-full py-2 md:py-3 px-4 md:px-5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-primary-foreground text-sm md:text-base font-semibold">4.9 Google review</span>
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
                      className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${bg} flex items-center justify-center border-2 border-primary-foreground/20`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
