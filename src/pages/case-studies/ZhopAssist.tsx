import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, MessageCircle, Brain, Database, Globe, Zap, 
  ArrowRight, Play, ChevronRight, Users, TrendingUp, Shield,
  Sparkles, Eye, CreditCard, Headphones, Package, BarChart3,
  Bot, Plug, DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';

import zhopWelcome from '@/assets/zhop-welcome.png';
import zhopCategory from '@/assets/zhop-category.png';
import zhopProduct from '@/assets/zhop-product.png';
import zhopCheckout from '@/assets/zhop-checkout.png';
import zhopTransaction from '@/assets/zhop-transaction.png';

const stageImages: Record<string, string> = {
  welcome: zhopWelcome,
  category: zhopCategory,
  product: zhopProduct,
  checkout: zhopCheckout,
  service: zhopTransaction,
};

const stats = [
  { value: '73%', label: 'of shoppers use AI in purchasing decisions', icon: Users },
  { value: '2/3', label: 'trust merchant AI over third-party AI', icon: Shield },
  { value: '30+', label: 'years of combined retail experience', icon: TrendingUp },
  { value: '15+', label: 'years in Data & Analytics', icon: BarChart3 },
];

const journeyStages = [
  {
    id: 'welcome',
    title: 'Welcome Chat',
    subtitle: 'Your Digital Greeter',
    icon: MessageCircle,
    color: 'from-primary to-primary-dark',
    description: 'Acts like your greeter — informing customers about their most recent engagement with your business.',
    features: [
      'Expected delivery updates',
      'Review requests & engagement',
      'Refund reassurance',
      'Recent browsing context',
    ],
  },
  {
    id: 'category',
    title: 'Category Chat',
    subtitle: 'Build Trust & Expertise',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    description: 'Demonstrate category knowledge and help customers address concerns beyond product discovery.',
    features: [
      'Expert category guidance',
      'Personalised recommendations',
      'Trust-building conversations',
      'e.g. "What mattress for back pain?"',
    ],
  },
  {
    id: 'product',
    title: 'Product Page Chat',
    subtitle: 'Deep Product Intelligence',
    icon: Eye,
    color: 'from-emerald-500 to-teal-600',
    description: 'Understand more about the product, reviews, or discounts. The agent highlights how the product meets your key criteria.',
    features: [
      'Review summarisation',
      'Criteria-based matching',
      'Discount & offer awareness',
      'Cross-product comparison',
    ],
  },
  {
    id: 'checkout',
    title: 'Checkout Chat',
    subtitle: 'Guided Purchase',
    icon: CreditCard,
    color: 'from-violet-500 to-purple-600',
    description: 'The agent guides you while completing the purchase or integrates with agentic commerce to auto-complete it.',
    features: [
      'Auto-fill assistance',
      'Payment guidance',
      'Agentic commerce integration',
      'Cart optimisation',
    ],
  },
  {
    id: 'service',
    title: 'Post-Transaction Chat',
    subtitle: 'Beyond the Sale',
    icon: Headphones,
    color: 'from-rose-500 to-pink-600',
    description: 'The agent informs about next steps and is happy to guide for any other questions after purchase.',
    features: [
      'Order tracking',
      'Returns & refunds',
      'Follow-up engagement',
      'Loyalty & retention',
    ],
  },
];

const solutionPillars = [
  {
    number: '01',
    title: 'Auto Data Ingestion & Transformation',
    description: 'Our data foundations product — UNIFYR — collects data from various sources and creates an Agent-Friendly data infrastructure.',
    icon: Database,
    detail: 'We further create a repository of authoritative content that helps users more broadly during their shopping journey.',
  },
  {
    number: '02',
    title: 'Website + Agentic Co-existence',
    description: 'Our website widget enables agents to be in-sync with the user\'s website clicks and journey.',
    icon: Globe,
    detail: 'This creates a truly "aware" agent that can assist users based on past behaviour and current shopping journey.',
  },
  {
    number: '03',
    title: 'Curated Agentic Experience',
    description: 'Custom AI experience, suggested prompts and AI guardrails based on the stage of the user journey.',
    icon: Sparkles,
    detail: 'Homepage, Product Page, Checkout, Post-Transaction — each stage gets a tailored agentic experience.',
  },
  {
    number: '04',
    title: 'Third-Party Agent Connectors',
    description: 'The data infrastructure allows your brand and products to surface more often on third-party platforms.',
    icon: Plug,
    detail: 'Connect to any third-party agentic infrastructure including Google\'s UCP and more.',
  },
];

