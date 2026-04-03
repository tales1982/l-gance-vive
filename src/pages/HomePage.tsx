import { Link } from "react-router-dom";
import { Sparkles, Leaf, Truck, ShieldCheck, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import FAQAccordion from "@/components/FAQAccordion";
import NewsletterForm from "@/components/NewsletterForm";
import { products, categories, reviews, faqItems } from "@/data/products";
import { t } from "@/data/i18n";

const HomePage = () => {
  const newArrivals = products.filter((p) => p.isNew);
  const bestSellers = products.filter((p) => p.isBestSeller);

  const whyUsItems = [
    { icon: ShieldCheck, ...t.whyUs.quality },
    { icon: Leaf, ...t.whyUs.french },
    { icon: Sparkles, ...t.whyUs.natural },
    { icon: Truck, ...t.whyUs.shipping },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/60" />
        <div className="container relative z-10 text-center max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-gradient-gold">{t.hero.title}</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/boutique"
              className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              {t.hero.cta}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/boutique?filter=bestseller"
              className="border border-primary/40 text-primary font-semibold px-8 py-3.5 rounded-lg text-sm hover:bg-primary/10 transition-colors"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container py-16 md:py-20">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">{t.sections.featuredCategories}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.slice(0, 6).map((cat, i) => (
            <Link
              key={cat.id}
              to={`/boutique?category=${cat.slug}`}
              className="glass-card p-6 text-center hover-lift group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{cat.name}</h3>
              <p className="text-xs text-muted-foreground">{cat.productCount} produits</p>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold">{t.sections.newArrivals}</h2>
          <Link to="/boutique?filter=new" className="text-sm text-primary hover:underline flex items-center gap-1">
            Voir tout <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {newArrivals.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold">{t.sections.bestSellers}</h2>
          <Link to="/boutique?filter=bestseller" className="text-sm text-primary hover:underline flex items-center gap-1">
            Voir tout <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">{t.sections.whyChooseUs}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {whyUsItems.map((item, i) => (
            <div key={i} className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <item.icon className="text-accent" size={22} />
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="container py-16">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">{t.sections.reviews}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {reviews.map((r) => <ReviewCard key={r.id} {...r} />)}
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="container py-16 max-w-2xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">{t.sections.faq}</h2>
        <FAQAccordion items={faqItems.slice(0, 4)} />
        <div className="text-center mt-8">
          <Link to="/faq" className="text-sm text-primary hover:underline">
            Voir toutes les questions →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterForm />
    </div>
  );
};

export default HomePage;
