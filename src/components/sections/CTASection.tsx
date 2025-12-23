import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function CTASection() {
  return (
    <Section variant="default" className="py-10 md:py-12">
      <Container>
        <div className="bg-hero rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
          <div className="grid gap-6 md:gap-8 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                Noe du lurer på?
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                Vil du vite mer om tilbudet vårt og tilgjengelig plassering. Vi er her for å svare på dine spørsmål
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

          </div>
        </div>
      </Container>
    </Section>
  );
}
