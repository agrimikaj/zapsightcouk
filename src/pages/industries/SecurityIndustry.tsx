import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Camera, AlertTriangle, Bell, Lock, FileSearch, Users, ArrowRight, Activity } from 'lucide-react';

const capabilities = [
  {
    id: 1,
    title: 'Threat Detection',
    icon: Eye,
    description: 'Real-time anomaly identification and behavioral analytics',
    stat: '90%',
    statLabel: 'Faster Detection',
    agents: [
      { icon: Eye, name: 'Anomaly Detection', desc: 'Pattern-based threat identification' },
      { icon: Activity, name: 'Behavioral Analytics', desc: 'User and entity behavior analysis' },
      { icon: AlertTriangle, name: 'Predictive Modeling', desc: 'Anticipate threats before they occur' },
    ]
  },
  {
    id: 2,
    title: 'Video Analytics',
    icon: Camera,
    description: 'Intelligent surveillance processing and monitoring',
    stat: '75%',
    statLabel: 'Less False Alarms',
    agents: [
      { icon: Camera, name: 'Object Tracking', desc: 'Real-time detection and tracking' },
      { icon: Users, name: 'Crowd Analytics', desc: 'Density and flow monitoring' },
      { icon: Lock, name: 'Access Control', desc: 'Perimeter and zone monitoring' },
    ]
  },
  {
    id: 3,
    title: 'Incident Response',
    icon: Bell,
    description: 'Automated classification, prioritization, and response',
    stat: '60%',
    statLabel: 'Faster Response',
    agents: [
      { icon: Bell, name: 'Alert Management', desc: 'Smart incident prioritization' },
      { icon: FileSearch, name: 'Risk Assessment', desc: 'Continuous vulnerability mapping' },
      { icon: Shield, name: 'Response Automation', desc: 'Workflow-driven escalation' },
    ]
  },
];

const SecurityIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Security | ZapSight</title>
        <meta name="description" content="Advanced AI-powered security solutions for threat detection, surveillance analytics, and risk management." />
      </Helmet>
      
      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
          
          {/* Neural Network Background */}
          <NeuralBackground />
          

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 backdrop-blur-sm border border-background/10 mb-8">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-background/70">Industry Solutions</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 tracking-tight">
                AI in <span className="text-primary">Security</span>
              </h1>
              
              <p className="text-lg md:text-xl text-background/60 leading-relaxed max-w-2xl mx-auto mb-12">
                Proactive threat detection, intelligent surveillance, and automated incident response powered by AI.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                <div className="text-center">
                  <p className="font-display text-4xl lg:text-5xl font-bold text-primary">90%</p>
                  <p className="text-sm text-background/50 mt-1">Faster Detection</p>
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

        {/* Capabilities Section */}
        <section className="py-14 bg-gradient-to-b from-[hsl(220,20%,8%)] to-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
                  Security Intelligence
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  Transform reactive security into proactive protection with AI-powered threat detection and response.
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

        {/* Impact Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Security Impact
                </h2>
                <p className="text-foreground/60">
                  Measurable improvements in security operations
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '90%', label: 'Faster Threat Detection' },
                  { value: '75%', label: 'Reduction in False Alarms' },
                  { value: '60%', label: 'Improved Response Time' },
                  { value: '40%', label: 'Cost Reduction' },
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
                Enhance Your Security Posture
              </h2>
              <p className="text-background/60 mb-8 text-lg">
                Discover how our AI-powered security solutions can protect your organization from evolving threats.
              </p>
              <Button variant="hero" size="xl" className="group shadow-glow" asChild>
                <Link to="/contact">
                  Request a Security Assessment
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

export default SecurityIndustry;
