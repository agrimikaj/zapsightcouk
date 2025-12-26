import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import ValuesSection from '@/components/home/ValuesSection';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import EngagementMetrics from '@/components/about/EngagementMetrics';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - ZapSight</title>
        <meta name="description" content="Learn about ZapSight's mission to transform data into intelligent AI agents. Meet our leadership team and discover our global presence." />
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
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                  We Make <span className="text-primary">AI Work</span> for Enterprises
                </h1>
                <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] max-w-3xl mx-auto">
                  ZapSight is an AI solutions company focused on turning artificial intelligence into real, operational outcomes. We work with enterprises to design, build, and deploy agentic AI workflows that integrate seamlessly into existing systems.
                </p>
                <p className="text-base text-[hsl(220,10%,45%)] max-w-3xl mx-auto mt-4">
                  Our approach starts with business-critical use cases, works backward into the right data and AI architecture, and delivers measurable ROI within weeks.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section - moved from homepage */}
          <ValuesSection />

          {/* What You Can Expect */}
          <EngagementMetrics />

          {/* Capabilities Cards - after What You Can Expect */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Users, title: 'Data Engineering', desc: 'Building data pipelines and transformation for reliable AI foundations' },
                  { icon: Lightbulb, title: 'Applied AI', desc: 'ML algorithms and AI-agentic workflows tailored to your business' },
                  { icon: Award, title: 'Workflow Design', desc: 'End-to-end operational workflows with human-in-the-loop controls' },
                  { icon: Globe, title: 'Global Presence', desc: 'Teams across US, UK, UAE, and India with development based in India' },
                ].map((item) => (
                  <div key={item.title} className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-6 transition-all duration-300 hover:border-primary/20"
                       style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                         style={{
                           background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                           boxShadow: '0 0 20px hsl(var(--primary) / 0.25)'
                         }}>
                      <item.icon className="h-6 w-6 text-primary-foreground" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 text-[hsl(0,0%,94%)]">{item.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[150px]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-[hsl(0,0%,97%)] tracking-tight">
                Our <span className="text-primary">Leadership</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                {[
                  { 
                    name: 'Murtaza Bootwala', 
                    role: 'Co-Founder (Product & Technology)', 
                    bio: 'Former product leader at Amazon and TrueLayer, with a background in AI systems and enterprise platforms.',
                    education: 'INSEAD MBA, IIT Bombay'
                  },
                  { 
                    name: 'Pavan Sathiraju', 
                    role: 'Co-Founder (Revenue & Sales)', 
                    bio: 'Former McKinsey consultant with deep experience in enterprise strategy, data, and AI-led transformation.',
                    education: 'INSEAD MBA, NIT Rourkela'
                  },
                ].map((leader) => (
                  <div key={leader.name} className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8 text-center transition-all duration-300 hover:border-primary/20"
                       style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center text-primary-foreground font-display text-2xl font-bold"
                         style={{
                           background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                           boxShadow: '0 0 30px hsl(var(--primary) / 0.3)'
                         }}>
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1 text-[hsl(0,0%,94%)]">{leader.name}</h3>
                    <p className="text-primary font-medium mb-2">{leader.role}</p>
                    <p className="text-[hsl(220,10%,55%)] text-sm mb-3">{leader.bio}</p>
                    <p className="text-[hsl(220,10%,45%)] text-xs">{leader.education}</p>
                  </div>
                ))}
              </div>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-[hsl(220,10%,55%)] text-base leading-relaxed">
                  ZapSight brings together top-tier business talent from retail, energy, and financial services, alongside deep technical expertise in AI, data science, and data engineering. With teams across the US, UK, UAE, and India, and development based in India, we combine global perspective with execution depth.
                </p>
              </div>
            </div>
          </section>

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
                Ready to Partner With Us?
              </h2>
              <Button size="xl" variant="hero" className="shadow-glow" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
