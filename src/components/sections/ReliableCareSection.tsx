import { CheckCircle } from "lucide-react";
import caregiver2 from "@/assets/caregiver-2.jpg";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We start with a free consultation to understand your loved one's unique needs",
  },
  {
    number: "02",
    title: "Personalized Care Plan",
    description: "Based on the consultation, we create a tailored care plan that matches their lifestyle",
  },
  {
    number: "03",
    title: "Ongoing Support",
    description: "Our caregivers provide consistent, compassionate care with regular check-ins",
  },
];

const features = [
  "Always Caring-24/7 Support",
  "Trusted Reliability",
];

export function ReliableCareSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="lg:pt-8">
            <p className="text-primary text-sm tracking-wider uppercase mb-3 flex items-center gap-2">
              <span>+</span> HOW IT WORKS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-5 leading-tight">
              Reliable Care for<br />Every Stage
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed max-w-md">
              We tailor our services to meet the unique needs of each individual, ensuring comfort and dignity.
            </p>
            
            {/* Features */}
            <div className="space-y-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image + Steps */}
          <div className="relative">
            <img 
              src={caregiver2} 
              alt="Caregiver in green scrubs" 
              className="rounded-2xl w-full max-w-md h-[500px] object-cover"
            />
            
            {/* Steps Cards */}
            <div className="absolute top-8 -right-4 lg:right-0 space-y-3 max-w-[280px]">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className="bg-card rounded-xl p-4 shadow-lg border border-border/50"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-foreground/30 font-serif text-lg font-medium">{step.number}</span>
                    <div>
                      <h4 className="font-medium text-foreground text-sm mb-1">{step.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                    </div>
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
