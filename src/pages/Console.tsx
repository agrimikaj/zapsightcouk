import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Console = () => {
  return (
    <>
      <Helmet>
        <title>My Console - Coming Soon | ZapSight</title>
        <meta name="description" content="ZapSight Console is launching soon. Create a custom dashboard powered by AI-driven downloadable evaluation and insights." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-background pt-20 lg:pt-24">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
              <Sparkles className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Coming Soon
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-4">
              My Console is launching soon.
            </p>
            
            <p className="text-base text-muted-foreground/80 mb-10">
              Create a custom dashboard for you, powered by AI-driven downloadable evaluation and insights.
            </p>
            
            <Button variant="outline" size="lg" asChild>
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Console;
