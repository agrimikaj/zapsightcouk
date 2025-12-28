import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BarChart3, 
  Globe, 
  MessageSquare, 
  Settings, 
  Sparkles,
  Target,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  FileText,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AIVIDemo = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for charts
  const visibilityTrendData = [
    { date: 'Jan 1', score: 45 },
    { date: 'Jan 8', score: 52 },
    { date: 'Jan 15', score: 58 },
    { date: 'Jan 22', score: 64 },
    { date: 'Jan 29', score: 72 },
    { date: 'Feb 5', score: 68 },
    { date: 'Feb 12', score: 75 },
  ];

  const sourceAttributionData = [
    { name: 'Product Pages', value: 142 },
    { name: 'Category Pages', value: 98 },
    { name: 'Blog Articles', value: 67 },
    { name: 'Third-Party', value: 45 },
    { name: 'Forums', value: 28 },
  ];

  const sentimentData = [
    { topic: 'Sustainability', positive: 78, neutral: 14, negative: 8 },
    { topic: 'Quality', positive: 85, neutral: 10, negative: 5 },
    { topic: 'Pricing', positive: 62, neutral: 18, negative: 20 },
    { topic: 'Support', positive: 71, neutral: 15, negative: 14 },
  ];

  const contentGaps = [
    {
      title: 'Product sustainability data',
      description: 'AI systems lack structured data about your sustainability practices',
      severity: 'high',
    },
    {
      title: 'Care & repair instructions',
      description: 'Missing schema markup for product care and warranty information',
      severity: 'high',
    },
    {
      title: 'Customer trust signals',
      description: 'Weak presence of reviews and testimonials in AI-readable formats',
      severity: 'medium',
    },
  ];

  const recommendations = [
    {
      impact: 'high',
      title: 'Add Product Schema',
      description: 'Implement structured data for 47 product pages to improve AI source attribution',
    },
    {
      impact: 'high',
      title: 'Enhance Sustainability Page',
      description: 'Add structured sustainability claims with data sources for better AI comprehension',
    },
    {
      impact: 'medium',
      title: 'Optimize FAQ Content',
      description: 'Restructure 12 FAQ pages with FAQ schema to surface in AI responses',
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'sources', label: 'Sources', icon: Globe },
    { id: 'sentiment', label: 'Sentiment', icon: MessageSquare },
    { id: 'aeo', label: 'AEO', icon: Sparkles },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <>
      <Helmet>
        <title>AIVI Demo - AI Visibility Intelligence Dashboard | ZapSight</title>
        <meta name="description" content="Interactive demo of AIVI - Monitor your brand's presence across AI systems, LLMs, and answer engines." />
      </Helmet>

      <div className="min-h-screen bg-[hsl(30,25%,96%)]">
        {/* Header */}
        <header className="bg-[hsl(30,20%,98%)] border-b border-[hsl(30,15%,90%)] sticky top-0 z-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-4">
                <Link 
                  to="/products/aivi" 
                  className="flex items-center gap-2 text-[hsl(220,10%,40%)] hover:text-primary transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="text-sm">Back to Product</span>
                </Link>
                <div className="h-6 w-px bg-[hsl(30,15%,85%)]" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-[hsl(220,20%,20%)]">AIVI</p>
                    <p className="text-xs text-[hsl(220,10%,50%)]">AI Visibility Intelligence</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Tabs */}
              <nav className="hidden md:flex items-center gap-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-[hsl(220,10%,45%)] hover:text-[hsl(220,20%,25%)] hover:bg-[hsl(30,15%,93%)]'
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </nav>

              <Button size="sm" className="bg-primary hover:bg-primary-dark text-white">
                Settings
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 lg:px-8 py-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Live AI Monitoring Active
          </div>

          {/* Page Title */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">
              AI Search Visibility Dashboard
            </h1>
            <p className="text-[hsl(220,10%,45%)] text-lg max-w-3xl">
              Monitor your brand's presence across AI systems, LLMs, and answer engines. Understand how AI interprets and recommends your brand beyond traditional SEO.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[hsl(220,10%,35%)] font-medium text-sm">AI Visibility Score</p>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="font-display text-4xl font-bold text-primary mb-1">75/100</p>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+8% from last week</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[hsl(220,10%,35%)] font-medium text-sm">Total Mentions</p>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="font-display text-4xl font-bold text-primary mb-1">1,247</p>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <TrendingUp className="h-4 w-4" />
                <span>+12% from last week</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[hsl(220,10%,35%)] font-medium text-sm">Content Gaps</p>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <AlertCircle className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="font-display text-4xl font-bold text-primary mb-1">23</p>
              <div className="flex items-center gap-1 text-amber-600 text-sm">
                <TrendingDown className="h-4 w-4" />
                <span>Needs attention</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <p className="text-[hsl(220,10%,35%)] font-medium text-sm">Sentiment Score</p>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
              </div>
              <p className="font-display text-4xl font-bold text-primary mb-1">82%</p>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <span>Positive overall</span>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Visibility Trend */}
            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <h3 className="font-display font-bold text-[hsl(220,20%,20%)] mb-2">AI Visibility Trend</h3>
              <p className="text-[hsl(220,10%,50%)] text-sm mb-6">Your brand's visibility score across AI systems over time</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={visibilityTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(30,15%,90%)" />
                    <XAxis dataKey="date" tick={{ fontSize: 12, fill: 'hsl(220,10%,50%)' }} />
                    <YAxis tick={{ fontSize: 12, fill: 'hsl(220,10%,50%)' }} domain={[0, 80]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid hsl(30,15%,90%)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(220,20%,20%)', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Source Attribution */}
            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <h3 className="font-display font-bold text-[hsl(220,20%,20%)] mb-2">Source Attribution</h3>
              <p className="text-[hsl(220,10%,50%)] text-sm mb-6">Where AI systems are pulling your brand information from</p>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={sourceAttributionData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(30,15%,90%)" />
                    <XAxis type="number" tick={{ fontSize: 12, fill: 'hsl(220,10%,50%)' }} domain={[0, 160]} />
                    <YAxis 
                      dataKey="name" 
                      type="category" 
                      tick={{ fontSize: 12, fill: 'hsl(220,10%,50%)' }} 
                      width={100}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid hsl(30,15%,90%)',
                        borderRadius: '8px'
                      }} 
                    />
                    <Bar 
                      dataKey="value" 
                      fill="hsl(25,95%,65%)" 
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Content Gaps & Sentiment */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Critical Content Gaps */}
            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <h3 className="font-display font-bold text-[hsl(220,20%,20%)] mb-2">Critical Content Gaps</h3>
              <p className="text-[hsl(220,10%,50%)] text-sm mb-6">Missing or weak signals reducing AI confidence</p>
              <div className="space-y-4">
                {contentGaps.map((gap, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[hsl(220,20%,20%)] mb-1">{gap.title}</h4>
                      <p className="text-[hsl(220,10%,45%)] text-sm mb-2">{gap.description}</p>
                      <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                        View recommendations
                        <ExternalLink className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Sentiment */}
            <div className="bg-white rounded-2xl p-6 border border-[hsl(30,15%,90%)] shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-display font-bold text-[hsl(220,20%,20%)]">Narrative Sentiment</h3>
              </div>
              <p className="text-[hsl(220,10%,50%)] text-sm mb-6">How key topics are framed in AI responses about your brand</p>
              <div className="space-y-5">
                {sentimentData.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-[hsl(220,20%,20%)]">{item.topic}</span>
                      <span className="text-green-600 text-sm font-medium">{item.positive}% positive</span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden flex bg-gray-100">
                      <div 
                        className="bg-primary h-full" 
                        style={{ width: `${item.positive}%` }}
                      />
                      <div 
                        className="bg-gray-300 h-full" 
                        style={{ width: `${item.neutral}%` }}
                      />
                      <div 
                        className="bg-red-500 h-full" 
                        style={{ width: `${item.negative}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex items-center gap-4 pt-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="text-[hsl(220,10%,50%)]">Positive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-300" />
                    <span className="text-[hsl(220,10%,50%)]">Neutral</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="text-[hsl(220,10%,50%)]">Negative</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AEO Recommendations */}
          <div className="bg-[hsl(30,20%,97%)] rounded-2xl p-6 border border-[hsl(30,15%,90%)]">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="font-display font-bold text-[hsl(220,20%,20%)]">Answer Engine Optimization Recommendations</h3>
            </div>
            <p className="text-[hsl(220,10%,50%)] text-sm mb-6">Precise, brand-safe improvements to boost AI readability and visibility</p>
            
            <div className="grid md:grid-cols-3 gap-4">
              {recommendations.map((rec, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[hsl(30,15%,90%)] shadow-sm">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                    rec.impact === 'high' 
                      ? 'bg-primary text-white' 
                      : 'bg-[hsl(30,15%,90%)] text-[hsl(220,10%,40%)]'
                  }`}>
                    {rec.impact === 'high' ? 'High Impact' : 'Medium Impact'}
                  </span>
                  <h4 className="font-display font-bold text-[hsl(220,20%,20%)] mb-2">{rec.title}</h4>
                  <p className="text-[hsl(220,10%,45%)] text-sm mb-4">{rec.description}</p>
                  <Button 
                    variant={rec.impact === 'high' ? 'default' : 'outline'}
                    className={rec.impact === 'high' ? 'w-full bg-primary hover:bg-primary-dark' : 'w-full'}
                    size="sm"
                  >
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AIVIDemo;
