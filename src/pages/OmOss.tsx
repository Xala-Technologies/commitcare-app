import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { publicSiteContent } from "@/lib/publicSiteContent";
import {
  Heart,
  Shield,
  Users,
  Handshake,
  MapPin,
  Mail,
  Building2,
  FileText,
  CheckCircle,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const tilnaermingIcons = [Heart, Shield, Users, Handshake];

const OmOss = () => {
  const content = publicSiteContent.omOss;

  return (
    <Layout>
      <SEO
        title="Om oss"
        description={content.hero.lead}
        path="/om-oss"
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
                <span className="text-primary-foreground">+</span> OM OSS
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

      {/* B) Kort om avdelingen (3 kort) */}
      <Section variant="light">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {content.kortOmAvdelingen.map((kort, index) => (
              <div
                key={index}
                className="bg-card-token rounded-xl p-6 border border-border/50 text-center"
              >
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  {kort.title}
                </h3>
                <p className="text-foreground/75 text-sm md:text-base">
                  {kort.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* C) Vår tilnærming (3–4 blokker) */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> VÅR TILNÆRMING
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Hvordan vi jobber
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl">
              Vår tilnærming bygger på relasjon, struktur og miljøterapeutisk arbeid
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {content.varTilnaerming.map((punkt, index) => {
              const IconComponent = tilnaermingIcons[index] || Heart;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
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
        </Container>
      </Section>

      {/* D) Organisering (1 seksjon, uten navn) */}
      <Section variant="light">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card-token rounded-xl p-8 md:p-10 border border-border/50">
              <p className="text-foreground/90 text-lg md:text-xl mb-6 leading-relaxed text-center font-medium">
                {content.organisering.tekst}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.organisering.roller.map((rolle, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-icon flex-shrink-0" />
                    <p className="text-foreground font-medium">{rolle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* E) Lokasjon og kontaktinfo (cards) */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> KONTAKTINFO
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Lokasjon og kontakt
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Postadresse */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                <MapPin className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
                Postadresse
              </h3>
              <p className="text-foreground/75 text-base leading-relaxed">
                {content.kontaktinfo.postadresse}
              </p>
            </div>

            {/* Besøksadresse */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                <Building2 className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
                Besøksadresse
              </h3>
              <p className="text-foreground/75 text-base leading-relaxed">
                {content.kontaktinfo.besoksadresse}
              </p>
            </div>

            {/* E-post */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                <Mail className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
                E-post
              </h3>
              <a
                href={`mailto:${content.kontaktinfo.epost}`}
                className="text-primary-icon hover:text-primary transition-colors text-base break-all"
              >
                {content.kontaktinfo.epost}
              </a>
            </div>

            {/* Foretaksnummer */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                <FileText className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3">
                Foretaksnummer
              </h3>
              <p className="text-foreground/75 text-base leading-relaxed">
                {content.kontaktinfo.foretaksnummer}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* F) CTA-blokk - Same style as Home CTASection */}
      <Section variant="default" className="py-10 md:py-12">
        <Container>
          <div className="bg-hero rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center lg:justify-start gap-2 font-semibold">
                  <span>+</span> KONTAKT
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                  Ta kontakt for mer informasjon
                </h2>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Har du spørsmål eller vil du vite mer om vårt tilbud? Vi er her for å hjelpe deg videre.
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

export default OmOss;
