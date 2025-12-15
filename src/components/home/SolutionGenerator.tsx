import { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  "I don't know the problem",
  'What more can be done',
  'I have a defined problem',
];

const solutionTemplates: Record<string, string> = {
  "Energy-Operations-I have a defined problem": "Based on your profile, we recommend implementing our **Monitoring Agent** combined with **Aisen** sensor integration. This solution can automate equipment health monitoring, predict maintenance needs, and optimize operational efficiency. Our agents typically achieve 20-30% reduction in unplanned downtime and 15% improvement in energy efficiency within the first 6 months.",
  "Retail-Sales-What more can be done": "For retail sales optimization, our **Execution Agent** paired with **DEasy** analytics platform can transform your approach. We can implement AI-driven inventory optimization, personalized customer recommendations, and automated reorder triggers. Clients typically see 6-8X ROI through improved conversion rates and reduced stockouts.",
  "Manufacturing-Supply Chain-I don't know the problem": "Let's start with a discovery phase using our **Research Agent**. We'll analyze your current supply chain data to identify bottlenecks, predict demand patterns, and optimize vendor relationships. Our **Unifyer** platform will connect your siloed systems into a unified data foundation, revealing opportunities you didn't know existed.",
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
      <label className="block text-sm font-medium text-muted-foreground mb-2">{label}</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-card border border-border rounded-xl text-left hover:border-primary/50 transition-colors"
      >
        <span className={value ? 'text-foreground' : 'text-muted-foreground'}>
          {value || `Select ${label}`}
        </span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-xl z-50 max-h-60 overflow-auto">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-accent transition-colors first:rounded-t-xl last:rounded-b-xl ${
                value === option ? 'bg-accent text-primary font-medium' : ''
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
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Find Your <span className="gradient-text">AI Solution</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tell us about your context and we'll recommend the perfect AI agent solution for your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-10 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
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
              className="w-full"
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
              <div className="mt-8 p-6 bg-accent rounded-xl border border-primary/20 animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">Recommended Solution</span>
                </div>
                <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
                  {solution.split('**').map((part, i) => 
                    i % 2 === 1 ? <strong key={i} className="text-primary">{part}</strong> : part
                  )}
                </p>
                <Button variant="heroOutline" size="lg" className="mt-6">
                  Schedule a Discovery Call
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
