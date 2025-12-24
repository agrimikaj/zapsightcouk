import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { ArrowRight, FileText, BookOpen, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const insights = [
  {
    type: 'Blog',
    icon: FileText,
    title: 'The Future of AI Agents in Enterprise',
    description: 'Exploring how autonomous AI agents are transforming enterprise operations and decision-making.',
    date: 'Dec 2024',
    href: '/insights/blogs',
  },
  {
    type: 'Whitepaper',
    icon: BookOpen,
    title: 'Building ROI-Driven AI Solutions',
    description: 'A comprehensive guide to measuring and maximizing return on AI investments.',
    date: 'Nov 2024',
    href: '/insights/whitepapers',
  },
  {
    type: 'Blog',
    icon: FileText,
    title: 'AI in Manufacturing: A Practical Guide',
    description: 'How manufacturers are leveraging AI for predictive maintenance and quality control.',
    date: 'Nov 2024',
    href: '/insights/blogs',
  },
  {
    type: 'Webinar',
    icon: Video,
    title: 'Data Pipelines for AI Success',
    description: 'Best practices for building AI-ready data infrastructure.',
    date: 'Oct 2024',
    href: '/insights/webinars',
  },
];

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights - ZapSight</title>
        <meta name="description" content="Explore ZapSight's insights on AI, data engineering, and enterprise transformation. Blogs, whitepapers, and industry analysis." />
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
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Knowledge Hub</p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                  <span className="text-primary">Insights</span> & Resources
                </h1>
                <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] max-w-3xl mx-auto">
                  Stay up to date with the latest trends in AI, data engineering, and enterprise transformation.
                </p>
              </div>
            </div>
          </section>

          {/* Insights Grid */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {insights.map((insight, index) => {
                  const IconComponent = insight.icon;
                  return (
                    <Link
                      key={index}
                      to={insight.href}
                      className="group block"
                    >
                      <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 h-full"
                           style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                                <IconComponent className="h-4 w-4 text-primary" strokeWidth={1.5} />
                              </div>
                              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                {insight.type}
                              </span>
                            </div>
                            <span className="text-xs text-[hsl(220,10%,45%)]">{insight.date}</span>
                          </div>
                          
                          <h3 className="font-display font-bold text-lg text-[hsl(0,0%,94%)] tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                            {insight.title}
                          </h3>
                          
                          <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed mb-4">
                            {insight.description}
                          </p>

                          <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />
            
            <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(0,0%,97%)] mb-6 tracking-tight">
                Want to Learn More?
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter for the latest insights and updates.
              </p>
              <Button size="xl" variant="hero" className="shadow-glow" asChild>
                <Link to="/contact">
                  Get in Touch
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

export default Insights;