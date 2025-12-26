import { Target, Brain, Shield, TrendingUp } from 'lucide-react';

const ValuePropositionSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Intelligence That Operates, Not Advises
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for organizations that care about outcomes, authority, and durability—not experiments.
          </p>
        </div>

        {/* Sub-sections */}
        <div className="space-y-12">
          {/* Embedded Proximity */}
          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Embedded Proximity
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ZapSight operates inside client teams—not from the outside. We work closely with product, marketing, security, and operations to identify where AI is misinterpreting, overlooking, or underperforming—and intervene directly. This proximity is how insight turns into execution.
                </p>
              </div>
            </div>
          </div>

          {/* Structured Intelligence */}
          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Structured Intelligence
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most organizations already have the expertise AI needs—but it isn't structured for machines. We systematize tacit knowledge—brand nuance, craftsmanship, operational judgment, risk logic—into reusable intelligence that powers discovery engines, AI assistants, and autonomous workflows. This intelligence compounds over time.
                </p>
              </div>
            </div>
          </div>

          {/* Production Reality */}
          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Built for Production Reality
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Everything we build is designed for messy data, partial automation, regulatory constraints, and human-in-the-loop requirements. Our infrastructure prioritizes reliability, observability, and adaptability—so AI improves over time instead of breaking at scale.
                </p>
              </div>
            </div>
          </div>

          {/* Measured Impact */}
          <div className="group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Measured by Real Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Success isn't models or dashboards—it's stronger AI-led discovery, faster and more accurate decisions, reduced operational noise and cost, and compounding system-level gains.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Statement */}
        <div className="mt-16 pt-12 border-t border-border/30">
          <p className="text-center text-lg md:text-xl text-foreground/90 font-medium max-w-3xl mx-auto">
            We don't "add AI"—we re-architect how intelligence flows from expertise to system to outcome, so AI works the way organizations actually operate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
