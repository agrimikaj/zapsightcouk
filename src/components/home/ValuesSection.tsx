import { TrendingUp, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: 'Value',
    subtitle: 'Committed to',
    description: 'We measure success by outcomes, not activity. Every engagement is designed to deliver measurable ROI through faster decisions, higher accuracy, operational efficiency, and systems that perform reliably in production.',
  },
  {
    icon: Users,
    title: 'Customers',
    subtitle: 'Committed to',
    description: 'Your success defines ours. We invest time in understanding your business context, constraints, and workflows—ensuring the solutions we build are adopted, trusted, and aligned with long-term goals.',
  },
  {
    icon: Lightbulb,
    title: 'Solutions',
    subtitle: 'Committed to',
    description: 'Our solutions are tailored, execution-focused, and built to evolve with your business—turning AI into a practical, scalable part of everyday operations.',
  },
];

const ValuesSection = () => {
  return (
    <section className="py-10 lg:py-14 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-primary/[0.02] rounded-full blur-[180px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Our Values</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-[hsl(0,0%,97%)]">
            <span className="text-primary">Committed</span> to Value, Customers and Solutions
          </h2>
          <p className="text-[hsl(220,10%,55%)] text-lg max-w-2xl mx-auto">
            Why Leading Enterprises Choose ZapSight
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8 lg:p-10 text-center h-full transition-all duration-300 hover:border-primary/20"
                     style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                         boxShadow: '0 0 30px hsl(var(--primary) / 0.25)'
                       }}>
                    <IconComponent className="h-10 w-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <p className="text-xs text-[hsl(220,10%,45%)] uppercase tracking-widest mb-2">{value.subtitle}</p>
                  <h3 className="font-display text-2xl font-bold mb-4 tracking-tight text-primary">
                    {value.title}
                  </h3>
                  <p className="text-[hsl(220,10%,55%)] leading-relaxed">{value.description}</p>

                  {/* Decorative Number */}
                  <div className="absolute top-6 right-6 font-display text-7xl font-bold text-[hsl(220,16%,10%)] select-none">
                    {index + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;