import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/products";
import { t } from "@/data/i18n";

const FAQPage = () => {
  return (
    <div className="container py-8 max-w-2xl">
      <Breadcrumbs items={[{ label: t.nav.faq }]} />
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Questions Fréquentes</h1>
      <p className="text-muted-foreground mb-10">Retrouvez ici les réponses aux questions les plus courantes. N'hésitez pas à nous contacter si vous ne trouvez pas votre réponse.</p>
      <FAQAccordion items={faqItems} />
    </div>
  );
};

export default FAQPage;
