 import { Helmet } from 'react-helmet-async';
 import Navbar from '@/components/layout/Navbar';
 import Footer from '@/components/layout/Footer';
 import NeuralBackground from '@/components/ui/NeuralBackground';
 import { ArrowLeft, ArrowRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 
 const AgenticAIArchitecture = () => {
   return (
     <>
       <Helmet>
         <title>From Data to Decisions: Agentic AI Architecture - ZapSight</title>
         <meta name="description" content="Learn how Agentic AI Architecture powers the next generation of business intelligence, moving beyond dashboards toward decision-driven systems." />
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
                   From Data to Decisions: How Agentic AI Architecture Powers the Next Generation of Business Intelligence
                 </h1>
                 <p className="text-xl text-[hsl(220,10%,55%)] italic">
                   Traditional business intelligence was built for reports. Modern enterprises need systems built for decisions.
                 </p>
               </div>
             </div>
           </section>
 
           {/* Content */}
           <section className="py-12 lg:py-16 relative">
             <div className="container mx-auto px-4 lg:px-8">
               <article className="max-w-3xl mx-auto prose prose-invert prose-lg">
                 <p className="text-[hsl(220,10%,70%)] text-lg leading-relaxed">
                   As organizations adopt AI at scale, a new architecture is emerging — <strong className="text-white">Agentic AI Architecture</strong> — designed to move beyond dashboards and static analytics toward continuous, contextual, and outcome-driven decision-making.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] text-lg leading-relaxed">
                   In this blog, we break down the five-layer agentic stack and explain how it enables faster insights, better decisions, and real business impact.
                 </p>
 
                 <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">Why Traditional Analytics Is No Longer Enough</h2>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                   Most data platforms today excel at answering <em>what happened</em>. Very few help leaders understand <em>why it happened</em> or <em>what to do next</em>.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">Common challenges include:</p>
                 <ul className="space-y-2 text-[hsl(220,10%,70%)]">
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                     <span>Fragmented data across source systems</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                     <span>Delayed insights due to batch reporting</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                     <span>Heavy dependency on analysts for every question</span>
                   </li>
                   <li className="flex items-start gap-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                     <span>Lack of context when interpreting metrics</span>
                   </li>
                 </ul>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-4">
                   This is where agentic systems fundamentally change the game.
                 </p>
 
                 <h2 className="font-display text-2xl font-bold text-white mt-12 mb-6">The Five Layers of an Agentic AI Architecture</h2>
 
                 <div className="space-y-8">
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-3">1. Source Systems</h3>
                     <p className="text-xs text-primary/70 mb-3">Keywords: source systems, enterprise data, operational systems</p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">This is where business data originates:</p>
                     <ul className="space-y-1 text-[hsl(220,10%,60%)] text-sm">
                       <li>• ERP, CRM, MES, SCM</li>
                       <li>• Sensors, machines, logs</li>
                       <li>• Finance, HR, inventory, quality systems</li>
                     </ul>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-3">
                       These systems remain the system of record, holding the ground truth of business operations.
                     </p>
                   </div>
 
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-3">2. Data Backbone</h3>
                     <p className="text-xs text-primary/70 mb-3">Keywords: data backbone, data ingestion, data transformation, data pipelines</p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">The data backbone unifies and prepares data for intelligence:</p>
                     <ul className="space-y-1 text-[hsl(220,10%,60%)] text-sm">
                       <li>• Event-based ingestion from multiple systems</li>
                       <li>• Data transformation and schema harmonization</li>
                       <li>• Metadata management and data quality controls</li>
                       <li>• Real-time + historical data availability</li>
                     </ul>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-3">
                       This layer ensures data is AI-ready, reliable, and scalable.
                     </p>
                   </div>
 
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-3">3. Context & Memory Layer</h3>
                     <p className="text-xs text-primary/70 mb-3">Keywords: AI memory, business context, contextual intelligence</p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">
                       <strong className="text-white">This is what traditional BI completely lacks.</strong>
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">The context & memory layer:</p>
                     <ul className="space-y-1 text-[hsl(220,10%,60%)] text-sm">
                       <li>• Maintains historical business context</li>
                       <li>• Stores prior decisions, outcomes, and anomalies</li>
                       <li>• Separates truth (data) from memory (context)</li>
                       <li>• Enables agents to reason over time, not just snapshots</li>
                     </ul>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-3">
                       This allows AI to understand what just happened <em>and</em> what has happened before.
                     </p>
                   </div>
 
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-3">4. Agentic Layer</h3>
                     <p className="text-xs text-primary/70 mb-3">Keywords: agentic AI, AI agents, decision intelligence, autonomous agents</p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">
                       The agentic layer is where intelligence comes alive.
                     </p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">AI agents in this layer:</p>
                     <ul className="space-y-1 text-[hsl(220,10%,60%)] text-sm">
                       <li>• Analyze metrics and detect anomalies</li>
                       <li>• Generate first- and second-order insights</li>
                       <li>• Identify root causes and correlations</li>
                       <li>• Simulate scenarios and recommend actions</li>
                       <li>• Operate with human-in-the-loop controls</li>
                     </ul>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-3">
                       Instead of asking for reports, leaders interact with decision-making agents.
                     </p>
                   </div>
 
                   <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                     <h3 className="font-display text-xl font-bold text-white mb-3">5. Human Interfaces</h3>
                     <p className="text-xs text-primary/70 mb-3">Keywords: natural language analytics, AI copilots, decision workflows</p>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3">This layer connects humans to the system:</p>
                     <ul className="space-y-1 text-[hsl(220,10%,60%)] text-sm">
                       <li>• Chat-based analytics and natural language queries</li>
                       <li>• Role-specific dashboards and workflows</li>
                       <li>• Alerts, recommendations, and explanations</li>
                     </ul>
                     <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-3">
                       Business leaders don't need to learn SQL or dashboards — they simply ask questions and take action.
                     </p>
                   </div>
                 </div>
 
                 <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">How This Enables Better Business Decisions</h2>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">An agentic architecture shifts organizations from:</p>
                 <ul className="space-y-2 text-[hsl(220,10%,70%)]">
                   <li className="flex items-center gap-3">
                     <span>Reactive reporting</span>
                     <ArrowRight className="h-4 w-4 text-primary" />
                     <span className="text-white font-medium">Proactive decision-making</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <span>Manual analysis</span>
                     <ArrowRight className="h-4 w-4 text-primary" />
                     <span className="text-white font-medium">Automated insights</span>
                   </li>
                   <li className="flex items-center gap-3">
                     <span>Static dashboards</span>
                     <ArrowRight className="h-4 w-4 text-primary" />
                     <span className="text-white font-medium">Dynamic reasoning systems</span>
                   </li>
                 </ul>
 
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-6 mb-3">Use cases include:</p>
                 <ul className="space-y-1 text-[hsl(220,10%,60%)]">
                   <li>• Operations optimization</li>
                   <li>• Supply chain resilience</li>
                   <li>• Quality and yield improvement</li>
                   <li>• Inventory and working capital management</li>
                   <li>• Executive decision support</li>
                 </ul>
 
                 <h2 className="font-display text-2xl font-bold text-white mt-12 mb-4">The Future: From Analytics Platforms to Decision Platforms</h2>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                   The future of enterprise AI is not about more models — it's about <strong className="text-white">better architecture</strong>.
                 </p>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-3 mt-4">Agentic AI systems:</p>
                 <ul className="space-y-1 text-[hsl(220,10%,60%)]">
                   <li>• Learn continuously</li>
                   <li>• Reason across time and context</li>
                   <li>• Align insights directly to business outcomes</li>
                 </ul>
                 <p className="text-[hsl(220,10%,70%)] leading-relaxed mt-4">
                   Organizations that adopt this architecture will move faster, decide better, and operate with far greater intelligence.
                 </p>
 
                 <div className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary p-6 rounded-r-xl mt-12">
                   <h3 className="font-display text-xl font-bold text-white mb-3">Final Thought</h3>
                   <p className="text-[hsl(220,10%,70%)] leading-relaxed mb-4">
                     If your AI strategy still starts with dashboards, you're already behind.
                   </p>
                   <p className="text-[hsl(220,10%,70%)] leading-relaxed">
                     The real competitive advantage lies in building <strong className="text-white">agent-first, context-aware, decision-driven systems</strong> — where data doesn't just inform decisions, it actively drives them.
                   </p>
                 </div>
               </article>
 
               {/* CTA */}
               <div className="max-w-3xl mx-auto mt-12 text-center">
                 <p className="text-[hsl(220,10%,55%)] mb-6">Ready to move from insights to decisions?</p>
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
 
 export default AgenticAIArchitecture;