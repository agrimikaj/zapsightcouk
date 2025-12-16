import { useState, useEffect } from 'react';
import { ArrowRight, Clock, TrendingUp, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const usps = [
  {
    icon: Clock,
    title: '4-6 Weeks',
    subtitle: 'Engagement Timeline',
    stats: [
      'Per business use-case',
      'Data pipelines & ML algorithms',
      'AI-agentic workflow development',
      '+ 2-3 weeks monitoring & enhancements'
    ],
    gradient: 'from-primary to-primary-dark',
  },
  {
    icon: TrendingUp,
    title: '6-8X RoI',
    subtitle: 'On Engagements',
    stats: [
      'Per each business use-case',
      'Measurable outcomes',
      'Across next 12-18 months',
      'Proven track record'
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Target,
    title: '95-99%',
    subtitle: 'Gen-AI Accuracy',
    stats: [
      'High precision output',
      'Human-in-the-loop when needed',
      'E2E workflow measurement',
      'Agentic operations verified'
    ],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Shield,
    title: '99.9%',
    subtitle: 'Solution Uptime',
    stats: [
      'AWS + Azure + Google Cloud',
      'OpenAI, Gemini, Anthropic',
      'Best-in-class open source models',
      'Enterprise-grade reliability'
    ],
    gradient: 'from-orange-400 to-primary',
  },
];

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % usps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentUSP = usps[activeIndex];
  const IconComponent = currentUSP.icon;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-hero-mesh opacity-50" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[80px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/[0.02] to-transparent rounded-full" />
        
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-foreground/70 shadow-soft">
              <span className="w-2 h-2 bg-primary rounded-full pulse-subtle" />
              AI-Powered Data Solutions
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance">
              Transforming Data Into{' '}
              <span className="gradient-text">Intelligent AI Agents</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We dissect data problems and derive simple solutions. Our AI agents and products bring innovation to your day-to-day business functions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="xl" className="group shadow-glow">
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore Solutions
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold gradient-text">4</p>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Global Offices</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Agents Deployed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold gradient-text">5</p>
                <p className="text-xs text-muted-foreground font-medium tracking-wide uppercase">Industries</p>
              </div>
            </div>
          </div>

          {/* Right Content - USP Cards */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="card-floating p-8 lg:p-10 glow-orange">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`icon-container w-16 h-16`}>
                  <IconComponent className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-4xl lg:text-5xl font-bold gradient-text tracking-tight">{currentUSP.title}</h3>
                  <p className="text-muted-foreground font-medium">{currentUSP.subtitle}</p>
                </div>
              </div>

              {/* Stats List */}
              <ul className="space-y-4 mb-8">
                {currentUSP.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm lg:text-base">{stat}</span>
                  </li>
                ))}
              </ul>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-3">
                {usps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      idx === activeIndex 
                        ? 'bg-primary w-8 shadow-glow' 
                        : 'bg-muted hover:bg-primary/30 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements - Soft shadows instead of borders */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/[0.03] rounded-[2rem] blur-sm" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-primary/[0.02] rounded-[2.5rem] blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;