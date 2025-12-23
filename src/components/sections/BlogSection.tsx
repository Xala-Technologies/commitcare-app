import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    image: blog1,
    author: "Commit Care",
    date: "Mars 2025",
    title: "Struktur og forutsigbarhet",
    excerpt: "Hvordan vi sikrer tydelige rutiner og forutsigbare møter som gir trygghet og stabilitet i hverdagen.",
  },
  {
    image: blog2,
    author: "Commit Care",
    date: "Mars 2025",
    title: "Samarbeid med skole",
    excerpt: "Viktigheten av tett samarbeid med skole og andre relevante aktører for best mulig oppfølging.",
  },
  {
    image: blog3,
    author: "Commit Care",
    date: "Mars 2025",
    title: "Overgang til videre tiltak",
    excerpt: "Hvordan vi sikrer smidige overganger og planlegger videre støtte når det trengs.",
  },
];

export function BlogSection() {
  return (
    <Section variant="default">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8 md:mb-10">
          <div>
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-3 md:mb-4 flex items-center gap-2 font-semibold">
              <span>+</span> INNSIKT
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
              Innsikt og fag
            </h2>
          </div>
          <Button 
            asChild
            variant="default" 
            size="default" 
            className="w-full sm:w-auto rounded-full px-6 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <Link to="/innsikt">Se alle</Link>
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.title}
              className="bg-card-token rounded-xl overflow-hidden border border-border/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 md:p-5">
                <div className="flex items-center gap-2 text-sm text-foreground/80 mb-3 font-medium">
                  <span className="text-primary-icon font-semibold">{post.author}</span>
                  <span>●</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-primary-icon transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
