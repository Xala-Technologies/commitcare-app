import { Link, useParams } from "react-router-dom";
import { Fragment, useMemo, useState } from "react";
import {
  Building2,
  Clock,
  Info,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trees,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { publicSiteContent } from "@/lib/publicSiteContent";
import type { PublicLocationAdditionalSection } from "@/lib/publicSiteContent";
import { cn } from "@/lib/utils";

const INTRO_ANCHOR = "innhold-intro";
const ACTIVITIES_ANCHOR = "aktiviteter";

function slugifyHeading(text: string): string {
  let s = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ø/g, "o")
    .replace(/å/g, "a")
    .replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return s || "section";
}

function makeUniqueIds(labels: string[]): string[] {
  const counts = new Map<string, number>();
  return labels.map((label) => {
    const base = slugifyHeading(label);
    const n = counts.get(base) ?? 0;
    counts.set(base, n + 1);
    return n === 0 ? base : `${base}-${n}`;
  });
}

/** Titler for tilleggsseksjoner (anker-ID-er). */
function additionalSectionLabels(sections: PublicLocationAdditionalSection[] | undefined): string[] {
  if (!sections) return [];
  const labels: string[] = [];
  for (const s of sections) {
    if (s.type === "paragraphs" && s.title) labels.push(s.title);
    else if (s.type === "schedule") labels.push(s.title);
    else if (s.type === "lk20") labels.push(s.title);
  }
  return labels;
}

function sectionAnchorIds(
  additionalSections?: PublicLocationAdditionalSection[]
): Map<number, string> {
  const labels = additionalSectionLabels(additionalSections);
  const ids = makeUniqueIds(labels);
  const additional = new Map<number, string>();
  if (!additionalSections) return additional;
  let idx = 0;
  for (let si = 0; si < additionalSections.length; si++) {
    const s = additionalSections[si];
    if (s.type === "paragraphs" && s.title) {
      additional.set(si, ids[idx++]);
    } else if (s.type === "schedule") {
      additional.set(si, ids[idx++]);
    } else if (s.type === "lk20") {
      additional.set(si, ids[idx++]);
    }
  }
  return additional;
}

type ParagraphAdditionalIndexed = {
  index: number;
  section: Extract<PublicLocationAdditionalSection, { type: "paragraphs" }>;
};

type AdditionalPart =
  | { kind: "batch"; items: ParagraphAdditionalIndexed[] }
  | { kind: "schedule"; index: number; section: Extract<PublicLocationAdditionalSection, { type: "schedule" }> }
  | { kind: "lk20"; index: number; section: Extract<PublicLocationAdditionalSection, { type: "lk20" }> };

/** Deler tilleggsseksjoner: avsnitt i batcher; dagsplan og LK20 som egne rader i full bredde (12 kolonner). */
function splitAdditionalParts(
  sections: PublicLocationAdditionalSection[] | undefined
): AdditionalPart[] {
  if (!sections?.length) return [];
  const out: AdditionalPart[] = [];
  let batch: ParagraphAdditionalIndexed[] = [];
  for (let si = 0; si < sections.length; si++) {
    const s = sections[si];
    if (s.type === "lk20") {
      if (batch.length) out.push({ kind: "batch", items: batch });
      batch = [];
      out.push({ kind: "lk20", index: si, section: s });
    } else if (s.type === "schedule") {
      if (batch.length) out.push({ kind: "batch", items: batch });
      batch = [];
      out.push({ kind: "schedule", index: si, section: s });
    } else {
      batch.push({ index: si, section: s });
    }
  }
  if (batch.length) out.push({ kind: "batch", items: batch });
  return out;
}

function iconForFactLabel(label: string): LucideIcon {
  const k = label.toLowerCase();
  if (k.includes("tilbud") || k.includes("hjemler")) return Sparkles;
  if (k.includes("målgruppe")) return Users;
  if (k.includes("kapasitet")) return Users;
  if (k.includes("gård")) return Trees;
  if (k.includes("bufetat")) return Building2;
  if (k.includes("dagsrytme") || k.includes("åpning")) return Clock;
  if (k.includes("henvend")) return Phone;
  if (k.includes("adresse") || k.includes("sted") || k.includes("besøk")) return MapPin;
  if (k.includes("status")) return Info;
  if (k.includes("metodikk")) return Sparkles;
  if (k.includes("samarbeid")) return Users;
  if (k.includes("organisasjonsnummer")) return Building2;
  return LayoutList;
}

