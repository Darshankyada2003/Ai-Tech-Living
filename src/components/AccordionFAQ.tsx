import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = { question: string; answer: string };

type AccordionFAQProps = {
  items: FaqItem[];
  className?: string;
};

export default function AccordionFAQ({ items, className }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 } },
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 6 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  return (
    <motion.div
      className={className}
      variants={containerReveal}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 gap-6">
        {items.map((faq, index) => (
          <motion.div
            key={index}
            layout
            className="group rounded-2xl border border-black/10 bg-white/70 backdrop-blur p-5 shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            variants={itemReveal}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between gap-3 text-left text-[color:var(--brand-text)] font-medium"
              aria-expanded={openIndex === index}
              aria-controls={`faq-panel-${index}`}
            >
              <span>{faq.question}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`shrink-0 text-[color:var(--brand-muted)] transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-panel-${index}`}
                  key={faq.question}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <p className="mt-2 text-[color:var(--brand-muted)] text-sm">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}


