import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Store, Factory, HardHat, Zap, Shield, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const industries = [
  { 
    id: 'retail',
    name: 'Retail', 
    href: '/industries/retail',
    icon: Store,
    gradient: 'from-pink-500 to-rose-500',
    description: 'Floor intelligence & customer analytics',
    features: ['Customer behavior tracking', 'Inventory optimization', 'Sales forecasting', 'Loss prevention']
  },
  { 
    id: 'manufacturing',
    name: 'Manufacturing', 
    href: '/industries/manufacturing',
    icon: Factory,
    gradient: 'from-blue-500 to-cyan-500',
    description: 'Production optimization & quality control',
    features: ['Predictive maintenance', 'Quality assurance', 'Supply chain optimization', 'Production scheduling']
  },
  { 
    id: 'construction',
    name: 'Construction', 
    href: '/industries/construction',
    icon: HardHat,
    gradient: 'from-amber-500 to-orange-500',
    description: 'Project management & safety compliance',
    features: ['Resource planning', 'Safety monitoring', 'Progress tracking', 'Cost management']
  },
  { 
    id: 'energy',
    name: 'Energy', 
    href: '/industries/energy',
    icon: Zap,
    gradient: 'from-yellow-500 to-amber-500',
    description: 'Grid optimization & asset management',
    features: ['Demand forecasting', 'Asset monitoring', 'Grid stability', 'Renewable integration']
  },
  { 
    id: 'insurance',
    name: 'Insurance & Finance', 
    href: '/industries/insurance',
    icon: Building2,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Claims automation & risk assessment',
    features: ['Claims processing', 'Fraud detection', 'Risk modeling', 'Customer insights']
  },
  { 
    id: 'security',
    name: 'Security', 
    href: '/industries/security',
    icon: Shield,
    gradient: 'from-violet-500 to-purple-500',
    description: 'Sensor intelligence & threat detection',
    features: ['Alert prioritization', 'Video fusion', 'Threat detection', 'Incident response']
  },
];

interface IndustriesMegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}

const IndustriesMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave, onLinkClick }: IndustriesMegaMenuProps) => {
  const [hoveredIndustry, setHoveredIndustry] = useState(industries[0]);

  return (
    <div 
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="flex items-center gap-1.5 py-2 px-4 text-sm font-medium text-[hsl(220,10%,70%)] hover:text-white transition-colors duration-200"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        Industries
        <ChevronDown className={`h-4 w-4 text-[hsl(220,10%,55%)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[700px] bg-[hsl(220,15%,7%)] border border-[hsl(220,15%,18%)] rounded-2xl shadow-2xl overflow-hidden"
            role="menu"
          >
            <div className="flex">
              {/* Left Panel - Industry List */}
              <div className="w-[260px] bg-[hsl(220,15%,10%)] border-r border-[hsl(220,15%,18%)] p-4">
                <p className="text-xs font-semibold text-[hsl(220,10%,50%)] uppercase tracking-wider mb-4 px-2">
                  {industries.length} Industries
                </p>
                <div className="space-y-1">
                  {industries.map((industry) => {
                    const Icon = industry.icon;
                    const isActive = hoveredIndustry.id === industry.id;
                    
                    return (
                      <motion.div
                        key={industry.id}
                        onMouseEnter={() => setHoveredIndustry(industry)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Link
                          to={industry.href}
                          onClick={onLinkClick}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? 'bg-[hsl(220,15%,15%)] shadow-lg' 
                              : 'hover:bg-[hsl(220,15%,13%)]'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${industry.gradient} shadow-md`}>
                            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white">{industry.name}</p>
                            <p className="text-xs text-[hsl(220,10%,55%)] truncate">{industry.description.split(' ').slice(0, 3).join(' ')}</p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              {/* Right Panel - Feature Display */}
              <div className="flex-1 p-6 bg-[hsl(220,15%,5%)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredIndustry.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="h-full flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${hoveredIndustry.gradient} shadow-lg`}>
                        <hoveredIndustry.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{hoveredIndustry.name}</h3>
                        <p className="text-sm text-[hsl(220,10%,60%)]">{hoveredIndustry.description}</p>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 flex-1 content-start">
                      {hoveredIndustry.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-2.5 py-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
                          <p className="text-sm text-[hsl(220,10%,75%)] leading-snug">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      asChild
                      size="lg"
                      className="w-fit bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold shadow-glow"
                    >
                      <Link to={hoveredIndustry.href} onClick={onLinkClick}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Explore {hoveredIndustry.name}
                      </Link>
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndustriesMegaMenu;
