import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Accessibility, Eye, MousePointer, Keyboard, CheckCircle } from "lucide-react";

const Tilgjengelighet = () => {
  return (
    <Layout>
      <SEO
        title="Tilgjengelighet"
        description="Vår forpliktelse til tilgjengelighet og hvordan vi jobber for å gjøre nettstedet tilgjengelig for alle."
        path="/tilgjengelighet"
      />

      {/* Hero Section */}
      <Section variant="default" className="pt-20 md:pt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full py-2 px-4 mb-6">
              <Accessibility className="w-5 h-5 text-primary-icon" />
              <span className="text-primary-icon text-sm font-semibold">TILGJENGELIGHET</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              Tilgjengelighet for alle
            </h1>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
              Vi jobber kontinuerlig med å gjøre nettstedet vårt tilgjengelig for alle brukere, uavhengig av funksjonsevne.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section variant="light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Vår forpliktelse */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Accessibility className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Vår forpliktelse til tilgjengelighet
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Commit Care AS forpliktet seg til å gjøre nettstedet tilgjengelig i samsvar med lov om tilgjengelighet og diskrimineringsforbud (diskriminerings- og tilgjengelighetsloven).
                    </p>
                    <p>
                      Vi jobber kontinuerlig med å forbedre tilgjengeligheten på nettstedet vårt og sikre at alle brukere, uavhengig av funksjonsevne, kan få tilgang til informasjonen og tjenestene våre.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Status for tilgjengelighet */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Status for tilgjengelighet
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Dette nettstedet er delvis i samsvar med WCAG 2.1 nivå AA. Vi jobber kontinuerlig med å forbedre tilgjengeligheten og rette kjente problemer.
                    </p>
                    <p>
                      Noen områder som vi jobber med å forbedre:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Kontrastforhold for tekst og bakgrunn</li>
                      <li>Tastaturnavigasjon og fokusindikatorer</li>
                      <li>Skjermleser-kompatibilitet</li>
                      <li>Alternativ tekst for bilder</li>
                      <li>Struktur og overskrifter</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Funksjoner for tilgjengelighet */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Funksjoner for tilgjengelighet
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Keyboard className="w-5 h-5 text-primary-icon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Tastaturnavigasjon</h3>
                    <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                      Du kan navigere gjennom nettstedet ved hjelp av tastaturet. Bruk Tab for å gå fremover og Shift+Tab for å gå tilbake.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-primary-icon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Skalerbar tekst</h3>
                    <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                      Du kan endre tekststørrelsen ved å bruke zoom-funksjonen i nettleseren (Ctrl/Cmd + eller -).
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MousePointer className="w-5 h-5 text-primary-icon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Alternativ tekst</h3>
                    <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                      Alle bilder har alternativ tekst som beskriver innholdet for skjermlesere.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Accessibility className="w-5 h-5 text-primary-icon mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Semantisk struktur</h3>
                    <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                      Nettstedet bruker semantisk HTML for bedre navigasjon med hjelpeteknologi.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rapporter problemer */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Accessibility className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Rapporter tilgjengelighetsproblemer
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Hvis du opplever problemer med tilgjengeligheten på nettstedet vårt, ber vi deg kontakte oss. Vi tar alle tilbakemeldinger på alvor og jobber med å løse problemene.
                    </p>
                    <p>
                      <strong>Kontaktinformasjon:</strong>
                    </p>
                    <ul className="list-none space-y-2 ml-4">
                      <li>E-post: <a href="mailto:info@commitcare.no" className="text-primary-icon hover:text-primary underline">info@commitcare.no</a></li>
                      <li>Telefon: <a href="tel:+479665001" className="text-primary-icon hover:text-primary underline">+47 96 66 50 01</a></li>
                      <li>Postadresse: Myraveien 26, 3425 Reistad</li>
                    </ul>
                    <p className="mt-4">
                      Vi svarer på henvendelser innen 5 virkedager.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Klageadgang */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Klageadgang
              </h2>
              <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                <p>
                  Hvis du ikke er fornøyd med hvordan vi håndterer din henvendelse om tilgjengelighet, kan du klage til Diskriminerings- og tilgjengelighetsnemnda.
                </p>
                <p>
                  <strong>Diskriminerings- og tilgjengelighetsnemnda</strong><br />
                  Postboks 8034 Dep<br />
                  0030 Oslo<br />
                  E-post: <a href="mailto:post@dt.no" className="text-primary-icon hover:text-primary underline">post@dt.no</a><br />
                  Telefon: 22 40 70 00
                </p>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Tilgjengelighet;

