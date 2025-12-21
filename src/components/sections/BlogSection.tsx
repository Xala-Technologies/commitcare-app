import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const blogPosts = [
  {
    image: blog1,
    category: "Nutrition",
    title: "Essential Nutrition Tips for Healthy Aging",
    excerpt: "Discover the key dietary habits that support wellness in your golden years.",
  },
  {
    image: blog2,
    category: "Wellness",
    title: "Staying Active: Safe Exercises for Seniors",
    excerpt: "Simple yet effective exercises to maintain mobility and strength.",
  },
  {
    image: blog3,
    category: "Family",
    title: "Supporting Your Loved Ones Through Care Transitions",
    excerpt: "How to navigate the emotional journey of home care decisions.",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
              Insights and Inspirations
            </h2>
            <p className="text-muted-foreground text-lg">
              Tips, stories, and resources for caregivers and families.
            </p>
          </div>
          <Button variant="outline" size="default">
            View All Posts
          </Button>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.title}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
