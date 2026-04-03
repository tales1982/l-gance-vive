import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { products, categories } from "@/data/products";
import { t } from "@/data/i18n";

const BoutiquePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popular");
  const [mobileFilters, setMobileFilters] = useState(false);
  const activeCategory = searchParams.get("category") || "";

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory) result = result.filter((p) => p.categorySlug === activeCategory);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q));
    }
    switch (sortBy) {
      case "priceAsc": result.sort((a, b) => a.price - b.price); break;
      case "priceDesc": result.sort((a, b) => b.price - a.price); break;
      case "newest": result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
    }
    return result;
  }, [activeCategory, search, sortBy]);

  const Sidebar = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-display font-semibold text-foreground mb-3">{t.filters.categories}</h3>
        <div className="space-y-1">
          <button
            onClick={() => setSearchParams({})}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!activeCategory ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
          >
            {t.filters.allCategories}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSearchParams({ category: cat.slug })}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${activeCategory === cat.slug ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}
            >
              {cat.name} ({cat.productCount})
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: t.nav.shop }]} />
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold">{t.nav.shop}</h1>
        <span className="text-sm text-muted-foreground">{filtered.length} {t.filters.results}</span>
      </div>

      {/* Category chips */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setSearchParams({})}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${!activeCategory ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}
        >
          Tout
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSearchParams({ category: cat.slug })}
            className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-colors ${activeCategory === cat.slug ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Search & Sort bar */}
      <div className="flex gap-3 mb-8">
        <div className="flex-1 relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.nav.search}
            className="w-full bg-secondary rounded-lg pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50"
        >
          <option value="popular">{t.filters.sortOptions.popular}</option>
          <option value="priceAsc">{t.filters.sortOptions.priceAsc}</option>
          <option value="priceDesc">{t.filters.sortOptions.priceDesc}</option>
          <option value="newest">{t.filters.sortOptions.newest}</option>
          <option value="rating">{t.filters.sortOptions.rating}</option>
        </select>
        <button onClick={() => setMobileFilters(!mobileFilters)} className="lg:hidden bg-secondary rounded-lg px-3 flex items-center">
          <SlidersHorizontal size={16} />
        </button>
      </div>

      <div className="flex gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">
          <Sidebar />
        </aside>

        {/* Mobile sidebar */}
        {mobileFilters && (
          <div className="fixed inset-0 z-50 bg-background/95 p-6 lg:hidden animate-fade-in overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-lg font-bold">{t.filters.title}</h2>
              <button onClick={() => setMobileFilters(false)}><X size={20} /></button>
            </div>
            <Sidebar />
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">Aucun produit trouvé.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BoutiquePage;
