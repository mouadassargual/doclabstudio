const Footer = () => (
  <footer className="py-10 border-t border-border">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="font-semibold text-foreground">MedPresence</p>
      <p>© {new Date().getFullYear()} MedPresence. Tous droits réservés.</p>
    </div>
  </footer>
);

export default Footer;
