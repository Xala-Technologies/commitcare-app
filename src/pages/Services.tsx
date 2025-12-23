import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heart, Users, Pill, Car, Home, Smile, Activity, Clock, ArrowRight, Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "Comprehensive assistance with daily activities including bathing, dressing, grooming, and personal hygiene.",
    features: ["Bathing & grooming assistance", "Dressing support", "Mobility assistance", "Incontinence care"],
  },
  {
    icon: Users,
    title: "Companionship",
    description: "Social interaction and emotional support to combat loneliness and promote mental well-being.",
    features: ["Friendly conversation", "Activity engagement", "Meal companionship", "Outings and walks"],
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: "Ensure timely and accurate medication administration with professional oversight.",
    features: ["Medication reminders", "Prescription pickup", "Dosage tracking", "Healthcare coordination"],
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Regular health assessments and vital sign monitoring for peace of mind.",
    features: ["Vital sign checks", "Health observation", "Doctor communication", "Emergency response"],
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Safe and reliable transportation to medical appointments, errands, and social activities.",
    features: ["Medical appointments", "Grocery shopping", "Social outings", "Pharmacy visits"],
  },
  {
    icon: Home,
    title: "Homemaking",
    description: "Light housekeeping and home management to maintain a safe, comfortable living environment.",
    features: ["Light cleaning", "Laundry services", "Meal preparation", "Organization"],
  },
  {
    icon: Smile,
    title: "Respite Care",
    description: "Temporary relief for family caregivers while ensuring continuous quality care.",
    features: ["Flexible scheduling", "Short-term support", "Weekend coverage", "Emergency backup"],
  },
  {
    icon: Clock,
    title: "24/7 Care",
    description: "Round-the-clock care for those requiring continuous supervision and assistance.",
    features: ["Live-in caregivers", "Night supervision", "Ongoing support", "Seamless transitions"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-10 md:py-14 lg:py-24 min-h-[40vh] md:min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-hero/85" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg">
              Comprehensive home care services tailored to meet your unique needs, 
              delivered with compassion and professionalism.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <Section variant="default">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="bg-card-token rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base mb-3 md:mb-4">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-xs md:text-sm text-foreground">
                          <Check className="w-3 h-3 md:w-4 md:h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section variant="default" className="bg-secondary/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Getting started with quality home care is simple.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {[
              { step: "01", title: "Initial Call", desc: "Speak with our care coordinators about your needs." },
              { step: "02", title: "Assessment", desc: "We conduct a thorough in-home evaluation." },
              { step: "03", title: "Care Plan", desc: "A personalized care plan is created for you." },
              { step: "04", title: "Begin Care", desc: "Your matched caregiver starts providing support." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 md:mb-4 font-serif text-lg md:text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-serif text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark" className="bg-section-dark">
        <Container>
          <div className="text-center">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-primary-foreground mb-3 md:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and assessment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
              <Button variant="white" size="lg" className="w-full sm:w-auto min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50">
                Schedule Consultation
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50">
                Call Us Now
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Services;
