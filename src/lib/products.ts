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
    tagline: 'AI Situation Awareness & Alerting Command',
    description: 'Centralizes intelligence for real-time alert prioritization and automated escalation',
    outcome: 'Respond faster and smarter',
    icon: Radio,
    heroDescription: 'AISAC centralizes intelligence from across your systems to deliver real-time alert prioritization, compressed AI summarization, and automated escalation for urgent events. With video & sensor fusion, predictive health monitoring, and rich operational dashboards, AISAC surfaces actionable alerts and predictions before issues escalate — enabling teams to respond faster and smarter.',
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
    tagline: 'AI Visibility & Insight Platform',
    description: 'Transform raw data into clear, actionable understanding across systems and operations',
    outcome: 'Trust what you see and act with confidence',
    icon: Search,
    heroDescription: "Transform your raw data into a clear, actionable understanding of what's happening across systems and operations. AIVI combines content enhancement for AI visibility, metadata optimization, and continuous AI monitoring to ensure your business always sees the signals that matter — with precision and clarity. Whether auditing performance, tuning models, or benchmarking accuracy, AIVI makes AI outcomes transparent, traceable, and reliable so you can trust what you see and act with confidence.",
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

// Map old product IDs to new ones for URL backward compatibility
const productIdAliases: Record<string, string> = {
  'custex': '5on5',
  'profast': 'voyager',
  'proman': 'clip',
};

export const getProductById = (id: string): Product | undefined => {
  // Check for aliased IDs first
  const resolvedId = productIdAliases[id] || id;
  return allProducts.find(p => p.id === resolvedId);
};
