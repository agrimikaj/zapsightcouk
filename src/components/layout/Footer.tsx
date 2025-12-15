import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/zapsight-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="ZapSight" className="h-10" />
              <span className="font-display font-bold text-xl text-background">ZapSight</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Transforming Data Into Intelligent, ROI-Driven AI Agents
            </p>
            <div className="flex items-center gap-4 pt-4">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@zapsight.com" className="text-background/60 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {['Unifyer', 'DEasy', 'DashIA', 'Aisen', 'Seai', 'Builder', 'Docai'].map((product) => (
                <li key={product}>
                  <Link to={`/products/${product.toLowerCase()}`} className="text-background/70 hover:text-primary text-sm transition-colors">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-3">
              {['Energy', 'Retail', 'Manufacturing', 'Security', 'Insurance'].map((industry) => (
                <li key={industry}>
                  <Link to={`/industries/${industry.toLowerCase()}`} className="text-background/70 hover:text-primary text-sm transition-colors">
                    AI in {industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Global Presence</h4>
            <ul className="space-y-3">
              {['US', 'UK', 'UAE', 'India'].map((location) => (
                <li key={location} className="flex items-center gap-2 text-background/70 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  {location}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} ZapSight. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-background/50 hover:text-background text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/50 hover:text-background text-sm transition-colors">
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
