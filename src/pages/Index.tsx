import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import ConfessionalBooth from '@/components/home/ConfessionalBooth';
import ProductsDiagram from '@/components/home/ProductsDiagram';
import ValuePropositionSection from '@/components/home/ValuePropositionSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ClientLogosSection from '@/components/home/ClientLogosSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import ProgressiveValueOverlay from '@/components/home/ProgressiveValueOverlay';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ZapSight - AI Agents That Deliver 6-8X ROI in Weeks</title>
        <meta name="description" content="Build ROI-driven AI agents in 4-6 weeks with ZapSight. 95-99% accuracy, 99.9% uptime. Enterprise AI solutions for Energy, Retail, Manufacturing & Insurance." />
        <link rel="canonical" href="https://zapsight.co.uk/" />
        <meta property="og:title" content="ZapSight - Transform Data Into Intelligent AI Agents" />
        <meta property="og:description" content="Deploy AI agents that deliver 6-8X ROI in 4-6 weeks. Enterprise solutions with 95-99% accuracy for Energy, Retail, Manufacturing, Security & Insurance." />
        <meta property="og:url" content="https://zapsight.co.uk/" />
        <meta property="og:image" content="https://zapsight.co.uk/og-image.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ZapSight" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ZapSight" />
        <meta name="twitter:title" content="ZapSight - AI Agents That Deliver 6-8X ROI" />
        <meta name="twitter:description" content="Build ROI-driven AI agents in 4-6 weeks. 95-99% accuracy, 99.9% uptime." />
        <meta name="twitter:image" content="https://zapsight.co.uk/og-image.png" />
      </Helmet>

      <div className="min-h-screen bg-background relative">
        <Navbar />
        <main className="relative">
          <HeroBanner />
          <ConfessionalBooth />
          <ProductsDiagram />
          <ValuePropositionSection />
          <IndustriesSection />
          <ClientLogosSection />
          <CaseStudiesSection />
        </main>
        <Footer />
        <ProgressiveValueOverlay />
      </div>
    </>
  );
};

export default Index;