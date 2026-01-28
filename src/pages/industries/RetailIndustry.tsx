import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';

const RetailIndustry = () => {
  return (
    <>
      <Helmet>
        <title>AI in Retail | ZapSight</title>
        <meta name="description" content="AI-powered retail intelligence for floor analytics, team performance, and inventory optimization." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-16 lg:pt-20">
        <iframe
          src="https://zapsightindustriesfurniture.lovable.app"
          className="w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] border-0"
          title="ZapSight Retail Industry Solutions"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </main>
    </>
  );
};

export default RetailIndustry;
