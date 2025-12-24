import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import SolutionGenerator from '@/components/home/SolutionGenerator';
import ProductsDiagram from '@/components/home/ProductsDiagram';
import IndustriesSection from '@/components/home/IndustriesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ProgressiveValueOverlay from '@/components/home/ProgressiveValueOverlay';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ZapSight - AI Agents That Deliver 6-8X ROI in Weeks</title>
        <meta name="description" content="Build ROI-driven AI agents in 4-6 weeks with ZapSight. 95-99% accuracy, 99.9% uptime. Enterprise AI solutions for Energy, Retail, Manufacturing & Insurance." />
        <meta property="og:title" content="ZapSight - Transform Data Into Intelligent AI Agents" />
        <meta property="og:description" content="Deploy AI agents that deliver 6-8X ROI in 4-6 weeks. Enterprise solutions with 95-99% accuracy for Energy, Retail, Manufacturing, Security & Insurance." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroBanner />
          <ProductsDiagram />
          <IndustriesSection />
          <SolutionGenerator />
          <CaseStudiesSection />
        </main>
        <Footer />
        <ProgressiveValueOverlay />
      </div>
    </>
  );
};

export default Index;