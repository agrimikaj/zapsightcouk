import { useState } from 'react';
import { Sparkles, ChevronDown, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const industries = [
  'Manufacturing',
  'Security',
  'Insurance',
  'Finance',
  'Healthcare',
];

const departments = [
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

// Solution database
const solutionDatabase: Record<string, Record<string, Record<string, string>>> = {
  Manufacturing: {
    Marketing: {
      "Reasons for inefficiency unidentified": "Unify campaign, lead, and sales data into a structured database. Apply AI to surface funnel gaps and attribution issues. Enable clear dashboards tied to revenue outcomes. Based on your selection, we recommend starting with a discovery workshop.",
      "What more can be done": "Standardize CRM and ERP-linked marketing datasets. Use AI for demand forecasting and spend optimization. Automate insights across products and regions. Based on your selection, we recommend starting with a discovery workshop.",
      "I know I need AI Agents": "Deploy AI agents on governed marketing and sales data. Agents continuously optimize campaigns using real-time signals. Decisions remain explainable via structured schemas. Based on your selection, we recommend starting with a discovery workshop.",
    },
    Finance: {
      "Reasons for inefficiency unidentified": "Centralize cost, revenue, and plant data into a financial warehouse. Apply AI to detect anomalies and variance drivers. Enable consistent, structured reporting. Based on your selection, we recommend starting with a discovery workshop.",
      "What more can be done": "Normalize financial schemas and transaction data. Use AI for forecasting and cost optimization. Automate reconciliations and controls. Based on your selection, we recommend starting with a discovery workshop.",
      "I know I need AI Agents": "Introduce AI agents to monitor financial KPIs continuously. Agents act on structured ledgers and approval workflows. Auditability is maintained through clean data models. Based on your selection, we recommend starting with a discovery workshop.",
    },
    HR: {
      "Reasons for inefficiency unidentified": "Consolidate employee, role, and shift data into a unified HR database. Use AI to identify attrition and productivity drivers. Align workforce data with operations. Based on your selection, we recommend starting with a discovery workshop.",
      "What more can be done": "Standardize skills, roles, and performance data. Apply AI for workforce planning and hiring forecasts. Automate HR insights across locations. Based on your selection, we recommend starting with a discovery workshop.",
      "I know I need AI Agents": "Deploy AI agents for scheduling and talent matching. Agents rely on clean, governed HR datasets. Decisions remain transparent and explainable. Based on your selection, we recommend starting with a discovery workshop.",
    },
    "Supply Chain": {
      "Reasons for inefficiency unidentified": "Integrate supplier, inventory, and logistics data into one database. Use AI to identify bottlenecks and mismatches. Enable end‑to‑end visibility. Based on your selection, we recommend starting with a discovery workshop.",
      "What more can be done": "Normalize SKU, vendor, and location master data. Apply AI for demand sensing and inventory optimization. Automate alerts and planning. Based on your selection, we recommend starting with a discovery workshop.",
      "I know I need AI Agents": "Deploy AI agents for replenishment and supplier coordination. Agents act on real‑time structured supply data. Governance ensures reliable automation. Based on your selection, we recommend starting with a discovery workshop.",
    },
    "Customer Service": {
      "Reasons for inefficiency unidentified": "Consolidate tickets, orders, and product data into a single system. Use AI to detect recurring issues and delays. Enable structured case analysis. Based on your selection, we recommend starting with a discovery workshop.",
      "What more can be done": "Standardize issue categories and resolution codes. Apply AI for root‑cause analysis and response optimization. Automate SLA tracking. Based on your selection, we recommend starting with a discovery workshop.",
      "I know I need AI Agents": "Introduce AI agents to triage and resolve service requests. Agents operate on clean customer and product data. Accuracy is ensured via governed schemas. Based on your selection, we recommend starting with a discovery workshop.",
    },
  },
};

// Default solution for Security, Insurance, Finance, Healthcare industries
const defaultIndustrySolution = "Centralize domain‑specific operational data into secure, structured databases. Apply AI to detect inefficiencies, risks, and optimization opportunities. Introduce AI agents only on trusted, governed data. Based on your selection, we recommend starting with a discovery workshop.";

const getSolution = (industry: string, department: string, status: string): string => {
  // Check if we have a specific solution for Manufacturing
  if (industry === 'Manufacturing' && solutionDatabase.Manufacturing[department]?.[status]) {
    return solutionDatabase.Manufacturing[department][status];
  }
  // For Security, Insurance, Finance, Healthcare - return default solution
  return defaultIndustrySolution;
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
      setSolution(getSolution(industry, department, status));
      setIsGenerating(false);
    }, 1500);
  };

  const isComplete = industry && department && status;

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
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
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-primary font-semibold mb-3 tracking-wide uppercase text-sm">
            <Search className="h-4 w-4" strokeWidth={1.5} />
            Solution Finder
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
            AI-Powered Solutions <span className="text-primary">for Every Industry</span>
          </h2>
          <p className="text-[hsl(220,10%,60%)] text-lg max-w-2xl mx-auto">
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