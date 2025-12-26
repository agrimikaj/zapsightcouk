import { Link } from 'react-router-dom';
import { ShoppingCart, Factory, HardHat, Zap, Shield, Cpu, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Industry {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
}

const industries: Industry[] = [
  {
    id: 'retail',
    name: 'Retail',
    description: 'AI-powered inventory optimization, customer analytics, and personalized experiences',
    icon: ShoppingCart,
    href: 'https://zapsightindustriesfurniture.lovable.app',
    external: true,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and production optimization',
    icon: Factory,
    href: '/industries/manufacturing',
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Project management, resource planning, and safety compliance',
    icon: HardHat,
    href: '/industries/construction',
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Asset monitoring, predictive analytics, and operational efficiency',
    icon: Zap,
    href: '/industries/energy',
  },
  {
    id: 'insurance',
    name: 'Insurance',
    description: 'Claims processing, risk assessment, and customer engagement',
    icon: Shield,
    href: '/industries/insurance',
  },
  {
    id: 'iot-security',
    name: 'IoT Security',
    description: 'Threat detection, device monitoring, and security automation',
    icon: Cpu,
    href: '/industries/security',
  },
];

const IndustriesSection = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.015] rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-10 lg:mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Industries We Serve</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
            AI Solutions <span className="text-primary">Across Industries</span>
          </h2>
          <p className="text-[hsl(220,10%,60%)] text-lg max-w-2xl mx-auto">
            Tailored AI agents designed for the unique challenges of each industry.
          </p>
        </header>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            const CardContent = (
              <div className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/25 h-full"
                   style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                {/* Inner glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 bg-primary/10 border border-primary/15">
                    <IconComponent className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.25)' }} />
                  </div>

                  {/* Content */}
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display font-bold text-lg text-[hsl(0,0%,94%)] tracking-tight group-hover:text-primary transition-colors duration-200">
                      {industry.name}
                    </h3>
                    {industry.external && (
                      <ExternalLink className="h-4 w-4 text-[hsl(220,10%,40%)] group-hover:text-primary/60 transition-colors" strokeWidth={1.5} />
                    )}
                  </div>
                  
                  <p className="text-[hsl(220,10%,60%)] text-sm leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            );

            return industry.external ? (
              <a
                key={industry.id}
                href={industry.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              <Link
                key={industry.id}
                to={industry.href}
                className="block"
              >
                {CardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;