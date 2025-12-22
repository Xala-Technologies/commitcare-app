import { ArrowRight, User, Activity } from "lucide-react";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l2 2" />
      </svg>
    ),
    title: "Personal Care",
    description: "Assistance with daily tasks such as bathing, dressing, and meal preparation.",
    tags: ["Assistance", "Mobility"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth={1.5} />
        <line x1="16" y1="2" x2="16" y2="6" strokeWidth={1.5} />
        <line x1="8" y1="2" x2="8" y2="6" strokeWidth={1.5} />
        <line x1="3" y1="10" x2="21" y2="10" strokeWidth={1.5} />
      </svg>
    ),
    title: "Friendly Visits",
    description: "Companionship and social interaction to reduce feelings of loneliness and isolation.",
    tags: ["Assistance", "Mobility"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Medication Help",
    description: "Management of medications, ensuring proper usage and adherence to schedules.",
    tags: ["Assistance", "Mobility"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "Safe Transport",
    description: "Reliable transportation to appointments, errands, and social events for independence.",
    tags: ["Assistance", "Mobility"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Home Checks",
    description: "Assessments to identify potential hazards and recommend safety improvements.",
    tags: ["Assistance", "Mobility"],
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Comfort Care",
    description: "Compassionate support focused on enhancing quality of life during challenging times.",
    tags: ["Assistance", "Mobility"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-section-dark">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary-foreground/70 text-sm tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <span>+</span> OUR SERVICE
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground">
            Your Well-Being, Our Priority
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div 
              key={service.title}
              className="bg-card rounded-xl p-6 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <div className="flex items-center gap-4 mb-4">
                {service.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-muted-foreground text-xs">
                    <User className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
              >
                <ArrowRight className="w-4 h-4" /> Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
