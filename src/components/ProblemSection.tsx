import { motion } from "framer-motion";
import { SearchX, EyeOff, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: SearchX,
    title: "Invisibilité en ligne",
    desc: "80% des patients recherchent un médecin en ligne avant de prendre rendez-vous. Si vous n'y êtes pas, ils iront ailleurs.",
    stat: "80%",
  },
  {
    icon: EyeOff,
    title: "Image non maîtrisée",
    desc: "Sans stratégie, votre image digitale est laissée au hasard des avis et des résultats de recherche.",
    stat: "0",
  },
  {
    icon: TrendingDown,
    title: "Contenu inexistant",
    desc: "Pas de contenu = pas de crédibilité. Vos confrères qui publient captent l'attention et la confiance.",
    stat: "—",
  },
  {
    icon: Users,
    title: "Concurrence digitale",
    desc: "De plus en plus de médecins investissent dans leur présence en ligne. Chaque jour perdu est une opportunité manquée.",
    stat: "↑",
  },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-section-alt" id="probleme">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-wider mb-4">
          Le problème
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Pendant que vous soignez,{" "}
          <span className="text-gradient">vos patients vous cherchent en ligne</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Et dans la majorité des cas, ils ne vous trouvent pas.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group bg-background rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center group-hover:bg-hero-gradient group-hover:text-primary-foreground transition-all duration-300">
                <p.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="font-display text-2xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                {p.stat}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
