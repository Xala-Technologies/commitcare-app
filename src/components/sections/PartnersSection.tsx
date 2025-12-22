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
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-8">
          WORKING WITH 700+ A DIVERSE NETWORK OF PARTNERS WORLDWIDE
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="text-foreground/70 hover:text-foreground transition-colors flex items-center gap-2"
            >
              <span className="text-primary text-lg">{partner.icon}</span>
              <span className="font-medium text-base">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
