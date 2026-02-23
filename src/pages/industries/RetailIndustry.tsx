import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import { Quote } from 'lucide-react';
import ashleyLogo from '@/assets/ashley-logo.png';

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

        {/* Testimonial Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-[hsl(220,20%,6%)]">
          {/* Subtle ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
            <div className="flex flex-col items-center text-center">
              {/* Quote icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center mb-8">
                <Quote className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>

              {/* Testimonial text */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-display font-medium leading-relaxed text-[hsl(0,0%,90%)] mb-8 tracking-tight">
                "ZapSight's AI-powered floor analytics transformed how we understand customer behavior across our stores. The real-time insights have driven measurable improvements in both sales performance and customer experience."
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src={ashleyLogo}
                  alt="Ashley Furniture logo"
                  className="h-10 lg:h-12 object-contain brightness-0 invert opacity-70"
                />
                <div>
                  <p className="text-sm text-[hsl(220,10%,55%)] font-medium">
                    Retail Operations Leadership
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RetailIndustry;
