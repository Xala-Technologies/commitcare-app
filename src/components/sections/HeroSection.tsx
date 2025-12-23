import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Star, Clock, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import familyCare from "@/assets/family-care.jpg";
import caregiver1 from "@/assets/caregiver-1.jpg";
import caregiver2 from "@/assets/caregiver-2.jpg";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-hero/60" />
      
      <Container className="relative z-10 py-10 md:py-14 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center gap-2 font-semibold">
              <span className="text-primary-foreground">+</span> COMMIT CARE
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight mb-5 md:mb-7 text-white tracking-tight">
              Trygg omsorg for<br />barn og unge
            </h1>
            <p className="text-white text-lg md:text-xl mb-7 md:mb-10 max-w-md leading-relaxed font-medium">
              Vi tilbyr profesjonell omsorg og støtte for barn, unge og familier med fokus på trygghet, struktur og tett oppfølging.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button 
                asChild
                variant="hero" 
                size="default" 
                className="px-6 min-h-[44px] bg-hero-button hover:bg-hero-button/90 text-black rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              >
                <Link to="/kontakt">Ta kontakt</Link>
              </Button>
              <Button 
                asChild
                variant="heroOutline" 
                size="default" 
                className="px-6 min-h-[44px] border-2 border-white bg-transparent hover:bg-white/20 hover:border-white/50 text-white rounded-full shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105 active:scale-100 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              >
                <Link to="/tjenester">Våre tjenester</Link>
              </Button>
            </div>
            <p className="text-white/80 text-sm md:text-base">
              Trygghet, struktur og tett oppfølging
            </p>
          </div>

          {/* Right Content - Rating Cluster */}
          <div className="hidden lg:flex justify-end items-end h-full">
            <div className="flex items-center gap-3 bg-hero/40 backdrop-blur-sm rounded-full py-3 px-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-primary-foreground/90 text-sm">4.9 vurdering</span>
              <div className="flex -space-x-2 ml-2">
                {[
                  familyCare,
                  caregiver1,
                  caregiver2,
                  blog1,
                  blog2
                ].map((img, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-foreground/20 flex items-center justify-center flex-shrink-0"
                  >
                    <img 
                      src={img} 
                      alt={`Bruker ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Feature Strip - Overlapping */}
      <div className="absolute bottom-0 left-[18%] translate-y-1/2 z-50 hidden md:block">
        <div className="flex shadow-xl">
          <div className="bg-primary px-12 py-10 flex items-start gap-6 min-w-[360px]">
            <div className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0">
              <Clock className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-primary-foreground font-serif text-2xl mb-2">Kapasitet: 2 plasser</h3>
              <p className="text-primary-foreground/70 text-base leading-relaxed">Tilgjengelig for<br />barn og unge</p>
            </div>
          </div>
          <div className="w-px bg-white"></div>
          <div className="bg-primary px-12 py-10 flex items-start gap-6 min-w-[360px]">
            <div className="w-14 h-14 rounded-full border border-primary-foreground/30 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-primary-foreground font-serif text-2xl mb-2">Tett voksenoppfølging</h3>
              <p className="text-primary-foreground/70 text-base leading-relaxed">Kontinuerlig støtte<br />og oppfølging</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
