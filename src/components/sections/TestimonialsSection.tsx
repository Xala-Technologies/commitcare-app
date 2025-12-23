import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Link } from "react-router-dom";

const testimonials = [
  {
    title: "Tydelig kommunikasjon",
    quote: "Tydelig kommunikasjon og god oppfølging. Vi setter pris på det profesjonelle samarbeidet.",
  },
  {
    title: "Forutsigbarhet",
    quote: "Forutsigbarhet i hverdagen og trygge rammer. Dette gir stabilitet og trygghet.",
  },
  {
    title: "Godt samarbeid",
    quote: "Godt samarbeid med relevante aktører. Vi opplever en helhetlig tilnærming.",
  },
];

export function TestimonialsSection() {
  return (
    <Section id="testimonials" variant="default">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-3 md:mb-4 flex items-center gap-2 font-semibold">
              <span>+</span> ERFARINGER
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Erfaringer fra samarbeid
            </h2>
          </div>
          <Button 
            asChild
            variant="default" 
            size="default" 
            className="w-full sm:w-auto rounded-full px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <Link to="/trygghet-og-kvalitet">Les mer</Link>
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card-token rounded-xl p-4 md:p-6 border border-border/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="text-primary text-3xl md:text-4xl font-serif mb-2 md:mb-3">"</div>
              <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3 md:mb-4">
                {testimonial.title}
              </h3>
              <p className="text-foreground/75 text-base md:text-lg mb-5 md:mb-6 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
