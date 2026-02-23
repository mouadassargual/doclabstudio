import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/212659787789?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

const FinalCTA = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-hero-gradient opacity-[0.04]" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px]" />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 text-accent-foreground text-sm font-medium mb-8">
          <Phone size={14} className="text-primary" />
          Consultation gratuite & sans engagement
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Prêt à devenir le{" "}
          <span className="text-gradient">médecin de référence</span>{" "}
          dans votre ville ?
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Rejoignez les +80 médecins qui ont fait confiance à DOCLAB pour transformer 
          leur présence digitale et développer leur patientèle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button variant="hero" size="lg" className="h-14 px-10 text-base" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Réserver un appel stratégique
              <ArrowRight className="ml-2" size={18} />
            </a>
          </Button>
          <Button variant="whatsapp" size="lg" className="h-14 px-10 text-base" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} />
              Écrire sur WhatsApp
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span>✓ Gratuit</span>
          <span>✓ Sans engagement</span>
          <span>✓ Réponse en 24h</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
