import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/zapsight-logo.png';

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,5%)] text-[hsl(0,0%,94%)] border-t border-[hsl(220,16%,10%)]">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="ZapSight AI Agents Platform - Enterprise AI Solutions Logo" className="h-10" />
              <span className="font-display font-bold text-xl text-[hsl(0,0%,94%)] tracking-tight">ZapSight</span>
            </Link>
            <p className="text-[hsl(220,10%,50%)] text-sm leading-relaxed">
              Transforming Data Into Intelligent, ROI-Driven AI Agents
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-[hsl(220,10%,40%)] hover:text-primary p-2 hover:bg-[hsl(220,20%,8%)] rounded-xl transition-colors duration-200">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-[hsl(220,10%,40%)] hover:text-primary p-2 hover:bg-[hsl(220,20%,8%)] rounded-xl transition-colors duration-200">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="mailto:contact@zapsight.com" className="text-[hsl(220,10%,40%)] hover:text-primary p-2 hover:bg-[hsl(220,20%,8%)] rounded-xl transition-colors duration-200">
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight text-[hsl(0,0%,90%)]">Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'Unifyer', id: 'unifyer' },
                { name: 'AIDR', id: 'aidr' },
                { name: 'AISAC', id: 'aisac' },
                { name: 'AIVI', id: 'aivi' },
                { name: 'SAPRO', id: 'sapro' },
                { name: 'AIVEN', id: 'aiven' },
                { name: 'Custex', id: 'custex' },
                { name: 'ProFast', id: 'profast' },
                { name: 'ProMan', id: 'proman' },
              ].map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} className="text-[hsl(220,10%,50%)] hover:text-primary text-sm transition-colors duration-200">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight text-[hsl(0,0%,90%)]">Industries</h4>
            <ul className="space-y-3">
              {['Energy', 'Retail', 'Manufacturing', 'Security', 'Insurance'].map((industry) => (
                <li key={industry}>
                  <Link to={`/industries/${industry.toLowerCase()}`} className="text-[hsl(220,10%,50%)] hover:text-primary text-sm transition-colors duration-200">
                    AI in {industry}
                  </Link>
                </li>
              ))}
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
        </div>

        <div className="mt-20 pt-8 border-t border-[hsl(220,16%,10%)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[hsl(220,10%,40%)] text-sm">
              © {new Date().getFullYear()} ZapSight. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-[hsl(220,10%,40%)] hover:text-[hsl(220,10%,70%)] text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-[hsl(220,10%,40%)] hover:text-[hsl(220,10%,70%)] text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;