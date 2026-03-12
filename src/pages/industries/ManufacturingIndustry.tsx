import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { Button } from '@/components/ui/button';
import {
  Factory, Cog, Settings, Wrench, Package, Truck, BarChart3,
  AlertTriangle, ClipboardCheck, ArrowRight, TrendingUp, Zap,
  Calendar, Eye, Activity, FileText, Target, Layers, Shield,
  Cpu, MonitorCheck, Gauge, BrainCircuit, Workflow
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  }),
};

const useCases = [
  {
    id: 'production-planning',
    title: 'Production Planning & Scheduling',
    icon: Calendar,
    problem: 'Plant was missing customer expected dates for 20% of orders due to first-come-first-serve scheduling with no visibility into materials, maintenance, or leave.',
    solutions: [
      'Integrated customer ordering system for live order tracking with expected dates',
      'Incorporated inventory data, planned maintenance, and holiday info into scheduling',
      'Daily planning runs highlighting orders at risk of missing deadlines',
      'Automated raw material ordering based on expected production and lead times',
    ],
    impact: { value: '50%', label: 'Fewer Missed Deadlines' },
    secondaryImpact: 'Proactive customer communication improved overall NPS',
  },
  {
    id: 'energy-monitoring',
    title: 'Energy & Asset Monitoring',
    icon: Zap,
    problem: 'Leadership had no visibility into asset productivity, energy consumption by orders/machines, or variance in plant productivity — with energy costs rising 30% year-over-year.',
    solutions: [
      'Installed energy monitors for all key machines',
      'Integrated with production planning to track orders in real time',
      'Mapped machine usage, order output, and energy consumption',
      'Delivered detailed asset and operator productivity dashboards with order margin visibility',
    ],
    impact: { value: '10%', label: 'Energy Cost Reduction' },
    secondaryImpact: 'Improved order pricing accuracy by 5%',
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance',
    icon: Activity,
    problem: 'Unscheduled maintenance increased 25% year-over-year — machines stopped abruptly, repairs failed to address root causes, and customer orders were impacted.',
    solutions: [
      'Integrated with machine PLC/SCADA systems',
      'Recorded key metrics (vibration, temperature) before and after failures',
      'Tracked operator and process data preceding each breakdown',
      'Built AI prediction models with root cause analysis at failure events',
    ],
    impact: { value: '20–30%', label: 'Fewer Unexpected Failures' },
    secondaryImpact: 'Lower maintenance costs and improved plant throughput',
  },
  {
    id: 'bid-management',
    title: 'Bid & Tender Management',
    icon: FileText,
    problem: 'A contractor\'s loss rate increased 20% while project cost overruns grew 15% — they needed to win the right work at the right prices.',
    solutions: [
      'Ingested all historical bids with win/loss information',
      'Built external benchmark database from public bid data',
      'Created expected vs. actual cost analysis across all projects',
      'Deployed a bid-assist engine highlighting areas of under/over pricing',
    ],
    impact: { value: '15%', label: 'Fewer Cost Overruns' },
    secondaryImpact: 'Improved bid win rate through data-driven pricing',
  },
];

const keyModules = [
  {
    title: 'Project Management',
    icon: Target,
    capabilities: ['Schedule optimization', 'Progress monitoring', 'Forecast vs. actual analysis', 'Cost variance tracking'],
  },
  {
    title: 'Bid & Tender Management',
    icon: FileText,
    capabilities: ['Tender evaluation automation', 'Vendor benchmarking', 'BOQ intelligence', 'Cost leakage prevention'],
  },
  {
    title: 'Asset Performance',
    icon: Gauge,
    capabilities: ['Asset monitoring', 'Predictive maintenance', 'Performance optimization', 'Downtime reduction'],
  },
];

