import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/zapsight-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="ZapSight" className="h-10" />
              <span className="font-display font-bold text-xl text-background tracking-tight">ZapSight</span>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Transforming Data Into Intelligent, ROI-Driven AI Agents
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="text-background/40 hover:text-primary p-2 hover:bg-background/5 rounded-xl transition-colors duration-200">
                <Linkedin className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-background/40 hover:text-primary p-2 hover:bg-background/5 rounded-xl transition-colors duration-200">
                <Twitter className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a href="mailto:contact@zapsight.com" className="text-background/40 hover:text-primary p-2 hover:bg-background/5 rounded-xl transition-colors duration-200">
                <Mail className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight">Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'Unifyer', id: 'unifyer' },
                { name: 'AISAC', id: 'aisac' },
                { name: 'DocAI', id: 'docai' },
                { name: 'DEasy', id: 'deasy' },
                { name: 'DashIA', id: 'dashia' },
                { name: 'Builder', id: 'builder' },
                { name: 'AIVI', id: 'aivi' },
              ].map((product) => (
                <li key={product.id}>
                  <Link to={`/products/${product.id}`} className="text-background/50 hover:text-primary text-sm transition-colors duration-200">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight">Industries</h4>
            <ul className="space-y-3">
              {['Energy', 'Retail', 'Manufacturing', 'Security', 'Insurance'].map((industry) => (
                <li key={industry}>
                  <Link to={`/industries/${industry.toLowerCase()}`} className="text-background/50 hover:text-primary text-sm transition-colors duration-200">
                    AI in {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-5 tracking-tight">Global Presence</h4>
            <ul className="space-y-3">
              {['US', 'UK', 'UAE', 'India'].map((location) => (
                <li key={location} className="flex items-center gap-2.5 text-background/50 text-sm">
                  <MapPin className="h-4 w-4 text-primary/80" strokeWidth={1.5} />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/40 text-sm">
              © {new Date().getFullYear()} ZapSight. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link to="/privacy" className="text-background/40 hover:text-background/80 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/40 hover:text-background/80 text-sm transition-colors duration-200">
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