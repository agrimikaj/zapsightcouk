import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 rounded-2xl mb-8">
            <Zap className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Data Into Intelligent Actions?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Join leading enterprises leveraging AI agents for breakthrough business outcomes. Start your journey in just 4-6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Schedule a Discovery Call
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="ghost"
              className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-4">Trusted by enterprises across</p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/80">
              <span className="font-semibold">Energy</span>
              <span className="w-1 h-1 bg-primary-foreground/40 rounded-full" />
              <span className="font-semibold">Retail</span>
              <span className="w-1 h-1 bg-primary-foreground/40 rounded-full" />
              <span className="font-semibold">Manufacturing</span>
              <span className="w-1 h-1 bg-primary-foreground/40 rounded-full" />
              <span className="font-semibold">Security</span>
              <span className="w-1 h-1 bg-primary-foreground/40 rounded-full" />
              <span className="font-semibold">Insurance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
