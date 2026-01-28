import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Diamond, Target, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CLaiMPage = () => {
  return (
    <>
      <Helmet>
        <title>CLaiM - AI Claims Analysis & Adjudication Platform | ZapSight</title>
        <meta name="description" content="CLaiM transforms fragmented transactions into transparent adjudication—rendering every decision traceable from medical reality to policy intent." />
      </Helmet>

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        
        <main>
          {/* Hero Section - Split Layout */}
          <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
            
            {/* Grid texture overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                {/* Content - 60% */}
                <div className="lg:col-span-3">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(0,0%,97%)] mb-6 tracking-tight">
                    Claims as{' '}
                    <span className="text-primary italic">Accountability</span>{' '}
                    Infrastructure
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-[hsl(220,10%,55%)] mb-10 leading-relaxed max-w-2xl">
                    CLaiM transforms fragmented transactions into transparent adjudication—rendering every decision traceable from medical reality to policy intent. Making claims processing predictable, transparent, and fast.
                  </p>

                  {/* Metric Trio */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="text-center">
                      <p className="font-display text-5xl lg:text-6xl font-bold text-primary mb-2">4</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Intelligence Layers</p>
                    </div>
                    <div className="text-center border-x border-[hsl(220,16%,12%)]">
                      <p className="font-display text-5xl lg:text-6xl font-bold text-primary mb-2">∞</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Audit Trail</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-5xl lg:text-6xl font-bold text-primary mb-2">0</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Black Boxes</p>
                    </div>
                  </div>

                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Initiate Consultation
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                </div>

                {/* Visual - 40% - Vertical Trail Diagram */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
                    
                    {/* Trail nodes */}
                    <div className="space-y-8">
                      {[
                        { label: 'Multi-Source', sublabel: 'Data Synthesis' },
                        { label: 'Coverage Logic', sublabel: 'Policy Mapping' },
                        { label: 'Determination', sublabel: 'AI Adjudication' },
                        { label: 'Transparency', sublabel: 'Audit Trail' },
                      ].map((node, i) => (
                        <div key={i} className="flex items-center gap-5 group">
                          <div className="relative z-10 w-12 h-12 rounded-full border-2 border-primary bg-[hsl(220,20%,8%)] flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <span className="font-display font-bold text-primary">{i + 1}</span>
                          </div>
                          <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl px-5 py-3 flex-1 group-hover:border-primary/30 transition-colors duration-300">
                            <p className="font-display font-semibold text-[hsl(0,0%,90%)]">{node.label}</p>
                            <p className="text-[hsl(220,10%,50%)] text-sm">{node.sublabel}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dark Manifesto Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />
            
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220,10%,30%) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Current State</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Distributed Ambiguity
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                The modern claim exists in a state of operational fragmentation. Documents arrive from disconnected sources, each speaking different institutional languages. Manual interpretation introduces variance. Tariff mismatches create invisible leakage. The result is not delay, but degradation—stakeholders cannot reconstruct why a decision was made, only that it was.
              </p>

              {/* 3-Card Grid - Friction Points */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    number: '01',
                    title: 'Fragmented Origins',
                    body: 'Claims arrive from hospitals, insurers, and customers simultaneously. Each source carries partial truth. Without synthesis, adjudication becomes an act of translation rather than analysis.',
                  },
                  {
                    number: '02',
                    title: 'Manual Variance',
                    body: 'Coverage interpretation varies by reviewer. Tariff checks are manual and error-prone. Consistency degrades with volume, creating operational risk at scale.',
                  },
                  {
                    number: '03',
                    title: 'Opacity of Decision',
                    body: 'Adjudication decisions lack audit clarity. Settlement cycles extend not because of complexity, but because the reasoning cannot be defended without reconstruction.',
                  },
                ].map((card, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-colors duration-300">
                    <span className="font-display text-4xl font-bold text-primary/40 mb-4 block">{card.number}</span>
                    <h3 className="font-display text-xl font-bold text-[hsl(0,0%,93%)] mb-3">{card.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] leading-relaxed">{card.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process Architecture - 4-Column Flow */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The System</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Parallel Validation Architecture
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                CLaiM does not replace core policy systems. It creates an intelligence layer where admissibility, payability, and transparency evolve simultaneously—ensuring that what is recommended is executable, understandable, and defensible in a single flow.
              </p>

              {/* Horizontal timeline connector */}
              <div className="hidden lg:block relative mb-8">
                <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              {/* 4-Column Steps */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    number: 1,
                    title: 'AI Analysis & Categorization',
                    body: 'NLP & ML engines synthesize multi-source inputs. Claims are categorized by coverage topology (Health, Liability, Property) with associated amounts, not merely by invoice sequence.',
                  },
                  {
                    number: 2,
                    title: 'Policy & Limit Review',
                    body: 'Dynamic review of policy details, coverage limits, deductibles, and outstanding balances. Policy limits are checked against reality, not static documentation.',
                  },
                  {
                    number: 3,
                    title: 'Tariff Verification',
                    body: 'Expected tariffs verified at line-item level against standard pricing models and expected cost benchmarks. Pre-settlement validation prevents leakage.',
                  },
                  {
                    number: 4,
                    title: 'Intelligent Adjudication',
                    body: 'Medical admissibility per ICMR codes processed through explainable AI reasoning. Business rules determine liability, calculating exact payables with full audit trails.',
                  },
                ].map((step, i) => (
                  <div key={i} className="relative">
                    {/* Step number */}
                    <div className="w-12 h-12 rounded-full border-2 border-primary bg-[hsl(220,20%,8%)] flex items-center justify-center mb-6 relative z-10">
                      <span className="font-display text-xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-[hsl(0,0%,93%)] mb-3">{step.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Triad Framework - 3-Column Dark */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Operational Dimensions</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Traceability <span className="text-primary">∙</span> Intelligibility <span className="text-primary">∙</span> Solidity
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                CLaiM embeds ZapSight's accountability framework into claims operations. These three dimensions evolve in parallel, preventing the common failure modes: ideas that sound logical but can't be executed, insights that are actionable but poorly explained, or results that look impressive but fail to create real impact.
              </p>

              {/* 3-Column Pillars */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: Diamond,
                    title: 'Traceability',
                    body: 'Every claim component mapped to its source. The trail connects hospital discharge summaries to tariff line items to policy clauses to final payable calculation. Nothing emerges from black boxes; everything exists in an unbroken chain of custody from data to decision.',
                    meta: 'Source → Logic → Output',
                  },
                  {
                    icon: Target,
                    title: 'Intelligibility',
                    body: 'From ICD codes to line-item exclusions, reasoning is made visible. Stakeholders witness not just what was decided, but why—through transparent calculation of insurance payable versus claimant payable, deductible applications, and non-covered item rationales.',
                    meta: 'Logic → Rationale → Defense',
                  },
                  {
                    icon: Square,
                    title: 'Solidity',
                    body: 'Outcomes withstand actuarial and operational scrutiny. Recommendations emerge already validated against medical admissibility standards, tariff compliance, and policy constraints—solutions that can be deployed because their feasibility is structurally verified.',
                    meta: 'Validation → Execution → Impact',
                  },
                ].map((pillar, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-colors duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mb-6">
                      <pillar.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[hsl(0,0%,93%)] mb-4">{pillar.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-4">{pillar.body}</p>
                    <p className="text-primary/70 text-sm font-medium">{pillar.meta}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Differentiator Grid - 2-Column */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Differentiation</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Beyond Rule Sprawl
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Traditional claims tools rely on static rule engines that crumble under edge cases. CLaiM operates through architectural principles that remain coherent under complexity.
              </p>

              {/* 2-Column Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    number: 'I',
                    title: 'Unified Field Input',
                    body: 'Not single-source, but multi-source synthesis. Hospital records, insurer databases, and customer submissions analyzed in one continuous flow, creating a unified claim topology rather than fragmented document piles.',
                  },
                  {
                    number: 'II',
                    title: 'Coverage Topology',
                    body: 'Not document-first, but coverage-first structuring. Claims organized by coverage areas with associated financial exposure, revealing the true liability landscape beneath the invoice surface.',
                  },
                  {
                    number: 'III',
                    title: 'Dynamic Limit Awareness',
                    body: 'Policy limits versus reality. Continuous review of outstanding balances across claim categories prevents over-extension and under-reserving in real-time.',
                  },
                  {
                    number: 'IV',
                    title: 'Pre-emptive Tariff Validation',
                    body: 'Tariff-aware before settlement. Expected costs verified at line-item level against pricing models, catching discrepancies before they become leakage.',
                  },
                  {
                    number: 'V',
                    title: 'Reasoning Engines',
                    body: 'AI-led adjudication, not rule sprawl. Claims processed through interpretable reasoning with explainable outcomes, allowing auditors to follow the cognitive path of the determination.',
                  },
                  {
                    number: 'VI',
                    title: 'Transparent Liability',
                    body: 'Insurance payable and claimant payable calculated as explicit, defensible figures. Every deductible, co-pay, and exclusion traced to its policy origin.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 p-6 bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl hover:border-primary/20 transition-colors duration-300">
                    <span className="font-display text-2xl font-bold text-primary/50 flex-shrink-0">{item.number}.</span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[hsl(0,0%,93%)] mb-2">{item.title}</h3>
                      <p className="text-[hsl(220,10%,55%)] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Metrics Grid - 4-Column Stats */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Operational Impact</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                The Confidence Metric
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Faster turnaround. Lower leakage. Consistent decisions. These are not features but symptoms of a deeper transformation: the shift from interpretation to verification, from estimation to certainty.
              </p>

              {/* 4-Column Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: '↓70%', label: 'Manual Review Effort' },
                  { value: '↓50%', label: 'Settlement Cycle Time' },
                  { value: '↓40%', label: 'Claims Leakage' },
                  { value: '100%', label: 'Decision Auditability' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 text-center hover:border-primary/20 transition-colors duration-300">
                    <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-[hsl(220,10%,50%)] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Centered, Bordered */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="relative max-w-3xl mx-auto">
                {/* Corner accents */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/50" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/50" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/50" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/50" />
                
                <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8 lg:p-12 text-center"
                     style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.05)' }}>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
                    Restore Operational Certainty
                  </h2>
                  <p className="text-[hsl(220,10%,55%)] mb-8 max-w-xl mx-auto leading-relaxed">
                    If claims operations feel slow, inconsistent, or hard to explain, CLaiM brings them back into structural coherence. Not just insight, but confidence: that what is being recommended is realistic, understandable, and capable of making a meaningful difference.
                  </p>
                  <Button variant="hero" size="xl" className="shadow-glow" asChild>
                    <Link to="/contact">
                      Initiate Consultation
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Custom Footer - Minimal */}
          <section className="py-12 border-t border-[hsl(220,16%,10%)] relative">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
              <p className="text-[hsl(0,0%,90%)] font-display font-semibold mb-2">
                <span className="text-primary">ZapSight</span> — Environment for Transparent Accountability
              </p>
              <p className="text-[hsl(220,10%,45%)] text-sm">
                CLaiM™ — AI Claims Analysis & Adjudication Platform
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CLaiMPage;
