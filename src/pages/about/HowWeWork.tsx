import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import DataSourcesSection from '@/components/home/DataSourcesSection';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business context, data landscape, and specific challenges. This phase includes stakeholder interviews and technical assessment.',
    duration: '1 Week',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our team designs the AI agent architecture, data pipelines, and workflow integrations tailored to your requirements.',
    duration: '1 Week',
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build and train the AI agents, establish data connections, and develop the agentic workflows.',
    duration: '2-3 Weeks',
  },
  {
    number: '04',
    title: 'Deployment',
    description: 'Solutions are deployed in your environment with monitoring, testing, and user training.',
    duration: '1 Week',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Continuous monitoring and enhancement to improve accuracy and performance over time.',
    duration: 'Ongoing',
  },
];

const deliverables = [
  'AI-ready data pipelines',
  'Custom ML models & agents',
  'Agentic workflow automation',
  'Integration with existing systems',
  'Monitoring & analytics dashboard',
  'Documentation & training',
];

const HowWeWork = () => {
  return (
    <>
      <Helmet>
        <title>How We Work - ZapSight</title>
        <meta name="description" content="Discover ZapSight's proven methodology for delivering AI solutions. From discovery to deployment in 4-6 weeks." />
      </Helmet>

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
            <NeuralBackground />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.02] rounded-full blur-[200px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Our Methodology</p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                  How We <span className="text-primary">Work</span>
                </h1>
                <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] max-w-3xl mx-auto">
                  A proven, structured approach to delivering AI solutions that work from day one. We combine deep technical expertise with practical business understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Process Steps */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div key={step.number} className="relative flex gap-6 lg:gap-8">
                      {/* Timeline line */}
                      {index < steps.length - 1 && (
                        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/30 to-primary/5" />
                      )}
                      
                      {/* Step number */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-sm text-primary-foreground"
                             style={{
                               background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                               boxShadow: '0 0 20px hsl(var(--primary) / 0.25)'
                             }}>
                          {step.number}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 pb-8">
                        <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8"
                             style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] tracking-tight">{step.title}</h3>
                            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                              {step.duration}
                            </span>
                          </div>
                          <p className="text-[hsl(220,10%,55%)] leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Deliverables */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[150px]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12 text-[hsl(0,0%,97%)] tracking-tight">
                  What You <span className="text-primary">Get</span>
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-3 bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-primary" strokeWidth={2} />
                      </div>
                      <span className="text-[hsl(220,10%,70%)] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Data Sources */}
          <DataSourcesSection />

          {/* CTA */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />
            
            <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(0,0%,97%)] mb-6 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your data into intelligent AI agents.
              </p>
              <Button size="xl" variant="hero" className="shadow-glow" asChild>
                <Link to="/contact">
                  Schedule a Discovery Call
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HowWeWork;