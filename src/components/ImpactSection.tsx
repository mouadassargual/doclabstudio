import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, Eye, Award } from "lucide-react";

const stats = [
  { icon: Eye, value: 150, suffix: "%", prefix: "+", label: "Visibilité en ligne", desc: "Augmentation moyenne de la visibilité sur Google et les réseaux sociaux." },
  { icon: Users, value: 40, suffix: "%", prefix: "+", label: "Nouveaux patients", desc: "Croissance du nombre de patients provenant des canaux digitaux." },
  { icon: TrendingUp, value: 3, suffix: "x", prefix: "", label: "Engagement", desc: "Multiplication des interactions avec votre contenu professionnel." },
  { icon: Award, value: 1, suffix: "", prefix: "#", label: "Positionnement", desc: "Devenir la référence dans votre spécialité au niveau local." },
];

function CountUp({ target, prefix, suffix }: { target: number; prefix: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-gradient">
      {prefix}{count}{suffix}
    </span>
  );
}

const ImpactSection = () => (
  <section
    className="py-24 md:py-32 relative overflow-hidden"
    id="resultats"
    style={{
      background: "linear-gradient(180deg, #f0f6fb 0%, #e8f4f9 100%)",
    }}
  >
    {/* Decorative elements */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-hero-gradient" />
    <div className="absolute inset-0 opacity-[0.03]"
      style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(210 82% 24%) 0%, transparent 70%)" }}
    />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
          Résultats concrets
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Des résultats qui{" "}
          <span className="text-gradient">parlent d'eux-mêmes</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Nos clients constatent des améliorations significatives dès les premières semaines.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-glow transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-5">
              <s.icon className="text-white" size={24} />
            </div>
            <div className="mb-2">
              <CountUp target={s.value} prefix={s.prefix} suffix={s.suffix} />
            </div>
            <p className="font-semibold text-foreground mb-1">{s.label}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactSection;
