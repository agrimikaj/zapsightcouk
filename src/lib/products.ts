import { Database, Radio, FileText, MessageSquare, BarChart3, Wrench, Search, Users, Package, ClipboardList, Factory } from 'lucide-react';
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

export const products: Product[] = [
  {
    id: 'unifyer',
    name: 'Unifyer',
    tagline: 'AI-Assisted Data Pipelines',
    description: 'Builds AI-assisted and monitored data pipelines across different data sources',
    outcome: 'Clean, monitored, AI-ready data',
    icon: Database,
    heroDescription: 'Our product helps build AI-assisted and monitored data pipelines across different data sources.',
    keyBenefits: [
      'Quick turnaround time in building your data warehouse / AI applications',
      'Smart monitoring of the data pipelines through pro-active alerting',
      'AI-ready data transformations that helps in building agents',
    ],
    features: [
      'Multi-source data integration',
      'AI-assisted pipeline creation',
      'Proactive monitoring & alerts',
      'Data quality management',
      'Process of building the data-pipeline',
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
  {
    id: 'aidr',
    name: 'AIDR',
    tagline: 'Natural Language Data Access',
    description: 'Enables easy access of your data through Natural Language',
    outcome: 'Data access at your fingertips',
    icon: MessageSquare,
    heroDescription: 'Our product enables easy access of your data through Natural Language. Building personalized / business specific dashboards, running routine analysis or getting insights is now on your fingertips.',
    keyBenefits: [
      'Create business specific dashboards across all your data sources',
      'Automate insight generation, helping business leaders to start with a hypothesis',
      'Enable employees to deep-dive with NLP',
      'Employees can generate their own analytics workflows that run on a cadence and create reports to review',
    ],
    features: [
      'Natural language queries',
      'Instant dashboard creation',
      'Routine analysis automation',
      'Multi-source data access',
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
    id: 'aisac',
    name: 'AISAC',
    tagline: 'AI-led Sensors & Control',
    description: 'Intelligence and orchestration layer for large-scale security operations',
    outcome: 'Raw alerts → Prioritized, actionable decisions',
    icon: Radio,
    heroDescription: 'AISAC is an AI-led Sensors and Control platform designed to modernize large-scale security operations. It acts as an intelligence and orchestration layer on top of existing cameras, sensors, alarms, and monitoring systems—transforming raw alerts into prioritized, contextual, and actionable security decisions. Move from reactive alert handling to proactive, outcome-driven security operations across geographically distributed estates like banks, ATMs, retail outlets, factories, and infrastructure sites.',
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
  {
    id: 'sapro',
    name: 'SAPRO',
    tagline: 'Sales Productivity Agent',
    description: 'Helps sales team be more productive, informed and coached',
    outcome: 'Empowered sales teams',
    icon: Users,
    heroDescription: 'The AI agent focuses on helping the sales team be more productive, informed and coached.',
    keyBenefits: [
      'Tracking key sales KPI as per business needs',
      'Provide contextual insights based on each sales rep\'s performance',
      'Translate insights to feedback and personalized coaching messages',
      'Create, communicate and track sales incentives to deliver the right ROI',
      'Provide customer and product information at sales reps\' fingertips',
      'Create workflows for customer follow-ups and engagements',
    ],
    features: [
      'Sales KPI tracking',
      'Performance analytics',
      'AI-powered coaching',
      'Incentive management',
      'Customer engagement workflows',
    ],
    benefits: [
      'Increased sales productivity',
      'Better-informed sales reps',
      'Personalized coaching at scale',
      'Optimized incentive ROI',
    ],
    useCases: [
      'Sales performance management',
      'Rep coaching automation',
      'Customer follow-up workflows',
      'Incentive program tracking',
    ],
  },
  {
    id: 'aiven',
    name: 'AIVEN',
    tagline: 'Inventory Intelligence',
    description: 'Managing inventory and building workflows around inventory use cases',
    outcome: 'Optimized inventory operations',
    icon: Package,
    heroDescription: 'This product focuses on managing the inventory and building workflows around the inventory use cases.',
    keyBenefits: [
      'Track inventory by SKUs / Category',
      'Recommend and generate POs based on sales plan and time-to-deliver',
      'Send requirements to different selected vendors and compare responses',
      'Track POs and follow escalations if delayed',
      'Monitor existing POs and potentially delay if facing over-stock',
      'Create vendor performance reports',
      'Recommend inventory assortment across different stores and warehouses',
      'Enable buying/purchase team to create specific workflows to automate tasks',
    ],
    features: [
      'SKU-level inventory tracking',
      'Automated PO generation',
      'Vendor comparison & selection',
      'PO tracking & escalation',
      'Inventory assortment optimization',
    ],
    benefits: [
      'Reduced stockouts',
      'Optimized inventory levels',
      'Better vendor management',
      'Automated purchasing workflows',
    ],
    useCases: [
      'Retail inventory management',
      'Warehouse optimization',
      'Vendor relationship management',
      'Purchase order automation',
    ],
  },
  {
    id: 'custex',
    name: 'Custex',
    tagline: 'Customer Experience Agent',
    description: 'Managing customer communications and building engagement workflows',
    outcome: 'Personalized customer engagement',
    icon: MessageSquare,
    heroDescription: 'The AI agent focuses on managing customer experience and building workflows around customer engagement use cases.',
    keyBenefits: [
      'Create personalized messaging for customers about their order/delivery status',
      'Respond to customer queries by helping draft responses with accurate data and full context',
      'Next Product Recommendation based on product information, sales trends and customer data',
      'Create messaging for customer engagement or share with sales reps for upsell opportunities',
    ],
    features: [
      'Personalized customer messaging',
      'AI-assisted response drafting',
      'Product recommendations',
      'Customer context management',
    ],
    benefits: [
      'Improved customer satisfaction',
      'Faster response times',
      'Increased upsell opportunities',
      'Consistent brand communication',
    ],
    useCases: [
      'Order status communications',
      'Customer query handling',
      'Personalized recommendations',
      'Customer engagement campaigns',
    ],
  },
  {
    id: 'profast',
    name: 'ProFast',
    tagline: 'Project Management Agent',
    description: 'Helps companies manage their large-scale projects and executions',
    outcome: 'Accountable project delivery',
    icon: ClipboardList,
    heroDescription: 'The AI agent focuses on helping companies manage their large-scale projects and executions.',
    keyBenefits: [
      'Track the key metrics for each project to drive accountability',
      'Track current budget & timelines, and continuously predict new estimated budget & timelines based on progress',
      'Get insights from the agent to focus on critical activities and escalation',
      'Let AI do the regular escalations and contractor engagement to push progress when there are delays',
    ],
    features: [
      'Project metrics tracking',
      'Budget & timeline prediction',
      'AI-powered escalations',
      'Contractor engagement automation',
    ],
    benefits: [
      'Better project visibility',
      'Proactive delay management',
      'Improved accountability',
      'Automated stakeholder communication',
    ],
    useCases: [
      'Large-scale project management',
      'Construction project tracking',
      'Budget forecasting',
      'Contractor management',
    ],
  },
  {
    id: 'proman',
    name: 'ProMan',
    tagline: 'Production & Labour Management',
    description: 'Enables AI-led production and labour management',
    outcome: 'Optimized production operations',
    icon: Factory,
    heroDescription: 'This product focuses on enabling AI-led production and labour management. Used in construction and heavy industries to drive more productivity and efficiency throughout their operations.',
    keyBenefits: [
      'Create daily or weekly production plans based on defined constraints and new inputs',
      'Provide rationale and reasoning to the plan, and allow leaders to iterate through prompts',
      'Finalize and communicate the plan to the broader organization',
      'Track performance to the plan, and suggest changes or opportunities to improve efficiency',
    ],
    features: [
      'AI-powered production planning',
      'Constraint-based scheduling',
      'Plan iteration through prompts',
      'Performance tracking & optimization',
    ],
    benefits: [
      'Increased production efficiency',
      'Better resource utilization',
      'Data-driven planning decisions',
      'Continuous improvement insights',
    ],
    useCases: [
      'Construction planning',
      'Manufacturing scheduling',
      'Labour allocation',
      'Operations optimization',
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};
