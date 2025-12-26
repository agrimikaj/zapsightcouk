import { Link } from 'react-router-dom';
import { Database, Radio, MessageSquare, Search, Users, Package, ClipboardList, Factory } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ProductLayer {
  id: string;
  name: string;
  tagline: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
}

const layers: ProductLayer[] = [
  {
    id: 'unifyer',
    name: 'Unifyer',
    tagline: 'AI-Assisted Data Pipelines',
    description: 'Builds AI-assisted and monitored data pipelines',
    outcome: 'Clean, monitored, AI-ready data',
    icon: Database,
  },
  {
    id: 'aidr',
    name: 'AIDR',
    tagline: 'Natural Language Data Access',
    description: 'Easy access of your data through Natural Language',
    outcome: 'Data access at your fingertips',
    icon: MessageSquare,
  },
  {
    id: 'aisac',
    name: 'AISAC',
    tagline: 'Sensor Intelligence',
    description: 'Integrates with sensor hardware ecosystem',
    outcome: 'Real-world signals → decisions',
    icon: Radio,
  },
  {
    id: 'aivi',
    name: 'AIVI',
    tagline: 'AI Visibility Intelligence',
    description: 'Improves AI-search ranking & discoverability',
    outcome: 'Intelligence that gets found',
    icon: Search,
  },
  {
    id: 'sapro',
    name: 'SAPRO',
    tagline: 'Sales Productivity Agent',
    description: 'Helps sales team be more productive & coached',
    outcome: 'Empowered sales teams',
    icon: Users,
  },
  {
    id: 'aiven',
    name: 'AIVEN',
    tagline: 'Inventory Intelligence',
    description: 'Managing inventory and building workflows',
    outcome: 'Optimized inventory operations',
    icon: Package,
  },
  {
    id: 'custex',
    name: 'Custex',
    tagline: 'Customer Experience Agent',
    description: 'Managing customer communications & engagement',
    outcome: 'Personalized customer engagement',
    icon: MessageSquare,
  },
  {
    id: 'profast',
    name: 'ProFast',
    tagline: 'Project Management Agent',
    description: 'Manage large-scale projects and executions',
    outcome: 'Accountable project delivery',
    icon: ClipboardList,
  },
  {
    id: 'proman',
    name: 'ProMan',
    tagline: 'Production & Labour Management',
    description: 'AI-led production and labour management',
    outcome: 'Optimized production operations',
    icon: Factory,
  },
];

const ProductsDiagram = () => {
  return (
    <section id="products" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.015] rounded-full blur-[200px]" />
      
      {/* Tech wave backgrounds */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,30% Q25%,25% 50%,30% T100%,30%" fill="none" stroke="url(#waveGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '8s' }} />
        <path d="M0,50% Q25%,45% 50%,50% T100%,50%" fill="none" stroke="url(#waveGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
        <path d="M0,70% Q25%,65% 50%,70% T100%,70%" fill="none" stroke="url(#waveGradient1)" strokeWidth="1" className="animate-pulse" style={{ animationDuration: '9s', animationDelay: '2s' }} />
      </svg>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-10 lg:mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Our Products</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
            AI Agents <span className="text-primary">Embedded in Your Data</span>
          </h2>
          <p className="text-[hsl(220,10%,60%)] text-lg max-w-2xl mx-auto">
            All our products are AI-agents that are embedded in the companies' data and customized to deliver business needs.
          </p>
        </header>

        {/* Spine Diagram */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central spine line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            <div className="h-full w-full bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />
          </div>

          {/* Products along the spine */}
          <div className="space-y-4 lg:space-y-0">
            {layers.map((layer, index) => {
              const IconComponent = layer.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={layer.id} className="relative lg:flex lg:items-center lg:min-h-[100px]">
                  {/* Connection node on spine - desktop only */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block">
                    <div className="w-4 h-4 rounded-full bg-[hsl(220,20%,8%)] border-2 border-primary/50 relative">
                      <div className="absolute inset-0 rounded-full bg-primary/15 animate-pulse" />
                    </div>
                  </div>

                  {/* Horizontal connector line - desktop only */}
                  <div className={`absolute top-1/2 h-px w-[calc(50%-120px)] hidden lg:block ${
                    isLeft ? 'right-1/2 mr-2' : 'left-1/2 ml-2'
                  }`}>
                    <div className={`h-full w-full bg-gradient-to-r ${
                      isLeft ? 'from-primary/30 to-primary/15' : 'from-primary/15 to-primary/30'
                    }`} />
                  </div>

                  {/* Card - alternating sides on desktop, stacked on mobile */}
                  <div className={`lg:w-[calc(50%-40px)] ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                    <Link 
                      to={`/products/${layer.id}`}
                      className="block group"
                    >
                      <div className="relative rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-200 motion-reduce:transition-none cursor-pointer bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] hover:border-primary/25"
                           style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.03)' }}>
                        {/* Inner glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none" />

                        {/* Card content */}
                        <div className={`relative p-5 lg:p-6 flex items-start gap-5 ${
                          !isLeft ? 'lg:flex-row-reverse lg:text-right' : ''
                        }`}>
                          {/* Icon container */}
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none bg-primary/10 border border-primary/15">
                              <IconComponent className="h-7 w-7 text-primary" strokeWidth={1.5} />
                              {/* Icon glow */}
                              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                                   style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.25)' }} />
                            </div>
                          </div>

                          {/* Text content */}
                          <div className="flex-1 min-w-0 space-y-1.5">
                            <h3 className="font-display font-bold text-lg lg:text-xl text-[hsl(0,0%,94%)] tracking-tight group-hover:text-primary transition-colors duration-200">
                              {layer.name}
                            </h3>
                            <p className="text-primary/70 text-sm font-medium">
                              {layer.tagline}
                            </p>
                            <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">
                              {layer.description}
                            </p>
                          </div>

                          {/* Arrow indicator */}
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none">
                            <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/15 flex items-center justify-center">
                              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDiagram;