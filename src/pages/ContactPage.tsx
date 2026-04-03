import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { t } from "@/data/i18n";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50";

  return (
    <div className="container py-8">
      <Breadcrumbs items={[{ label: t.nav.contact }]} />
      <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Contactez-nous</h1>
      <p className="text-muted-foreground mb-10 max-w-lg">Une question, une suggestion ou besoin d'un conseil personnalisé ? Notre équipe est à votre écoute.</p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {sent ? (
            <div className="glass-card p-10 text-center animate-fade-in">
              <Send size={40} className="mx-auto text-primary mb-4" />
              <h2 className="font-display text-xl font-bold mb-2">Message envoyé !</h2>
              <p className="text-muted-foreground text-sm">Nous vous répondrons dans les 24 à 48 heures ouvrées.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Votre nom" className={inputClass} required />
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Votre email" className={inputClass} required />
              </div>
              <input value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Objet" className={inputClass} required />
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message…"
                rows={6}
                className={`${inputClass} resize-none`}
                required
              />
              <button type="submit" className="bg-gradient-gold text-primary-foreground font-semibold px-8 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity">
                Envoyer le message
              </button>
            </form>
          )}
        </div>

        <div className="space-y-4">
          {[
            { icon: Mail, label: "Email", value: "contact@sveltia.fr" },
            { icon: Phone, label: "Téléphone", value: "01 23 45 67 89" },
            { icon: MapPin, label: "Adresse", value: "12 Rue de la Sérénité\n75008 Paris, France" },
          ].map((item, i) => (
            <div key={i} className="glass-card p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
