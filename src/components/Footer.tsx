import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const exploreLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "#" },
];

const navigationLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Customer Support", href: "#" },
  { name: "Regulation", href: "#" },
  { name: "Insurance", href: "#" },
  { name: "Disclaimer", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-section-dark">
      <div className="container mx-auto py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Home className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-medium text-primary-foreground">Everly</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              Supporting independence with compassionate care, every moment of life feels cherished.
            </p>
            
            {/* Newsletter */}
            <h4 className="font-serif text-lg font-medium text-primary-foreground mb-3">Newsletter</h4>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              <Button variant="default" className="w-full rounded-lg">
                Subscribe Now
              </Button>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-serif text-lg font-medium text-primary-foreground mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-medium text-primary-foreground mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium text-primary-foreground mb-4">Our Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-primary-foreground text-sm mb-1">Phone</p>
                <p className="text-primary-foreground/70 text-sm">(555) 123-4567</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground text-sm mb-1">Email</p>
                <p className="text-primary-foreground/70 text-sm">care@everlyservices.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
