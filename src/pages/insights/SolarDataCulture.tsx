 import { Helmet } from 'react-helmet-async';
 import Navbar from '@/components/layout/Navbar';
 import Footer from '@/components/layout/Footer';
 import NeuralBackground from '@/components/ui/NeuralBackground';
 import { ArrowRight, ArrowLeft } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 
 const SolarDataCulture = () => {
   return (
     <>
       <Helmet>
         <title>How Solar Infrastructure Leaders Killed the "File a Ticket" Data Culture - ZapSight</title>
         <meta name="description" content="Inside a deployment that turned 5 disparate systems and 100+ database tables into a 6-8x ROI — in under a month." />
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
                   <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">Case Study</span>
                   <span className="text-xs text-[hsl(220,10%,45%)]">Jan 2025</span>
                 </div>
                 
                 <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight leading-tight">
                   The Wait is the Killer: How Solar Infrastructure Leaders Killed the "File a Ticket" Data Culture
                 </h1>
                 
                 <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] leading-relaxed">
                   Inside a deployment that turned 5 disparate systems and 100+ database tables into a 6–8x ROI — in under a month.
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
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed text-lg mb-6 italic">
                         You know that specific dread?
                       </p>
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-6">
                         You're in a strategy meeting. Someone asks a question that requires data. Not big data. Not complicated data. Just… data.
                       </p>
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-6">
                         And then comes the familiar choreography. The nod. The "I'll get back to you on that." The invisible queue where that question joins seventeen others, waiting for an analyst to stop what they're doing, open SQL, write the query you've asked five times before, format it into PowerPoint, and hit send.
                       </p>
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-0">
                         Three days later, the decision window has closed. Or worse, someone made the call without the numbers.
                       </p>
                     </div>
 
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed text-xl font-medium">
                       This isn't a skills gap. It's an <strong className="text-primary">access architecture problem</strong>.
                     </p>
 
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                       I spent last quarter working with a solar infrastructure leader who had that exact infection point. Brilliant analytics team. Massive investment in data infrastructure. Five different enterprise systems humming with operational truth. Forty-plus business leaders who theoretically had "data access."
                     </p>
 
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                       In practice? <strong className="text-[hsl(0,0%,94%)]">They had a ticketing system.</strong>
                     </p>
 
                     {/* Section: When Data Abundance Creates Intelligence Scarcity */}
                     <div className="border-l-2 border-primary/30 pl-6 py-2">
                       <h2 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-4">When Data Abundance Creates Intelligence Scarcity</h2>
                       <div className="space-y-4">
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           Solar infrastructure is uniquely data-intensive. You're orchestrating field telemetry, financial forecasting, grid integration metrics, maintenance schedules, and regulatory reporting — often across global portfolios. This particular team had the classic "scattered across systems" problem: data living in silos that made sense architecturally but zero sense experientially.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           <strong className="text-[hsl(0,0%,94%)]">The result: Analysts functioning as human APIs.</strong>
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           Every insight required translation. Every question required routing. The bottleneck wasn't computation speed or storage cost. It was <em>organizational latency</em> — the friction between "I wonder" and "I know."
                         </p>
                       </div>
                     </div>
 
                     <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                       <p className="text-[hsl(0,0%,94%)] text-lg font-medium mb-0">
                         The modern enterprise doesn't need more dashboards. It needs fewer bottlenecks.
                       </p>
                     </div>
 
                     {/* Section: The Semantic Layer as Circuit Breaker */}
                     <div className="border-l-2 border-primary/30 pl-6 py-2">
                       <h2 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-4">The Semantic Layer as Circuit Breaker</h2>
                       <div className="space-y-4">
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           We implemented a <strong className="text-primary">Data Access Agent</strong> — not a chatbot, not another BI tool, but a reasoning layer that sits between human curiosity and database complexity.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           Think of it as building a semantic translation engine. Instead of asking an analyst to bridge business language and SQL, we unified 100+ tables into a simplified conceptual layer optimized for how executives actually think about their operations.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed text-xl font-medium">
                           The magic happens in the subtraction.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           By abstracting away the join logic, the schema navigation, the "which system tracks what" archaeology, we removed the dependency entirely. Leadership asks complex questions in plain language. The agent reasons across the unified semantic layer. Answers arrive in minutes, not days.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           Suddenly, your most expensive analytical talent stops pulling reports and starts building models. The 40+ leaders who were previously "data-adjacent" become fully autonomous. The queue disappears — not because people have fewer questions, but because the system can handle complexity without human middleware.
                         </p>
                       </div>
                     </div>
 
                     {/* Section: The Efficiency Multiplier Effect */}
                     <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8">
                       <h2 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-6">The Efficiency Multiplier Effect</h2>
                       <div className="grid md:grid-cols-2 gap-6 mb-6">
                         <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                           <div className="text-3xl font-bold text-primary mb-2">6–8 weeks</div>
                           <div className="text-sm text-[hsl(220,10%,55%)]">Typical deployment window</div>
                         </div>
                         <div className="text-center p-4 bg-primary/5 rounded-xl border border-primary/10">
                           <div className="text-3xl font-bold text-primary mb-2">6–8x ROI</div>
                           <div className="text-sm text-[hsl(220,10%,55%)]">Typical return</div>
                         </div>
                       </div>
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                         But the metric that mattered most to this team wasn't on the balance sheet. It was the change in meeting cadence. The shift from "let's table that until we have numbers" to "let me query that live."
                       </p>
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-0">
                         Decision cycles compressed from days to minutes. Strategic conversations became evidence-based in real-time, not retrospectively.
                       </p>
                     </div>
 
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                       This is what <strong className="text-[hsl(0,0%,94%)]">"AI-first operations"</strong> actually looks like — not replacing analysts, but amplifying them. Removing the mechanical drag so human intelligence can focus on what humans do best: judgment, context, and creative problem-solving.
                     </p>
 
                     {/* Section: The Broader Architecture Lesson */}
                     <div className="border-l-2 border-primary/30 pl-6 py-2">
                       <h2 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-4">The Broader Architecture Lesson</h2>
                       <div className="space-y-4">
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           There's a seductive trap in enterprise data: believing that consolidation means migration. It doesn't.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           This deployment didn't rip and replace five systems. It unified them in place via a semantic abstraction layer. The complexity still exists — it's just been containerized so humans don't have to wrestle with it.
                         </p>
                         <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                           We're seeing this pattern replicate across four global offices now, spanning five industries. The common thread? Organizations realizing that their AI strategy shouldn't start with automation — <strong className="text-primary">it should start with access</strong>.
                         </p>
                       </div>
                     </div>
 
                     <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center">
                       <p className="text-[hsl(0,0%,94%)] text-xl font-medium mb-0">
                         Democratize the asking. Centralize the reasoning. Accelerate the deciding.
                       </p>
                     </div>
 
                     <div className="space-y-4">
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                         The question for your organization: If your team could get complex, cross-system insights in the time it takes to have a conversation, what strategic problems would you solve next? What decisions are you currently making blind because the data latency is too high?
                       </p>
                       <p className="text-[hsl(220,10%,70%)] leading-relaxed font-medium">
                         We're building Data Access Agents for teams ready to find out.
                       </p>
                     </div>
                   </div>
                 </article>
 
                 {/* CTA */}
                 <div className="mt-16 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                   <h3 className="font-display text-2xl font-bold text-[hsl(0,0%,94%)] mb-4">
                     Ready to Eliminate Your Data Bottlenecks?
                   </h3>
                   <p className="text-[hsl(220,10%,55%)] mb-6 max-w-xl mx-auto">
                     Learn how Data Access Agents can transform your organization's decision-making.
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
 
 export default SolarDataCulture;