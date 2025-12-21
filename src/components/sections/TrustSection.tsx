import { Button } from "@/components/ui/button";
import familyCare from "@/assets/family-care.jpg";
import caregiver1 from "@/assets/caregiver-1.jpg";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5k+", label: "Families Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export function TrustSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={familyCare} 
                alt="Happy senior couple enjoying time together" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src={caregiver1} 
                alt="Professional caregiver with patient" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Building Trust, One Family at a Time
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              For over a decade, we've been the trusted choice for families seeking 
              quality home care. Our commitment to excellence has helped thousands 
              of individuals live independently while receiving the support they deserve.
            </p>
            <Button variant="default" size="lg">
              Our Story
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
