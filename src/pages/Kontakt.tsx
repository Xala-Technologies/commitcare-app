import { Layout } from "@/components/Layout";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { publicSiteContent } from "@/lib/publicSiteContent";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  submitContactForm,
  type ContactFormData,
} from "@/lib/api/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Clock,
  Send,
  ArrowRight,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import { useState } from "react";
import contactHero from "@/assets/pages/kontakt/caregiver-2.jpg";
import { Link } from "react-router-dom";

type FormStatus = "idle" | "submitting" | "success" | "error";

const Kontakt = () => {
  const content = publicSiteContent.kontakt;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");
    setStatusMessage("");

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setStatus("success");
        setStatusMessage(result.message);
        reset();
      } else {
        setStatus("error");
        setStatusMessage(result.message);
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("En uventet feil oppstod. Vennligst prøv igjen senere.");
    }
  };

  // Google Maps embed URL for the address (no API key needed for basic embed)
  const mapAddress = encodeURIComponent(content.kontaktinfo.besoksadresse);
  const mapEmbedUrl = `https://www.google.com/maps?q=${mapAddress}&output=embed`;

  return (
    <Layout>
      <SEO
        title="Kontakt oss"
        description={content.hero.lead}
        path="/kontakt"
      />

      {/* A) Hero Section - Enhanced */}
      <section
        className="relative min-h-[35vh] md:min-h-[45vh] flex items-center pb-10 md:pb-12"
        style={{
          backgroundImage: `url(${contactHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-hero/60" />

        <Container className="relative z-10 py-10 md:py-14 lg:py-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-hero/40 backdrop-blur-sm rounded-full py-2 md:py-3 px-4 md:px-6 mb-6 md:mb-8 border border-white/20">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-white text-sm md:text-base font-semibold">
                Vi er her for å hjelpe deg
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-tight mb-4 md:mb-6 text-white tracking-tight">
              {content.hero.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              {content.hero.lead}
            </p>
          </div>
        </Container>
      </section>

      {/* B) Kontaktkort (grid) - Compact */}
      <Section variant="default">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-3 md:mb-4 flex items-center justify-center gap-2 font-semibold">
              <span>+</span> KONTAKTINFO
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Kontaktinformasjon
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {/* Telefon */}
            <div className="bg-card-token rounded-xl p-5 md:p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2">
                Telefon
              </h3>
              <a
                href={`tel:${content.kontaktinfo.telefon.replace(/\s/g, "")}`}
                className="text-primary-icon hover:text-primary transition-colors text-base font-medium block"
              >
                {content.kontaktinfo.telefon}
              </a>
            </div>

            {/* E-post */}
            <div className="bg-card-token rounded-xl p-5 md:p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2">
                E-post
              </h3>
              <a
                href={`mailto:${content.kontaktinfo.epost}`}
                className="text-primary-icon hover:text-primary transition-colors text-base font-medium break-all block"
              >
                {content.kontaktinfo.epost}
              </a>
            </div>

            {/* Postadresse */}
            <div className="bg-card-token rounded-xl p-5 md:p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2">
                Postadresse
              </h3>
              <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                {content.kontaktinfo.postadresse}
              </p>
            </div>

            {/* Besøksadresse */}
            <div className="bg-card-token rounded-xl p-5 md:p-6 border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Building2 className="w-6 h-6 md:w-7 md:h-7 text-primary-icon" />
              </div>
              <h3 className="font-serif text-base md:text-lg font-semibold text-foreground mb-2">
                Besøksadresse
              </h3>
              <p className="text-foreground/75 text-sm md:text-base leading-relaxed">
                {content.kontaktinfo.besoksadresse}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* C) Kontaktskjema og Kart - Enhanced Side by side */}
      <Section variant="light">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Kontaktskjema - Enhanced */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 md:mb-8">
                <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-3 flex items-center gap-2 font-semibold">
                  <MessageSquare className="w-4 h-4" />
                  <span>SEND MELDING</span>
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3">
                  Send oss en melding
                </h3>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-3">
                  Fyll ut skjemaet under, så tar vi kontakt så snart som mulig
                </p>
                <div className="flex items-center gap-2 text-foreground/75 text-sm md:text-base">
                  <Zap className="w-4 h-4 text-yellow-500" />
                  <span>Vi svarer vanligvis innen 24 timer</span>
                </div>
              </div>

              <div className="bg-card-token rounded-2xl p-8 md:p-10 border border-border/50 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Navn */}
                  <div>
                    <Label htmlFor="name" className="text-foreground text-base md:text-lg font-medium mb-2 block">
                      Navn <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      className="min-h-[52px] text-base border-2 focus:border-primary-icon transition-colors"
                      disabled={status === "submitting"}
                      placeholder="Ditt fulle navn"
                    />
                    {errors.name && (
                      <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* E-post */}
                  <div>
                    <Label htmlFor="email" className="text-foreground text-base md:text-lg font-medium mb-2 block">
                      E-post <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="min-h-[52px] text-base border-2 focus:border-primary-icon transition-colors"
                      disabled={status === "submitting"}
                      placeholder="din.epost@example.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Telefon (valgfri) */}
                  <div>
                    <Label htmlFor="phone" className="text-foreground text-base md:text-lg font-medium mb-2 block">
                      Telefon (valgfri)
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className="min-h-[52px] text-base border-2 focus:border-primary-icon transition-colors"
                      disabled={status === "submitting"}
                      placeholder="+47 12 34 56 78"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Melding */}
                  <div>
                    <Label htmlFor="message" className="text-foreground text-base md:text-lg font-medium mb-2 block">
                      Melding <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className="min-h-[160px] text-base border-2 focus:border-primary-icon transition-colors resize-none"
                      disabled={status === "submitting"}
                      placeholder="Skriv din melding her..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-destructive flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* Status Message */}
                  {statusMessage && (
                    <div
                      className={`flex items-start gap-3 p-4 rounded-lg border-2 ${
                        status === "success"
                          ? "bg-green-50 text-green-900 border-green-300"
                          : "bg-destructive/10 text-destructive border-destructive/30"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm md:text-base font-medium">{statusMessage}</p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full min-h-[56px] bg-primary-icon hover:bg-primary-icon/90 text-white hover:text-white shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-0.5 active:scale-100 active:translate-y-0 transition-all duration-300 ease-in-out text-base font-semibold group"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sender...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send melding
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Kart - Enhanced */}
            <div className="order-1 lg:order-2">
              <div className="mb-6 md:mb-8">
                <p className="text-primary-icon text-sm md:text-base tracking-wider uppercase mb-3 flex items-center gap-2 font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>FINN OSS</span>
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3">
                  Besøk oss
                </h3>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed mb-4">
                  {content.kontaktinfo.besoksadresse}
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-border/50 hover:shadow-2xl transition-shadow duration-300">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Commit Care lokasjon"
                />
              </div>

              {/* Additional Map Info */}
              <div className="mt-4 text-center">
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto min-h-[44px]"
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Åpne i Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* D) CTA Section - Enhanced */}
      <Section variant="default">
        <Container>
          <div className="bg-gradient-to-br from-hero to-hero/90 rounded-xl md:rounded-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <p className="text-primary-foreground text-sm md:text-base tracking-wider uppercase mb-4 md:mb-5 flex items-center justify-center gap-2 font-semibold">
                <span>+</span> KONTAKT
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-5 md:mb-6 leading-tight">
                Har du spørsmål?
              </h2>
              <p className="text-primary-foreground/90 text-base md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Vi er her for å hjelpe deg. Ta kontakt med oss på telefon, e-post eller send oss en melding. Vi svarer raskt og er tilgjengelige for uforpliktende samtaler.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  variant="hero"
                  size="default"
                  className="px-8 min-h-[52px] text-base font-semibold shadow-lg hover:shadow-xl"
                >
                  <Link to="/tjenester">
                    Se våre tjenester
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="heroOutline"
                  size="default"
                  className="px-8 min-h-[52px] text-base font-semibold border-2"
                >
                  <a href={`tel:${content.kontaktinfo.telefon.replace(/\s/g, "")}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    Ring oss nå
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

export default Kontakt;
