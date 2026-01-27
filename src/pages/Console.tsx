import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';

const Console = () => {
  return (
    <>
      <Helmet>
        <title>My Console | ZapSight</title>
        <meta name="description" content="ZapSight Console - Create a custom dashboard powered by AI-driven downloadable evaluation and insights." />
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
