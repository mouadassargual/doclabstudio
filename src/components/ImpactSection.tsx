import { motion } from "framer-motion";
import { TrendingUp, Users, Eye, Award } from "lucide-react";

const stats = [
  { icon: Eye, value: "+150%", label: "Visibilité en ligne", desc: "Augmentation moyenne de la visibilité sur Google et les réseaux sociaux." },
  { icon: Users, value: "+40%", label: "Nouveaux patients", desc: "Croissance du nombre de patients provenant des canaux digitaux." },
  { icon: TrendingUp, value: "3x", label: "Engagement", desc: "Multiplication des interactions avec votre contenu professionnel." },
  { icon: Award, value: "#1", label: "Positionnement", desc: "Devenir la référence dans votre spécialité au niveau local." },
];

const ImpactSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden" id="resultats">
    {/* Background */}
    <div className="absolute inset-0 bg-hero-gradient opacity-[0.03]" />
    
    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Résultats concrets
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Des résultats qui{" "}
          <span className="text-gradient">parlent d'eux-mêmes</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Nos clients constatent des améliorations significatives dès les premières semaines.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center bg-card rounded-2xl p-8 border border-border hover:shadow-glow transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5">
              <s.icon className="text-primary-foreground" size={24} />
            </div>
            <p className="font-display text-4xl font-bold text-gradient mb-2">{s.value}</p>
            <p className="font-semibold text-foreground mb-1">{s.label}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
