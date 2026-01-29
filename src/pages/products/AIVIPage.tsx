import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Copy, 
  RefreshCw, 
  ArrowRight, 
  Eye,
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import AIVIDimensionCard from '@/components/aivi/AIVIDimensionCard';
import AIVIConvergenceDiagram from '@/components/aivi/AIVIConvergenceDiagram';

const AIVIPage = () => {
  const [highlightedDimension, setHighlightedDimension] = useState<string | null>(null);

  const problemCards = [
    {
      number: '01',
      title: 'Semantic Drift',
      body: 'AI engines parse intent differently than human readers. Keywords match; meaning diverges.',
    },
    {
      number: '02',
      title: 'Summary Compression',
      body: 'Brand stories get reduced to hallucinated snippets. Legacy SEO ensures indexing, not comprehension.',
    },
    {
      number: '03',
      title: 'Visibility Roulette',
      body: 'Inconsistent representation across ChatGPT, Gemini, and Claude creates fragmented brand truth.',
    },
  ];

  const architectureSteps = [
    {
      number: 1,
      title: 'Signal Detection',
      body: 'Monitor how AI engines parse, rank, and represent brand content across generative platforms in real-time.',
    },
    {
      number: 2,
      title: 'Semantic Calibration',
      body: 'Structure metadata and content hierarchy for AI-native reasoning—scenarios and intent, not keyword density.',
    },
    {
      number: 3,
      title: 'Fidelity Preservation',
      body: 'Align AI interpretation with brand voice using constrained optimization: clearer to machines, unchanged for humans.',
    },
    {
      number: 4,
      title: 'Resilient Adaptation',
      body: 'Continuous recalibration as model behaviors shift—maintaining visibility through algorithmic evolution.',
    },
  ];

  const dimensions = [
    {
      id: 'intent',
      icon: Target,
      title: 'Intent',
      microCaption: 'Scenarios, not strings',
      body: 'Customer scenario mapping replaces keyword lists. Understanding what users actually want to accomplish, not just the words they type.',
      metaLabel: 'Scenarios → Journeys',
    },
    {
      id: 'fidelity',
      icon: Copy,
      title: 'Fidelity',
      microCaption: 'Perception aligned with essence',
      body: 'Brand source message aligned with AI summary output. Competitor distortions exposed through side-by-side comparison.',
      metaLabel: 'Source → Representation',
    },
    {
      id: 'resilience',
      icon: RefreshCw,
      title: 'Resilience',
      microCaption: 'Persistent through evolution',
      body: 'Consistent brand representation across GPT-4, Gemini 1.5, Claude 3, while competitors fluctuate with each model update.',
      metaLabel: 'Stable → Adaptive',
    },
  ];

  const differentiators = [
    {
      icon: Target,
      title: 'Intent Topology',
      body: 'Customer scenarios and journeys, not keyword stuffing and density games.',
    },
    {
      icon: Eye,
      title: 'Perception vs. Index',
      body: 'Tracks how AI represents your brand in answers, not just whether you\'re in the index.',
    },
    {
      icon: Globe,
      title: 'Multi-Engine Coherence',
      body: 'Unified visibility across ChatGPT, Gemini, Claude, and Perplexity—consistent truth everywhere.',
    },
    {
      icon: Shield,
      title: 'Linguistic Preservation',
      body: 'Brand heritage and tone remain intact; only machine readability is enhanced.',
    },
    {
      icon: RefreshCw,
      title: 'Living Adaptation',
      body: 'Evolves as LLM reasoning evolves—visibility that persists through model updates.',
    },
    {
      icon: Zap,
      title: 'Generative-Native',
      body: 'Built for answer engines first, not retrofitted from legacy search tooling.',
    },
  ];

  const metrics = [
    { value: '↑80%', label: 'Answer Inclusion' },
    { value: '↓60%', label: 'Misrepresentation Risk' },
    { value: '0', label: 'Keyword Stuffing (Brand-Safe)' },
    { value: 'Real-Time', label: 'Model Drift Detection' },
  ];

  return (
    <>
      <Helmet>
        <title>AIVI - AI Visibility & Insight Platform | ZapSight</title>
        <meta name="description" content="AIVI translates corporate identity into AI-native comprehension—ensuring accurate brand representation when customers ask, not merely indexed when they search." />
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
                    Brand as{' '}
                    <span className="text-primary italic">Machine-Readable Truth</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-[hsl(220,10%,55%)] mb-10 leading-relaxed max-w-2xl">
                    Translating corporate identity into AI-native comprehension—ensuring you're represented accurately when customers ask, not merely indexed when they search.
                  </p>

                  {/* Metric Trio */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">↑80%</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Answer Inclusion Rate</p>
                    </div>
                    <div className="text-center border-x border-[hsl(220,16%,12%)]">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">3x</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Competitor Contrast</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">∞</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Prompt Granularity</p>
                    </div>
                  </div>

                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Audit Your AI Presence
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                </div>

                {/* Visual - 40% - Brand Truth Diagram */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-primary/50" />
                    
                    {/* Trail nodes */}
                    <div className="space-y-8">
                      {[
                        { label: 'Signal Detection', sublabel: 'AI Engine Monitoring' },
                        { label: 'Semantic Calibration', sublabel: 'Intent Structuring' },
                        { label: 'Fidelity Preservation', sublabel: 'Brand Voice Alignment' },
                        { label: 'Resilient Adaptation', sublabel: 'Model Evolution' },
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

          {/* Dark Problem Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />
            
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220,10%,30%) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Fracture</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Algorithmic Misrepresentation
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                AI curates discovery but distorts intent. Content gets compressed, context stripped, meaning drifts. Brands exist in the index but disappear in the answer.
              </p>

              {/* 3-Card Grid - Friction Points */}
              <div className="grid md:grid-cols-3 gap-6">
                {problemCards.map((card, i) => (
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
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Translation</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Intent-First Infrastructure
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                AIVI creates an intelligence layer that translates your brand for AI comprehension—monitoring, calibrating, and adapting to ensure accurate representation across all generative platforms.
              </p>

              {/* Horizontal timeline connector */}
              <div className="hidden lg:block relative mb-8">
                <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              </div>

              {/* 4-Column Steps */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {architectureSteps.map((step, i) => (
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
                Intent <span className="text-primary">∙</span> Fidelity <span className="text-primary">∙</span> Resilience
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                AIVI's coherence triangle ensures your brand is understood, represented accurately, and remains stable across model updates. These three dimensions work in parallel, not sequence.
              </p>

              {/* 3-Column Pillars with hover effects */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {dimensions.map((dimension) => (
                  <AIVIDimensionCard
                    key={dimension.id}
                    icon={dimension.icon}
                    title={dimension.title}
                    body={dimension.body}
                    metaLabel={dimension.metaLabel}
                    microCaption={dimension.microCaption}
                    isHighlighted={highlightedDimension === dimension.id}
                    onHover={(isHovered) => setHighlightedDimension(isHovered ? dimension.id : null)}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Convergence Diagram Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[180px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Text content */}
                <div>
                  <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Coherence Triangle</p>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                    Unified Brand Truth
                  </h2>
                  <p className="text-[hsl(220,10%,55%)] text-lg leading-relaxed mb-6">
                    Traditional SEO follows a linear path—crawl, index, rank, hope. AIVI operates through a coherence field where Intent, Fidelity, and Resilience reinforce each other continuously.
                  </p>
                  <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-8">
                    The result: <span className="text-primary font-medium">Understand-Represent-Preserve</span> as a unified operational pulse.
                  </p>
                  
                  {/* Dimension highlights */}
                  <div className="space-y-3">
                    {dimensions.map((dim) => (
                      <div
                        key={dim.id}
                        className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 cursor-pointer ${
                          highlightedDimension === dim.id
                            ? 'bg-primary/10 border border-primary/30'
                            : 'bg-[hsl(220,15%,8%)] border border-transparent hover:border-[hsl(220,16%,15%)]'
                        }`}
                        onMouseEnter={() => setHighlightedDimension(dim.id)}
                        onMouseLeave={() => setHighlightedDimension(null)}
                      >
                        <dim.icon className={`h-5 w-5 ${highlightedDimension === dim.id ? 'text-primary' : 'text-[hsl(220,10%,50%)]'}`} strokeWidth={1.5} />
                        <span className={`font-medium ${highlightedDimension === dim.id ? 'text-primary' : 'text-[hsl(0,0%,85%)]'}`}>
                          {dim.title}
                        </span>
                        <span className="text-[hsl(220,10%,45%)] text-sm ml-auto">{dim.metaLabel}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Diagram */}
                <div className="flex items-center justify-center">
                  <AIVIConvergenceDiagram 
                    onNodeHover={setHighlightedDimension}
                    highlightedNode={highlightedDimension}
                  />
                </div>
              </div>

              {/* Bottom Coda */}
              <div className="mt-16 pt-12 border-t border-[hsl(220,16%,12%)]">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6">
                    <p className="text-[hsl(220,10%,45%)] text-xs uppercase tracking-wider mb-3">Traditional SEO</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[hsl(220,10%,60%)]">Crawl</span>
                      <span className="text-[hsl(220,16%,30%)]">→</span>
                      <span className="text-[hsl(220,10%,60%)]">Index</span>
                      <span className="text-[hsl(220,16%,30%)]">→</span>
                      <span className="text-[hsl(220,10%,60%)]">Rank</span>
                      <span className="text-[hsl(220,16%,30%)]">→</span>
                      <span className="text-[hsl(220,10%,40%)] italic">[Hope interpretation is correct]</span>
                    </div>
                  </div>
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <p className="text-primary text-xs uppercase tracking-wider mb-3">AIVI</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[hsl(0,0%,90%)]">Understand</span>
                      <span className="text-primary">→</span>
                      <span className="text-[hsl(0,0%,90%)]">Represent</span>
                      <span className="text-primary">→</span>
                      <span className="text-primary font-semibold">[Truth preserved across platforms]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Differentiator Grid - 2-Column */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Differentiation</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Beyond Indexing
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Traditional SEO tools optimize for crawlers. AIVI optimizes for comprehension—ensuring AI engines understand your brand, not just find it.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {differentiators.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-start gap-4 p-6 bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-xl hover:border-primary/20 transition-colors duration-300">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-[hsl(0,0%,93%)] mb-2">{item.title}</h3>
                        <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Metrics Grid - 4-Column Stats */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Operational Impact</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                The Clarity Metric
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Higher inclusion. Lower misrepresentation. Real-time awareness. These metrics reflect a shift from hoping for visibility to engineering comprehension.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((stat, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                    <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                {/* Corner accents */}
                <div className="relative bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-10 lg:p-16">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-2xl" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-2xl" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-2xl" />
                  
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-[hsl(0,0%,97%)] mb-6">
                    Restore Narrative Sovereignty
                  </h2>
                  <p className="text-[hsl(220,10%,55%)] text-lg mb-8 leading-relaxed">
                    If AI shapes discovery but distorts your story, AIVI brings representation back to truth. Not just visibility—comprehension.
                  </p>
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Audit Your AI Presence
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
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

export default AIVIPage;
