import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Infinity, PenTool, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FiveOn5DimensionCard from '@/components/fiveon5/FiveOn5DimensionCard';
import FiveOn5OrbitDiagram from '@/components/fiveon5/FiveOn5OrbitDiagram';
import ContextStackDemo from '@/components/fiveon5/ContextStackDemo';

const FiveOn5Page = () => {
  const [highlightedDimension, setHighlightedDimension] = useState<string | null>(null);

  const dimensions = [
    {
      id: 'continuity',
      icon: Infinity,
      title: 'Continuity',
      body: 'Conversations persist across channels. Email to chat to phone—context never resets. Every interaction builds on the last, creating relationships instead of isolated tickets.',
      meta: 'Threads, not tickets',
    },
    {
      id: 'relevance',
      icon: Zap,
      title: 'Relevance',
      body: 'Real-time data transforms generic into personal instantly. Right message, right moment—situational precision that makes every response feel tailored, not templated.',
      meta: 'Right moment, right message',
    },
    {
      id: 'voice',
      icon: PenTool,
      title: 'Voice',
      body: 'Brand DNA enforced by design. Inexperienced agents sound like your best veterans. One brand, many agents—consistency becomes structural, not accidental.',
      meta: 'One brand, many agents',
    },
  ];

  return (
    <>
      <Helmet>
        <title>5on5 - Customer Experience AI Engine | ZapSight</title>
        <meta name="description" content="5on5 transforms fragmented customer interactions into coherent relationships. A continuity layer where every agent knows the full story." />
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
                    Conversations as{' '}
                    <span className="text-primary italic">Continuous Relationships</span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-[hsl(220,10%,55%)] mb-10 leading-relaxed max-w-2xl">
                    Transform fragmented customer interactions into coherent context. Where every agent knows the full story, every response matches the moment, and service becomes revenue.
                  </p>

                  {/* Metric Trio */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">↓65%</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Context Repetition</p>
                    </div>
                    <div className="text-center border-x border-[hsl(220,16%,12%)]">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">↑40%</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Service-to-Sales</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-2">5.0</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">Experience Score</p>
                    </div>
                  </div>

                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Experience the Context Layer
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                </div>

                {/* Visual - 40% - Interactive Demo */}
                <div className="lg:col-span-2">
                  <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm text-center">The 5-Second Stack</p>
                  <ContextStackDemo />
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
                Memory Loss at Scale
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                Every channel remembers, but no one remembers together. Agents start cold. Relationships feel transactional because the system treats them as isolated incidents.
              </p>

              {/* 3-Card Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    number: '01',
                    title: 'The Repeating Loop',
                    body: '"Verify your order number" signals system amnesia. Customers answer the same questions across channels, eroding trust.',
                  },
                  {
                    number: '02',
                    title: 'The Tone Lottery',
                    body: 'Brand voice varies by agent fatigue. One conversation feels premium, the next robotic—consistency becomes accidental.',
                  },
                  {
                    number: '03',
                    title: 'The Missed Moment',
                    body: 'Support resolves; sales never knows the trust was built. Revenue evaporates into operational silence.',
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
                Context-First Intelligence
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                5on5 sits above CRM and communication tools as collective memory for the entire organization. Continuity, relevance, and voice evolve in parallel.
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
                    title: 'Unify',
                    body: 'Aggregate CRM, orders, chat history, and real-time inventory into a single situational layer.',
                  },
                  {
                    number: 2,
                    title: 'Remember',
                    body: 'Map interactions as ongoing threads. Previous frustrations inform current empathy.',
                  },
                  {
                    number: 3,
                    title: 'Orchestrate',
                    body: 'AI drafts responses calibrated to emotional tone, urgency, and relationship value.',
                  },
                  {
                    number: 4,
                    title: 'Activate',
                    body: 'Surface upsell prompts at gratitude peaks—turning resolution into revenue.',
                  },
                ].map((step, i) => (
                  <div key={i} className="relative">
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

          {/* Triad Framework */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Operational Dimensions</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                Continuity <span className="text-primary">×</span> Relevance <span className="text-primary">×</span> Voice
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl max-w-4xl mb-12 leading-relaxed">
                The value is relationship velocity: the confidence that every interaction deepens connection, converts service moments into growth, and feels like continuation rather than cold start.
              </p>

              {/* 3-Column Dimension Cards */}
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {dimensions.map((dimension) => (
                  <FiveOn5DimensionCard
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

          {/* Orbit Diagram Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            {/* Subtle radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[180px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left: Text content */}
                <div>
                  <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">The Orbit</p>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                    Parallel Evolution, Not Sequential Processing
                  </h2>
                  <p className="text-[hsl(220,10%,55%)] text-lg leading-relaxed mb-6">
                    5on5 is not a chatbot. It is a continuity layer that transforms fragmented customer interactions into coherent relationships. Continuity, relevance, and voice operate simultaneously—not in sequence.
                  </p>
                  
                  {/* Dimension highlights */}
                  <div className="mt-8 space-y-3">
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
                </div>

                {/* Right: Orbit Diagram */}
                <div className="flex items-center justify-center">
                  <FiveOn5OrbitDiagram onNodeHover={setHighlightedDimension} />
                </div>
              </div>
            </div>
          </section>

          {/* Differentiators - 3-Column */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Differentiation</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-12">
                Beyond Ticket Management
              </h2>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {[
                  {
                    icon: '∞',
                    title: 'Thread Memory',
                    body: 'Conversations persist as relationships, not isolated tickets. Channel switches don\'t reset context.',
                  },
                  {
                    icon: '✍',
                    title: 'Assisted Authorship',
                    body: 'AI drafts; humans decide. Judgment stays human, velocity becomes software.',
                  },
                  {
                    icon: '⚡',
                    title: 'Service-Sales Fusion',
                    body: 'Upsell prompts appear only at gratitude peaks—turning resolution moments into revenue without friction.',
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-colors duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-[hsl(220,15%,12%)] flex items-center justify-center mb-5">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[hsl(0,0%,93%)] mb-3">{item.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Stats - 4-Grid */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            {/* Grid texture */}
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <p className="text-primary font-medium mb-4 tracking-wide uppercase text-sm">Operational Impact</p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                The Relationship Metric
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg max-w-3xl mb-12">
                Not just efficiency—relationship velocity. Every interaction deepens connection.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { value: '↓65%', label: '"Repeat Yourself" Rate' },
                  { value: '↑40%', label: 'Upsell Conversion' },
                  { value: '4.8', label: 'CSAT Consistency' },
                  { value: '↓50%', label: 'Agent Cognitive Load' },
                ].map((stat, i) => (
                  <div key={i} className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                    <p className="font-display text-4xl lg:text-5xl font-bold text-primary mb-3">{stat.value}</p>
                    <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,15%,5%)]" />
            
            {/* Radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/[0.05] rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-6">
                  Restore Conversation Continuity
                </h2>
                <p className="text-[hsl(220,10%,55%)] text-lg lg:text-xl mb-10 leading-relaxed">
                  If your customer interactions feel like starting over every time, 5on5 brings context back to the center. Not just faster responses—deeper relationships.
                </p>
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Experience the Context Layer
                    <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
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

export default FiveOn5Page;
