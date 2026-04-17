import { motion } from "framer-motion";
import { SearchX, EyeOff, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: SearchX,
    title: "Invisibilité en ligne",
    desc: "80% des patients recherchent un médecin en ligne avant de prendre rendez-vous. Si vous n'y êtes pas, ils iront ailleurs.",
    stat: "80%",
    color: "from-red-500/10 to-red-500/5",
    iconColor: "text-red-500",
  },
  {
    icon: EyeOff,
    title: "Image non maîtrisée",
    desc: "Sans stratégie, votre image digitale est laissée au hasard des avis et des résultats de recherche.",
    stat: "0 stratégie",
    color: "from-orange-500/10 to-orange-500/5",
    iconColor: "text-orange-500",
  },
  {
    icon: TrendingDown,
    title: "Contenu inexistant",
    desc: "Pas de contenu = pas de crédibilité. Vos confrères qui publient captent l'attention et la confiance.",
    stat: "0 contenu",
    color: "from-yellow-500/10 to-yellow-500/5",
    iconColor: "text-yellow-600",
  },
  {
    icon: Users,
    title: "Concurrence digitale",
    desc: "De plus en plus de médecins investissent dans leur présence en ligne. Chaque jour perdu est une opportunité manquée.",
    stat: "+200%",
    color: "from-primary/10 to-primary/5",
    iconColor: "text-primary",
  },
];

const ProblemSection = () => (
  <section className="py-24 md:py-32 bg-white" id="probleme">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-red-100">
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
            className={`group bg-gradient-to-br ${p.color} rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-glow transition-all duration-300 bg-white`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                <p.icon size={20} className={p.iconColor} />
              </div>
              <span className="font-display text-lg font-bold text-muted-foreground/50">
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
