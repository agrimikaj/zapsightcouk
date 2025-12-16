import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/zapsight-logo.png';

const products = [
  { name: 'Unifyer', href: '/products/unifyer' },
  { name: 'AISAC', href: '/products/aisac' },
  { name: 'DocAI', href: '/products/docai' },
  { name: 'DEasy', href: '/products/deasy' },
  { name: 'DashIA', href: '/products/dashia' },
  { name: 'Builder', href: '/products/builder' },
  { name: 'AIVI', href: '/products/aivi' },
];

const industries = [
  { name: 'AI in Energy Sector', href: '/industries/energy', subItems: [
    { name: 'Phase 1: Selling Projects', href: '/industries/energy/selling' },
    { name: 'Phase 2: Building Projects', href: '/industries/energy/building' },
    { name: 'Phase 3: Operations & Maintenance', href: '/industries/energy/operations' },
  ]},
  { name: 'AI in Retail', href: '/industries/retail' },
  { name: 'AI in Manufacturing', href: '/industries/manufacturing' },
  { name: 'AI in Security', href: '/industries/security' },
  { name: 'AI in Insurance', href: '/industries/insurance' },
];

interface DropdownProps {
  label: string;
  items: typeof products | typeof industries;
  isOpen: boolean;
  onToggle: () => void;
}

const Dropdown = ({ label, items, isOpen, onToggle }: DropdownProps) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="nav-link flex items-center gap-1.5 py-2 px-4 text-sm font-medium"
    >
      {label}
      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
    </button>
    {isOpen && (
      <div className="absolute top-full left-0 mt-3 w-64 bg-card/95 backdrop-blur-xl rounded-3xl shadow-floating overflow-hidden animate-scale-in">
        <div className="py-3">
          {items.map((item) => (
            <div key={item.name}>
              <Link
                to={item.href}
                className="block px-5 py-3 text-sm text-foreground/80 hover:bg-primary/5 hover:text-foreground transition-all duration-200"
              >
                {item.name}
              </Link>
              {'subItems' in item && item.subItems && (
                <div className="pl-4 ml-5 mb-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl shadow-soft">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="ZapSight" className="h-10 lg:h-11" />
            <span className="font-display font-bold text-xl lg:text-2xl gradient-text tracking-tight">ZapSight</span>
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
            <Link to="/about" className="nav-link py-2 px-4 text-sm font-medium">
              About Us
            </Link>
            <Link to="/contact" className="nav-link py-2 px-4 text-sm font-medium">
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="lg" className="shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in">
            <div className="space-y-4">
              <div className="px-2">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Products</p>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block py-2.5 px-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
              <div className="px-2 pt-4 border-t border-border/50">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Industries</p>
                {industries.map((industry) => (
                  <Link
                    key={industry.name}
                    to={industry.href}
                    className="block py-2.5 px-3 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
              <div className="pt-4 px-2 space-y-2 border-t border-border/50">
                <Link to="/about" className="block py-2.5 px-3 text-sm font-medium">About Us</Link>
                <Link to="/contact" className="block py-2.5 px-3 text-sm font-medium">Contact Us</Link>
              </div>
              <div className="pt-4 px-2">
                <Button variant="hero" className="w-full shadow-glow">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;