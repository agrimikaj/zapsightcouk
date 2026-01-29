import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Target, 
  Copy, 
  RefreshCw, 
  ArrowRight, 
  TrendingUp,
  Eye,
  Shield,
  Layers,
  Zap,
  Globe
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import AIVIDimensionCard from '@/components/aivi/AIVIDimensionCard';
import AIVIConvergenceDiagram from '@/components/aivi/AIVIConvergenceDiagram';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

const AIVIPage = () => {
  const [highlightedDimension, setHighlightedDimension] = useState<string | null>(null);

  const heroFade = useScrollFadeIn();
  const problemFade = useScrollFadeIn();
  const architectureFade = useScrollFadeIn();
  const triadFade = useScrollFadeIn();
  const differentiatorFade = useScrollFadeIn();
  const metricsFade = useScrollFadeIn();
  const ctaFade = useScrollFadeIn();

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

      <Navbar />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section
          ref={heroFade.ref}
          className={`relative py-24 lg:py-32 overflow-hidden transition-all duration-700 ${
            heroFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary text-sm uppercase tracking-widest mb-4"
              >
                AI Visibility & Insight
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              >
                Brand as{' '}
                <span className="text-primary italic">Machine-Readable Truth</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-3xl"
              >
                Translating corporate identity into AI-native comprehension—ensuring you're represented accurately when customers ask, not merely indexed when they search.
              </motion.p>

              {/* Metric Trio */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-3 gap-6 max-w-2xl"
              >
                {[
                  { value: '↑80%', label: 'Answer Inclusion Rate' },
                  { value: '3x', label: 'Competitor Contrast Clarity' },
                  { value: '∞', label: 'Prompt-Level Granularity' },
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                      {metric.value}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Section (Dark) */}
        <section
          ref={problemFade.ref}
          className={`relative py-24 bg-[hsl(220,20%,6%)] transition-all duration-700 ${
            problemFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              The Fracture
            </p>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Algorithmic Misrepresentation
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
              AI curates discovery but distorts intent. Content gets compressed, context stripped, meaning drifts. Brands exist in the index but disappear in the answer.
            </p>

            {/* 3-Card Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {problemCards.map((card, index) => (
                <motion.div
                  key={card.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-[hsl(220,16%,10%)] border border-[hsl(220,16%,16%)] rounded-xl"
                >
                  <span className="text-primary text-sm font-mono mb-4 block">
                    {card.number}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Section */}
        <section
          ref={architectureFade.ref}
          className={`py-24 transition-all duration-700 ${
            architectureFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              The Translation
            </p>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Intent-First Infrastructure
            </h2>

            {/* 4-Step Flow */}
            <div className="grid md:grid-cols-4 gap-6 mt-16">
              {architectureSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Connector line */}
                  {index < architectureSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}

                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Triad Framework Section */}
        <section
          ref={triadFade.ref}
          className={`py-24 bg-[hsl(220,20%,6%)] transition-all duration-700 ${
            triadFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Operational Dimensions
            </p>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16">
              Intent <span className="text-primary">∙</span> Fidelity <span className="text-primary">∙</span> Resilience
            </h2>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Dimension Cards */}
              <div className="space-y-6">
                {dimensions.map((dim) => (
                  <AIVIDimensionCard
                    key={dim.id}
                    icon={dim.icon}
                    title={dim.title}
                    body={dim.body}
                    metaLabel={dim.metaLabel}
                    microCaption={dim.microCaption}
                    isHighlighted={highlightedDimension === dim.id}
                    onHover={(isHovered) => setHighlightedDimension(isHovered ? dim.id : null)}
                  />
                ))}
              </div>

              {/* Right: Convergence Diagram */}
              <div className="flex justify-center">
                <AIVIConvergenceDiagram
                  onNodeHover={setHighlightedDimension}
                  highlightedNode={highlightedDimension}
                />
              </div>
            </div>

            {/* Bottom Coda */}
            <div className="mt-16 pt-12 border-t border-[hsl(220,16%,16%)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-[hsl(220,16%,8%)] border border-[hsl(220,16%,14%)] rounded-xl">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Traditional SEO</p>
                  <div className="flex items-center gap-2 text-sm text-[hsl(220,10%,50%)]">
                    <span>Crawl</span>
                    <span className="text-primary/50">→</span>
                    <span>Index</span>
                    <span className="text-primary/50">→</span>
                    <span>Rank</span>
                    <span className="text-primary/50">→</span>
                    <span className="text-muted-foreground/50 italic">[Hope interpretation is correct]</span>
                  </div>
                </div>
                <div className="p-6 bg-primary/5 border border-primary/20 rounded-xl">
                  <p className="text-xs text-primary uppercase tracking-wider mb-3">AIVI</p>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <span>Understand</span>
                    <span className="text-primary">→</span>
                    <span>Represent</span>
                    <span className="text-primary">→</span>
                    <span className="text-primary font-semibold">[Truth preserved across platforms]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section
          ref={differentiatorFade.ref}
          className={`py-24 transition-all duration-700 ${
            differentiatorFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Differentiation
            </p>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16">
              Beyond Indexing
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-[hsl(220,16%,8%)] border border-[hsl(220,16%,14%)] rounded-xl hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section
          ref={metricsFade.ref}
          className={`py-24 bg-[hsl(220,20%,6%)] transition-all duration-700 ${
            metricsFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <p className="text-primary text-sm uppercase tracking-widest mb-4">
              Operational Impact
            </p>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-16">
              The Clarity Metric
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-[hsl(220,16%,10%)] border border-[hsl(220,16%,16%)] rounded-xl"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          ref={ctaFade.ref}
          className={`py-24 transition-all duration-700 ${
            ctaFade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="relative max-w-3xl mx-auto text-center p-12 border border-primary/30 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-xl" />

              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Restore Narrative Sovereignty
              </h2>

              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                If AI shapes discovery but distorts your story, AIVI brings representation back to truth. Not just visibility—comprehension.
              </p>

              <Button asChild size="lg" className="group">
                <Link to="/contact">
                  Audit Your AI Presence
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AIVIPage;
