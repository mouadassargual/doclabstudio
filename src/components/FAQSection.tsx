import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/212680780286?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

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
    a: "Oui, nous travaillons avec toutes les spécialités : dermatologie, pédiatrie, chirurgie, médecine générale, ophtalmologie, cardiologie, gynécologie, et bien d'autres. Notre stratégie est toujours personnalisée selon votre domaine et votre public cible.",
  },
  {
    q: "Quels résultats puis-je attendre et en combien de temps ?",
    a: "Les premiers résultats sont visibles dès 4 à 6 semaines : augmentation de l'engagement, plus de visibilité sur les moteurs de recherche. En 3 à 6 mois, vous constatez une hausse significative des demandes de rendez-vous (+40% en moyenne).",
  },
  {
    q: "Combien coûtent vos services ?",
    a: "Nous proposons des formules adaptées à chaque budget et objectif. Contactez-nous sur WhatsApp pour un devis personnalisé et gratuit. Nos tarifs sont transparents et sans surprise — aucun frais caché.",
  },
  {
    q: "Je n'ai pas le temps de m'en occuper, comment ça se passe ?",
    a: "C'est justement notre valeur ajoutée : nous gérons tout de A à Z. Après un premier échange pour comprendre vos objectifs, nous nous occupons de la stratégie, de la création et de la publication. Votre temps d'implication est minimal — moins de 2h par mois.",
  },
  {
    q: "Puis-je arrêter le service à tout moment ?",
    a: "Oui, nos contrats sont sans engagement longue durée. Vous restez libre de suspendre ou d'arrêter votre abonnement à tout moment, avec un préavis d'un mois. Nous préférons vous garder grâce à nos résultats, pas à une clause contractuelle.",
  },
  {
    q: "Comment se passe la collaboration au quotidien ?",
    a: "Vous avez un interlocuteur dédié joignable via WhatsApp. Chaque mois, nous partageons un rapport de performance détaillé. Vous validez les contenus avant publication. C'est une collaboration fluide, transparente et sans surprise.",
  },
];

const FAQSection = () => (
  <section className="py-24 md:py-32 bg-white" id="faq">
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
        <p className="text-muted-foreground text-lg">
          Vous ne trovez pas votre réponse ? Écrivez-nous directement sur WhatsApp.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.slice(0, 4).map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-border rounded-2xl px-6 data-[state=open]:shadow-glow data-[state=open]:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-[15px] hover:no-underline py-5 hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3 mb-8">
            {faqs.slice(4).map((faq, i) => (
              <AccordionItem
                key={i + 4}
                value={`faq-${i + 4}`}
                className="bg-white border border-border rounded-2xl px-6 data-[state=open]:shadow-glow data-[state=open]:border-primary/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-medium text-[15px] hover:no-underline py-5 hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions box */}
          <div className="rounded-2xl bg-hero-gradient p-6 text-white text-center">
            <p className="font-display font-bold text-lg mb-2">Une autre question ?</p>
            <p className="text-white/80 text-sm mb-4">Notre équipe répond en moins de 24h sur WhatsApp.</p>
            <Button className="bg-white text-primary hover:bg-white/90 font-semibold w-full" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} className="mr-2" />
                Poser ma question
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default FAQSection;
