import { motion } from 'framer-motion';

interface FiveOn5OrbitDiagramProps {
  onNodeHover: (node: string | null) => void;
}

const FiveOn5OrbitDiagram = ({ onNodeHover }: FiveOn5OrbitDiagramProps) => {
  return (
    <div className="relative w-full max-w-md aspect-square">
      {/* Orbit rings */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        {/* Outer orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="none"
          stroke="hsl(24, 92%, 50%)"
          strokeWidth="1"
          strokeOpacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Inner orbit */}
        <motion.circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="hsl(24, 92%, 50%)"
          strokeWidth="1"
          strokeOpacity="0.1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        />

        {/* Connecting lines to center */}
        {[
          { angle: 270, id: 'continuity' }, // Bottom-left
          { angle: 30, id: 'relevance' },   // Top
          { angle: 150, id: 'voice' },      // Bottom-right
        ].map((node, i) => {
          const x = 200 + 150 * Math.cos((node.angle * Math.PI) / 180);
          const y = 200 + 150 * Math.sin((node.angle * Math.PI) / 180);
          return (
            <motion.line
              key={node.id}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="hsl(24, 92%, 50%)"
              strokeWidth="1"
              strokeOpacity="0.2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
            />
          );
        })}
      </svg>

      {/* Center Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="text-center">
          <p className="font-display font-bold text-primary text-lg">5on5</p>
          <p className="text-[hsl(220,10%,55%)] text-xs">Context Core</p>
        </div>
      </motion.div>

      {/* Orbiting Nodes */}
      {/* Continuity - Bottom-left */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-[hsl(220,15%,10%)] border border-[hsl(220,16%,15%)] flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors duration-300"
        style={{ bottom: '5%', left: '10%' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onMouseEnter={() => onNodeHover('continuity')}
        onMouseLeave={() => onNodeHover(null)}
      >
        <div className="text-center">
          <span className="text-2xl">∞</span>
          <p className="text-[hsl(220,10%,55%)] text-[10px] uppercase tracking-wider mt-1">Continuity</p>
        </div>
      </motion.div>

      {/* Relevance - Top */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-[hsl(220,15%,10%)] border border-[hsl(220,16%,15%)] flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors duration-300"
        style={{ top: '5%', left: '50%', transform: 'translateX(-50%)' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onMouseEnter={() => onNodeHover('relevance')}
        onMouseLeave={() => onNodeHover(null)}
      >
        <div className="text-center">
          <span className="text-2xl">🎯</span>
          <p className="text-[hsl(220,10%,55%)] text-[10px] uppercase tracking-wider mt-1">Relevance</p>
        </div>
      </motion.div>

      {/* Voice - Bottom-right */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-[hsl(220,15%,10%)] border border-[hsl(220,16%,15%)] flex items-center justify-center cursor-pointer hover:border-primary/50 transition-colors duration-300"
        style={{ bottom: '5%', right: '10%' }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        onMouseEnter={() => onNodeHover('voice')}
        onMouseLeave={() => onNodeHover(null)}
      >
        <div className="text-center">
          <span className="text-2xl">🎭</span>
          <p className="text-[hsl(220,10%,55%)] text-[10px] uppercase tracking-wider mt-1">Voice</p>
        </div>
      </motion.div>

      {/* Bottom coda - 5 stars */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className="text-primary text-lg"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.6 + i * 0.1 }}
          >
            ★
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default FiveOn5OrbitDiagram;
