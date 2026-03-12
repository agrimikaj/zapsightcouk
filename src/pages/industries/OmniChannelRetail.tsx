import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  ShoppingCart, MessageSquare, BarChart3, Eye, Plug, Shield,
  TrendingUp, Users, Bot, ArrowRight, Zap, Target, Layers,
  CheckCircle2, Rocket, Database, Brain, Store, Globe,
  ChevronRight, Sparkles, Award
} from 'lucide-react';

/* ─── data ───────────────────────────────────────────────── */

const marketStats = [
  { value: '73%', label: 'of shoppers use AI in purchasing decisions' },
  { value: '67%', label: "trust a merchant's AI more than third-party AI" },
  { value: '62%', label: 'expect concierge-level assistance, not static websites' },
];

const products = [
  {
    id: 'shop-assist',
    name: 'Shop Assist',
    icon: MessageSquare,
    tagline: 'From Website to Shopping Concierge',
    description: 'An AI-powered experience that guides, advises, and personalises every moment of the shopping journey — from discovery to post-purchase care.',
    features: [
      '24/7 AI concierge across the full journey',
      'Instant conversational product guidance',
      'Reduces cart abandonment',
      'Increases conversions with intent-based recommendations',
      'Captures customer insights to improve content & AI visibility',
      'Fast integration, quick time to value',
    ],
    gradient: 'from-primary to-[hsl(18,88%,42%)]',
  },
  {
    id: 's10x',
    name: 'S10x — Sales 10x',
    icon: BarChart3,
    tagline: 'Intelligent Sales Enablement Layer',
    description: 'Connects online intent with in-store execution, helping sales teams convert faster with full customer context and real-time product intelligence.',
    features: [
      'Online Concierge — ChatGPT-like experience on your website',
      'Know Your Customer — contextual shopper profiles',
      'Product Expert — deep product knowledge for RSAs',
      'Biller — seamless closing and financing guidance',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'aivi',
    name: 'AIVI',
    icon: Eye,
    tagline: 'AI Visibility Intelligence',
    description: "Improve your brand's visibility on third-party agentic platforms like Google's UCP, ensuring AI recommends and represents your brand accurately.",
    features: [
      'Content enhancement for product detail pages',
      'Structured-data and metadata optimization',
      'Monitor top 100 prompts across categories',
      'Increase conversion rates & reduce CAC',
    ],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 'shop-connect',
    name: 'Shop Connect',
    icon: Plug,
    tagline: 'Third-Party Agentic Infrastructure',
    description: 'Connect to any third-party AI infrastructure for speed, efficiency, and measurable impact without heavy transformation projects.',
    features: [
      'Faster time to value with proven technology',
      'Lower upfront investment — no large AI teams needed',
      'Performance-linked ROI tied to usage & outcomes',
      'Modular adoption — enhance search, recommendations, support',
    ],
    gradient: 'from-emerald-500 to-teal-500',
  },
];

const shopAssistJourney = [
  { stage: 'Welcome Chat', items: ['Expected delivery updates', 'Review requests & engagement', 'Refund reassurance', 'Loyalty & retention'] },
  { stage: 'Category Chat', items: ['Expert category guidance', 'Personalised recommendations', 'Trust-building conversations', 'Cart optimisation'] },
  { stage: 'Product Page', items: ['Review summarisation', 'Criteria-based matching', 'Recent browsing context', 'Cross-product comparison'] },
  { stage: 'Checkout Chat', items: ['Auto-fill assistance', 'Payment guidance', 'Agentic commerce integration'] },
  { stage: 'Post-Transaction', items: ['Order tracking', 'Returns & refunds', 'Follow-up engagement'] },
];

const differentiators = [
  { icon: Rocket, title: 'First-Mover Advantage', description: 'Lead AI-native commerce before the market standardizes' },
  { icon: Brain, title: 'Compounding Intelligence', description: 'Continuous learning and feedback loops improve with every interaction' },
  { icon: Database, title: 'Own Your Data', description: 'Control your customer experience instead of relying on third-party AI layers' },
  { icon: Store, title: 'Retailer-Level Differentiation', description: 'Shape how AI understands, recommends, and represents your brand' },
];

const roadmap = [
  { phase: 'Phase 1', title: 'Data Foundation', items: ['Get product, customer, inventory & transaction data in order', 'Develop on-brand concierge sales experience', 'Iterate on the experience'] },
  { phase: 'Phase 2', title: 'Integration', items: ['Build integrations with 3rd-party AI apps', 'Connect agentic infrastructure'] },
  { phase: 'Phase 3', title: 'Visibility', items: ['Improve visibility within third-party apps', 'Scale AI recommendation presence'] },
];

const caseStudyResults = [
  { value: '$440K', label: 'Cost Savings (tools + headcount)' },
  { value: '$1M', label: 'Annual Revenue Uplift in Year 1' },
  { value: '5×', label: 'Return on Investment' },
];

/* ─── helpers ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } }),
};

/* ─── component ──────────────────────────────────────────── */
const OmniChannelRetail = () => {
  return (
    <>
      <Helmet>
        <title>Omni Channel Retail — AI-Powered Commerce Solutions | ZapSight</title>
        <meta name="description" content="ZapSight's omnichannel retail suite — Shop Assist, S10x, AIVI, and Shop Connect — transforms static websites into intelligent commerce experiences with measurable ROI." />
        <link rel="canonical" href="https://zapsight.co.uk/industries/omni-channel-retail" />
        <meta property="og:title" content="Omni Channel Retail | ZapSight" />
        <meta property="og:description" content="AI-powered omnichannel commerce: from shopping concierge to agentic infrastructure." />
        <meta property="og:url" content="https://zapsight.co.uk/industries/omni-channel-retail" />
        <meta property="og:image" content="https://zapsight.co.uk/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zapsight.co.uk/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Omni Channel Retail Solutions",
          description: "ZapSight's AI-powered omnichannel retail suite for furniture and home retailers.",
          url: "https://zapsight.co.uk/industries/omni-channel-retail",
          publisher: { "@type": "Organization", name: "ZapSight", url: "https://zapsight.co.uk" }
        })}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-[hsl(220,20%,6%)] pt-16 lg:pt-20">

        {/* ── HERO ── */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* ambient glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-primary/[0.06] rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
            <motion.div initial="hidden" animate="visible" className="text-center">
              <motion.p variants={fadeUp} custom={0} className="text-primary font-medium mb-4 tracking-wide uppercase text-sm flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" strokeWidth={1.5} /> Omni Channel Retail
              </motion.p>
              <motion.h1 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-5 leading-[1.1]">
                Turning AI Into <span className="gradient-text">Sales</span>
              </motion.h1>
              <motion.p variants={fadeUp} custom={2} className="text-[hsl(220,10%,60%)] text-base lg:text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                Customers are moving from clicking through websites to asking AI what to buy. We build the infrastructure that enables brands to lead this new era of intelligent, conversational commerce.
              </motion.p>
              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" className="shadow-glow" asChild>
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies/shop-assist">View Case Study</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── MARKET OPPORTUNITY ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(220,20%,5%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Market Opportunity</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                The Shift Is <span className="text-primary">Already Happening</span>
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-base max-w-2xl mx-auto">Discovery is becoming AI-driven. Static websites are losing influence. AI assistants are deciding what gets recommended.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {marketStats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8 text-center hover:border-primary/25 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  <p className="font-display text-4xl lg:text-5xl font-bold gradient-text mb-3 relative">{stat.value}</p>
                  <p className="text-[hsl(220,10%,60%)] text-sm leading-relaxed relative">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OMNICHANNEL SOLUTION OVERVIEW ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/[0.02] rounded-full blur-[140px]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Omnichannel Solution</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                Four Products. <span className="text-primary">One Ecosystem.</span>
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-base max-w-2xl mx-auto">Be the key strategic partner helping retailers embark on the AI-native commerce journey.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {products.map((product, i) => {
                const Icon = product.icon;
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8 hover:border-primary/25 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-gradient-to-br ${product.gradient} shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[hsl(0,0%,94%)] mb-1 tracking-tight">{product.name}</h3>
                      <p className="text-primary text-sm font-medium mb-3">{product.tagline}</p>
                      <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed mb-5">{product.description}</p>
                      <ul className="space-y-2">
                        {product.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-2.5 text-sm text-[hsl(220,10%,65%)]">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SHOP ASSIST JOURNEY ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(220,20%,5%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Customer Journey</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                AI at <span className="text-primary">Every Touchpoint</span>
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-base max-w-2xl mx-auto">Shop Assist guides customers from first visit through post-purchase care, each stage enriching the next.</p>
            </div>

            <div className="relative">
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
                {shopAssistJourney.map((step, i) => (
                  <motion.div
                    key={step.stage}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="relative"
                  >
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center text-primary font-display font-bold text-sm relative z-10">
                        {i + 1}
                      </div>
                    </div>
                    <h4 className="font-display font-bold text-[hsl(0,0%,90%)] text-sm mb-3 tracking-tight">{step.stage}</h4>
                    <ul className="space-y-1.5">
                      {step.items.map((item, j) => (
                        <li key={j} className="text-xs text-[hsl(220,10%,55%)] flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 text-primary/50 mt-0.5 flex-shrink-0" strokeWidth={2} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── DESIGN PRINCIPLES ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: 'Human-in-the-Loop', desc: 'Stakeholder approval before AI workflows execute critical actions.' },
                { icon: Shield, title: 'Guardrails & Memory', desc: 'Built-in constraints for AI actions, with persistent memory capturing feedback loops.' },
                { icon: Globe, title: 'Agentic Infrastructure', desc: 'Connect to any third-party AI layer — Google UCP, ChatGPT, and beyond.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    className="text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 bg-primary/10 border border-primary/15">
                      <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-[hsl(0,0%,94%)] text-lg mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATION & MOAT ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(220,20%,5%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-6xl">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Why ZapSight</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                Your <span className="text-primary">Competitive Moat</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((d, i) => {
                const Icon = d.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="group bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 hover:border-primary/25 transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 bg-primary/10 border border-primary/15 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-[hsl(0,0%,94%)] text-base mb-2 tracking-tight">{d.title}</h3>
                    <p className="text-[hsl(220,10%,55%)] text-sm leading-relaxed">{d.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ROADMAP ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Implementation</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                Your <span className="text-primary">Roadmap</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {roadmap.map((phase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8 hover:border-primary/25 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-[hsl(18,88%,42%)] flex items-center justify-center text-white font-display font-bold text-sm shadow-lg">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-primary text-xs font-semibold uppercase tracking-wider">{phase.phase}</p>
                      <h3 className="font-display font-bold text-[hsl(0,0%,94%)] text-lg tracking-tight">{phase.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-[hsl(220,10%,60%)]">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute inset-0 bg-[hsl(220,20%,5%)]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
            <div className="text-center mb-10">
              <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Case Study</p>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-4">
                Mid-Market Furniture Retailer <span className="text-primary">(USA)</span>
              </h2>
            </div>

            {/* Problem → Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8">
                <h3 className="font-display font-bold text-[hsl(0,0%,94%)] text-xl mb-4 tracking-tight flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-400" strokeWidth={1.5} /> The Problem
                </h3>
                <ul className="space-y-3">
                  {[
                    'Siloed data across CRM, POS, logistics, finance',
                    'Manual reporting & low sales associate visibility',
                    'High dependency on third-party tools and headcount',
                    'AI pilots failed due to poor data foundations',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(220,10%,60%)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-[7px] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-8">
                <h3 className="font-display font-bold text-[hsl(0,0%,94%)] text-xl mb-4 tracking-tight flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" strokeWidth={1.5} /> The Solution
                </h3>
                <ul className="space-y-3">
                  {[
                    'Unified 5 core systems into a single data layer',
                    'Embedded retail-specific business context',
                    'Deployed reporting & sales performance agents',
                    'Shifted teams from manual analysis to self-serve insights',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[hsl(220,10%,60%)]">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-6">
              {caseStudyResults.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="bg-[hsl(220,20%,8%)] border border-primary/20 rounded-2xl p-6 text-center"
                >
                  <p className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-1">{r.value}</p>
                  <p className="text-[hsl(220,10%,55%)] text-xs lg:text-sm">{r.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Key Outputs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {['Self-serve reporting for leadership', 'Daily actionable insights for RSAs', 'Automated operational workflows'].map((output, i) => (
                <div key={i} className="flex items-center gap-2 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,15%)] rounded-full px-5 py-2.5">
                  <Award className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-sm text-[hsl(220,10%,70%)]">{output}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-10 lg:py-14 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.05] rounded-full blur-[140px]" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl text-center">
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[hsl(0,0%,97%)] mb-5">
              Ready to Lead <span className="text-primary">AI-Native Commerce?</span>
            </h2>
            <p className="text-[hsl(220,10%,55%)] text-base mb-8 max-w-xl mx-auto">
              Let's build your intelligent commerce infrastructure — from concierge to agentic visibility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="shadow-glow" asChild>
                <Link to="/contact">Talk to Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/case-studies/shop-assist">Explore Shop Assist</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
};

export default OmniChannelRetail;
