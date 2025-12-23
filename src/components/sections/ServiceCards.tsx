import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ArrowRight, Heart, Shield, Users, Book, Phone, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { listServices, ServiceContent } from "@/lib/content";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  heart: Heart,
  shield: Shield,
  users: Users,
  book: Book,
  phone: Phone,
  home: Home,
};

export function ServiceCards() {
  const [services, setServices] = useState<ServiceContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await listServices();
        setServices(data);
      } catch (error) {
        console.error("Error loading services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  if (loading) {
    return (
      <Section variant="default">
        <Container>
          <div className="text-center py-12">
            <p className="text-foreground/75">Laster tjenester...</p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section variant="default">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto pt-8 md:pt-12 mb-12 md:mb-16">
          <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> VÅRE TJENESTER
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Hva vi tilbyr
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl">
            Vi tilbyr et bredt spekter av tjenester for å støtte barn, unge og familier
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
          {services.map((service) => {
            const IconComponent = service.frontmatter.iconKey
              ? iconMap[service.frontmatter.iconKey] || Heart
              : Heart;

            return (
              <div
                key={service.frontmatter.slug}
                className="bg-card-token rounded-xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 border border-border/50 group flex flex-col h-full"
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4 md:mb-5">
                  {service.frontmatter.title}
                </h3>

                {/* Summary */}
                <p className="text-foreground/75 text-base md:text-lg mb-5 md:mb-6 leading-relaxed flex-grow">
                  {service.frontmatter.summary}
                </p>

                {/* Link - Aligned to bottom */}
                <Link
                  to={`/tjenester#${service.frontmatter.slug}`}
                  className="inline-flex items-center gap-2 text-primary-icon hover:text-primary font-semibold text-base md:text-lg group/link transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/20 rounded mt-auto"
                >
                  Les mer
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

