import { Heart, Shield, Award, Users } from "lucide-react";
import purposeBg from "@/assets/purpose-section.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "Treating every individual with kindness, empathy, and genuine care.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Upholding the highest ethical standards in all our interactions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuously striving to exceed expectations in service delivery.",
  },
  {
    icon: Users,
    title: "Support",
    description: "Building lasting relationships with families we serve.",
  },
];

export function PurposeSection() {
  return (
    <section className="relative py-24 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${purposeBg})` }}
      >
        <div className="absolute inset-0 bg-section-dark/85" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Values List */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex gap-4 p-4 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-primary-foreground font-semibold text-lg mb-1">
                    {value.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Title */}
          <div className="lg:text-right">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground leading-tight">
              Caring with Purpose
            </h2>
            <p className="text-primary-foreground/70 text-lg mt-4 max-w-md lg:ml-auto">
              Our core values guide everything we do, ensuring consistent, 
              high-quality care for every family we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
