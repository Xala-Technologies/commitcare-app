import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Tjenester from "./pages/Tjenester";
import OmOss from "./pages/OmOss";
import TrygghetOgKvalitet from "./pages/TrygghetOgKvalitet";
import Kontakt from "./pages/Kontakt";
import Jobb from "./pages/Jobb";
import Innsikt from "./pages/Innsikt";
import Personvern from "./pages/Personvern";
import Tilgjengelighet from "./pages/Tilgjengelighet";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            {/* Norwegian routes */}
            <Route path="/tjenester" element={<Tjenester />} />
            <Route path="/om-oss" element={<OmOss />} />
            <Route path="/trygghet-og-kvalitet" element={<TrygghetOgKvalitet />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/jobb" element={<Jobb />} />
            <Route path="/innsikt" element={<Innsikt />} />
            <Route path="/personvern" element={<Personvern />} />
            <Route path="/tilgjengelighet" element={<Tilgjengelighet />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
