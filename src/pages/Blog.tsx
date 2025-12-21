import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const blogPosts = [
  {
    image: blog1,
    category: "Nutrition",
    date: "December 15, 2024",
    title: "Essential Nutrition Tips for Healthy Aging",
    excerpt: "Discover the key dietary habits that support wellness in your golden years. From protein intake to hydration, learn what really matters.",
  },
  {
    image: blog2,
    category: "Wellness",
    date: "December 10, 2024",
    title: "Staying Active: Safe Exercises for Seniors",
    excerpt: "Simple yet effective exercises to maintain mobility and strength. These gentle movements can be done at home with minimal equipment.",
  },
  {
    image: blog3,
    category: "Family",
    date: "December 5, 2024",
    title: "Supporting Your Loved Ones Through Care Transitions",
    excerpt: "How to navigate the emotional journey of home care decisions. Tips for families starting the conversation about extra support.",
  },
  {
    image: blog1,
    category: "Health",
    date: "November 28, 2024",
    title: "Understanding Memory Care: A Complete Guide",
    excerpt: "Everything you need to know about memory care services, from early signs to specialized support options.",
  },
  {
    image: blog2,
    category: "Caregiving",
    date: "November 20, 2024",
    title: "Self-Care Tips for Family Caregivers",
    excerpt: "Taking care of yourself while caring for others is essential. Discover strategies to prevent burnout and maintain your well-being.",
  },
  {
    image: blog3,
    category: "Community",
    date: "November 15, 2024",
    title: "Building a Support Network for Aging Parents",
    excerpt: "How to create a community of care around your loved ones, including friends, neighbors, and professional services.",
  },
];

const categories = ["All", "Nutrition", "Wellness", "Family", "Health", "Caregiving", "Community"];

const Blog = () => {
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
              Insights & Resources
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Tips, stories, and educational content for caregivers and families 
              navigating the home care journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.title + index}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group"
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
                  <span className="text-muted-foreground text-xs">{post.date}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 mt-2 group-hover:text-primary transition-colors">
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-section-dark">
        <div className="container mx-auto text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, tips, and resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-1"
            />
            <Button variant="white" size="default">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
