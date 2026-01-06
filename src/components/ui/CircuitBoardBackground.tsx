const CircuitBoardBackground = () => {
  return (
    <svg 
      className="absolute inset-0 w-full h-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
        </linearGradient>
        <filter id="circuitGlow">
          <feGaussianBlur stdDeviation="0.3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Left side circuit traces */}
      <g className="animate-pulse" style={{ animationDuration: '5s' }}>
        {/* Horizontal traces */}
        <path d="M0,25 L15,25 L15,35 L25,35" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M0,45 L10,45 L10,55 L20,55 L20,65" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M5,70 L5,80 L15,80" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        
        {/* Vertical traces */}
        <path d="M8,15 L8,25" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M18,40 L18,55" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
      </g>
      
      {/* Right side circuit traces */}
      <g className="animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <path d="M100,30 L85,30 L85,40 L75,40" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M100,55 L90,55 L90,65 L80,65 L80,75" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M95,20 L95,30" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M82,45 L82,60" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
      </g>
      
      {/* Center connecting traces */}
      <g className="animate-pulse" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
        <path d="M35,20 L45,20 L45,30 L55,30 L55,20 L65,20" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
        <path d="M40,75 L50,75 L50,85 L60,85" stroke="url(#circuitGradient)" strokeWidth="0.2" fill="none" />
      </g>
      
      {/* Circuit nodes */}
      <g filter="url(#circuitGlow)">
        {/* Left nodes */}
        <circle cx="15" cy="25" r="0.8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s' }} />
        <circle cx="25" cy="35" r="0.6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
        <circle cx="10" cy="45" r="0.5" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
        <circle cx="20" cy="55" r="0.8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.3s' }} />
        <circle cx="20" cy="65" r="0.6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.8s' }} />
        <circle cx="15" cy="80" r="0.5" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.2s' }} />
        
        {/* Right nodes */}
        <circle cx="85" cy="30" r="0.8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.6s' }} />
        <circle cx="75" cy="40" r="0.6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.1s' }} />
        <circle cx="90" cy="55" r="0.5" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.4s' }} />
        <circle cx="80" cy="65" r="0.8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.9s' }} />
        <circle cx="80" cy="75" r="0.6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.4s' }} />
        
        {/* Center nodes */}
        <circle cx="45" cy="20" r="0.6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.7s' }} />
        <circle cx="55" cy="30" r="0.5" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.3s' }} />
        <circle cx="50" cy="75" r="0.8" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.2s' }} />
        <circle cx="60" cy="85" r="0.6" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.6s' }} />
      </g>
      
      {/* Connector squares (PCB style) */}
      <g>
        <rect x="14.5" y="24.5" width="1" height="1" fill="hsl(var(--primary))" opacity="0.5" />
        <rect x="84.5" y="29.5" width="1" height="1" fill="hsl(var(--primary))" opacity="0.5" />
        <rect x="49.5" y="74.5" width="1" height="1" fill="hsl(var(--primary))" opacity="0.5" />
        <rect x="19.5" y="64.5" width="1" height="1" fill="hsl(var(--primary))" opacity="0.5" />
        <rect x="79.5" y="64.5" width="1" height="1" fill="hsl(var(--primary))" opacity="0.5" />
      </g>
    </svg>
  );
};

export default CircuitBoardBackground;