import { Layout } from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SEO } from "@/components/SEO";
import { getPage, listPosts } from "@/lib/content";
import { useEffect, useState } from "react";

const Innsikt = () => {
  const [pageContent, setPageContent] = useState<{ title: string; description: string; content: string } | null>(null);
  const [posts, setPosts] = useState<Array<{ title: string; description: string; date: string; slug: string }>>([]);

  useEffect(() => {
    getPage('innsikt').then((content) => {
      if (content) {
        setPageContent({
          title: content.frontmatter.title,
          description: content.frontmatter.description,
          content: content.content
        });
      }
    });
    listPosts().then((postList) => {
      setPosts(postList.map(post => ({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        date: post.frontmatter.date,
        slug: post.frontmatter.slug
      })));
    });
  }, []);

  if (!pageContent) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p>Laster...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO title={pageContent.title} description={pageContent.description} path="/innsikt" />
      <Section variant="default">
        <Container>
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              {pageContent.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-8">{pageContent.description}</p>
          </div>

          {posts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <div key={post.slug} className="bg-card-token rounded-xl p-6 border border-border/50">
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-sm mb-3">{post.description}</p>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </Layout>
  );
};

export default Innsikt;

