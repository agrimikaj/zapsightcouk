import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralBackground from '@/components/ui/NeuralBackground';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is an AI agent?',
    answer: 'An AI agent is an autonomous software system that uses artificial intelligence to perceive its environment, make decisions, and take actions to achieve specific goals. Our AI agents are designed to integrate with your existing data systems and automate complex workflows while maintaining human oversight.',
  },
  {
    question: 'How long does a typical engagement take?',
    answer: 'A typical engagement takes 4-6 weeks per business use-case. This includes 1 week for discovery, 1 week for design, 2-3 weeks for development, and 1 week for deployment. We also provide 2-3 weeks of monitoring and enhancements after deployment.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across multiple industries including Energy, Retail, Manufacturing, Construction, Insurance, and IoT Security. Our solutions are tailored to the specific challenges and requirements of each industry.',
  },
  {
    question: 'What kind of ROI can I expect?',
    answer: 'Our clients typically see 6-8X ROI on their AI investments within 12-18 months. This is achieved through improved operational efficiency, reduced costs, faster decision-making, and enhanced customer experiences.',
  },
  {
    question: 'How do you ensure data security?',
    answer: 'We follow enterprise-grade security practices including encryption at rest and in transit, role-based access controls, and compliance with industry standards. We deploy on major cloud platforms (AWS, Azure, Google Cloud) with 99.9% uptime guarantees.',
  },
  {
    question: 'What data sources can you integrate with?',
    answer: 'We integrate with a wide range of data sources including ERPs & CRMs (Microsoft Dynamics, Oracle, SAP, Salesforce), data warehouses (Snowflake, Databricks, BigQuery), messaging systems (Slack, Teams), and unstructured data (PDFs, images, videos).',
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we provide continuous monitoring and optimization after deployment. Our team monitors agent performance, identifies improvement opportunities, and makes enhancements to ensure your AI solutions continue to deliver value.',
  },
  {
    question: 'What makes ZapSight different from other AI vendors?',
    answer: 'We focus on practical, business-driven AI solutions with measurable outcomes. Our approach starts with understanding your specific use case, works backward into the right architecture, and delivers working solutions in weeks, not months. We combine deep technical expertise with practical business understanding.',
  },
];

const FAQs = () => {
  return (
    <>
      <Helmet>
        <title>FAQs - ZapSight</title>
        <meta name="description" content="Frequently asked questions about ZapSight's AI solutions, engagement process, and how we help enterprises transform with AI agents." />
      </Helmet>

      <div className="min-h-screen bg-[hsl(220,20%,6%)]">
        <Navbar />
        <main>
          {/* Hero */}
          <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,8%)] via-[hsl(220,20%,6%)] to-[hsl(220,20%,6%)]" />
            <NeuralBackground />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.02] rounded-full blur-[200px]" />

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Help Center</p>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[hsl(0,0%,97%)] tracking-tight">
                  Frequently Asked <span className="text-primary">Questions</span>
                </h1>
                <p className="text-lg lg:text-xl text-[hsl(220,10%,55%)] max-w-3xl mx-auto">
                  Find answers to common questions about our AI solutions and how we work with enterprises.
                </p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            
            <div className="container mx-auto px-4 lg:px-8 relative z-10">
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl px-6 overflow-hidden"
                    >
                      <AccordionTrigger className="py-5 text-left text-[hsl(0,0%,94%)] hover:text-primary font-display font-semibold text-lg hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[hsl(220,10%,55%)] pb-5 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-10 lg:py-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
            <div className="absolute inset-0 opacity-[0.015]" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-primary/[0.03] rounded-full blur-[180px]" />
            
            <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[hsl(0,0%,97%)] mb-6 tracking-tight">
                Still Have Questions?
              </h2>
              <p className="text-[hsl(220,10%,55%)] text-lg mb-8 max-w-xl mx-auto">
                Our team is here to help. Reach out and we'll get back to you within 24 hours.
              </p>
              <Button size="xl" variant="hero" className="shadow-glow" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQs;