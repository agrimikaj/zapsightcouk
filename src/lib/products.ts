import { Database, Radio, FileText, MessageSquare, BarChart3, Wrench, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
  heroDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const products: Product[] = [
  {
    id: 'aivi',
    name: 'AIVI',
    tagline: 'AI Visibility Intelligence',
    description: 'Improves AI-search ranking & discoverability',
    outcome: 'Intelligence that gets found',
    icon: Search,
    heroDescription: 'Optimize your AI presence and discoverability. AIVI ensures your business intelligence gets found by AI-powered search engines and recommendation systems.',
    features: [
      'AI-search ranking optimization',
      'Content discoverability analysis',
      'Visibility tracking & reporting',
      'Competitive intelligence monitoring',
    ],
    benefits: [
      'Increased visibility in AI search results',
      'Better discoverability across AI platforms',
      'Data-driven content optimization',
      'Stay ahead of AI-search trends',
    ],
    useCases: [
      'E-commerce product visibility',
      'Enterprise knowledge discoverability',
      'Content marketing optimization',
      'Brand presence in AI assistants',
    ],
  },
  {
    id: 'builder',
    name: 'Builder',
    tagline: 'Actions & Automation',
    description: 'Emails, tickets, ERP/CRM workflow orchestration',
    outcome: 'Insights → execution',
    icon: Wrench,
    heroDescription: 'Transform insights into action with automated workflows. Builder connects your data insights directly to business systems for seamless execution.',
    features: [
      'No-code workflow builder',
      'ERP/CRM integration',
      'Email & ticket automation',
      'Multi-system orchestration',
    ],
    benefits: [
      'Reduce manual data entry',
      'Accelerate response times',
      'Ensure consistent execution',
      'Scale operations effortlessly',
    ],
    useCases: [
      'Automated customer follow-ups',
      'Inventory reorder triggers',
      'Support ticket routing',
      'Sales pipeline automation',
    ],
  },
  {
    id: 'dashia',
    name: 'DashIA',
    tagline: 'Insightful Dashboards',
    description: 'Engaging UI with embedded AI insights',
    outcome: 'See → understand → act',
    icon: BarChart3,
    heroDescription: 'Next-generation dashboards that don\'t just display data—they explain it. DashIA embeds AI-powered insights directly into your visualizations.',
    features: [
      'AI-embedded insights',
      'Interactive visualizations',
      'One-click actions',
      'Real-time data updates',
    ],
    benefits: [
      'Faster decision making',
      'Clear path from insight to action',
      'Reduced analysis time',
      'Democratized data access',
    ],
    useCases: [
      'Executive dashboards',
      'Operations monitoring',
      'Sales performance tracking',
      'Customer analytics',
    ],
  },
  {
    id: 'deasy',
    name: 'DEasy',
    tagline: 'Natural Language Access',
    description: 'Ask questions in plain English',
    outcome: 'Anyone can access data',
    icon: MessageSquare,
    heroDescription: 'Query your data using plain English. DEasy eliminates the technical barrier between your team and the insights they need.',
    features: [
      'Natural language queries',
      'Instant dashboard creation',
      'Routine analysis automation',
      'Multi-language support',
    ],
    benefits: [
      'No SQL knowledge required',
      'Faster time to insights',
      'Reduced IT dependency',
      'Self-service analytics',
    ],
    useCases: [
      'Ad-hoc business questions',
      'Quick report generation',
      'Data exploration',
      'Cross-department collaboration',
    ],
  },
  {
    id: 'docai',
    name: 'DocAI',
    tagline: 'Unstructured Data Intelligence',
    description: 'OCR + visual LLM for documents',
    outcome: 'Documents → structured insights',
    icon: FileText,
    heroDescription: 'Transform unstructured documents into actionable data. DocAI processes PDFs, images, and scanned documents with high accuracy.',
    features: [
      'Advanced OCR processing',
      'Visual LLM analysis',
      'Document classification',
      'Automated data extraction',
    ],
    benefits: [
      'Process documents at scale',
      'High accuracy extraction',
      'Reduce manual data entry',
      'Unlock document insights',
    ],
    useCases: [
      'Insurance claims processing',
      'Invoice automation',
      'Contract analysis',
      'Delivery order processing',
    ],
  },
  {
    id: 'aisac',
    name: 'AISAC',
    tagline: 'Sensor Intelligence',
    description: 'Integrates with sensor hardware',
    outcome: 'Real-world signals → decisions',
    icon: Radio,
    heroDescription: 'Bridge the physical and digital worlds. AISAC integrates with IoT sensors to generate AI-powered insights and automated responses.',
    features: [
      'IoT sensor integration',
      'Real-time monitoring',
      'Predictive maintenance',
      'Automated alerting',
    ],
    benefits: [
      'Prevent equipment failures',
      'Optimize asset performance',
      'Reduce downtime',
      'Enable predictive operations',
    ],
    useCases: [
      'Manufacturing equipment monitoring',
      'Energy grid management',
      'Security surveillance',
      'Environmental monitoring',
    ],
  },
  {
    id: 'unifyer',
    name: 'Unifyer',
    tagline: 'AI-Assisted Data Pipelines',
    description: 'Connects sources, builds AI-ready pipelines',
    outcome: 'Clean, monitored, AI-ready data',
    icon: Database,
    heroDescription: 'The foundation of your AI intelligence stack. Unifyer connects your data sources and builds monitored, AI-ready pipelines.',
    features: [
      'Multi-source data integration',
      'AI-assisted pipeline creation',
      'Proactive monitoring & alerts',
      'Data quality management',
    ],
    benefits: [
      'Faster data warehouse setup',
      'Reduced data engineering effort',
      'Reliable data quality',
      'AI-ready transformations',
    ],
    useCases: [
      'Enterprise data integration',
      'Cloud migration',
      'Data lake creation',
      'Real-time data streaming',
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
