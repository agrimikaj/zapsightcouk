import { Bot, Zap, Smartphone, Layout, Cloud, Wrench } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Agentic AI Workflows',
    description: 'Design, build, and deploy intelligent AI workflows that integrate seamlessly into existing systems',
  },
  {
    icon: Zap,
    title: '6-8X ROI Delivery',
    description: 'Proven returns per business use-case, measured across 12-18 months of deployment',
  },
  {
    icon: Smartphone,
    title: '4-6 Week Deployments',
    description: 'Rapid engagement per use-case including data pipelines, transformation, and ML algorithms',
  },
  {
    icon: Layout,
    title: 'Industry Expertise',
    description: 'Solutions for Energy, Retail, Manufacturing, Financial Services & Infrastructure',
  },
  {
    icon: Cloud,
    title: '99.9% Uptime',
    description: 'Enterprise-grade deployment on AWS, Azure, and Google Cloud with best-in-class AI models',
  },
  {
    icon: Wrench,
    title: '95-99% Accuracy',
    description: 'Gen-AI output accuracy with human-in-the-loop controls and E2E workflow measurement',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" aria-labelledby="why-choose-heading">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,12%)] via-[hsl(220,25%,10%)] to-[hsl(220,25%,8%)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Why Choose ZapSight</p>
          <h2 id="why-choose-heading" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-background">
            Turn AI into <span className="bg-gradient-to-r from-primary to-[hsl(25,95%,60%)] bg-clip-text text-transparent">Operational Outcomes</span>
          </h2>
          <p className="text-background/60 text-lg max-w-3xl mx-auto">
            We combine data engineering, applied AI, and workflow design to help organizations adopt agentic AI in their core operations—delivering measurable ROI within weeks.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <article
                key={feature.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 hover:bg-background/[0.05] hover:border-background/15"
                     style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.03), inset 0 1px 0 hsl(var(--background) / 0.05)' }}>
                  {/* Icon */}
                  <div className="w-12 h-12 mb-5 rounded-xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)'
                       }}>
                    <IconComponent className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-lg font-bold mb-2 tracking-tight text-background">
                    {feature.title}
                  </h3>
                  <p className="text-background/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
