import { useState, useEffect, useRef, useCallback } from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ProgressiveValueOverlay = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const lastProgressRef = useRef(0);

  const updateProgress = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? Math.min((window.scrollY / scrollHeight) * 100, 100) : 0;
    
    // Only update state if progress changed significantly (reduces re-renders)
    if (Math.abs(progress - lastProgressRef.current) > 0.5) {
      lastProgressRef.current = progress;
      setScrollProgress(progress);
    }
    rafRef.current = null;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Use RAF to batch layout reads and avoid forced reflows
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateProgress]);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="fixed right-3 top-1/2 -translate-y-1/2 z-50 cursor-pointer group"
            role="progressbar"
            aria-label="Scroll progress indicator"
            aria-valuenow={Math.round(scrollProgress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {/* Track */}
            <div className="relative w-1.5 h-32 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Fill - fills from bottom to top with orange to white gradient */}
              <div 
                className={cn(
                  "absolute bottom-0 left-0 w-full rounded-full",
                  !prefersReducedMotion && "transition-all duration-300 ease-out"
                )}
                style={{ 
                  height: `${scrollProgress}%`,
                  background: 'linear-gradient(to top, hsl(var(--primary)), hsl(0, 0%, 95%))'
                }}
              />
            </div>
            
            {/* Glow effect on hover */}
            <div className={cn(
              "absolute inset-0 w-1.5 rounded-full bg-primary/20 blur-sm opacity-0 group-hover:opacity-100",
              !prefersReducedMotion && "transition-opacity duration-200"
            )} />
          </div>
        </TooltipTrigger>
        <TooltipContent side="left" className="max-w-[200px] text-center">
          <p className="text-sm">The more you engage with ZapSight, the more efficiency you unlock</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ProgressiveValueOverlay;
