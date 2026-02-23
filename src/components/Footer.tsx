const WHATSAPP_URL = "https://wa.me/212680780286?text=Bonjour%20DOCLAB%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20vos%20services.";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-section-alt">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
           <img src="/logo.png" alt="DOCLAB" className="h-8 w-auto" />
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#resultats" className="hover:text-primary transition-colors">Résultats</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} DOCLAB. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
