import { useState, useEffect } from 'react';
import { Clock, TrendingUp, Target, Shield, ArrowLeftRight } from 'lucide-react';
import NeuralBackground from '@/components/ui/NeuralBackground';

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
    title: 'Your Data',
    subtitle: 'Solutions Embedded Within',
    stats: [
      'Integrate into existing data systems',
      'Transform & enrich your data',
      'Build advanced analytics layers',
      'Execute intelligent workflows'
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
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
      
      {/* Neural network animation - hidden on mobile to improve scroll performance */}
      <div className="hidden sm:block">
        <NeuralBackground />
      </div>
      
      

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-full px-4 py-2 text-sm font-medium text-[hsl(220,10%,60%)]">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              AI-Powered Data Solutions
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-balance text-[hsl(0,0%,97%)]">
              Deploy AI Agents That Deliver{' '}
              <span className="text-primary">
                6-8X ROI in Weeks
              </span>
            </h1>

            {/* ETL ↔ AI ↔ Workflows subtitle */}
            <div className="flex items-center justify-center sm:justify-start gap-3 py-4">
              <span className="text-lg lg:text-xl font-semibold text-[hsl(220,10%,75%)]">ETL</span>
              <ArrowLeftRight className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="text-lg lg:text-xl font-semibold text-[hsl(220,10%,75%)]">AI</span>
              <ArrowLeftRight className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <span className="text-lg lg:text-xl font-semibold text-[hsl(220,10%,75%)] uppercase">Workflows</span>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-2">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">4</p>
                <p className="text-xs text-[hsl(220,10%,55%)] font-medium tracking-wide uppercase">Global Offices</p>
              </div>
              <div className="w-px h-12 bg-[hsl(220,16%,14%)]" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">50+</p>
                <p className="text-xs text-[hsl(220,10%,55%)] font-medium tracking-wide uppercase">Agents Deployed</p>
              </div>
              <div className="w-px h-12 bg-[hsl(220,16%,14%)]" />
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-primary">5</p>
                <p className="text-xs text-[hsl(220,10%,55%)] font-medium tracking-wide uppercase">Industries</p>
              </div>
            </div>
          </div>

          {/* Right Content - USP Cards */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8 lg:p-10"
                 style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.05)' }}>
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center"
                     style={{
                       background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                       boxShadow: '0 0 30px hsl(var(--primary) / 0.25)'
                     }}>
                  <IconComponent className="h-8 w-8 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                    {currentUSP.title}
                  </h2>
                  <p className="text-[hsl(220,10%,60%)] font-medium">{currentUSP.subtitle}</p>
                </div>
              </div>

              {/* Stats List */}
              <ul className="space-y-4 mb-8">
                {currentUSP.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[hsl(220,10%,70%)]">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm lg:text-base">{stat}</span>
                  </li>
                ))}
              </ul>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center gap-1">
                {usps.map((usp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}: ${usp.title}`}
                    className="p-2 flex items-center justify-center"
                  >
                    <span 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        idx === activeIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-[hsl(220,16%,18%)] hover:bg-[hsl(220,16%,22%)] w-2'
                      }`}
                      style={idx === activeIndex ? { boxShadow: '0 0 12px hsl(var(--primary) / 0.5)' } : {}}
                    />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;