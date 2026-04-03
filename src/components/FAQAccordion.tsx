import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQAccordionProps {
  items: { question: string; answer: string }[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="glass-card overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-display font-medium text-foreground text-sm md:text-base pr-4">{item.question}</span>
            <ChevronDown
              size={18}
              className={`text-primary shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === i && (
            <div className="px-5 pb-5 animate-fade-in">
              <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
