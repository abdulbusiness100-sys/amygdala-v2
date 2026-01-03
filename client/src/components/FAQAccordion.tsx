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
          className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-300 ${
            activeIndex === index ? "bg-white/5 border-primary/50" : "bg-transparent hover:bg-white/5"
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="text-lg font-medium text-white">{faq.q}</span>
            <div className={`p-1 rounded-full bg-white/10 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-primary' : ''}`}>
               {activeIndex === index ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white" />}
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
                <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
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
