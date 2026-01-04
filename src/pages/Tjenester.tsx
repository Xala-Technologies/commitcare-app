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
  Book, 
  GraduationCap,
  Activity,
  ArrowRight,
  Clock,
  Users2,
  Handshake,
  CheckCircle,
  Home,
} from "lucide-react";
import servicesHero from "@/assets/pages/tjenester/family-care.jpg";
import caregiver1 from "@/assets/pages/tjenester/caregiver-1.jpg";
import caregiver2 from "@/assets/pages/tjenester/caregiver-2.jpg";
import familyCare from "@/assets/pages/tjenester/family-care.jpg";
import samarbeidImage from "@/assets/pages/tjenester/11.jpg";

const serviceIcons = [
  Heart,
  Shield,
  GraduationCap,
  Activity,
  Users,
  Handshake,
];

const Tjenester = () => {
  const content = publicSiteContent.tjenester;

  return (
    <Layout>
      <SEO 
        title="Tjenester" 
        description={content.hero.lead} 
        path="/tjenester" 
      />
      
      {/* A) Hero Section with Breadcrumbs */}
      <section 
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12 pt-16 md:pt-20"
        style={{
          backgroundImage: `url(${servicesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-hero/60" />
        
        <Container className="relative z-10 py-10 md:py-14 lg:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-hero/40 backdrop-blur-sm rounded-full py-2 md:py-3 px-4 md:px-6 mb-6 md:mb-8 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white text-sm md:text-base font-semibold">
                Omsorgstilbud for barn og unge mellom 12-18 år
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

      {/* B) What We Offer Section - Main Services */}
      <Section variant="default">
        <Container>
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> VÅRE TJENESTER
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 md:mb-8 leading-tight">
              Hva vi tilbyr
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
              {content.hero.lead}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.hvaViTilbyr.map((tjeneste, index) => {
              const IconComponent = serviceIcons[index] || Heart;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border/50 group flex flex-col h-full"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-5">
                    {tjeneste.title}
                  </h3>
                  <p className="text-foreground/75 text-base md:text-lg mb-5 md:mb-6 leading-relaxed flex-grow">
                    {tjeneste.description}
                  </p>
                  {tjeneste.details && (
                    <div className="space-y-2 mb-5">
                      {tjeneste.details.slice(0, 3).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary-icon mt-1 flex-shrink-0" />
                          <p className="text-foreground/75 text-sm md:text-base leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* C) Who It's For Section - With Image */}
      <Section variant="light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Image */}
            <div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={caregiver1}
                  alt="Hvem tilbudet passer for"
                  className="w-full h-[400px] md:h-[500px] object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>

            {/* Right: Content */}
            <div>
              <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
                <span>+</span> HVEM TILBUDET PASSER FOR
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 md:mb-8 leading-tight">
                Hvem tilbudet passer for
              </h2>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed mb-6 md:mb-8">
                Vårt tilbud er designet for barn og unge med spesifikke behov
              </p>

              <div className="space-y-4 md:space-y-6">
                {content.hvemPasserFor.map((punkt, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-card-token rounded-xl p-5 md:p-6 border border-border/50"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-primary-icon" />
                    </div>
                    <p className="font-serif text-lg md:text-xl font-semibold text-foreground">
                      {punkt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* E) Collaboration Section - Dark Background with Image */}
      <Section variant="dark" className="bg-section-dark">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
                <span>+</span> SAMARBEID
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6 md:mb-8 leading-tight">
                Samarbeid i praksis
              </h2>
              <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8">
                Vi jobber tett sammen med relevante aktører for å sikre best mulig oppfølging og kontinuitet.
              </p>

              <div className="space-y-4 md:space-y-6">
                {content.samarbeid.map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-card-token rounded-xl p-5 md:p-6 border border-border/50"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      {index === 0 ? (
                        <Users2 className="w-6 h-6 text-primary-icon" />
                      ) : index === 1 ? (
                        <GraduationCap className="w-6 h-6 text-primary-icon" />
                      ) : (
                        <Activity className="w-6 h-6 text-primary-icon" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                        {partner.title}
                      </h3>
                      <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src={samarbeidImage}
                  alt="Samarbeid i praksis"
                  className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* F) CTA Section */}
      <Section variant="default">
        <Container>
          <div className="bg-hero rounded-xl md:rounded-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="grid gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                  Ønsker du jobbe hos oss?
                </h2>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-4 leading-relaxed">
                  Vi leter etter både faglige
                </p>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Vi søker jevnlig dyktige medarbeidere med relevant erfaring. Er du ferdig utdannet sosionom, miljøterapeut eller vernepleier, vil vi gjerne høre fra deg. Send oss søknad og CV.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button 
                    asChild
                    variant="hero" 
                    size="default" 
                    className="w-full sm:w-auto px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <Link to="/om-oss">Les mer om oss</Link>
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

export default Tjenester;
