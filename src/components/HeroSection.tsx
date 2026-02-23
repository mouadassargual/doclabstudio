import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/212659787789";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Subtle background pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.06),transparent_60%)]" />
    <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

    <div className="container relative z-10">
      <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Stratégie digitale pour médecins
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Développez votre{" "}
            <span className="text-gradient">notoriété médicale</span>{" "}
            grâce à une présence digitale stratégique.
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl lg:max-w-none">
            La création de contenu éducatif et stratégique vous permet d'éduquer vos patients,
            renforcer leur confiance et développer votre patientèle — en toute conformité avec
            l'éthique médicale.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="lg" className="h-14 px-8 text-base" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Demander un diagnostic gratuit
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" className="h-14 px-8 text-base" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Discuter sur WhatsApp
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default HeroSection;
