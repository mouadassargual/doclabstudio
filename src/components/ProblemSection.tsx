import AnimatedSection from "@/components/AnimatedSection";
import { SearchX, EyeOff, Users, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: SearchX,
    title: "Patients en ligne",
    desc: "Vos futurs patients vous cherchent sur Google et les réseaux sociaux — vous y êtes introuvable.",
  },
  {
    icon: EyeOff,
    title: "Manque de visibilité",
    desc: "Sans présence digitale, votre expertise reste invisible face à la concurrence.",
  },
  {
    icon: TrendingDown,
    title: "Absence de stratégie",
    desc: "Publier sans stratégie ne génère ni engagement, ni confiance, ni patients.",
  },
  {
    icon: Users,
    title: "Concurrence accrue",
    desc: "De plus en plus de confrères investissent le digital — ne restez pas en retrait.",
  },
];

const ProblemSection = () => (
  <section className="py-20 md:py-28 bg-section-alt" id="probleme">
    <div className="container">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Le constat</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Le monde médical a changé.{" "}
            <span className="text-gradient">Votre visibilité aussi doit évoluer.</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((p, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="bg-background rounded-xl p-6 h-full border border-border hover:shadow-glow transition-shadow duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                <p.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
