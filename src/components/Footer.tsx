import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const serviceLinks = [
  { name: "Tjenester", href: "/tjenester" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Trygghet og kvalitet", href: "/trygghet-og-kvalitet" },
];

const practicalLinks = [
  { name: "Personvern", href: "/personvern" },
  { name: "Tilgjengelighet", href: "/tilgjengelighet" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-section-dark text-primary-foreground">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {/* Kontakt */}
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-foreground">
                Kontakt
              </h3>
              <div className="space-y-5 md:space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-primary-foreground hover:text-primary-foreground/80 transition-colors text-base md:text-lg font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 rounded break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-primary-foreground text-base md:text-lg leading-relaxed">
                      {siteConfig.address.street}
                      <br />
                      {siteConfig.address.postalCode} {siteConfig.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lenker */}
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-foreground">
                Lenker
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-base md:text-lg font-medium min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Praktisk */}
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-primary-foreground">
                Praktisk
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {practicalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-base md:text-lg font-medium min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-primary-foreground/30">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
                <p className="text-base md:text-lg text-primary-foreground/90 font-medium">
                  © {currentYear} {siteConfig.companyName}. Alle rettigheter forbeholdt.
                </p>
                {siteConfig.orgNumber && (
                  <p className="text-base md:text-lg text-primary-foreground/90 font-medium">
                    Org.nr: {siteConfig.orgNumber}
                  </p>
                )}
              </div>
              <div className="flex justify-center sm:justify-start">
                <p className="text-sm md:text-base text-primary-foreground/70">
                  Utviklet av{" "}
                  <a
                    href="https://xala.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                  >
                    Xala Technologies
                  </a>
                  , Website{" "}
                  <a
                    href="https://xala.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                  >
                    xala.no
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
