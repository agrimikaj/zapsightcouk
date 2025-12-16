import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getProductById, products } from '@/lib/products';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button asChild variant="hero">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = product.icon;
  const currentIndex = products.findIndex(p => p.id === product.id);
  const prevProduct = products[currentIndex + 1];
  const nextProduct = products[currentIndex - 1];

  return (
    <>
      <Helmet>
        <title>{product.name} - {product.tagline} | ZapSight</title>
        <meta name="description" content={product.heroDescription} />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[hsl(220,25%,10%)] to-background" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.03] rounded-full blur-[150px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              {/* Back link */}
              <Link 
                to="/#products" 
                className="inline-flex items-center gap-2 text-background/50 hover:text-background/80 text-sm mb-8 transition-colors duration-200"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
                Back to Platform
              </Link>

              <div className="max-w-4xl">
                {/* Icon & Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl lg:rounded-3xl flex items-center justify-center"
                       style={{
                         background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                         boxShadow: '0 0 40px hsl(var(--primary) / 0.3)'
                       }}>
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                    {product.tagline}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 tracking-tight">
                  {product.name}
                </h1>
                
                <p className="text-xl lg:text-2xl text-background/60 mb-8 leading-relaxed max-w-3xl">
                  {product.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Get Started with {product.name}
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                  <Button variant="heroOutline" size="xl" className="text-background hover:text-background">
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features & Benefits */}
          <section className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(220,25%,10%)] to-[hsl(220,25%,8%)]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Features */}
                <div>
                  <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Features</p>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 tracking-tight text-background">
                    What {product.name} Does
                  </h2>
                  <div className="space-y-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-background/70 pt-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Benefits</p>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 tracking-tight text-background">
                    Why It Matters
                  </h2>
                  <div className="space-y-4">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-background/70 pt-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,8%)] to-[hsl(220,25%,10%)]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/[0.05] rounded-full blur-[120px]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Use Cases</p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-background">
                  How Teams Use {product.name}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {product.useCases.map((useCase, i) => (
                  <div key={i} className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-2xl p-6 text-center">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-background/70 text-sm">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 lg:py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,25%,10%)] via-[hsl(var(--primary)/0.1)] to-[hsl(220,25%,8%)]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[150px]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
                   style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.1)' }}>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-background">
                  Ready to Get Started with {product.name}?
                </h2>
                <p className="text-background/60 mb-8 max-w-xl mx-auto">
                  Schedule a discovery call to see how {product.name} can transform your operations.
                </p>
                <Button variant="hero" size="xl" className="shadow-glow" asChild>
                  <Link to="/contact">
                    Schedule a Call
                    <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Navigation between products */}
          <section className="py-12 border-t border-background/5 relative">
            <div className="absolute inset-0 bg-[hsl(220,25%,8%)]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex justify-between items-center">
                {prevProduct ? (
                  <Link 
                    to={`/products/${prevProduct.id}`}
                    className="flex items-center gap-3 text-background/50 hover:text-background transition-colors duration-200"
                  >
                    <ArrowLeft className="h-5 w-5" strokeWidth={1.5} />
                    <div className="text-left">
                      <p className="text-xs uppercase tracking-wide">Previous</p>
                      <p className="font-display font-semibold">{prevProduct.name}</p>
                    </div>
                  </Link>
                ) : <div />}

                {nextProduct ? (
                  <Link 
                    to={`/products/${nextProduct.id}`}
                    className="flex items-center gap-3 text-background/50 hover:text-background transition-colors duration-200"
                  >
                    <div className="text-right">
                      <p className="text-xs uppercase tracking-wide">Next</p>
                      <p className="font-display font-semibold">{nextProduct.name}</p>
                    </div>
                    <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                  </Link>
                ) : <div />}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
