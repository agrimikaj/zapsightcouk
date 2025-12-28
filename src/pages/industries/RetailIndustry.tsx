import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Users, TrendingUp, Package, Truck, BarChart3, Eye, MapPin, ClipboardCheck, ArrowRight, Zap, Target } from 'lucide-react';

const capabilities = [
  {
    id: 1,
    title: 'Floor Intelligence',
    icon: Eye,
    description: 'Real-time footfall patterns, hot zones, and dwell time analytics',
    stat: '12-15%',
    statLabel: 'Conversion Lift',
    agents: [
      { icon: MapPin, name: 'Live Heatmaps', desc: 'Track customer movement patterns' },
      { icon: Users, name: 'Traffic Analysis', desc: 'Peak hours and flow optimization' },
      { icon: Target, name: 'Zone Performance', desc: 'Product placement insights' },
    ]
  },
  {
    id: 2,
    title: 'Team Performance',
    icon: Users,
    description: 'Data-driven coaching and performance tracking for retail associates',
    stat: '40%',
    statLabel: 'Fewer Blind Spots',
    agents: [
      { icon: BarChart3, name: 'RSA Analytics', desc: 'Engagement scoring and metrics' },
      { icon: ClipboardCheck, name: 'Training Triggers', desc: 'Automated coaching insights' },
      { icon: TrendingUp, name: 'Incentive Tracking', desc: 'Performance-based rewards' },
    ]
  },
  {
    id: 3,
    title: 'Operations & Inventory',
    icon: Package,
    description: 'Smart procurement, warehouse optimization, and inventory accuracy',
    stat: '22%',
    statLabel: 'Forecast Accuracy',
    agents: [
      { icon: Package, name: 'SKU Intelligence', desc: 'Real-time inventory tracking' },
      { icon: Truck, name: 'Vendor Management', desc: 'Delivery and quality monitoring' },
      { icon: Zap, name: 'Replenishment AI', desc: 'Automated restock alerts' },
    ]
  },
];

const RetailIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Retail & Security | ZapSight</title>
        <meta name="description" content="AI-powered retail intelligence for floor analytics, team performance, inventory optimization, and security monitoring." />
      </Helmet>
      
      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
          
          {/* Neural Network Background */}
          <NeuralBackground />
          
          <div className="absolute inset-0 opacity-[0.015]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
          
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[180px]" />
          <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 backdrop-blur-sm border border-background/10 mb-8">
                <ShoppingCart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-background/70">Industry Solutions</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 tracking-tight">
                AI in <span className="text-primary">Retail & Security</span>
              </h1>
              
              <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto mb-12">
                Real-time intelligence for retail floors, warehouses, and operations. Transform every decision with data-driven insights.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                <div className="text-center">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary">12-15%</p>
                  <p className="text-sm text-background/50 mt-1">Conversion Lift</p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-background/10" />
                <div className="text-center">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary">3</p>
                  <p className="text-sm text-background/50 mt-1">Core Capabilities</p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-background/10" />
                <div className="text-center">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary">9</p>
                  <p className="text-sm text-background/50 mt-1">Specialized Agents</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-14 bg-gradient-to-b from-[hsl(220,20%,6%)] to-[hsl(220,20%,8%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Challenge</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
                  Why Retail Needs ZapSight
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  Retail operates on thin margins and complex logistics. Traditional tools can't keep up.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { before: 'Messy inventory', after: 'Clean visibility', desc: 'Transform scattered SKU data into crystal-clear inventory intelligence across every location.' },
                  { before: 'Slow decisions', after: 'Instant AI alerts', desc: 'Replace reactive management with proactive insights that reach you before problems escalate.' },
                  { before: 'Lost sales', after: 'Data-backed actions', desc: 'Convert missed opportunities into revenue with AI that understands your customer journey.' },
                ].map((item) => (
                  <div key={item.before} className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 hover:border-primary/25 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-[hsl(220,10%,50%)] line-through">{item.before}</span>
                      <ArrowRight className="h-3 w-3 text-primary" />
                      <span className="text-xs font-semibold text-primary">{item.after}</span>
                    </div>
                    <p className="text-[hsl(220,10%,60%)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-14 bg-gradient-to-b from-[hsl(220,20%,8%)] to-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
                  Retail Intelligence
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  Six powerful AI modules designed specifically for retail operations.
                </p>
              </div>

              <div className="space-y-8">
                {capabilities.map((cap, index) => (
                  <CapabilityCard key={cap.id} capability={cap} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-14 bg-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Solutions</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
                  Use Cases
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  Discover how ZapSight transforms every aspect of retail operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'RSA Performance Management', desc: 'Data-driven coaching and performance tracking for retail sales associates with automated incentive calculations.', tags: ['Engagement scoring', 'Training triggers', 'Incentive tracking'] },
                  { title: 'Vendor Management', desc: 'Streamline supplier relationships with automated compliance tracking, delivery monitoring, and quality scoring.', tags: ['Delivery accuracy', 'Lead time tracking', 'Quality metrics'] },
                  { title: 'Inventory Accuracy', desc: 'Eliminate discrepancies between system records and physical inventory with continuous AI-powered auditing.', tags: ['Shrinkage detection', 'Cycle counting', 'SKU reconciliation'] },
                  { title: 'Warehouse & PO', desc: 'Optimize storage layouts, track order fulfillment accuracy, and automate purchase order intelligence.', tags: ['Space utilization', 'Pick accuracy', 'PO automation'] },
                  { title: 'Product Discovery', desc: 'Understand which products catch attention, drive consideration, and convert to sales across your catalog.', tags: ['Interest mapping', 'Cross-sell insights', 'Trend detection'] },
                  { title: 'Damage Detection', desc: 'AI-powered visual inspection to identify product damage, wear, and quality issues before they reach customers.', tags: ['Early detection', 'Quality gates', 'Return prevention'] },
                ].map((useCase) => (
                  <div key={useCase.title} className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 hover:border-primary/25 transition-all duration-300">
                    <h3 className="font-display font-bold text-lg text-background mb-3">{useCase.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed mb-4">{useCase.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.tags.map((tag) => (
                        <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Real Impact, Real Numbers
                </h2>
                <p className="text-foreground/60">
                  Business-first metrics that matter to retail leadership
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '12-15%', label: 'Conversion Lift' },
                  { value: '40%', label: 'RSA Blind Spots ↓' },
                  { value: '22%', label: 'Forecast Accuracy' },
                  { value: '30%', label: 'Faster Replenishment' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-elevated transition-all duration-300">
                    <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-6">
                Ready to Transform Your Retail Operations?
              </h2>
              <p className="text-background/60 mb-8 text-lg">
                Let's discuss how our AI agents can optimize your store performance and drive measurable results.
              </p>
              <Button variant="hero" size="xl" className="group shadow-glow" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

interface Capability {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  stat: string;
  statLabel: string;
  agents: { icon: React.ComponentType<{ className?: string }>; name: string; desc: string }[];
}

const CapabilityCard = ({ capability, index }: { capability: Capability; index: number }) => {
  const IconComponent = capability.icon;
  
  return (
    <div className="group relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10 hover:shadow-elevated transition-all duration-500">
      <div className="absolute -top-4 left-8 px-4 py-1.5 bg-primary rounded-full">
        <span className="text-sm font-bold text-primary-foreground">0{capability.id}</span>
      </div>
      
      <div className="grid lg:grid-cols-[1fr,2fr] gap-8 items-start pt-4">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary to-primary/70 shadow-glow">
              <IconComponent className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">{capability.title}</h3>
              <p className="text-foreground/60 text-sm">{capability.description}</p>
            </div>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-4 inline-block">
            <p className="font-display text-3xl font-bold text-primary">{capability.stat}</p>
            <p className="text-xs text-foreground/50 uppercase tracking-wider">{capability.statLabel}</p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-4">
          {capability.agents.map((agent) => (
            <AgentMiniCard key={agent.name} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

const AgentMiniCard = ({ agent }: { agent: { icon: React.ComponentType<{ className?: string }>; name: string; desc: string } }) => {
  const IconComponent = agent.icon;
  
  return (
    <div className="bg-background/50 border border-border/30 rounded-xl p-4 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <IconComponent className="h-4 w-4 text-primary" />
        </div>
        <h4 className="font-semibold text-foreground text-sm">{agent.name}</h4>
      </div>
      <p className="text-xs text-foreground/50 leading-relaxed">{agent.desc}</p>
    </div>
  );
};

export default RetailIndustry;