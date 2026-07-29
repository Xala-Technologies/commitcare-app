import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { QualityHighlight } from "@/components/sections/QualityHighlight";
import { PhotoWindow } from "@/components/sections/PhotoWindow";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { TrustSection } from "@/components/sections/TrustSection";
import { PurposeSection } from "@/components/sections/PurposeSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ReliableCareSection } from "@/components/sections/ReliableCareSection";
import farmAerial from "@/assets/sections/home-scroll-farm.jpg";
import farmDeck from "@/assets/sections/home-scroll-farm-deck.jpg";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServiceCards />
      <QualityHighlight />

      <PhotoWindow src={farmAerial} label="Rønningen gård sett fra luften">
        <HowWeWork />
        <TrustSection />
      </PhotoWindow>

      <PhotoWindow src={farmDeck} label="Rønningen gård med uteområde og basseng">
        <PurposeSection />
      </PhotoWindow>

      <PartnersSection />
      <ServicesSection />
      <ReliableCareSection />
    </Layout>
  );
};

export default Index;
