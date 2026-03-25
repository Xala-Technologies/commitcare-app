import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SEO } from "@/components/SEO";
import { publicSiteContent } from "@/lib/publicSiteContent";

const Lokasjoner = () => {
  const content = publicSiteContent.lokasjoner;

  return (
    <Layout>
      <SEO
        title="Lokasjoner"
        description={content.hero.lead}
        path="/lokasjoner"
      />

      <Section variant="light" className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mb-10 md:mb-14">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4">
              {content.hero.title}
            </h1>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {content.hero.lead}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {content.items.map((location) => (
              <article
                key={location.slug}
                className="bg-card-token rounded-2xl p-6 md:p-7 border border-border/50 shadow-sm hover:shadow-lg transition-shadow"
              >
                <p className="text-sm font-semibold text-primary mb-2">Lokasjon</p>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-2">
                  {location.name}
                </h2>
                <p className="text-foreground/75 mb-5">
                  {location.description ?? "Informasjon oppdateres snart."}
                </p>

                <div className="space-y-3 text-sm md:text-base">
                  <p className="flex items-start gap-2 text-foreground/80">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>{location.address ?? location.city}</span>
                  </p>
                  {location.phone && (
                    <p className="flex items-start gap-2 text-foreground/80">
                      <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{location.phone}</span>
                    </p>
                  )}
                  {location.email && (
                    <p className="flex items-start gap-2 text-foreground/80 break-all">
                      <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{location.email}</span>
                    </p>
                  )}
                  {location.openingHours && (
                    <p className="flex items-start gap-2 text-foreground/80">
                      <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                      <span>{location.openingHours}</span>
                    </p>
                  )}
                </div>

                <Link
                  to={`/lokasjoner/${location.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  Se lokasjon
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Lokasjoner;
