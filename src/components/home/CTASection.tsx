import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dark Premium Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,12%)] via-[hsl(var(--primary)/0.15)] to-[hsl(220,25%,8%)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Decorative Elements - Soft glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/[0.1] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-18 h-18 rounded-3xl mb-10"
               style={{
                 background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                 boxShadow: '0 0 40px hsl(var(--primary) / 0.4)'
               }}>
            <Zap className="h-9 w-9 text-primary-foreground" strokeWidth={1.5} />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background mb-6 tracking-tight text-balance">
            Ready to Transform Your Data Into Intelligent Actions?
          </h2>
          
          <p className="text-background/60 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
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
              className="text-background border-background/20 hover:bg-background/10"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-10">
            <p className="text-background/40 text-sm mb-5 uppercase tracking-wider font-medium">Trusted by enterprises across</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-background/60">
              <span className="font-semibold text-lg">Energy</span>
              <span className="w-1.5 h-1.5 bg-background/20 rounded-full" />
              <span className="font-semibold text-lg">Retail</span>
              <span className="w-1.5 h-1.5 bg-background/20 rounded-full" />
              <span className="font-semibold text-lg">Manufacturing</span>
              <span className="w-1.5 h-1.5 bg-background/20 rounded-full" />
              <span className="font-semibold text-lg">Security</span>
              <span className="w-1.5 h-1.5 bg-background/20 rounded-full" />
              <span className="font-semibold text-lg">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
