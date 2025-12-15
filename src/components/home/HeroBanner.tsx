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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-accent pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-2 text-sm font-medium text-accent-foreground">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              AI-Powered Data Solutions
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Transforming Data Into{' '}
              <span className="gradient-text">Intelligent AI Agents</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              We dissect data problems and derive simple solutions. Our AI agents and products bring innovation to your day-to-day business functions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="heroOutline" size="xl">
                Explore Solutions
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">4</p>
                <p className="text-xs text-muted-foreground">Global Offices</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">50+</p>
                <p className="text-xs text-muted-foreground">AI Agents Deployed</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold gradient-text">5</p>
                <p className="text-xs text-muted-foreground">Industries Served</p>
              </div>
            </div>
          </div>

          {/* Right Content - USP Cards */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-2xl glow-orange transition-all duration-500">
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentUSP.gradient} flex items-center justify-center shadow-lg`}>
                  <IconComponent className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-4xl lg:text-5xl font-bold gradient-text">{currentUSP.title}</h3>
                  <p className="text-muted-foreground font-medium">{currentUSP.subtitle}</p>
                </div>
              </div>

              {/* Stats List */}
              <ul className="space-y-3 mb-8">
                {currentUSP.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {stat}
                  </li>
                ))}
              </ul>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-3">
                {usps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-border hover:bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-primary/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
