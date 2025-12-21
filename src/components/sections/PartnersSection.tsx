const partners = [
  "HealthFirst",
  "CarePartners",
  "MedAssist",
  "WellnessHub",
  "SeniorLife",
  "HomeHealth",
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-section-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner}
              className="text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
            >
              <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
