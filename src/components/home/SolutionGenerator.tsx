import { useState } from 'react';
import { Sparkles, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const industries = [
  'Energy',
  'Retail', 
  'Manufacturing',
  'Security',
  'Insurance',
  'Finance',
  'Healthcare',
];

const departments = [
  'Sales',
  'Operations',
  'Marketing',
  'Finance',
  'HR',
  'Supply Chain',
  'Customer Service',
];

const problemStatuses = [
  'Reasons for inefficiency unidentified',
  'What more can be done',
  'I know I need AI Agents',
];

const solutionTemplates: Record<string, string> = {
  "Energy-Operations-I know I need AI Agents": "Based on your profile, we recommend implementing our **Monitoring Agent** combined with **Aisen** sensor integration. This solution can automate equipment health monitoring, predict maintenance needs, and optimize operational efficiency. Our agents typically achieve 20-30% reduction in unplanned downtime and 15% improvement in energy efficiency within the first 6 months.",
  "Retail-Sales-What more can be done": "For retail sales optimization, our **Execution Agent** paired with **DEasy** analytics platform can transform your approach. We can implement AI-driven inventory optimization, personalized customer recommendations, and automated reorder triggers. Clients typically see 6-8X ROI through improved conversion rates and reduced stockouts.",
  "Manufacturing-Supply Chain-Reasons for inefficiency unidentified": "Let's start with a discovery phase using our **Research Agent**. We'll analyze your current supply chain data to identify bottlenecks, predict demand patterns, and optimize vendor relationships. Our **Unifyer** platform will connect your siloed systems into a unified data foundation, revealing opportunities you didn't know existed.",
  "default": "Based on your selection, we recommend starting with a discovery workshop. Our team will analyze your specific context and design a custom AI agent solution. Typical engagements include data pipeline setup, ML model development, and agentic workflow automation—all delivered in 4-6 weeks with measurable ROI targets."
};

interface SelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({ label, options, value, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className="block text-sm font-medium text-[hsl(220,10%,50%)] mb-2.5 tracking-wide">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3.5 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl text-left hover:bg-[hsl(220,20%,11%)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        <span className={value ? 'text-[hsl(0,0%,94%)] font-medium' : 'text-[hsl(220,10%,45%)]'}>
          {value || `Select ${label}`}
        </span>
        <ChevronDown className={`h-5 w-5 text-[hsl(220,10%,45%)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl shadow-floating z-50 max-h-60 overflow-auto animate-scale-in">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3.5 text-left hover:bg-primary/10 transition-all duration-200 first:rounded-t-2xl last:rounded-b-2xl ${
                value === option ? 'bg-primary/10 text-primary font-medium' : 'text-[hsl(220,10%,60%)]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const SolutionGenerator = () => {
  const [industry, setIndustry] = useState('');
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');
  const [solution, setSolution] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!industry || !department || !status) return;
    
    setIsGenerating(true);
    setTimeout(() => {
      const key = `${industry}-${department}-${status}`;
      setSolution(solutionTemplates[key] || solutionTemplates['default']);
      setIsGenerating(false);
    }, 1500);
  };

  const isComplete = industry && department && status;

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-primary/[0.02] rounded-full blur-[180px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Solution Finder</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-tight text-[hsl(0,0%,97%)]">
            AI-Powered Solutions <span className="text-primary">for Every Industry</span>
          </h2>
          <p className="text-[hsl(220,10%,55%)] text-lg max-w-2xl mx-auto">
            Tell us about your context and we'll recommend the perfect AI agent solution for your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8 lg:p-12"
               style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.03)' }}>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <CustomSelect
                label="Industry"
                options={industries}
                value={industry}
                onChange={setIndustry}
              />
              <CustomSelect
                label="Department"
                options={departments}
                value={department}
                onChange={setDepartment}
              />
              <CustomSelect
                label="Problem Status"
                options={problemStatuses}
                value={status}
                onChange={setStatus}
              />
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!isComplete || isGenerating}
              variant="hero"
              size="lg"
              className="w-full shadow-glow"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Generating Solution...
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5" />
                  Generate a Solution for Me
                </>
              )}
            </Button>

            {/* Solution Output */}
            {solution && (
              <div className="mt-10 p-8 bg-primary/[0.05] border border-primary/15 rounded-3xl animate-scale-in relative">
                <button
                  onClick={() => setSolution('')}
                  className="absolute top-4 right-4 p-2 rounded-xl hover:bg-[hsl(220,20%,12%)] transition-colors text-[hsl(220,10%,50%)] hover:text-[hsl(0,0%,90%)]"
                  aria-label="Close solution"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className="font-display font-semibold text-primary tracking-tight">Recommended Solution</span>
                </div>
                <p className="text-[hsl(220,10%,70%)] leading-relaxed whitespace-pre-line">
                  {solution.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-primary font-semibold">{part}</strong> : part
                  )}
                </p>
                <Button variant="heroOutline" size="lg" className="mt-8" asChild>
                  <Link to="/contact">Schedule a Discovery Call</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionGenerator;