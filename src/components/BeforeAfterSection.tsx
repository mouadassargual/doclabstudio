import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";

const befores = [
  "Aucune présence sur les réseaux sociaux",
  "Zéro avis en ligne",
  "Patients trouvés uniquement par bouche-à-oreille",
  "Image digitale non maîtrisée",
  "Concurrents plus visibles que vous",
];

const afters = [
  "Profils professionnels actifs et engageants",
  "Avis positifs et e-réputation solide",
  "Nouveaux patients via Google et Instagram",
  "Image de marque médicale cohérente",
  "Référence n°1 dans votre spécialité locale",
];

const BeforeAfterSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden" style={{
    background: "linear-gradient(180deg, #f0f6fb 0%, #e8f4f9 100%)",
  }}>
    <div className="absolute top-0 left-0 right-0 h-1 bg-hero-gradient" />

    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          La transformation
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Avant DOCLAB{" "}
          <span className="text-gradient">→ Après DOCLAB</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          La différence entre un médecin invisible et un médecin de référence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Before */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <XCircle size={20} className="text-red-500" />
            </div>
            <h3 className="font-display font-bold text-xl text-foreground">Avant DOCLAB</h3>
          </div>
          <div className="space-y-4">
            {befores.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <XCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* After */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="bg-hero-gradient rounded-2xl p-8 shadow-glow-strong relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 50%)" }}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 size={20} className="text-white" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Après DOCLAB</h3>
            </div>
            <div className="space-y-4">
              {afters.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#7dd3f0] shrink-0 mt-0.5" />
                  <p className="text-white/90 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Arrow between */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex justify-center mt-8"
      >
        <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm shadow-glow">
          <ArrowRight size={16} />
          En seulement 30 à 90 jours
        </div>
      </motion.div>
    </div>
  </section>
);

export default BeforeAfterSection;
