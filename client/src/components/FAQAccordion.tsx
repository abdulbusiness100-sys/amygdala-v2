import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
            activeIndex === index ? "border-gold/50" : "hover:border-gold/30"
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-display text-lg text-charcoal">{faq.q}</span>
            <div className={`p-1 rounded-full transition-all duration-300 ${activeIndex === index ? 'gold-gradient' : 'bg-gold/10'}`}>
               {activeIndex === index ? <Minus className="w-4 h-4 text-charcoal" /> : <Plus className="w-4 h-4 text-gold" />}
            </div>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 pt-0 text-charcoal-medium border-t border-gold/10">
                  {faq.a}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
