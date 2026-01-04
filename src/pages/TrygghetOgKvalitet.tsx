import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { publicSiteContent } from "@/lib/publicSiteContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Users,
  Shield,
  Handshake,
  GraduationCap,
  TrendingUp,
  AlertTriangle,
  Heart,
  Lock,
  FileText,
  CheckCircle,
} from "lucide-react";
import qualityHero from "@/assets/pages/caregiver-2.jpg";

const kvalitetIcons = [
  Users, // Tett voksenoppfølging
  Shield, // Struktur og forutsigbarhet
  Handshake, // Medvirkning og samarbeid
  GraduationCap, // Kompetanse og veiledning
  TrendingUp, // Læring og forbedring
  AlertTriangle, // Sikkerhet og beredskap
];

const personvernIcons = [Lock, Shield, FileText];

const TrygghetOgKvalitet = () => {
  const content = publicSiteContent.trygghetOgKvalitet;

  return (
    <Layout>
      <SEO
        title="Trygghet og kvalitet"
        description={content.hero.lead}
        path="/trygghet-og-kvalitet"
      />

      {/* A) Hero Section */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12"
        style={{
          backgroundImage: `url(${qualityHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-hero/60" />

        <Container className="relative z-10 py-10 md:py-14 lg:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-hero/40 backdrop-blur-sm rounded-full py-2 md:py-3 px-4 md:px-6 mb-6 md:mb-8 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white text-sm md:text-base font-semibold">
                Trygg omsorg med fokus på kvalitet og sikkerhet
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight mb-4 md:mb-6 text-white tracking-tight">
              {content.hero.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              {content.hero.lead}
            </p>
          </div>
        </Container>
      </section>

      {/* B) Kvalitet i praksis (6 kort) - Alternating layout */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> KVALITET I PRAKSIS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Hvordan vi jobber
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl">
              Vårt arbeid bygger på trygghet, struktur og kontinuerlig oppfølging
            </p>
          </div>

          {/* Varied layout - mix of styles */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {content.kvalitetIPraksis.map((punkt, index) => {
                const IconComponent = kvalitetIcons[index] || Heart;
                const isFirstRow = index < 2;
                const isLargeCard = index === 0; // First card spans full width
                
                if (isLargeCard) {
                  return (
                    <div
                      key={index}
                      className="lg:col-span-2 bg-card-token rounded-xl p-8 md:p-10 border border-border/50 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-6 md:gap-8">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border-2 border-border/30">
                          <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-primary-icon" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
                              {punkt.title}
                            </h3>
                            <span className="text-foreground/30 font-mono text-sm md:text-base flex-shrink-0">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                          <p className="text-foreground/75 text-base md:text-lg lg:text-xl leading-relaxed">
                            {punkt.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                return (
                  <div
                    key={index}
                    className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-border/30">
                        <IconComponent className="w-8 h-8 text-primary-icon" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                            {punkt.title}
                          </h3>
                          <span className="text-foreground/30 font-mono text-xs flex-shrink-0">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                          {punkt.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* C) Rettigheter og medvirkning (FAQ) */}
      <Section variant="dark" className="bg-section-dark">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> RETTIGHETER OG MEDVIRKNING
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Rettigheter og medvirkning
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
                Vi jobber aktivt for å sikre at barn og unge får informasjon om
                sine rettigheter og mulighet til medvirkning
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {content.rettigheterOgMedvirkning.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border/50 bg-card-token rounded-xl mb-4 p-4 md:p-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-lg md:text-xl py-4 hover:no-underline text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/90 text-base md:text-lg leading-relaxed pb-4 pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* D) Personvern (kort seksjon) */}
      <Section variant="default">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> PERSONVERN
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Personvern og databehandling
              </h2>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                Vi behandler personopplysninger på en trygg og forsvarlig måte
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              {content.personvern.map((punkt, index) => {
                const IconComponent = personvernIcons[index] || Lock;
                return (
                  <div
                    key={index}
                    className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300 flex items-start gap-6"
                  >
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-border/30">
                      <IconComponent className="w-8 h-8 text-primary-icon" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                        {punkt.title}
                      </h3>
                      <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                        {punkt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* E) CTA-blokk - Same style as Home CTASection */}
      <Section variant="default" className="py-10 md:py-12">
        <Container>
          <div className="bg-hero rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center lg:justify-start gap-2 font-semibold">
                  <span>+</span> KONTAKT
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                  Spør oss om tilbudet
                </h2>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Har du spørsmål om trygghet, kvalitet eller rettigheter? Vi er
                  her for å svare på dine spørsmål.
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
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default TrygghetOgKvalitet;
