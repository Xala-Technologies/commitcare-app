import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { publicSiteContent } from "@/lib/publicSiteContent";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { name: "Hjem", href: "/" },
  { name: "Våre tjenester", href: "/tjenester" },
  { name: "Om oss", href: "/om-oss" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const locations = publicSiteContent.lokasjoner.items;

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const locationDetailMatch = location.pathname.match(/^\/lokasjoner\/([^/]+)\/?$/);
  const activeLocationSlug = locationDetailMatch?.[1];
  const activeLocation = activeLocationSlug
    ? locations.find((l) => l.slug === activeLocationSlug)
    : undefined;
  const isLocationsSection = location.pathname.startsWith("/lokasjoner");
  /** Tekst i trigger: vis valgt avdeling når brukeren er på detaljside. */
  const locationsTriggerLabel = activeLocation
    ? (activeLocation.menuLabel ?? activeLocation.name)
    : "Lokasjoner";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
      <div className="w-full">
        <div className="w-full px-5 md:px-8 lg:px-12 xl:px-16 2xl:px-20 flex items-center justify-between h-16 md:h-20">
          {/* Logo - Left side */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group flex-shrink-0"
            onClick={() => setIsOpen(false)}
            aria-label="Commit Care hjem"
          >
            <div className="relative w-10 h-10 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105 shadow-md group-hover:shadow-lg">
              {/* Hands protecting heart - symbolizing care, love and support */}
              <svg
                className="w-6 h-6 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Heart in center */}
                <path
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  fill="white"
                  opacity="0.95"
                />
                {/* Left hand protecting */}
                <path
                  d="M6 10c-1.5 1-2 2.5-1.5 3.5.5 1 1.5 1.5 2.5 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.85"
                />
                <path
                  d="M5 8.5c-.5.5-1 1.5-.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.85"
                />
                {/* Right hand protecting */}
                <path
                  d="M18 10c1.5 1 2 2.5 1.5 3.5-.5 1-1.5 1.5-2.5 1"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.85"
                />
                <path
                  d="M19 8.5c.5.5 1 1.5.5 2.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  opacity="0.85"
                />
              </svg>
            </div>
            <span className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight">
              Commit Care
            </span>
          </Link>

          {/* Right Side - Navigation + CTA */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Desktop Navigation */}
            <nav className="flex items-center gap-1" aria-label="Hovednavigasjon">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "relative px-3 md:px-4 py-2 text-sm md:text-base font-semibold transition-all duration-200 rounded-lg",
                    "hover:bg-accent/50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-foreground"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                  )}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "relative px-3 md:px-4 py-2 text-sm md:text-base font-semibold transition-all duration-200 rounded-lg",
                    "hover:bg-accent/50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    isLocationsSection ? "text-primary" : "text-foreground"
                  )}
                  aria-label={
                    activeLocation
                      ? `Lokasjoner, valgt: ${activeLocation.menuLabel ?? activeLocation.name}`
                      : "Åpne lokasjoner"
                  }
                >
                  <span className="inline-flex items-center gap-1">
                    {locationsTriggerLabel}
                    <ChevronDown className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                  </span>
                  {isLocationsSection && (
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  className={cn(
                    "min-w-[240px] max-w-[min(100vw-2rem,300px)] rounded-xl p-1.5",
                    "border border-border/40 shadow-md shadow-black/[0.06]",
                    "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90",
                    "text-foreground",
                  )}
                >
                  {locations.map((loc) => (
                    <DropdownMenuItem
                      key={loc.slug}
                      asChild
                      className={cn(
                        "cursor-pointer rounded-lg px-3 py-2.5 text-sm md:text-base font-semibold",
                        "text-foreground outline-none transition-colors",
                        "data-[highlighted]:bg-accent/50 data-[highlighted]:text-foreground",
                        "focus:bg-accent/50 focus:text-foreground",
                        loc.slug === activeLocationSlug && "bg-accent/30 text-primary",
                      )}
                    >
                      <Link
                        to={`/lokasjoner/${loc.slug}`}
                        className="w-full whitespace-normal"
                        aria-label={loc.name}
                        aria-current={loc.slug === activeLocationSlug ? "page" : undefined}
                      >
                        {loc.menuLabel ?? loc.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* CTA Button */}
            <Button
              asChild
              variant="default"
              size="default"
              className="min-h-[44px] px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
            >
              <Link to="/kontakt">Ta kontakt</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center text-foreground hover:bg-accent/50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="py-4 border-t border-border/40" aria-label="Mobilnavigasjon">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 min-h-[44px] text-base font-medium transition-colors rounded-lg",
                    "hover:bg-accent/50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                    isActive(link.href)
                      ? "text-primary bg-accent/30"
                      : "text-foreground"
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-4 pt-2">
                <p className="px-1 pb-2 text-sm font-semibold text-foreground/70">Lokasjoner</p>
                <div className="flex flex-col gap-1">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/lokasjoner/${loc.slug}`}
                      onClick={() => setIsOpen(false)}
                      aria-label={loc.name}
                      className={cn(
                        "px-4 py-3 min-h-[44px] text-base font-medium transition-colors rounded-lg",
                        "hover:bg-accent/50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
                        location.pathname === `/lokasjoner/${loc.slug}`
                          ? "text-primary bg-accent/30"
                          : "text-foreground"
                      )}
                    >
                      {loc.menuLabel ?? loc.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile CTA Button */}
              <div className="px-4 pt-2">
                <Button
                  asChild
                  variant="default"
                  size="default"
                  className="w-full min-h-[44px] rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                >
                  <Link to="/kontakt" onClick={() => setIsOpen(false)}>Ta kontakt</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
