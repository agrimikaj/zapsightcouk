import { Target, Brain, Shield, TrendingUp } from 'lucide-react';

const ValuePropositionSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}
      />
      
      {/* Ambient glows for depth */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/[0.015] rounded-full blur-[150px]" />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Our Approach</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-[hsl(0,0%,97%)]">
            Intelligence That <span className="text-primary">Operates</span>, Not Advises
          </h2>
          <p className="text-[hsl(220,10%,50%)] text-lg max-w-2xl mx-auto">
            Built for organizations that care about outcomes, authority, and durability—not experiments.
          </p>
        </div>

        {/* Sub-sections Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Embedded Proximity */}
          <div className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/25"
               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
            {/* Inner glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 bg-primary/10 border border-primary/15">
                <Target className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.25)' }} />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                Embedded Proximity
              </h3>
              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">
                ZapSight operates inside client teams—not from the outside. We work closely with product, marketing, security, and operations to identify where AI is misinterpreting, overlooking, or underperforming—and intervene directly.
              </p>
            </div>
          </div>

          {/* Structured Intelligence */}
          <div className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/25"
               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 bg-primary/10 border border-primary/15">
                <Brain className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.25)' }} />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                Structured Intelligence
              </h3>
              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">
                We systematize tacit knowledge—brand nuance, craftsmanship, operational judgment, risk logic—into reusable intelligence that powers discovery engines, AI assistants, and autonomous workflows.
              </p>
            </div>
          </div>

          {/* Production Reality */}
          <div className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/25"
               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 bg-primary/10 border border-primary/15">
                <Shield className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.25)' }} />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                Built for Production Reality
              </h3>
              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">
                Everything we build is designed for messy data, partial automation, regulatory constraints, and human-in-the-loop requirements. Our infrastructure prioritizes reliability, observability, and adaptability.
              </p>
            </div>
          </div>

          {/* Measured Impact */}
          <div className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/25"
               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
            
            <div className="relative">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 bg-primary/10 border border-primary/15">
                <TrendingUp className="w-6 h-6 text-primary" strokeWidth={1.5} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.25)' }} />
              </div>
              <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                Measured by Real Impact
              </h3>
              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">
                Success isn't models or dashboards—it's stronger AI-led discovery, faster and more accurate decisions, reduced operational noise and cost, and compounding system-level gains.
              </p>
            </div>
          </div>
        </div>

        {/* Concluding Statement */}
        <div className="mt-12 lg:mt-16 text-center">
          <div className="inline-block bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl px-8 py-6"
               style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.03)' }}>
            <p className="text-[hsl(0,0%,90%)] text-base md:text-lg font-medium max-w-3xl">
              We don't "add AI"—we re-architect how intelligence flows from expertise to system to outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
