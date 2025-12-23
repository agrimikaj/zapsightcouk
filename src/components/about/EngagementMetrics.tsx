import { Clock, TrendingUp, Target, Shield, Zap, Cloud, Bot } from 'lucide-react';

const metrics = [
  {
    id: 'timeline',
    value: '4-6',
    unit: 'Weeks',
    title: 'Rapid Deployment',
    description: 'Per business use-case engagement',
    details: [
      'Building data pipelines',
      'Data transformation',
      'ML algorithms / AI-agentic workflows',
    ],
    note: '+ 2-3 weeks active monitoring',
    icon: Clock,
    gradient: 'from-[hsl(200,80%,50%)] to-[hsl(220,80%,60%)]',
  },
  {
    id: 'roi',
    value: '6-8X',
    unit: 'ROI',
    title: 'Proven Returns',
    description: 'Per each business use-case',
    details: [
      'Measured across 12-18 months',
      'Tangible business impact',
      'Continuous value delivery',
    ],
    icon: TrendingUp,
    gradient: 'from-[hsl(25,95%,53%)] to-[hsl(35,95%,50%)]',
  },
  {
    id: 'accuracy',
    value: '95-99%',
    unit: 'Accuracy',
    title: 'Precision AI',
    description: 'Gen-AI output accuracy',
    details: [
      'Human-in-the-loop when needed',
      'Measured E2E for workflows',
      'Agentic Operations verified',
    ],
    icon: Target,
    gradient: 'from-[hsl(150,70%,45%)] to-[hsl(170,70%,50%)]',
  },
  {
    id: 'uptime',
    value: '99.9%',
    unit: 'Uptime',
    title: 'Enterprise Reliability',
    description: 'Solution availability',
    details: [
      'AWS + Azure + Google Cloud',
      'OpenAI, Gemini, Anthropic',
      'Best-in-class open source ML',
    ],
    icon: Shield,
    gradient: 'from-[hsl(280,70%,55%)] to-[hsl(300,70%,60%)]',
  },
];

const EngagementMetrics = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,10%)] to-[hsl(220,25%,8%)]" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/[0.08] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(200,80%,50%)]/[0.06] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-4">Our Commitment</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-background tracking-tight mb-4">
            What You Can <span className="bg-gradient-to-r from-primary to-[hsl(25,95%,60%)] bg-clip-text text-transparent">Expect</span>
          </h2>
          <p className="text-background/60 max-w-2xl mx-auto">
            Measurable outcomes, enterprise-grade reliability, and rapid time-to-value
          </p>
        </div>

        {/* Central Flow Diagram */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-0">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary animate-pulse" />
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.id}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-6 h-full transition-all duration-500 hover:bg-background/[0.06] hover:border-primary/20 hover:-translate-y-2"
                     style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.03)' }}>
                  
                  {/* Top Glow on Hover */}
                  <div className={`absolute -top-px left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-[1px]`} />
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 bg-gradient-to-br ${metric.gradient} shadow-lg`}>
                    <metric.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Value */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display text-4xl lg:text-5xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent`}>
                        {metric.value}
                      </span>
                      <span className="text-background/40 text-sm font-medium">{metric.unit}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-background mt-1">{metric.title}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-background/50 text-sm mb-4">{metric.description}</p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {metric.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-background/40">
                        <Zap className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  {metric.note && (
                    <div className="mt-4 pt-4 border-t border-background/10">
                      <p className="text-xs text-primary/80 italic">{metric.note}</p>
                    </div>
                  )}
                </div>

                {/* Connector Node - Desktop */}
                <div className="hidden lg:flex absolute -bottom-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-background/20 border border-background/30 items-center justify-center">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${metric.gradient}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Flow Indicator */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-full px-6 py-3">
              <Cloud className="h-5 w-5 text-primary" />
              <span className="text-background/60 text-sm">Powered by Leading Cloud Providers</span>
            </div>
            <div className="hidden md:flex items-center gap-3 bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-full px-6 py-3">
              <Bot className="h-5 w-5 text-primary" />
              <span className="text-background/60 text-sm">Enterprise-Grade AI Models</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementMetrics;
