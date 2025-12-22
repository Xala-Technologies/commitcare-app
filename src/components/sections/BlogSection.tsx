import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    image: blog1,
    author: "zaderonstudio",
    date: "November 3, 2024",
    title: "Natural Remedies for Health",
    excerpt: "Natural Remedies for Health zaderonstudio | November 3, 2024 Donec volutpat ligula...",
  },
  {
    image: blog2,
    author: "zaderonstudio",
    date: "November 3, 2024",
    title: "Embrace a Balanced Lifestyle",
    excerpt: "Embrace a Balanced Lifestyle zaderonstudio | November 3, 2024 Donec volutpat ligula...",
  },
  {
    image: blog3,
    author: "zaderonstudio",
    date: "November 3, 2024",
    title: "Simple Steps to Wellness",
    excerpt: "Simple Steps to Wellness zaderonstudio | November 3, 2024 Donec volutpat ligula...",
  },
];

export function BlogSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-sm tracking-wider uppercase mb-2 flex items-center gap-2">
              <span>+</span> NEWS & ARTICLES
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
              Insight and Inspirations
            </h2>
          </div>
          <Button variant="default" size="default" className="rounded-full px-6">
            More Articles
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.title}
              className="bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="text-primary">{post.author}</span>
                  <span>●</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
