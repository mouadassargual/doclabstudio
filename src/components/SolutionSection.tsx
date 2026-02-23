import { motion } from "framer-motion";
import { FileVideo, Target, Share2, UserCheck, Award, Palette } from "lucide-react";
import solutionVisual from "@/assets/solution-visual.jpg";

const services = [
  { icon: Target, title: "Stratégie de contenu", desc: "Plan éditorial personnalisé selon votre spécialité et vos objectifs de croissance." },
  { icon: FileVideo, title: "Production vidéo", desc: "Vidéos éducatives et professionnelles qui renforcent votre crédibilité." },
  { icon: Share2, title: "Gestion réseaux sociaux", desc: "Publication et gestion complète de vos profils sur Instagram, TikTok, LinkedIn." },
  { icon: Palette, title: "Branding médical", desc: "Identité visuelle cohérente et professionnelle qui inspire confiance." },
  { icon: UserCheck, title: "Image professionnelle", desc: "Optimisation de votre e-réputation et positionnement d'expert." },
  { icon: Award, title: "Accompagnement dédié", desc: "Un interlocuteur unique qui comprend le monde médical et ses contraintes." },
];

const SolutionSection = () => (
  <section className="py-24 md:py-32" id="services">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
            Nos services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Tout ce qu'il faut pour{" "}
            <span className="text-gradient">dominer votre marché digital</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            DOCLAB combine expertise en marketing digital et connaissance du secteur médical 
            pour créer une stratégie sur mesure qui attire, engage et convertit vos futurs patients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent rounded-xl p-4 text-center">
              <p className="font-display text-3xl font-bold text-primary">+80</p>
              <p className="text-xs text-muted-foreground mt-1">Médecins accompagnés</p>
            </div>
            <div className="bg-accent rounded-xl p-4 text-center">
              <p className="font-display text-3xl font-bold text-secondary">98%</p>
              <p className="text-xs text-muted-foreground mt-1">Taux de satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-glow">
            <img
              src={solutionVisual}
              alt="Analytics et stratégie digitale pour médecins"
              className="w-full h-[350px] lg:h-[420px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 bg-hero-gradient text-primary-foreground rounded-2xl p-5 shadow-glow-strong">
            <p className="font-display text-xl font-bold">+150%</p>
            <p className="text-xs opacity-90">Visibilité moyenne</p>
          </div>
        </motion.div>
      </div>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative bg-card rounded-2xl p-7 border border-border hover:border-primary/20 hover:shadow-glow transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <s.icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
