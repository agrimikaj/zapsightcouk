import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Factory, Cog, BarChart3, Package, Truck, ClipboardCheck, Settings, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ManufacturingIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Manufacturing | ZapSight</title>
        <meta name="description" content="AI-powered solutions for manufacturing operations, supply chain optimization, and quality control." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/95 to-background" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Factory className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Industry Solutions</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 tracking-tight">
                AI in Manufacturing
              </h1>
              <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
                Transform your manufacturing operations with intelligent automation, predictive maintenance, and supply chain optimization powered by our specialized AI agents.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Manufacturing is undergoing a fundamental transformation driven by Industry 4.0 technologies. Our AI agents are designed to integrate seamlessly with existing systems while delivering measurable improvements in efficiency, quality, and cost reduction.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Cog, title: 'Production Optimization', desc: 'Maximize throughput and minimize waste' },
                  { icon: Package, title: 'Quality Control', desc: 'AI-powered defect detection and prevention' },
                  { icon: Truck, title: 'Supply Chain', desc: 'Intelligent inventory and logistics management' },
                ].map((item) => (
                  <div key={item.title} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-elevated transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Solutions */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Our Manufacturing Solutions
              </h2>
              
              <div className="space-y-8">
                <SolutionCard
                  icon={Settings}
                  title="Predictive Maintenance Agent"
                  description="Analyzes equipment sensor data to predict failures before they occur, reducing unplanned downtime by up to 45% and extending asset lifespan."
                  benefits={['Real-time equipment monitoring', 'Failure prediction algorithms', 'Automated maintenance scheduling', 'Spare parts optimization']}
                />
                
                <SolutionCard
                  icon={ClipboardCheck}
                  title="Quality Assurance Agent"
                  description="Computer vision and ML-powered quality inspection that catches defects with 99.5% accuracy, reducing scrap rates and improving customer satisfaction."
                  benefits={['Visual defect detection', 'Root cause analysis', 'Process parameter optimization', 'Compliance documentation']}
                />
                
                <SolutionCard
                  icon={BarChart3}
                  title="Production Planning Agent"
                  description="Optimizes production schedules based on demand forecasts, resource availability, and constraints to maximize OEE (Overall Equipment Effectiveness)."
                  benefits={['Demand-driven scheduling', 'Resource optimization', 'Bottleneck identification', 'What-if scenario analysis']}
                />
                
                <SolutionCard
                  icon={Truck}
                  title="Supply Chain Agent"
                  description="End-to-end supply chain visibility with intelligent demand forecasting, inventory optimization, and supplier risk management."
                  benefits={['Inventory optimization', 'Supplier performance tracking', 'Lead time prediction', 'Risk mitigation strategies']}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
                Proven Results
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '45%', label: 'Reduction in Downtime' },
                  { value: '30%', label: 'Inventory Cost Savings' },
                  { value: '25%', label: 'Quality Improvement' },
                  { value: '6-8X', label: 'ROI in 18 Months' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6">
                    <p className="font-display text-3xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-foreground/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-6">
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-background/70 mb-8">
                Let's discuss how our AI agents can optimize your operations and drive measurable results.
              </p>
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

interface SolutionCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
}

const SolutionCard = ({ icon: Icon, title, description, benefits }: SolutionCardProps) => (
  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-elevated transition-all duration-300">
    <div className="flex items-start gap-6">
      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10">
        <Icon className="h-7 w-7 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-foreground/70 leading-relaxed mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2 text-sm text-foreground/60">
              <span className="text-primary">•</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ManufacturingIndustry;
