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
    <Section variant="default">
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

        {/* Quality Points - Featured Layout with Large Center Card */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
          {qualityPoints.map((point, index) => {
            const IconComponent = point.icon;
            const isCenter = index === 1;
            
            return (
              <div
                key={point.title}
                className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
                  isCenter
                    ? "md:col-span-1 bg-gradient-to-br from-primary/15 to-primary/5 border-2 border-primary/30 p-8 md:p-10 hover:shadow-2xl hover:scale-105"
                    : "bg-card-token border border-border/50 p-6 md:p-8 hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {isCenter && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                )}
                <div className="relative">
                  <div className={`flex items-center gap-4 mb-5 md:mb-6 ${
                    isCenter ? "flex-col text-center" : ""
                  }`}>
                    <div className={`${
                      isCenter 
                        ? "w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-primary-icon to-primary/80 flex items-center justify-center shadow-lg"
                        : "w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center"
                    } flex-shrink-0`}>
                      <IconComponent className={`${
                        isCenter ? "w-10 h-10 md:w-12 md:h-12 text-white" : "w-8 h-8 text-primary-icon"
                      }`} />
                    </div>
                    {!isCenter && (
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                        {point.title}
                      </h3>
                    )}
                  </div>
                  {isCenter && (
                    <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 md:mb-5 text-center">
                      {point.title}
                    </h3>
                  )}
                  <p className={`text-foreground/75 text-base md:text-lg leading-relaxed ${
                    isCenter ? "text-center" : ""
                  }`}>
                    {point.description}
                  </p>
                </div>
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
            className="rounded-full px-8 min-h-[44px] bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-icon/50"
          >
            <Link to="/kontakt">Kontakt oss</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

