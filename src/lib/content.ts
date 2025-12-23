import matter from 'gray-matter';

export interface PageFrontmatter {
  title: string;
  description: string;
  slug: string;
}

export interface PageContent {
  frontmatter: PageFrontmatter;
  content: string;
}

export interface ServiceFrontmatter {
  title: string;
  description: string;
  summary: string; // 1-2 linjer beskrivelse for kort
  slug: string;
  iconKey?: string; // Valgfri icon key for å velge ikon
}

export interface ServiceContent {
  frontmatter: ServiceFrontmatter;
  content: string;
}

export interface PostFrontmatter {
  title: string;
  description: string;
  slug: string;
  date: string;
  category?: string;
}

export interface PostContent {
  frontmatter: PostFrontmatter;
  content: string;
}

// In a real app, these would load from actual MDX files
// For now, we'll use placeholder content that can be replaced with actual MDX files

export async function getPage(slug: string): Promise<PageContent | null> {
  try {
    // Placeholder - in production, this would load from /content/pages/${slug}.mdx
    const pages: Record<string, PageContent> = {
      'tjenester': {
        frontmatter: {
          title: 'Våre tjenester',
          description: 'Utforsk vårt omfattende utvalg av omsorgstjenester designet for å støtte deg og dine kjære.',
          slug: 'tjenester'
        },
        content: `Vi tilbyr et bredt spekter av tjenester for å støtte barn, unge og familier. Våre tjenester er tilpasset hver enkelt situasjon og bygger på trygghet, struktur og tett oppfølging.

Under kan du lese mer om hver tjeneste vi tilbyr. Klikk på en tjeneste for å lese mer detaljer.`
      },
      'om-oss': {
        frontmatter: {
          title: 'Om oss',
          description: 'Lær mer om vår historie, verdier og dedikerte team.',
          slug: 'om-oss'
        },
        content: `# Hvem vi er

Commit Care er en organisasjon som jobber med omsorg og støtte for barn, unge og familier. Vi er dedikert til å gi trygg, struktureret og profesjonell omsorg med fokus på hver enkelt persons behov.

Vårt team består av erfarne fagfolk med bakgrunn innen barnevern, omsorg og støtte. Vi jobber tett sammen med familier, skole, helsevesen og andre aktører for å sikre best mulig oppfølging.

## Verdier og menneskesyn

Våre verdier står i sentrum av alt vi gjør:

- **Trygghet**: Vi sikrer en trygg og forutsigbar hverdag
- **Respekt**: Vi møter hver person med respekt og verdighet
- **Struktur**: Vi gir tydelige rutiner og grenser som gir trygghet
- **Samarbeid**: Vi jobber tett sammen med alle involverte aktører
- **Kontinuitet**: Vi gir kontinuerlig oppfølging og støtte

Vi tror på at hvert barn og unge har rett til å vokse opp i en trygg og støttende omgivelse.

## Kompetanse og faglig tilnærming

Vårt team har bred kompetanse innen omsorg, barnevern og støtte. Vi følger oppdatert faglig kunnskap og bruker dokumenterte metoder i vårt arbeid.

Vår tilnærming bygger på:

- Evidensbasert praksis
- Tett oppfølging og dokumentasjon
- Kontinuerlig kompetanseheving
- Refleksjon og kvalitetsforbedring

Vi sikrer at våre medarbeidere har nødvendig kompetanse og oppdatert kunnskap for å gi best mulig omsorg.

## Samarbeid

Vi jobber tett sammen med flere aktører for å sikre en helhetlig tilnærming:

- **Barnevernstjeneste**: Vi samarbeider med barnevernstjenesten for å sikre koordinert oppfølging
- **Skole**: Vi jobber sammen med skole og lærere for å støtte skolehverdag og læring
- **Helsevesen**: Vi samarbeider med helsepersonell for å sikre helhetlig helseoppfølging
- **Andre aktører**: Vi jobber med relevante aktører etter behov

Gjennom tett samarbeid sikrer vi at hvert barn og unge får den støtten de trenger.`
      },
      'trygghet-og-kvalitet': {
        frontmatter: {
          title: 'Trygghet og kvalitet',
          description: 'Vår forpliktelse til høy kvalitet og trygg omsorg.',
          slug: 'trygghet-og-kvalitet'
        },
        content: `# Trygghet og kvalitet

Kvalitet og trygghet står i sentrum av alt vi gjør. Vi jobber kontinuerlig for å sikre at våre tjenester gir trygghet, struktur og god oppfølging.

## Struktur og forutsigbarhet

Vi legger vekt på tydelige rutiner og struktur i hverdagen. Dette gir trygghet og forutsigbarhet for de vi jobber med.

Våre rutiner er:
- Tydelige og forutsigbare
- Tilpasset hver enkelt situasjon
- Kontinuerlig oppfølgt og justert etter behov

Gjennom struktur og rutiner sikrer vi en trygg hverdag.

## Tett oppfølging

Vi gir kontinuerlig oppfølging og støtte. Våre fagfolk er tilgjengelige og følger opp regelmessig.

Vår oppfølging innebærer:
- Regelmessige møter og samtaler
- Kontinuerlig vurdering av behov
- Rask tilpasning når situasjonen endrer seg
- Dokumentert oppfølging

Gjennom tett oppfølging sikrer vi at hver person får den støtten de trenger.

## Samarbeid og kommunikasjon

Vi jobber tett sammen med alle involverte aktører for å sikre en helhetlig tilnærming.

Vårt samarbeid omfatter:
- Tydelig kommunikasjon med familier
- Tett samarbeid med skole og helsevesen
- Koordinering med barnevernstjeneste og andre aktører
- Regelmessige oppdateringer og informasjon

Gjennom godt samarbeid sikrer vi at alle er informert og involvert.

## Kompetanse og veiledning

Våre medarbeidere har nødvendig kompetanse og får kontinuerlig veiledning og opplæring.

Vår tilnærming til kompetanse:
- Erfarne fagfolk med relevant bakgrunn
- Kontinuerlig kompetanseheving og opplæring
- Veiledning og støtte fra erfarne kolleger
- Faglig oppfølging og refleksjon

Gjennom kompetanse og veiledning sikrer vi høy faglig kvalitet.`
      },
      'kontakt': {
        frontmatter: {
          title: 'Kontakt oss',
          description: 'Ta kontakt med oss for å diskutere dine omsorgsbehov.',
          slug: 'kontakt'
        },
        content: '# Kontakt oss\n\nVi er her for å hjelpe deg...'
      },
      'jobb': {
        frontmatter: {
          title: 'Jobb med oss',
          description: 'Bli en del av vårt team av omsorgsprofesjonelle.',
          slug: 'jobb'
        },
        content: `# Jobb med oss

Vi søker dedikerte og omsorgsfulle medarbeidere som vil være med på å gi trygg omsorg og støtte til barn, unge og familier.

## Hvorfor jobbe hos oss

Ved Commit Care får du muligheten til å gjøre en reell forskjell i livene til barn, unge og familier. Vi tilbyr:

- **Meningsfullt arbeid**: Du får være med på å skape trygghet og stabilitet
- **Faglig utvikling**: Kontinuerlig opplæring og veiledning
- **Gode kolleger**: Et støttende team av erfarne fagfolk
- **Variert arbeid**: Utfordrende og varierte oppgaver
- **Konkurransedyktige vilkår**: Gode arbeidsvilkår og lønn

Vi verdsetter våre medarbeidere og investerer i deres faglige utvikling.

## Hva vi ser etter

Vi søker medarbeidere som:

- Har relevant faglig bakgrunn og erfaring
- Er engasjerte og omsorgsfulle
- Trives med strukturert og forutsigbart arbeid
- Kan jobbe selvstendig og i team
- Har gode kommunikasjonsevner
- Er pålitelige og ansvarlige

Vi setter pris på variasjon og ulike bakgrunner i teamet vårt.`
      },
      'innsikt': {
        frontmatter: {
          title: 'Innsikt og ressurser',
          description: 'Artikler og ressurser om omsorg og helse.',
          slug: 'innsikt'
        },
        content: '# Innsikt og ressurser\n\nUtforsk våre artikler og ressurser...'
      }
    };

    return pages[slug] || null;
  } catch (error) {
    console.error(`Error loading page ${slug}:`, error);
    return null;
  }
}

