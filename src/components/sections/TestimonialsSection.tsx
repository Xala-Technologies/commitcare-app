import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The care team has been absolutely wonderful. They treat my mother with such dignity and respect.",
    name: "Sarah Johnson",
    role: "Family Member",
  },
  {
    quote: "I finally have peace of mind knowing my father is in good hands. The caregivers are exceptional.",
    name: "Michael Chen",
    role: "Son of Client",
  },
  {
    quote: "Professional, compassionate, and always available. I couldn't ask for better support.",
    name: "Emily Rodriguez",
    role: "Client",
  },
  {
    quote: "They've helped my grandmother maintain her independence while getting the care she needs.",
    name: "David Williams",
    role: "Grandson",
  },
  {
    quote: "The personalized care plan they created has made such a difference in my daily life.",
    name: "Margaret Thompson",
    role: "Client",
  },
  {
    quote: "Outstanding service from start to finish. They truly care about their clients' well-being.",
    name: "Robert Kim",
    role: "Family Member",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Real Experiences, Real Results
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from the families we've had the privilege to serve.
            </p>
          </div>
          <Button variant="outline" size="default">
            View All Reviews
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
