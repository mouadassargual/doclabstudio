import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Est-ce conforme aux règles déontologiques médicales ?",
    a: "Absolument. Toute notre approche respecte strictement le code de déontologie médicale. Nous créons du contenu éducatif et informatif — jamais de publicité agressive ou de promesses irréalistes. Chaque contenu est validé avant publication.",
  },
  {
    q: "Dois-je apparaître en vidéo ?",
    a: "Ce n'est pas obligatoire, mais c'est fortement recommandé. Votre visage crée de la confiance et de l'authenticité. Si vous préférez ne pas apparaître, nous avons des formats alternatifs tout aussi efficaces (infographies, voix-off, etc.).",
  },
  {
    q: "Est-ce adapté à ma spécialité ?",
    a: "Oui, nous travaillons avec toutes les spécialités : dermatologie, pédiatrie, chirurgie, médecine générale, ophtalmologie, cardiologie, et bien d'autres. Notre stratégie est toujours personnalisée selon votre domaine.",
  },
  {
    q: "Quels résultats puis-je attendre et en combien de temps ?",
    a: "Les premiers résultats sont visibles dès 4 à 6 semaines : augmentation de l'engagement, plus de visibilité sur les moteurs de recherche. En 3 à 6 mois, vous constatez une hausse significative des demandes de rendez-vous.",
  },
  {
    q: "Combien coûtent vos services ?",
    a: "Nous proposons des formules adaptées à chaque budget et objectif. Contactez-nous sur WhatsApp pour un devis personnalisé et gratuit. Nos tarifs sont transparents et sans surprise.",
  },
  {
    q: "Je n'ai pas le temps de m'en occuper, comment ça se passe ?",
    a: "C'est justement notre valeur ajoutée : nous gérons tout de A à Z. Après un premier échange pour comprendre vos objectifs, nous nous occupons de la stratégie, de la création et de la publication. Votre temps d'implication est minimal.",
  },
];

const FAQSection = () => (
  <section className="py-24 md:py-32 bg-section-alt" id="faq">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Vos questions,{" "}
          <span className="text-gradient">nos réponses</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-2xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background border border-border rounded-2xl px-6 data-[state=open]:shadow-glow data-[state=open]:border-primary/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-medium text-[15px] hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
