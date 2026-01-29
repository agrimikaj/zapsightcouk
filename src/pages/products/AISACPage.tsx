import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Link2, Zap, Camera, Radio, Bell, Lock, Smartphone, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AISACDimensionCard from '@/components/aisac/AISACDimensionCard';
import AISACConvergenceDiagram from '@/components/aisac/AISACConvergenceDiagram';

const AISACPage = () => {
  const [highlightedDimension, setHighlightedDimension] = useState<string | null>(null);

  const dimensions = [
    {
      id: 'presence',
      icon: Eye,
      title: 'Presence',
      body: 'Event-first, not report-first. Every sensor trigger is processed as a real-time operational moment with sub-100ms latency. The system maintains continuous watchfulness across distributed geographies without the delays of batch processing or manual triage.',
      meta: 'Detect → Register → Prioritize',
    },
    {
      id: 'memory',
      icon: Link2,
      title: 'Memory',
      body: 'Truth versus raw data. While cameras hold the footage, AISAC holds the context—connecting current signals to historical patterns, similar incidents, and operational schedules. This synthetic memory distinguishes routine anomalies from genuine threats.',
      meta: 'Real-time + Historical → Fused',
    },
    {
      id: 'command',
      icon: Zap,
      title: 'Command',
      body: 'Built for action, not analysis. OT and IT converge in a single actionable plane where insights automatically trigger physical responses—lockdowns, alarms, guard notifications—while maintaining human oversight over critical decisions.',
      meta: 'Know → Decide → Act',
    },
  ];

  return (
    <>
      <Helmet>
        <title>AISAC - AI Situation Awareness & Alerting Command | ZapSight</title>
        <meta name="description" content="AISAC transforms distributed sensor chaos into coherent command—creating an accountability trail between physical events and decisive action." />
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
                    Security as{' '}
                    <span className="text-primary italic">Operational Consciousness</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-[hsl(220,10%,55%)] mb-10 leading-relaxed max-w-2xl">
                    AISAC transforms distributed sensor chaos into coherent command—creating an accountability trail between physical events and decisive action. A next-generation AI-CMS that makes security operations predictable, immediate, and autonomous.
                  </p>

                  {/* Metric Trio */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">&lt;100ms</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Alert Processing</p>
                    </div>
                    <div className="text-center border-x border-[hsl(220,16%,12%)]">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">10K+</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Events/Hour</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">∞</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Memory Retention</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button variant="hero" size="xl" asChild>
                      <Link to="/contact">
                        Initiate Security Consultation
                        <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                      </Link>
                    </Button>
                    <Button variant="heroOutline" size="xl" asChild>
                      <a href="#demo">
                        <Play className="h-5 w-5" strokeWidth={1.5} />
                        Watch Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Visual - 40% - Converging Signal Diagram */}
                <div className="lg:col-span-2">
                  <div className="relative p-8">
                    {/* Central orchestration node */}
                    <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-primary/50 flex items-center justify-center shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
                      <Radio className="h-10 w-10 text-primary" strokeWidth={1.5} />
                    </div>

                    {/* Input signal lines */}
                    <div className="absolute left-0 top-1/4 flex items-center gap-2">
                      <Camera className="h-6 w-6 text-[hsl(220,10%,40%)]" strokeWidth={1.5} />
                      <div className="w-16 h-px bg-gradient-to-r from-[hsl(220,10%,30%)] to-primary/50" />
                    </div>
                    <div className="absolute left-0 top-1/2 flex items-center gap-2">
                      <Radio className="h-5 w-5 text-[hsl(220,10%,40%)]" strokeWidth={1.5} />
                      <div className="w-20 h-px bg-gradient-to-r from-[hsl(220,10%,30%)] to-primary/50" />
                    </div>
                    <div className="absolute left-0 top-3/4 flex items-center gap-2">
                      <Lock className="h-5 w-5 text-[hsl(220,10%,40%)]" strokeWidth={1.5} />
                      <div className="w-14 h-px bg-gradient-to-r from-[hsl(220,10%,30%)] to-primary/50" />
                    </div>

                    {/* Output action lines */}
                    <div className="absolute right-0 top-1/4 flex items-center gap-2 flex-row-reverse">
                      <Bell className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                      <div className="w-14 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>
                    <div className="absolute right-0 top-1/2 flex items-center gap-2 flex-row-reverse">
                      <Lock className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                      <div className="w-18 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>
                    <div className="absolute right-0 top-3/4 flex items-center gap-2 flex-row-reverse">
                      <Smartphone className="h-5 w-5 text-primary/70" strokeWidth={1.5} />
                      <div className="w-12 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>

                    {/* Labels */}
                    <p className="absolute -left-2 bottom-0 text-[hsl(220,10%,45%)] text-xs uppercase tracking-wider">Sensors</p>
                    <p className="absolute -right-2 bottom-0 text-primary/70 text-xs uppercase tracking-wider">Actions</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Video Demo Section */}
          <section id="demo" className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="text-center mb-10">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Product Demo</p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
                  See It In Action
                </h2>
              </div>

              <div className="max-w-5xl mx-auto">
                <div className="relative overflow-hidden rounded-2xl border border-[hsl(220,16%,15%)] bg-[hsl(220,20%,8%)] shadow-2xl">
                  {/* Browser-like header */}
                  <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(220,20%,10%)] border-b border-[hsl(220,16%,15%)]">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 bg-[hsl(220,20%,8%)] rounded-md text-[hsl(220,10%,50%)] text-xs">
                        app.zapsight.ai
                      </div>
                    </div>
                  </div>
                  {/* Video */}
                  <div className="overflow-hidden">
                    <video
                      src="/videos/aisac-demo.mp4"
                      controls
                      className="w-full h-auto"
                      preload="metadata"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                {/* Caption */}
                <p className="text-center text-[hsl(220,10%,55%)] mt-4 text-sm">
                  AISAC Security Operations Demo
                </p>
              </div>
            </div>
          </section>

          {/* Dark Manifesto Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />
            
            {/* Threat-map grid texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(220,10%,30%) 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Current State</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Distributed Incoherence
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Modern security infrastructure suffers from visibility without comprehension. Thousands of cameras record, sensors trigger, and alarms sound across fragmented geographies—yet operators drown in raw feeds while critical events hide in plain sight. The result is operational vertigo: everything is monitored, but nothing feels fully under control. Signals arrive without context, alerts accumulate without prioritization, and the lag between detection and response creates vulnerability windows measured not in minutes, but in organizational failure.
              </p>

              {/* 3-Card Grid - Friction Points */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    number: '01',
                    title: 'Sensor Sprawl',
                    body: 'Hundreds of locations, multiple vendors, disparate protocols. Each system speaks its own language, creating archipelagos of partial information that resist unified comprehension.',
                  },
                  {
                    number: '02',
                    title: 'Report-First Latency',
                    body: 'Traditional CMS treats events as historical records to be reviewed, not real-time conditions to be met. By the time data becomes a report, the operational moment has already passed.',
                  },
                  {
                    number: '03',
                    title: 'The Action Gap',
                    body: 'OT remains isolated from IT. Guards receive alerts without context, managers receive reports without telemetry, and automated responses remain trapped in vendor silos.',
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
                Orchestration Through Elevation
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                AISAC does not replace your cameras or access systems. It creates an intelligence layer above them—ingesting raw telemetry, applying contextual memory, and generating orchestrated responses that unify operational technology with institutional knowledge.
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
                    title: 'Signal Ingestion & Fusion',
                    body: 'Data Integration Engine normalizes inputs from cameras, IoT sensors, access logs, and environmental monitors. Raw video, motion detection, temperature spikes, and perimeter breaches are fused into a unified event stream.',
                  },
                  {
                    number: 2,
                    title: 'AI-Led Situational Analysis',
                    body: 'Machine Learning Core correlates real-time signals against historical patterns, threat intelligence feeds, and operational knowledge bases. Events are ranked by risk, location, and business context—not just timestamp.',
                  },
                  {
                    number: 3,
                    title: 'Contextual Memory Synthesis',
                    body: 'The system holds operational memory while source systems hold truth. Current motion at Warehouse B is cross-referenced against shift schedules, past incidents, and asset values to distinguish noise from threat.',
                  },
                  {
                    number: 4,
                    title: 'Orchestrated & Guided Response',
                    body: 'SOAR Engine (Security Orchestration, Automation and Response) initiates automated lockdowns, escalates to human operators with full context, or triggers field response—keeping humans in command while software handles velocity.',
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
                Presence <span className="text-primary">∙</span> Memory <span className="text-primary">∙</span> Command
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                AISAC embeds ZapSight's accountability architecture into physical security. These three dimensions evolve simultaneously, transforming passive monitoring into active situational control.
              </p>

              {/* 3-Column Pillars with hover effects */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {dimensions.map((dimension) => (
                  <AISACDimensionCard
                    key={dimension.id}
                    icon={dimension.icon}
                    title={dimension.title}
                    body={dimension.body}
                    meta={dimension.meta}
                    isHighlighted={highlightedDimension === dimension.id}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Convergence Topology Diagram Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[180px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Text content */}
                <div>
                  <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Convergence Topology</p>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                    Unified Field, Not Linear Flow
                  </h2>
                  <p className="text-[hsl(220,10%,55%)] text-lg leading-relaxed mb-6">
                    Traditional CMS processes sequentially—detect, wait, analyze, report, decide, act. AISAC operates through a unified field where Presence, Memory, and Command reinforce each other continuously.
                  </p>
                  <p className="text-[hsl(220,10%,55%)] leading-relaxed mb-8">
                    The result: <span className="text-primary font-medium">Perceive-Understand-Execute</span> as a single operational pulse.
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
                        <span className="text-[hsl(220,10%,45%)] text-sm ml-auto">{dim.meta}</span>
                      </div>
                    ))}
                  </div>

                  {/* Traditional vs AISAC comparison */}
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-[hsl(220,10%,40%)] text-xs uppercase tracking-wider w-24">Traditional</span>
                      <div className="flex-1 flex items-center gap-1">
                        {['Detect', 'Wait', 'Analyze', 'Report', 'Decide', 'Act'].map((step, i) => (
                          <span key={i} className="flex items-center">
                            <span className="text-[hsl(220,10%,35%)] text-xs">{step}</span>
                            {i < 5 && <span className="text-[hsl(220,10%,25%)] mx-1">||||</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-primary text-xs uppercase tracking-wider w-24">AISAC</span>
                      <div className="flex-1 h-6 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded flex items-center justify-center">
                        <span className="text-[hsl(0,0%,95%)] text-xs font-medium tracking-wide">Perceive — Understand — Execute</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Diagram */}
                <div className="flex items-center justify-center">
                  <AISACConvergenceDiagram 
                    onNodeHover={setHighlightedDimension}
                    highlightedNode={highlightedDimension}
                  />
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
                Above the Infrastructure
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Traditional CMS platforms provide windows into isolated systems. AISAC provides an operational cortex that sits above them—synthesizing, reasoning, and orchestrating without requiring rip-and-replace.
              </p>

              {/* 2-Column Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    number: 'I',
                    title: 'Event-First Architecture',
                    body: 'Not report-first, but moment-first. Every signal is processed as an operational event in real-time, eliminating the latency between occurrence and awareness that creates security windows.',
                  },
                  {
                    number: 'II',
                    title: 'Truth vs. Memory',
                    body: 'Source systems hold immutable truth (the footage, the log). AISAC holds operational memory (the context, the pattern, the meaning). This separation maintains data integrity while enabling intelligent reasoning.',
                  },
                  {
                    number: 'III',
                    title: 'Temporal Fusion',
                    body: 'Simultaneous awareness of what just happened and what usually happens. Real-time feeds correlated against historical baselines to detect deviations that pure real-time monitoring misses.',
                  },
                  {
                    number: 'IV',
                    title: 'OT/IT Convergence',
                    body: 'Physical security systems (cameras, sensors, locks) seamlessly integrated with enterprise IT workflows. Guards receive smartphone alerts; managers receive dashboards; systems execute automated responses.',
                  },
                  {
                    number: 'V',
                    title: 'Action-Oriented Cognition',
                    body: 'Insights are not terminal outputs but triggers. The AI generates not reports, but commands—suggested or automated actions that collapse the gap between detection and response.',
                  },
                  {
                    number: 'VI',
                    title: 'Infrastructure Agnosticism',
                    body: 'Works atop existing hardware. No requirement to rip out functioning cameras or replace sensor networks. Intelligence is added as a layer, not a replacement.',
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
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Operational Impact</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                The Tempo Metric
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Faster processing. Lower cognitive load. Higher confidence. These metrics reflect a shift from monitoring as cost center to intelligence as operational advantage.
              </p>

              {/* 4-Column Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: '<100ms', label: 'Processing Latency' },
                  { value: '99.9%', label: 'Uptime SLA' },
                  { value: '↓85%', label: 'False Positive Noise' },
                  { value: '6-8X', label: 'ROI Weeks to Value' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 text-center hover:border-primary/20 transition-colors duration-300">
                    <p className="font-display text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-[hsl(220,10%,50%)] text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Centered, Bordered */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />
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
                    Restore Situational Coherence
                  </h2>
                  <p className="text-[hsl(220,10%,55%)] mb-8 max-w-xl mx-auto leading-relaxed">
                    If your security operations feel busy but not effective—if you have visibility without comprehension, and data without action—AISAC brings them back into focus. Not just monitoring, but consciousness: the confidence that what matters is seen, understood, and acted upon before it becomes loss.
                  </p>
                  <Button variant="hero" size="xl" className="shadow-glow" asChild>
                    <Link to="/contact">
                      Initiate Security Consultation
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
                AISAC™ — AI Situation Awareness & Alerting Command
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AISACPage;
