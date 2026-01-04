import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Shield, Lock, FileText, Eye } from "lucide-react";

const Personvern = () => {
  return (
    <Layout>
      <SEO
        title="Personvern"
        description="Vår personvernpolicy og hvordan vi behandler personopplysninger i henhold til GDPR."
        path="/personvern"
      />

      {/* Hero Section */}
      <Section variant="default" className="pt-20 md:pt-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full py-2 px-4 mb-6">
              <Shield className="w-5 h-5 text-primary-icon" />
              <span className="text-primary-icon text-sm font-semibold">PERSONVERN</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              Personvern og behandling av personopplysninger
            </h1>
            <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
              Vi tar personvern på alvor og behandler personopplysninger i henhold til gjeldende personvernlovgivning, inkludert GDPR.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section variant="light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Ansvar for behandling */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Ansvar for behandling
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      <strong>Commit Care AS</strong> er behandlingsansvarlig for behandlingen av personopplysninger.
                    </p>
                    <p>
                      <strong>Organisasjonsnummer:</strong> 933440869
                    </p>
                    <p>
                      <strong>Adresse:</strong> Nesbruveien 75, 1394 Nesbru
                    </p>
                    <p>
                      <strong>E-post:</strong> info@commitcare.no
                    </p>
                    <p>
                      <strong>Telefon:</strong> +47 96 66 50 01
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hvilke personopplysninger vi samler inn */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Hvilke personopplysninger vi samler inn
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Vi kan behandle følgende kategorier av personopplysninger:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Navn, adresse, telefonnummer og e-postadresse</li>
                      <li>Fødselsnummer eller D-nummer</li>
                      <li>Informasjon om helseforhold og behov for omsorg</li>
                      <li>Informasjon om familie og pårørende</li>
                      <li>Informasjon fra samarbeidspartnere og offentlige tjenester</li>
                      <li>Andre opplysninger som er nødvendige for å levere våre tjenester</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Formål med behandlingen */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Formål med behandlingen
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>Vi behandler personopplysninger for følgende formål:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Å levere omsorgstjenester og oppfølging</li>
                      <li>Å oppfylle våre forpliktelser overfor brukere og pårørende</li>
                      <li>Å oppfylle lovpålagte forpliktelser</li>
                      <li>Å kommunisere med brukere, pårørende og samarbeidspartnere</li>
                      <li>Å dokumentere og rapportere til relevante myndigheter</li>
                      <li>Å forbedre våre tjenester og kvalitetssikring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Rettigheter */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Dine rettigheter
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>Du har følgende rettigheter når det gjelder dine personopplysninger:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li><strong>Innsynsrett:</strong> Du har rett til å få innsyn i hvilke personopplysninger vi behandler om deg</li>
                      <li><strong>Rettelse:</strong> Du har rett til å få rettet feilaktige eller ufullstendige opplysninger</li>
                      <li><strong>Sletting:</strong> Du har rett til å kreve sletting av personopplysninger under visse forhold</li>
                      <li><strong>Begrensning:</strong> Du har rett til å kreve begrensning av behandlingen</li>
                      <li><strong>Dataportabilitet:</strong> Du har rett til å få utlevert dine personopplysninger i et strukturt format</li>
                      <li><strong>Innsigelse:</strong> Du har rett til å gjøre innsigelse mot behandlingen</li>
                    </ul>
                    <p className="mt-4">
                      For å utøve dine rettigheter, kan du kontakte oss på <a href="mailto:info@commitcare.no" className="text-primary-icon hover:text-primary underline">info@commitcare.no</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sikkerhet */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    Sikkerhet
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Vi har implementert tekniske og organisatoriske tiltak for å sikre at personopplysninger behandles på en trygg måte. Dette inkluderer:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Kryptering av sensitive data</li>
                      <li>Tilgangskontroll og brukerrettigheter</li>
                      <li>Regelmessige sikkerhetsvurderinger</li>
                      <li>Opplæring av ansatte i personvern</li>
                      <li>Fysisk sikring av dokumenter og systemer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Oppdateringer */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Oppdateringer av personvernpolicy
              </h2>
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                Vi kan oppdatere denne personvernpolicyn fra tid til annen. Vi vil informere deg om vesentlige endringer. Den siste versjonen er alltid tilgjengelig på denne siden.
              </p>
              <p className="text-foreground/75 text-sm md:text-base mt-4">
                Sist oppdatert: {new Date().toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Personvern;

