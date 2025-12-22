import { Button } from "@/components/ui/button";

const testimonials = [
  {
    title: "Life-Enriching Support",
    quote: "Everly transformed my father's life. The caregivers are kind, attentive, and truly compassionate. I am grateful for their dedication and support during this time.",
    name: "Henry Thompson",
  },
  {
    title: "Heartfelt Companionship",
    quote: "The companionship my grandmother receives from Everly has been life-changing. She now enjoys daily activities and conversations, which have greatly improved her mood and overall well-being. We are truly grateful for their wonderful support.",
    name: "Sophia Martinez",
  },
  {
    title: "Outstanding Experience",
    quote: "Our experience with Everly has been outstanding. The caregivers genuinely care about their clients, making a positive impact on our family's life. Thank you!",
    name: "Michael Donovan",
  },
  {
    title: "24/7 Dependability",
    quote: "Everly's 24/7 availability has been a lifesaver. Their caregivers provide reliable support day and night, ensuring my mother feels safe and secure. I can't express how much their care means to our family.",
    name: "Olivia Renolds",
  },
  {
    title: "Respectful Care",
    quote: "Everly's team is incredible! They treat my father with respect and dignity, ensuring he remains comfortable and engaged.",
    name: "James Caldwell",
  },
  {
    title: "Peace of Mind",
    quote: "Knowing that my mother is in such capable hands gives our family peace of mind. Everly's caregivers are attentive, respectful, and dedicated to ensuring her comfort. Their service is truly invaluable to us!",
    name: "Evelyn Harper",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <span>+</span> TESTIMONIALS
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Real Experiences, Real Results
            </h2>
          </div>
          <Button variant="default" size="default" className="rounded-full px-6">
            More Testimonial
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-xl p-6 border border-border/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="text-primary text-4xl font-serif mb-3">"</div>
              <h3 className="font-serif text-lg font-medium text-foreground mb-3">
                {testimonial.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-medium text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="font-medium text-foreground text-sm">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
