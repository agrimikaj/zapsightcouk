import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  client: string;
  description: string;
  results: { value: string; label: string }[];
  featured?: boolean;
}

// Case studies data (mirrored from frontend)
const caseStudies: CaseStudy[] = [
  {
    id: 'customer-analytics',
    title: 'AI-Powered Customer Analytics',
    industry: 'Retail',
    client: 'Major Retail Chain',
    description: 'Implementing advanced customer segmentation and predictive analytics to drive personalized experiences and increase conversion rates.',
    results: [
      { value: '35%', label: 'Increase in Conversion' },
      { value: '25%', label: 'Reduction in Churn' },
      { value: '4.2X', label: 'ROI Achieved' },
    ],
    featured: true,
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Platform',
    industry: 'Manufacturing',
    client: 'Global Manufacturing Company',
    description: 'Deploying AI agents for equipment monitoring and predictive maintenance, reducing downtime and optimizing operational efficiency.',
    results: [
      { value: '40%', label: 'Reduction in Downtime' },
      { value: '6.5X', label: 'ROI Achieved' },
      { value: '28%', label: 'Maintenance Cost Savings' },
    ],
    featured: true,
  },
  {
    id: 'furniture-retailer',
    title: 'Data Integration & AI Agents',
    industry: 'Retail',
    client: 'Leading Furniture Retailer',
    description: 'Integrated data from 5 siloed systems into a single AWS-based infrastructure with business context layering for retail operations.',
    results: [
      { value: '$440K', label: 'Annual Savings' },
      { value: '$1M', label: 'Revenue Increase' },
      { value: '5X', label: 'ROI Achieved' },
    ],
    featured: false,
  },
  {
    id: 'pharma-pricing',
    title: 'Pricing Optimization',
    industry: 'Healthcare',
    client: 'Pharmaceutical Company',
    description: 'Optimized pricing levers for an allergy brand to reduce reliance on unsustainable promotions using econometric models and what-if simulators.',
    results: [
      { value: '18%', label: 'Margin Improvement' },
      { value: '3.2X', label: 'ROI Achieved' },
      { value: '45%', label: 'Reduction in Unprofitable Promos' },
    ],
  },
  {
    id: 'tire-mroi',
    title: 'Marketing ROI Optimization',
    industry: 'Manufacturing',
    client: 'Tire Manufacturer',
    description: 'Determined optimal allocation of marketing resources across national and local promotional programs to maximize profitability.',
    results: [
      { value: '22%', label: 'Marketing ROI Improvement' },
      { value: '$2.1M', label: 'Annual Savings' },
      { value: '4X', label: 'ROI Achieved' },
    ],
  },
  {
    id: 'software-churn',
    title: 'Churn Prediction Model',
    industry: 'Technology',
    client: 'Digital Advertising Platform',
    description: 'Built a churn probability model for advertisers to enable proactive retention activities and maximize revenue from text advertising.',
    results: [
      { value: '32%', label: 'Churn Reduction' },
      { value: '$1.8M', label: 'Saved Revenue' },
      { value: '5.5X', label: 'ROI Achieved' },
    ],
  },
  {
    id: 'solar-data',
    title: 'Data Access Agent',
    industry: 'Energy',
    client: 'Solar Energy Provider',
    description: 'Streamlined data across 5 systems (100+ tables, 10K+ columns) by building semantic layer for quick, on-the-go business insights.',
    results: [
      { value: '2X', label: 'ROI (Year 1)' },
      { value: '4X', label: 'ROI (Year 2)' },
      { value: '3 days', label: 'Faster Turnaround' },
    ],
  },
  {
    id: 'agri-quality',
    title: 'Reporting & Quality Agent',
    industry: 'Manufacturing',
    client: 'Agricultural Seeds Company',
    description: 'Optimized SAP-based data setup to automate 100+ reports and deployed quality agent to evaluate seed-lots and automate shipment-lots.',
    results: [
      { value: '50%', label: 'Productivity Improvement' },
      { value: '2-5X', label: 'ROI Achieved' },
      { value: '48 hrs', label: 'Turnaround Reduction' },
    ],
  },
];

const SITE_URL = 'https://zapsightcouk.lovable.app';
const SITE_TITLE = 'ZapSight Case Studies';
const SITE_DESCRIPTION = 'Explore how ZapSight has helped enterprises across industries transform their operations with AI agents. Real results, measurable ROI.';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRssFeed(): string {
  const now = new Date().toUTCString();
  
  const items = caseStudies.map((study) => {
    const resultsText = study.results
      .map((r) => `${r.value} ${r.label}`)
      .join(', ');
    
    const description = `${escapeXml(study.description)} Key Results: ${escapeXml(resultsText)}`;
    
    return `
    <item>
      <title>${escapeXml(study.title)}</title>
      <link>${SITE_URL}/case-studies/${study.id}</link>
      <guid isPermaLink="true">${SITE_URL}/case-studies/${study.id}</guid>
      <description>${description}</description>
      <category>${escapeXml(study.industry)}</category>
      <pubDate>${now}</pubDate>
    </item>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/case-studies</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-gb</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss/case-studies" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;
}

serve(async (req) => {
  console.log('RSS feed request received:', req.method);

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const rssFeed = generateRssFeed();
    
    console.log('RSS feed generated successfully');
    
    return new Response(rssFeed, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate RSS feed' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
