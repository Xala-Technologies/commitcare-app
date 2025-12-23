import { useEffect } from "react";
import { getPage } from "@/lib/content";

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = async () => {
      const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
      const pages = ['', 'tjenester', 'om-oss', 'trygghet-og-kvalitet', 'kontakt', 'jobb', 'innsikt'];
      
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => {
  const path = page ? `/${page}` : '/';
  return `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`;
}).join('\n')}
</urlset>`;

      // In a real app, this would be served as a static file
      // For now, we'll just log it
      console.log('Sitemap XML:', sitemap);
    };

    generateSitemap();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Sitemap would be served as XML file</p>
    </div>
  );
};

export default Sitemap;

