import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/212659787789";

const FinalCTA = () => (
  <section className="py-20 md:py-28 bg-section-alt">
    <div className="container">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à devenir la{" "}
            <span className="text-gradient">référence digitale</span>{" "}
            de votre spécialité ?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Rejoignez les médecins qui ont fait le choix d'une présence digitale stratégique,
            éthique et efficace. Votre diagnostic gratuit vous attend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <p className="text-muted-foreground text-sm mt-6">
            +212 659 787 789 — Réponse sous 24h
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FinalCTA;
