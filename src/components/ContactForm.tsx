import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const specialties = [
  "Médecine générale", "Cardiologie", "Dermatologie", "Pédiatrie",
  "Gynécologie", "Chirurgie", "Neurologie", "Ophtalmologie",
  "Orthopédie", "Pneumologie", "Endocrinologie", "Autre",
];

const WHATSAPP_BASE = "https://wa.me/212680780286?text=";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", specialty: "", city: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Bonjour DOCLAB,\n\nJe suis ${form.name}, ${form.specialty} à ${form.city}.\n\n${form.message || "Je souhaite en savoir plus sur vos services."}\n\nMerci.`
    );
    window.open(WHATSAPP_BASE + text, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section className="py-24 md:py-32 bg-white" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Contact
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Parlons de{" "}
              <span className="text-gradient">votre projet digital</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Remplissez ce formulaire et nous vous contacterons directement sur WhatsApp dans les 24h pour un audit gratuit de votre présence digitale.
            </p>

            <div className="space-y-4">
              {[
                "Consultation gratuite sans engagement",
                "Réponse personnalisée sous 24h",
                "Audit de votre présence digitale offert",
                "Devis transparent sans surprise",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-border shadow-glow p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-hero-gradient flex items-center justify-center">
                <Stethoscope size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Audit digital gratuit</p>
                <p className="text-xs text-muted-foreground">Réponse sous 24h</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Votre nom <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Prénom Nom"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Votre spécialité <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={form.specialty}
                  onChange={e => setForm({ ...form, specialty: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                >
                  <option value="">Choisir une spécialité</option>
                  {specialties.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Votre ville
                </label>
                <input
                  type="text"
                  placeholder="Casablanca, Rabat, Marrakech..."
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-muted-foreground/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Message (optionnel)
                </label>
                <textarea
                  rows={3}
                  placeholder="Décrivez vos besoins ou objectifs..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none placeholder:text-muted-foreground/50"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold text-sm"
              >
                {sent ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={18} /> Redirection vers WhatsApp...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} /> Envoyer ma demande gratuite
                  </span>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant, vous serez redirigé vers WhatsApp. 0 spam, 0 engagement.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
