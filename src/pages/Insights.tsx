import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { ArrowRight, FileText, Video, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const blogs = [
  {
    title: 'From Data to Decisions: How Agentic AI Architecture Powers the Next Generation of Business Intelligence',
    description: 'Traditional business intelligence was built for reports. Modern enterprises need systems built for decisions. Learn about the five-layer agentic stack.',
    date: 'Jan 2025',
    href: '/insights/agentic-ai-architecture',
  },
  {
    title: 'ZapSight: A Decision Intelligence Environment for AI That Holds Up in the Real World',
    description: 'AI has become remarkably good at generating answers. What it still struggles with is making decisions that hold up inside real businesses.',
    date: 'Jan 2025',
    href: '/insights/decision-intelligence',
  },
  {
    title: "The Future of Business Intelligence is Here, and It's Powered by AI",
    description: 'Discover how AI-powered BI transforms raw data into strategic insights with predictive analytics and actionable recommendations.',
    date: 'Jan 2025',
    href: '/insights/future-of-bi',
  },
  {
    title: 'The Wait is the Killer: How Solar Infrastructure Leaders Killed the "File a Ticket" Data Culture',
    description: 'Inside a deployment that turned 5 disparate systems and 100+ database tables into a 6–8x ROI — in under a month.',
    date: 'Jan 2025',
    href: '/insights/solar-data-culture',
  },
];

const resources = [
  {
    title: 'Agentic AI Architecture Whitepaper',
    description: 'A comprehensive guide to building decision-driven AI systems for enterprise environments.',
    type: 'Whitepaper',
  },
  {
    title: 'Data Access Agent Implementation Guide',
    description: 'Step-by-step technical documentation for deploying semantic data layers.',
    type: 'Guide',
  },
  {
    title: 'ROI Calculator for Decision Intelligence',
    description: 'Estimate the potential return on investment from implementing ZapSight.',
    type: 'Tool',
  },
];

const videos = [
  {
    title: 'ZapSight Platform Overview',
    description: 'A 5-minute introduction to the ZapSight decision intelligence platform.',
    duration: '5:00',
  },
  {
    title: 'Building Your First Data Access Agent',
    description: 'Watch how to set up a semantic layer and deploy your first agent.',
    duration: '12:30',
  },
  {
    title: 'Customer Success: Solar Infrastructure Case Study',
    description: 'Hear directly from our customers about their transformation journey.',
    duration: '8:45',
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

          {/* Blogs Section */}
          <section className="py-12 lg:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-[hsl(0,0%,97%)] tracking-tight">
                    Blogs
                  </h2>
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {blogs.map((blog, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                        <Link to={blog.href} className="group block h-full">
                          <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 h-full min-h-[220px] flex flex-col"
                               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            
                            <div className="relative flex flex-col flex-1">
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                  Blog
                                </span>
                                <span className="text-xs text-[hsl(220,10%,45%)]">{blog.date}</span>
                              </div>
                              
                              <h3 className="font-display font-bold text-lg text-[hsl(0,0%,94%)] tracking-tight mb-3 group-hover:text-primary transition-colors duration-200 line-clamp-2">
                                {blog.title}
                              </h3>
                              
                              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                {blog.description}
                              </p>

                              <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-200 mt-auto">
                                <span>Read More</span>
                                <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                              </div>
                            </div>
                          </div>
                        </Link>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 lg:-left-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
                  <CarouselNext className="right-0 lg:-right-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
                </Carousel>
              </div>
            </div>
          </section>

          {/* Resources Section */}
          <section className="py-12 lg:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,7%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-[hsl(0,0%,97%)] tracking-tight">
                    Resources
                  </h2>
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {resources.map((resource, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="group block h-full">
                          <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 transition-all duration-300 hover:border-primary/25 h-full min-h-[180px] flex flex-col"
                               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            
                            <div className="relative flex flex-col flex-1">
                              <span className="text-xs font-semibold uppercase tracking-wider text-primary/70 mb-3">
                                {resource.type}
                              </span>
                              
                              <h3 className="font-display font-bold text-lg text-[hsl(0,0%,94%)] tracking-tight mb-3 group-hover:text-primary transition-colors duration-200">
                                {resource.title}
                              </h3>
                              
                              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed flex-1">
                                {resource.description}
                              </p>

                              <div className="flex items-center gap-2 text-[hsl(220,10%,45%)] text-sm font-medium mt-4">
                                <span>Coming Soon</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 lg:-left-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
                  <CarouselNext className="right-0 lg:-right-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
                </Carousel>
              </div>
            </div>
          </section>

          {/* Videos Section */}
          <section className="py-12 lg:py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Video className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-[hsl(0,0%,97%)] tracking-tight">
                    Videos
                  </h2>
                </div>
              </div>

              <div className="max-w-6xl mx-auto">
                <Carousel
                  opts={{
                    align: 'start',
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {videos.map((video, index) => (
                      <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="group block h-full">
                          <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/25 h-full min-h-[240px] flex flex-col"
                               style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Video Thumbnail Placeholder */}
                            <div className="relative h-32 bg-[hsl(220,20%,10%)] flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                <Video className="h-5 w-5 text-primary" strokeWidth={1.5} />
                              </div>
                              <span className="absolute bottom-2 right-2 text-xs bg-black/60 px-2 py-1 rounded text-[hsl(0,0%,80%)]">
                                {video.duration}
                              </span>
                            </div>
                            
                            <div className="relative flex flex-col flex-1 p-5">
                              <h3 className="font-display font-bold text-base text-[hsl(0,0%,94%)] tracking-tight mb-2 group-hover:text-primary transition-colors duration-200">
                                {video.title}
                              </h3>
                              
                              <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed flex-1">
                                {video.description}
                              </p>

                              <div className="flex items-center gap-2 text-[hsl(220,10%,45%)] text-sm font-medium mt-3">
                                <span>Coming Soon</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 lg:-left-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
                  <CarouselNext className="right-0 lg:-right-12 bg-[hsl(220,20%,10%)] border-[hsl(220,16%,20%)] text-[hsl(0,0%,80%)] hover:bg-[hsl(220,20%,15%)] hover:text-white" />
                </Carousel>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Insights;