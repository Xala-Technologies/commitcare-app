/**
 * Public Site Content
 * Innhold for offentlig nettsted basert på institusjonsplanen
 */

export interface PublicLocationFactRow {
  label: string;
  value: string;
}

/** Valgfrie blokker etter aktivitetsseksjonen (f.eks. dagsplan, LK20, flere avsnitt). */
export type PublicLocationAdditionalSection =
  | { type: "paragraphs"; title?: string; paragraphs: string[] }
  | { type: "schedule"; title: string; intro?: string; rows: { time: string; activity: string }[] }
  | {
      type: "lk20";
      title: string;
      intro?: string;
      bullets: string[];
      /** Valgfritt bilde (bred layout med tekst side om side på store skjermer). */
      image?: string;
      imageAlt?: string;
    };

export interface PublicLocationBodySection {
  title: string;
  paragraphs: string[];
}

export interface PublicLocation {
  slug: string;
  name: string;
  /** Kort navn i header/meny (fullt navn i `name` brukes på sider og skjermleser) */
  menuLabel?: string;
  city: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  mapUrl?: string;
  openingHours?: string;
  /** Sidestruktur (avdelingssider) */
  heroTitle?: string;
  heroLead?: string;
  heroImage?: string;
  bodyParagraphs?: string[];
  /** Valgfritt: innledning som egne underseksjoner (tydeligere enn ett langt avsnittsfelt). */
  bodySections?: PublicLocationBodySection[];
  activitiesTitle?: string;
  activitiesParagraphs?: string[];
  factBoxTitle?: string;
  factRows?: PublicLocationFactRow[];
  galleryImages?: string[];
  /** Valgfri merkelapp under hero (f.eks. under etablering) */
  heroBadge?: string;
  /** Valgfri undertekst (f.eks. verdier / tagline) */
  heroTagline?: string;
  /** Valgfri fotnote under hero (sist oppdatert e.l.) */
  heroFootnote?: string;
  /** Innhold etter aktiviteter, i rekkefølge (avsnitt, tabell, LK20-punkter). */
  additionalSections?: PublicLocationAdditionalSection[];
  /** Tittel på første tekstblokk (f.eks. «Om tilbudet») når siden har innholdsfortegnelse. */
  introSectionTitle?: string;
}

