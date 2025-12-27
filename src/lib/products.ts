import { Radio, Search } from 'lucide-react';
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
    tagline: 'AI-led Sensors & Control',
    description: 'Intelligence and orchestration layer for large-scale security operations',
    outcome: 'Raw alerts → Prioritized, actionable decisions',
    icon: Radio,
    heroDescription: 'AISAC is an AI-led Sensors and Control platform designed to modernize large-scale security operations. It acts as an intelligence and orchestration layer on top of existing cameras, sensors, alarms, and monitoring systems.',
    keyBenefits: [
      'Real-time alert prioritization correlating motion, tamper, vibration, video, temperature, and fire signals',
      'Video & sensor fusion for visual confirmation and false positive elimination',
      'AI summarization with contextual alerts explaining what happened, why it matters, and historical patterns',
      'Smart alert assignment based on risk level, guard availability, and location proximity',
      'Automated action triggers (auto-alarm, lockdown, notifications) with human oversight',
      'Predictive sensor health monitoring to prevent downtime and blind spots',
      'Operational dashboards with threat scores, response times, and guard performance metrics',
    ],
    features: [
      'Real-time alert prioritization & risk ranking',
      'Video analytics & sensor data fusion',
      'AI-generated contextual summaries',
      'Smart alert assignment & workload balancing',
      'Automated actions with human-in-the-loop controls',
      'Predictive sensor health monitoring',
      'Custom workflows & escalation rules',
      'IDS panel controls (arm/disarm, real-time access)',
      'Mobile alerts & branded interfaces',
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
    tagline: 'AI Visibility Intelligence',
    description: 'AI tool to improve your AI-search ranking',
    outcome: 'Intelligence that gets found',
    icon: Search,
    heroDescription: 'AIVI (AI Visibility Intelligence) is the observability layer for AI-assisted search. It helps brands understand how they appear, are interpreted, and are recommended across AI systems such as large language models, AI browsers, and answer engines beyond traditional SEO.',
    keyBenefits: [
      'Monitors AI search visibility - Tracks how a brand, its products, and categories surface across AI-assisted queries',
      'Maps source attribution - Identifies where AI systems are pulling information from',
      'Detects content and structure gaps - Highlights missing or weak signals that reduce AI confidence',
      'Tracks sentiment and narrative consistency across AI responses',
      'Guides AEO (Answer Engine Optimization) with brand-safe improvements',
    ],
    features: [
      'AI-search ranking optimization',
      'Content discoverability analysis',
      'Visibility tracking & reporting',
      'Source attribution mapping',
      'Content gap detection',
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
];

// Import archived products for backward compatibility
import { archivedProducts } from './products-archive';

// Combined list for product page routing (allows archived products to still be accessible via URL)
export const allProducts: Product[] = [...products, ...archivedProducts];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(p => p.id === id);
};
