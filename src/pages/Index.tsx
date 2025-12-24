import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { QualityHighlight } from "@/components/sections/QualityHighlight";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { TrustSection } from "@/components/sections/TrustSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReliableCareSection } from "@/components/sections/ReliableCareSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCards />
      <QualityHighlight />
      <HowWeWork />
      <TrustSection />
      <PurposeSection />
      <PartnersSection />
      <ServicesSection />
      <ReliableCareSection />
    </Layout>
  );
};

export default Index;
