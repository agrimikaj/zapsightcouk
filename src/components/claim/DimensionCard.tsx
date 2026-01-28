import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface DimensionCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  meta: string;
  isHighlighted?: boolean;
}

const DimensionCard = ({ icon: Icon, title, body, meta, isHighlighted = false }: DimensionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        scale: isHovered || isHighlighted ? 1.02 : 1,
        borderColor: isHovered || isHighlighted ? 'hsl(var(--primary) / 0.4)' : 'hsl(220, 16%, 12%)',
        boxShadow: isHovered || isHighlighted
          ? '0 20px 40px -15px hsl(var(--primary) / 0.15), 0 0 30px hsl(var(--primary) / 0.1)'
          : '0 0 0 transparent',
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Glow effect on hover */}
      <AnimatePresence>
        {(isHovered || isHighlighted) && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Icon container */}
      <motion.div
        className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-6 relative z-10"
        animate={{
          scale: isHovered || isHighlighted ? 1.1 : 1,
          backgroundColor: isHovered || isHighlighted ? 'hsl(var(--primary) / 0.25)' : 'hsl(var(--primary) / 0.15)',
        }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
      </motion.div>

      {/* Title - always visible */}
      <h3 className="font-display text-xl font-bold text-[hsl(0,0%,93%)] mb-4 relative z-10">
        {title}
      </h3>

      {/* Meta label (flow diagram) - always visible */}
      <motion.div
        className="relative z-10"
        animate={{
          marginBottom: isHovered ? '1rem' : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-primary/70 text-sm font-medium flex items-center gap-2">
          {meta.split(' → ').map((item, i, arr) => (
            <span key={i} className="flex items-center gap-2">
              <span>{item}</span>
              {i < arr.length - 1 && (
                <motion.span
                  className="text-primary"
                  animate={{
                    x: isHovered ? [0, 3, 0] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: isHovered ? Infinity : 0,
                    ease: 'easeInOut',
                  }}
                >
                  →
                </motion.span>
              )}
            </span>
          ))}
        </p>
      </motion.div>

      {/* Body - revealed on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden relative z-10"
          >
            <p className="text-[hsl(220,10%,55%)] leading-relaxed pt-2 border-t border-[hsl(220,16%,15%)]">
              {body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DimensionCard;
