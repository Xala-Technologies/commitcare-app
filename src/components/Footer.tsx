import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Home Care", href: "/services" },
    { name: "Personal Care", href: "/services" },
    { name: "Health Monitoring", href: "/services" },
    { name: "Family Support", href: "/services" },
  ],
  navigation: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-section-dark text-primary-foreground">
      <div className="container mx-auto py-16">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-primary-foreground/20">
          <div className="max-w-md">
            <h3 className="font-serif text-2xl font-semibold mb-2">Stay Connected</h3>
            <p className="text-primary-foreground/70 text-sm">
              Subscribe to our newsletter for care tips, updates, and exclusive insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-w-[280px]"
            />
            <Button variant="white" size="default">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground flex items-center justify-center">
                <span className="text-section-dark font-serif font-bold text-xl">E</span>
              </div>
              <span className="font-serif text-2xl font-semibold">Everly</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Providing compassionate home care services that enhance quality of life for families across the nation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
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
            <h4 className="font-semibold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
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
            <h4 className="font-semibold text-lg mb-6">Our Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Care Street, Health City, HC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-primary" />
                <span className="text-primary-foreground/70 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-primary" />
                <span className="text-primary-foreground/70 text-sm">hello@everly.care</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Everly Care. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
