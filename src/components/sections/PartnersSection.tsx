const partners = [
  { name: "ePhYr", icon: "▶▶" },
  { name: "Bigwave", icon: "◇" },
  { name: "Humant", icon: "◎" },
  { name: "Solara", icon: "◐" },
  { name: "Spaceships", icon: "🚀" },
  { name: "charlotte", icon: "❋" },
  { name: "rbismile", icon: "◎" },
  { name: "Whalien51", icon: "🐋" },
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto">
        <p className="text-center text-muted-foreground text-xs tracking-widest uppercase mb-8">
          WORKING WITH 700+ A DIVERSE NETWORK OF PARTNERS WORLDWIDE
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
            >
              <span className="text-primary">{partner.icon}</span>
              <span className="font-medium text-sm tracking-wide">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
