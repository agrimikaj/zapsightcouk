import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroBanner from '@/components/home/HeroBanner';
import SolutionGenerator from '@/components/home/SolutionGenerator';
import ProductsShowcase from '@/components/home/ProductsShowcase';
import ValuesSection from '@/components/home/ValuesSection';
import CTASection from '@/components/home/CTASection';
import ProgressiveValueOverlay from '@/components/home/ProgressiveValueOverlay';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ZapSight - Transforming Data Into Intelligent AI Agents</title>
        <meta name="description" content="ZapSight builds ROI-driven AI agents and data solutions. 4-6 week engagements, 6-8X ROI, 95-99% accuracy. Transform your business with intelligent automation." />
        <meta property="og:title" content="ZapSight - AI Agents & Data Solutions" />
        <meta property="og:description" content="Transform your data into intelligent, ROI-driven AI agents. Enterprise solutions across Energy, Retail, Manufacturing, Security, and Insurance." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroBanner />
          <SolutionGenerator />
          <ProductsShowcase />
          <ValuesSection />
          <CTASection />
        </main>
        <Footer />
        <ProgressiveValueOverlay />
      </div>
    </>
  );
};

export default Index;
