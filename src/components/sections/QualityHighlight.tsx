import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Shield, Users, Handshake } from "lucide-react";

const qualityPoints = [
  {
    icon: Shield,
    title: "Struktur og forutsigbarhet",
    description: "Vi sikrer tydelige rutiner og forutsigbare møter som gir trygghet og stabilitet i hverdagen.",
  },
  {
    icon: Users,
    title: "Tett voksenoppfølging",
    description: "Våre erfarne fagfolk gir kontinuerlig oppfølging og støtte for å sikre best mulig utvikling og velvære.",
  },
  {
    icon: Handshake,
    title: "Samarbeid med relevante aktører",
    description: "Vi jobber tett sammen med skole, helsevesen og andre aktører for å sikre en helhetlig tilnærming.",
  },
];

export function QualityHighlight() {
  return (
    <Section variant="light">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> TRYGGHET OG KVALITET
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 md:mb-8">
            Vår tilnærming til trygg omsorg
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
            Vi bygger tillit gjennom strukturert oppfølging og tett samarbeid
          </p>
        </div>

        {/* Quality Points Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {qualityPoints.map((point) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.title}
                className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 md:mb-5">
                  {point.title}
                </h3>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-lg px-8 min-h-[44px] bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-icon/50"
          >
            <Link to="/kontakt">Kontakt oss</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

