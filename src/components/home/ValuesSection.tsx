import { TrendingUp, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: TrendingUp,
    title: 'Value',
    subtitle: 'Commitment to',
    description: 'We measure success by the tangible value we create. Every solution is designed to deliver measurable ROI and lasting business impact.',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: Users,
    title: 'Customers',
    subtitle: 'Commitment to',
    description: 'Your success is our success. We prioritize understanding your unique challenges and building partnerships that drive mutual growth.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Lightbulb,
    title: 'Solutions',
    subtitle: 'Commitment to',
    description: 'We don\'t just solve problems—we innovate. Our solutions are tailored, forward-thinking, and designed to evolve with your needs.',
    color: 'from-amber-500 to-orange-600',
  },
];

const ValuesSection = () => {
  return (
    <section className="section-padding canvas-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-hero-mesh opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Our Values</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            Commitment To <span className="gradient-text">Value, Customers, & Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our foundational principles that guide every engagement and drive exceptional outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="card-floating p-8 lg:p-10 text-center h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-floating group-hover:scale-105 transition-transform duration-500`}>
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{value.subtitle}</p>
                  <h3 className="font-display text-2xl font-bold mb-4 tracking-tight gradient-text">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>

                  {/* Decorative Number */}
                  <div className="absolute top-6 right-6 font-display text-7xl font-bold text-primary/[0.03] select-none">
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
