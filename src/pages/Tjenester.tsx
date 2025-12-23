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
  Phone, 
  Home, 
  CheckCircle,
  GraduationCap,
  Activity,
  ArrowRight,
  Clock,
  Users2,
  Handshake
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import caregiver2 from "@/assets/caregiver-2.jpg";

const serviceIcons = [
  Heart,
  Shield,
  GraduationCap,
  Activity,
  Users,
  ArrowRight,
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
      
      {/* Hero Section - Same style as Home */}
      <section 
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-hero/60" />
        
        <Container className="relative z-10 py-10 md:py-14 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-primary-foreground">
              <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
                <span className="text-primary-foreground">+</span> TJENESTER
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

        {/* Feature Strip - Overlapping */}
        <div className="absolute bottom-0 left-[18%] translate-y-1/2 z-50 hidden md:block">
          <div className="flex shadow-xl">
            {content.fakta.slice(0, 2).map((faktum, index) => (
              <div key={index} className="flex">
                <div className="bg-primary px-12 py-10 flex items-start gap-6 min-w-[360px]">
                  <div className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0">
                    {index === 0 ? (
                      <Clock className="w-7 h-7 text-primary-foreground" />
                    ) : (
                      <Users2 className="w-7 h-7 text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-primary-foreground font-serif text-2xl mb-2">{faktum.title}</h3>
                    <p className="text-primary-foreground/70 text-base leading-relaxed">{faktum.description}</p>
                  </div>
                </div>
                {index === 0 && <div className="w-px bg-white"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards - Same style as Home ServiceCards */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto pt-8 md:pt-12 mb-12 md:mb-16">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> HVA VI TILBYR
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Våre tjenester
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl">
              Et omfattende omsorgstilbud med fokus på trygghet, struktur og kontinuerlig oppfølging
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.hvaViTilbyr.map((tjeneste, index) => {
              const IconComponent = serviceIcons[index] || Heart;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5">
                    {tjeneste.title}
                  </h3>
                  <p className="text-foreground/75 text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
                    {tjeneste.description}
                  </p>
                  {tjeneste.details && (
                    <div className="space-y-2 mb-5">
                      {tjeneste.details.slice(0, 2).map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary-icon mt-1 flex-shrink-0" />
                          <p className="text-foreground/75 text-sm leading-relaxed">{detail}</p>
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

      {/* Hvem tilbudet passer for - Similar to QualityHighlight */}
      <Section variant="light">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> HVEM TILBUDET PASSER FOR
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 md:mb-6">
              Hvem tilbudet passer for
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed font-medium">
              Vårt tilbud er designet for barn og unge med spesifikke behov
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {content.hvemPasserFor.map((punkt, index) => (
              <div
                key={index}
                className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                  <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                </div>
                <p className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4">
                  {punkt}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Avgrensning - Simple card */}
      <Section variant="default">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card-token rounded-xl p-8 md:p-10 border border-border/50 text-center">
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                {content.avgrensning}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Samarbeid i praksis - Similar to ServicesSection */}
      <Section variant="dark" className="bg-section-dark">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> SAMARBEID
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground">
              Samarbeid i praksis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {content.samarbeid.map((partner, index) => (
              <div 
                key={index}
                className="bg-card-token rounded-xl p-4 md:p-6 hover:shadow-card-hover transition-all duration-300 border border-border/50"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-5">
                  {index === 0 ? (
                    <Users2 className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
                  ) : index === 1 ? (
                    <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
                  ) : (
                    <Activity className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
                  )}
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                  {partner.title}
                </h3>
                <p className="text-foreground/90 text-base md:text-lg mb-4 md:mb-5 leading-relaxed font-medium">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section - Same style as Home CTASection */}
      <Section variant="default" className="py-10 md:py-12">
        <Container>
          <div className="bg-hero rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
              <div className="text-center lg:text-left">
                <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center lg:justify-start gap-2 font-semibold">
                  <span>+</span> KONTAKT
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                  Ønsker du en uforpliktende prat?
                </h2>
                <p className="text-primary-foreground/90 text-base md:text-lg mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  Har du spørsmål eller vil du diskutere hvordan vi kan hjelpe? Vi er her for å hjelpe deg videre.
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

export default Tjenester;
