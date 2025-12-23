import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Heart, Users, Award, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import caregiver1 from "@/assets/caregiver-1.jpg";
import familyCare from "@/assets/family-care.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every interaction is guided by empathy and genuine concern for well-being.",
  },
  {
    icon: Users,
    title: "Family-Centered",
    description: "We work closely with families to create personalized care solutions.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Continuous training ensures our team delivers the highest quality care.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Consistent, dependable service you can count on every day.",
  },
];

const team = [
  { name: "Dr. Sarah Mitchell", role: "Medical Director", initials: "SM" },
  { name: "James Wilson", role: "Care Coordinator", initials: "JW" },
  { name: "Maria Garcia", role: "Lead Caregiver", initials: "MG" },
  { name: "David Chen", role: "Operations Manager", initials: "DC" },
];

const About = () => {
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
              About Everly Care
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg">
              For over 15 years, we've been dedicated to providing exceptional home care 
              services that honor the dignity and independence of every individual we serve.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <Section variant="default">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 md:mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg mb-4 md:mb-6 leading-relaxed">
                To enhance the quality of life for individuals and families by providing 
                compassionate, professional home care services that promote independence, 
                dignity, and peace of mind.
              </p>
              <p className="text-muted-foreground text-sm md:text-base lg:text-lg leading-relaxed">
                We believe that everyone deserves access to quality care in the comfort 
                of their own home. Our team of dedicated professionals works tirelessly 
                to make this vision a reality for thousands of families across the nation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <img 
                src={caregiver1} 
                alt="Caregiver with patient" 
                className="rounded-xl md:rounded-2xl shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover"
              />
              <img 
                src={familyCare} 
                alt="Family care moment" 
                className="rounded-xl md:rounded-2xl shadow-lg w-full h-48 sm:h-56 md:h-64 object-cover mt-4 md:mt-8"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section variant="default" className="bg-secondary/30">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-card-token rounded-xl md:rounded-2xl p-4 md:p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <value.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg">
              Experienced professionals dedicated to excellence in care.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="text-center"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-primary font-serif text-2xl md:text-3xl font-semibold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-serif text-base md:text-lg lg:text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  {member.role}
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
              Ready to Learn More?
            </h2>
            <p className="text-primary-foreground/70 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can support you and your family.
            </p>
            <Button variant="white" size="lg" className="min-h-[44px] focus:outline-none focus:ring-2 focus:ring-white/50">
              Get in Touch
            </Button>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default About;
