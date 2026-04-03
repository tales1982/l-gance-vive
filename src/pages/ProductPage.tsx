import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingBag, Minus, Plus, Truck, RotateCcw, Star } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductCard from "@/components/ProductCard";
import FAQAccordion from "@/components/FAQAccordion";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { t } from "@/data/i18n";

const ProductPage = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "usage">("description");

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p className="text-muted-foreground text-lg">Produit introuvable.</p>
        <Link to="/boutique" className="text-primary hover:underline mt-4 inline-block">Retour à la boutique</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);

  const productFaq = [
    { question: "Ce produit convient-il aux végétariens ?", answer: "Oui, sauf indication contraire sur l'étiquette, nos produits sont formulés pour convenir à un régime végétarien." },
    { question: "Puis-je combiner ce produit avec d'autres compléments ?", answer: "En général, nos produits sont compatibles entre eux. Nous recommandons toutefois de consulter un professionnel de santé en cas de doute." },
  ];

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: t.nav.shop, href: "/boutique" }, { label: product.name }]} />

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        {/* Image */}
        <div className="glass-card overflow-hidden aspect-square">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div>
          <p className="text-sm text-primary font-medium mb-2">{product.category}</p>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">{product.name}</h1>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className={i < Math.round(product.rating) ? "text-primary fill-primary" : "text-muted-foreground/30"} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviewCount} {t.product.reviews})</span>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.shortDescription}</p>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-foreground">{product.price.toFixed(2)} €</span>
            {product.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice.toFixed(2)} €</span>
            )}
          </div>

          {product.weight && <p className="text-sm text-muted-foreground mb-4">{product.weight}</p>}

          <div className="flex items-center gap-2 mb-6">
            <span className={`text-sm font-medium ${product.inStock ? "text-accent" : "text-destructive"}`}>
              {product.inStock ? t.product.inStock : t.product.outOfStock}
            </span>
            {product.inStock && <span className="text-xs text-muted-foreground">({product.stockCount} disponibles)</span>}
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium text-foreground">{t.product.quantity}</span>
            <div className="flex items-center bg-secondary rounded-lg">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <Minus size={16} />
              </button>
              <span className="w-10 text-center text-sm font-medium text-foreground">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="p-2.5 text-muted-foreground hover:text-foreground transition-colors">
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => addItem(product, qty)}
            disabled={!product.inStock}
            className="w-full bg-gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 mb-6"
          >
            <ShoppingBag size={18} />
            {t.product.addToCart}
          </button>

          {/* Shipping info */}
          <div className="glass-card p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Truck size={18} className="text-accent" />
              <span className="text-sm text-foreground">Livraison offerte dès 49€ • Expédition sous 24h</span>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw size={18} className="text-accent" />
              <span className="text-sm text-foreground">Retour gratuit sous 30 jours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-16">
        <div className="flex gap-1 border-b border-border mb-6">
          {(["description", "ingredients", "usage"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"}`}
            >
              {tab === "description" ? t.product.description : tab === "ingredients" ? t.product.ingredients : t.product.usage}
            </button>
          ))}
        </div>
        <div className="max-w-2xl">
          {activeTab === "description" && <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>}
          {activeTab === "ingredients" && <p className="text-muted-foreground leading-relaxed">{product.ingredients || "Information non disponible."}</p>}
          {activeTab === "usage" && <p className="text-muted-foreground leading-relaxed">{product.usage || "Information non disponible."}</p>}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mb-16">
        <h2 className="font-display text-xl font-bold mb-6">Questions sur ce produit</h2>
        <FAQAccordion items={productFaq} />
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="font-display text-2xl font-bold mb-8">{t.product.relatedProducts}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
