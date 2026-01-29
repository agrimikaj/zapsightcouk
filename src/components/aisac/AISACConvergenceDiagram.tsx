import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Link2, Zap } from 'lucide-react';

interface AISACConvergenceDiagramProps {
  onNodeHover?: (nodeId: string | null) => void;
  highlightedNode?: string | null;
}

const AISACConvergenceDiagram = ({ onNodeHover, highlightedNode }: AISACConvergenceDiagramProps) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const currentHighlight = highlightedNode ?? activeNode;

  const handleNodeHover = (nodeId: string | null) => {
    setActiveNode(nodeId);
    onNodeHover?.(nodeId);
  };

  const nodes = [
    { id: 'presence', label: 'Presence', caption: 'Event-first processing. No batch delays.', icon: Eye, angle: -90 },
    { id: 'memory', label: 'Memory', caption: 'Source holds truth. AISAC holds context.', icon: Link2, angle: 150 },
    { id: 'command', label: 'Command', caption: 'From insight to action. No friction.', icon: Zap, angle: 30 },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto aspect-square">
      {/* SVG Container */}
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Outer source ring - faint silhouettes */}
        <motion.circle
          cx="200"
          cy="200"
          r="170"
          fill="none"
          stroke="hsl(220, 10%, 15%)"
          strokeWidth="1"
          strokeDasharray="4 8"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* Main animated rotating ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="url(#aisacRotatingGradient)"
          strokeWidth="1.5"
          strokeDasharray="15 8"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* Inner glow ring */}
        <circle
          cx="200"
          cy="200"
          r="145"
          fill="none"
          stroke="hsl(var(--primary) / 0.08)"
          strokeWidth="40"
          className="blur-sm"
        />

        {/* Triangle connecting lines */}
        <motion.path
          d="M 200 60 L 320 280 L 80 280 Z"
          fill="none"
          stroke={currentHighlight ? 'hsl(var(--primary) / 0.5)' : 'hsl(var(--primary) / 0.15)'}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Connection lines to center - pulsing */}
        {nodes.map((node, i) => {
          const angle = node.angle * (Math.PI / 180);
          const radius = 140;
          const x = 200 + radius * Math.cos(angle);
          const y = 200 + radius * Math.sin(angle);
          const isActive = currentHighlight === node.id;

          return (
            <motion.line
              key={`line-${node.id}`}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke={isActive ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.2)'}
              strokeWidth={isActive ? 2.5 : 1}
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                opacity: isActive ? [0.6, 1, 0.6] : 1
              }}
              transition={{ 
                pathLength: { duration: 1, delay: i * 0.2 },
                opacity: { duration: 1.5, repeat: Infinity }
              }}
            />
          );
        })}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="aisacRotatingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="coreGlowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.4)" />
            <stop offset="100%" stopColor="hsl(var(--primary) / 0.05)" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Central Hexagonal Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex flex-col items-center justify-center"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.2) 0%, hsl(220, 20%, 8%) 60%)',
          boxShadow: '0 0 60px hsl(var(--primary) / 0.25), inset 0 0 30px hsl(var(--primary) / 0.1)',
        }}
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          boxShadow: [
            '0 0 40px hsl(var(--primary) / 0.2)',
            '0 0 60px hsl(var(--primary) / 0.3)',
            '0 0 40px hsl(var(--primary) / 0.2)',
          ]
        }}
        transition={{ 
          scale: { duration: 0.5, delay: 0.5 },
          boxShadow: { duration: 3, repeat: Infinity }
        }}
      >
        <span className="font-display text-lg font-bold text-primary">AISAC</span>
        <span className="text-[hsl(220,10%,50%)] text-[10px] uppercase tracking-widest mt-1">Situational</span>
        <span className="text-[hsl(220,10%,50%)] text-[10px] uppercase tracking-widest">Consciousness</span>
      </motion.div>

      {/* Orbiting Nodes */}
      {nodes.map((node, i) => {
        const angle = node.angle * (Math.PI / 180);
        const radius = 35; // percentage from center
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);
        const isActive = currentHighlight === node.id;
        const NodeIcon = node.icon;

        return (
          <motion.div
            key={node.id}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: `${left}%`, top: `${top}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
            onMouseEnter={() => handleNodeHover(node.id)}
            onMouseLeave={() => handleNodeHover(null)}
          >
            <motion.div
              className="relative flex flex-col items-center gap-2"
              animate={{
                scale: isActive ? 1.15 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Node circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-primary/30 border-2 border-primary shadow-[0_0_30px_hsl(var(--primary)/0.6)]'
                    : 'bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,18%)] group-hover:border-primary/50'
                }`}
              >
                <NodeIcon
                  className={`h-7 w-7 transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-[hsl(220,10%,50%)] group-hover:text-primary'
                  }`}
                  strokeWidth={1.5}
                />
              </div>
              
              {/* Label */}
              <span
                className={`text-sm font-semibold whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-[hsl(220,10%,60%)]'
                }`}
              >
                {node.label}
              </span>
              
              {/* Caption - shows on hover */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-3 px-3 py-1.5 bg-[hsl(220,15%,8%)] border border-primary/30 rounded-lg"
                >
                  <span className="text-[hsl(220,10%,70%)] text-xs whitespace-nowrap">
                    {node.caption}
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Animated particles on the ring */}
      {[0, 120, 240].map((startAngle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/70"
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-4px',
            marginTop: '-4px',
          }}
          animate={{
            x: [
              140 * Math.cos((startAngle) * Math.PI / 180),
              140 * Math.cos((startAngle + 120) * Math.PI / 180),
              140 * Math.cos((startAngle + 240) * Math.PI / 180),
              140 * Math.cos((startAngle + 360) * Math.PI / 180),
            ],
            y: [
              140 * Math.sin((startAngle) * Math.PI / 180),
              140 * Math.sin((startAngle + 120) * Math.PI / 180),
              140 * Math.sin((startAngle + 240) * Math.PI / 180),
              140 * Math.sin((startAngle + 360) * Math.PI / 180),
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Source system icons feeding into Presence */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-3 opacity-40">
        <div className="w-5 h-5 border border-[hsl(220,10%,25%)] rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-[hsl(220,10%,30%)] rounded-sm" />
        </div>
        <div className="w-5 h-5 border border-[hsl(220,10%,25%)] rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-[hsl(220,10%,30%)] rounded-sm" />
        </div>
        <div className="w-5 h-5 border border-[hsl(220,10%,25%)] rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-[hsl(220,10%,30%)] rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default AISACConvergenceDiagram;
