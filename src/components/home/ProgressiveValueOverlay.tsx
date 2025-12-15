import { useState, useEffect, useRef } from 'react';
import { ChevronUp, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

type OverlayState = 'initial' | 'light' | 'active' | 'deep';

const ProgressiveValueOverlay = () => {
  const [state, setState] = useState<OverlayState>('initial');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / scrollHeight) * 100, 100);
      setScrollProgress(progress);

      if (progress < 20) {
        setState('initial');
      } else if (progress < 45) {
        setState('light');
      } else if (progress < 75) {
        setState('active');
      } else {
        setState('deep');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const transitionClasses = prefersReducedMotion 
    ? '' 
    : 'transition-all duration-700 ease-out';

  // Get efficiency level based on state
  const getEfficiencyLevel = () => {
    switch (state) {
      case 'initial': return 15;
      case 'light': return 35;
      case 'active': return 65;
      case 'deep': return 95;
    }
  };

  const efficiencyLevel = getEfficiencyLevel();

  // Visual ring component
  const EfficiencyRing = ({ size = 120, strokeWidth = 6 }: { size?: number; strokeWidth?: number }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (efficiencyLevel / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background ring */}
        <svg className="absolute inset-0 -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted/30"
          />
          {/* Progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={cn(
              "text-primary",
              transitionClasses
            )}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Zap className={cn(
            "w-6 h-6 text-primary mb-1",
            transitionClasses,
            state === 'deep' ? 'scale-110' : 'scale-100'
          )} />
          <span className={cn(
            "text-2xl font-bold text-foreground tabular-nums",
            transitionClasses
          )}>
            {efficiencyLevel}%
          </span>
        </div>

        {/* Floating particles for active/deep states */}
        {(state === 'active' || state === 'deep') && !prefersReducedMotion && (
          <>
            <div className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-primary/60 animate-pulse" style={{ animationDelay: '0ms' }} />
            <div className="absolute bottom-4 left-2 w-1 h-1 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: '300ms' }} />
            <div className="absolute top-1/2 right-0 w-1 h-1 rounded-full bg-primary/50 animate-pulse" style={{ animationDelay: '600ms' }} />
          </>
        )}
      </div>
    );
  };

  // Data flow visualization
  const DataFlowBars = () => (
    <div className="flex items-end gap-1 h-8">
      {[...Array(5)].map((_, i) => {
        const baseHeight = 20 + (i * 10);
        const multiplier = state === 'deep' ? 1.5 : state === 'active' ? 1.2 : state === 'light' ? 0.8 : 0.4;
        const height = Math.min(baseHeight * multiplier, 100);
        
        return (
          <div
            key={i}
            className={cn(
              "w-1.5 rounded-full bg-primary/70",
              transitionClasses
            )}
            style={{ 
              height: `${height}%`,
              transitionDelay: `${i * 50}ms`
            }}
          />
        );
      })}
    </div>
  );

  // Mobile bar component
  const MobileOverlay = () => (
    <div 
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 md:hidden",
        transitionClasses
      )}
    >
      {/* Collapsed bar */}
      <div 
        className={cn(
          "bg-card/95 backdrop-blur-sm border-t border-border/50 shadow-lg",
          mobileExpanded ? "hidden" : "block"
        )}
        onClick={() => setMobileExpanded(true)}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Mini ring */}
            <div className="relative w-10 h-10">
              <svg className="-rotate-90" width={40} height={40}>
                <circle cx={20} cy={20} r={16} fill="none" stroke="currentColor" strokeWidth={3} className="text-muted/30" />
                <circle
                  cx={20} cy={20} r={16} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round"
                  className={cn("text-primary", transitionClasses)}
                  style={{ strokeDasharray: 100.5, strokeDashoffset: 100.5 - (efficiencyLevel / 100) * 100.5 }}
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-foreground">
                {efficiencyLevel}%
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              Engage more → Higher efficiency
            </span>
          </div>
          <ChevronUp className="w-4 h-4 text-muted-foreground" />
        </div>
        {/* Progress indicator */}
        <div className="h-0.5 bg-muted">
          <div 
            className="h-full bg-primary/60 transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Expanded panel */}
      <div 
        className={cn(
          "bg-card/98 backdrop-blur-md border-t border-border/50 shadow-2xl",
          transitionClasses,
          mobileExpanded 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-full pointer-events-none"
        )}
        onClick={() => setMobileExpanded(false)}
      >
        <div className="p-6 flex flex-col items-center">
          <EfficiencyRing size={100} strokeWidth={5} />
          <p className="text-sm text-muted-foreground mt-4 text-center max-w-[200px]">
            The more you engage with ZapSight, the more efficiency you get with your data.
          </p>
          {state === 'deep' && (
            <a 
              href="/contact" 
              className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              See this in action →
            </a>
          )}
        </div>
      </div>
    </div>
  );

  // Desktop overlay
  const DesktopOverlay = () => (
    <div 
      ref={overlayRef}
      className={cn(
        "fixed bottom-6 right-6 z-50 hidden md:block",
        "bg-card/95 backdrop-blur-sm rounded-2xl shadow-lg border border-border/50",
        transitionClasses,
        "p-5"
      )}
    >
      <div className="flex flex-col items-center">
        {/* Visual ring */}
        <EfficiencyRing />
        
        {/* Data flow bars */}
        <div className={cn(
          "mt-4",
          transitionClasses,
          state === 'initial' ? 'opacity-40' : 'opacity-100'
        )}>
          <DataFlowBars />
        </div>

        {/* Simple message */}
        <p className={cn(
          "text-xs text-muted-foreground text-center mt-4 max-w-[160px] leading-relaxed",
          transitionClasses
        )}>
          {state === 'initial' && "Start exploring..."}
          {state === 'light' && "Keep engaging..."}
          {state === 'active' && "Efficiency growing!"}
          {state === 'deep' && "Maximum efficiency with your data"}
        </p>

        {/* CTA - only at deep engagement */}
        <a 
          href="/contact"
          className={cn(
            "mt-3 text-xs text-primary hover:text-primary/80 transition-colors font-medium",
            transitionClasses,
            state === 'deep' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2 pointer-events-none h-0'
          )}
        >
          See this in action →
        </a>
      </div>
    </div>
  );

  return (
    <>
      <DesktopOverlay />
      <MobileOverlay />
    </>
  );
};

export default ProgressiveValueOverlay;
