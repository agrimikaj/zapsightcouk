 import { Helmet } from 'react-helmet-async';
 import Navbar from '@/components/layout/Navbar';
 import Footer from '@/components/layout/Footer';
 import NeuralBackground from '@/components/ui/NeuralBackground';
 import { ArrowLeft, ArrowRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 
 const DecisionIntelligence = () => {
   return (
     <>
       <Helmet>
         <title>ZapSight: A Decision Intelligence Environment - ZapSight</title>
         <meta name="description" content="ZapSight is a decision intelligence environment for AI that holds up in the real world. Decisions that are plausible, coherent, and legitimate." />
       </Helmet>
 
       <div className="min-h-screen bg-[hsl(220,20%,6%)]">
         <Navbar />
         <main>
           {/* Hero */}
           <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
             <NeuralBackground />
             <div className="absolute inset-0 opacity-[0.015]" style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
               backgroundSize: '48px 48px'
             }} />
 
             <div className="container mx-auto px-4 lg:px-8 relative z-10">
               <Link to="/insights" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
                 <ArrowLeft className="h-4 w-4" />
                 <span className="text-sm font-medium">Back to Insights</span>
               </Link>
               
               <div className="max-w-3xl">
                 <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">Blog</span>
                 <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight leading-tight">
                   ZapSight: A Decision Intelligence Environment for AI That Holds Up in the Real World
                 </h1>
                 <p className="text-xl text-[hsl(220,10%,55%)] italic">
                   AI has become remarkably good at generating answers. What it still struggles with is making decisions that hold up inside real businesses.
                 </p>
               </div>
             </div>
           </section>
 
           {/* Content */}
           <section className="py-12 lg:py-16 relative">
             <div className="container mx-auto px-4 lg:px-8">
               <article className="max-w-3xl mx-auto">
                 <p className="text-[hsl(220,10%,70%)] text-lg leading-relaxed mb-6">
                   Most AI systems today optimize for speed, novelty, or surface-level intelligence. They produce outputs that look impressive in isolation but begin to fracture the moment they meet operational constraints, human judgment, or leadership scrutiny. The result is a growing gap between what AI suggests and what organizations can confidently act on.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] text-lg leading-relaxed mb-8">
                   <strong className="text-white">ZapSight exists to close that gap.</strong>
                 </p>
 
                 <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">Beyond AI Outputs, Toward Decision Intelligence</h2>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                   ZapSight is not a tool that produces recommendations in a vacuum. It is a <strong className="text-white">decision intelligence environment</strong> — a structured thinking layer that sits between human intent, business reality, and AI reasoning.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                   Its purpose is simple but exacting: to ensure that AI-driven recommendations are not only intelligent, but <strong className="text-white">plausible, coherent, and legitimate</strong> within real business operations.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                   This distinction matters. Intelligence alone does not make a decision usable. Decisions must be executable by real teams, explainable across stakeholders, and defensible when outcomes are questioned. ZapSight is designed around this reality.
                 </p>
 
                 <div className="grid gap-6 mt-12">
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-4">Plausible by Design</h3>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                       Plausibility is the first condition of any decision that matters.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                       ZapSight treats operational reality as a design constraint, not an afterthought. Every recommendation is shaped with an awareness of real systems, real timelines, real dependencies, and real human capacity. Nothing relies on idealized conditions or "we'll figure it out later" logic.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                       If a decision cannot be realistically executed by the teams responsible for it, it does not belong in ZapSight. Plausibility is not something added during implementation — it is embedded from the start.
                     </p>
                   </div>
 
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-4">Coherent by Nature</h3>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                       Coherence is what allows decisions to be understood, trusted, and reused.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                       ZapSight ensures that reasoning flows end-to-end. Data inputs, assumptions, logic, and outcomes are connected in a way that can be traced without guesswork. There are no unexplained jumps, hidden logic, or black-box conclusions that require blind trust.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                       This coherence reduces friction across teams. Stakeholders don't need to reinterpret or defend decisions repeatedly. The reasoning speaks for itself, allowing alignment to happen faster and with less noise.
                     </p>
                   </div>
 
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-4">Legitimate by Consequence</h3>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                       Legitimacy is not claimed upfront. It is earned.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                       ZapSight treats legitimacy as something that emerges when decisions withstand scrutiny — when leaders can stand behind outcomes, when results are measurable, and when reasoning remains defensible even after the fact. This shifts AI from being a source of suggestions to a foundation for accountability.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                       Decisions made within ZapSight are not just accepted; they are <strong className="text-white">owned</strong>. Ownership is what allows organizations to scale AI responsibly without losing control or clarity.
                     </p>
                   </div>
                 </div>
 
                 <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">An Environment, Not an Assistant</h2>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                   ZapSight is intentionally designed as an <strong className="text-white">environment</strong> rather than an assistant or automation layer. It does not replace human judgment or assume authority over decisions. Instead, it strengthens judgment by making thinking visible, assumptions explicit, and responsibility traceable.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                   In this environment, humans remain accountable, AI remains supportive, and business reality remains central. This balance is what allows organizations to use AI without outsourcing responsibility or diluting trust.
                 </p>
 
                 <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl mt-12">
                   <h3 className="font-display text-xl font-bold text-white mb-3">Decisions That Hold</h3>
                   <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                     Ultimately, ZapSight stands for <strong className="text-white">decisions that hold</strong> — under pressure, over time, and across scrutiny.
                   </p>
                   <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                     By treating plausibility, coherence, and legitimacy as parallel requirements rather than sequential steps, ZapSight enables organizations to move beyond experimentation and into confident execution. Not faster decisions for their own sake, but decisions that last.
                   </p>
                   <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                     In an era where AI can generate almost anything, the real advantage belongs to systems that know what should endure. ZapSight is built for exactly that.
                   </p>
                 </div>
               </article>
 
               {/* CTA */}
               <div className="max-w-3xl mx-auto mt-12 text-center">
                 <p className="text-[hsl(220,10%,55%)] mb-6">Ready to build decisions that hold?</p>
                 <Button size="xl" variant="hero" className="shadow-glow" asChild>
                   <Link to="/contact">
                     Get in Touch
                     <ArrowRight className="h-5 w-5 ml-2" />
                   </Link>
                 </Button>
               </div>
             </div>
           </section>
         </main>
         <Footer />
       </div>
     </>
   );
 };
 
 export default DecisionIntelligence;