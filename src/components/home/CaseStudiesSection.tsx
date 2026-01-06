import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { caseStudies } from '@/lib/case-studies';

const CaseStudiesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = 380;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-primary/[0.02] rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Success Stories</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
              Case <span className="text-primary">Studies</span>
            </h2>
          </div>
          
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll to previous case study"
              className={`p-3 rounded-xl border transition-all duration-200 ${
                canScrollLeft
                  ? 'border-[hsl(220,16%,14%)] bg-[hsl(220,20%,8%)] hover:bg-[hsl(220,20%,10%)] hover:border-primary/20 text-[hsl(220,10%,60%)] hover:text-primary'
                  : 'border-[hsl(220,16%,10%)] bg-[hsl(220,20%,7%)] text-[hsl(220,10%,30%)] cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll to next case study"
              className={`p-3 rounded-xl border transition-all duration-200 ${
                canScrollRight
                  ? 'border-[hsl(220,16%,14%)] bg-[hsl(220,20%,8%)] hover:bg-[hsl(220,20%,10%)] hover:border-primary/20 text-[hsl(220,10%,60%)] hover:text-primary'
                  : 'border-[hsl(220,16%,10%)] bg-[hsl(220,20%,7%)] text-[hsl(220,10%,30%)] cursor-not-allowed'
              }`}
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              to={`/case-studies/${study.id}`}
              className="block"
            >
              <div className="flex-shrink-0 w-[340px] md:w-[380px] snap-start group">
                <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 h-full hover:border-primary/25"
                     style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                  {/* Inner glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  
                  <div className="relative h-full flex flex-col">
                    {/* Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                        {study.industry}
                      </span>
                      {study.featured && (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-[hsl(220,10%,65%)] bg-[hsl(220,16%,14%)] px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-[hsl(0,0%,94%)] tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                      {study.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-[hsl(220,10%,60%)] text-sm leading-relaxed flex-1 mb-6">
                      {study.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                      <span>Read Case Study</span>
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Button variant="heroOutline" size="lg" asChild>
            <Link to="/case-studies">
              View All Case Studies
              <ArrowRight className="h-4 w-4 ml-2" strokeWidth={1.5} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;