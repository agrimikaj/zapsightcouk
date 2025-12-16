import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Zap, TrendingUp, Wrench, Target, Users, BarChart3, FileText, Settings, Bell, Calendar, DollarSign, Activity, MessageSquare, ClipboardCheck } from 'lucide-react';

const EnergyIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Energy Sector | ZapSight</title>
        <meta name="description" content="Specialized AI agents for the energy sector covering project origination to operations and maintenance." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-foreground via-foreground/95 to-background" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBtLTEgMGExIDEgMCAxIDAgMiAwYTEgMSAwIDEgMCAtMiAwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Industry Solutions</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 tracking-tight">
                AI in Energy Sector
              </h1>
              <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-3xl mx-auto">
                We design and deploy specialized AI agents built exclusively for the energy sector, covering the full lifecycle of energy assets — from project origination to operations and maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Context Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                In today's energy landscape — where global renewable capacity is projected to grow by over 60% between 2023 and 2030 (IEA, World Energy Outlook 2024) — efficiency, speed, and intelligence are not optional; they're survival imperatives.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Every energy company, regardless of its size or focus area, typically operates across three critical phases:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Target, title: 'Selling Projects', phase: '1' },
                  { icon: Settings, title: 'Building Projects', phase: '2' },
                  { icon: Wrench, title: 'Operating & Maintaining', phase: '3' },
                ].map((item) => (
                  <div key={item.phase} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-elevated transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-xs text-primary font-medium mb-2">Phase {item.phase}</p>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                  </div>
                ))}
              </div>
              
              <p className="text-foreground/70 leading-relaxed mt-8">
                These projects can range from distributed solar installations worth &lt;$5 million to utility-scale or infrastructure projects exceeding $1 billion. While scale differs, the operational challenges are consistent — data fragmentation, manual processes, and limited real-time visibility.
              </p>
              <p className="text-foreground/80 font-medium mt-4">
                Our AI agents are purpose-built to address these challenges across each phase.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 1: Selling Projects */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-glow">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">Phase 1</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Selling Projects</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed mb-4">
                The pre-construction phase is increasingly data-driven — from lead generation and qualification to proposal creation and client engagement.
              </p>
              <p className="text-foreground/80 mb-10 bg-muted/50 p-4 rounded-xl border-l-4 border-primary">
                A McKinsey study (2023) found that sales teams using AI-driven targeting improve conversion rates by 15–25% and shorten deal cycles by up to 30%.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-6">Key Agents Deployed</h3>
              
              <div className="space-y-6">
                <AgentCard
                  number={1}
                  title="Lead Identification Agent"
                  description="Uses geospatial data (e.g., satellite imagery, GIS, cadastral datasets) and public infrastructure records to identify high-potential rooftops or land parcels suitable for solar or distributed energy projects."
                  example="For instance, the agent can automatically shortlist industrial facilities with >10,000 sq. m. of roof space within a defined catchment area and cross-reference them with utility tariffs, grid access proximity, and energy consumption data."
                  icon={Users}
                />
                
                <AgentCard
                  number={2}
                  title="Lead Prioritization Agent"
                  description="Integrates data from CRM, public filings, and credit databases to score leads based on energy consumption, regulatory alignment, and probability of conversion."
                  example="The model dynamically updates prioritization scores based on client engagement signals, similar to how utilities like NextEra Energy and ENGIE are now applying predictive analytics for B2B sales optimization."
                  icon={BarChart3}
                />
                
                <AgentCard
                  number={3}
                  title="Sales Operations Agent"
                  description="Acts as a data access layer to pull insights, client references, and case studies from internal repositories or cloud systems (e.g., SharePoint, Salesforce, HubSpot)."
                  bullets={[
                    'Includes a "news tracking" sub-agent that continuously scans industry sources (e.g., PV-Tech, Energy Storage News, Recharge) for events related to key prospects',
                    'Enables timely outreach and contextual client engagement through mergers, expansions, or sustainability announcements'
                  ]}
                  icon={FileText}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2: Building Projects */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-glow">
                  <Settings className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">Phase 2</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Building Projects</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed mb-4">
                Construction is the most capital-intensive phase — often representing 70–80% of total project costs (according to IEA Project Data Review 2023).
              </p>
              <p className="text-foreground/80 mb-10 bg-background/50 p-4 rounded-xl border-l-4 border-primary">
                Project delays or overruns can erode 2–4% of EBITDA per month of delay in large infrastructure programs. Our agents enhance predictability, compliance, and execution efficiency during project delivery.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-6">Key Agents Deployed</h3>
              
              <div className="space-y-6">
                <AgentCard
                  number={1}
                  title="Project Management Agent"
                  description="Integrates with ERP systems (SAP, Oracle Primavera, MS Project) and construction progress trackers to monitor Work Breakdown Structures (WBS)."
                  bullets={[
                    'Schedule adherence monitoring',
                    'Budget variance detection',
                    'Resource utilization tracking',
                    'Critical path delay identification',
                    'Daily progress analyses with AI-generated status summaries'
                  ]}
                  icon={ClipboardCheck}
                />
                
                <AgentCard
                  number={2}
                  title="Contractor Management Agent"
                  description="Continuously tracks contractor-level performance metrics such as Schedule Performance Index (SPI) and Cost Performance Index (CPI) derived from project control data."
                  bullets={[
                    'Auto-generates alerts for missed milestones',
                    'Monitors non-compliance with contractual SLAs',
                    'Tracks deviations from safety or quality benchmarks',
                    'Maintains interaction logs and correspondence summaries',
                    'Ensures traceable accountability in line with FIDIC or EPC contractual frameworks'
                  ]}
                  icon={Users}
                />
                
                <AgentCard
                  number={3}
                  title="Project Financials Agent"
                  description="Combines project cost data, cashflow forecasts, and payment milestones to deliver real-time cost-to-complete forecasting."
                  example="Auto-updates Earned Value Management (EVM) dashboards and predicts likely budget variances or invoice delays. Several midstream EPCs have reported up to 20% faster project financial reconciliations and 30% reduction in manual spreadsheet dependencies after adopting this agent."
                  icon={DollarSign}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Phase 3: Operations & Maintenance */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 shadow-glow">
                  <Wrench className="h-7 w-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider">Phase 3</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Operations & Maintenance (O&M)</h2>
                </div>
              </div>
              
              <p className="text-foreground/70 leading-relaxed mb-4">
                Post-commissioning, O&M accounts for 20–30% of the total lifecycle cost of energy assets, according to BloombergNEF 2024.
              </p>
              <p className="text-foreground/80 mb-10 bg-muted/50 p-4 rounded-xl border-l-4 border-primary">
                AI-driven monitoring and predictive maintenance can reduce unplanned downtime by 40% and extend asset life by 15%.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-6">Key Agents Deployed</h3>
              
              <div className="space-y-6">
                <AgentCard
                  number={1}
                  title="Plant Monitoring Agent"
                  description="Aggregates data from SCADA systems, IoT sensors, and performance dashboards to monitor generation efficiency (PR), downtime trends, and weather-adjusted yield forecasts."
                  example="The agent benchmarks against expected baselines, flags anomalies (e.g., inverter degradation, soiling losses), and communicates alerts to O&M teams and asset managers in real-time."
                  icon={Activity}
                />
                
                <AgentCard
                  number={2}
                  title="Customer Engagement Agent"
                  description="Automatically generates customized performance reports (monthly, quarterly) and pushes them to investors, utilities, or corporate clients."
                  bullets={[
                    'Actual vs. forecasted generation insights',
                    'CO₂ savings and ESG metrics reporting',
                    'Upcoming maintenance schedule notifications',
                    'Shown to increase customer satisfaction and retention by 20–30%'
                  ]}
                  icon={MessageSquare}
                />
                
                <AgentCard
                  number={3}
                  title="Plant Servicing Agent"
                  description="Acts as an autonomous service coordinator that integrates with CMMS systems (like Maximo or Fiix)."
                  bullets={[
                    'Automatically logs service tickets',
                    'Tracks service SLAs and technician responses',
                    'Conducts post-maintenance validation using sensor data',
                    'Up to 35% reduction in mean time to repair (MTTR)'
                  ]}
                  icon={Calendar}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-20 bg-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-6">
                Transforming Energy Operations
              </h2>
              <p className="text-background/70 leading-relaxed mb-6">
                Our ecosystem of AI agents enables energy companies to operationalize intelligence across the value chain — from sales origination to asset management. These solutions help firms move towards data maturity, improve decision-making velocity, and unlock 2–5% margin improvements across large portfolios.
              </p>
              <p className="text-background/80 leading-relaxed">
                By integrating with existing enterprise systems and combining domain expertise, AI, and automation, our agents are helping renewable developers, EPCs, utilities, and IPPs transition into truly AI-ready energy organizations.
              </p>
            </div>
          </div>
        </section>

        {/* References */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-semibold text-foreground mb-6">References</h3>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• International Energy Agency (IEA) – World Energy Outlook 2024</li>
                <li>• McKinsey & Company – Reinventing Construction: A Route to Higher Productivity (2023)</li>
                <li>• Bloomberg New Energy Finance (BNEF) – Global O&M Benchmarking Report 2024</li>
                <li>• Wood Mackenzie – AI and Automation in the Energy Sector (2023)</li>
                <li>• PwC – AI in Energy 2024: From Pilot to Production</li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

interface AgentCardProps {
  number: number;
  title: string;
  description: string;
  example?: string;
  bullets?: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const AgentCard = ({ number, title, description, example, bullets, icon: Icon }: AgentCardProps) => (
  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-elevated transition-all duration-300">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary font-bold">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="h-5 w-5 text-primary" />
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-foreground/70 leading-relaxed mb-3">{description}</p>
        {example && (
          <p className="text-foreground/60 text-sm italic leading-relaxed">{example}</p>
        )}
        {bullets && (
          <ul className="mt-3 space-y-2">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                <span className="text-primary mt-1">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default EnergyIndustry;
