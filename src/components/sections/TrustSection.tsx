import { Button } from "@/components/ui/button";
import familyCare from "@/assets/family-care.jpg";
import caregiver1 from "@/assets/caregiver-1.jpg";

const stats = [
  { value: "15+", label: "YEARS EXPERIENCE" },
  { value: "5k+", label: "ACTIVE MEMBER" },
  { value: "90%", label: "HAPPY SENIOR" },
];

export function TrustSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img 
                src={familyCare} 
                alt="Happy senior couple enjoying time together" 
                className="rounded-2xl w-full h-72 object-cover"
              />
              <img 
                src={caregiver1} 
                alt="Professional caregiver with patient" 
                className="rounded-2xl w-full h-72 object-cover mt-8"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
              <span>+</span> ABOUT US
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-5 leading-tight">
              Building Trust, One<br />Family at a Time
            </h2>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Everly Elder Care Services provides compassionate, expert support to ensure seniors live with dignity and independence. Our tailored care programs enhance comfort and safety.
            </p>
            <Button variant="default" size="default" className="rounded-full px-6">
              Learn More
            </Button>

            {/* Stats */}
            <div className="flex gap-12 mt-10 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-primary text-xs tracking-wider uppercase">
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
