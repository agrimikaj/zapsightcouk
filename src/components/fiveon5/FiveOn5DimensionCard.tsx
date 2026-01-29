import { LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FiveOn5DimensionCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  meta: string;
  isHighlighted?: boolean;
}

const FiveOn5DimensionCard = ({ icon: Icon, title, body, meta, isHighlighted }: FiveOn5DimensionCardProps) => {
  return (
    <motion.div
      className={`relative bg-[hsl(220,15%,8%)] border rounded-2xl p-6 lg:p-8 transition-colors duration-300 ${
        isHighlighted ? 'border-primary/40' : 'border-[hsl(220,16%,12%)] hover:border-primary/20'
      }`}
      animate={{
        scale: isHighlighted ? 1.02 : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-colors duration-300 ${
        isHighlighted ? 'bg-primary/20' : 'bg-[hsl(220,15%,12%)]'
      }`}>
        <Icon className={`h-7 w-7 ${isHighlighted ? 'text-primary' : 'text-[hsl(220,10%,50%)]'}`} strokeWidth={1.5} />
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-bold text-[hsl(0,0%,93%)] mb-3">{title}</h3>

      {/* Body - animated */}
      <AnimatePresence mode="wait">
        <motion.p
          key={isHighlighted ? 'expanded' : 'collapsed'}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[hsl(220,10%,55%)] leading-relaxed mb-4"
        >
          {body}
        </motion.p>
      </AnimatePresence>

      {/* Meta footer */}
      <div className={`text-xs uppercase tracking-wider ${isHighlighted ? 'text-primary' : 'text-[hsl(220,10%,40%)]'}`}>
        {meta}
      </div>

      {/* Glow effect when highlighted */}
      {isHighlighted && (
        <div className="absolute inset-0 rounded-2xl bg-primary/5 pointer-events-none" />
      )}
    </motion.div>
  );
};

export default FiveOn5DimensionCard;
