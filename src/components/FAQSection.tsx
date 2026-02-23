import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce conforme aux règles déontologiques médicales ?",
    a: "Absolument. Toute notre approche est conçue dans le respect strict du code de déontologie médicale. Nous privilégions le contenu éducatif, informatif et éthique — jamais de publicité agressive ou de promesses irréalistes.",
  },
  {
    q: "Dois-je apparaître en vidéo ?",
    a: "Ce n'est pas obligatoire, mais fortement recommandé. Votre présence en vidéo renforce la confiance et l'authenticité. Nous pouvons aussi créer des contenus visuels sans votre apparition directe si vous le préférez.",
  },
  {
    q: "Est-ce adapté à ma spécialité ?",
    a: "Oui. Notre approche est personnalisée pour chaque spécialité médicale : dermatologie, pédiatrie, chirurgie, médecine générale, ophtalmologie, etc. Nous adaptons le contenu à votre domaine et à votre patientèle cible.",
  },
  {
    q: "Combien de temps avant de voir des résultats ?",
    a: "Les premiers résultats sont généralement visibles après 4 à 8 semaines de publication régulière. La construction d'une autorité digitale solide se fait progressivement, avec un impact croissant sur le long terme.",
  },
  {
    q: "Que comprend le diagnostic gratuit ?",
    a: "Le diagnostic inclut une analyse de votre présence en ligne actuelle, l'identification des opportunités pour votre spécialité, et des recommandations concrètes pour renforcer votre visibilité digitale.",
  },
];

const FAQSection = () => (
  <section className="py-20 md:py-28" id="faq">
    <div className="container">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions{" "}
            <span className="text-gradient">fréquentes</span>
          </h2>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-glow transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
