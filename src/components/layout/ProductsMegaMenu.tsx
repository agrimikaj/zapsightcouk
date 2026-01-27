import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, Star } from 'lucide-react';
import { allProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';

// Featured product IDs
const featuredProductIds = ['aivi', 'claim'];

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
        className="flex items-center gap-1.5 py-2 px-4 text-sm font-medium text-[hsl(220,10%,60%)] hover:text-[hsl(0,0%,94%)] transition-colors duration-200"
      >
        Products
        <ChevronDown className={`h-4 w-4 text-[hsl(220,10%,45%)] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[800px] bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,14%)] rounded-2xl shadow-floating overflow-hidden"
          >
            <div className="flex">
              {/* Left Panel - Product List */}
              <div className="w-[280px] bg-muted/30 border-r border-[hsl(220,16%,14%)] p-3">
                <p className="text-xs font-semibold text-[hsl(220,10%,40%)] uppercase tracking-wider mb-3 px-3">
                  {allProducts.length} AI Products
                </p>
                <div className="space-y-1">
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
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                            isActive 
                              ? 'bg-card shadow-card' 
                              : 'hover:bg-card/50'
                          }`}
                        >
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${
                            product.id === 'aivi' ? 'from-orange-500 to-red-500' :
                            product.id === 'aisac' ? 'from-blue-500 to-cyan-500' :
                            product.id === 'unifyer' ? 'from-purple-500 to-pink-500' :
                            product.id === 'aidr' ? 'from-green-500 to-emerald-500' :
                            product.id === 'sapro' ? 'from-yellow-500 to-orange-500' :
                            product.id === 'aiven' ? 'from-indigo-500 to-purple-500' :
                            product.id === '5on5' ? 'from-pink-500 to-rose-500' :
                            product.id === 'tars' ? 'from-teal-500 to-cyan-500' :
                            product.id === 'arios' ? 'from-amber-500 to-yellow-500' :
                            'from-red-500 to-orange-500'
                          }`}>
                            <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="text-sm font-semibold text-foreground">{product.name}</p>
                              {isFeatured && (
                                <Star className="w-3 h-3 text-primary fill-primary" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground truncate">{product.tagline.split(' ').slice(0, 3).join(' ')}</p>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              
              {/* Right Panel - Feature Display */}
              <div className="flex-1 p-6 bg-[hsl(220,20%,4%)]">
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
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${
                        hoveredProduct.id === 'aivi' ? 'from-orange-500 to-red-500' :
                        hoveredProduct.id === 'aisac' ? 'from-blue-500 to-cyan-500' :
                        hoveredProduct.id === 'unifyer' ? 'from-purple-500 to-pink-500' :
                        hoveredProduct.id === 'aidr' ? 'from-green-500 to-emerald-500' :
                        hoveredProduct.id === 'sapro' ? 'from-yellow-500 to-orange-500' :
                        hoveredProduct.id === 'aiven' ? 'from-indigo-500 to-purple-500' :
                        hoveredProduct.id === '5on5' ? 'from-pink-500 to-rose-500' :
                        hoveredProduct.id === 'tars' ? 'from-teal-500 to-cyan-500' :
                        hoveredProduct.id === 'arios' ? 'from-amber-500 to-yellow-500' :
                        'from-red-500 to-orange-500'
                      }`}>
                        <hoveredProduct.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{hoveredProduct.name}</h3>
                        <p className="text-sm text-muted-foreground">{hoveredProduct.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-6 flex-1">
                      {hoveredProduct.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button
                      asChild
                      className="w-fit bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-glow"
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
