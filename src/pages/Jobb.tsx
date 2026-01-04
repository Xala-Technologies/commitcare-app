import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { publicSiteContent } from "@/lib/publicSiteContent";
import {
  Heart,
  Users,
  Handshake,
  Briefcase,
  Moon,
  Clock,
  CheckCircle,
  Mail,
  FileText,
  Send,
  ArrowRight,
  GraduationCap,
  Shield,
  Zap,
  Star,
  Target,
} from "lucide-react";
import jobHero from "@/assets/pages/family-care.jpg";

const hvorforIcons = [Users, Heart, Handshake];
const rollerIcons = [Briefcase, Users, Moon, Clock];
const slikJobberViIcons = [GraduationCap, Target, Heart];

const Jobb = () => {
  const content = publicSiteContent.jobb;

  return (
    <Layout>
      <SEO
        title="Jobb hos oss"
        description={content.hero.lead}
        path="/jobb"
      />

      {/* A) Hero Section - Enhanced */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12"
        style={{
          backgroundImage: `url(${jobHero})`,
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
                Bli en del av vårt dedikerte team
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

      {/* B) Hvorfor Commit Care (3 kort) */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> HVORFOR COMMIT CARE
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Hvorfor jobbe hos oss
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.hvorforCommitCare.map((punkt, index) => {
              const IconComponent = hvorforIcons[index] || Heart;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 md:w-9 md:h-9 text-primary-icon" />
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

      {/* C) Roller vi typisk trenger */}
      <Section variant="light">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> ROLLER
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Roller vi typisk trenger
            </h2>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
              Vi søker medarbeidere til ulike roller i vårt team
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {content.roller.map((rolle, index) => {
              const IconComponent = rollerIcons[index] || Briefcase;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-border/50 flex items-start gap-6 md:gap-8 group"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary-icon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                      {rolle.title}
                    </h3>
                    <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                      {rolle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* D) Slik jobber vi */}
      <Section variant="dark" className="bg-section-dark">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> ARBEIDSHVERDAG
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6 leading-tight">
              Slik jobber vi
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed">
              Vår arbeidshverdag bygger på kontinuitet, struktur og faglig utvikling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {content.slikJobberVi.map((punkt, index) => {
              const IconComponent = slikJobberViIcons[index] || Heart;
              return (
                <div
                  key={index}
                  className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-border/50 group"
                >
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/30 transition-all duration-300">
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

      {/* E) Slik søker du */}
      <Section variant="default">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> SØKNING
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Slik søker du
              </h2>
              <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
                Vi ser frem til å høre fra deg
              </p>
            </div>

            <div className="bg-card-token rounded-xl p-8 md:p-10 border border-border/50 shadow-lg">

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <div className="bg-background/50 rounded-xl p-6 md:p-7 border border-border/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-primary-icon" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                        Hva du sender
                      </h3>
                      <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                        {content.slikSokerDu.hvaDuSender}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-background/50 rounded-xl p-6 md:p-7 border border-border/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-icon" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                        Hvor du sender
                      </h3>
                      <p className="text-foreground/75 text-base md:text-lg leading-relaxed mb-4">
                        {content.slikSokerDu.hvorDuSender}
                      </p>
                      <div className="flex items-center gap-2 text-primary-icon font-medium">
                        <Mail className="w-4 h-4" />
                        <a 
                          href={`mailto:${content.rekrutteringEpost}`}
                          className="hover:underline"
                        >
                          {content.rekrutteringEpost}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out min-h-[52px] font-semibold"
                >
                  <a href={`mailto:${content.rekrutteringEpost}?subject=Åpen søknad`}>
                    <Send className="w-5 h-5 mr-2" />
                    Send søknad
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary-icon text-primary-icon hover:bg-primary-icon hover:text-white transition-all duration-300 min-h-[52px] font-semibold"
                >
                  <Link to="/kontakt">
                    Kontakt oss
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* F) CTA Section */}
      <Section variant="default">
        <Container>
          <div className="bg-hero rounded-xl md:rounded-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> KONTAKT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                Ta kontakt for mer informasjon
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Har du spørsmål om stillinger eller vil du vite mer om å jobbe hos oss? Vi er her for å hjelpe deg videre.
              </p>
              <div className="flex justify-center items-center">
                <Button
                  asChild
                  variant="hero"
                  size="default"
                  className="px-8 min-h-[52px] text-base font-semibold"
                >
                  <Link to="/kontakt">
                    Ta kontakt
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Jobb;
