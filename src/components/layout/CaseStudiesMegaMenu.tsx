import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Star, BarChart3, Settings, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const caseStudies = [
  { 
    id: 'overview',
    name: 'All Case Studies', 
    href: '/case-studies',
    icon: Briefcase,
    gradient: 'from-gray-500 to-slate-600',
    description: 'Browse our complete portfolio',
    features: ['8 detailed case studies', 'Multiple industries', 'Proven ROI results', 'Implementation insights'],
    featured: false
  },
  { 
    id: 'customer-analytics',
    name: 'Customer Analytics', 
    href: '/case-studies/customer-analytics',
    icon: BarChart3,
    gradient: 'from-blue-500 to-indigo-500',
    description: 'AI-powered customer behavior insights',
    features: ['360° customer view', 'Predictive analytics', 'Churn prevention', 'Revenue optimization'],
    featured: true
  },
  { 
    id: 'predictive-maintenance',
    name: 'Predictive Maintenance', 
    href: '/case-studies/predictive-maintenance',
    icon: Settings,
    gradient: 'from-emerald-500 to-teal-500',
    description: 'Equipment monitoring & failure prevention',
    features: ['Sensor integration', 'Failure prediction', 'Downtime reduction', 'Cost savings'],
    featured: true
  },
];

interface CaseStudiesMegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}

const CaseStudiesMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave, onLinkClick }: CaseStudiesMegaMenuProps) => {
  const [hoveredStudy, setHoveredStudy] = useState(caseStudies[1]); // Default to first featured

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
        Case Studies
        <ChevronDown className={`h-4 w-4 text-[hsl(220,10%,55%)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[620px] bg-[hsl(220,15%,7%)] border border-[hsl(220,15%,18%)] rounded-2xl shadow-2xl overflow-hidden"
            role="menu"
          >
            <div className="flex">
              {/* Left Panel - Case Studies List */}
              <div className="w-[240px] bg-[hsl(220,15%,10%)] border-r border-[hsl(220,15%,18%)] p-4">
                <p className="text-xs font-semibold text-[hsl(220,10%,50%)] uppercase tracking-wider mb-4 px-2">
                  Case Studies
                </p>
                <div className="space-y-1">
                  {caseStudies.map((study) => {
                    const Icon = study.icon;
                    const isActive = hoveredStudy.id === study.id;
                    
                    return (
                      <motion.div
                        key={study.id}
                        onMouseEnter={() => setHoveredStudy(study)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Link
                          to={study.href}
                          onClick={onLinkClick}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? 'bg-[hsl(220,15%,15%)] shadow-lg' 
                              : 'hover:bg-[hsl(220,15%,13%)]'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${study.gradient} shadow-md`}>
                            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-white">{study.name}</p>
                              {study.featured && (
                                <Star className="w-3 h-3 text-primary fill-primary" />
                              )}
                            </div>
                            <p className="text-xs text-[hsl(220,10%,55%)] truncate">{study.description.split(' ').slice(0, 3).join(' ')}</p>
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
                    key={hoveredStudy.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="h-full flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${hoveredStudy.gradient} shadow-lg`}>
                        <hoveredStudy.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-white">{hoveredStudy.name}</h3>
                          {hoveredStudy.featured && (
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">Featured</span>
                          )}
                        </div>
                        <p className="text-sm text-[hsl(220,10%,60%)]">{hoveredStudy.description}</p>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1 mb-6 flex-1 content-start">
                      {hoveredStudy.features.map((feature, index) => (
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
                      <Link to={hoveredStudy.href} onClick={onLinkClick}>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        {hoveredStudy.id === 'overview' ? 'View All Studies' : 'Read Case Study'}
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

export default CaseStudiesMegaMenu;
