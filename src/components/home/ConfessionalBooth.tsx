import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, ChevronDown } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Simulated anonymous questions for the roulette
const confessionRoulette = [
  "Someone just asked: 'Is ChatGPT actually reading my emails?'",
  "Someone just asked: 'What's the difference between AI and machine learning?'",
  "Someone just asked: 'Do I need to learn Python to use AI tools?'",
  "Someone just asked: 'What the hell is a vector database actually?'",
  "Someone just asked: 'Is my company too small for AI?'",
  "Someone just asked: 'How do I explain AI ROI to my board?'",
  "Someone just asked: 'What if AI makes my job obsolete?'",
  "Someone just asked: 'Should I be worried about AI hallucinations in reports?'",
  "Someone just asked: 'Can AI actually write better than my marketing team?'",
  "Someone just asked: 'What's a prompt and why does everyone keep talking about it?'",
];

const validationMessages = [
  "Last week, 47 people asked something similar",
  "Someone in SaaS is Googling this right now too",
  "A VP just asked this same thing in a private Slack",
  "You're the 12th person today. Seriously.",
  "A Fortune 500 exec whispered this yesterday",
];

interface AIResponse {
  validation: string;
  answer: string;
  coverStory: string;
  signoff: string;
}

const ConfessionalBooth = () => {
  const [question, setQuestion] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [simplerLevel, setSimplerLevel] = useState(0);
  const [currentRoulette, setCurrentRoulette] = useState(0);
  const [copied, setCopied] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const responseRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Rotate confession roulette
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoulette(prev => (prev + 1) % confessionRoulette.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (!question.trim() || isLoading) return;

    setIsValidating(true);
    setValidationMessage(validationMessages[Math.floor(Math.random() * validationMessages.length)]);
    
    // Show validation for 2 seconds
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsValidating(false);
    setIsLoading(true);
    setSimplerLevel(0);

    try {
      const { data, error } = await supabase.functions.invoke('confessional-whisper', {
        body: { question: question.trim() }
      });

      if (error) throw error;
      
      setResponse(data);
      
      // Smooth scroll to response
      setTimeout(() => {
        responseRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch (err) {
      console.error('Error:', err);
      toast({
        title: "Something went wrong",
        description: "Even AI has off days. Try whispering again?",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSimpler = async () => {
    if (!response || isLoading) return;
    
    setIsLoading(true);
    const newLevel = simplerLevel + 1;

    try {
      const { data, error } = await supabase.functions.invoke('confessional-whisper', {
        body: { 
          question: question.trim(),
          simpler: true,
          previousAnswer: response.answer
        }
      });

      if (error) throw error;
      
      setResponse(data);
      setSimplerLevel(newLevel);
    } catch (err) {
      console.error('Error:', err);
      toast({
        title: "Couldn't simplify",
        description: "Let me try that again...",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!response?.coverStory) return;
    
    await navigator.clipboard.writeText(response.coverStory);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden">
      {/* Cozy dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,20%,7%)] via-[hsl(220,18%,8%)] to-[hsl(220,20%,6%)]" />
      
      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.02] rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-[hsl(220,10%,50%)] text-sm uppercase tracking-widest mb-4">
            The Confession Booth
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[hsl(0,0%,97%)]">
            Whisper Your <span className="text-primary">AI Questions</span>
          </h2>
        </div>

        {/* The Whisper Input */}
        <div className="relative">
          <div 
            className="bg-[hsl(220,15%,10%)] border border-[hsl(220,12%,16%)] rounded-3xl p-6 lg:p-8 shadow-2xl"
            style={{ boxShadow: '0 25px 80px -20px rgba(0,0,0,0.5)' }}
          >
            <div className="relative">
              <textarea
                ref={textareaRef}
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  setIsTyping(e.target.value.length > 0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Ask the AI question you're scared to Slack your CTO... (e.g., 'What the hell is a vector database actually?')"
                className="w-full min-h-[120px] bg-transparent text-[hsl(0,0%,90%)] placeholder:text-[hsl(220,10%,40%)] text-lg leading-relaxed resize-none focus:outline-none"
                disabled={isLoading || isValidating}
              />
              
              {/* Character counter - only shows after typing */}
              <AnimatePresence>
                {isTyping && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 right-12 text-xs text-[hsl(220,10%,40%)]"
                  >
                    {question.length} chars
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Send button */}
              <button
                onClick={handleSubmit}
                disabled={!question.trim() || isLoading || isValidating}
                className="absolute bottom-0 right-0 p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                aria-label="Send whisper"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>

            {/* Microcopy */}
            <p className="text-[hsl(220,10%,40%)] text-xs mt-4 text-center">
              No logs. No judgment. Just relief.
            </p>
          </div>
        </div>

        {/* Validation Overlay */}
        <AnimatePresence>
          {isValidating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[hsl(220,15%,12%)] border border-[hsl(220,12%,18%)]">
                <div className="flex gap-1">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-primary"
                  />
                </div>
                <span className="text-[hsl(220,10%,65%)]">{validationMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading State */}
        <AnimatePresence>
          {isLoading && !isValidating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[hsl(220,15%,12%)] border border-[hsl(220,12%,18%)]">
                <div className="flex gap-1">
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-[hsl(220,10%,50%)]"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.15 }}
                    className="w-2 h-2 rounded-full bg-[hsl(220,10%,50%)]"
                  />
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: 0.3 }}
                    className="w-2 h-2 rounded-full bg-[hsl(220,10%,50%)]"
                  />
                </div>
                <span className="text-[hsl(220,10%,55%)] italic">Thinking...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Response Card - The Sandwich */}
        <AnimatePresence>
          {response && !isLoading && !isValidating && (
            <motion.div
              ref={responseRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="mt-10"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 30px 100px -30px rgba(0,0,0,0.6)' }}>
                {/* Top Bun - Validation */}
                <div className="bg-[hsl(220,12%,14%)] px-6 lg:px-8 py-5 border-b border-[hsl(220,12%,18%)]">
                  <p className="text-[hsl(220,10%,60%)] italic text-base">
                    "{response.validation}"
                  </p>
                </div>

                {/* The Meat - Answer */}
                <div className="bg-[hsl(220,15%,11%)] px-6 lg:px-8 py-8">
                  <p className="text-[hsl(0,0%,88%)] text-lg leading-relaxed">
                    {response.answer}
                  </p>
                  <p className="text-[hsl(220,10%,45%)] text-sm mt-6 italic">
                    {response.signoff}
                  </p>
                </div>

                {/* Bottom Bun - Cover Story */}
                <div className="bg-[hsl(35,80%,12%)] border-t-2 border-[hsl(35,70%,25%)] px-6 lg:px-8 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[hsl(35,60%,55%)] text-xs uppercase tracking-wider font-medium mb-2">
                        For tomorrow's meeting, say this:
                      </p>
                      <p className="text-[hsl(35,50%,75%)] text-base font-medium">
                        "{response.coverStory}"
                      </p>
                    </div>
                    <button
                      onClick={handleCopy}
                      className="flex-shrink-0 p-2 rounded-lg hover:bg-[hsl(35,50%,20%)] text-[hsl(35,50%,50%)] transition-colors"
                      aria-label="Copy cover story"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Panic Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={handleSimpler}
                  disabled={isLoading}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[hsl(220,15%,12%)] hover:bg-[hsl(220,15%,15%)] border border-[hsl(220,12%,18%)] text-[hsl(220,10%,60%)] hover:text-[hsl(220,10%,75%)] transition-all duration-200 disabled:opacity-50"
                >
                  <ChevronDown className="h-4 w-4" />
                  {simplerLevel === 0 ? "Still confused—explain dumber" : 
                   simplerLevel === 1 ? "Even dumber please" : 
                   "Okay, like I'm five"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Confession Roulette */}
        <div className="mt-16 pt-10 border-t border-[hsl(220,12%,14%)]">
          <p className="text-center text-[hsl(220,10%,40%)] text-xs uppercase tracking-widest mb-4">
            You're not alone
          </p>
          <div className="h-8 overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRoulette}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center text-[hsl(220,10%,50%)] text-sm italic"
              >
                {confessionRoulette[currentRoulette]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfessionalBooth;
