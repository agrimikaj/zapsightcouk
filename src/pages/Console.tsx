import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';

const Console = () => {
  return (
    <>
      <Helmet>
        <title>AI Console Dashboard | ZapSight</title>
        <meta name="description" content="ZapSight Console - Create a custom dashboard powered by AI-driven downloadable evaluation and insights." />
        <link rel="canonical" href="https://zapsight.co.uk/console" />
        <meta property="og:title" content="AI Console Dashboard | ZapSight" />
        <meta property="og:description" content="Create a custom dashboard powered by AI-driven evaluation and insights." />
        <meta property="og:url" content="https://zapsight.co.uk/console" />
        <meta property="og:image" content="https://zapsight.co.uk/og-image.png" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-16 lg:pt-20">
        <iframe
          src="https://zap-showcase-experience.lovable.app"
          className="w-full h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] border-0"
          title="ZapSight Console"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </main>
    </>
  );
};

export default Console;
