import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from 'lucide-react';
import { getCaseStudyById, caseStudies } from '@/lib/case-studies';

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const caseStudy = caseStudyId ? getCaseStudyById(caseStudyId) : undefined;

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  // Find next and previous case studies for navigation
  const currentIndex = caseStudies.findIndex((cs) => cs.id === caseStudyId);
  const prevCaseStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextCaseStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} - Case Study | ZapSight</title>
        <meta name="description" content={caseStudy.description} />
      </Helmet>

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
            <NeuralBackground />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <Link 
                  to="/case-studies" 
                  className="inline-flex items-center gap-2 text-sm text-[hsl(220,10%,55%)] hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Case Studies
                </Link>

                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                    {caseStudy.industry}
                  </span>
                  {caseStudy.featured && (
                    <span className="text-xs font-semibold uppercase tracking-wider text-[hsl(220,10%,50%)] bg-[hsl(220,16%,14%)] px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                  {caseStudy.title}
                </h1>

                <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] mb-8 leading-relaxed">
                  {caseStudy.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm">
                  <div>
                    <p className="text-[hsl(220,10%,45%)] mb-1">Client</p>
                    <p className="text-[hsl(0,0%,90%)] font-medium">{caseStudy.client}</p>
                  </div>
                  <div className="w-px h-12 bg-[hsl(220,16%,14%)]" />
                  <div>
                    <p className="text-[hsl(220,10%,45%)] mb-1">Duration</p>
                    <p className="text-[hsl(0,0%,90%)] font-medium">{caseStudy.duration}</p>
                  </div>
                  <div className="w-px h-12 bg-[hsl(220,16%,14%)]" />
                  <div>
                    <p className="text-[hsl(220,10%,45%)] mb-1">Industry</p>
                    <p className="text-[hsl(0,0%,90%)] font-medium">{caseStudy.industry}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Results Stats */}
          <section className="py-12 bg-[hsl(220,20%,6%)] border-y border-[hsl(220,16%,10%)]">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="text-center">
                      <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">{result.value}</p>
                      <p className="text-sm text-[hsl(220,10%,55%)]">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
                    <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">The Challenge</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                      Problem Statement
                    </h2>
                    <p className="text-[hsl(220,10%,60%)] leading-relaxed text-lg">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Our Solution</p>
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                      What We Delivered
                    </h2>
                    <ul className="space-y-4">
                      {caseStudy.solution.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-[hsl(220,10%,60%)] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="py-12 bg-[hsl(220,20%,8%)]">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <p className="text-primary font-semibold mb-6 tracking-wide uppercase text-sm text-center">Technologies Used</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {caseStudy.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-full text-sm text-[hsl(220,10%,70%)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          {caseStudy.testimonial && (
            <section className="py-16 lg:py-24 relative overflow-hidden">
              <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
              
              <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
                  <blockquote className="font-display text-2xl md:text-3xl text-[hsl(0,0%,94%)] mb-8 leading-relaxed">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="text-[hsl(0,0%,90%)] font-semibold">{caseStudy.testimonial.author}</p>
                    <p className="text-[hsl(220,10%,50%)] text-sm">{caseStudy.testimonial.role}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Navigation */}
          <section className="py-12 bg-[hsl(220,20%,8%)] border-t border-[hsl(220,16%,10%)]">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  {prevCaseStudy ? (
                    <Link 
                      to={`/case-studies/${prevCaseStudy.id}`}
                      className="flex items-center gap-3 p-4 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-xl hover:border-primary/25 transition-colors group"
                    >
                      <ArrowLeft className="h-5 w-5 text-[hsl(220,10%,50%)] group-hover:text-primary transition-colors" />
                      <div>
                        <p className="text-xs text-[hsl(220,10%,45%)] mb-1">Previous</p>
                        <p className="text-sm text-[hsl(0,0%,90%)] font-medium">{prevCaseStudy.title}</p>
                      </div>
                    </Link>
                  ) : <div />}
                  
                  {nextCaseStudy ? (
                    <Link 
                      to={`/case-studies/${nextCaseStudy.id}`}
                      className="flex items-center gap-3 p-4 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-xl hover:border-primary/25 transition-colors group text-right sm:ml-auto"
                    >
                      <div>
                        <p className="text-xs text-[hsl(220,10%,45%)] mb-1">Next</p>
                        <p className="text-sm text-[hsl(0,0%,90%)] font-medium">{nextCaseStudy.title}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[hsl(220,10%,50%)] group-hover:text-primary transition-colors" />
                    </Link>
                  ) : <div />}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
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

export default CaseStudyDetail;