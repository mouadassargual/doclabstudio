import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  { num: "01", title: "Audit", desc: "Analyse de votre présence actuelle et identification des opportunités." },
  { num: "02", title: "Stratégie", desc: "Élaboration d'un plan de contenu sur mesure adapté à vos objectifs." },
  { num: "03", title: "Production", desc: "Création de contenus professionnels : vidéos, visuels, textes." },
  { num: "04", title: "Publication", desc: "Diffusion régulière et optimisée sur vos canaux prioritaires." },
  { num: "05", title: "Optimisation", desc: "Suivi des performances et ajustements continus pour maximiser l'impact." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28" id="processus">
    <div className="container">
      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">Processus</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un accompagnement{" "}
            <span className="text-gradient">structuré et transparent</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="max-w-3xl mx-auto space-y-0">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="flex gap-6 items-start relative pl-8 pb-10 last:pb-0">
              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[15px] top-10 bottom-0 w-px bg-border" />
              )}
              <div className="w-8 h-8 rounded-full bg-hero-gradient flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0 relative z-10">
                {step.num}
              </div>
              <div className="pt-1">
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
