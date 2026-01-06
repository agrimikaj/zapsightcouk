const NeuralBackground = () => {
  return (
    <>
      {/* Neural Network SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.24]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Neural network connections - left side */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="25%" y1="35%" x2="15%" y2="55%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="15%" y1="55%" x2="30%" y2="70%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="45%" y2="80%" stroke="url(#neuronGradient)" strokeWidth="1" />
        </g>
        
        {/* Neural network connections - right side */}
        <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <line x1="85%" y1="15%" x2="70%" y2="30%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="70%" y1="30%" x2="80%" y2="50%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="80%" y1="50%" x2="65%" y2="65%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="65%" y1="65%" x2="75%" y2="85%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="70%" y1="30%" x2="55%" y2="40%" stroke="url(#neuronGradient)" strokeWidth="1" />
        </g>
        
        {/* Neural nodes */}
        <g filter="url(#glow)">
          <circle cx="10%" cy="20%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <circle cx="25%" cy="35%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          <circle cx="15%" cy="55%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
          <circle cx="30%" cy="70%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
          <circle cx="40%" cy="25%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }} />
          <circle cx="45%" cy="80%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
          
          <circle cx="85%" cy="15%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />
          <circle cx="70%" cy="30%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.2s' }} />
          <circle cx="80%" cy="50%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.6s' }} />
          <circle cx="65%" cy="65%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.8s' }} />
          <circle cx="75%" cy="85%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.4s' }} />
          <circle cx="55%" cy="40%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.4s' }} />
        </g>
        
        {/* Data wave paths */}
        <path
          d="M0,50 Q25,30 50,50 T100,50"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          className="animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <path
          d="M0,60 Q25,40 50,60 T100,60"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          className="animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        />
      </svg>
      
      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default NeuralBackground;