import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import familyCare from "@/assets/family-care.jpg";

export function TrustSection() {
  return (
    <Section variant="light">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <img 
              src={familyCare} 
              alt="Familie som får støtte og omsorg" 
              className="rounded-2xl w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="lg:pt-8">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-5 flex items-center gap-2 font-semibold">
              <span className="text-primary-icon">+</span> OM OSS
            </p>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-8 leading-tight">
              Tillit bygges<br />i hverdagen
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
              Vi bygger tillit gjennom strukturert oppfølging og tett samarbeid. Vårt fokus er på trygghet, forutsigbarhet og god oppfølging for barn, unge og familier. Vi jobber kontinuerlig for å sikre at hver person får den støtten de trenger.
            </p>
            <Button 
              asChild
              variant="default" 
              size="lg" 
              className="rounded-lg px-10 min-h-[52px] bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-1 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-icon/50 text-base font-semibold mb-12"
            >
              <Link to="/om-oss">Les mer</Link>
            </Button>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 pt-10 border-t-2 border-primary-icon/30">
              <div className="px-5 py-3 bg-primary-icon/15 rounded-full border-2 border-primary-icon/30 whitespace-nowrap hover:bg-primary-icon/20 transition-colors">
                <div className="text-primary-icon text-sm md:text-base tracking-wider uppercase font-bold">
                  ÅRS ERFARING
                </div>
              </div>
              <div className="px-5 py-3 bg-primary-icon/15 rounded-full border-2 border-primary-icon/30 whitespace-nowrap hover:bg-primary-icon/20 transition-colors">
                <div className="text-primary-icon text-sm md:text-base tracking-wider uppercase font-bold">
                  RELEVANTE AKTØRER
                </div>
              </div>
              <div className="px-5 py-3 bg-primary-icon/15 rounded-full border-2 border-primary-icon/30 whitespace-nowrap hover:bg-primary-icon/20 transition-colors">
                <div className="text-primary-icon text-sm md:text-base tracking-wider uppercase font-bold">
                  TETT OPPFØLGING
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
