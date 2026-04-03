import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { categories } from "@/data/products";
import { t } from "@/data/i18n";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-display text-2xl md:text-3xl font-bold tracking-wide text-gradient-gold">
          Noüra
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{t.nav.home}</Link>
          <div className="relative group">
            <Link to="/boutique" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {t.nav.shop}
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-card border border-border rounded-xl p-4 shadow-xl min-w-[240px]">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/boutique?category=${cat.slug}`}
                    className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{t.nav.contact}</Link>
          <Link to="/faq" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{t.nav.faq}</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-foreground/70 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <Link to="/connexion" className="p-2 text-foreground/70 hover:text-primary transition-colors hidden md:block">
            <User size={20} />
          </Link>
          <Link to="/panier" className="p-2 text-foreground/70 hover:text-primary transition-colors relative">
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 text-foreground/70 lg:hidden">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-card animate-fade-in">
          <div className="container py-3">
            <input
              type="text"
              placeholder={t.nav.search}
              className="w-full bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">{t.nav.home}</Link>
            <Link to="/boutique" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">{t.nav.shop}</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">{t.nav.contact}</Link>
            <Link to="/faq" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">{t.nav.faq}</Link>
            <Link to="/connexion" onClick={() => setMobileOpen(false)} className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors">{t.nav.login}</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
