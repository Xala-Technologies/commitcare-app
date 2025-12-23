import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Våre tjenester", href: "/tjenester" },
  { name: "om oss", href: "/om-oss" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
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
          <div className="hidden lg:flex items-center gap-4">
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
