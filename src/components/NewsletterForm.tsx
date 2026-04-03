import { useState } from "react";
import { t } from "@/data/i18n";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-gradient-gold py-16 md:py-20">
      <div className="container text-center max-w-xl">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
          {t.newsletter.title}
        </h2>
        <p className="text-primary-foreground/80 text-sm mb-8">{t.newsletter.subtitle}</p>
        {submitted ? (
          <p className="text-primary-foreground font-semibold animate-fade-in">Merci pour votre inscription ! 🎉</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              className="flex-1 bg-primary-foreground/20 backdrop-blur text-primary-foreground placeholder:text-primary-foreground/50 rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary-foreground/40"
              required
            />
            <button
              type="submit"
              className="bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-lg text-sm hover:bg-primary-foreground/90 transition-colors"
            >
              {t.newsletter.button}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterForm;
