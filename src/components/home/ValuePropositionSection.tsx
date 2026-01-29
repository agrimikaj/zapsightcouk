import { Check } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business context, data landscape, and specific challenges. This phase includes stakeholder interviews and technical assessment.',
    duration: '1 Week',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team designs the AI agent architecture, data pipelines, and workflow integrations tailored to your requirements.',
    duration: '1 Week',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build and train the AI agents, establish data connections, and develop the agentic workflows.',
    duration: '2-3 Weeks',
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Solutions are deployed in your environment with monitoring, testing, and user training.',
    duration: '1 Week',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Continuous monitoring and enhancement to improve accuracy and performance over time.',
    duration: 'Ongoing',
  },
];

const deliverables = [
  'AI-ready data pipelines',
  'Custom ML models & agents',
  'Agentic workflow automation',
  'Integration with existing systems',
  'Monitoring & analytics dashboard',
  'Documentation & training',
];

const ValuePropositionSection = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
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
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Our Methodology</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-[hsl(220,10%,55%)] max-w-2xl mx-auto">
            A proven, structured approach to delivering AI solutions that work from day one. We combine deep technical expertise with practical business understanding.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-5 lg:gap-6">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-14 bottom-0 w-px bg-gradient-to-b from-primary/30 to-primary/5" />
              )}
              
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-xs text-primary-foreground"
                     style={{
                       background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                       boxShadow: '0 0 20px hsl(var(--primary) / 0.25)'
                     }}>
                  {step.number}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-2">
                <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-5 lg:p-6"
                     style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-[hsl(0,0%,94%)] tracking-tight">{step.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-center mb-8 text-[hsl(0,0%,97%)] tracking-tight">
            What You <span className="text-primary">Get</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-4">
                <div className="w-7 h-7 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                </div>
                <span className="text-[hsl(220,10%,70%)] text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
