import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/212680780286?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Résultats", href: "#resultats" },
    { label: "Processus", href: "#processus" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/new-logo.png"
            alt="DOCLAB"
            className="h-14 w-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                scrolled
                  ? "text-muted-foreground hover:text-primary"
                  : "text-[#0b4674] hover:text-[#2198b5]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className={scrolled ? "" : "text-[#0b4674] hover:text-primary hover:bg-primary/10"}
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <Button
            size="sm"
            className={`font-semibold ${
              scrolled
                ? "bg-primary hover:bg-primary/90 text-white"
                : "bg-primary text-white hover:bg-primary/90 shadow-md"
            }`}
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Réserver un appel
            </a>
          </Button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-[#0b4674]"}`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden shadow-lg"
          >
            <div className="container py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-base font-medium text-foreground hover:text-primary py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-semibold" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Réserver un appel
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
