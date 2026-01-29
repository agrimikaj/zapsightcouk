import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Copy, RefreshCw, LucideIcon } from 'lucide-react';

interface AIVIDimensionCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  metaLabel: string;
  microCaption: string;
  isHighlighted?: boolean;
  onHover?: (isHovered: boolean) => void;
}

const AIVIDimensionCard = ({ 
  icon: Icon, 
  title, 
  body, 
  metaLabel,
  microCaption,
  isHighlighted,
  onHover 
}: AIVIDimensionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const showExpanded = isHighlighted ?? isHovered;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  return (
    <motion.div
      className={`relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
        showExpanded
          ? 'bg-primary/10 border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.15)]'
          : 'bg-[hsl(220,20%,8%)] border-[hsl(220,16%,16%)] hover:border-primary/30'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      layout
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
          showExpanded
            ? 'bg-primary/20 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
            : 'bg-[hsl(220,16%,12%)]'
        }`}
      >
        <Icon
          className={`h-7 w-7 transition-colors duration-300 ${
            showExpanded ? 'text-primary' : 'text-[hsl(220,10%,50%)]'
          }`}
          strokeWidth={1.5}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
          showExpanded ? 'text-primary' : 'text-foreground'
        }`}
      >
        {title}
      </h3>

      {/* Micro Caption - always visible */}
      <p className="text-sm text-primary/80 italic mb-3">
        {microCaption}
      </p>

      {/* Meta Label Flow - always visible */}
      <div className="flex items-center gap-2 text-xs text-[hsl(220,10%,50%)] mb-4">
        <span className="px-2 py-1 bg-[hsl(220,16%,12%)] rounded">
          {metaLabel.split(' → ')[0] || metaLabel.split(' | ')[0]}
        </span>
        <span className="text-primary/50">→</span>
        <span className="px-2 py-1 bg-[hsl(220,16%,12%)] rounded">
          {metaLabel.split(' → ')[1]?.split(' → ')[0] || metaLabel.split(' | ')[1]}
        </span>
      </div>

      {/* Expandable Body */}
      <AnimatePresence>
        {showExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-[hsl(220,10%,65%)] text-sm leading-relaxed border-t border-[hsl(220,16%,16%)] pt-4">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover indicator */}
      <div
        className={`absolute bottom-4 right-4 transition-opacity duration-300 ${
          showExpanded ? 'opacity-0' : 'opacity-50'
        }`}
      >
        <span className="text-xs text-[hsl(220,10%,40%)]">Hover to expand</span>
      </div>
    </motion.div>
  );
};

export default AIVIDimensionCard;