export const publicSiteContent = {
  tjenester: {
    hero: {
      title: "Våre tjenester",
      lead: "Vi tilbyr et omsorgstilbud for barn og unge som trenger trygge rammer, struktur og tett voksenstøtte i hverdagen",
    },
    fakta: [
      {
        title: "12–18 år",
        description: "Aldersgruppe",
      },
      {
        title: "Omsorg og frivillige tiltak",
        description: "Tilbudstype",
      },
    ],
    hvaViTilbyr: [
      {
        title: "Omsorg og miljøterapeutisk oppfølging",
        description: "Vi tilbyr trygg omsorg med miljøterapeutisk tilnærming som gir stabilitet og trygghet i hverdagen.",
        details: [
          "Døgnkontinuerlig tilstedeværelse av erfarne fagfolk",
          "Miljøterapeutisk tilnærming som skaper trygge og forutsigbare rammer",
          "Tilpasset omsorg basert på individuelle behov og situasjoner",
          "Kontinuerlig oppfølging og dokumentasjon av utvikling",
        ],
      },
      {
        title: "Struktur og forutsigbar hverdag",
        description: "Vi etablerer tydelige rutiner og struktur som gir forutsigbarhet og trygghet for barn og unge.",
        details: [
          "Tydelige rutiner for hverdagen som gir trygghet og forutsigbarhet",
          "Strukturert oppfølging med faste møter og avklaringer",
          "Forutsigbare rammer som støtter utvikling og velvære",
          "Kontinuerlig justering av struktur etter individuelle behov",
        ],
      },
      {
        title: "Skole, aktivitet og mestring",
        description: "Vi gir støtte i skolehverdag og arrangerer meningsfulle aktiviteter som fremmer utvikling og mestring.",
        details: [
          "Tett samarbeid med skole for å støtte skolehverdag og læring",
          "Organisering av meningsfulle aktiviteter som fremmer mestring",
          "Støtte i hverdagsferdigheter og sosial kompetanse",
          "Fokus på utvikling og positive opplevelser",
        ],
      },
      {
        title: "Helse og livsmestring i hverdagen",
        description: "Vi gir støtte til helse og livsmestring gjennom hverdagen for å fremme velvære og utvikling.",
        details: [
          "Støtte i helse og velvære gjennom hverdagen",
          "Veiledning i livsmestring og praktiske ferdigheter",
          "Samarbeid med helsevesen for helhetlig oppfølging",
          "Fokus på selvopplevd mestring og utvikling",
        ],
      },
      {
        title: "Familie, nettverk og samarbeid",
        description: "Vi jobber tett sammen med familie og nettverk for best mulig oppfølging og kontinuitet.",
        details: [
          "Tett samarbeid med familie for å støtte relasjoner og kontinuitet",
          "Koordinering med relevante aktører i nettverket",
          "Regelmessige oppdateringer og informasjon til alle involverte",
          "Fokus på helhetlig tilnærming og samarbeid",
        ],
      },
      {
        title: "Overgang og videre støtte",
        description: "Vi sikrer smidige overganger og planlegger videre støtte når det trengs for kontinuitet og trygghet.",
        details: [
          "Planlegging av overganger i god tid sammen med relevante aktører",
          "Koordinering og dokumentasjon for kontinuitet i oppfølging",
          "Videre støtte og oppfølging når det trengs",
          "Fokus på trygge og forutsigbare overganger",
        ],
      },
    ],
    hvemPasserFor: [
      "Barn og unge med omsorgsbehov",
      "Behov for trygg ramme og tett voksenstøtte",
      "Behov for struktur, støtte i skole/hverdag og stabilitet",
    ],
    avgrensning: "Tilbudet er et omsorgstilbud og er ikke utformet for atferdsplasseringer etter kapittel 6.",
    samarbeid: [
      {
        title: "Barnevernstjeneste",
        description: "Tett samarbeid med barnevernstjenesten for koordinert oppfølging.",
      },
      {
        title: "Skole",
        description: "Tett samarbeid med skole for å støtte skolehverdag og læring.",
      },
      {
        title: "Helse og øvrig nettverk",
        description: "Samarbeid med helsevesen og andre relevante aktører for helhetlig oppfølging.",
      },
    ],
  },
  trygghetOgKvalitet: {
    hero: {
      title: "Trygghet og kvalitet",
      lead: "Vi bygger tillit gjennom strukturert oppfølging og tett samarbeid. Vårt fokus er på trygghet, forutsigbarhet og god oppfølging for barn, unge og familier.",
    },
    kvalitetIPraksis: [
      {
        title: "Tett voksenoppfølging",
        description: "Kontinuerlig tilstedeværelse og oppfølging av erfarne fagfolk som gir trygghet og støtte i hverdagen.",
      },
      {
        title: "Struktur og forutsigbarhet",
        description: "Tydelige rutiner og struktur som gir forutsigbarhet og trygghet for barn og unge.",
      },
      {
        title: "Medvirkning og samarbeid",
        description: "Vi jobber for å sikre at barn og unge får medvirkning i hverdagen og i beslutninger som angår dem.",
      },
      {
        title: "Kompetanse og veiledning",
        description: "Våre fagfolk har relevant kompetanse og får kontinuerlig veiledning og opplæring.",
      },
      {
        title: "Læring og forbedring",
        description: "Vi jobber kontinuerlig med å lære og forbedre våre tjenester basert på erfaringer og tilbakemeldinger.",
      },
      {
        title: "Sikkerhet og beredskap",
        description: "Vi har rutiner og prosedyrer for å sikre trygghet og håndtere utfordrende situasjoner på en trygg måte.",
      },
    ],
    rettigheterOgMedvirkning: [
      {
        question: "Hvordan får ungdom informasjon om sine rettigheter?",
        answer: "Ungdom får informasjon om sine rettigheter gjennom møter, samtaler og skriftlig informasjon. Vi sikrer at informasjonen er tilgjengelig og forståelig, og at ungdom har mulighet til å stille spørsmål og få avklaringer.",
      },
      {
        question: "Hvordan jobber vi med medvirkning i hverdagen?",
        answer: "Vi jobber for å sikre at ungdom får medvirkning i hverdagen gjennom å høre på deres meninger, involvere dem i beslutninger som angår dem, og gi dem mulighet til å påvirke sin egen situasjon. Dette gjøres gjennom regelmessige samtaler og møter.",
      },
      {
        question: "Hvordan håndterer vi klager og tilbakemeldinger?",
        answer: "Vi har rutiner for å motta og behandle klager og tilbakemeldinger. Ungdom og familier kan gi tilbakemeldinger gjennom møter, samtaler eller skriftlig. Alle tilbakemeldinger tas på alvor og følges opp.",
      },
      {
        question: "Hvordan jobber vi for å forebygge tvang og inngrep?",
        answer: "Vi jobber aktivt for å forebygge behov for tvang og inngrep gjennom tidlig oppfølging, tett samarbeid, og å finne alternative løsninger. Vårt mål er å skape trygge rammer som reduserer behovet for inngrep.",
      },
      {
        question: "Hvordan jobber vi med trygghet i krevende situasjoner?",
        answer: "Vi har rutiner og prosedyrer for å håndtere krevende situasjoner på en trygg måte. Våre fagfolk er opplært i å håndtere utfordrende situasjoner, og vi jobber tett sammen for å sikre trygghet for alle involverte.",
      },
    ],
    personvern: [
      {
        title: "Tilgangsstyring",
        description: "Vi har rutiner for å sikre at kun autoriserte personer har tilgang til personopplysninger, og at tilgangen er begrenset til det som er nødvendig for å utføre arbeidet.",
      },
      {
        title: "Konfidensialitet",
        description: "Vi behandler all informasjon konfidensielt og deler kun informasjon med relevante aktører når det er nødvendig og i samsvar med gjeldende regelverk.",
      },
      {
        title: "Dokumentert behandling",
        description: "Vi dokumenterer hvordan personopplysninger behandles, og sikrer at behandlingen er i samsvar med personvernregelverket.",
      },
    ],
  },
  omOss: {
    hero: {
      title: "Om oss",
      lead: "Commit Care – Avdeling Lier er et omsorgstilbud for barn og unge i alderen 12–18 år. Vi tilbyr en trygg ramme med struktur, forutsigbarhet og tett voksenstøtte.",
    },
    kortOmAvdelingen: [
      {
        slug: "lier",
        eyebrow: "Nåværende lokasjon",
        title: "Commit Care – Avdeling Lier",
        description:
          "Trygg ramme med struktur, forutsigbarhet og tett voksenstøtte for barn og unge 12–18 år.",
        body: "Avdelingen i Lier er i drift med fokus på kontinuitet, miljøterapeutisk arbeid i hverdagen og tett samarbeid med familie og tjenesteapparat.",
        address: "Myraveien 26 A, 3425 Reistad",
        city: "Lier",
      },
      {
        slug: "ronningen",
        eyebrow: "Inn på tunet",
        title: "Commit Care – Avdeling Rønningen",
        description:
          "Inn på tunet på Rønningen gård: strukturert og trygt tilbud for elever på 5.–10. trinn som har behov for en alternativ læringsarena i kombinasjon med ordinær skolegang.",
        body: "Praktisk læring, mindre grupper, tydelige voksne og tilpasset skolehverdag. Ta kontakt for spørsmål om tilbud og samarbeid.",
        city: "Rønningen",
      },
    ],
    varTilnaerming: [
      {
        title: "Relasjon og trygghet",
        description: "Vi bygger trygge relasjoner gjennom kontinuerlig tilstedeværelse og tett oppfølging. Vårt fokus er på å skape tillit og trygghet i hverdagen.",
      },
      {
        title: "Struktur og forutsigbarhet",
        description: "Vi etablerer tydelige rutiner og struktur som gir forutsigbarhet og trygghet. Strukturen tilpasses individuelle behov og justeres kontinuerlig.",
      },
      {
        title: "Miljøterapeutisk arbeid i hverdagen",
        description: "Vi jobber miljøterapeutisk gjennom hverdagen ved å skape trygge rammer, tydelige rutiner og meningsfulle aktiviteter som støtter utvikling.",
      },
      {
        title: "Samarbeid med familie og tjenester",
        description: "Vi jobber tett sammen med familie og relevante tjenester for å sikre en helhetlig tilnærming og kontinuitet i oppfølgingen.",
      },
    ],
    organisering: {
      tekst: "Tydelig ansvar og roller i drift og fag.",
      roller: [
        "Institusjonsleder",
        "Stedfortreder/avdelingsleder",
        "Fag- og kvalitet",
        "Miljøteam",
      ],
    },
    kontaktinfo: {
      postadresse: "Myraveien 26 A, 3425 Reistad",
      besoksadresse: "Myraveien 26 A, 3425 Reistad",
      epost: "info@commitcare.no",
      foretaksnummer: "984 331 584",
    },
  },
  jobb: {
    hero: {
      title: "Jobb hos oss",
      lead: "Vi søker dedikerte og omsorgsfulle medarbeidere som deler våre verdier om trygghet, struktur og tett oppfølging. Hos oss får du mulighet til å jobbe i små forhold med fokus på kontinuitet og faglig utvikling.",
    },
    hvorforCommitCare: [
      {
        title: "Tett oppfølging og små forhold",
        description: "Vi jobber i små forhold, noe som gir mulighet for tett oppfølging og meningsfulle relasjoner med barn og unge.",
      },
      {
        title: "Struktur og faglig utvikling",
        description: "Vi tilbyr strukturert arbeid med tydelige rutiner og kontinuerlig faglig utvikling gjennom veiledning og opplæring.",
      },
      {
        title: "Samarbeid og lagarbeid",
        description: "Vi jobber tett sammen som et team med fokus på godt samarbeid, støtte og felles refleksjon.",
      },
    ],
    roller: [
      {
        title: "Miljøterapeut",
        description: "Vi søker miljøterapeuter med relevant faglig bakgrunn og erfaring innen miljøterapeutisk arbeid med barn og unge.",
      },
      {
        title: "Miljøarbeider",
        description: "Vi søker miljøarbeidere med interesse for og erfaring med arbeid med barn og unge i omsorgstilbud.",
      },
      {
        title: "Våken nattevakt",
        description: "Vi søker våkne nattevakter som kan bidra til trygghet og oppfølging i døgnet rundt.",
      },
      {
        title: "Tilkallingsvikar",
        description: "Vi søker tilkallingsvikarer som kan stille opp ved behov og bidra til kontinuitet i oppfølgingen.",
      },
    ],
    slikJobberVi: [
      {
        title: "Kontinuitet og stabile voksne",
        description: "Vi jobber for å sikre kontinuitet i oppfølgingen gjennom stabile voksne og forutsigbare møter. Dette gir trygghet for både barn, unge og medarbeidere.",
      },
      {
        title: "Struktur i hverdagen",
        description: "Vi har tydelige rutiner og struktur i hverdagen som gir forutsigbarhet og trygghet. Strukturen støtter både barn og unge og medarbeidere i arbeidet.",
      },
      {
        title: "Veiledning og faglig refleksjon",
        description: "Vi gir kontinuerlig veiledning og mulighet for faglig refleksjon gjennom møter, samtaler og opplæring. Dette støtter faglig utvikling og kvalitet i arbeidet.",
      },
    ],
    slikSokerDu: {
      hvaDuSender: "CV og kort tekst om deg selv og hvorfor du søker hos oss",
      hvorDuSender: "Send søknad til vår e-post eller via kontaktskjemaet",
    },
    rekrutteringEpost: "jobb@commitcare.no",
  },
  kontakt: {
    hero: {
      title: "Ta kontakt",
      lead: "Vi tilbyr en uforpliktende prat for å avklare dine behov og finne ut hvordan vi kan hjelpe deg og din familie videre.",
    },
    kontaktinfo: {
      telefon: "+47 96 66 50 01",
      epost: "info@commitcare.no",
      postadresse: "Myraveien 26 A, 3425 Reistad",
      besoksadresse: "Myraveien 26 A, 3425 Reistad",
      foretaksnummer: "984 331 584",
    },
  },
  lokasjoner: {
    hero: {
      title: "Våre lokasjoner",
      lead: "Oversikt over våre avdelinger. Ta kontakt for mer informasjon om tilbud og kapasitet.",
    },
    items: [
      {
        slug: "lier",
        name: "Commit Care – Avdeling Lier",
        menuLabel: "Avdeling Lier",
        city: "Lier",
        description:
          "Omsorgstilbud for barn og unge 12–18 år med trygg ramme, struktur og tett voksenstøtte.",
        address: "Myraveien 26 A, 3425 Reistad",
        phone: "+47 96 66 50 01",
        email: "info@commitcare.no",
        openingHours: "Etter avtale",
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Myraveien+26A%2C+3425+Reistad%2C+Norge",
        heroTitle: "Velkommen til avdeling Lier",
        heroLead:
          "Trygge voksne og tydelige rammer – hverdagen tilpasses den enkelte i samarbeid med barnevern og skole.",
        heroImage: "/locations/avdeling-lier.jpg",
        bodySections: [
          {
            title: "Om tilbudet",
            paragraphs: [
              "Privat omsorgsinstitusjon med inntil to plasser for barn og ungdom 12–18 år, i tråd med barnevernsloven og med godkjenning fra Bufetats enhet for godkjenning (BEG), region øst.",
              "Døgnkontinuerlig tilstedeværelse, miljøterapeutisk arbeid og stabile relasjoner – med tydelig struktur i hverdagen.",
            ],
          },
          {
            title: "Målgruppe",
            paragraphs: [
              "Vedtak etter § 5-1 (omsorg) eller §§ 3-2 og 3-4 (frivillige hjelpetiltak). Tilbudet passer ungdom som trenger et rolig, skjermet bomiljø med tett voksenkontakt – ikke høysikkerhetsenhet eller kapittel 6-atferdsplasseringer.",
              "Typiske støttebehov kan være skole, sosial fungering, regulering og mestring, ofte etter belastning i omsorgssituasjonen. To ungdommer kan bo sammen når det er faglig forsvarlig og uten uheldig gruppedynamikk (jf. § 1-7).",
              "Om tiltaket passer den enkelte, avklares med barnevernstjenesten.",
            ],
          },
          {
            title: "Hverdag, skole og mestring",
            paragraphs: [
              "Ordinær skole i Lier når det er mulig: grunnskole og ungdomsskole omtrent 5–10 min med bil / ca. 15 min med buss; videregående i Drammen og Asker typisk 20–25 min reise.",
              "Vi har ikke eget undervisningsrom etter opplæringsloven § 13-2. Uten skoleplass i en periode avklarer vi med OT, NAV og andre om dagtilbud, praksis eller arbeidstrening.",
              "Mål og tiltaksplan legges med barnevern og ungdom; vi arbeider mot trygg overgang til familie, fosterhjem eller mindre krevende tiltak når tiden er inne.",
            ],
          },
          {
            title: "Lokalisering og nærmiljø",
            paragraphs: [
              "Skjermet boligområde i Reistad (Lier) med kort vei til skole, helse, kollektiv og fritid. Adresse og kart finner du i faktaboksen.",
              "Buss til Drammen og Asker: kort gange til holdeplass; omtrent 15 min til Drammen sentrum og 25 min til Asker.",
              "Fastlege, helsestasjon, skolehelsetjeneste, legevakt, BUP, sykehus og NAV nås raskt med bil.",
            ],
          },
          {
            title: "Samarbeid med familie og nettverk",
            paragraphs: [
              "Tett samarbeid med familie og nettverk når det er til barnets eller ungdommens beste. Samvær, besøk og kommunikasjon følger vedtak og individuelle vurderinger; praktiske spørsmål kan du ta opp med oss.",
            ],
          },
          {
            title: "Medvirkning, rettigheter og trygghet",
            paragraphs: [
              "Ungdom skal forstå sine rettigheter og kunne si fra – også ved uenighet. Medvirkning i hverdagen, planer og overganger er en fast del av arbeidet.",
              "Vi forebygger tvang og inngrep der det er mulig, og har rutiner for klage. Nærmere prosedyrer ligger i institusjonens styringsdokumenter.",
            ],
          },
          {
            title: "Kvalitet og tilsyn",
            paragraphs: [
              "Institusjonsleder er kontaktpunkt for tilsynsmyndigheter. Vi driver systematisk internkontroll og lærer av avvik og tilsyn for å forbedre tjenesten.",
            ],
          },
        ],
        activitiesTitle: "Fritid og aktiviteter",
        activitiesParagraphs: [
          "Fritiden veksler mellom rolig hjemmeaktivitet og meningsfulle tilbud ut fra alder, interesser og dagsform.",
          "Vi bruker ressurser i nærmiljøet – idrett, kultur, frivillige organisasjoner og natur – slik at ungdommen kan delta i vanlige arenaer sammen med miljøpersonalet.",
        ],
        additionalSections: [
          {
            type: "schedule",
            title: "Eksempel på døgnrytme",
            intro: "Tidsplanen tilpasses skole, avtaler og behov. Forenklet oversikt:",
            rows: [
              { time: "07:00–08:30", activity: "Oppvekst, frokost og forberedelse til skole eller dagtilbud" },
              { time: "Dagtid", activity: "Skole etter plan, eller avtalt dagtilbud / aktivitet" },
              { time: "Ettermiddag", activity: "Mat, lekser eller praktisk gjøremål; aktivitet eller hvile etter behov" },
              { time: "Kveld", activity: "Middag, fellesskap og rolig avslutning" },
              { time: "Natt", activity: "Nattestøtte og vakthold etter rutiner" },
            ],
          },
        ],
        factBoxTitle: "Fakta om avdeling Lier",
        factRows: [
          { label: "Målgruppe", value: "Barn og ungdom 12–18 år" },
          { label: "Kapasitet", value: "2 plasser" },
          { label: "Tilbud / hjemler", value: "Omsorg § 5-1 og frivillige tiltak §§ 3-2 og 3-4 (ikke kap. 6)" },
          { label: "Adresse (bosted)", value: "Myraveien 26 A, 3425 Reistad" },
          { label: "Organisasjonsnummer", value: "984 331 584" },
          { label: "Metodikk", value: "Miljøterapeutisk tilnærming, struktur og tett voksenoppfølging" },
          { label: "Samarbeid", value: "Familie, skole, barnevern og øvrig hjelpeapparat" },
        ],
      },
      {
        slug: "ronningen",
        name: "Commit Care – Avdeling Rønningen",
        menuLabel: "Avdeling Rønningen",
        city: "Rønningen",
        description:
          "Inn på tunet på Rønningen gård: strukturert og trygt tilbud for elever på 5.–10. trinn som trenger en alternativ læringsarena i kombinasjon med ordinær skolegang.",
        openingHours: "Kommunen legger til grunn ankomst til gården kl. 08:30 og avreise kl. 14:00. Endelige tider avklares med oppdragsgiver.",
        heroBadge: "Inn på tunet",
        heroTitle: "Rønningen gård – alternativ læringsarena",
        heroLead:
          "Inn på tunet for elever på 5.–10. trinn: praktisk læring, mindre grupper og tydelige voksne – ved siden av ordinær skolegang.",
        heroTagline:
          "Trygg skolehverdag med mestring, struktur og motivasjon for læring.",
        heroFootnote:
          "Godkjent omsorgsinstitusjon via Bufetat (avdeling Lier). Vi eier og driver Rønningen gård, tilrettelagt for Inn på tunet.",
        heroImage: "/locations/avdeling-ronningen.png",
        bodySections: [
          {
            title: "Målgruppe",
            paragraphs: [
              "Tilbudet passer elever som trenger mer praktisk og variert læring, tettere voksenoppfølging, forutsigbarhet, støtte til motivasjon og konsentrasjon, eller et roligere miljø med færre forstyrrelser. Det kan omfatte skolevegring, tilbaketrukkenhet, utagering eller funksjonsutfordringer – i tråd med kommunens anskaffelsesformål.",
            ],
          },
          {
            title: "Gården og fasiliteter",
            paragraphs: [
              "Eiendommen er på nesten 50 mål, med natur rundt og uten nære naboer. Her finnes aktivitetslokaler, låve og verksted, oppholdsrom til pause og regulering, rom til kreativt eller skjermet arbeid, kjøkken, dusj og toalett, samt soner til logg, måltid og rolig oppfølging. Uteområdene brukes til blant annet ballspill og organisert lek.",
            ],
          },
          {
            title: "Miljø og bærekraft",
            paragraphs: [
              "Vi planlegger kompost for matavfall, som kobler daglige aktiviteter til læring om ressursbruk og kretsløp.",
            ],
          },
        ],
        activitiesTitle: "Aktivitetstilbud",
        activitiesParagraphs: [
          "Aktivitetene tilpasses alder, funksjonsnivå, interesser og dagsform, med tydelige oppgaver, nytte og rolige overganger.",
          "Eksempler: dyrestell, ridning, dyrking og hage, ved og enklere vedlikehold, naturaktiviteter, fysisk lek og samarbeidsspill, atelier og maling, strukturert e-sport, samt enkel koding som fokusøkt.",
        ],
        additionalSections: [
          {
            type: "paragraphs",
            title: "Praktisk tilrettelegging for elevgrupper",
            paragraphs: [
              "Små grupper (3–4 elever): tett voksenoppfølging og fleksibel tilpasning. Større grupper og klasser: soner på store arealer, tydelig struktur og samarbeid med medfølgende. Ved klasseturer følger ansatte transport og opphold. Ansvar er alltid avklart; ved fravær gjelder rutiner for stedfortreder og informasjon. Aktiviteter gjennomføres ikke uten tilstrekkelig voksenoppfølging.",
            ],
          },
          {
            type: "schedule",
            title: "En vanlig dag på Rønningen gård",
            intro:
              "Eksempel etter kommunens rammer (henting slik at elevene er på gården 08:30, avreise 14:00):",
            rows: [
              { time: "08:30", activity: "Ankomst og oppstart med rolig mottak, gjennomgang av planen og fordeling av oppgaver" },
              { time: "08:45–10:00", activity: "Morgenoppgaver og første arbeidsøkt, ofte knyttet til dyrestell og praktiske gårdsoppgaver" },
              { time: "10:00–10:15", activity: "Kort pause" },
              { time: "10:15–11:30", activity: "Andre økt med praktisk arbeid, naturaktivitet eller kreativitet" },
              { time: "11:30–12:00", activity: "Felles måltid" },
              { time: "12:00–13:15", activity: "Variert økt med fysisk aktivitet, turer, kreativ aktivitet, e-sport eller enkel programmering" },
              { time: "13:15–13:45", activity: "Oppsummering, rydding og refleksjon rundt hva eleven har gjort og mestret" },
              { time: "14:00", activity: "Retur" },
            ],
          },
          {
            type: "lk20",
            title: "Sammenheng med LK20",
            intro: "Aktivitetene støtter blant annet:",
            image: "/locations/ronningen-lk20.avif",
            imageAlt:
              "Elever i praktisk aktivitet på gården – illustrasjon til sammenheng med kompetansemål i læreplanen.",
            bullets: [
              "samarbeid og sosial deltakelse",
              "muntlig kommunikasjon",
              "ansvar og selvstendighet",
              "problemløsning",
              "refleksjon og vurdering",
              "forståelse for natur, miljø og bærekraft",
              "kreativ utfoldelse og skaperglede",
              "digital forståelse gjennom enkel programmering og strukturert e-sport",
            ],
          },
          {
            type: "paragraphs",
            title: "Mestring, kompetanse og kvalitet",
            paragraphs: [
              "Dagen planlegges med faste rutiner, alternative oppgaver ved behov og risikovurdering av miljø, aktivitet og den enkelte elev. Alle skal ha meningsfullt innhold og tilstrekkelig voksenoppfølging.",
              "Fagmiljøet har miljøterapeutisk kompetanse og erfaring med sammensatte behov; barnevernspedagogisk bakgrunn og relasjonsarbeid. Vikarer og nye ansatte får opplæring i sikkerhet, taushetsplikt og praktisk arbeid på gården.",
              "Vi møter elever og samarbeidspartnere kultursensitivt og henter inn tilbakemeldinger i strukturerte samtaler og evaluering for forbedringsarbeid.",
            ],
          },
        ],
        factBoxTitle: "Fakta om avdeling Rønningen",
        factRows: [
          { label: "Tilbud", value: "Inn på tunet – alternativ læringsarena ved ordinær skolegang" },
          { label: "Målgruppe", value: "Elever på 5.–10. trinn" },
          { label: "Gård", value: "Rønningen gård – ca. 50 mål, natur og dyr, store inne- og uteområder" },
          { label: "Bufetat", value: "Godkjent omsorgsinstitusjon (avdeling Lier); Rønningen gård brukes til Inn på tunet" },
          { label: "Dagsrytme (eksempel)", value: "08:30–14:00 etter avtale med kommunen" },
          { label: "Henvendelser", value: "info@commitcare.no · +47 96 66 50 01" },
        ],
        galleryImages: [
          "/locations/avdeling-ronningen.png",
          "/locations/avdeling-ronningen.png",
          "/locations/avdeling-ronningen.png",
          "/locations/avdeling-ronningen.png",
        ],
      },
    ] satisfies PublicLocation[],
  },
};