const websiteControlFeatures = [
  { text: 'Give me similar items', detail: 'Shows options on the website' },
  { text: 'Question about product', detail: 'Highlights the relevant section' },
  { text: 'Add to my trolley', detail: 'Adds items to the bag' },
  { text: 'Let\'s buy this', detail: 'Moves to checkout page' },
  { text: 'Scroll through history', detail: 'See all past considerations' },
];

const ChatSyncSection = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const [videoHeight, setVideoHeight] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setVideoHeight(entry.contentRect.height);
      }
    });
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % websiteControlFeatures.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getItemIndex = (offset: number) => {
    return (activeFeature + offset + websiteControlFeatures.length) % websiteControlFeatures.length;
  };

  return (
    <section id="zhop-chat-sync" className="relative py-20 lg:py-28">
      <NeuralBackground />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">Bi-Directional Sync</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
            Control Website Through Chat & Vice-Versa
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Website reflects the chat interactions or clicks on the website. A truly synchronised shopping experience.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Carousel column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-3 overflow-hidden"
            style={{ height: videoHeight > 0 ? videoHeight : 'auto' }}
          >
            <AnimatePresence mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const idx = getItemIndex(offset);
                const feat = websiteControlFeatures[idx];
                const isActive = offset === 0;
                return (
                  <motion.div
                    key={`${activeFeature}-${offset}`}
                    initial={{ opacity: 0, y: offset === -1 ? -30 : 30 }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      y: 0,
                      scale: isActive ? 1 : 0.92,
                    }}
                    exit={{ opacity: 0, y: offset === -1 ? -30 : 30 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className={`flex items-start gap-4 p-5 rounded-xl border transition-colors ${
                      isActive
                        ? 'bg-muted/50 border-primary/30 shadow-glow'
                        : 'bg-muted/30 border-border/50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isActive ? 'bg-primary/20' : 'bg-primary/10'
                    }`}>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-primary/50'}`} />
                    </div>
                    <div>
                      <p className={`font-semibold text-sm ${isActive ? 'text-foreground' : 'text-foreground/50'}`}>&quot;{feat.text}&quot;</p>
                      <p className={`text-xs mt-0.5 ${isActive ? 'text-muted-foreground' : 'text-muted-foreground/50'}`}>{feat.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Video column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div ref={videoRef} className="rounded-2xl border border-border overflow-hidden bg-black">
              <video
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/videos/zhop-design-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ZhopAssist = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % journeyStages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const scrollToDemo = () => {
    document.getElementById('zhop-chat-sync')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Zhop Assist — AI Shopping Concierge | ZapSight</title>
        <meta name="description" content="Transform your website into an AI-powered shopping concierge. Zhop Assist provides agentic commerce experiences that guide customers from discovery to post-purchase." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* ── Hero ── */}
        <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/95 to-foreground/90" />
          <NeuralBackground />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <ShoppingCart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Agentic Commerce by ZapSight</span>
              </div>

              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                From Website to{' '}
                <span className="bg-gradient-to-r from-primary-light via-primary-glow to-primary bg-clip-text text-transparent" style={{ filter: 'drop-shadow(0 0 24px hsl(24 92% 50% / 0.4))' }}>
                  Shopping Concierge
                </span>
              </h1>

              <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                Gen Z expects a concierge service, a shopping assistant with a character — not just a chatbot. 
                Zhop Assist transforms your digital presence into an AI-powered shopping experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="shadow-glow text-base" asChild>
                  <Link to="/contact">
                    Get Started <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 text-base"
                  onClick={scrollToDemo}
                >
                  <Play className="w-4 h-4 mr-2" /> Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Video Banner */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 max-w-4xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster=""
                >
                  <source src="/videos/zhop-demo.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="relative py-12 bg-muted/50 border-y border-border">
          <NeuralBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Problem Statement ── */}
        <section className="relative py-20 lg:py-28">
          <NeuralBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">The Problem</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                AI is Disrupting Shopping — Are You Ready?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Merchants should engage customers at the point of consideration — providing knowledge, advice and 
                information about the category <span className="text-foreground font-medium">before</span> sharing about their products.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-destructive/20 bg-destructive/5">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-5">
                      <Globe className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Traditional Website</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Static pages, basic search, generic product listings. Customers leave to research elsewhere, 
                      losing trust and attention to third-party AI platforms.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-primary/20 bg-primary/5">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Bot className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Shopping Concierge</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      An AI-powered experience that guides, advises, and personalises every moment of the 
                      shopping journey — from discovery to post-purchase care.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Customer Journey — Interactive ── */}
        <section className="relative py-20 lg:py-28 bg-foreground">
          <NeuralBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">The Experience</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                A Concierge at Every Stage
              </h2>
              <p className="text-base text-white/60 max-w-xl mx-auto">
                Click each stage to explore how Zhop Assist transforms the entire shopping journey.
              </p>
            </motion.div>

            {/* Stage Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {journeyStages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                      activeStage === i
                        ? 'bg-primary text-white shadow-glow'
                        : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{stage.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Stage Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-5xl mx-auto"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Info */}
                  <div>
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r ${journeyStages[activeStage].color} mb-6`}>
                      {(() => { const Icon = journeyStages[activeStage].icon; return <Icon className="w-4 h-4 text-white" />; })()}
                      <span className="text-sm font-semibold text-white">{journeyStages[activeStage].subtitle}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">{journeyStages[activeStage].title}</h3>
                    <p className="text-white/60 text-base leading-relaxed mb-8">{journeyStages[activeStage].description}</p>
                    <div className="space-y-3">
                      {journeyStages[activeStage].features.map((f, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-white/70">{f}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Demo Screen with actual images */}
                  <div className="relative">
                    <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
                      <img
                        src={stageImages[journeyStages[activeStage].id]}
                        alt={`${journeyStages[activeStage].title} demo screen`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <ChatSyncSection />

        {/* ── Our Solution ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, hsl(24 92% 50% / 0.06) 0%, hsl(28 100% 58% / 0.03) 50%, hsl(var(--muted) / 0.3) 100%)' }}>
          <NeuralBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-4 block">Our Solution</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                Built on 30+ Years of Retail Expertise
              </h2>
              <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                We've combined decades of retail knowledge, data & analytics mastery, and AI-application experience into Zhop Assist.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {solutionPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredPillar(i)}
                    onMouseLeave={() => setHoveredPillar(null)}
                  >
                    <Card className="h-full hover:border-primary/20 transition-all duration-300 hover:shadow-elevated cursor-default">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-5">
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-7 h-7 text-primary" />
                          </div>
                          <div className="flex-1">
                            <span className="text-xs font-bold text-primary/60 tracking-wider">{pillar.number}</span>
                            <h3 className="font-display text-lg font-bold text-foreground mt-1 mb-2">{pillar.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
                            <AnimatePresence>
                              {hoveredPillar === i && (
                                <motion.p
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="text-muted-foreground/70 text-xs mt-3 leading-relaxed"
                                >
                                  {pillar.detail}
                                </motion.p>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing Teaser ── */}
        <section className="relative py-20 lg:py-28">
          <NeuralBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5">
                This Must Be Expensive?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Pay for <span className="text-foreground font-semibold">Interactions + Impact</span>, not for the development.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">Phase 1</h3>
                    <p className="text-sm text-muted-foreground">
                      We transform your data, and build a 'branded' shopping assistant that helps your customer throughout their journey.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-8 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Plug className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-2">Phase 2</h3>
                    <p className="text-sm text-muted-foreground">
                      We build the infrastructure that can connect to any third-party agentic infrastructure (e.g. Google's UCP, etc.).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-foreground to-foreground/95">
          <NeuralBackground />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <Zap className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                Build Your Competitive Advantage
              </h2>
              <p className="text-base text-white/60 mb-10 leading-relaxed max-w-xl mx-auto">
                Develop the experience that auto-improves and build a compounding growth driver for your retail business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="shadow-glow text-base" asChild>
                  <Link to="/contact">
                    Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 text-base" asChild>
                  <Link to="/case-studies">
                    View More Case Studies
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default ZhopAssist;
