import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const specialties = ["Dermatologue", "Cardiologue", "Chirurgien", "Pédiatre", "Gynécologue", "Ophtalmologue", "Généraliste", "Orthopédiste"];

const testimonials = [
  {
    name: "Dr. Amina Benali",
    role: "Dermatologue — Casablanca",
    text: "Depuis que DOCLAB gère ma présence digitale, mes consultations ont augmenté de 60%. Les patients arrivent déjà informés et en confiance. Un investissement qui vaut chaque dirham.",
    initials: "AB",
    gradient: "from-[#0b4674] to-[#2198b5]",
    stars: 5,
  },
  {
    name: "Dr. Karim Idrissi",
    role: "Chirurgien orthopédiste — Rabat",
    text: "Je ne pensais pas que le contenu digital pouvait transformer ma pratique à ce point. DOCLAB a créé une stratégie claire et professionnelle. En 3 mois, ma visibilité a triplé.",
    initials: "KI",
    gradient: "from-[#2198b5] to-[#0b4674]",
    stars: 5,
  },
  {
    name: "Dr. Sarah Tazi",
    role: "Pédiatre — Marrakech",
    text: "L'équipe DOCLAB comprend vraiment le monde médical. Le contenu est toujours pertinent, éthique et engageant. Les parents me contactent en citant mes vidéos.",
    initials: "ST",
    gradient: "from-[#0b4674] to-[#1a7fa8]",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 bg-white" id="temoignages">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-6"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Témoignages
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Ils ont choisi{" "}
          <span className="text-gradient">DOCLAB</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Découvrez ce que nos médecins clients disent de notre accompagnement.
        </p>
      </motion.div>

      {/* Specialties ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-2 mb-16"
      >
        {specialties.map((s, i) => (
          <span key={i} className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium border border-primary/10">
            {s}
          </span>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group bg-white rounded-2xl p-7 border border-border hover:shadow-glow hover:border-primary/20 transition-all duration-300 flex flex-col relative overflow-hidden"
          >
            {/* Gradient top accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient}`} />

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote icon */}
            <Quote size={28} className="text-primary/10 mb-3" />
            <p className="text-foreground text-sm leading-relaxed flex-1 mb-6 italic">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              {/* Avatar with initials */}
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent border border-primary/10">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />)}
          </div>
          <span className="text-sm font-medium text-foreground">Note moyenne 5/5 sur +80 médecins accompagnés</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
