import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - ZapSight</title>
        <meta name="description" content="Learn about ZapSight's mission to transform data into intelligent AI agents. Meet our leadership team and discover our global presence." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          {/* Hero */}
          <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-accent">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  We Make <span className="gradient-text">AI Work</span> for Enterprises
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground">
                  ZapSight is an AI partnerships business that believes in data supremacy. There's no problem data cannot solve—and above solving it, data can bring innovation to everyday business functions.
                </p>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Users, title: 'Unified Data Platform', desc: 'Seamlessly connects siloed systems into a single, trusted data foundation' },
                  { icon: Lightbulb, title: 'AI-Driven Insights', desc: 'Transforms raw data into actionable intelligence for decision-making' },
                  { icon: Award, title: 'Agentic Workflows', desc: 'Automates complex business processes with intelligent AI agents' },
                  { icon: Globe, title: 'Global Presence', desc: 'Serving enterprises across US, UK, UAE, and India' },
                ].map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                    <item.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
                Our <span className="gradient-text">Leadership</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                  { name: 'Murtaza Bootwala', role: 'Co-Founder', education: 'IITB, INSEAD', experience: ['Amazon', 'PwC', 'MuSigma'] },
                  { name: 'Pavan Sathiraju', role: 'Co-Founder', education: 'NIT-R, INSEAD', experience: ['TrueLayer', 'McKinsey'] },
                ].map((leader) => (
                  <div key={leader.name} className="bg-card border border-border rounded-2xl p-8 text-center card-hover">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display text-2xl font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-1">{leader.name}</h3>
                    <p className="text-primary font-medium mb-2">{leader.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{leader.education}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {leader.experience.map((exp) => (
                        <span key={exp} className="text-xs px-3 py-1 bg-secondary rounded-full">{exp}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 gradient-primary">
            <div className="container mx-auto px-4 lg:px-8 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Partner With Us?
              </h2>
              <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Get in Touch
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
