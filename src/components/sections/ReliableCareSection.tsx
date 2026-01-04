import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CheckCircle } from "lucide-react";
import caregiver2 from "@/assets/pages/caregiver-2.jpg";

export function ReliableCareSection() {
  return (
    <Section variant="light">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:pt-8 space-y-6">
            <div>
              <p className="text-primary-icon text-sm tracking-wider uppercase mb-4 flex items-center gap-2 font-semibold">
                <span className="text-primary-icon">+</span> KONTAKT
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Ta kontakt for en<br />uforpliktende prat
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                Har du spørsmål eller vil du diskutere hvordan vi kan hjelpe? Vi er her for å hjelpe deg videre.
              </p>
              <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                Vi tilbyr en uforpliktende samtale hvor vi kan avklare behovene dine og finne ut hvordan vi best kan støtte deg.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-icon mt-0.5 flex-shrink-0" />
                <p className="text-foreground/75 text-base leading-relaxed">
                  Uforpliktende samtale uten noen kostnad
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-icon mt-0.5 flex-shrink-0" />
                <p className="text-foreground/75 text-base leading-relaxed">
                  Rask respons og personlig oppfølging
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-icon mt-0.5 flex-shrink-0" />
                <p className="text-foreground/75 text-base leading-relaxed">
                  Erfarne fagfolk som forstår dine behov
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Button
                asChild
                variant="default"
                size="lg"
                className="min-h-[48px] text-base bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-icon/50 px-8 rounded-lg"
              >
                <Link to="/kontakt">Ta kontakt</Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative w-full">
            <img 
              src={caregiver2} 
              alt="Profesjonell omsorgsgiver" 
              className="rounded-2xl w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
