import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
  product: string;
  date: string;
}

const ReviewCard = ({ name, rating, text, product, date }: ReviewCardProps) => {
  return (
    <div className="glass-card p-6 hover-lift">
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} className={i < rating ? "text-primary fill-primary" : "text-muted-foreground/30"} />
        ))}
      </div>
      <p className="text-sm text-foreground/90 leading-relaxed mb-4 italic">"{text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-primary/70">{product}</p>
        </div>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
