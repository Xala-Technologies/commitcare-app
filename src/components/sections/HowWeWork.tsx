import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Phone, FileText, Heart, ArrowRight as ArrowRightIcon } from "lucide-react";

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
    <Section variant="light">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> SLIK JOBBER VI
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 md:mb-8">
            Vår arbeidsmodell
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl leading-relaxed">
            En tydelig prosess som sikrer trygghet og god oppfølging
          </p>
        </div>

        {/* Steps - Timeline Layout */}
        <div className="relative mb-10 md:mb-12">
          {/* Timeline Line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isLast = index === steps.length - 1;
              
              return (
                <div key={step.number} className="relative">
                  {/* Timeline Connector - Desktop only */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2 z-0">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-primary-icon border-2 border-section-light"></div>
                    </div>
                  )}
                  
                  <div className="relative bg-card-token rounded-2xl p-6 md:p-8 border-2 border-border/30 hover:border-primary-icon/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-6">
                      <div className="w-10 h-10 rounded-full bg-primary-icon text-white flex items-center justify-center font-serif font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-primary-icon" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary-icon transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </Container>
    </Section>
  );
}

