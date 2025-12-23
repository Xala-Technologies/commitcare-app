import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-primary-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Personal Care",
    description: "Assisting with daily rutines to enchance comfort",
    link: "Our Team",
    href: "/about",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Social Support",
    description: "Engaging companionship and meaningful social interactions",
    link: "Our Services",
    href: "/services",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-primary-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Health Monitoring",
    description: "Helping with mobility, exercise, and physical activities",
    link: "Testimonials",
    href: "#testimonials",
  },
];

export function CareQualitySection() {
  return (
    <Section variant="default" className="!pt-44 md:!pt-48 lg:!pt-52">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> WHAT WE OFFER
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Care That Enchances Quality of Life
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-card-token rounded-xl p-8 border border-border/50 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground/75 text-base md:text-lg leading-relaxed mb-5">
                {feature.description}
              </p>
              <a 
                href={feature.href}
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
              >
                <ArrowRight className="w-4 h-4" /> {feature.link}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
