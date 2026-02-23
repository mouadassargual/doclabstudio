import AnimatedSection from "@/components/AnimatedSection";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Amina Benali",
    role: "Dermatologue — Casablanca",
    text: "Grâce à MedPresence, mes vidéos éducatives sur les soins de peau ont multiplié mes consultations par 3 en six mois. Une approche professionnelle et éthique.",
  },
  {
    name: "Dr. Karim Idrissi",
    role: "Chirurgien orthopédiste — Rabat",
    text: "Je n'aurais jamais pensé que le contenu digital pouvait avoir un tel impact. Mes patients arrivent déjà informés et en confiance. Un vrai gain de temps.",
  },
  {
    name: "Dr. Sarah Tazi",
    role: "Pédiatre — Marrakech",
    text: "L'équipe a compris ma spécialité et a créé un contenu qui rassure les parents. Ma visibilité locale a considérablement augmenté.",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28 bg-section-alt" id="temoignages">
    <div className="container">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Témoignages</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils nous font{" "}
            <span className="text-gradient">confiance</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-background rounded-xl p-6 border border-border h-full flex flex-col">
              <Quote className="text-primary/20 mb-4" size={32} />
              <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
