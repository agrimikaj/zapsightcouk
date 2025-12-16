import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const ProgressiveValueOverlay = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((window.scrollY / scrollHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div 
            className="fixed right-3 top-1/2 -translate-y-1/2 z-50 cursor-pointer group"
            aria-label="Scroll progress indicator"
          >
            {/* Track */}
            <div className="relative w-1.5 h-32 bg-muted/30 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Fill - fills from bottom to top */}
              <div 
                className={cn(
                  "absolute bottom-0 left-0 w-full bg-primary/80 rounded-full",
                  !prefersReducedMotion && "transition-all duration-300 ease-out"
                )}
                style={{ height: `${scrollProgress}%` }}
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
