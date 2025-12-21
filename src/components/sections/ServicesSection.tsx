import { Heart, Users, Pill, Car, Home, Smile, ArrowRight } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Assistance with daily activities and personal hygiene.",
  },
  {
    icon: Users,
    title: "Family Visits",
    description: "Regular check-ins and companionship services.",
  },
  {
    icon: Pill,
    title: "Medication Help",
    description: "Medication reminders and management support.",
  },
  {
    icon: Car,
    title: "Safe Transport",
    description: "Transportation to appointments and errands.",
  },
  {
    icon: Home,
    title: "Home Checks",
    description: "Safety assessments and home modifications.",
  },
  {
    icon: Smile,
    title: "Comfort Care",
    description: "Emotional support and quality of life enhancement.",
  },
];

export function ServicesSection() {
  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesBg})` }}
      >
        <div className="absolute inset-0 bg-background/95" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Your Well-Being, Our Priority
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive care services tailored to meet your unique needs and preferences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
