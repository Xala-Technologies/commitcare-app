import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const partners = [
  { name: "Billisim" },
  { name: "Xala technologies AS" },
  { name: "Bærum kommune" },
  { name: "Innvandrerrådet i Bærum" },
  { name: "Røde kors" },
  { name: "Bufetat" },
  { name: "Lier IL" },
  { name: "Kingsmenn FC" },
  { name: "Terapivakten" },
];

export function PartnersSection() {
  return (
    <Section variant="default" className="py-8 md:py-10">
      <Container>
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground">
            Våre samarbeidspartnere
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="inline-flex items-center px-4 md:px-5 py-2 md:py-2.5 bg-card-token rounded-lg border border-border/50 hover:border-primary-icon/50 hover:bg-primary/5 transition-all duration-200 text-center group"
            >
              <span className="font-medium text-xs md:text-sm text-foreground group-hover:text-primary-icon transition-colors whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
