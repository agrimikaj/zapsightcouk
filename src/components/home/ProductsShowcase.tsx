import { useRef } from 'react';
import { ArrowRight, Database, MessageSquare, BarChart3, Radio, Search, Wrench, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import dashboardProductivity from '@/assets/dashboard-productivity.png';
import dashboardSecurity1 from '@/assets/dashboard-security-1.png';
import dashboardSecurity2 from '@/assets/dashboard-security-2.png';

const products = [
  {
    id: 'unifyer',
    name: 'Unifyer',
    tagline: 'AI-Assisted Data Pipelines',
    description: 'Build AI-assisted and monitored data pipelines across different data sources.',
    icon: Database,
    benefits: [
      'Quick turnaround in building your data warehouse',
      'Smart monitoring with pro-active alerting',
      'AI-ready data transformations for agents',
    ],
    image: dashboardProductivity,
    tools: ['AWS', 'Azure', 'Google Cloud', 'Snowflake', 'Databricks'],
  },
  {
    id: 'deasy',
    name: 'DEasy',
    tagline: 'Natural Language Data Access',
    description: 'Easy access to your data through Natural Language. Build personalized dashboards and get insights on your fingertips.',
    icon: MessageSquare,
    benefits: [
      'Query data using plain English',
      'Build custom dashboards instantly',
      'Routine analysis automation',
    ],
    image: dashboardProductivity,
    tools: ['OpenAI', 'Gemini', 'Custom LLMs'],
  },
  {
    id: 'dashia',
    name: 'DashIA',
    tagline: 'Next-Gen Dashboards',
    description: 'New-age dashboards with engaging UIs, embedded insights and easy path to actions.',
    icon: BarChart3,
    benefits: [
      'Interactive visualizations',
      'AI-embedded insights',
      'One-click actions',
    ],
    image: dashboardSecurity2,
    tools: ['React', 'D3.js', 'Custom Charts'],
  },
  {
    id: 'aisen',
    name: 'Aisen',
    tagline: 'Sensor AI Integration',
    description: 'Integrates with industry-leading sensor hardware for AI-generated insights and actions.',
    icon: Radio,
    benefits: [
      'Security monitoring',
      'Machine maintenance',
      'Industrial automation',
    ],
    image: dashboardSecurity1,
    tools: ['IoT Platforms', 'Edge Computing', 'Real-time ML'],
  },
  {
    id: 'seai',
    name: 'Seai',
    tagline: 'AI Search Optimization',
    description: 'AI tool to improve your AI-search ranking and discoverability.',
    icon: Search,
    benefits: [
      'SEO for AI era',
      'Content optimization',
      'Visibility tracking',
    ],
    image: dashboardProductivity,
    tools: ['NLP', 'Content Analysis', 'Ranking Models'],
  },
  {
    id: 'builder',
    name: 'Builder',
    tagline: 'Workflow Automation Platform',
    description: 'Enable any data or non-data workflow. Build actions leveraging insights—emailing, tickets, ERP/CRM actions.',
    icon: Wrench,
    benefits: [
      'No-code workflow builder',
      'Multi-system integration',
      'Automated actions',
    ],
    image: dashboardProductivity,
    tools: ['Zapier', 'Custom APIs', 'Enterprise Systems'],
  },
  {
    id: 'docai',
    name: 'Docai',
    tagline: 'Document Intelligence',
    description: 'Process any docs, PDFs, or unstructured data. Create workflows using policy docs, delivery orders, or insurance claims.',
    icon: FileText,
    benefits: [
      'OCR + Visual LLM processing',
      'High accuracy extraction',
      'Automated document workflows',
    ],
    image: dashboardProductivity,
    tools: ['OCR', 'Vision Models', 'Document AI'],
  },
];

const ProductsShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A comprehensive suite of AI-powered tools designed to transform your data operations.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => scroll('left')}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={() => scroll('right')}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Products Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                className="flex-shrink-0 w-[350px] lg:w-[400px] snap-start"
              >
                <div className="card-floating overflow-hidden h-full flex flex-col">
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-secondary/50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-elevated">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="font-display text-xl font-bold mb-1">{product.name}</h3>
                      <p className="text-primary text-sm font-medium">{product.tagline}</p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-2.5 py-1.5 bg-secondary/60 rounded-full text-muted-foreground backdrop-blur-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Button variant="ghost" className="w-full justify-between group">
                      Learn More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
