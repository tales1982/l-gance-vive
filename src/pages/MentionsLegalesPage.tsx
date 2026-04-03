import Breadcrumbs from "@/components/Breadcrumbs";

const MentionsLegalesPage = () => (
  <div className="container py-8 max-w-3xl">
    <Breadcrumbs items={[{ label: "Mentions Légales" }]} />
    <h1 className="font-display text-3xl font-bold mb-8">Mentions Légales</h1>
    <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground">
      <h2 className="font-display text-lg font-semibold text-foreground">Éditeur du site</h2>
      <p>Noüra SAS<br />12 Rue de la Sérénité, 75008 Paris<br />Capital social : 10 000 €<br />RCS Paris : XXX XXX XXX<br />Numéro de TVA : FR XX XXX XXX XXX</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Directeur de la publication</h2>
      <p>M. / Mme [Nom du directeur de publication]</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Hébergement</h2>
      <p>[Nom de l'hébergeur]<br />[Adresse de l'hébergeur]</p>
      <h2 className="font-display text-lg font-semibold text-foreground">Propriété intellectuelle</h2>
      <p>L'ensemble des contenus du site Noüra (textes, images, vidéos, logos) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, même partielle, est strictement interdite sans autorisation écrite préalable.</p>
      <p className="text-xs text-muted-foreground/60 mt-10">Ce contenu est un placeholder destiné à être complété avec les informations légales définitives.</p>
    </div>
  </div>
);

export default MentionsLegalesPage;
