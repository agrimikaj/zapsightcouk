import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, AlertTriangle, Lock, Camera, Bell, FileSearch, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SecurityIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Security | ZapSight</title>
        <meta name="description" content="Advanced AI-powered security solutions for threat detection, surveillance analytics, and risk management." />
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
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Industry Solutions</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 tracking-tight">
                AI in Security
              </h1>
              <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
                Deploy intelligent security solutions that proactively detect threats, analyze patterns, and protect your assets with AI-powered surveillance and risk management.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Modern security challenges require intelligent solutions that can process vast amounts of data in real-time. Our AI agents provide advanced threat detection, behavioral analytics, and automated response capabilities that transform reactive security into proactive protection.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Eye, title: 'Threat Detection', desc: 'Real-time anomaly identification' },
                  { icon: Camera, title: 'Video Analytics', desc: 'Intelligent surveillance processing' },
                  { icon: Bell, title: 'Alert Management', desc: 'Smart incident prioritization' },
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
                Our Security Solutions
              </h2>
              
              <div className="space-y-8">
                <SolutionCard
                  icon={Eye}
                  title="Threat Detection Agent"
                  description="Continuous monitoring across digital and physical environments to identify potential threats before they materialize, using behavioral analysis and pattern recognition."
                  benefits={['Anomaly detection', 'Behavioral analytics', 'Pattern recognition', 'Predictive threat modeling']}
                />
                
                <SolutionCard
                  icon={Camera}
                  title="Video Analytics Agent"
                  description="Advanced computer vision that transforms surveillance footage into actionable intelligence, detecting unauthorized access, suspicious behavior, and safety violations."
                  benefits={['Object detection & tracking', 'Facial recognition', 'Crowd analytics', 'Perimeter monitoring']}
                />
                
                <SolutionCard
                  icon={AlertTriangle}
                  title="Incident Response Agent"
                  description="Automates incident classification, prioritization, and response workflows, ensuring the right teams are notified instantly with full context."
                  benefits={['Auto-classification', 'Priority scoring', 'Response automation', 'Escalation management']}
                />
                
                <SolutionCard
                  icon={FileSearch}
                  title="Risk Assessment Agent"
                  description="Continuous risk evaluation across facilities, operations, and personnel, providing actionable insights for security resource allocation."
                  benefits={['Risk scoring', 'Vulnerability mapping', 'Compliance tracking', 'Resource optimization']}
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
                Security Impact
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '90%', label: 'Faster Threat Detection' },
                  { value: '75%', label: 'Reduction in False Alarms' },
                  { value: '60%', label: 'Improved Response Time' },
                  { value: '40%', label: 'Cost Reduction' },
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
                Enhance Your Security Posture
              </h2>
              <p className="text-background/70 mb-8">
                Discover how our AI-powered security solutions can protect your organization from evolving threats.
              </p>
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
                <Link to="/contact">Request a Security Assessment</Link>
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

export default SecurityIndustry;
