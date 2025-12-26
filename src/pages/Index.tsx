import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import SolutionGenerator from '@/components/home/SolutionGenerator';
import ProductsDiagram from '@/components/home/ProductsDiagram';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ProgressiveValueOverlay from '@/components/home/ProgressiveValueOverlay';
import DataFlowWaves from '@/components/ui/DataFlowWaves';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ZapSight - AI Agents That Deliver 6-8X ROI in Weeks</title>
        <meta name="description" content="Build ROI-driven AI agents in 4-6 weeks with ZapSight. 95-99% accuracy, 99.9% uptime. Enterprise AI solutions for Energy, Retail, Manufacturing & Insurance." />
        <meta property="og:title" content="ZapSight - Transform Data Into Intelligent AI Agents" />
        <meta property="og:description" content="Deploy AI agents that deliver 6-8X ROI in 4-6 weeks. Enterprise solutions with 95-99% accuracy for Energy, Retail, Manufacturing, Security & Insurance." />
      </Helmet>

      <div className="min-h-screen bg-background relative">
        <Navbar />
        <main className="relative">
          <HeroBanner />
          
          {/* Data flow waves between Solution Generator and Products */}
          <div className="relative overflow-visible">
            <DataFlowWaves position="top" className="z-10" />
            <div className="relative z-0">
              <SolutionGenerator />
            </div>
          </div>
          
          {/* Data flow waves around Products Diagram */}
          <div className="relative overflow-visible">
            <DataFlowWaves position="both" className="z-10" />
            <div className="relative z-0">
              <ProductsDiagram />
            </div>
          </div>
          
          {/* Data flow waves for Value Proposition */}
          <div className="relative overflow-visible">
            <DataFlowWaves position="top" className="z-10" />
            <div className="relative z-0">
              <ValuePropositionSection />
            </div>
          </div>
          
          <IndustriesSection />
          
          {/* Data flow waves for Case Studies */}
          <div className="relative overflow-visible">
            <DataFlowWaves position="bottom" className="z-10" />
            <div className="relative z-0">
              <CaseStudiesSection />
            </div>
          </div>
        </main>
        <Footer />
        <ProgressiveValueOverlay />
      </div>
    </>
  );
};

export default Index;