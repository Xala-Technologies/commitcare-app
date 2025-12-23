import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heart, Shield, Users, Book, Phone, Home } from "lucide-react";
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
    <Section variant="default" className="pt-12 md:pt-16 lg:pt-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 lg:mb-20">
          <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-3 md:mb-4 flex items-center justify-center gap-2 font-semibold">
            <span>+</span> VÅRE TJENESTER
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 md:mb-5">
            Hva vi tilbyr
          </h2>
          <p className="text-foreground/90 text-base md:text-lg mb-0">
            Vi tilbyr et bredt spekter av tjenester for å støtte barn, unge og familier
          </p>
        </div>

        {/* Services - Compact Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => {
            const IconComponent = service.frontmatter.iconKey
              ? iconMap[service.frontmatter.iconKey] || Heart
              : Heart;

            return (
              <Link
                key={service.frontmatter.slug}
                to={`/tjenester#${service.frontmatter.slug}`}
                className="block group h-full"
              >
                <div className="bg-card-token rounded-xl p-5 md:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border/50 group-hover:border-primary-icon/50 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 md:mb-5 flex-shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-primary-icon" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow flex flex-col min-h-0">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary-icon transition-colors flex-shrink-0">
                      {service.frontmatter.title}
                    </h3>
                    <p className="text-foreground/75 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                      {service.frontmatter.summary}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

