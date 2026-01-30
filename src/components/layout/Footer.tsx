import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/zapsight-logo.png';

// Medium icon component
const MediumIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,5%)] text-[hsl(0,0%,94%)] border-t border-[hsl(220,16%,10%)]">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="ZapSight AI Agents Platform - Enterprise AI Solutions Logo" className="h-10" width={40} height={40} />
              <span className="font-display font-bold text-xl text-[hsl(0,0%,94%)] tracking-tight">ZapSight</span>
            </Link>
            <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">
              Transforming Data Into Intelligent, ROI-Driven AI Agents
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/zapsight/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="text-[hsl(220,10%,50%)] hover:text-primary p-2 hover:bg-[hsl(220,20%,8%)] rounded-xl transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a 
                href="https://medium.com/@zapsight" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Medium Blog" 
                className="text-[hsl(220,10%,50%)] hover:text-primary p-2 hover:bg-[hsl(220,20%,8%)] rounded-xl transition-colors duration-200"
              >
                <MediumIcon className="h-5 w-5" />
              </a>
              <a 
                href="mailto:sarah@zapsight.co.uk" 
                aria-label="Email ZapSight" 
                className="text-[hsl(220,10%,50%)] hover:text-primary p-2 hover:bg-[hsl(220,20%,8%)] rounded-xl transition-colors duration-200"
              >
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Products - 2 columns */}
          <div className="lg:col-span-1">
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight text-[hsl(0,0%,90%)]">Products</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                { name: 'Unifyer', id: 'unifyer' },
                { name: 'AIDR', id: 'aidr' },
                { name: 'AISAC', id: 'aisac' },
                { name: 'AIVI', id: 'aivi' },
                { name: 'SAPRO', id: 'sapro' },
                { name: 'AIVEN', id: 'aiven' },
                { name: '5on5', id: '5on5' },
                { name: 'TARS', id: 'tars' },
                { name: 'Arios', id: 'arios' },
                { name: 'CLaiM', id: 'claim' },
              ].map((product) => (
                <Link 
                  key={product.id}
                  to={`/products/${product.id}`} 
                  className="text-[hsl(220,10%,50%)] hover:text-primary text-sm transition-colors duration-200"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight text-[hsl(0,0%,90%)]">Industries</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/industries/retail" className="text-[hsl(220,10%,50%)] hover:text-primary text-sm transition-colors duration-200">
                  Retail
                </Link>
              </li>
              {['Energy', 'Manufacturing', 'Construction', 'Insurance'].map((industry) => (
                <li key={industry}>
                  <Link to={`/industries/${industry.toLowerCase().replace(' ', '-')}`} className="text-[hsl(220,10%,50%)] hover:text-primary text-sm transition-colors duration-200">
                    {industry}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries/security" className="text-[hsl(220,10%,50%)] hover:text-primary text-sm transition-colors duration-200">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight text-[hsl(0,0%,90%)]">Global Presence</h4>
            <ul className="space-y-3">
              {['US', 'UK', 'UAE', 'India'].map((location) => (
                <li key={location} className="flex items-center gap-2.5 text-[hsl(220,10%,50%)] text-sm">
                  <MapPin className="h-4 w-4 text-primary/70" strokeWidth={1.5} />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-semibold text-lg mb-1 tracking-tight text-[hsl(0,0%,90%)]">Get Started</h4>
            <Button 
              variant="outline" 
              className="w-full h-11 bg-[hsl(220,20%,5%)] border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200" 
              asChild
            >
              <Link to="/contact">
                Discovery Call
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              className="w-full h-11 bg-[hsl(220,20%,5%)] border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200" 
              asChild
            >
              <Link to="/about/how-we-work">
                How We Work
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[hsl(220,16%,10%)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(220,10%,50%)] text-sm">
              © {new Date().getFullYear()} ZapSight. All rights reserved.
            </p>
            <div className="flex gap-8">
              <span className="text-[hsl(220,10%,50%)] text-sm">
                Privacy Policy
              </span>
              <span className="text-[hsl(220,10%,50%)] text-sm">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
