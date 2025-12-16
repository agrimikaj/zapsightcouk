import { Database, Radio, FileText, MessageSquare, BarChart3, Wrench, Search } from 'lucide-react';
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
    id: 'aivi',
    name: 'AIVI',
    tagline: 'AI Visibility Intelligence',
    description: 'Improves AI-search ranking & discoverability',
    outcome: 'Intelligence that gets found',
    icon: Search,
  },
  {
    id: 'builder',
    name: 'Builder',
    tagline: 'Actions & Automation',
    description: 'Emails, tickets, ERP/CRM workflow orchestration',
    outcome: 'Insights → execution',
    icon: Wrench,
  },
  {
    id: 'dashia',
    name: 'DashIA',
    tagline: 'Insightful Dashboards',
    description: 'Engaging UI with embedded AI insights',
    outcome: 'See → understand → act',
    icon: BarChart3,
  },
  {
    id: 'deasy',
    name: 'DEasy',
    tagline: 'Natural Language Access',
    description: 'Ask questions in plain English',
    outcome: 'Anyone can access data',
    icon: MessageSquare,
  },
  {
    id: 'docai',
    name: 'DocAI',
    tagline: 'Unstructured Data Intelligence',
    description: 'OCR + visual LLM for documents',
    outcome: 'Documents → structured insights',
    icon: FileText,
  },
  {
    id: 'aisac',
    name: 'AISAC',
    tagline: 'Sensor Intelligence',
    description: 'Integrates with sensor hardware',
    outcome: 'Real-world signals → decisions',
    icon: Radio,
  },
  {
    id: 'unifyer',
    name: 'Unifyer',
    tagline: 'AI-Assisted Data Pipelines',
    description: 'Connects sources, builds AI-ready pipelines',
    outcome: 'Clean, monitored, AI-ready data',
    icon: Database,
  },
];

const ProductsDiagram = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
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
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">AI Intelligence Platform</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-background">
            The Vertical <span className="text-primary">Intelligence Stack</span>
          </h2>
          <p className="text-background/50 text-lg max-w-2xl mx-auto">
            From raw data to intelligent action — a unified platform where each layer amplifies the next.
          </p>
        </div>

        {/* Vertical Stack Diagram */}
        <div className="max-w-4xl mx-auto relative">
          {/* Central Intelligence Spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            {/* Animated pulse line */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/60 to-primary/0 animate-pulse" 
                 style={{ animationDuration: '3s' }} />
          </div>

          {/* Product Layers */}
          <div className="space-y-4 lg:space-y-6">
            {layers.map((layer, index) => {
              const IconComponent = layer.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={layer.id}
                  className="relative"
                >
                  {/* Connection node on spine */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block z-10">
                    <div className="w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]" />
                    </div>
                  </div>

                  {/* Horizontal connector line */}
                  <div 
                    className={`absolute top-1/2 -translate-y-1/2 h-px hidden lg:block ${
                      isLeft ? 'right-1/2 left-0 lg:left-auto lg:right-1/2 lg:w-[calc(50%-140px)] lg:mr-8' : 'left-1/2 lg:w-[calc(50%-140px)] lg:ml-8'
                    }`}
                    style={{
                      background: isLeft 
                        ? 'linear-gradient(to right, transparent, hsl(var(--primary) / 0.3))' 
                        : 'linear-gradient(to left, transparent, hsl(var(--primary) / 0.3))'
                    }}
                  />

                  {/* Product Card */}
                  <div className={`lg:w-[calc(50%-60px)] ${isLeft ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    <div className="group relative rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-200 motion-reduce:transition-none">
                      {/* Card background with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,25%,12%)] to-[hsl(220,25%,8%)]" />
                      
                      {/* Subtle border glow */}
                      <div className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                           style={{ 
                             boxShadow: 'inset 0 0 0 1px hsl(var(--primary) / 0.2), 0 0 40px hsl(var(--primary) / 0.1)' 
                           }} />
                      
                      {/* Inner glow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none" />

                      {/* Card content */}
                      <div className="relative p-5 lg:p-6 flex items-start gap-4 lg:gap-5">
                        {/* Icon container */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center relative"
                               style={{
                                 background: 'linear-gradient(135deg, hsl(var(--primary) / 0.15) 0%, hsl(var(--primary) / 0.05) 100%)'
                               }}>
                            <IconComponent className="h-6 w-6 lg:h-7 lg:w-7 text-primary" strokeWidth={1.5} />
                            {/* Icon glow */}
                            <div className="absolute inset-0 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 motion-reduce:transition-none"
                                 style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }} />
                          </div>
                        </div>

                        {/* Text content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 mb-1">
                            <h3 className="font-display font-bold text-lg lg:text-xl text-background tracking-tight">
                              {layer.name}
                            </h3>
                            <span className="text-primary/80 text-xs font-medium hidden sm:inline">
                              {layer.tagline}
                            </span>
                          </div>
                          
                          <p className="text-background/40 text-sm mb-2 line-clamp-1">
                            {layer.description}
                          </p>
                          
                          {/* Outcome badge */}
                          <div className="inline-flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-primary/60" />
                            <span className="text-xs text-primary/70 font-medium">
                              {layer.outcome}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom data source indicator */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full"
                 style={{ background: 'linear-gradient(135deg, hsl(220,25%,12%) 0%, hsl(220,25%,8%) 100%)' }}>
              <div className="flex -space-x-1">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-primary/60"
                    style={{ opacity: 1 - (i * 0.25) }}
                  />
                ))}
              </div>
              <span className="text-background/50 text-sm">Your Data Sources</span>
              <div className="w-8 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDiagram;
