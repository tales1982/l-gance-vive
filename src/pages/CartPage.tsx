import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useCart } from "@/context/CartContext";
import { t } from "@/data/i18n";
import { useState } from "react";

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const shipping = totalPrice >= 49 ? 0 : 4.90;

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center">
        <ShoppingBag size={48} className="mx-auto text-muted-foreground mb-4" />
        <h1 className="font-display text-2xl font-bold mb-2">{t.cart.empty}</h1>
        <Link to="/boutique" className="text-primary hover:underline text-sm">{t.cart.continueShopping}</Link>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: t.cart.title }]} />
      <h1 className="font-display text-3xl font-bold mb-8">{t.cart.title}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(({ product, quantity }) => (
            <div key={product.id} className="glass-card p-4 flex gap-4">
              <Link to={`/produit/${product.slug}`} className="w-20 h-20 rounded-lg bg-secondary/30 overflow-hidden shrink-0">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/produit/${product.slug}`} className="font-display font-semibold text-foreground text-sm hover:text-primary transition-colors line-clamp-1">
                  {product.name}
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">{product.weight}</p>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center bg-secondary rounded-lg">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1.5 text-muted-foreground hover:text-foreground"><Minus size={14} /></button>
                    <span className="w-8 text-center text-sm font-medium text-foreground">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1.5 text-muted-foreground hover:text-foreground"><Plus size={14} /></button>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-foreground">{(product.price * quantity).toFixed(2)} €</span>
                    <button onClick={() => removeItem(product.id)} className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={16} /></button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="glass-card p-6 h-fit sticky top-24">
          <h2 className="font-display font-bold text-foreground mb-6">Récapitulatif</h2>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.cart.subtotal}</span><span className="text-foreground">{totalPrice.toFixed(2)} €</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">{t.cart.shipping}</span><span className="text-foreground">{shipping === 0 ? t.cart.free : `${shipping.toFixed(2)} €`}</span></div>
            <div className="border-t border-border pt-3 flex justify-between"><span className="font-semibold text-foreground">{t.cart.total}</span><span className="font-bold text-lg text-foreground">{(totalPrice + shipping).toFixed(2)} €</span></div>
          </div>

          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder={t.cart.promoCode}
              className="flex-1 bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
            />
            <button className="bg-secondary text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-hover transition-colors">
              {t.cart.apply}
            </button>
          </div>

          <Link
            to="/commande"
            className="block w-full text-center bg-gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            {t.cart.checkout}
          </Link>
          <Link to="/boutique" className="block text-center text-sm text-primary hover:underline mt-4">
            {t.cart.continueShopping}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
