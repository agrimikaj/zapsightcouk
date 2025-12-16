import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { FileCheck, Calculator, Users, Shield, FileText, TrendingUp, AlertTriangle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InsuranceIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Insurance | ZapSight</title>
        <meta name="description" content="AI-powered insurance solutions for claims processing, underwriting automation, and fraud detection." />
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
                <FileCheck className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Industry Solutions</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 tracking-tight">
                AI in Insurance
              </h1>
              <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
                Transform insurance operations with intelligent automation for claims processing, underwriting, fraud detection, and customer engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                The insurance industry faces increasing pressure to reduce costs, improve customer experience, and manage risk more effectively. Our AI agents automate complex processes, enhance decision-making accuracy, and deliver measurable ROI across the insurance value chain.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: FileText, title: 'Claims Processing', desc: 'Automated assessment and settlement' },
                  { icon: Calculator, title: 'Underwriting', desc: 'Risk-based pricing optimization' },
                  { icon: AlertTriangle, title: 'Fraud Detection', desc: 'Pattern-based anomaly identification' },
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
                Our Insurance Solutions
              </h2>
              
              <div className="space-y-8">
                <SolutionCard
                  icon={FileText}
                  title="Claims Processing Agent"
                  description="End-to-end claims automation that extracts data from documents, validates coverage, assesses damage, and accelerates settlement — reducing processing time by up to 80%."
                  benefits={['Document extraction', 'Coverage validation', 'Damage assessment', 'Automated settlement']}
                />
                
                <SolutionCard
                  icon={Calculator}
                  title="Underwriting Agent"
                  description="Data-driven underwriting that analyzes risk factors from multiple sources to provide accurate pricing recommendations and policy structures in minutes instead of days."
                  benefits={['Risk scoring models', 'Multi-source data analysis', 'Pricing optimization', 'Policy structuring']}
                />
                
                <SolutionCard
                  icon={AlertTriangle}
                  title="Fraud Detection Agent"
                  description="Advanced pattern recognition that identifies suspicious claims and behaviors, reducing fraud losses while minimizing false positives that impact genuine customers."
                  benefits={['Anomaly detection', 'Network analysis', 'Behavioral patterns', 'Real-time alerts']}
                />
                
                <SolutionCard
                  icon={Users}
                  title="Customer Service Agent"
                  description="Intelligent customer engagement that handles inquiries, provides policy information, and guides customers through claims processes 24/7."
                  benefits={['24/7 availability', 'Policy guidance', 'Claims assistance', 'Personalized recommendations']}
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
                Business Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '80%', label: 'Faster Claims Processing' },
                  { value: '50%', label: 'Reduction in Fraud Losses' },
                  { value: '35%', label: 'Underwriting Cost Savings' },
                  { value: '95%', label: 'Customer Satisfaction' },
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
                Modernize Your Insurance Operations
              </h2>
              <p className="text-background/70 mb-8">
                See how our AI agents can transform your claims, underwriting, and customer service processes.
              </p>
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
                <Link to="/contact">Schedule a Demo</Link>
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

export default InsuranceIndustry;
