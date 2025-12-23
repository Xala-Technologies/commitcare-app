# Innholdssystem

Dette er innholdsmappen for nettsiden. Her kan du enkelt redigere innholdet på sidene ved å redigere MDX-filene.

## Struktur

```
content/
├── pages/          # Sideinnhold (tjenester, om-oss, etc.)
├── services/       # Tjenesteinnhold
└── posts/          # Blogginnlegg/artikler
```

## Redigere innhold

### Sider

Rediger filene i `/content/pages/` for å endre innholdet på sidene:

- `tjenester.mdx` - Tjenestesiden
- `om-oss.mdx` - Om oss-siden
- `trygghet-og-kvalitet.mdx` - Trygghet og kvalitet-siden
- `kontakt.mdx` - Kontaktsiden
- `jobb.mdx` - Jobbsiden
- `innsikt.mdx` - Innsikt-siden

### Format

Hver MDX-fil har frontmatter (metadata) øverst:

```mdx
---
title: Side tittel
description: Side beskrivelse
slug: side-slug
---

# Innhold

Her kommer innholdet i Markdown-format.
```

### Eksempel

```mdx
---
title: Våre tjenester
description: Utforsk vårt omfattende utvalg av omsorgstjenester
slug: tjenester
---

# Våre tjenester

Vi tilbyr et bredt spekter av tjenester...
```

## Teknisk

Innholdet lastes via `/src/lib/content.ts`. For å legge til ekte MDX-støtte, må du:

1. Installere Vite MDX plugin
2. Oppdatere `vite.config.ts` til å håndtere MDX-filer
3. Oppdatere `content.ts` til å importere MDX-filer direkte

For nå bruker systemet placeholder-innhold som kan enkelt erstattes med ekte MDX-innlasting.

