import Breadcrumbs from "@/components/Breadcrumbs";

const CGVPage = () => (
  <div className="container py-8 max-w-3xl">
    <Breadcrumbs items={[{ label: "Conditions Générales de Vente" }]} />
    <h1 className="font-display text-3xl font-bold mb-8">Conditions Générales de Vente</h1>
    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
      <p>Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des ventes réalisées sur le site Noüra. En passant commande, le client déclare avoir pris connaissance et accepté sans réserve les présentes conditions.</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Article 1 — Objet</h2>
      <p>Les présentes CGV définissent les droits et obligations des parties dans le cadre de la vente en ligne de compléments alimentaires et accessoires de bien-être proposés par Noüra.</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Article 2 — Prix</h2>
      <p>Les prix sont indiqués en euros toutes taxes comprises (TTC). Noüra se réserve le droit de modifier ses prix à tout moment, mais les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Article 3 — Commande</h2>
      <p>Le client passe commande via le site internet. La validation de la commande implique l'acceptation intégrale des présentes CGV.</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Article 4 — Livraison</h2>
      <p>Les délais de livraison sont donnés à titre indicatif. Noüra s'engage à expédier les produits dans un délai de 24 à 48 heures ouvrées à compter de la confirmation de la commande.</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Article 5 — Droit de rétractation</h2>
      <p>Conformément à la législation en vigueur, le client dispose d'un délai de 14 jours à compter de la réception de sa commande pour exercer son droit de rétractation, sans avoir à justifier de motifs.</p>
      <p className="text-xs text-muted-foreground/60 mt-10">Ce contenu est un placeholder destiné à être remplacé par des CGV conformes rédigées par un professionnel du droit.</p>
    </div>
  </div>
);

export default CGVPage;
