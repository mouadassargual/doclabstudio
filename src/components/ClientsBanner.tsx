import { motion } from "framer-motion";

const specialties = [
  "🫀 Cardiologie", "🧒 Pédiatrie", "🦷 Dentisterie", "👁️ Ophtalmologie",
  "🦴 Orthopédie", "🧠 Neurologie", "👩‍⚕️ Gynécologie", "🩺 Médecine générale",
  "💊 Dermatologie", "🔬 Chirurgie", "🧬 Endocrinologie", "🫁 Pneumologie",
];

const ClientsBanner = () => (
  <section className="py-14 border-b border-border bg-white overflow-hidden">
    <div className="container mb-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest"
      >
        Toutes spécialités médicales accompagnées
      </motion.p>
    </div>

    {/* Scrolling ticker */}
    <div className="relative">
      <div className="flex overflow-hidden gap-4">
        <motion.div
          className="flex gap-4 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, ease: "linear", repeat: Infinity }}
        >
          {[...specialties, ...specialties].map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent border border-primary/10 whitespace-nowrap text-sm font-medium text-foreground shrink-0"
            >
              {s}
            </div>
          ))}
        </motion.div>
      </div>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
    </div>
  </section>
);

export default ClientsBanner;
