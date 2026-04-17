import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, TrendingUp, Users, Star, ThumbsUp, CheckCircle2 } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor-pro.png";

const WHATSAPP_URL = "https://wa.me/212680780286?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden" style={{ paddingTop: "96px" }}>

    {/* ── Background dégradé bleu clair ── */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background: "linear-gradient(160deg, #ddeef8 0%, #c5e2f2 35%, #b0d6ec 60%, #ddeef8 100%)",
      }}
    />

    {/* Bandes verticales décoratives (comme le screenshot) */}
    {[...Array(8)].map((_, i) => (
      <div
        key={i}
        className="absolute top-0 bottom-0 -z-10"
        style={{
          left: `${i * 13}%`,
          width: "8%",
          background: `linear-gradient(180deg, rgba(11,70,116,0.06) 0%, rgba(33,152,181,0.04) 60%, transparent 100%)`,
          borderRadius: "999px",
        }}
      />
    ))}

    {/* Glows décoratifs */}
    <div className="absolute top-20 left-[15%] w-80 h-80 rounded-full bg-[#2198b5]/12 blur-[90px] -z-10" />
    <div className="absolute top-10 right-[15%] w-64 h-64 rounded-full bg-[#0b4674]/10 blur-[70px] -z-10" />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-48 rounded-full bg-[#2198b5]/08 blur-[80px] -z-10" />

    <div className="container relative z-10 flex flex-col items-center">

      {/* ── Badge supérieur ── */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-white shadow-md text-sm font-medium text-foreground mb-7"
      >
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span>+80 médecins nous font confiance au Maroc</span>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1" />
      </motion.div>

      {/* ── Titre principal ── */}
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-bold leading-[1.1] tracking-tight text-center mb-5 max-w-4xl"
      >
        <span className="text-foreground">Devenez le médecin de référence</span>
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(135deg, #0b4674 20%, #2198b5 80%)" }}
        >
          grâce au digital
        </span>
      </motion.h1>

      {/* ── Sous-titre ── */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-muted-foreground text-center max-w-lg leading-relaxed mb-6"
      >
        DOCLAB crée votre stratégie de contenu digital pour attirer plus de patients
        et vous positionner comme expert dans votre spécialité.
      </motion.p>

      {/* ── Petits points de réassurance ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8"
      >
        {["Résultats dès 30 jours", "100% conforme déontologie", "Gestion clé en main"].map((item, i) => (
          <div key={i} className="flex items-center gap-1.5 text-sm font-medium text-foreground/70">
            <CheckCircle2 size={15} className="text-primary" />
            {item}
          </div>
        ))}
      </motion.div>

      {/* ── CTA Buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-14 px-9 rounded-xl text-white font-semibold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          style={{ background: "linear-gradient(135deg, #0b4674, #2198b5)" }}
        >
          Réserver un appel gratuit
          <ArrowRight size={18} />
        </a>
        <a
          href="#services"
          className="inline-flex items-center justify-center gap-2 h-14 px-9 rounded-xl font-semibold text-base border-2 border-primary/30 text-primary bg-white/70 hover:bg-white hover:border-primary hover:shadow-md transition-all duration-200"
        >
          <MessageCircle size={18} />
          Voir nos services
        </a>
      </motion.div>

      {/* ── Zone image + stats flottantes ── */}
      <div className="relative w-full max-w-3xl mx-auto flex flex-col sm:flex-row justify-center items-center sm:items-end pt-8">

        {/* Stat flottante GAUCHE — Visibilité (Desktop uniquement) */}
        <motion.div
          initial={{ opacity: 0, x: -50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="hidden sm:block absolute left-4 top-[30%] z-20"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 min-w-[185px] border border-white"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #0b4674, #2198b5)" }}>
                <TrendingUp size={15} className="text-white" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Visibilité en ligne</p>
            </div>
            <p className="font-display text-3xl font-bold" style={{ color: "#0b4674" }}>+150%</p>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-[#0b4674] to-[#2198b5]" />
              </div>
              <span className="text-xs text-green-500 font-semibold">+53%</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Stat flottante DROITE HAUTE — Partenaire (Desktop uniquement) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="hidden sm:block absolute right-4 top-4 z-20"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #0b4674, #2198b5)" }}>
              <ThumbsUp size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Partenaire de confiance</p>
              <p className="font-bold text-sm text-foreground">98% satisfaction</p>
              <div className="flex gap-0.5 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stat flottante DROITE BAS — Médecins (Desktop uniquement) */}
        <motion.div
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="hidden sm:block absolute right-4 top-[45%] z-20"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-white"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, #0b4674, #2198b5)" }}>
              <Users size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Médecins accompagnés</p>
              <p className="font-display text-2xl font-bold" style={{ color: "#0b4674" }}>+80</p>
              <p className="text-xs text-muted-foreground">toutes spécialités</p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Version Mobile des Stats (S'affiche en grille au-dessus de l'image sur petit écran) ── */}
        <div className="sm:hidden flex flex-col gap-3 w-full mb-8 z-20 px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between border border-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#0b4674] to-[#2198b5]">
                <TrendingUp size={14} className="text-white" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Visibilité</p>
            </div>
            <p className="font-display text-xl font-bold text-[#0b4674]">+150%</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between border border-white">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#0b4674] to-[#2198b5]">
                <Users size={14} className="text-white" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Médecins</p>
            </div>
            <p className="font-display text-xl font-bold text-[#0b4674]">+80</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-3 flex items-center justify-between border border-white">
             <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#0b4674] to-[#2198b5]">
                <ThumbsUp size={14} className="text-white" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Satisfaction</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
            </div>
          </div>
        </div>

        {/* Image du médecin — cutout sur fond transparent */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="relative z-30 flex justify-center w-full"
        >
          {/* Glow subtil derrière le médecin */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px] h-[320px] rounded-full -z-10 blur-3xl opacity-10"
            style={{ background: "linear-gradient(135deg, #0b4674, #2198b5)" }}
          />
          <img
            src={heroDoctor}
            alt="Médecin professionnel DOCLAB"
            className="w-[260px] sm:w-[380px] lg:w-[460px] object-contain object-bottom"
            style={{ maxHeight: "560px" }}
          />
        </motion.div>

      </div>
    </div>

    {/* Dégradé de transition doux — passe devant l'image (z-40) pour masquer la coupure nette du bassin */}
    <div className="absolute bottom-0 left-0 right-0 h-32 z-40 pointer-events-none"
      style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.8) 60%, white 100%)" }}
    />
  </section>
);

export default HeroSection;
