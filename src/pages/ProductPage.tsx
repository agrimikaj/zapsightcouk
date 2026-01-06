import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ArrowRight, Check, Zap, ExternalLink, Gauge, Server, Shield, Users, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import ProductImageCarousel from '@/components/product/ProductImageCarousel';
import { getProductById, products } from '@/lib/products';

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = getProductById(productId || '');

  if (!product) {
    return (
      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl font-bold mb-4 text-[hsl(0,0%,97%)]">Product Not Found</h1>
            <p className="text-[hsl(220,10%,50%)] mb-8">The product you're looking for doesn't exist.</p>
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

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        
        <main>
          {/* Hero Section */}
          <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden">
            {/* Unified dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
            
            {/* Neural network animation */}
            <NeuralBackground />
            

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              {/* Back link */}
              <Link 
                to="/#products" 
                className="inline-flex items-center gap-2 text-[hsl(220,10%,50%)] hover:text-[hsl(0,0%,90%)] text-sm mb-8 transition-colors duration-200"
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
                         boxShadow: '0 0 40px hsl(var(--primary) / 0.25)'
                       }}>
                    <IconComponent className="h-8 w-8 lg:h-10 lg:w-10 text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary border border-primary/20">
                    {product.tagline}
                  </span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(0,0%,97%)] mb-6 tracking-tight">
                  {product.name}
                </h1>
                
                <p className="text-xl lg:text-2xl text-[hsl(220,10%,55%)] mb-8 leading-relaxed max-w-3xl">
                  {product.heroDescription}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Get Started with {product.name}
                      <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
                    </Link>
                  </Button>
                  {product.id === 'aivi' && (
                    <Button variant="heroOutline" size="xl" asChild>
                      <Link to="/demo/aivi">
                        View Demo
                        <ArrowRight className="h-4 w-4 ml-2" strokeWidth={1.5} />
                      </Link>
                    </Button>
                  )}
                  {product.id !== 'aivi' && product.id !== 'aisac' && product.id !== 'custex' && product.id !== 'proman' && product.id !== 'aidr' && product.id !== 'profast' && product.demoUrl && (
                    <Button variant="heroOutline" size="xl" asChild>
                      <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                        View Demo
                        <ExternalLink className="h-4 w-4 ml-2" strokeWidth={1.5} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Product Image Carousel */}
          <ProductImageCarousel productId={product.id} />

          {/* Key Benefits Section */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Key Benefits</p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
                  What {product.name} Delivers
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-4">
                  {product.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl transition-all duration-300 hover:border-primary/20 hover:bg-[hsl(220,20%,9%)]">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                           style={{
                             background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-dark)) 100%)',
                             boxShadow: '0 0 20px hsl(var(--primary) / 0.2)'
                           }}>
                        <Zap className="h-5 w-5 text-primary-foreground" strokeWidth={1.5} />
                      </div>
                      <span className="text-[hsl(220,10%,70%)] text-base lg:text-lg pt-2">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features & Benefits */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                {/* Features */}
                <div>
                  <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Features</p>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 tracking-tight text-[hsl(0,0%,97%)]">
                    What {product.name} Does
                  </h2>
                  <div className="space-y-4">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-[hsl(220,10%,60%)] pt-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Benefits</p>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold mb-8 tracking-tight text-[hsl(0,0%,97%)]">
                    Why It Matters
                  </h2>
                  <div className="space-y-4">
                    {product.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl">
                        <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 border border-primary/20">
                          <Check className="h-4 w-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-[hsl(220,10%,60%)] pt-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="text-center mb-12">
                <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Use Cases</p>
                <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
                  How Teams Use {product.name}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {product.useCases.map((useCase, i) => (
                  <div key={i} className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                      <span className="font-display font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-[hsl(220,10%,60%)] text-sm">{useCase}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Specifications - only show if product has specs */}
          {product.technicalSpecs && (
            <section className="py-10 lg:py-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-[hsl(220,20%,7%)]" />
              
              <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                  <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Technical Specifications</p>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
                    Built for Mission-Critical Operations
                  </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {product.technicalSpecs.latency && (
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Gauge className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-primary font-display font-bold text-xl mb-1">{product.technicalSpecs.latency}</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm">End-to-End Latency</p>
                    </div>
                  )}
                  {product.technicalSpecs.scalability && (
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Server className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-primary font-display font-bold text-xl mb-1">{product.technicalSpecs.scalability}</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm">Alert Processing</p>
                    </div>
                  )}
                  {product.technicalSpecs.reliability && (
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-primary font-display font-bold text-xl mb-1">{product.technicalSpecs.reliability}</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm">Uptime SLA</p>
                    </div>
                  )}
                  {product.technicalSpecs.concurrency && (
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-primary font-display font-bold text-xl mb-1">{product.technicalSpecs.concurrency}</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm">Concurrent Users</p>
                    </div>
                  )}
                  {product.technicalSpecs.dataRetention && (
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Database className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-primary font-display font-bold text-xl mb-1">{product.technicalSpecs.dataRetention}</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm">Data Retention</p>
                    </div>
                  )}
                  {product.technicalSpecs.deployment && (
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 text-center hover:border-primary/20 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center mx-auto mb-4">
                        <Cloud className="h-6 w-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <p className="text-primary font-display font-bold text-xl mb-1">Flexible</p>
                      <p className="text-[hsl(220,10%,50%)] text-sm">{product.technicalSpecs.deployment}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8 lg:p-12 text-center max-w-3xl mx-auto"
                   style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.05)' }}>
                <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
                  Ready to Get Started with {product.name}?
                </h2>
                <p className="text-[hsl(220,10%,55%)] mb-8 max-w-xl mx-auto">
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
          <section className="py-12 border-t border-[hsl(220,16%,10%)] relative">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="flex justify-between items-center">
                {prevProduct ? (
                  <Link 
                    to={`/products/${prevProduct.id}`}
                    className="flex items-center gap-3 text-[hsl(220,10%,50%)] hover:text-[hsl(0,0%,90%)] transition-colors duration-200"
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
                    className="flex items-center gap-3 text-[hsl(220,10%,50%)] hover:text-[hsl(0,0%,90%)] transition-colors duration-200"
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