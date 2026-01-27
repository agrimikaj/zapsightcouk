import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Star } from 'lucide-react';
import { allProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';

// Featured product IDs
const featuredProductIds = ['aivi', 'claim'];

// Product gradient colors mapping
const getProductGradient = (id: string) => {
  const gradients: Record<string, string> = {
    'aivi': 'from-orange-500 to-red-500',
    'aisac': 'from-blue-500 to-cyan-500',
    'unifyer': 'from-purple-500 to-pink-500',
    'aidr': 'from-green-500 to-emerald-500',
    'sapro': 'from-yellow-500 to-orange-500',
    'aiven': 'from-indigo-500 to-purple-500',
    '5on5': 'from-pink-500 to-rose-500',
    'tars': 'from-teal-500 to-cyan-500',
    'arios': 'from-amber-500 to-yellow-500',
    'claim': 'from-red-500 to-orange-500',
  };
  return gradients[id] || 'from-primary to-primary/80';
};

interface ProductsMegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onLinkClick: () => void;
}

const ProductsMegaMenu = ({ isOpen, onMouseEnter, onMouseLeave, onLinkClick }: ProductsMegaMenuProps) => {
  const [hoveredProduct, setHoveredProduct] = useState(allProducts[0]);

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
        Products
        <ChevronDown className={`h-4 w-4 text-[hsl(220,10%,55%)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[820px] bg-[hsl(220,15%,7%)] border border-[hsl(220,15%,18%)] rounded-2xl shadow-2xl overflow-hidden"
            role="menu"
          >
            <div className="flex">
              {/* Left Panel - Product List */}
              <div className="w-[300px] bg-[hsl(220,15%,10%)] border-r border-[hsl(220,15%,18%)] p-4">
                <p className="text-xs font-semibold text-[hsl(220,10%,50%)] uppercase tracking-wider mb-4 px-2">
                  {allProducts.length} AI Products
                </p>
                <div className="space-y-1 max-h-[400px] overflow-y-auto">
                  {allProducts.map((product) => {
                    const Icon = product.icon;
                    const isActive = hoveredProduct.id === product.id;
                    const isFeatured = featuredProductIds.includes(product.id);
                    
                    return (
                      <motion.div
                        key={product.id}
                        onMouseEnter={() => setHoveredProduct(product)}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.15 }}
                      >
                        <Link
                          to={`/products/${product.id}`}
                          onClick={onLinkClick}
                          role="menuitem"
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? 'bg-[hsl(220,15%,15%)] shadow-lg' 
                              : 'hover:bg-[hsl(220,15%,13%)]'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${getProductGradient(product.id)} shadow-md`}>
                            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-white">{product.name}</p>
                              {isFeatured && (
                                <Star className="w-3 h-3 text-primary fill-primary" />
                              )}
                            </div>
                            <p className="text-xs text-[hsl(220,10%,55%)] truncate">{product.tagline.split(' ').slice(0, 4).join(' ')}</p>
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
                    key={hoveredProduct.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="h-full flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${getProductGradient(hoveredProduct.id)} shadow-lg`}>
                        <hoveredProduct.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{hoveredProduct.name}</h3>
                        <p className="text-sm text-[hsl(220,10%,60%)]">{hoveredProduct.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-6 flex-1 content-start">
                      {hoveredProduct.features.slice(0, 4).map((feature, index) => (
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
                      <Link to={`/products/${hoveredProduct.id}`} onClick={onLinkClick}>
                        <Sparkles className="w-4 h-4 mr-2" />
                        Explore {hoveredProduct.name}
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

export default ProductsMegaMenu;
