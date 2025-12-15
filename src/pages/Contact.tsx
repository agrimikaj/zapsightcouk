import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
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

      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    Let's <span className="gradient-text">Connect</span>
                  </h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Ready to transform your data into intelligent AI agents? Schedule a discovery call with our team.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                          placeholder="Tell us about your project..."
                          required
                        />
                      </div>
                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-8">
                    <div className="bg-accent rounded-2xl p-8">
                      <h3 className="font-display text-xl font-bold mb-6">Global Offices</h3>
                      <div className="space-y-4">
                        {['United States', 'United Kingdom', 'United Arab Emirates', 'India'].map((location) => (
                          <div key={location} className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-primary" />
                            <span>{location}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-8">
                      <h3 className="font-display text-xl font-bold mb-6">Get in Touch</h3>
                      <div className="space-y-4">
                        <a href="mailto:contact@zapsight.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                          <Mail className="h-5 w-5" />
                          contact@zapsight.com
                        </a>
                        <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                          <Phone className="h-5 w-5" />
                          Schedule a Call
                        </a>
                      </div>
                    </div>

                    <div className="gradient-primary rounded-2xl p-8 text-primary-foreground">
                      <h3 className="font-display text-xl font-bold mb-4">Quick Start</h3>
                      <p className="text-primary-foreground/80 mb-4">
                        Get started in just 4-6 weeks with measurable ROI outcomes.
                      </p>
                      <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full">
                        Book Discovery Call
                      </Button>
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
