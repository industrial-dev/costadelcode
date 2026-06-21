import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/site-content';

interface FaqAccordionProps {
  items: FaqItem[];
}

const ANSWER_TRANSITION = {
  duration: 0.22,
  ease: 'easeInOut',
} as const;

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setActiveIndex(activeIndex === i ? null : i);
  }

  return (
    <div>
      <ul className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = activeIndex === i;
          return (
            <li key={i} className="card">
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-display text-lg font-semibold tracking-[-0.03em] text-ink-950">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-stone-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${i}`}
                    key="answer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={ANSWER_TRANSITION}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="body-copy px-5 pb-5 pt-1">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
