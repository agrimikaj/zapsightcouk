import { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowUp, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

type OverlayState = 'initial' | 'light' | 'active' | 'deep';

const ProgressiveValueOverlay = () => {
  const [state, setState] = useState<OverlayState>('initial');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState({
    light: false,
    active: false,
    deep: false,
  });
  const [displayValues, setDisplayValues] = useState({
    tat: 0,
    cost: 0,
    accuracy: 0,
  });
  const overlayRef = useRef<HTMLDivElement>(null);

  // Target values for each state
  const targetValues = {
    active: { tat: 18, cost: 12, accuracy: 20 },
    deep: { tat: 42, cost: 28, accuracy: 55 },
  };

  // Calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / scrollHeight) * 100, 100);
      setScrollProgress(progress);

      // Determine state based on scroll
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

  // Animate numbers when state changes
  useEffect(() => {
    if (state === 'active' && !hasAnimated.active) {
      setHasAnimated(prev => ({ ...prev, active: true }));
      animateValues(targetValues.active);
    } else if (state === 'deep' && !hasAnimated.deep) {
      setHasAnimated(prev => ({ ...prev, deep: true }));
      animateValues(targetValues.deep);
    }
  }, [state, hasAnimated]);

  const animateValues = (targets: { tat: number; cost: number; accuracy: number }) => {
    const duration = 800;
    const steps = 30;
    const stepDuration = duration / steps;
    
    const startValues = { ...displayValues };
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setDisplayValues({
        tat: Math.round(startValues.tat + (targets.tat - startValues.tat) * easeProgress),
        cost: Math.round(startValues.cost + (targets.cost - startValues.cost) * easeProgress),
        accuracy: Math.round(startValues.accuracy + (targets.accuracy - startValues.accuracy) * easeProgress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayValues(targets);
      }
    }, stepDuration);
  };

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const transitionClasses = prefersReducedMotion 
    ? '' 
    : 'transition-all duration-500 ease-out';

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
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="text-muted-foreground">Engagement → Efficiency</span>
            {state !== 'initial' && (
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="text-muted-foreground">TAT</span>
                  <ArrowDown className="w-3 h-3 text-primary" />
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-muted-foreground">Cost</span>
                  <ArrowDown className="w-3 h-3 text-primary" />
                </span>
                <span className="flex items-center gap-1">
                  <span className="text-muted-foreground">Accuracy</span>
                  <ArrowUp className="w-3 h-3 text-primary" />
                </span>
              </div>
            )}
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
        <div className="p-4 max-w-sm mx-auto">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-muted-foreground tracking-wide uppercase">
              Engagement → Efficiency
            </span>
            <ChevronUp className="w-4 h-4 text-muted-foreground rotate-180" />
          </div>

          <div className="space-y-2">
            <MetricRow 
              label="TAT" 
              direction="down" 
              value={state === 'active' || state === 'deep' ? displayValues.tat : null}
              showValue={state === 'active' || state === 'deep'}
            />
            <MetricRow 
              label="Cost" 
              direction="down" 
              value={state === 'active' || state === 'deep' ? displayValues.cost : null}
              showValue={state === 'active' || state === 'deep'}
            />
            <MetricRow 
              label="Accuracy" 
              direction="up" 
              value={state === 'active' || state === 'deep' ? displayValues.accuracy : null}
              showValue={state === 'active' || state === 'deep'}
            />
          </div>

          {state === 'deep' && (
            <a 
              href="/contact" 
              className="block mt-4 text-xs text-primary hover:text-primary/80 transition-colors text-center"
            >
              See this in your operations →
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
        "bg-card/95 backdrop-blur-sm rounded-xl shadow-lg border border-border/50",
        transitionClasses,
        state === 'initial' ? 'w-52 p-4' : 'w-64 p-5'
      )}
    >
      {/* Header - always visible */}
      <div className="flex items-center gap-2 text-xs tracking-wide uppercase text-muted-foreground">
        <span>Engagement</span>
        <span className="text-primary">→</span>
        <span>Efficiency</span>
      </div>

      {/* Metrics - revealed progressively */}
      <div 
        className={cn(
          transitionClasses,
          state === 'initial' 
            ? 'max-h-0 opacity-0 overflow-hidden mt-0' 
            : 'max-h-96 opacity-100 mt-4'
        )}
      >
        <div className="space-y-2.5">
          <MetricRow 
            label="TAT" 
            direction="down" 
            value={state === 'active' || state === 'deep' ? displayValues.tat : null}
            showValue={state === 'active' || state === 'deep'}
          />
          <MetricRow 
            label="Cost" 
            direction="down" 
            value={state === 'active' || state === 'deep' ? displayValues.cost : null}
            showValue={state === 'active' || state === 'deep'}
          />
          <MetricRow 
            label="Accuracy" 
            direction="up" 
            value={state === 'active' || state === 'deep' ? displayValues.accuracy : null}
            showValue={state === 'active' || state === 'deep'}
          />
        </div>

        {/* Microcopy */}
        <p 
          className={cn(
            "text-[10px] text-muted-foreground/70 mt-4 leading-relaxed",
            transitionClasses
          )}
        >
          {state === 'light' && "Early insights begin reducing friction."}
          {state === 'active' && "Intelligence compounds as the system is used."}
          {state === 'deep' && "Operational excellence, realized."}
        </p>

        {/* CTA - only at deep engagement */}
        <a 
          href="/contact"
          className={cn(
            "block mt-4 text-xs text-primary hover:text-primary/80 transition-colors",
            transitionClasses,
            state === 'deep' 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-2 pointer-events-none'
          )}
        >
          See this in your operations →
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

// Metric row subcomponent
const MetricRow = ({ 
  label, 
  direction, 
  value,
  showValue
}: { 
  label: string; 
  direction: 'up' | 'down'; 
  value: number | null;
  showValue: boolean;
}) => {
  const Arrow = direction === 'down' ? ArrowDown : ArrowUp;
  
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-foreground/80 font-medium">{label}</span>
      <div className="flex items-center gap-2">
        <Arrow className={cn(
          "w-3.5 h-3.5",
          direction === 'down' ? 'text-primary' : 'text-primary'
        )} />
        <span 
          className={cn(
            "w-10 text-right font-mono text-foreground/90 transition-opacity duration-300",
            showValue ? 'opacity-100' : 'opacity-0'
          )}
        >
          {showValue && value !== null ? `${value}%` : ''}
        </span>
      </div>
    </div>
  );
};

export default ProgressiveValueOverlay;
