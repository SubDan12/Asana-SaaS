import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileMenu({ open, onClose, isHome }) {
  const panelBg = isHome ? "bg-[#0b1f36]" : "bg-white";
  const textMain = isHome ? "text-white" : "text-neutral-900";
  const textSub = isHome ? "text-white/70" : "text-neutral-600";
  const border = isHome ? "border-white/10" : "border-neutral-200";

  const linkBase = isHome
    ? "block text-lg font-medium text-white/90 hover:text-white"
    : "block text-lg font-medium text-neutral-900 hover:text-neutral-950";

  const linkActive = isHome ? "text-white" : "text-neutral-950";

  const cta = isHome
    ? "bg-white text-[#0b1f36] hover:bg-white/90"
    : "bg-[#0b1f36] text-white hover:bg-[#0b1f36]/90";

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm touch-none"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.aside
            className={`fixed right-0 top-0 z-50 h-screen w-[92%] max-w-sm ${panelBg} ${textMain} border-l ${border} shadow-2xl`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-full flex-col px-6 pt-6 pb-8 overflow-y-auto">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <NavLink
                  to="/"
                  onClick={onClose}
                  className="text-sm font-semibold"
                >
                  asana
                </NavLink>
                <button
                  type="button"
                  onClick={onClose}
                  className={`grid h-10 w-10 place-items-center rounded-md hover:bg-black/5 ${
                    isHome ? "hover:bg-white/10" : ""
                  }`}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <nav className="mt-10 space-y-5">
                <NavLink
                  to="/features"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${linkActive}` : linkBase
                  }
                >
                  Product
                </NavLink>

                <NavLink
                  to="/pricing"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${linkActive}` : linkBase
                  }
                >
                  Pricing
                </NavLink>

                <NavLink
                  to="/about"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${linkActive}` : linkBase
                  }
                >
                  Learn more
                </NavLink>

                <NavLink
                  to="/contact"
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${linkActive}` : linkBase
                  }
                >
                  Contact
                </NavLink>
              </nav>

              {/* Secondary */}
              <div className="mt-8">
                <p className={`text-xs ${textSub}`}>
                  Tip: tap outside the panel to close
                </p>
              </div>

              {/* CTA bottom */}
              <div className="mt-auto pt-6">
                <button
                  className={`h-11 w-full rounded-xl text-sm font-semibold transition ${cta}`}
                  onClick={() => {
                    onClose();
                    // optional: navigate to pricing or signup route later
                  }}
                >
                  Get started
                </button>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
