import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        throw error;
      }

      toast({
        title: 'Message Sent!',
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again or email us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - ZapSight</title>
        <meta name="description" content="Get in touch with ZapSight. Schedule a discovery call to discuss your AI and data transformation needs." />
      </Helmet>

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        <main>
          <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 relative overflow-hidden">
            {/* Unified dark background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
            
            {/* Neural network animation */}
            <NeuralBackground />
            

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                    Let's <span className="text-primary">Connect</span>
                  </h1>
                  <p className="text-lg text-[hsl(220,10%,55%)] max-w-2xl mx-auto">
                    Ready to transform your data into intelligent AI agents? Schedule a discovery call with our team.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8"
                       style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.03)' }}>
                    <h2 className="font-display text-2xl font-bold mb-6 text-[hsl(0,0%,94%)]">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[hsl(220,10%,60%)]">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-[hsl(0,0%,94%)] placeholder:text-[hsl(220,10%,40%)] transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[hsl(220,10%,60%)]">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-[hsl(0,0%,94%)] placeholder:text-[hsl(220,10%,40%)] transition-all"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[hsl(220,10%,60%)]">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-[hsl(0,0%,94%)] placeholder:text-[hsl(220,10%,40%)] transition-all"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[hsl(220,10%,60%)]">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/30 text-[hsl(0,0%,94%)] placeholder:text-[hsl(220,10%,40%)] transition-all min-h-[120px] resize-none"
                          placeholder="Tell us about your project..."
                          required
                        />
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full shadow-glow" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Send className="h-5 w-5" strokeWidth={1.5} />
                        )}
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8"
                         style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                      <h3 className="font-display text-xl font-bold mb-6 text-[hsl(0,0%,94%)]">Global Offices</h3>
                      <div className="space-y-4">
                        {['United States', 'United Kingdom', 'United Arab Emirates', 'India'].map((location) => (
                          <div key={location} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                              <MapPin className="h-4 w-4 text-primary" strokeWidth={1.5} />
                            </div>
                            <span className="text-[hsl(220,10%,60%)]">{location}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-3xl p-8"
                         style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.02)' }}>
                      <h3 className="font-display text-xl font-bold mb-6 text-[hsl(0,0%,94%)]">Get in Touch</h3>
                      <div className="space-y-4">
                        <a href="mailto:info@zapsight.com" className="flex items-center gap-3 text-[hsl(220,10%,55%)] hover:text-primary transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                            <Mail className="h-4 w-4 text-primary" strokeWidth={1.5} />
                          </div>
                          info@zapsight.com
                        </a>
                        <a href="tel:+1234567890" className="flex items-center gap-3 text-[hsl(220,10%,55%)] hover:text-primary transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-primary/15 border border-primary/20 flex items-center justify-center">
                            <Phone className="h-4 w-4 text-primary" strokeWidth={1.5} />
                          </div>
                          Schedule a Call
                        </a>
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