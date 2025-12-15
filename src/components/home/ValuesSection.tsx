import { Handshake, MessageCircle, Target } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Commit',
    description: 'We commit to delivering measurable outcomes. Every engagement is backed by clear milestones, timelines, and ROI targets.',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: MessageCircle,
    title: 'Clear',
    description: 'We believe in transparent communication. No jargon, no complexity—just clear explanations of how AI drives your business forward.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    description: 'We work as partners, not vendors. Your domain expertise combined with our AI capabilities creates solutions that truly fit.',
    color: 'from-amber-500 to-orange-600',
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4">Our Values</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="gradient-text">3C's</span> That Drive Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our core principles ensure every engagement delivers maximum value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="relative group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 text-center card-hover h-full">
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-10 w-10 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>

                  {/* Decorative Number */}
                  <div className="absolute top-4 right-4 font-display text-6xl font-bold text-primary/5">
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