/** Viser verdi med valgfrie mailto/tel-lenker når teksten inneholder e-post eller telefon. */
function FactValue({ value }: { value: string }) {
  const segments = value.split(/\s*·\s*/).map((s) => s.trim()).filter(Boolean);
  if (segments.length <= 1) {
    const v = value.trim();
    if (v.includes("@") && !v.includes(" ")) {
      return (
        <a href={`mailto:${v}`} className="text-primary font-medium hover:underline break-words">
          {v}
        </a>
      );
    }
    return <p className="leading-relaxed">{value}</p>;
  }
  return (
    <div className="flex flex-col gap-2.5">
      {segments.map((part, i) => {
        if (part.includes("@")) {
          return (
            <a
              key={i}
              href={`mailto:${part}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline break-all"
            >
              <Mail className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              {part}
            </a>
          );
        }
        if (/^\+?\d[\d\s]{6,}$/.test(part.replace(/\s/g, ""))) {
          const tel = part.replace(/\s/g, "");
          return (
            <a
              key={i}
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <Phone className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
              {part}
            </a>
          );
        }
        return (
          <span key={i} className="leading-relaxed">
            {part}
          </span>
        );
      })}
    </div>
  );
}

function LocationH2({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={cn(
        "not-prose font-serif text-2xl md:text-3xl font-semibold text-foreground tracking-tight scroll-mt-28",
        className
      )}
    >
      {children}
    </h2>
  );
}

function galleryFromModules(modules: Record<string, string> | undefined): string[] {
  if (!modules) return [];
  return Object.entries(modules)
    .sort(([a], [b]) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    )
    .map(([, url]) => url);
}

const lierGalleryModules = import.meta.glob(
  "../assets/location-gallery/lier/*.{jpg,jpeg,png,webp,avif,gif,svg}",
  { eager: true, import: "default" }
) as Record<string, string>;

const ronningenGalleryModules = import.meta.glob(
  "../assets/location-gallery/ronningen/*.{jpg,jpeg,png,webp,avif,gif,svg}",
  { eager: true, import: "default" }
) as Record<string, string>;

const LokasjonDetalj = () => {
  const { slug } = useParams<{ slug: string }>();
  const all = publicSiteContent.lokasjoner.items;
  const location = all.find((item) => item.slug === slug);
  const otherLocations = all.filter((item) => item.slug !== slug);

  const heroTitle = location?.heroTitle ?? (location ? `Velkommen til ${location.city}` : "");
  const heroLead =
    location?.heroLead ??
    location?.description ??
    "Informasjon om denne avdelingen oppdateres fortløpende.";
  const heroImage = location?.heroImage ?? "/locations/avdeling-lier.jpg";
  const hasBodySections = !!(location?.bodySections?.length);
  const bodyParagraphs =
    location?.bodyParagraphs?.length
      ? location.bodyParagraphs
      : !hasBodySections
        ? [heroLead]
        : [];
  const activitiesTitle = location?.activitiesTitle ?? "Aktiviteter";
  const activitiesParagraphs =
    location?.activitiesParagraphs?.length ? location.activitiesParagraphs : [];
  const factBoxTitle = location?.factBoxTitle ?? (location ? `Fakta om ${location.city}` : "");
  const factRows =
    location?.factRows?.length ? location.factRows : location
      ? [
          { label: "Avdeling", value: location.name },
          { label: "Sted", value: location.city },
        ]
      : [];
  const autoGalleryImages =
    location?.slug === "lier"
      ? galleryFromModules(lierGalleryModules)
      : location?.slug === "ronningen"
        ? galleryFromModules(ronningenGalleryModules)
        : [];

  const galleryImages =
    location?.slug === "lier" || location?.slug === "ronningen"
      ? autoGalleryImages.length > 0
        ? autoGalleryImages
        : [heroImage, heroImage]
      : location?.galleryImages?.length
        ? location.galleryImages.slice(0, 4)
        : [heroImage, heroImage, heroImage, heroImage];

  const galleryStartIndex = location?.slug === "ronningen" ? 11 : 0;
  const longForm =
    !!location &&
    (!!location.additionalSections?.length ||
      hasBodySections ||
      bodyParagraphs.length > 2 ||
      activitiesParagraphs.length > 1);

  const introSectionTitle =
    hasBodySections ? null : (location?.introSectionTitle ?? (longForm ? "Om tilbudet" : null));

  const bodySectionIds = useMemo(
    () => (location?.bodySections?.length ? makeUniqueIds(location.bodySections.map((s) => s.title)) : []),
    [location?.bodySections]
  );

  const bodyTextClass = "text-foreground/85 text-base md:text-lg leading-relaxed max-w-[42rem]";

  const additionalAnchors = useMemo(
    () => (location ? sectionAnchorIds(location.additionalSections) : new Map<number, string>()),
    [location]
  );

  if (!location) {
    return (
      <Layout>
        <SEO
          title="Lokasjon ikke funnet"
          description="Lokasjonen du leter etter finnes ikke."
          path="/lokasjoner"
        />
        <Section variant="light" className="py-16 md:py-20">
          <Container>
            <div className="max-w-2xl">
              <p className="text-primary font-semibold mb-3">404</p>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-4">
                Lokasjon ikke funnet
              </h1>
              <p className="text-foreground/80 mb-8">Vi fant ikke siden du prøvde å åpne.</p>
              <Button asChild>
                <Link to="/">Til forsiden</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </Layout>
    );
  }

  const additionalParts = useMemo(
    () => splitAdditionalParts(location.additionalSections),
    [location.additionalSections]
  );
  const leadingAdditionalBatch = additionalParts[0]?.kind === "batch" ? additionalParts[0] : null;
  const followingAdditionalParts =
    additionalParts[0]?.kind === "batch" ? additionalParts.slice(1) : additionalParts;

  const renderParagraphBatchItems = (items: ParagraphAdditionalIndexed[]) =>
    items.map(({ index: si, section }) => {
      const anchorId = additionalAnchors.get(si);
      return (
        <section
          key={`p-${si}`}
          id={anchorId}
          aria-labelledby={anchorId && section.title ? `${anchorId}-heading` : undefined}
          className="scroll-mt-28 space-y-4 border-b border-border/30 pb-10 md:pb-12 pt-8 md:pt-10"
        >
          {section.title && anchorId && (
            <LocationH2 id={`${anchorId}-heading`}>{section.title}</LocationH2>
          )}
          {section.paragraphs.map((para, pi) => (
            <p key={pi} className={bodyTextClass}>
              {para}
            </p>
          ))}
        </section>
      );
    });

  return (
    <Layout>
      <SEO
        title={location.name}
        description={location.description ?? `${location.name} – ${location.city}`}
        path={`/lokasjoner/${location.slug}`}
      />

      <article>
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-border/30 bg-gradient-to-br from-cream-light/90 via-background to-cream-light/50">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary)/0.12)_1px,transparent_0)] bg-[length:24px_24px]"
            aria-hidden
          />
          <Container className="relative z-10 py-10 md:py-14 lg:py-16">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-center">
              <div className="order-2 lg:order-1 space-y-5 md:space-y-6 max-w-xl">
                {location.heroBadge && (
                  <Badge variant="secondary" className="w-fit text-xs font-bold uppercase tracking-wide">
                    {location.heroBadge}
                  </Badge>
                )}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-6xl font-semibold text-foreground leading-[1.12] tracking-tight">
                  {heroTitle}
                </h1>
                <p className="text-foreground/85 text-base md:text-lg lg:text-xl leading-relaxed">
                  {heroLead}
                </p>
                {location.heroTagline && (
                  <p className="text-foreground/70 text-lg md:text-xl font-serif italic border-l-4 border-primary/40 pl-4 leading-relaxed">
                    {location.heroTagline}
                  </p>
                )}
                {location.heroFootnote && (
                  <p className="text-foreground/60 text-sm md:text-base leading-relaxed border-t border-border/30 pt-5">
                    {location.heroFootnote}
                  </p>
                )}
              </div>

              <div className="order-1 lg:order-2 relative min-h-[220px] sm:min-h-[280px] lg:min-h-[340px]">
                <div
                  className="absolute -right-4 top-8 h-48 w-40 rounded-2xl bg-primary/20 rotate-6 hidden sm:block"
                  aria-hidden
                />
                <div
                  className="absolute right-10 -bottom-2 h-52 w-40 rounded-2xl bg-primary/12 -rotate-3 hidden sm:block"
                  aria-hidden
                />
                <div className="relative z-10 h-full rounded-2xl overflow-hidden border border-border/50 shadow-xl ring-1 ring-black/5 aspect-[4/3] lg:aspect-auto lg:h-[min(400px,52vh)]">
                  <img
                    src={heroImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" aria-hidden />
                </div>
              </div>
            </div>
          </Container>
        </header>

        <Section variant="default" className="py-10 md:py-14 lg:py-16">
          <Container className="max-w-[min(100%,90rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:gap-x-10 xl:gap-x-12 lg:items-start">
              <div className="order-2 min-w-0 w-full flex flex-col gap-0 lg:order-none lg:col-span-8">
                {hasBodySections &&
                  location.bodySections?.map((seg, i) => {
                    const sid = bodySectionIds[i];
                    if (!sid) return null;
                    return (
                      <section
                        key={`bs-${i}`}
                        id={sid}
                        aria-labelledby={`${sid}-heading`}
                        className="scroll-mt-28 border-b border-border/30 pb-10 md:pb-12 pt-8 md:pt-10 first:pt-0"
                      >
                        <LocationH2 id={`${sid}-heading`}>{seg.title}</LocationH2>
                        <div className="mt-5 space-y-4">
                          {seg.paragraphs.map((para, pi) => (
                            <p key={pi} className={bodyTextClass}>
                              {para}
                            </p>
                          ))}
                        </div>
                      </section>
                    );
                  })}

                {!hasBodySections && longForm && introSectionTitle && (
                  <section
                    id={INTRO_ANCHOR}
                    aria-labelledby={`${INTRO_ANCHOR}-heading`}
                    className="scroll-mt-28 border-b border-border/30 pb-10 md:pb-12"
                  >
                    <LocationH2 id={`${INTRO_ANCHOR}-heading`}>{introSectionTitle}</LocationH2>
                    <div className="mt-6 space-y-5">
                      {bodyParagraphs.map((para, i) => (
                        <p key={i} className={bodyTextClass}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </section>
                )}

                {!hasBodySections && (!longForm || !introSectionTitle) && (
                  <div className="space-y-6 md:space-y-8 border-b border-border/30 pb-10 md:pb-12">
                    {bodyParagraphs.map((para, i) => (
                      <p key={i} className={bodyTextClass}>
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {activitiesParagraphs.length > 0 && (
                  <section
                    id={ACTIVITIES_ANCHOR}
                    aria-labelledby={`${ACTIVITIES_ANCHOR}-heading`}
                    className="scroll-mt-28 space-y-4 border-b border-border/30 pb-10 md:pb-12 pt-8 md:pt-10"
                  >
                    <LocationH2 id={`${ACTIVITIES_ANCHOR}-heading`}>{activitiesTitle}</LocationH2>
                    {activitiesParagraphs.map((para, i) => (
                      <p key={i} className={bodyTextClass}>
                        {para}
                      </p>
                    ))}
                  </section>
                )}

                {leadingAdditionalBatch &&
                  renderParagraphBatchItems(leadingAdditionalBatch.items)}
              </div>

              <aside className="order-1 w-full max-w-[min(100%,26rem)] sm:max-w-[min(100%,30rem)] mx-auto lg:mx-0 lg:max-w-none lg:order-none lg:col-span-4 lg:sticky lg:top-24 space-y-6 h-fit">
                <div className="rounded-2xl border border-border/45 bg-gradient-to-b from-card-token via-card-token to-background/40 shadow-[0_8px_30px_-12px_rgba(15,107,110,0.12)] overflow-hidden ring-1 ring-black/[0.04]">
                  <div
                    className="h-1.5 bg-gradient-to-r from-primary via-primary to-primary/70"
                    aria-hidden
                  />
                  <div className="border-b border-border/35 bg-muted/25 px-5 pt-5 pb-4 sm:px-6 sm:pt-6 sm:pb-5 md:pt-7 md:pb-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary/90 mb-1.5">
                      Kort om lokasjonen
                    </p>
                    <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-foreground leading-snug">
                      {factBoxTitle}
                    </h2>
                  </div>
                  <dl className="px-0">
                    {factRows.map((row) => {
                      const Icon = iconForFactLabel(row.label);
                      return (
                        <div
                          key={row.label}
                          className="border-b border-border/30 px-5 py-4 min-h-[3.25rem] sm:min-h-0 md:px-6 md:py-[1.125rem] last:border-b-0"
                        >
                          <dt className="flex gap-3 sm:gap-3.5 items-start">
                            <span
                              className="mt-0.5 flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-primary/[0.09] text-primary border border-primary/15"
                              aria-hidden
                            >
                              <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={2} />
                            </span>
                            <span className="min-w-0 flex-1 pt-0.5 text-sm sm:text-[13px] font-semibold text-foreground tracking-tight">
                              {row.label}
                            </span>
                          </dt>
                          <dd className="mt-2 text-[15px] sm:text-sm text-foreground/80 md:text-[15px] leading-relaxed pl-[calc(2.5rem+0.75rem)] sm:pl-[calc(2.75rem+0.875rem)]">
                            <FactValue value={row.value} />
                          </dd>
                        </div>
                      );
                    })}
                  </dl>
                  {location.mapUrl && (
                    <div className="px-5 pb-5 pt-2 sm:px-6 sm:pb-6 md:pb-7">
                      <Button asChild className="w-full rounded-full h-11 shadow-sm" variant="outline">
                        <a href={location.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4 shrink-0" aria-hidden />
                          Åpne i kart
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </aside>

              {followingAdditionalParts.map((part) => {
                if (part.kind === "schedule") {
                  const anchorId = additionalAnchors.get(part.index);
                  const section = part.section;
                  return (
                    <section
                      key={`s-${part.index}`}
                      id={anchorId}
                      aria-labelledby={anchorId ? `${anchorId}-heading` : undefined}
                      className="order-3 scroll-mt-28 w-full border-b border-border/30 pb-10 md:pb-12 pt-8 md:pt-10 lg:order-none lg:col-span-12"
                    >
                      <div className="w-full rounded-2xl border border-border/40 bg-gradient-to-br from-muted/25 via-card-token/40 to-background/60 p-5 sm:p-6 md:p-8 shadow-[0_8px_32px_-16px_rgba(15,107,110,0.15)] ring-1 ring-black/[0.04]">
                        <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                          <span
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary border border-primary/20 shadow-sm"
                            aria-hidden
                          >
                            <Clock className="h-6 w-6" strokeWidth={2} />
                          </span>
                          <div className="min-w-0 flex-1 space-y-1">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary/90">
                              Dagsplan
                            </p>
                            <LocationH2
                              id={anchorId ? `${anchorId}-heading` : undefined}
                              className="text-2xl md:text-3xl !leading-tight"
                            >
                              {section.title}
                            </LocationH2>
                          </div>
                        </header>

                        {section.intro && (
                          <p
                            className={cn(
                              bodyTextClass,
                              "mt-5 max-w-none rounded-xl border border-border/35 bg-background/70 px-4 py-3.5 text-[15px] md:text-base shadow-sm"
                            )}
                          >
                            {section.intro}
                          </p>
                        )}

                        <div className="mt-6 overflow-hidden rounded-xl border border-border/40 bg-background/80 shadow-inner">
                          <div className="overflow-x-auto">
                            <table className="w-full min-w-[min(100%,520px)] border-collapse text-left text-sm md:text-[15px]">
                              <caption className="sr-only">
                                {section.title}: oversikt over tidspunkt og aktivitet
                              </caption>
                              <thead>
                                <tr className="border-b border-border/45 bg-primary/[0.06]">
                                  <th
                                    scope="col"
                                    className="w-[30%] min-w-[7rem] px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-primary/90 md:px-5"
                                  >
                                    Tid
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-primary/90 md:px-5"
                                  >
                                    Aktivitet
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/35">
                                {section.rows.map((row, ri) => (
                                  <tr
                                    key={ri}
                                    className="align-top transition-colors hover:bg-primary/[0.03] odd:bg-muted/20"
                                  >
                                    <td className="whitespace-nowrap px-4 py-3.5 font-mono text-[13px] font-semibold tabular-nums text-foreground md:px-5 md:text-sm">
                                      {row.time}
                                    </td>
                                    <td className="px-4 py-3.5 leading-relaxed text-foreground/88 md:px-5">
                                      {row.activity}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                }
                if (part.kind === "lk20") {
                  const anchorId = additionalAnchors.get(part.index);
                  const section = part.section;
                  return (
                    <section
                      key={`lk20-${part.index}`}
                      id={anchorId}
                      aria-labelledby={anchorId ? `${anchorId}-heading` : undefined}
                      className="order-3 scroll-mt-28 w-full border-b border-border/30 pb-10 md:pb-12 pt-8 md:pt-10 lg:order-none lg:col-span-12"
                    >
                      <div
                        className={cn(
                          "w-full rounded-2xl border border-border/40 bg-gradient-to-br from-card-token/80 via-muted/20 to-background/60 p-5 shadow-[0_12px_40px_-20px_rgba(15,107,110,0.18)] ring-1 ring-black/[0.05] sm:p-7 md:p-8 lg:p-10",
                          !section.image && "mx-auto max-w-[52rem]"
                        )}
                      >
                        <div className="grid min-w-0 gap-8 lg:grid-cols-12 lg:gap-x-10 xl:gap-x-14 lg:items-stretch lg:gap-y-0">
                          {section.image && (
                            <figure className="min-w-0 w-full lg:col-span-6">
                              <div className="relative aspect-[4/3] min-h-[200px] w-full overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-md ring-1 ring-black/[0.06] lg:aspect-[5/4] lg:min-h-[340px] lg:sticky lg:top-28">
                                <img
                                  src={section.image}
                                  alt={
                                    section.imageAlt ??
                                    "Illustrasjon til sammenheng med læreplanen"
                                  }
                                  className="absolute inset-0 h-full w-full object-cover object-center"
                                  loading="lazy"
                                  decoding="async"
                                />
                                <div
                                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-primary/5"
                                  aria-hidden
                                />
                              </div>
                            </figure>
                          )}

                          <div
                            className={cn(
                              "min-w-0 space-y-5",
                              section.image ? "lg:col-span-6" : "lg:col-span-12"
                            )}
                          >
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-primary/90">
                              Læreplan
                            </p>
                            <LocationH2
                              id={anchorId ? `${anchorId}-heading` : undefined}
                              className="text-[1.65rem] md:text-3xl lg:text-[2rem] !leading-[1.2]"
                            >
                              {section.title}
                            </LocationH2>
                            {section.intro && (
                              <p className="text-foreground/85 text-base md:text-lg lg:text-xl leading-relaxed">
                                {section.intro}
                              </p>
                            )}
                            <ul className="list-none space-y-3 xl:grid xl:grid-cols-2 xl:gap-x-12 xl:gap-y-3 xl:space-y-0">
                              {section.bullets.map((b, bi) => (
                                <li
                                  key={bi}
                                  className="flex gap-3 text-foreground/85 text-[15px] md:text-base lg:text-[1.05rem] leading-relaxed before:content-[''] before:mt-2.5 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-primary/75"
                                >
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>
                  );
                }
                return (
                  <Fragment key={`batch-${part.items[0]?.index ?? "x"}`}>
                    <div className="order-3 min-w-0 w-full flex flex-col gap-0 lg:order-none lg:col-span-8">
                      {renderParagraphBatchItems(part.items)}
                    </div>
                    <div className="order-3 hidden lg:block lg:order-none lg:col-span-4" aria-hidden />
                  </Fragment>
                );
              })}

              {otherLocations.length > 0 && (
                <>
                  <div className="order-3 min-w-0 w-full flex flex-col gap-0 lg:order-none lg:col-span-8">
                    <div className="mt-8 pt-8 border-t border-border/30 max-w-[42rem]">
                      <p className="text-foreground font-semibold text-base md:text-lg leading-relaxed">
                        Våre avdelinger:{" "}
                        {otherLocations.map((loc, i) => (
                          <span key={loc.slug}>
                            {i > 0 && ", "}
                            <Link
                              to={`/lokasjoner/${loc.slug}`}
                              className="text-primary hover:underline font-semibold"
                            >
                              {loc.city}
                            </Link>
                          </span>
                        ))}
                        .
                      </p>
                    </div>
                  </div>
                  <div className="order-3 hidden lg:block lg:order-none lg:col-span-4" aria-hidden />
                </>
              )}
            </div>
          </Container>
        </Section>

        {/* Bildegalleri */}
        <Section variant="light" className="py-10 md:py-14 lg:py-16">
          <Container>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6 md:mb-8 text-center lg:text-left">
              Bilder fra avdeling {location.city}
            </h2>
            {galleryImages.length > 0 && (
              <LokasjonImageCarousel galleryImages={galleryImages} startIndex={galleryStartIndex} />
            )}
          </Container>
        </Section>
      </article>
    </Layout>
  );
};

export default LokasjonDetalj;

function LokasjonImageCarousel({
  galleryImages,
  startIndex = 0,
}: {
  galleryImages: string[];
  startIndex?: number;
}) {
  const safeStartIndex =
    galleryImages.length > 0 ? Math.max(0, Math.min(startIndex, galleryImages.length - 1)) : 0;
  const [index, setIndex] = useState(safeStartIndex);
  const total = galleryImages.length;
  const [isFading, setIsFading] = useState(false);

  // Show two images at a time; stepping by "pairs" keeps navigation feeling natural.
  const step = 2;
  const canNavigatePairs = total > step;
  const animateTo = (updater: (i: number) => number) => {
    if (!canNavigatePairs) return;
    setIsFading(true);
    setIndex((i) => updater(i));
    window.setTimeout(() => setIsFading(false), 160);
  };

  const prev = () => animateTo((i) => (i - step + total) % total);
  const next = () => animateTo((i) => (i + step) % total);

  const srcA = galleryImages[index];
  const srcB = galleryImages[(index + 1) % total];

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-muted/30 via-background/20 to-background/60 shadow-[0_12px_40px_-20px_rgba(15,107,110,0.16)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_15%_0%,rgba(13,148,136,0.18)_0%,transparent_45%),radial-gradient(circle_at_90%_30%,rgba(13,148,136,0.10)_0%,transparent_55%)]"
          aria-hidden
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border/25">
            <div
              className={cn(
                "group relative overflow-hidden aspect-[4/3] transition-opacity duration-200",
                isFading ? "opacity-0" : "opacity-100"
              )}
            >
              <img
                src={srcA}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                aria-hidden
              />
            </div>

            <div
              className={cn(
                "group relative overflow-hidden aspect-[4/3] transition-opacity duration-200",
                isFading ? "opacity-0" : "opacity-100"
              )}
            >
              <img
                src={srcB}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      {canNavigatePairs && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Forrige bilder"
            className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/75 backdrop-blur ring-1 ring-border/30 hover:bg-background transition-colors grid place-items-center shadow-sm"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" strokeWidth={2} aria-hidden />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Neste bilder"
            className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/75 backdrop-blur ring-1 ring-border/30 hover:bg-background transition-colors grid place-items-center shadow-sm"
          >
            <ChevronRight className="h-5 w-5 text-foreground" strokeWidth={2} aria-hidden />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:block">
            <div className="rounded-full border border-border/40 bg-background/70 backdrop-blur px-4 py-1 text-sm text-foreground/70">
              <span className="font-semibold text-foreground/85">
                {index + 1}
              </span>{" "}
              / {total}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
