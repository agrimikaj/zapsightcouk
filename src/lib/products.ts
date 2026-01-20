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
    tagline: 'AI Situation Awareness & Alerting Command',
    description: 'Centralizes intelligence for real-time alert prioritization and automated escalation',
    outcome: 'Respond faster and smarter',
    icon: Radio,
    heroDescription: 'AISAC centralizes intelligence from across your systems to deliver real-time alert prioritization, compressed AI summarization, and automated escalation for urgent events. With video & sensor fusion, predictive health monitoring, and rich operational dashboards, AISAC surfaces actionable alerts and predictions before issues escalate — enabling teams to respond faster and smarter.',
    keyBenefits: [
      'Real-time alert prioritization correlating motion, tamper, vibration, video, temperature, and fire signals',
      'Video & sensor fusion for visual confirmation and false positive elimination',
      'AI summarization with contextual alerts explaining what happened, why it matters, and historical patterns',
      'Automated escalation with smart alert assignment',
      'Predictive health monitoring to prevent downtime and blind spots',
      'Operational dashboards with threat scores, response times, and performance metrics',
    ],
    features: [
      'Real-time Alert Prioritization',
      'AI Summarization',
      'Automated Escalation',
      'Video & Sensor Fusion',
      'Predictive Health Monitoring',
      'Operational Dashboards',
    ],
    benefits: [
      'Eliminate alert fatigue with intelligent prioritization',
      'Reduce false positives through cross-validation',
      'Enable faster, more accurate security decisions',
      'Balance guard workloads automatically',
      'Prevent sensor failures before downtime',
      'Complete visibility into security posture and efficiency',
    ],
    useCases: [
      'Bank & ATM security networks',
      'Retail outlet monitoring',
      'Factory & manufacturing security',
      'Infrastructure site protection',
      'Nationwide security operations',
    ],
    demoUrl: 'https://v0.app/chat/alerts-screen-security-staff-2-AX5mn0ofYNP',
    technicalSpecs: {
      latency: '<100ms end-to-end',
      scalability: '10,000+ alerts/hour',
      reliability: '99.9% uptime SLA',
      concurrency: '100+ simultaneous users',
      dataRetention: 'Unlimited history',
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
