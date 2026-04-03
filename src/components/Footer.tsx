import { Link } from "react-router-dom";
import { t } from "@/data/i18n";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link to="/" className="font-display text-2xl font-bold text-gradient-gold">Sveltia</Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t.footer.aboutText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li><Link to="/boutique" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.shop}</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.faq}</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.contact}</Link></li>
              <li><Link to="/connexion" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.nav.login}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li><Link to="/cgv" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.cgv}</Link></li>
              <li><Link to="/mentions-legales" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.mentions}</Link></li>
              <li><Link to="/confidentialite" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t.footer.privacy}</Link></li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sveltia. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
