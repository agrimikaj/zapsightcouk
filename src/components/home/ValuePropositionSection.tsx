import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Code, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understanding your business context, data landscape, and specific challenges through stakeholder interviews and technical assessment.',
    duration: '1 Week',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Designing the AI agent architecture, data pipelines, and workflow integrations tailored to your requirements.',
    duration: '1 Week',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Development',
    description: 'Building and training AI agents, establishing data connections, and developing agentic workflows.',
    duration: '2-3 Weeks',
    icon: Code,
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Deploying solutions in your environment with monitoring, testing, and comprehensive user training.',
    duration: '1 Week',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Continuous monitoring and enhancement to improve accuracy and performance over time.',
    duration: 'Ongoing',
    icon: TrendingUp,
  },
];

const ValuePropositionSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.02] rounded-full blur-[150px]" />
      
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 lg:mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Our Methodology</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
            How We <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-[hsl(220,10%,55%)] max-w-2xl mx-auto">
            A proven, structured approach to delivering AI solutions that work from day one.
          </p>
        </div>

        {/* Horizontal Cards */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={step.number}
                className="relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  flex: isHovered ? 2.5 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <div 
                  className={`
                    h-full min-h-[180px] lg:min-h-[220px] 
                    bg-[hsl(220,20%,8%)] border rounded-2xl p-5 lg:p-6
                    transition-all duration-300
                    ${isHovered 
                      ? 'border-primary/30 shadow-lg' 
                      : 'border-[hsl(220,16%,12%)]'
                    }
                  `}
                  style={{ 
                    boxShadow: isHovered 
                      ? '0 0 40px hsl(var(--primary) / 0.08)' 
                      : '0 0 40px hsl(var(--primary) / 0.02)' 
                  }}
                >
                  {/* Number badge */}
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-xs text-primary-foreground mb-4"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                      boxShadow: isHovered ? '0 0 20px hsl(var(--primary) / 0.35)' : '0 0 15px hsl(var(--primary) / 0.2)'
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`
                    w-10 h-10 rounded-xl flex items-center justify-center mb-4
                    bg-primary/10 border border-primary/15
                    transition-all duration-300
                    ${isHovered ? 'scale-110' : ''}
                  `}>
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className={`
                    font-display text-lg font-bold tracking-tight mb-2
                    transition-colors duration-200
                    ${isHovered ? 'text-primary' : 'text-[hsl(0,0%,94%)]'}
                  `}>
                    {step.title}
                  </h3>

                  {/* Duration badge */}
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded mb-3">
                    {step.duration}
                  </span>

                  {/* Description - shows on hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[hsl(220,10%,60%)] text-sm leading-relaxed overflow-hidden"
                      >
                        {step.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                {/* Connector line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-1 w-2 h-px bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
