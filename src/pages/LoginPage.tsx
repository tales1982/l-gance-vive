import { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { t } from "@/data/i18n";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  const inputClass = "w-full bg-secondary rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
  };

  return (
    <div className="container py-8 max-w-md">
      <Breadcrumbs items={[{ label: isRegister ? t.nav.register : t.nav.login }]} />
      <div className="glass-card p-8">
        <h1 className="font-display text-2xl font-bold text-center mb-2">
          {isRegister ? "Créer un Compte" : "Connexion"}
        </h1>
        <p className="text-sm text-muted-foreground text-center mb-8">
          {isRegister ? "Rejoignez Noüra et profitez d'avantages exclusifs." : "Retrouvez votre espace personnel Noüra."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Votre nom complet"
              className={inputClass}
              required
            />
          )}
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Adresse email"
            className={inputClass}
            required
          />
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Mot de passe"
            className={inputClass}
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-gold text-primary-foreground font-semibold py-3.5 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            {isRegister ? "S'inscrire" : "Se connecter"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-sm text-primary hover:underline"
          >
            {isRegister ? "Déjà un compte ? Se connecter" : "Pas encore de compte ? S'inscrire"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
