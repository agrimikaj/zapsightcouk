import { useIsMobile } from '@/hooks/use-mobile';

const NeuralBackground = () => {
  const isMobile = useIsMobile();
  
  // Reduce particles on mobile for better scroll performance
  const particleCount = isMobile ? 5 : 15;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(particleCount)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float will-change-transform"
          style={{
            left: `${(i * 100) / particleCount}%`,
            top: `${(i * 37) % 100}%`,
            animationDuration: `${5 + (i % 5)}s`,
            animationDelay: `${(i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
};

export default NeuralBackground;