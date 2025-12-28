import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  results: string[];
  href?: string;
  external?: boolean;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'vca',
    title: 'AI-Powered Customer Analytics',
    industry: 'Retail',
    description: 'Implementing advanced customer segmentation and predictive analytics to drive personalized experiences and increase conversion rates.',
    results: ['35% increase in conversion', '25% reduction in churn', 'Real-time customer insights'],
    featured: true,
  },
  {
    id: 'bosch',
    title: 'Predictive Maintenance Platform',
    industry: 'Manufacturing',
    description: 'Deploying AI agents for equipment monitoring and predictive maintenance, reducing downtime and optimizing operational efficiency.',
    results: ['40% reduction in downtime', '6.5X ROI achieved', 'Automated alerts & scheduling'],
    featured: true,
  },
  {
    id: 'furniture-retailer',
    title: 'Data Integration & AI Agents',
    industry: 'Retail',
    description: 'Integrated data from 5 siloed systems (CRM, PoS, Logistics, Finance) into a single AWS-based infrastructure with business context layering for retail operations.',
    results: ['$440K savings', '$1M revenue increase', '5X ROI achieved', 'Self-service reporting'],
    featured: true,
  },
  {
    id: 'pharma-pricing',
    title: 'Pricing Optimization',
    industry: 'Healthcare',
    description: 'Optimized pricing levers for an allergy brand to reduce reliance on unsustainable promotions using econometric models and what-if simulators.',
    results: ['Improved category profitability', 'Price elasticity modeling', 'ROI forecasting simulator'],
  },
  {
    id: 'tire-mroi',
    title: 'Marketing ROI Optimization',
    industry: 'Manufacturing',
    description: 'Determined optimal allocation of marketing resources across national and local promotional programs to maximize profitability.',
    results: ['Optimized marketing spend', 'ROI measurement per promotion', 'Revenue & profit impact analysis'],
  },
  {
    id: 'software-churn',
    title: 'Churn Prediction Model',
    industry: 'Technology',
    description: 'Built a churn probability model for advertisers to enable proactive retention activities and maximize revenue from text advertising.',
    results: ['Additional churn captured', 'Monthly high-risk advertiser list', 'Proactive intervention steps'],
  },
  {
    id: 'solar-data',
    title: 'Data Access Agent',
    industry: 'Energy',
    description: 'Streamlined data across 5 systems (100+ tables, 10K+ columns) by building semantic layer for quick, on-the-go business insights.',
    results: ['2X ROI (1st year)', '4X ROI (2nd year)', '3-day reduction in turnaround'],
  },
  {
    id: 'agri-quality',
    title: 'Reporting & Quality Agent',
    industry: 'Manufacturing',
    description: 'Optimized SAP-based data setup to automate 100+ reports and deployed quality agent to evaluate seed-lots and automate shipment-lots.',
    results: ['50% productivity improvement', '2X-5X ROI achieved', '48-hour turnaround reduction'],
  },
];

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies - ZapSight</title>
        <meta name="description" content="Explore how ZapSight has helped enterprises across industries transform their operations with AI agents. Real results, measurable ROI." />
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
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Success Stories</p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                  Case <span className="text-primary">Studies</span>
                </h1>
                <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] max-w-3xl mx-auto">
                  Real-world examples of how we've helped enterprises transform their operations with AI agents. Measurable outcomes, proven results.
                </p>
              </div>
            </div>
          </section>

          {/* Featured Case Studies */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-10 text-[hsl(0,0%,97%)] tracking-tight">
                Featured <span className="text-primary">Projects</span>
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {caseStudies.filter(s => s.featured).map((study) => {
                  const CardContent = (
                    <div className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8 transition-all duration-300 hover:border-primary/25 h-full"
                         style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                            {study.industry}
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-[hsl(220,10%,50%)] bg-[hsl(220,16%,14%)] px-2 py-1 rounded">
                            Featured
                          </span>
                        </div>
                        
                        <h3 className="font-display font-bold text-2xl text-[hsl(0,0%,94%)] tracking-tight mb-4 mt-4 group-hover:text-primary transition-colors duration-200">
                          {study.title}
                        </h3>
                        
                        <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-6">
                          {study.description}
                        </p>

                        <div className="space-y-2 mb-6">
                          {study.results.map((result) => (
                            <div key={result} className="flex items-center gap-2 text-sm text-[hsl(220,10%,65%)]">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200">
                          <span>View Full Case Study</span>
                          <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  );

                  return (
                    <a
                      key={study.id}
                      href={study.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {CardContent}
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          {/* All Case Studies */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[150px]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-10 text-[hsl(0,0%,97%)] tracking-tight">
                More <span className="text-primary">Success Stories</span>
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {caseStudies.filter(s => !s.featured).map((study) => (
                  <div
                    key={study.id}
                    className="block"
                  >
                    <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 h-full"
                         style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                      <div className="relative">
                        <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                          {study.industry}
                        </span>
                        
                        <h3 className="font-display font-bold text-lg text-[hsl(0,0%,94%)] tracking-tight mt-4 mb-3">
                          {study.title}
                        </h3>
                        
                        <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed mb-4">
                          {study.description}
                        </p>

                        <div className="space-y-1.5">
                          {study.results.map((result) => (
                            <div key={result} className="flex items-center gap-2 text-sm text-[hsl(220,10%,60%)]">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
                Want Similar Results?
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg mb-8 max-w-xl mx-auto">
                Let's discuss how we can help transform your operations with AI.
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

export default CaseStudies;