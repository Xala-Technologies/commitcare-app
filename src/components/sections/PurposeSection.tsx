import { CheckCircle } from "lucide-react";
import purposeBg from "@/assets/purpose-section.jpg";

const values = [
  {
    title: "Compassion",
    description: "We believe in treating every client with kindness and empathy, ensuring they feel valued and respected in every interaction.",
  },
  {
    title: "Integrity",
    description: "We uphold the highest standards of honesty and transparency in our services. Trust is essential in caregiving.",
  },
  {
    title: "Excellence",
    description: "We are committed to delivering the highest quality of care. Our team continuously seeks improvement and innovation.",
  },
  {
    title: "Empathy",
    description: "We listen, understand, and connect with each client's needs, delivering care with a compassionate, human touch.",
  },
];

export function PurposeSection() {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${purposeBg})` }}
      >
        <div className="absolute inset-0 bg-section-dark/60" />
      </div>

      <div className="container mx-auto relative z-10 py-16">
        <div className="max-w-md">
          {/* Header */}
          <p className="text-primary-foreground/80 text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
            <span>+</span> OUR VALUE
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground mb-8 leading-tight">
            Caring with Purpose
          </h2>

          {/* Values List */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="border-t border-primary-foreground/20 pt-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-primary-foreground font-medium text-base mb-1">
                      {value.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
