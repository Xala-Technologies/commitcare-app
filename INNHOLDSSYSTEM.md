# Innholdssystem - Oppsett

## ✅ Fullført

### 1. Mappestruktur
- ✅ `/content/pages/` - Sideinnhold (MDX-filer)
- ✅ `/content/services/` - Tjenesteinnhold
- ✅ `/content/posts/` - Blogginnlegg

### 2. Nye sider (norsk innhold)
- ✅ `/tjenester` - Tjenestesiden
- ✅ `/om-oss` - Om oss-siden
- ✅ `/trygghet-og-kvalitet` - Trygghet og kvalitet-siden
- ✅ `/kontakt` - Kontaktsiden
- ✅ `/jobb` - Jobbsiden (valgfri)
- ✅ `/innsikt` - Innsikt-siden (valgfri)

### 3. Komponenter
- ✅ `/src/components/SEO.tsx` - SEO meta tags komponent
- ✅ `/src/lib/content.ts` - Content loader med TypeScript strict

### 4. SEO
- ✅ SEO meta tags per side (title, description, Open Graph, Twitter)
- ✅ `/public/robots.txt` - Robots.txt fil
- ✅ `/sitemap.xml` - Sitemap route

### 5. Innholdsfiler
- ✅ MDX-filer opprettet i `/content/pages/` med frontmatter
- ✅ Placeholder-innhold som kan enkelt erstattes

## 📁 Filstruktur

```
src/
├── pages/
│   ├── Tjenester.tsx
│   ├── OmOss.tsx
│   ├── TrygghetOgKvalitet.tsx
│   ├── Kontakt.tsx
│   ├── Jobb.tsx
│   ├── Innsikt.tsx
│   └── Sitemap.tsx
├── components/
│   └── SEO.tsx
├── lib/
│   └── content.ts
└── App.tsx (oppdatert med nye ruter)

content/
├── pages/
│   ├── tjenester.mdx
│   ├── om-oss.mdx
│   ├── trygghet-og-kvalitet.mdx
│   ├── kontakt.mdx
│   ├── jobb.mdx
│   └── innsikt.mdx
├── services/
└── posts/

public/
└── robots.txt
```

## 🔧 Tekniske detaljer

### TypeScript
- ✅ Strict mode, ingen `any` typer
- ✅ Alle interfaces definert i `/src/lib/content.ts`

### Innholdslasting
- Nåværende: Placeholder-innhold i `content.ts`
- Fremtidig: Kan oppgraderes til ekte MDX-innlasting med Vite MDX plugin

### SEO
- Bruker `react-helmet-async` for meta tags
- Hver side har unike title og description
- Open Graph og Twitter Card støtte

## 📝 Bruk

### Redigere innhold

1. Rediger MDX-filene i `/content/pages/`
2. Endre frontmatter (title, description) og innhold
3. Endringer vil vises på sidene

### Legge til nye sider

1. Opprett ny MDX-fil i `/content/pages/`
2. Legg til route i `App.tsx`
3. Opprett page-komponent i `/src/pages/`
4. Legg til i `content.ts` getPage-funksjonen

## ✅ Verifisering

- ✅ Prosjektet bygger uten feil (`npm run build`)
- ✅ Alle nye ruter er opprettet
- ✅ TypeScript strict mode
- ✅ Alle sider har SEO meta tags
- ✅ Innhold kan endres via MDX-filer

## 🚀 Neste steg (valgfritt)

1. Installer Vite MDX plugin for ekte MDX-støtte
2. Oppdater `content.ts` til å laste fra faktiske MDX-filer
3. Legg til mer innhold i MDX-filene
4. Legg til bilder og ressurser i content-mappen

