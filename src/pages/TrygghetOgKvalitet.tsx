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
import heroBg from "@/assets/hero-bg.jpg";

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

      {/* A) Hero Section - Same style as Home */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-hero/60" />

        <Container className="relative z-10 py-10 md:py-14 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-primary-foreground">
              <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
                <span className="text-primary-foreground">+</span> TRYGGHET OG
                KVALITET
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight mb-5 md:mb-7 text-white tracking-tight">
                {content.hero.title}
              </h1>
              <p className="text-white text-lg md:text-xl mb-7 md:mb-10 max-w-md leading-relaxed font-medium">
                {content.hero.lead}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <Button
                  asChild
                  variant="hero"
                  size="default"
                  className="px-6 min-h-[44px] bg-hero-button hover:bg-hero-button/90 text-black rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                >
                  <Link to="/kontakt">Ta kontakt</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* B) Kvalitet i praksis (6 kort) - Same style as ServiceCards */}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.kvalitetIPraksis.map((punkt, index) => {
              const IconComponent = kvalitetIcons[index] || Heart;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5">
                    {punkt.title}
                  </h3>
                  <p className="text-foreground/75 text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
                    {punkt.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* C) Rettigheter og medvirkning (FAQ) */}
      <Section variant="light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> RETTIGHETER OG MEDVIRKNING
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Rettigheter og medvirkning
              </h2>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {content.personvern.map((punkt, index) => {
                const IconComponent = personvernIcons[index] || Lock;
                return (
                  <div
                    key={index}
                    className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                      {punkt.title}
                    </h3>
                    <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                      {punkt.description}
                    </p>
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
