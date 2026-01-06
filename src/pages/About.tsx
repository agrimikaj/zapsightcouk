import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import ValuesSection from '@/components/home/ValuesSection';
import { Users, Award, Globe, Lightbulb, Brain, Target, Shield, TrendingUp } from 'lucide-react';
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

          {/* Our Core Skills */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <header className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">What We Do</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
                  Our <span className="text-primary">Core Skills</span>
                </h2>
              </header>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { icon: Users, title: 'Data Engineering', desc: 'Building data pipelines and transformation for reliable AI foundations' },
                  { icon: Lightbulb, title: 'Applied AI', desc: 'ML algorithms and AI-agentic workflows tailored to your business' },
                  { icon: Award, title: 'Industry Expertise', desc: 'Deep domain knowledge across retail, energy, manufacturing, and financial services' },
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

          {/* Our Approach - mirrors the homepage section */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
              <header className="text-center mb-10 lg:mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Our Approach</p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
                  How We <span className="text-primary">Deliver Value</span>
                </h2>
              </header>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  { 
                    icon: Brain, 
                    title: 'SME Intelligence', 
                    desc: 'Our SMEs systematize—brand nuance, craftsmanship, operational judgment, risk logic—into reusable intelligence with our engineers that powers discovery engines, AI assistants, and autonomous workflows.' 
                  },
                  { 
                    icon: Target, 
                    title: 'Engineering Proximity', 
                    desc: "ZapSight's engineers operate inside client teams—not from the outside. We work closely with product, marketing, security, and operations to identify where AI is misinterpreting, overlooking, or underperforming—and intervene directly." 
                  },
                  { 
                    icon: Shield, 
                    title: 'Built for Production Reality', 
                    desc: 'Everything we build is designed for messy data, partial automation, regulatory constraints, and human-in-the-loop requirements. Our infrastructure prioritizes reliability, observability, and adaptability.' 
                  },
                  { 
                    icon: TrendingUp, 
                    title: 'Measured by Real Impact', 
                    desc: "Success isn't models or dashboards—it's stronger AI-led discovery, faster and more accurate decisions, reduced operational noise and cost, and compounding system-level gains." 
                  },
                ].map((item) => (
                  <div key={item.title} className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/25"
                       style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 bg-primary/10 border border-primary/15">
                        <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] mb-3 tracking-tight group-hover:text-primary transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-[hsl(220,10%,60%)] text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
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
