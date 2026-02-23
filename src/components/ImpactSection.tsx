import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, TrendingUp, MapPin, Star } from "lucide-react";

const impacts = [
  { icon: ShieldCheck, title: "Crédibilité renforcée", desc: "Un contenu de qualité positionne votre expertise et inspire confiance dès le premier contact digital." },
  { icon: TrendingUp, title: "Confiance accrue", desc: "Les patients qui vous découvrent en ligne arrivent déjà convaincus de votre compétence." },
  { icon: MapPin, title: "Visibilité locale", desc: "Apparaissez en priorité dans les recherches de votre zone géographique et spécialité." },
  { icon: Star, title: "Autorité reconnue", desc: "Devenez la voix de référence dans votre domaine auprès des patients et des confrères." },
];

const ImpactSection = () => (
  <section className="py-20 md:py-28 bg-section-alt" id="impact">
    <div className="container">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Résultats</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            L'impact concret sur{" "}
            <span className="text-gradient">votre pratique</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {impacts.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex gap-5 p-6 bg-background rounded-xl border border-border">
              <div className="w-12 h-12 rounded-lg bg-hero-gradient flex items-center justify-center shrink-0">
                <item.icon className="text-primary-foreground" size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
