import { Container } from "@/components/ui/container";
import { Phone, FileText, Heart, ArrowRight as ArrowRightIcon } from "lucide-react";
import farmBg from "@/assets/sections/home-scroll-farm.jpg";

const steps = [
  {
    number: "01",
    title: "Første kontakt",
    description: "Vi starter med en uforpliktende samtale for å forstå situasjonen og behovene.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Avklaring og inntak",
    description: "Sammen lager vi en skreddersydd plan som passer til den enkelte situasjonen.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Plan og oppfølging",
    description: "Vi gir kontinuerlig støtte og oppfølging med fokus på trygghet og utvikling.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Overgang og videre støtte",
    description: "Vi sikrer smidige overganger og tilbyr videre støtte når det trengs.",
    icon: ArrowRightIcon,
  },
];

export function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 lg:py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${farmBg})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-section-dark/75 via-section-dark/70 to-section-dark/80"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-primary-foreground/90 text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> SLIK JOBBER VI
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 md:mb-8">
            Vår arbeidsmodell
          </h2>
          <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed">
            En tydelig prosess som sikrer trygghet og god oppfølging
          </p>
        </div>

        <div className="relative mb-2">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-foreground/10 via-primary-foreground/25 to-primary-foreground/10 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.number} className="relative">
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-foreground/15 transform -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-primary-icon border-2 border-card-token" />
                    </div>
                  )}

                  <div className="relative bg-card-token rounded-2xl p-6 md:p-8 border border-border/40 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="absolute -top-4 left-6">
                      <div className="w-10 h-10 rounded-full bg-primary-icon text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                    </div>

                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary-icon" />
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary-icon transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-foreground/80 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
