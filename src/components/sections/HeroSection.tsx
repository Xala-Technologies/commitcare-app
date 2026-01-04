import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CheckCircle, Scale } from "lucide-react";
import heroBg from "@/assets/hero/hero-bg.jpg";

export function HeroSection() {
  return (
    <Fragment>
    <section 
      className="relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden z-0"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlay for better text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-hero/70 via-hero/60 to-hero/80"
        aria-hidden="true"
      />
      
      {/* Content Container */}
      <Container className="relative z-10 w-full">
        <div className="py-12 md:py-16 lg:py-20 xl:py-24">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-[1.1] mb-6 md:mb-8 text-white tracking-tight">
              Trygg omsorg for<br className="hidden sm:block" /> barn og unge
            </h1>
            
            {/* Description */}
            <p className="text-white/95 text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl leading-relaxed font-medium">
              Vi tilbyr profesjonell omsorg og støtte for barn, unge og familier med fokus på trygghet, struktur og tett oppfølging.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8">
              <Button 
                asChild
                variant="hero" 
                size="lg" 
                className="px-8 py-6 min-h-[52px] text-base md:text-lg bg-hero-button hover:bg-hero-button/90 text-black rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 font-semibold"
              >
                <Link to="/kontakt">Ta kontakt</Link>
              </Button>
              <Button 
                asChild
                variant="heroOutline" 
                size="lg" 
                className="px-8 py-6 min-h-[52px] text-base md:text-lg border-2 border-white bg-transparent hover:bg-white/10 hover:border-white text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300 font-semibold"
              >
                <Link to="/tjenester">Våre tjenester</Link>
              </Button>
            </div>
            
            {/* Tagline */}
            <p className="text-white/80 text-sm md:text-base font-medium mb-8 md:mb-0">
              Trygghet, struktur og tett oppfølging
            </p>
          </div>
        </div>
      </Container>
    </section>
    
    {/* Feature Strip - Overlapping (outside hero section for proper z-index) */}
    <div className="relative -mt-[20px] md:-mt-[90px] lg:-mt-[100px] z-40 pointer-events-none bg-transparent">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 lg:px-12 pointer-events-none bg-transparent">
        <div className="flex flex-col md:flex-row overflow-hidden ml-0 md:ml-[6%] pointer-events-auto">
          <div className="relative bg-primary px-6 py-8 md:px-12 md:py-10 flex items-start gap-4 md:gap-6 w-full md:w-[360px]">
            <div 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0"
              data-feature="1"
            >
              <Scale className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-primary-foreground text-sm md:text-base leading-relaxed">
                Barnevernsloven § 5-1 og frivillige tiltak etter §§ 3-2 og 3-4
              </p>
            </div>
          </div>
          <div className="h-px md:h-auto md:w-px bg-white"></div>
          <div className="relative bg-primary px-6 py-8 md:px-12 md:py-10 flex items-start gap-4 md:gap-6 w-full md:w-[360px]">
            <div 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0"
              data-feature="2"
            >
              <CheckCircle className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-primary-foreground text-sm md:text-base leading-relaxed">
                Målgruppe: Barn og ungdom 12-18 år
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
