import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
    <Section variant="default">
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="bg-card-token rounded-xl p-6 md:p-8 border border-border/50 hover:shadow-lg transition-all duration-300 relative"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4">
                  <span className="text-primary-icon/20 font-serif text-3xl md:text-4xl font-bold">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6">
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5 pr-16">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            variant="default"
            size="lg"
            className="rounded-lg px-8 min-h-[44px] bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-md hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-icon/50"
          >
            <Link to="/trygghet-og-kvalitet">Les mer</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

