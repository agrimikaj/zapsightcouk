import { useState, useEffect } from 'react';
import { ArrowRight, Clock, TrendingUp, Target, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Dark Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[hsl(220,25%,8%)] to-[hsl(220,25%,12%)]" />
      
      {/* Neural Network / Data Wave Background */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="neuronGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Neural network connections */}
        <g className="animate-pulse" style={{ animationDuration: '4s' }}>
          <line x1="10%" y1="20%" x2="25%" y2="35%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="25%" y1="35%" x2="15%" y2="55%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="15%" y1="55%" x2="30%" y2="70%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="25%" y1="35%" x2="40%" y2="25%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="30%" y1="70%" x2="45%" y2="80%" stroke="url(#neuronGradient)" strokeWidth="1" />
        </g>
        
        <g className="animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}>
          <line x1="85%" y1="15%" x2="70%" y2="30%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="70%" y1="30%" x2="80%" y2="50%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="80%" y1="50%" x2="65%" y2="65%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="65%" y1="65%" x2="75%" y2="85%" stroke="url(#neuronGradient)" strokeWidth="1" />
          <line x1="70%" y1="30%" x2="55%" y2="40%" stroke="url(#neuronGradient)" strokeWidth="1" />
        </g>
        
        {/* Neural nodes */}
        <g filter="url(#glow)">
          <circle cx="10%" cy="20%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s' }} />
          <circle cx="25%" cy="35%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.5s' }} />
          <circle cx="15%" cy="55%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1s' }} />
          <circle cx="30%" cy="70%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.5s' }} />
          <circle cx="40%" cy="25%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }} />
          <circle cx="45%" cy="80%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
          
          <circle cx="85%" cy="15%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '0.8s' }} />
          <circle cx="70%" cy="30%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.2s' }} />
          <circle cx="80%" cy="50%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.6s' }} />
          <circle cx="65%" cy="65%" r="4" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '4s', animationDelay: '1.8s' }} />
          <circle cx="75%" cy="85%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.4s' }} />
          <circle cx="55%" cy="40%" r="3" fill="hsl(var(--primary))" className="animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '1.4s' }} />
        </g>
        
        {/* Data wave paths */}
        <path
          d="M0,50% Q25%,30% 50%,50% T100%,50%"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          className="animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <path
          d="M0,60% Q25%,40% 50%,60% T100%,60%"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          className="animate-pulse"
          style={{ animationDuration: '7s', animationDelay: '1s' }}
        />
      </svg>
      
      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-primary/[0.03] to-transparent rounded-full" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-background/5 backdrop-blur-sm border border-background/10 rounded-full px-4 py-2 text-sm font-medium text-background/70">
              <span className="w-2 h-2 bg-primary rounded-full pulse-subtle" />
              AI-Powered Data Solutions
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance text-background">
              Transforming Data Into{' '}
              <span className="text-primary">
                Intelligent AI Agents
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-background/60 max-w-xl leading-relaxed">
              We dissect data problems and derive simple solutions. Our AI agents and products bring innovation to your day-to-day business functions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="hero" size="xl" className="group shadow-glow" asChild>
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" className="text-background border-background/20 hover:bg-background/10" asChild>
                <Link to="/#products">
                  Explore Solutions
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-6">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">4</p>
                <p className="text-xs text-background/50 font-medium tracking-wide uppercase">Global Offices</p>
              </div>
              <div className="w-px h-12 bg-background/10" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">50+</p>
                <p className="text-xs text-background/50 font-medium tracking-wide uppercase">Agents Deployed</p>
              </div>
              <div className="w-px h-12 bg-background/10" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">5</p>
                <p className="text-xs text-background/50 font-medium tracking-wide uppercase">Industries</p>
              </div>
            </div>
          </div>

          {/* Right Content - USP Cards */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-8 lg:p-10"
                 style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.1), inset 0 1px 0 hsl(var(--background) / 0.05)' }}>
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                     style={{
                       background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                       boxShadow: '0 0 30px hsl(var(--primary) / 0.4)'
                     }}>
                  <IconComponent className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                    {currentUSP.title}
                  </h3>
                  <p className="text-background/50 font-medium">{currentUSP.subtitle}</p>
                </div>
              </div>

              {/* Stats List */}
              <ul className="space-y-4 mb-8">
                {currentUSP.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-background/70">
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
                        ? 'bg-primary w-8' 
                        : 'bg-background/20 hover:bg-background/30 w-2'
                    }`}
                    style={idx === activeIndex ? { boxShadow: '0 0 12px hsl(var(--primary) / 0.6)' } : {}}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-primary/[0.05] rounded-[2rem] blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-primary/[0.03] rounded-[2.5rem] blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
