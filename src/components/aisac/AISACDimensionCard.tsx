import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface AISACDimensionCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  meta: string;
  isHighlighted?: boolean;
}

const AISACDimensionCard = ({ icon: Icon, title, body, meta, isHighlighted }: AISACDimensionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const showContent = isHovered || isHighlighted;

  return (
    <motion.div
      className={`relative bg-[hsl(220,15%,8%)] border rounded-2xl p-6 lg:p-8 transition-all duration-300 cursor-pointer overflow-hidden ${
        showContent
          ? 'border-primary/40 shadow-[0_0_30px_hsl(var(--primary)/0.15)]'
          : 'border-[hsl(220,16%,12%)] hover:border-[hsl(220,16%,18%)]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: showContent ? 1.02 : 1,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Icon */}
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
        showContent 
          ? 'bg-primary/20 border border-primary/30' 
          : 'bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,15%)]'
      }`}>
        <Icon 
          className={`h-7 w-7 transition-colors duration-300 ${
            showContent ? 'text-primary' : 'text-[hsl(220,10%,50%)]'
          }`} 
          strokeWidth={1.5} 
        />
      </div>

      {/* Title */}
      <h3 className={`font-display text-xl font-bold mb-3 transition-colors duration-300 ${
        showContent ? 'text-primary' : 'text-[hsl(0,0%,93%)]'
      }`}>
        {title}
      </h3>

      {/* Meta Flow - Always visible */}
      <div className="flex items-center gap-2 mb-4">
        {meta.split(' → ').map((step, i, arr) => (
          <span key={i} className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors duration-300 ${
              showContent ? 'text-primary/80' : 'text-[hsl(220,10%,45%)]'
            }`}>
              {step}
            </span>
            {i < arr.length - 1 && (
              <svg className={`w-4 h-4 transition-colors duration-300 ${
                showContent ? 'text-primary' : 'text-[hsl(220,10%,35%)]'
              }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </span>
        ))}
      </div>

      {/* Body - Revealed on hover */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <p className="text-[hsl(220,10%,55%)] leading-relaxed text-sm">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glow effect */}
      {showContent && (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent pointer-events-none rounded-2xl" />
      )}
    </motion.div>
  );
};

export default AISACDimensionCard;
