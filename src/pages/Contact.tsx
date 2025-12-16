import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - ZapSight</title>
        <meta name="description" content="Get in touch with ZapSight. Schedule a discovery call to discuss your AI and data transformation needs." />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        <main>
          <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden">
            {/* Dark Premium Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground via-[hsl(220,25%,10%)] to-[hsl(220,25%,8%)]" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-background tracking-tight">
                    Let's <span className="bg-gradient-to-r from-primary to-[hsl(25,95%,60%)] bg-clip-text text-transparent">Connect</span>
                  </h1>
                  <p className="text-lg text-background/60 max-w-2xl mx-auto">
                    Ready to transform your data into intelligent AI agents? Schedule a discovery call with our team.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-8"
                       style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.08)' }}>
                    <h2 className="font-display text-2xl font-bold mb-6 text-background">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-background/70">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 bg-background/5 border border-background/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-background placeholder:text-background/40 transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-background/70">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-background/5 border border-background/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-background placeholder:text-background/40 transition-all"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-background/70">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3.5 bg-background/5 border border-background/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-background placeholder:text-background/40 transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-background/70">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 bg-background/5 border border-background/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-background placeholder:text-background/40 transition-all min-h-[120px] resize-none"
                          placeholder="Tell us about your project..."
                          required
                        />
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full shadow-glow">
                        <Send className="h-5 w-5" strokeWidth={1.5} />
                        Send Message
                      </Button>
                    </form>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-8"
                         style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.05)' }}>
                      <h3 className="font-display text-xl font-bold mb-6 text-background">Global Offices</h3>
                      <div className="space-y-4">
                        {['United States', 'United Kingdom', 'United Arab Emirates', 'India'].map((location) => (
                          <div key={location} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                              <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                            </div>
                            <span className="text-background/70">{location}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-background/[0.03] backdrop-blur-xl border border-background/10 rounded-3xl p-8"
                         style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.05)' }}>
                      <h3 className="font-display text-xl font-bold mb-6 text-background">Get in Touch</h3>
                      <div className="space-y-4">
                        <a href="mailto:contact@zapsight.com" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                          </div>
                          contact@zapsight.com
                        </a>
                        <a href="tel:+1234567890" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                          </div>
                          Schedule a Call
                        </a>
                      </div>
                    </div>

                    <div className="bg-background/[0.03] backdrop-blur-xl border border-primary/20 rounded-3xl p-8 relative overflow-hidden"
                         style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.15)' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                      <div className="relative z-10">
                        <h3 className="font-display text-xl font-bold mb-4 text-background">Quick Start</h3>
                        <p className="text-background/60 mb-6">
                          Get started in just 4-6 weeks with measurable ROI outcomes.
                        </p>
                        <Button size="lg" variant="hero" className="w-full shadow-glow group">
                          Book Discovery Call
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
