import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useCart } from "@/context/CartContext";
import { t } from "@/data/i18n";

const CheckoutPage = () => {
  const { items, totalPrice } = useCart();
  const shipping = totalPrice >= 49 ? 0 : 4.90;
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", postalCode: "", country: "France",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: t.cart.title, href: "/panier" }, { label: t.checkout.title }]} />
      <h1 className="font-display text-3xl font-bold mb-8">{t.checkout.title}</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Billing */}
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-foreground mb-6">{t.checkout.billing}</h2>
            <div className="grid grid-cols-2 gap-4">
              <input name="firstName" value={form.firstName} onChange={handleChange} placeholder={t.checkout.firstName} className={inputClass} />
              <input name="lastName" value={form.lastName} onChange={handleChange} placeholder={t.checkout.lastName} className={inputClass} />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t.checkout.email} className={`${inputClass} col-span-2`} />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder={t.checkout.phone} className={`${inputClass} col-span-2`} />
            </div>
          </div>

          {/* Shipping address */}
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-foreground mb-6">{t.checkout.shipping}</h2>
            <div className="grid grid-cols-2 gap-4">
              <input name="address" value={form.address} onChange={handleChange} placeholder={t.checkout.address} className={`${inputClass} col-span-2`} />
              <input name="city" value={form.city} onChange={handleChange} placeholder={t.checkout.city} className={inputClass} />
              <input name="postalCode" value={form.postalCode} onChange={handleChange} placeholder={t.checkout.postalCode} className={inputClass} />
              <input name="country" value={form.country} onChange={handleChange} placeholder={t.checkout.country} className={`${inputClass} col-span-2`} />
            </div>
          </div>

          {/* Payment placeholder */}
          <div className="glass-card p-6">
            <h2 className="font-display font-bold text-foreground mb-4">{t.checkout.payment}</h2>
            <div className="bg-secondary/50 rounded-lg p-8 text-center">
              <p className="text-muted-foreground text-sm">Module de paiement (Stripe, PayPal, etc.) à intégrer ici.</p>
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="glass-card p-6 h-fit sticky top-24">
          <h2 className="font-display font-bold text-foreground mb-6">Votre commande</h2>
          <div className="space-y-3 mb-6">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex justify-between text-sm">
                <span className="text-muted-foreground">{product.name} × {quantity}</span>
                <span className="text-foreground">{(product.price * quantity).toFixed(2)} €</span>
              </div>
            ))}
            <div className="border-t border-border pt-3">
              <div className="flex justify-between text-sm mb-1"><span className="text-muted-foreground">{t.cart.subtotal}</span><span>{totalPrice.toFixed(2)} €</span></div>
              <div className="flex justify-between text-sm mb-3"><span className="text-muted-foreground">{t.cart.shipping}</span><span>{shipping === 0 ? t.cart.free : `${shipping.toFixed(2)} €`}</span></div>
              <div className="flex justify-between font-bold text-lg"><span>{t.cart.total}</span><span>{(totalPrice + shipping).toFixed(2)} €</span></div>
            </div>
          </div>
          <button className="w-full bg-gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity">
            {t.checkout.placeOrder}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
