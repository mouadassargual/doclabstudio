import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/212680780286?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

const WhatsAppFloat = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-border p-5 w-72 mb-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-hero-gradient flex items-center justify-center">
                <Phone size={18} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">DOCLAB Studio</p>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs text-muted-foreground">En ligne — répond sous 24h</p>
                </div>
              </div>
            </div>
            <div className="bg-accent rounded-xl p-3 mb-4 text-sm text-foreground">
              👋 Bonjour ! Prêt à développer votre présence digitale ? Nous sommes là pour vous aider.
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20b558] text-white font-semibold rounded-xl py-3 text-sm transition-colors duration-200"
            >
              <MessageCircle size={18} />
              Démarrer la conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform duration-200 wa-pulse relative"
        aria-label="Contacter sur WhatsApp"
      >
        <MessageCircle size={28} />
        {!expanded && (
          <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
            1
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppFloat;
