 import { Helmet } from 'react-helmet-async';
 import Navbar from '@/components/layout/Navbar';
 import Footer from '@/components/layout/Footer';
 import NeuralBackground from '@/components/ui/NeuralBackground';
 import { ArrowRight, ArrowLeft } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 
 const FutureOfBI = () => {
   return (
     <>
       <Helmet>
         <title>The Future of Business Intelligence is Here, and It's Powered by AI - ZapSight</title>
         <meta name="description" content="Discover how AI-powered business intelligence transforms raw data into strategic, actionable insights with predictive analytics." />
       </Helmet>
 
       <div className="min-h-screen bg-[hsl(220,20%,6%)]">
         <Navbar />
         <main>
           {/* Hero */}
           <section className="pt-28 pb-16 lg:pt-36 lg:pb-20 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
             <NeuralBackground />
             <div className="absolute inset-0 opacity-[0.015]" style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
               backgroundSize: '48px 48px'
             }} />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.02] rounded-full blur-[200px]" />
 
             <div className="container mx-auto px-4 lg:px-8 relative z-10">
               <div className="max-w-3xl mx-auto">
                 <Link to="/insights" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
                   <ArrowLeft className="h-4 w-4" />
                   <span className="text-sm font-medium">Back to Insights</span>
                 </Link>
                 
                 <div className="flex items-center gap-3 mb-6">
                   <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">Blog</span>
                   <span className="text-xs text-[hsl(220,10%,45%)]">Jan 2025</span>
                 </div>
                 
                 <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight leading-tight">
                   The Future of Business Intelligence is Here, and It's Powered by AI
                 </h1>
                 
                 <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] leading-relaxed">
                   Are you navigating the vast ocean of data, yet struggling to find the pearls of wisdom? In today's data-drenched world, this is a common paradox.
                 </p>
               </div>
             </div>
           </section>
 
           {/* Content */}
           <section className="py-12 lg:py-16 relative">
             <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
             
             <div className="container mx-auto px-4 lg:px-8 relative z-10">
               <div className="max-w-3xl mx-auto">
                 <article className="prose prose-invert prose-lg max-w-none">
                   <div className="space-y-8">
                     <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8">
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed text-lg mb-0">
                         Businesses are collecting more data than ever before, but the challenge of transforming that raw information into strategic, actionable insights remains a significant hurdle. The sheer volume, velocity, and variety of data can be paralyzing, leading to reactive decision-making, missed opportunities, and a constant feeling of playing catch-up.
                       </p>
                     </div>
 
                     <div className="space-y-6">
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                         This is where the next generation of Business Intelligence (BI) comes in. It's time to move beyond static dashboards and historical reporting. <strong className="text-[hsl(0,0%,94%)]">The future is about proactive, predictive, and prescriptive analytics.</strong>
                       </p>
 
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                         Introducing <strong className="text-primary">ZapSight</strong>, the revolutionary BI platform designed to cut through the noise. We believe that the true power of data is not just in what it tells you about the past, but in what it can predict about the future. ZapSight leverages the power of advanced Artificial Intelligence to comb through your complex datasets and deliver not just information, but intelligence.
                       </p>
                     </div>
 
                     <div className="bg-[hsl(220,20%,8%)] border border-primary/20 rounded-2xl p-8">
                       <h2 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-6">Our Platform Provides You With</h2>
                       <div className="space-y-6">
                         <div className="flex gap-4">
                           <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                           <div>
                             <h3 className="text-[hsl(0,0%,94%)] font-semibold mb-2">Predictive Analytics</h3>
                             <p className="text-[hsl(220,10%,60%)] mb-0">Foresee market trends and anticipate customer behavior before it happens.</p>
                           </div>
                         </div>
                         <div className="flex gap-4">
                           <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                           <div>
                             <h3 className="text-[hsl(0,0%,94%)] font-semibold mb-2">Actionable Insights</h3>
                             <p className="text-[hsl(220,10%,60%)] mb-0">Get clear, data-driven recommendations that empower you to make smarter decisions.</p>
                           </div>
                         </div>
                         <div className="flex gap-4">
                           <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0" />
                           <div>
                             <h3 className="text-[hsl(0,0%,94%)] font-semibold mb-2">Intuitive Interface</h3>
                             <p className="text-[hsl(220,10%,60%)] mb-0">Spend less time wrestling with data and more time acting on it.</p>
                           </div>
                         </div>
                       </div>
                     </div>
 
                     <div className="space-y-6">
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed text-xl font-medium text-center py-4">
                         Stop drowning in data and start making waves.
                       </p>
 
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                         The future of business intelligence isn't just about seeing the data; it's about <strong className="text-[hsl(0,0%,94%)]">understanding it, predicting it, and acting on it with confidence</strong>.
                       </p>
 
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                         Ready to revolutionize your data strategy and unlock the true potential of your business? Let's connect and explore how ZapSight can lead the way.
                       </p>
                     </div>
                   </div>
                 </article>
 
                 {/* CTA */}
                 <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                   <h3 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-4">
                     Ready to Transform Your Data Strategy?
                   </h3>
                   <p className="text-[hsl(220,10%,55%)] mb-6 max-w-xl mx-auto">
                     Discover how ZapSight can help you unlock the true potential of your business intelligence.
                   </p>
                   <Button size="xl" variant="hero" className="shadow-glow" asChild>
                     <Link to="/contact">
                       Get in Touch
                       <ArrowRight className="h-5 w-5 ml-2" />
                     </Link>
                   </Button>
                 </div>
               </div>
             </div>
           </section>
         </main>
         <Footer />
       </div>
     </>
   );
 };
 
 export default FutureOfBI;