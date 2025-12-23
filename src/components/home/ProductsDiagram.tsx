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

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {layers.map((layer, index) => {
              const IconComponent = layer.icon;
              
              return (
                <Link 
                  key={layer.id}
                  to={`/products/${layer.id}`}
                  className="block group"
                >
                  <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-200 motion-reduce:transition-none cursor-pointer h-full">
                    {/* Card background with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,12%)] to-[hsl(220,25%,8%)]" />
                    
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                         style={{ 
                           boxShadow: 'inset 0 0 0 1px hsl(var(--primary) / 0.3), 0 0 50px hsl(var(--primary) / 0.15)' 
                         }} />
                    
                    {/* Inner glow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none" />

                    {/* Card content */}
                    <div className="relative p-5 lg:p-6 flex flex-col h-full">
                      {/* Icon container */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200 motion-reduce:transition-none"
                             style={{
                               background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)'
                             }}>
                          <IconComponent className="h-6 w-6 lg:h-7 lg:w-7 text-primary" strokeWidth={1.5} />
                          {/* Icon glow */}
                          <div className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                               style={{ boxShadow: '0 0 25px hsl(var(--primary) / 0.4)' }} />
                        </div>
                        
                        {/* Arrow indicator */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none">
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Text content */}
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg lg:text-xl text-background tracking-tight group-hover:text-primary transition-colors duration-200 mb-1">
                          {layer.name}
                        </h3>
                        <span className="text-primary/80 text-xs font-medium">
                          {layer.tagline}
                        </span>
                        
                        <p className="text-background/40 text-sm mt-3 line-clamp-2">
                          {layer.description}
                        </p>
                      </div>
                      
                      {/* Outcome badge */}
                      <div className="inline-flex items-center gap-1.5 mt-4">
                        <span className="w-1 h-1 rounded-full bg-primary/60" />
                        <span className="text-xs text-primary/70 font-medium">
                          {layer.outcome}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDiagram;
