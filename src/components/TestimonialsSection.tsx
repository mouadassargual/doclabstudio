import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import doctorFemale from "@/assets/doctor-female.jpg";
import doctorMale from "@/assets/doctor-male.jpg";
import doctorFemale2 from "@/assets/doctor-female2.jpg";

const testimonials = [
  {
    name: "Dr. Amina Benali",
    role: "Dermatologue — Casablanca",
    text: "Depuis que DOCLAB gère ma présence digitale, mes consultations ont augmenté de 60%. Les patients arrivent déjà informés et en confiance. Un investissement qui vaut chaque dirham.",
    img: doctorFemale,
    stars: 5,
  },
  {
    name: "Dr. Karim Idrissi",
    role: "Chirurgien orthopédiste — Rabat",
    text: "Je ne pensais pas que le contenu digital pouvait transformer ma pratique à ce point. DOCLAB a créé une stratégie claire et professionnelle. En 3 mois, ma visibilité a triplé.",
    img: doctorMale,
    stars: 5,
  },
  {
    name: "Dr. Sarah Tazi",
    role: "Pédiatre — Marrakech",
    text: "L'équipe DOCLAB comprend vraiment le monde médical. Le contenu est toujours pertinent, éthique et engageant. Les parents me contactent en citant mes vidéos.",
    img: doctorFemale2,
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32" id="temoignages">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
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

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group bg-card rounded-2xl p-7 border border-border hover:shadow-glow transition-all duration-300 flex flex-col"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={16} className="fill-secondary text-secondary" />
              ))}
            </div>

            {/* Quote */}
            <Quote size={24} className="text-primary/10 mb-3" />
            <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <img
                src={t.img}
                alt={t.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-primary/10"
              />
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
