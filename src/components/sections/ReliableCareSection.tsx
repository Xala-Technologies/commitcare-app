import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import caregiver2 from "@/assets/caregiver-2.jpg";

const benefits = [
  "Personalized care plans for every stage",
  "Trained and certified caregivers",
  "Flexible scheduling options",
  "Regular progress updates",
];

const infoCards = [
  {
    title: "Comprehensive Assessments",
    points: ["Initial health evaluation", "Care plan development", "Family consultation"],
  },
  {
    title: "Ongoing Support",
    points: ["24/7 availability", "Regular check-ins", "Emergency response"],
  },
];

export function ReliableCareSection() {
  return (
    <section className="py-24 bg-section-dark">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
              Reliable Care for Every Stage
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 leading-relaxed">
              Whether you need short-term recovery support or long-term care, 
              our dedicated team is here to provide the assistance you need 
              while respecting your independence.
            </p>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-primary-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button variant="white" size="lg">
              Start Your Journey
            </Button>
          </div>

          {/* Right Content - Image + Info Cards */}
          <div className="relative">
            <img 
              src={caregiver2} 
              alt="Caregiver assisting elderly patient" 
              className="rounded-2xl shadow-xl w-full max-w-md ml-auto"
            />
            
            {/* Info Cards Stack */}
            <div className="absolute bottom-8 left-0 space-y-4 max-w-xs">
              {infoCards.map((card) => (
                <div 
                  key={card.title}
                  className="bg-card rounded-xl p-5 shadow-lg border border-border/50"
                >
                  <h4 className="font-semibold text-foreground mb-3">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.points.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
