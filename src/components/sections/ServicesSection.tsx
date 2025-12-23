import { ArrowRight, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Døgnkontinuerlig tilstedeværelse",
    description: "Vi er tilgjengelig døgnet rundt for å sikre trygghet og støtte når det trengs.",
    tags: ["Støtte", "Tilgjengelighet"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={1.5} />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={1.5} />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={1.5} />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.5} />
      </svg>
    ),
    title: "Individuell oppfølging",
    description: "Hver person får tilpasset oppfølging basert på egne behov og situasjon.",
    tags: ["Tilpasset", "Oppfølging"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Skole og struktur",
    description: "Vi støtter skolegang og sikrer struktur i hverdagen for best mulig utvikling.",
    tags: ["Skole", "Struktur"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Aktivitet og mestring",
    description: "Vi tilbyr meningsfulle aktiviteter som fremmer mestring og utvikling.",
    tags: ["Aktivitet", "Mestring"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Samarbeid med nettverk",
    description: "Vi jobber tett sammen med skole, helsevesen og andre relevante aktører.",
    tags: ["Samarbeid", "Nettverk"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Plan for overgang",
    description: "Vi sikrer smidige overganger og planlegger videre støtte når det trengs.",
    tags: ["Overgang", "Planlegging"],
  },
];

export function ServicesSection() {
  return (
    <Section variant="dark" className="bg-section-dark">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> TRYGGHET
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground">
            Trygghet først
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-card-token rounded-xl p-4 md:p-6 hover:shadow-card-hover transition-all duration-300 border border-border/50"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-5">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-foreground/75 text-base md:text-lg mb-4 md:mb-5 leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-5">
                {service.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 text-foreground/80 text-sm font-medium">
                    <User className="w-3.5 h-3.5" /> {tag}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary text-sm md:text-base font-medium hover:gap-3 transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
              >
                <ArrowRight className="w-4 h-4" /> Les mer
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
