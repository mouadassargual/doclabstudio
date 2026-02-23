import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Play, CheckCircle2 } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.jpg";

const WHATSAPP_URL = "https://wa.me/212659787789?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

const benefits = [
  "Stratégie de contenu sur mesure",
  "Conformité déontologique garantie",
  "Résultats mesurables dès 30 jours",
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background decorations */}
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[80px]" />
      <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-primary/20" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-secondary/15" />
    </div>

    <div className="container relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/10 text-accent-foreground text-sm font-medium mb-8">
              <Play size={14} className="text-primary" />
              L'agence digitale dédiée aux médecins
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6"
          >
            Attirez plus de patients grâce à une{" "}
            <span className="text-gradient">présence digitale puissante</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
          >
            DOCLAB crée votre stratégie de contenu digital — vidéos, réseaux sociaux, 
            image de marque — pour faire de vous la référence dans votre spécialité médicale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-col gap-3 mb-10"
          >
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                <CheckCircle2 size={18} className="text-secondary shrink-0" />
                {b}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="lg" className="h-14 px-8 text-base" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Réserver un appel stratégique
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" className="h-14 px-8 text-base" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={18} />
                Écrire sur WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-muted-foreground mt-4"
          >
            ✓ Consultation gratuite · ✓ Sans engagement · ✓ Réponse sous 24h
          </motion.p>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-glow-strong">
            <img
              src={heroDoctor}
              alt="Médecin professionnel avec présence digitale"
              className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </div>

          {/* Floating stat cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 sm:left-4 glass-card rounded-2xl p-4 shadow-glow"
          >
            <p className="text-2xl font-display font-bold text-primary">+150%</p>
            <p className="text-xs text-muted-foreground">Visibilité en moyenne</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -top-2 -right-2 sm:right-4 glass-card rounded-2xl p-4 shadow-glow"
          >
            <p className="text-2xl font-display font-bold text-secondary">+80</p>
            <p className="text-xs text-muted-foreground">Médecins accompagnés</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
