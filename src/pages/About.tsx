import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
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
      <section className="relative py-24 min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-hero/85" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              About Everly Care
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              For over 15 years, we've been dedicated to providing exceptional home care 
              services that honor the dignity and independence of every individual we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                To enhance the quality of life for individuals and families by providing 
                compassionate, professional home care services that promote independence, 
                dignity, and peace of mind.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that everyone deserves access to quality care in the comfort 
                of their own home. Our team of dedicated professionals works tirelessly 
                to make this vision a reality for thousands of families across the nation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={caregiver1} 
                alt="Caregiver with patient" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <img 
                src={familyCare} 
                alt="Family care moment" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              These principles guide every decision we make and every interaction we have.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-muted-foreground text-lg">
              Experienced professionals dedicated to excellence in care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div 
                key={member.name}
                className="text-center"
              >
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-serif text-3xl font-semibold">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Learn More?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can support you and your family.
          </p>
          <Button variant="white" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
