import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const partners = [
  { name: "ePhYr", icon: "▶▶" },
  { name: "Bigwave", icon: "≋" },
  { name: "Humant", icon: "◎" },
  { name: "Solara", icon: "◐" },
  { name: "Spaceships", icon: "🚀" },
  { name: "charlotte", icon: "❋" },
  { name: "rbismile", icon: "☺" },
  { name: "Whalien51", icon: "🐋" },
];

export function PartnersSection() {
  return (
    <Section variant="default" className="py-10 md:py-12">
      <Container>
        <p className="text-center text-foreground/90 text-sm md:text-base tracking-widest uppercase mb-8 md:mb-10 font-semibold">
          Samarbeid og nettverk
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="text-foreground hover:text-primary-icon transition-colors flex items-center gap-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
            >
              <span className="text-primary-icon text-lg md:text-xl">{partner.icon}</span>
              <span className="font-semibold text-base md:text-lg">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
