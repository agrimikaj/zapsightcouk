import { TrendingUp, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: 'Value',
    subtitle: 'Commitment to',
    description: 'We measure success by the tangible value we create. Every solution is designed to deliver measurable ROI and lasting business impact.',
  },
  {
    icon: Users,
    title: 'Customers',
    subtitle: 'Commitment to',
    description: 'Your success is our success. We prioritize understanding your unique challenges and building partnerships that drive mutual growth.',
  },
  {
    icon: Lightbulb,
    title: 'Solutions',
    subtitle: 'Commitment to',
    description: 'We don\'t just solve problems—we innovate. Our solutions are tailored, forward-thinking, and designed to evolve with your needs.',
  },
];

const ValuesSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,8%)] via-[hsl(220,25%,10%)] to-[hsl(220,25%,12%)]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient orbs */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <header className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Why Choose ZapSight</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-background">
            Why Leading Enterprises <span className="bg-gradient-to-r from-primary to-[hsl(25,95%,60%)] bg-clip-text text-transparent">Choose ZapSight</span>
          </h2>
          <p className="text-background/60 text-lg max-w-2xl mx-auto">
            Our foundational principles that guide every engagement and drive exceptional outcomes.
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
                <div className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-8 lg:p-10 text-center h-full transition-all duration-300 hover:bg-background/[0.05] hover:border-background/15"
                     style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.05), inset 0 1px 0 hsl(var(--background) / 0.05)' }}>
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                         boxShadow: '0 0 30px hsl(var(--primary) / 0.4)'
                       }}>
                    <IconComponent className="h-10 w-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <p className="text-xs text-background/50 uppercase tracking-widest mb-2">{value.subtitle}</p>
                  <h3 className="font-display text-2xl font-bold mb-4 tracking-tight bg-gradient-to-r from-primary to-[hsl(25,95%,60%)] bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-background/60 leading-relaxed">{value.description}</p>

                  {/* Decorative Number */}
                  <div className="absolute top-6 right-6 font-display text-7xl font-bold text-background/[0.03] select-none">
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