const aiApplications = [
  { icon: ClipboardCheck, name: 'Quality Control', desc: 'Computer vision defect detection and root cause analysis' },
  { icon: Cog, name: 'Planning & Scheduling', desc: 'AI-optimized production sequencing and resource allocation' },
  { icon: Package, name: 'Inventory Management', desc: 'Demand-driven stock levels and automated reordering' },
  { icon: Zap, name: 'Energy Optimization', desc: 'Machine-level consumption analysis and shift optimization' },
  { icon: BrainCircuit, name: 'Digital Twins & Simulation', desc: 'Simulate millions of cycles to optimize factory layouts' },
  { icon: MonitorCheck, name: 'Regulatory Compliance', desc: 'Automated documentation and reporting for compliance' },
];

const deploymentSteps = [
  { step: '01', title: 'Identify', desc: 'Pinpoint a high-impact operational problem with leadership' },
  { step: '02', title: 'Integrate', desc: 'Connect relevant enterprise data sources and systems' },
  { step: '03', title: 'Build', desc: 'Deploy a custom AI agent tailored to the workflow' },
  { step: '04', title: 'Deliver', desc: 'Measurable outcomes within 4–6 weeks' },
];

const ManufacturingIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI for Manufacturing & EPC - Smart Factory Intelligence | ZapSight</title>
        <meta name="description" content="AI agents for manufacturing and EPC workflows. Production planning, predictive maintenance, energy monitoring, and bid management — delivering measurable ROI in 4-6 weeks." />
        <link rel="canonical" href="https://zapsight.co.uk/industries/manufacturing" />
        <meta property="og:title" content="AI for Manufacturing & EPC | ZapSight" />
        <meta property="og:description" content="AI agents solving operational problems in manufacturing, EPC, and O&M workflows with measurable outcomes." />
        <meta property="og:url" content="https://zapsight.co.uk/industries/manufacturing" />
        <meta property="og:image" content="https://zapsight.co.uk/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zapsight.co.uk/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
          <NeuralBackground />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/5 backdrop-blur-sm border border-background/10 mb-8"
              >
                <Factory className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-background/70">Manufacturing & EPC</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 tracking-tight"
              >
                AI Agents for <span className="text-primary">Manufacturing & EPC</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-background/60 leading-relaxed max-w-3xl mx-auto mb-12"
              >
                We combine industry expertise, AI engineering, and a proprietary platform to solve operational problems in manufacturing, EPC, and O&M workflows — with measurable ROI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center justify-center gap-8 lg:gap-16"
              >
                {[
                  { value: '50%', label: 'Fewer Missed Deadlines' },
                  { value: '30%', label: 'Lower Energy Costs' },
                  { value: '4–6', label: 'Weeks to Deliver' },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-8">
                    <div className="text-center">
                      <p className="font-display text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-background/50 mt-1">{stat.label}</p>
                    </div>
                    {i < 2 && <div className="hidden sm:block w-px h-16 bg-background/10" />}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-10 lg:py-14 bg-gradient-to-b from-[hsl(220,20%,8%)] to-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Proven Case Studies</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
                  Real Problems, <span className="text-primary">Real Results</span>
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  From production floors to contractor bidding — AI agents embedded into core workflows.
                </p>
              </div>

              <div className="space-y-6">
                {useCases.map((uc, index) => {
                  const IconComponent = uc.icon;
                  return (
                    <motion.div
                      key={uc.id}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-60px' }}
                      variants={fadeUp}
                      className="group relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,14%)] rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-primary rounded-full">
                        <span className="text-xs font-bold text-primary-foreground uppercase tracking-wider">{uc.id.replace('-', ' ')}</span>
                      </div>

                      <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6 pt-4">
                        {/* Left — problem & impact */}
                        <div className="space-y-5">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center bg-primary/10 border border-primary/15 mt-0.5">
                              <IconComponent className="h-5 w-5 text-primary" strokeWidth={1.5} />
                            </div>
                            <div>
                              <h3 className="font-display text-xl font-bold text-background tracking-tight mb-2">{uc.title}</h3>
                              <p className="text-background/50 text-sm leading-relaxed">{uc.problem}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4">
                            <div className="bg-primary/10 border border-primary/15 rounded-xl px-5 py-3">
                              <p className="font-display text-2xl font-bold text-primary">{uc.impact.value}</p>
                              <p className="text-xs text-background/50 uppercase tracking-wider">{uc.impact.label}</p>
                            </div>
                            <p className="text-sm text-primary/70 italic">{uc.secondaryImpact}</p>
                          </div>
                        </div>

                        {/* Right — solutions */}
                        <div className="bg-[hsl(220,20%,10%)] rounded-xl p-5 border border-[hsl(220,16%,14%)]">
                          <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-3">What We Built</p>
                          <ul className="space-y-3">
                            {uc.solutions.map((sol, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-background/60 leading-relaxed">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-[10px] font-bold text-primary">{i + 1}</span>
                                </div>
                                {sol}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Modules */}
        <section className="py-10 lg:py-14 bg-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Platform Capabilities</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
                  Key Modules & <span className="text-primary">Outcomes</span>
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  Three core modules addressing the full manufacturing and EPC lifecycle.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {keyModules.map((mod, index) => {
                  const IconComponent = mod.icon;
                  return (
                    <motion.div
                      key={mod.title}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,14%)] rounded-2xl p-6 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 border border-primary/15 mb-5 group-hover:scale-105 transition-transform">
                        <IconComponent className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-lg font-bold text-background mb-4">{mod.title}</h3>
                      <ul className="space-y-2.5">
                        {mod.capabilities.map((cap) => (
                          <li key={cap} className="flex items-center gap-2.5 text-sm text-background/55">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>

              {/* Outcomes strip */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {[
                  'Faster tender evaluation',
                  'Improved asset utilization',
                  'Early fault detection',
                  'Reduced cost leakages',
                ].map((outcome) => (
                  <div key={outcome} className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-center">
                    <p className="text-sm text-primary/80 font-medium">{outcome}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI Applications Grid */}
        <section className="py-10 lg:py-14 bg-gradient-to-b from-[hsl(220,20%,7%)] to-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">AI Applications</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
                  Across <span className="text-primary">Operations, Sales & Product</span>
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {aiApplications.map((app, index) => {
                  const IconComponent = app.icon;
                  return (
                    <motion.div
                      key={app.name}
                      custom={index}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-xl p-5 hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-4.5 w-4.5 text-primary" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-semibold text-background text-sm">{app.name}</h4>
                      </div>
                      <p className="text-xs text-background/50 leading-relaxed">{app.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Deployment Approach */}
        <section className="py-10 lg:py-14 bg-[hsl(220,20%,6%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">How We Work</p>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
                  From Problem to <span className="text-primary">Production in Weeks</span>
                </h2>
                <p className="text-background/60 max-w-2xl mx-auto">
                  We collaborate with leadership teams to identify top operational challenges, assess data availability, and deploy focused pilots that scale.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {deploymentSteps.map((s, index) => (
                  <motion.div
                    key={s.step}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="relative bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,14%)] rounded-2xl p-6 text-center"
                  >
                    <div className="font-display text-3xl font-bold text-primary/20 mb-3">{s.step}</div>
                    <h3 className="font-display text-lg font-bold text-background mb-2">{s.title}</h3>
                    <p className="text-sm text-background/50 leading-relaxed">{s.desc}</p>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 z-10">
                        <ArrowRight className="h-5 w-5 text-primary/30" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="py-10 lg:py-14 bg-[hsl(220,20%,7%)]">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-4">
                  Proven <span className="text-primary">Results</span>
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {[
                  { value: '20–30%', label: 'Fewer Unexpected Failures' },
                  { value: '15–30%', label: 'Inventory Cost Reduction' },
                  { value: '10–20%', label: 'Energy Cost Savings' },
                  { value: '4–6 Wks', label: 'Time to Measurable ROI' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,14%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-all duration-300"
                  >
                    <p className="font-display text-2xl lg:text-3xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-xs text-background/50">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 lg:py-14 bg-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-50" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.03) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-6">
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-background/60 mb-8">
                Let's identify a high-impact problem and deliver measurable outcomes in weeks, not months.
              </p>
              <Button variant="hero" size="xl" className="group shadow-glow" asChild>
                <Link to="/contact">
                  Schedule a Consultation
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ManufacturingIndustry;
