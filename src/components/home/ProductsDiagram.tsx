import { Database, MessageSquare, BarChart3, Radio, Search, Wrench, FileText, ArrowRight, Layers } from 'lucide-react';

const products = [
  { name: 'Unifyer', icon: Database, category: 'Data Foundation', description: 'AI-Assisted Pipelines' },
  { name: 'DEasy', icon: MessageSquare, category: 'Data Access', description: 'Natural Language Queries' },
  { name: 'DashIA', icon: BarChart3, category: 'Visualization', description: 'Next-Gen Dashboards' },
  { name: 'Aisen', icon: Radio, category: 'IoT & Sensors', description: 'Sensor AI Integration' },
  { name: 'Seai', icon: Search, category: 'Discovery', description: 'AI Search Optimization' },
  { name: 'Builder', icon: Wrench, category: 'Automation', description: 'Workflow Platform' },
  { name: 'Docai', icon: FileText, category: 'Documents', description: 'Document Intelligence' },
];

const ProductsDiagram = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-mesh opacity-15" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Product Ecosystem</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight">
            One Platform, <span className="gradient-text">Seven Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our integrated suite of AI products work together to transform your entire data lifecycle.
          </p>
        </div>

        {/* Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Central Hub */}
          <div className="relative">
            {/* Connection Lines - Desktop */}
            <svg className="absolute inset-0 w-full h-full hidden lg:block" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-6">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <div
                    key={product.name}
                    className="group relative"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="card-floating p-5 lg:p-6 text-center h-full flex flex-col items-center justify-center hover:shadow-glow transition-all duration-500">
                      {/* Icon */}
                      <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4 shadow-elevated group-hover:scale-110 transition-transform duration-500">
                        <IconComponent className="h-7 w-7 lg:h-8 lg:w-8 text-primary-foreground" />
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="font-display font-bold text-base lg:text-lg tracking-tight mb-1">{product.name}</h3>
                      
                      {/* Category */}
                      <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                      
                      {/* Description - Hidden on mobile */}
                      <p className="text-xs text-muted-foreground hidden lg:block">{product.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Flow Arrows - Mobile */}
            <div className="lg:hidden flex justify-center items-center gap-2 my-8">
              <span className="text-xs text-muted-foreground font-medium">Data flows seamlessly between products</span>
            </div>

            {/* Integration Hub */}
            <div className="mt-12 lg:mt-16">
              <div className="card-floating p-8 lg:p-10 max-w-3xl mx-auto text-center shadow-glow">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-elevated">
                    <Layers className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-xl lg:text-2xl font-bold tracking-tight">ZapSight Platform</h3>
                    <p className="text-muted-foreground text-sm">Unified AI Infrastructure</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                  All products share a common data foundation, enabling seamless integration, unified insights, and coordinated AI agents across your organization.
                </p>

                {/* Flow Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                  <span className="px-4 py-2 bg-secondary/60 backdrop-blur-sm rounded-full text-foreground/80 font-medium shadow-soft">Ingest</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span className="px-4 py-2 bg-secondary/60 backdrop-blur-sm rounded-full text-foreground/80 font-medium shadow-soft">Transform</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span className="px-4 py-2 bg-secondary/60 backdrop-blur-sm rounded-full text-foreground/80 font-medium shadow-soft">Analyze</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                  <span className="px-4 py-2 bg-secondary/60 backdrop-blur-sm rounded-full text-foreground/80 font-medium shadow-soft">Act</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDiagram;
