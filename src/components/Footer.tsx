import { Link } from "react-router-dom";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

const serviceLinks = [
  { name: "Våre tjenester", href: "/tjenester" },
  { name: "om oss", href: "/om-oss" },
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
        <div className="py-8 md:py-10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Kontakt */}
            <div>
              <h3 className="font-serif text-base md:text-lg font-semibold mb-4 text-primary-foreground">
                Kontakt
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 rounded break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary-foreground/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postalCode} {siteConfig.address.city}
                  </p>
                </div>
              </div>
            </div>

            {/* Lenker */}
            <div>
              <h3 className="font-serif text-base md:text-lg font-semibold mb-4 text-primary-foreground">
                Lenker
              </h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Praktisk */}
            <div>
              <h3 className="font-serif text-base md:text-lg font-semibold mb-4 text-primary-foreground">
                Praktisk
              </h3>
              <ul className="space-y-2">
                {practicalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/90 hover:text-primary-foreground transition-colors text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Info */}
            <div>
              <div className="mb-4">
                <Logo 
                  showText={true} 
                  size="md" 
                  linkTo="/"
                  className="[&_span]:text-primary-foreground"
                />
              </div>
              {siteConfig.orgNumber && (
                <p className="text-primary-foreground/70 text-sm md:text-base">
                  Org.nr: {siteConfig.orgNumber}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-primary-foreground/20">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
              <p className="text-xs md:text-sm text-white">
                © {currentYear} Alle rettigheter forbeholdt.
              </p>
              <p className="text-xs md:text-sm text-white">
                Utviklet av{" "}
                <a
                  href="https://xala.no"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:text-teal-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded"
                >
                  Xala Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
