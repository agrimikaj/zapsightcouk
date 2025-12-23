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
    <section id="products" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[hsl(220,25%,8%)] to-foreground" />
      
      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/[0.02] rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Our Products</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-background">
            AI Agents <span className="text-primary">Embedded in Your Data</span>
          </h2>
          <p className="text-background/50 text-lg max-w-2xl mx-auto">
            All our products are AI-agents that are embedded in the companies' data and customized to deliver business needs.
          </p>
        </header>

        {/* Spine Diagram */}
        <div className="max-w-5xl mx-auto relative">
          {/* Central spine line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            <div className="h-full w-full bg-gradient-to-b from-primary/0 via-primary/40 to-primary/0" />
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
                    <div className="w-4 h-4 rounded-full bg-[hsl(220,25%,10%)] border-2 border-primary/60 relative">
                      <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Horizontal connector line - desktop only */}
                  <div className={`absolute top-1/2 h-px w-[calc(50%-120px)] hidden lg:block ${
                    isLeft ? 'right-1/2 mr-2' : 'left-1/2 ml-2'
                  }`}>
                    <div className={`h-full w-full bg-gradient-to-r ${
                      isLeft ? 'from-primary/40 to-primary/20' : 'from-primary/20 to-primary/40'
                    }`} />
                  </div>

                  {/* Card - alternating sides on desktop, stacked on mobile */}
                  <div className={`lg:w-[calc(50%-40px)] ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'}`}>
                    <Link 
                      to={`/products/${layer.id}`}
                      className="block group"
                    >
                      <div className="relative rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-200 motion-reduce:transition-none cursor-pointer">
                        {/* Card background with gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,12%)] to-[hsl(220,25%,8%)]" />
                        
                        {/* Subtle border glow */}
                        <div className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                             style={{ 
                               boxShadow: 'inset 0 0 0 1px hsl(var(--primary) / 0.3), 0 0 50px hsl(var(--primary) / 0.15)' 
                             }} />
                        
                        {/* Inner glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none" />

                        {/* Card content */}
                        <div className={`relative p-4 lg:p-5 flex items-center gap-4 ${
                          !isLeft ? 'lg:flex-row-reverse lg:text-right' : ''
                        }`}>
                          {/* Icon container */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none"
                                 style={{
                                   background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)'
                                 }}>
                              <IconComponent className="h-6 w-6 text-primary" strokeWidth={1.5} />
                              {/* Icon glow */}
                              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                                   style={{ boxShadow: '0 0 25px hsl(var(--primary) / 0.4)' }} />
                            </div>
                          </div>

                          {/* Text content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-display font-bold text-base lg:text-lg text-background tracking-tight group-hover:text-primary transition-colors duration-200">
                                {layer.name}
                              </h3>
                              <span className="text-primary/60 text-xs font-medium hidden sm:inline">
                                {layer.tagline}
                              </span>
                            </div>
                            
                            <p className="text-background/40 text-sm line-clamp-1">
                              {layer.description}
                            </p>
                          </div>

                          {/* Arrow indicator */}
                          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
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
