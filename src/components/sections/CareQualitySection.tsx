import { Heart, Users, Activity } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Daily assistance with bathing, dressing, and personal hygiene to maintain dignity and comfort.",
  },
  {
    icon: Users,
    title: "Social Support",
    description: "Companionship services that combat loneliness and promote mental well-being.",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Regular health checks and medication management to ensure optimal wellness.",
  },
];

export function CareQualitySection() {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Care That Enhances Quality of Life
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive services are designed to support independence while 
            providing the assistance needed for daily living.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
