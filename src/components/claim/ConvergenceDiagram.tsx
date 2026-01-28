import { useState } from 'react';
import { motion } from 'framer-motion';
import { Diamond, Target, Square } from 'lucide-react';

interface ConvergenceDiagramProps {
  onNodeHover?: (nodeId: string | null) => void;
}

const ConvergenceDiagram = ({ onNodeHover }: ConvergenceDiagramProps) => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const handleNodeHover = (nodeId: string | null) => {
    setActiveNode(nodeId);
    onNodeHover?.(nodeId);
  };

  const nodes = [
    { id: 'traceability', label: 'Traceability', icon: Diamond, angle: -90, color: 'hsl(var(--primary))' },
    { id: 'intelligibility', label: 'Intelligibility', icon: Target, angle: 150, color: 'hsl(var(--primary))' },
    { id: 'solidity', label: 'Solidity', icon: Square, angle: 30, color: 'hsl(var(--primary))' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto aspect-square">
      {/* SVG Container */}
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Animated rotating ring */}
        <motion.circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="url(#rotatingGradient)"
          strokeWidth="1"
          strokeDasharray="20 10"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '200px 200px' }}
        />

        {/* Outer glow ring */}
        <circle
          cx="200"
          cy="200"
          r="145"
          fill="none"
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="30"
          className="blur-sm"
        />

        {/* Triangle connecting lines */}
        <motion.path
          d="M 200 60 L 320 280 L 80 280 Z"
          fill="none"
          stroke={activeNode ? 'hsl(var(--primary) / 0.4)' : 'hsl(var(--primary) / 0.15)'}
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Connection lines to center */}
        {nodes.map((node, i) => {
          const angle = node.angle * (Math.PI / 180);
          const radius = 140;
          const x = 200 + radius * Math.cos(angle);
          const y = 200 + radius * Math.sin(angle);
          const isActive = activeNode === node.id;

          return (
            <motion.line
              key={`line-${node.id}`}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke={isActive ? 'hsl(var(--primary))' : 'hsl(var(--primary) / 0.2)'}
              strokeWidth={isActive ? 2 : 1}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            />
          );
        })}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="rotatingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary) / 0.3)" />
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

      {/* Central Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full flex flex-col items-center justify-center"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, hsl(220, 20%, 8%) 70%)',
          border: '2px solid hsl(var(--primary) / 0.3)',
          boxShadow: '0 0 40px hsl(var(--primary) / 0.2), inset 0 0 20px hsl(var(--primary) / 0.1)',
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="font-display text-lg font-bold text-primary">CLaiM</span>
        <span className="text-[hsl(220,10%,50%)] text-xs">Core</span>
      </motion.div>

      {/* Orbiting Nodes */}
      {nodes.map((node, i) => {
        const angle = node.angle * (Math.PI / 180);
        const radius = 35; // percentage from center
        const left = 50 + radius * Math.cos(angle);
        const top = 50 + radius * Math.sin(angle);
        const isActive = activeNode === node.id;
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
                scale: isActive ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {/* Node circle */}
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? 'bg-primary/30 border-2 border-primary shadow-[0_0_25px_hsl(var(--primary)/0.5)]'
                    : 'bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,18%)] group-hover:border-primary/50'
                }`}
              >
                <NodeIcon
                  className={`h-6 w-6 transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-[hsl(220,10%,50%)] group-hover:text-primary'
                  }`}
                  strokeWidth={1.5}
                />
              </div>
              {/* Label */}
              <span
                className={`text-xs font-medium whitespace-nowrap transition-colors duration-300 ${
                  isActive ? 'text-primary' : 'text-[hsl(220,10%,55%)]'
                }`}
              >
                {node.label}
              </span>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Animated particles on the ring */}
      {[0, 120, 240].map((startAngle, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/60"
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
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default ConvergenceDiagram;
