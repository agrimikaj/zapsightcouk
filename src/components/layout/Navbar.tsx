import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/zapsight-logo.png';

const products = [
  { name: 'Unifyer', href: '/products/unifyer' },
  { name: 'AIDR', href: '/products/aidr' },
  { name: 'AISAC', href: '/products/aisac' },
  { name: 'AIVI', href: '/products/aivi' },
  { name: 'SAPRO', href: '/products/sapro' },
  { name: 'AIVEN', href: '/products/aiven' },
  { name: 'Custex', href: '/products/custex' },
  { name: 'ProFast', href: '/products/profast' },
  { name: 'ProMan', href: '/products/proman' },
];

const industries = [
  { name: 'Retail', href: 'https://zapsightindustriesfurniture.lovable.app', external: true },
  { name: 'Manufacturing', href: '/industries/manufacturing' },
  { name: 'Construction', href: '/industries/construction' },
  { name: 'Energy', href: '/industries/energy' },
  { name: 'Insurance', href: '/industries/insurance' },
  { name: 'IoT Security', href: '/industries/security' },
];

const caseStudies = [
  { name: 'Overview', href: '/case-studies' },
  { name: 'Retail Client', href: 'https://presentation-to-polish.lovable.app', external: true, featured: true },
  { name: 'Manufacturing Client', href: 'https://quantum-weave-desk.lovable.app', external: true, featured: true },
];

const aboutUs = [
  { name: 'Overview', href: '/about' },
  { name: 'How We Work', href: '/about/how-we-work' },
  { name: 'Insights', href: '/insights' },
  { name: 'FAQs', href: '/faqs' },
];

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  featured?: boolean;
}

interface DropdownProps {
  label: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown = ({ label, items, isOpen, onToggle }: DropdownProps) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center gap-1.5 py-2 px-4 text-sm font-medium text-[hsl(220,10%,60%)] hover:text-[hsl(0,0%,94%)] transition-colors duration-200"
    >
      {label}
      <ChevronDown className={`h-4 w-4 text-[hsl(220,10%,45%)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
    </button>
    {isOpen && (
      <div className="absolute top-full left-0 mt-3 w-64 bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,14%)] rounded-2xl shadow-floating overflow-hidden animate-scale-in">
        <div className="py-2">
          {items.map((item) => (
            <div key={item.name}>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 text-sm text-[hsl(220,10%,60%)] hover:bg-primary/10 hover:text-[hsl(0,0%,94%)] transition-all duration-200"
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                    {item.featured && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">Featured</span>
                    )}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[hsl(220,10%,40%)]" strokeWidth={1.5} />
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="block px-5 py-3 text-sm text-[hsl(220,10%,60%)] hover:bg-primary/10 hover:text-[hsl(0,0%,94%)] transition-all duration-200"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
            <Dropdown
              label="Products"
              items={products}
              isOpen={openDropdown === 'products'}
              onToggle={() => handleDropdownToggle('products')}
            />
            <Dropdown
              label="Industries"
              items={industries}
              isOpen={openDropdown === 'industries'}
              onToggle={() => handleDropdownToggle('industries')}
            />
            <Dropdown
              label="Case Studies"
              items={caseStudies}
              isOpen={openDropdown === 'caseStudies'}
              onToggle={() => handleDropdownToggle('caseStudies')}
            />
            <Dropdown
              label="About Us"
              items={aboutUs}
              isOpen={openDropdown === 'aboutUs'}
              onToggle={() => handleDropdownToggle('aboutUs')}
            />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
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
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              <div className="px-2 pt-4 border-t border-[hsl(220,16%,10%)]">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3">Industries</p>
                {industries.map((industry) => (
                  industry.external ? (
                    <a
                      key={industry.name}
                      href={industry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.name}
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  ) : (
                    <Link
                      key={industry.name}
                      to={industry.href}
                      className="block py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {industry.name}
                    </Link>
                  )
                ))}
              </div>
              <div className="px-2 pt-4 border-t border-[hsl(220,16%,10%)]">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3">Case Studies</p>
                {caseStudies.map((item) => (
                  item.external ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="flex items-center gap-2">
                        {item.name}
                        {item.featured && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-1.5 py-0.5 rounded">Featured</span>
                        )}
                      </span>
                      <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2.5 px-3 text-sm text-[hsl(220,10%,60%)] hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
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