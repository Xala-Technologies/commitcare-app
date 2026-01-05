import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Shield, Lock, FileText, Eye, Target, Users, Scale, Database, Key, HardDrive, Share2, Clock, AlertTriangle, Mail } from "lucide-react";

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
              CommitCare behandler personopplysninger for å gi forsvarlig omsorg og behandling, oppfylle dokumentasjons- og journalplikt, sikre trygg drift, og samarbeide korrekt med barnevernstjeneste og øvrige relevante instanser.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Content */}
      <Section variant="light">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 md:space-y-12">
            
            {/* Formål */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    1. Formål
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      CommitCare behandler personopplysninger for å gi forsvarlig omsorg og behandling, oppfylle dokumentasjons- og journalplikt, sikre trygg drift, og samarbeide korrekt med barnevernstjeneste og øvrige relevante instanser.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Roller og ansvar */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    2. Roller og ansvar
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      <strong>Behandlingsansvarlig:</strong> CommitCare (institusjonen) har ansvar for formål, rettslig grunnlag og at behandlingen skjer lovlig.
                    </p>
                    <p>
                      <strong>Databehandlere:</strong> CommitCare bruker leverandører for drift av IT-systemer, lagring og sikkerhetskopi. Det inngås databehandleravtaler som regulerer sikkerhet, tilgang, underleverandører, sletting og avvikshåndtering.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hvilke personopplysninger vi behandler */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    3. Hvilke personopplysninger vi behandler
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Vi behandler kun opplysninger som er nødvendige for oppholdet og for å oppfylle lovpålagte plikter.
                    </p>
                    <div className="space-y-4 mt-6">
                      <div>
                        <p className="font-semibold mb-2">Barn/unge (typiske kategorier)</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Identitets- og kontaktopplysninger</li>
                          <li>Opplysninger om plassering, vedtak, tiltak og mål for opphold</li>
                          <li>Helseopplysninger når det er relevant for oppfølging, helsehjelp og sikkerhet</li>
                          <li>Observasjoner, vurderinger, hendelser, planer og tiltak i oppfølgingen</li>
                          <li>Opplysninger om skole, fritid og samarbeid med tjenester der det er nødvendig</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Foreldre/foresatte og nettverk</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Kontaktopplysninger og relevant samhandlingsdokumentasjon</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Ansatte og vikarer</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Arbeidsrelaterte opplysninger, tilgangsroller, opplæring og nødvendig personaldokumentasjon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formål med behandlingen */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    4. Formål med behandlingen
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Omsorg, oppfølging og forsvarlig drift</li>
                      <li>Journalføring og dokumentasjon av vesentlige faktiske forhold og faglige vurderinger</li>
                      <li>Sikkerhet, beredskap og håndtering av hendelser</li>
                      <li>Kommunikasjon og samhandling med barnevernstjenesten og andre relevante aktører</li>
                      <li>Internkontroll, kvalitet og forbedringsarbeid</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Rettslig grunnlag */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    5. Rettslig grunnlag
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Behandling skjer i tråd med personopplysningsloven (GDPR) og relevante regler for barneverninstitusjoner, herunder krav til journalføring og internkontroll. Dokumenter fra 2023 viser også at tidligere krav om forhåndsgodkjenning (konsesjon) ikke lenger gjelder på samme måte, og at virksomheten selv må sikre etterlevelse gjennom styring og dokumentasjon.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Journalføring og fagsystem */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    6. Journalføring og fagsystem
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      All informasjon om beboere journalføres elektronisk i egnet journalsystem (EPJ) i tråd med gjeldende journalregler. Eksempelpraksis fra institusjonsplan viser elektronisk journalføring og bruk av tofaktorautentisering ved pålogging.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tilgangsstyring og konfidensialitet */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Key className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    7. Tilgangsstyring og konfidensialitet
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Vi styrer tilgang etter "need-to-know"</li>
                      <li>Tilganger gis rollebasert og revurderes ved endringer i stilling, oppgaver eller ved avsluttet arbeidsforhold</li>
                      <li>Innlogging sikres med sterke autentiseringsmekanismer, inkludert tofaktor der løsningen støtter det</li>
                      <li>Tilgang til avsluttede saker/journaler begrenses til et fåtall definerte roller</li>
                      <li>Ansatte er bundet av taushetsplikt og får opplæring i håndtering av sensitive opplysninger</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lagring, oppbevaring og fysisk dokumenthåndtering */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <HardDrive className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    8. Lagring, oppbevaring og fysisk dokumenthåndtering
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      CommitCare lagrer personopplysninger sikkert og forebygger uautorisert innsyn, endring eller tap.
                    </p>
                    <div className="space-y-3 mt-4">
                      <div>
                        <p className="font-semibold mb-2">Sikker lagring og backup</p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Sensitive opplysninger lagres på sikre løsninger med sikkerhetskopi, inkludert "off-site backup" der det er relevant</li>
                          <li>Sensitive opplysninger kan holdes i egne sikrede soner med strengere restriksjoner</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2">Digitalisering av innkommende dokumenter</p>
                        <p>
                          Fysisk dokumentasjon digitaliseres ved behov. Eksempelpraksis beskriver at dokumenter skannes inn og at papir deretter makuleres for å redusere risiko.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Deling og utlevering av opplysninger */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    9. Deling og utlevering av opplysninger
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Vi deler kun opplysninger når det er nødvendig og lovlig.
                    </p>
                    <p className="font-semibold mb-2">Typiske mottakere kan være:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Kommunal barnevernstjeneste og inntaksenhet (for oppfølging, rapportering og samhandling)</li>
                      <li>Helsetjenester (fastlege, legevakt, BUP) når barnet trenger helsehjelp</li>
                      <li>Skole/PPT når det er nødvendig for tilrettelegging og samarbeid</li>
                      <li>Tilsynsmyndigheter ved lovpålagte forespørsler</li>
                    </ul>
                    <p className="mt-4">
                      All deling dokumenteres i tråd med journal- og dokumentasjonskrav.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lagringstid, avslutning av sak og sletting */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    10. Lagringstid, avslutning av sak og sletting
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Personopplysninger lagres ikke lenger enn nødvendig.
                    </p>
                    <p>
                      Ved utflytting avsluttes journal i fagsystem etter fast prosedyre. Eksempelpraksis beskriver at beboere etter utflytting blir begrenset tilgjengelig for ledelse, og senere fjernes fra operative lister, med videre tilgang kun for systemadministrasjon i tråd med egne lagringsregler.
                    </p>
                    <p>
                      Personopplysninger om ansatte håndteres med egen slettelogikk ved avsluttet arbeidsforhold, etter fast prosedyre (tilpasset arbeidsrettslige plikter og dokumentasjonskrav).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Informasjonssikkerhet, risikostyring og internkontroll */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    11. Informasjonssikkerhet, risikostyring og internkontroll
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      CommitCare jobber systematisk med informasjonssikkerhet og personvern som del av internkontrollen.
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Risikovurderinger gjennomføres for systemer, arbeidsprosesser og hendelser</li>
                      <li>Avvik registreres, håndteres og lukkes med tiltak</li>
                      <li>Tilganger, logger og rutiner kontrolleres jevnlig</li>
                      <li>Vi dokumenterer internkontrollen og bruker funn til forbedring</li>
                    </ul>
                    <p className="mt-4">
                      CommitCare sin sikkerhetsstyring er forankret i virksomhetens ISMS, og løsningen er ISO 27001-sertifisert (relevant for styring, risikohåndtering, hendelser og tilgangskontroll).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registrertes rettigheter */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    12. Registrertes rettigheter
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Barn/unge og eventuelt foreldre/foresatte (avhengig av rettslig grunnlag og rolle) har rettigheter etter GDPR, som:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Innsyn i egne opplysninger</li>
                      <li>Retting av feil</li>
                      <li>Begrensning der vilkår er oppfylt</li>
                      <li>Klage til Datatilsynet</li>
                    </ul>
                    <p className="mt-4">
                      Henvendelser vurderes konkret, og vi ivaretar samtidig lovpålagte plikter og hensyn til barnets beste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kontaktpunkt */}
            <div className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-icon" />
                </div>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                    13. Kontaktpunkt
                  </h2>
                  <div className="space-y-4 text-foreground/90 text-base md:text-lg leading-relaxed">
                    <p>
                      Personvernansvarlig hos CommitCare håndterer:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Innsynsbegjæringer</li>
                      <li>Avvik og sikkerhetshendelser knyttet til personopplysninger</li>
                      <li>Spørsmål om behandling, deling, lagringstid og rutiner</li>
                    </ul>
                    <p className="mt-4">
                      For henvendelser, kan du kontakte oss på <a href="mailto:info@commitcare.no" className="text-primary-icon hover:text-primary underline">info@commitcare.no</a> eller telefon <a href="tel:+479665001" className="text-primary-icon hover:text-primary underline">+47 96 66 50 01</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Personvern;