export async function listServices(): Promise<ServiceContent[]> {
  // Placeholder - in production, this would load from /content/services/*.mdx
  return [
    {
      frontmatter: {
        title: 'Omsorg og miljøterapi',
        description: 'Trygg omsorg og miljøterapeutisk tilnærming',
        summary: 'Vi tilbyr trygg omsorg med miljøterapeutisk tilnærming som gir stabilitet og trygghet i hverdagen.',
        slug: 'omsorg-og-miljoterapi',
        iconKey: 'heart'
      },
      content: `## Hva innebærer dette?

Vi gir trygg omsorg med miljøterapeutisk tilnærming. Dette inkluderer:

- Trygg omsorg i strukturerte omgivelser
- Miljøterapeutisk tilnærming som gir stabilitet
- Tett oppfølging av erfarne fagfolk
- Tilpasset omsorg basert på individuelle behov

Vi sikrer at hvert barn og unge får den trygge omsorgen de trenger.`
    },
    {
      frontmatter: {
        title: 'Struktur i hverdagen',
        description: 'Tydelige rutiner og struktur',
        summary: 'Vi etablerer tydelige rutiner og struktur i hverdagen som gir forutsigbarhet og trygghet.',
        slug: 'struktur-i-hverdagen',
        iconKey: 'shield'
      },
      content: `## Hva innebærer dette?

Vi etablerer tydelige rutiner og struktur i hverdagen. Dette innebærer:

- Tydelige rutiner for hverdagen
- Forutsigbar struktur som gir trygghet
- Kontinuerlig oppfølging og justering
- Tilpasset struktur etter behov

Gjennom struktur sikrer vi en trygg og forutsigbar hverdag.`
    },
    {
      frontmatter: {
        title: 'Skole og aktivitet',
        description: 'Støtte i skolehverdag og aktiviteter',
        summary: 'Vi gir støtte i skolehverdag og arrangerer meningsfulle aktiviteter som fremmer utvikling og mestring.',
        slug: 'skole-og-aktivitet',
        iconKey: 'users'
      },
      content: `## Hva innebærer dette?

Vi gir støtte i skolehverdag og arrangerer aktiviteter. Dette inkluderer:

- Støtte i skolehverdag og læring
- Organisering av meningsfulle aktiviteter
- Samarbeid med skole og lærere
- Aktivitetstilbud som fremmer mestring

Vi sikrer at hvert barn og unge får støtte i skole og aktivitet.`
    },
    {
      frontmatter: {
        title: 'Helse og livsmestring',
        description: 'Støtte i helse og livsmestring',
        summary: 'Vi gir støtte i helse og livsmestring for å fremme velvære og utvikling.',
        slug: 'helse-og-livsmestring',
        iconKey: 'book'
      },
      content: `## Hva innebærer dette?

Vi gir støtte i helse og livsmestring. Tjenesten omfatter:

- Støtte i helse og velvære
- Veiledning i livsmestring og ferdigheter
- Samarbeid med helsevesen
- Tilpasset støtte etter behov

Vi sikrer at hvert barn og unge får støtte i helse og livsmestring.`
    },
    {
      frontmatter: {
        title: 'Samarbeid og nettverk',
        description: 'Tett samarbeid med relevante aktører',
        summary: 'Vi jobber tett sammen med skole, helsevesen, barnevernstjeneste og andre relevante aktører for å sikre en helhetlig tilnærming.',
        slug: 'samarbeid-og-nettverk',
        iconKey: 'phone'
      },
      content: `## Hva innebærer dette?

Vi jobber tett sammen med relevante aktører. Dette inkluderer:

- Tett samarbeid med skole og lærere
- Koordinering med helsevesen og barnevernstjeneste
- Samarbeid med andre relevante aktører
- Regelmessige oppdateringer og informasjon

Gjennom godt samarbeid sikrer vi en helhetlig tilnærming.`
    },
    {
      frontmatter: {
        title: 'Overgang og videre støtte',
        description: 'Smidige overganger og videre støtte',
        summary: 'Vi sikrer smidige overganger og tilbyr videre støtte når det trengs for å sikre kontinuitet og trygghet.',
        slug: 'overgang-og-videre-stotte',
        iconKey: 'home'
      },
      content: `## Hva innebærer dette?

Vi sikrer smidige overganger og videre støtte. Dette innebærer:

- Planlegging av overganger i god tid
- Koordinering med relevante aktører
- Videre støtte når det trengs
- Kontinuitet i oppfølging

Vi sikrer at overganger skjer på en trygg og forutsigbar måte.`
    }
  ];
}

export async function listPosts(): Promise<PostContent[]> {
  // Placeholder - in production, this would load from /content/posts/*.mdx
  return [
    {
      frontmatter: {
        title: 'Velkommen til vår nye nettside',
        description: 'Vi er glade for å lansere vår nye nettside',
        slug: 'velkommen-til-var-nye-nettside',
        date: '2024-01-15',
        category: 'Nyheter'
      },
      content: 'Vi er glade for å kunne presentere...'
    }
  ];
}

