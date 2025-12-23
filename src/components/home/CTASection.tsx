import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[300px] bg-primary/[0.02] rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[hsl(0,0%,97%)] mb-6 tracking-tight text-balance">
            Ready to Transform Your Data Into <span className="text-primary">Intelligent Actions</span>?
          </h2>
          
          <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading enterprises leveraging AI agents for breakthrough business outcomes. Start your journey in just 4-6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              variant="hero"
              className="shadow-glow group"
              asChild
            >
              <Link to="/contact">
                Schedule a Discovery Call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="xl"
              variant="heroOutline"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-10">
            <p className="text-[hsl(220,10%,40%)] text-sm mb-5 uppercase tracking-wider font-medium">Trusted by enterprises across</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[hsl(220,10%,55%)]">
              <span className="font-semibold text-lg">Energy</span>
              <span className="w-1.5 h-1.5 bg-[hsl(220,16%,18%)] rounded-full" />
              <span className="font-semibold text-lg">Retail</span>
              <span className="w-1.5 h-1.5 bg-[hsl(220,16%,18%)] rounded-full" />
              <span className="font-semibold text-lg">Manufacturing</span>
              <span className="w-1.5 h-1.5 bg-[hsl(220,16%,18%)] rounded-full" />
              <span className="font-semibold text-lg">Security</span>
              <span className="w-1.5 h-1.5 bg-[hsl(220,16%,18%)] rounded-full" />
              <span className="font-semibold text-lg">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;