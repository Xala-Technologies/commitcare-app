import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@everly.care", "support@everly.care"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Care Street", "Health City, HC 12345"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon-Fri: 8am - 8pm", "Sat-Sun: 9am - 5pm"],
  },
];

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 min-h-[40vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-hero/85" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              We're here to answer your questions and discuss how we can help you 
              and your family. Reach out today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-care">Personal Care</option>
                    <option value="companionship">Companionship</option>
                    <option value="medication">Medication Management</option>
                    <option value="health-monitoring">Health Monitoring</option>
                    <option value="transportation">Transportation</option>
                    <option value="homemaking">Homemaking</option>
                    <option value="respite">Respite Care</option>
                    <option value="24-7">24/7 Care</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
                    placeholder="Tell us about your care needs..."
                  />
                </div>
                <Button variant="default" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have questions? We'd love to hear from you. Send us a message and 
                we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div 
                    key={info.title}
                    className="flex gap-4 p-4 bg-secondary/50 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-secondary/50 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Interactive map would go here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary-foreground mb-4">
            Have More Questions?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Check out our frequently asked questions or call us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="white" size="lg">
              View FAQs
            </Button>
            <Button variant="heroOutline" size="lg">
              Call +1 (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
