import { Radio, Search, FileCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  outcome: string;
  icon: LucideIcon;
  heroDescription: string;
  keyBenefits: string[];
  features: string[];
  benefits: string[];
  useCases: string[];
  demoUrl?: string;
  technicalSpecs?: {
    latency?: string;
    scalability?: string;
    reliability?: string;
    concurrency?: string;
    dataRetention?: string;
    deployment?: string;
  };
}

// Active products shown in navigation
export const products: Product[] = [
  {
    id: 'aisac',
    name: 'AISAC',
    tagline: 'Intelligent Security, Automated',
    description: 'AI-powered security platform that transforms operations from reactive to proactive',
    outcome: 'Predict and prevent threats',
    icon: Radio,
    heroDescription: 'Stop reacting to threats. Start predicting and preventing them. AISAC is the AI-powered security platform that transforms your operations from reactive to proactive. By fusing data from all your existing security systems, AISAC delivers real-time intelligence, pinpoints critical threats, and automates responses, so your team can act faster and with greater precision.',
    keyBenefits: [
      'Eliminate Alert Fatigue — AISAC\'s intelligent prioritization cuts through the noise, surfacing only the alerts that matter. By correlating signals from motion, video, temperature, and more, we eliminate false positives and ensure your team focuses on genuine threats.',
      'Faster, Smarter Decisions — Get the full picture, instantly. AI-powered summaries provide context-rich alerts, explaining what\'s happening, why it\'s critical, and the historical patterns. This enables your team to make the right call, every time.',
      'Prevent Incidents Before They Occur — AISAC\'s predictive health monitoring identifies potential system failures and security gaps before they become a problem. Proactively prevent downtime, eliminate blind spots, and ensure your security is always operational.',
      'Complete Operational Visibility — Rich, intuitive dashboards provide a single pane of glass for your entire security posture. Track threat scores, monitor response times, and measure team performance to continuously optimize your operations.',
    ],
    features: [
      'Real-time Alert Prioritization — Intelligent correlation of all your security signals',
      'AI-Powered Summarization — Contextual alerts that explain the \'what\', \'why\', and \'when\'',
      'Automated Escalation — Smart alert assignment to the right people, instantly',
      'Video & Sensor Fusion — Visual confirmation to eliminate false positives',
      'Predictive Health Monitoring — Proactive maintenance to prevent system failures',
      'Operational Dashboards — At-a-glance visibility into your entire security landscape',
    ],
    benefits: [
      'Eliminate alert fatigue with intelligent prioritization',
      'Enable faster, more accurate security decisions',
      'Prevent incidents before they occur',
      'Complete visibility into security posture',
      'Automate responses for faster reaction times',
      'Continuously optimize operations with performance metrics',
    ],
    useCases: [
      'Financial Institutions — Securing banking and ATM networks',
      'Retail Chains — Centralized monitoring for multiple outlets',
      'Industrial Facilities — Protecting factories and manufacturing plants',
      'Infrastructure Protection — Securing critical national infrastructure',
      'Nationwide Security — Powering large-scale security operations',
    ],
    demoUrl: 'https://v0.app/chat/alerts-screen-security-staff-2-AX5mn0ofYNP',
    technicalSpecs: {
      latency: '<100ms',
      scalability: '10,000+ alerts/hour',
      reliability: '99.9%',
      concurrency: '100+',
      dataRetention: 'Unlimited',
      deployment: 'On-prem, private cloud, or bank cloud',
    },
  },
  {
    id: 'aivi',
    name: 'AIVI',
    tagline: 'AI Visibility & Insight Platform',
    description: 'Transform raw data into clear, actionable understanding across systems and operations',
    outcome: 'Trust what you see and act with confidence',
    icon: Search,
    heroDescription: "Transform your raw data into a clear, actionable understanding of what's happening across systems and operations. AIVI combines AI visibility monitoring, AI search optimization, agent traffic monitoring, content enhancement, and metadata optimization to ensure your business always sees the signals that matter — with precision and clarity.",
    keyBenefits: [
      'AI Visibility Monitoring - Track how your brand surfaces across AI-assisted queries',
      'AI Search Optimization - Improve discoverability in AI-powered search results',
      'Agent Traffic Monitoring - Monitor and analyze AI agent interactions',
      'Content Enhancement for AI Visibility - Optimize content for AI consumption',
      'Metadata Optimization - Structure data for maximum AI discoverability',
    ],
    features: [
      'AI Visibility Monitoring',
      'AI Search Optimization',
      'Agent Traffic Monitoring',
      'Content Enhancement for AI Visibility',
      'Metadata Optimization',
    ],
    benefits: [
      'Increased visibility in AI search results',
      'Better discoverability across AI platforms',
      'Data-driven content optimization',
      'Control over AI-generated brand narratives',
    ],
    useCases: [
      'E-commerce product visibility',
      'Enterprise knowledge discoverability',
      'Content marketing optimization',
      'Brand presence in AI assistants',
    ],
    demoUrl: 'https://v0.app/chat/aivi-dashboard-design-kqe8KTizDTk?ref=LOE3T2',
  },
  {
    id: 'claim',
    name: 'CLaiM',
    tagline: 'AI Claims Analysis & Adjudication Platform',
    description: 'Automated claims categorization, tariff review, and AI-powered adjudication',
    outcome: 'Faster, fairer claims processing',
    icon: FileCheck,
    heroDescription: 'CLaiM transforms claims processing with AI-powered analysis across multiple sources including hospitals and mechanics. It categorizes claims across coverage areas with associated amounts, reviews policies and outstanding limits, verifies expected tariffs for line items, and performs intelligent claims adjudication — calculating both insurance payable and claimant payable amounts with full transparency.',
    keyBenefits: [
      'Multi-source claims analysis (hospitals, mechanics, etc.)',
      'Automatic categorization across coverage areas with amounts',
      'Policy and outstanding limits review across claim categories',
      'Expected tariff verification for line items',
      'AI-powered claims adjudication',
      'Automated insurance payable and claimant payable calculation',
    ],
    features: [
      'Analysing claims across different sources (hospitals, mechanics)',
      'Categorise claims across coverage areas with amounts',
      'Review policy and outstanding limits across claim categories',
      'Review expected tariffs for line items',
      'Claims adjudication through AI',
      'Calculate insurance payable and claimant payable',
    ],
    benefits: [
      'Faster claims processing',
      'Reduced manual review effort',
      'Consistent adjudication decisions',
      'Transparent payment calculations',
      'Lower claims leakage',
    ],
    useCases: [
      'Health insurance claims',
      'Motor insurance claims',
      'Property damage claims',
      'Multi-line insurance processing',
    ],
  },
];

// Import archived products for backward compatibility
import { archivedProducts } from './products-archive';

// Combined list for product page routing (allows archived products to still be accessible via URL)
export const allProducts: Product[] = [...products, ...archivedProducts];

// Map old product IDs to new ones for URL backward compatibility
const productIdAliases: Record<string, string> = {
  'custex': '5on5',
  'profast': 'tars',
  'voyager': 'tars',
  'proman': 'arios',
  'clip': 'arios',
};

export const getProductById = (id: string): Product | undefined => {
  // Check for aliased IDs first
  const resolvedId = productIdAliases[id] || id;
  return allProducts.find(p => p.id === resolvedId);
};
