import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import { Quote } from 'lucide-react';
import ashleyLogo from '@/assets/ashley-logo.png';
import southLogo from '@/assets/1915-south-logo.jpg';

const testimonials = [
  {
    quote: "ZapSight's AI-powered floor analytics transformed how we understand customer behavior across our stores. The real-time insights have driven measurable improvements in both sales performance and customer experience.",
    logo: ashleyLogo,
    logoAlt: "Ashley Furniture logo",
    attribution: "Ashley Furniture",
    invertLogo: true,
  },
  {
    quote: "The precision of ZapSight's traffic intelligence gave us clarity we never had before — from peak-hour staffing to layout optimization, every decision is now backed by data.",
    logo: southLogo,
    logoAlt: "1915 South logo",
    attribution: "1915 South",
    invertLogo: false,
  },
];

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

        {/* Testimonials Section */}
        <section className="relative py-16 lg:py-24 overflow-hidden bg-[hsl(220,20%,6%)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[120px]" />

          <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
              {testimonials.map((t, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/15 flex items-center justify-center mb-6">
                    <Quote className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>

                  <blockquote className="text-sm md:text-base font-display font-medium leading-relaxed text-[hsl(0,0%,90%)] mb-6 tracking-tight">
                    "{t.quote}"
                  </blockquote>

                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={t.logo}
                      alt={t.logoAlt}
                      className={`h-20 lg:h-24 object-contain ${t.invertLogo ? 'brightness-0 invert opacity-70' : 'rounded-lg opacity-80'}`}
                    />
                    <p className="text-sm text-[hsl(220,10%,55%)] font-medium">
                      {t.attribution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default RetailIndustry;
