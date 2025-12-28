export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client: string;
  duration: string;
  description: string;
  challenge: string;
  solution: string[];
  results: { value: string; label: string }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'vca',
    title: 'AI-Powered Customer Analytics',
    industry: 'Retail',
    client: 'Major Retail Chain',
    duration: '6 months',
    description: 'Implementing advanced customer segmentation and predictive analytics to drive personalized experiences and increase conversion rates.',
    challenge: 'The client struggled with fragmented customer data across multiple touchpoints, making it impossible to understand customer behavior holistically. Marketing campaigns were generic, leading to low engagement and missed revenue opportunities.',
    solution: [
      'Built a unified customer data platform integrating POS, e-commerce, loyalty, and CRM data',
      'Developed AI-powered customer segmentation models identifying 12 distinct customer personas',
      'Implemented real-time recommendation engine for personalized product suggestions',
      'Created predictive churn models to identify at-risk customers before they leave',
      'Deployed automated campaign triggers based on customer behavior patterns',
    ],
    results: [
      { value: '35%', label: 'Increase in Conversion' },
      { value: '25%', label: 'Reduction in Churn' },
      { value: '4.2X', label: 'ROI Achieved' },
      { value: '60%', label: 'Faster Campaign Deployment' },
    ],
    technologies: ['Python', 'TensorFlow', 'AWS', 'Snowflake', 'dbt'],
    testimonial: {
      quote: 'ZapSight transformed how we understand our customers. The insights we now have are actionable and directly tied to revenue.',
      author: 'VP of Marketing',
      role: 'Major Retail Chain',
    },
    featured: true,
  },
  {
    id: 'bosch',
    title: 'Predictive Maintenance Platform',
    industry: 'Manufacturing',
    client: 'Global Manufacturing Company',
    duration: '8 months',
    description: 'Deploying AI agents for equipment monitoring and predictive maintenance, reducing downtime and optimizing operational efficiency.',
    challenge: 'Unplanned equipment failures were causing significant production losses and safety concerns. Maintenance was reactive rather than proactive, leading to costly emergency repairs and extended downtime periods.',
    solution: [
      'Integrated IoT sensor data from 500+ pieces of equipment into a centralized platform',
      'Built machine learning models to predict equipment failures 2-3 weeks in advance',
      'Developed automated maintenance scheduling system based on predicted failure windows',
      'Created real-time dashboards for operations teams with alert prioritization',
      'Implemented digital twin technology for simulation and root cause analysis',
    ],
    results: [
      { value: '40%', label: 'Reduction in Downtime' },
      { value: '6.5X', label: 'ROI Achieved' },
      { value: '28%', label: 'Maintenance Cost Savings' },
      { value: '95%', label: 'Prediction Accuracy' },
    ],
    technologies: ['Python', 'Azure IoT', 'Time Series DB', 'Power BI', 'Kubernetes'],
    testimonial: {
      quote: 'The predictive maintenance system has fundamentally changed our operations. We went from firefighting to strategic planning.',
      author: 'Director of Operations',
      role: 'Global Manufacturing Company',
    },
    featured: true,
  },
  {
    id: 'furniture-retailer',
    title: 'Data Integration & AI Agents',
    industry: 'Retail',
    client: 'Leading Furniture Retailer',
    duration: '12 months',
    description: 'Integrated data from 5 siloed systems into a single AWS-based infrastructure with business context layering for retail operations.',
    challenge: 'Data was scattered across CRM, POS, Logistics, Finance, and Inventory systems with no unified view. Decision-making was slow, reports were inconsistent, and opportunities were being missed due to lack of visibility.',
    solution: [
      'Designed and implemented enterprise data warehouse on AWS with real-time ingestion',
      'Created semantic layer translating technical data into business-friendly metrics',
      'Built self-service analytics platform enabling business users to create their own reports',
      'Deployed AI agents for automated anomaly detection and alerting',
      'Implemented data governance framework ensuring data quality and compliance',
    ],
    results: [
      { value: '$440K', label: 'Annual Savings' },
      { value: '$1M', label: 'Revenue Increase' },
      { value: '5X', label: 'ROI Achieved' },
      { value: '80%', label: 'Faster Reporting' },
    ],
    technologies: ['AWS', 'Snowflake', 'dbt', 'Looker', 'Airflow'],
    testimonial: {
      quote: 'For the first time, we have a single source of truth. The self-service capabilities have empowered our entire organization.',
      author: 'Chief Data Officer',
      role: 'Leading Furniture Retailer',
    },
    featured: true,
  },
  {
    id: 'pharma-pricing',
    title: 'Pricing Optimization',
    industry: 'Healthcare',
    client: 'Pharmaceutical Company',
    duration: '4 months',
    description: 'Optimized pricing levers for an allergy brand to reduce reliance on unsustainable promotions using econometric models and what-if simulators.',
    challenge: 'The brand was heavily dependent on promotions that eroded margins. There was no scientific approach to pricing, and competitors were gaining market share through more strategic pricing decisions.',
    solution: [
      'Built comprehensive price elasticity models using 3 years of historical data',
      'Developed competitive pricing intelligence dashboard',
      'Created what-if simulator for testing pricing scenarios before implementation',
      'Implemented promotional ROI calculator for marketing teams',
      'Designed pricing governance framework with guardrails and approval workflows',
    ],
    results: [
      { value: '18%', label: 'Margin Improvement' },
      { value: '3.2X', label: 'ROI Achieved' },
      { value: '45%', label: 'Reduction in Unprofitable Promos' },
      { value: '2 weeks', label: 'Faster Price Decisions' },
    ],
    technologies: ['R', 'Python', 'Tableau', 'SQL Server', 'Excel Integration'],
  },
  {
    id: 'tire-mroi',
    title: 'Marketing ROI Optimization',
    industry: 'Manufacturing',
    client: 'Tire Manufacturer',
    duration: '5 months',
    description: 'Determined optimal allocation of marketing resources across national and local promotional programs to maximize profitability.',
    challenge: 'Marketing spend was allocated based on historical patterns rather than performance. There was no visibility into which programs drove actual sales, and local dealers were frustrated with ineffective campaigns.',
    solution: [
      'Built marketing mix models connecting spend to sales across all channels',
      'Developed attribution framework for measuring local dealer program effectiveness',
      'Created budget optimization tool for reallocating spend to highest-performing programs',
      'Implemented real-time campaign performance dashboards',
      'Designed A/B testing framework for validating new promotional strategies',
    ],
    results: [
      { value: '22%', label: 'Marketing ROI Improvement' },
      { value: '$2.1M', label: 'Annual Savings' },
      { value: '4X', label: 'ROI Achieved' },
      { value: '35%', label: 'Better Dealer Satisfaction' },
    ],
    technologies: ['Python', 'Google Analytics', 'Salesforce', 'Power BI', 'Azure'],
  },
  {
    id: 'software-churn',
    title: 'Churn Prediction Model',
    industry: 'Technology',
    client: 'Digital Advertising Platform',
    duration: '3 months',
    description: 'Built a churn probability model for advertisers to enable proactive retention activities and maximize revenue from text advertising.',
    challenge: 'Advertiser churn was high and unpredictable. The sales team was reactive, reaching out only after advertisers had already decided to leave. Valuable accounts were being lost without any intervention attempt.',
    solution: [
      'Developed churn prediction model using behavioral and transactional data',
      'Created monthly high-risk advertiser list with probability scores',
      'Built intervention playbook with recommended actions based on churn drivers',
      'Implemented automated early warning system for account managers',
      'Designed retention campaign automation based on risk segments',
    ],
    results: [
      { value: '32%', label: 'Churn Reduction' },
      { value: '$1.8M', label: 'Saved Revenue' },
      { value: '5.5X', label: 'ROI Achieved' },
      { value: '85%', label: 'Prediction Accuracy' },
    ],
    technologies: ['Python', 'Scikit-learn', 'PostgreSQL', 'Metabase', 'Salesforce'],
  },
  {
    id: 'solar-data',
    title: 'Data Access Agent',
    industry: 'Energy',
    client: 'Solar Energy Provider',
    duration: '6 months',
    description: 'Streamlined data across 5 systems (100+ tables, 10K+ columns) by building semantic layer for quick, on-the-go business insights.',
    challenge: 'Business users could not access the data they needed without IT support. Simple questions took days to answer, and the data team was overwhelmed with ad-hoc requests that prevented strategic work.',
    solution: [
      'Built unified semantic layer abstracting complexity of underlying data systems',
      'Developed natural language query interface for business users',
      'Created pre-built analytics templates for common business questions',
      'Implemented data catalog with business definitions and lineage',
      'Deployed AI agent for automated insight generation and anomaly detection',
    ],
    results: [
      { value: '2X', label: 'ROI (Year 1)' },
      { value: '4X', label: 'ROI (Year 2)' },
      { value: '3 days', label: 'Faster Turnaround' },
      { value: '70%', label: 'Reduction in Ad-hoc Requests' },
    ],
    technologies: ['dbt', 'Looker', 'BigQuery', 'Python', 'LangChain'],
  },
  {
    id: 'agri-quality',
    title: 'Reporting & Quality Agent',
    industry: 'Manufacturing',
    client: 'Agricultural Seeds Company',
    duration: '7 months',
    description: 'Optimized SAP-based data setup to automate 100+ reports and deployed quality agent to evaluate seed-lots and automate shipment-lots.',
    challenge: 'Quality control was manual and inconsistent. Analysts spent 80% of their time creating reports rather than analyzing data. Seed-lot evaluation was slow, causing delays in shipments and customer complaints.',
    solution: [
      'Re-architected SAP data extraction for real-time reporting capabilities',
      'Automated 100+ recurring reports with scheduled delivery',
      'Built AI quality agent for automated seed-lot evaluation',
      'Created shipment optimization algorithm based on quality scores',
      'Implemented exception-based alerting for quality issues',
    ],
    results: [
      { value: '50%', label: 'Productivity Improvement' },
      { value: '2-5X', label: 'ROI Achieved' },
      { value: '48 hrs', label: 'Turnaround Reduction' },
      { value: '99.2%', label: 'Quality Accuracy' },
    ],
    technologies: ['SAP', 'Python', 'Azure', 'Power BI', 'Computer Vision'],
  },
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find((cs) => cs.id === id);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter((cs) => cs.featured);
};
