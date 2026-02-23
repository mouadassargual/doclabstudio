import { motion } from "framer-motion";
import { ClipboardCheck, Lightbulb, Film, Send, BarChart3 } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, num: "01", title: "Audit complet", desc: "Analyse approfondie de votre présence digitale actuelle et de vos concurrents." },
  { icon: Lightbulb, num: "02", title: "Stratégie sur mesure", desc: "Plan d'action personnalisé avec calendrier éditorial et axes de communication." },
  { icon: Film, num: "03", title: "Création de contenu", desc: "Production de vidéos, visuels et textes professionnels prêts à publier." },
  { icon: Send, num: "04", title: "Publication & gestion", desc: "Diffusion optimisée sur tous vos canaux avec gestion de communauté." },
  { icon: BarChart3, num: "05", title: "Suivi & optimisation", desc: "Rapports mensuels détaillés et ajustements pour maximiser vos résultats." },
];

const ProcessSection = () => (
  <section className="py-24 md:py-32 bg-section-alt" id="processus">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Comment ça marche
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Un processus{" "}
          <span className="text-gradient">simple et transparent</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          De l'audit initial à l'optimisation continue, nous gérons tout pour vous.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative flex gap-6 items-start mb-8 last:mb-0"
          >
            {/* Timeline line */}
            {i < steps.length - 1 && (
              <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent" />
            )}

            {/* Icon */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-hero-gradient flex items-center justify-center shrink-0 shadow-glow">
              <step.icon className="text-primary-foreground" size={20} />
            </div>

            {/* Content */}
            <div className="flex-1 bg-background rounded-2xl p-6 border border-border hover:shadow-glow transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-primary/40 uppercase tracking-wider">Étape {step.num}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
