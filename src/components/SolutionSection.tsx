import AnimatedSection from "@/components/AnimatedSection";
import { FileVideo, Target, Share2, UserCheck, Award } from "lucide-react";

const solutions = [
  { icon: Target, title: "Stratégie personnalisée", desc: "Un plan de contenu adapté à votre spécialité, vos objectifs et votre patientèle cible." },
  { icon: FileVideo, title: "Vidéos éducatives", desc: "Des contenus vidéo professionnels qui démontrent votre expertise et rassurent vos patients." },
  { icon: Share2, title: "Gestion des réseaux sociaux", desc: "Publication régulière et cohérente sur les plateformes où vos patients sont présents." },
  { icon: UserCheck, title: "Image professionnelle", desc: "Optimisation de votre image digitale pour refléter votre sérieux et votre compétence." },
  { icon: Award, title: "Positionnement d'expert", desc: "Devenez la référence dans votre spécialité grâce à un contenu à forte valeur ajoutée." },
];

const SolutionSection = () => (
  <section className="py-20 md:py-28" id="solution">
    <div className="container">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Notre approche</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Une stratégie de contenu{" "}
            <span className="text-gradient">pensée pour les médecins</span>
          </h2>
          <p className="text-muted-foreground">
            Nous combinons expertise médicale et marketing éthique pour construire votre autorité digitale.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {solutions.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="group text-center p-8 rounded-2xl hover:bg-accent transition-colors duration-300">
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <s.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
