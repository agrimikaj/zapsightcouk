import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ContextStackDemo = () => {
  const [isAssembling, setIsAssembling] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const stackItems = [
    { color: 'bg-blue-500/80', text: 'Previous complaint about delay' },
    { color: 'bg-green-500/80', text: 'Order #1234 — Delayed in transit' },
    { color: 'bg-purple-500/80', text: 'Tone: Empathetic + Proactive' },
    { color: 'bg-yellow-500/80', text: 'VIP Customer — High priority' },
    { color: 'bg-red-500/80', text: 'Offer 10% credit?' },
  ];

  const handleAssemble = () => {
    setIsAssembling(true);
    setTimeout(() => {
      setIsAssembling(false);
      setIsComplete(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsComplete(false);
  };

  return (
    <div className="bg-[hsl(220,15%,8%)] border border-[hsl(220,16%,12%)] rounded-2xl p-6 lg:p-8">
      {/* Customer ticket */}
      <div className="bg-[hsl(220,20%,10%)] border border-[hsl(220,16%,15%)] rounded-xl p-4 mb-6">
        <p className="text-[hsl(220,10%,45%)] text-xs uppercase tracking-wider mb-2">Customer Ticket</p>
        <p className="text-[hsl(0,0%,90%)] font-medium">"Where is my order? I'm frustrated."</p>
      </div>

      {/* Stack area */}
      <div className="relative min-h-[200px] mb-6">
        <AnimatePresence>
          {(isAssembling || isComplete) && stackItems.map((item, i) => (
            <motion.div
              key={i}
              className={`${item.color} rounded-lg px-4 py-2 mb-2`}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.15, delay: i * 0.15 }}
            >
              <p className="text-white text-sm font-medium">{item.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Completion state */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              className="mt-4 flex items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="text-yellow-400 text-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <p className="text-[hsl(0,0%,85%)] text-sm font-medium">Perfect Context Assembled</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state */}
        {!isAssembling && !isComplete && (
          <div className="flex items-center justify-center h-[200px] border-2 border-dashed border-[hsl(220,16%,15%)] rounded-xl">
            <p className="text-[hsl(220,10%,45%)] text-sm">Click below to assemble context</p>
          </div>
        )}
      </div>

      {/* Button */}
      {!isComplete ? (
        <Button
          variant="hero"
          size="lg"
          className="w-full"
          onClick={handleAssemble}
          disabled={isAssembling}
        >
          {isAssembling ? 'Assembling...' : 'Assemble Context with 5on5'}
        </Button>
      ) : (
        <Button
          variant="heroOutline"
          size="lg"
          className="w-full"
          onClick={handleReset}
        >
          See your stack in action → Book 2-min demo
        </Button>
      )}
    </div>
  );
};

export default ContextStackDemo;
