import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import purposeBg from "@/assets/sections/purpose-section.jpg";

const values = [
  {
    title: "Trygghet og rammer",
    description: "Vi skaper trygge og forutsigbare rammer som gir stabilitet og trygghet i hverdagen.",
  },
  {
    title: "Faglig oppfølging",
    description: "Våre erfarne fagfolk gir kontinuerlig oppfølging med fokus på utvikling og velvære.",
  },
  {
    title: "Forutsigbar hverdag",
    description: "Tydelige rutiner og struktur gir forutsigbarhet og trygghet for barn og unge.",
  },
];

export function PurposeSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${purposeBg})` }}
      >
        <div className="absolute inset-0 bg-section-dark/50" />
      </div>

      <Container className="relative z-10 py-10 md:py-14 lg:py-16">
        <div className="max-w-md bg-section-dark/80 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8">
          {/* Header */}
          <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
            <span>+</span> OMSORG
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-8 md:mb-10 leading-tight">
            Omsorg med mening
          </h2>

          {/* Values List */}
          <div className="space-y-4 md:space-y-5">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="border-t border-primary-foreground/20 pt-4 md:pt-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0 min-w-[20px]" />
                  <div>
                    <h3 className="text-primary-foreground font-serif font-semibold text-base md:text-lg mb-2 md:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-primary-foreground/75 text-base md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
