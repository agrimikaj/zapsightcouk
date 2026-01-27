import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import logo from '@/assets/zapsight-logo.png';
import ProductsMegaMenu from './ProductsMegaMenu';
import IndustriesMegaMenu from './IndustriesMegaMenu';
import CaseStudiesMegaMenu from './CaseStudiesMegaMenu';
import AboutMegaMenu from './AboutMegaMenu';
import { allProducts } from '@/lib/products';

const industries = [
  { name: 'Retail', href: '/industries/retail' },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Construction', href: '/industries/construction' },
  { name: 'Energy', href: '/industries/energy' },
  { name: 'Insurance & Finance', href: '/industries/insurance' },
  { name: 'Security', href: '/industries/security' },
];

const caseStudies = [
  { name: 'Overview', href: '/case-studies' },
  { name: 'Customer Analytics', href: '/case-studies/customer-analytics' },
  { name: 'Predictive Maintenance', href: '/case-studies/predictive-maintenance' },
];

const aboutUs = [
  { name: 'About ZapSight', href: '/about' },
  { name: 'How We Work', href: '/about/how-we-work' },
  { name: 'FAQs', href: '/faqs' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleLinkClick = () => {
    setOpenDropdown(null);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,20%,6%)]/95 backdrop-blur-xl border-b border-[hsl(220,16%,10%)]">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="ZapSight AI Agents Platform - Enterprise AI Solutions Logo" className="h-10 lg:h-11" />
            <span className="font-display font-bold text-xl lg:text-2xl text-primary tracking-tight">ZapSight</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <ProductsMegaMenu
              isOpen={openDropdown === 'products'}
              onMouseEnter={() => handleMouseEnter('products')}
              onMouseLeave={handleMouseLeave}
              onLinkClick={handleLinkClick}
            />
            <IndustriesMegaMenu
              isOpen={openDropdown === 'industries'}
              onMouseEnter={() => handleMouseEnter('industries')}
              onMouseLeave={handleMouseLeave}
              onLinkClick={handleLinkClick}
            />
            <CaseStudiesMegaMenu
              isOpen={openDropdown === 'caseStudies'}
              onMouseEnter={() => handleMouseEnter('caseStudies')}
              onMouseLeave={handleMouseLeave}
              onLinkClick={handleLinkClick}
            />
            <AboutMegaMenu
              isOpen={openDropdown === 'aboutUs'}
              onMouseEnter={() => handleMouseEnter('aboutUs')}
              onMouseLeave={handleMouseLeave}
              onLinkClick={handleLinkClick}
            />
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/console">My Console</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-[280px] text-center">
                <p>Create a custom dashboard for you, powered by AI-driven downloadable evaluation and insights.</p>
              </TooltipContent>
            </Tooltip>
            <Button variant="hero" size="lg" className="shadow-glow" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-[hsl(220,20%,10%)] transition-colors text-[hsl(0,0%,90%)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in border-t border-[hsl(220,16%,10%)]">
            <div className="space-y-4">
              <div className="px-2">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3">Products</p>
                {allProducts.map((product) => {
                  const Icon = product.icon;
                  return (
                    <Link
                      key={product.name}
                      to={`/products/${product.id}`}
                      className="flex items-center gap-3 py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" strokeWidth={1.5} />
                      {product.name}
                    </Link>
                  );
                })}
              </div>
              <div className="px-2 pt-4 border-t border-[hsl(220,16%,10%)]">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3">Industries</p>
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.href}
                    className="block py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
              <div className="px-2 pt-4 border-t border-[hsl(220,16%,10%)]">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3">Case Studies</p>
                {caseStudies.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="px-2 pt-4 border-t border-[hsl(220,16%,10%)]">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3">About Us</p>
                {aboutUs.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 px-2">
                <Button variant="hero" className="w-full shadow-glow" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
