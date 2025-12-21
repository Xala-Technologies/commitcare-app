import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CareQualitySection } from "@/components/sections/CareQualitySection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReliableCareSection } from "@/components/sections/ReliableCareSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <CareQualitySection />
      <TrustSection />
      <PurposeSection />
      <PartnersSection />
      <ServicesSection />
      <ReliableCareSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
