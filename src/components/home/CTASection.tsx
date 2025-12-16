import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-hero-mesh opacity-10" />
      
      {/* Decorative Elements - Soft glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary-foreground/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-18 h-18 bg-primary-foreground/10 backdrop-blur-sm rounded-3xl mb-10 shadow-lg">
            <Zap className="h-9 w-9 text-primary-foreground" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6 tracking-tight text-balance">
            Ready to Transform Your Data Into Intelligent Actions?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading enterprises leveraging AI agents for breakthrough business outcomes. Start your journey in just 4-6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-floating hover:shadow-2xl transition-all duration-300 group rounded-2xl"
            >
              Schedule a Discovery Call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 rounded-2xl"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-10">
            <p className="text-primary-foreground/50 text-sm mb-5 uppercase tracking-wider font-medium">Trusted by enterprises across</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-primary-foreground/70">
              <span className="font-semibold text-lg">Energy</span>
              <span className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full" />
              <span className="font-semibold text-lg">Retail</span>
              <span className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full" />
              <span className="font-semibold text-lg">Manufacturing</span>
              <span className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full" />
              <span className="font-semibold text-lg">Security</span>
              <span className="w-1.5 h-1.5 bg-primary-foreground/30 rounded-full" />
              <span className="font-semibold text-lg">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;