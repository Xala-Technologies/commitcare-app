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
  Heart,
  Shield,
  Users,
  Handshake,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import aboutHero from "@/assets/pages/om-oss/omoss-hero.jpg";
import caregiver1 from "@/assets/pages/om-oss/caregiver-1.jpg";
import caregiver2 from "@/assets/pages/om-oss/caregiver-2.jpg";
import familyCare from "@/assets/pages/om-oss/family-care.jpg";

const OmOss = () => {
  const content = publicSiteContent.omOss;

  return (
    <Layout>
      <SEO
        title="Om oss"
        description={content.hero.lead}
        path="/om-oss"
      />

      {/* A) Hero Section */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12 pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${aboutHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-hero/60" />

        <Container className="relative z-10 py-10 md:py-14 lg:py-16">
          <div className="text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight mb-4 md:mb-6 text-white tracking-tight">
              {content.hero.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              {content.hero.lead}
            </p>
          </div>
        </Container>
      </section>

      {/* B) Building Trust Section - Vision and Mission */}
      <Section variant="default">
        <Container>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> OM OSS
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 md:mb-8 leading-tight">
              Bygger tillit, en familie om gangen
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
              {content.hero.lead}
            </p>
          </div>

          {/* Vision and Mission Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                Vår visjon
              </h3>
              <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                {content.visjon?.description || "Vi ønsker å være en pålitelig partner i omsorg for barn og unge, og skape et omsorgsfulle miljø hvor hvert individ mottar respektfull og individuell oppfølging."}
              </p>
            </div>
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                Vår misjon
              </h3>
              <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                {content.misjon?.description || "Vi tilbyr enestående, individuell omsorg som møter de unike behovene til hvert barn og unge gjennom dedikerte fagfolk, innovative praksiser og kontinuerlig utvikling."}
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="rounded-xl overflow-hidden">
              <img
                src={familyCare}
                alt="Familie og samarbeid"
                className="w-full h-[300px] md:h-[400px] object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={caregiver1}
                alt="Omsorg og støtte"
                className="w-full h-[300px] md:h-[400px] object-cover"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              Vi jobber med fokus på trygghet, struktur og tett oppfølging. Vårt team består av erfarne fagfolk som er dedikert til å skape meningsfulle relasjoner og støtte utvikling.
            </p>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              Gjennom miljøterapeutisk arbeid i hverdagen skaper vi trygge rammer som støtter både emosjonell og sosial utvikling. Vi legger vekt på kontinuitet i relasjoner og forutsigbarhet i hverdagen.
            </p>
            <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
              Samarbeid med familie og relevante tjenester er sentralt i vårt arbeid. Vi jobber tett sammen for å sikre en helhetlig tilnærming og best mulig oppfølging.
            </p>
          </div>
        </Container>
      </Section>

      {/* C) Caring with Purpose - Core Values (Dark Background) */}
      <Section variant="dark" className="bg-section-dark">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden w-full">
                <img
                  src={caregiver2}
                  alt="Våre verdier i praksis"
                  className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>

            {/* Right: Core Values */}
            <div className="order-1 lg:order-2">
              <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
                <span>+</span> VÅRE VERDIER
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-8 md:mb-10 leading-tight">
                Omsorg med formål
              </h2>

              <div className="space-y-6 md:space-y-8">
                {content.varTilnaerming.map((verdi, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-primary-foreground mb-2 md:mb-3">
                        {verdi.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed">
                        {verdi.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* D) Organisering Section */}
      <Section variant="default">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> ORGANISERING
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Vårt team
              </h2>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-8">
                {content.organisering.tekst}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {content.organisering.roller.map((rolle, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-5 md:p-6 bg-card-token rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-primary-icon flex-shrink-0" />
                  <p className="text-foreground font-medium text-base md:text-lg">{rolle}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* E) FAQ Section */}
      <Section variant="light">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> OFTE STILTE SPØRSMÅL
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
                Ofte stilte spørsmål
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="item-1"
                className="border-b border-border/50 bg-card-token rounded-xl mb-4 p-4 md:p-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg md:text-xl py-4 hover:no-underline text-foreground">
                  Hva slags tjenester tilbyr dere?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 text-base md:text-lg leading-relaxed pb-4 pt-2">
                  Vi tilbyr et omsorgstilbud med 2 plasser for barn og unge i alderen 12–18 år. Våre tjenester inkluderer døgnkontinuerlig tilstedeværelse, individuell oppfølging, skole og struktur, aktivitet og mestring, samt samarbeid med nettverk.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border-b border-border/50 bg-card-token rounded-xl mb-4 p-4 md:p-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg md:text-xl py-4 hover:no-underline text-foreground">
                  Hvordan jobber dere med trygghet og struktur?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 text-base md:text-lg leading-relaxed pb-4 pt-2">
                  Vi etablerer tydelige rutiner og struktur som gir forutsigbarhet og trygghet. Strukturen tilpasses individuelle behov og justeres kontinuerlig. Vi jobber miljøterapeutisk gjennom hverdagen ved å skape trygge rammer og meningsfulle aktiviteter.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border-b border-border/50 bg-card-token rounded-xl mb-4 p-4 md:p-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg md:text-xl py-4 hover:no-underline text-foreground">
                  Hvordan samarbeider dere med familie?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 text-base md:text-lg leading-relaxed pb-4 pt-2">
                  Vi jobber tett sammen med familie og relevante tjenester for å sikre en helhetlig tilnærming og kontinuitet i oppfølgingen. Vi legger vekt på åpen kommunikasjon og regelmessige møter.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border-b border-border/50 bg-card-token rounded-xl mb-4 p-4 md:p-6"
              >
                <AccordionTrigger className="text-left font-semibold text-lg md:text-xl py-4 hover:no-underline text-foreground">
                  Hva er målgruppen for tilbudet?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 text-base md:text-lg leading-relaxed pb-4 pt-2">
                  Vårt tilbud er rettet mot barn og unge i alderen 12–18 år som trenger omsorg og støtte. Vi har 2 plasser og jobber med fokus på kontinuitet og tett oppfølging.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Container>
      </Section>

      {/* F) CTA Section */}
      <Section variant="default">
        <Container>
          <div className="bg-hero rounded-xl md:rounded-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="grid gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center lg:justify-start gap-2 font-semibold">
                  <span>+</span> KONTAKT
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                  Din reise starter her
                </h2>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Har du spørsmål eller trenger du hjelp? Vårt dedikerte team er her for å hjelpe deg hvert steg på veien. Ta kontakt i dag, så starter vi en samtale.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button
                    asChild
                    variant="hero"
                    size="default"
                    className="w-full sm:w-auto px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <Link to="/kontakt">
                      Kom i gang
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="heroOutline"
                    size="default"
                    className="w-full sm:w-auto px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <Link to="/kontakt">Kontakt oss</Link>
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
