interface DataFlowWavesProps {
  position?: 'top' | 'bottom' | 'both';
  className?: string;
}

const DataFlowWaves = ({ position = 'both', className = '' }: DataFlowWavesProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ zIndex: 5 }}>
      {/* Top waves */}
      {(position === 'top' || position === 'both') && (
        <svg 
          className="absolute top-0 left-0 w-full h-48 opacity-40" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1920 160"
          style={{ background: 'transparent' }}
        >
          <defs>
            <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <filter id="glowTop" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,80 Q250,40 500,80 T1000,80 T1500,80 T2000,80"
            fill="none"
            stroke="url(#waveGradientTop)"
            strokeWidth="3"
            filter="url(#glowTop)"
            className="animate-pulse"
            style={{ animationDuration: '4s' }}
          />
          
          {/* Wave 2 */}
          <path
            d="M0,100 Q250,60 500,100 T1000,100 T1500,100 T2000,100"
            fill="none"
            stroke="url(#waveGradientTop)"
            strokeWidth="2"
            filter="url(#glowTop)"
            className="animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '0.5s' }}
          />
          
          {/* Wave 3 */}
          <path
            d="M0,120 Q250,90 500,120 T1000,120 T1500,120 T2000,120"
            fill="none"
            stroke="url(#waveGradientTop)"
            strokeWidth="1.5"
            filter="url(#glowTop)"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '1s' }}
          />
          
          {/* Data dots flowing along wave */}
          <circle r="2" fill="hsl(var(--primary))" opacity="0.6">
            <animateMotion
              dur="8s"
              repeatCount="indefinite"
              path="M0,80 Q250,40 500,80 T1000,80 T1500,80 T2000,80"
            />
          </circle>
          <circle r="1.5" fill="hsl(var(--primary))" opacity="0.4">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M0,100 Q250,60 500,100 T1000,100 T1500,100 T2000,100"
            />
          </circle>
        </svg>
      )}
      
      {/* Bottom waves */}
      {(position === 'bottom' || position === 'both') && (
        <svg 
          className="absolute bottom-0 left-0 w-full h-48 opacity-40" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1920 160"
          style={{ background: 'transparent' }}
        >
          <defs>
            <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <filter id="glowBottom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,60 Q250,100 500,60 T1000,60 T1500,60 T2000,60"
            fill="none"
            stroke="url(#waveGradientBottom)"
            strokeWidth="3"
            filter="url(#glowBottom)"
            className="animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '0.3s' }}
          />
          
          {/* Wave 2 */}
          <path
            d="M0,40 Q250,80 500,40 T1000,40 T1500,40 T2000,40"
            fill="none"
            stroke="url(#waveGradientBottom)"
            strokeWidth="2"
            filter="url(#glowBottom)"
            className="animate-pulse"
            style={{ animationDuration: '6s', animationDelay: '0.8s' }}
          />
          
          {/* Wave 3 */}
          <path
            d="M0,20 Q250,50 500,20 T1000,20 T1500,20 T2000,20"
            fill="none"
            stroke="url(#waveGradientBottom)"
            strokeWidth="1.5"
            filter="url(#glowBottom)"
            className="animate-pulse"
            style={{ animationDuration: '7s', animationDelay: '1.3s' }}
          />
        </svg>
      )}
      
      {/* Floating data particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            style={{
              left: `${5 + (i * 8)}%`,
              top: `${15 + Math.sin(i) * 35}%`,
              animation: `float ${5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.25}s`,
              boxShadow: '0 0 8px hsl(var(--primary) / 0.5)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DataFlowWaves;
