import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="mt-8 space-y-3">
      {items.map((item, idx) => {
        const open = openIndex === idx;

        return (
          <div
            key={item.q}
            className="rounded-2xl border border-neutral-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold text-neutral-900">
                {item.q}
              </span>

              <span className="grid h-8 w-8 place-items-center rounded-full bg-neutral-50 text-neutral-700">
                <motion.span
                  initial={false}
                  animate={{ rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="text-lg leading-none"
                >
                  +
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-sm leading-6 text-neutral-600">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
