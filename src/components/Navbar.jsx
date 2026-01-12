import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const baseHeader = "top-0 z-50 w-full transition duration-300";
  const homePosition = "absolute";
  const otherPosition = "sticky";

  const homeStyle = scrolled
    ? "bg-[#0b1f36]/80 backdrop-blur border-b border-white/10"
    : "bg-transparent";

  const otherStyle = "bg-white/80 backdrop-blur border-b border-neutral-200";

  const headerClass = `${baseHeader} ${isHome ? homePosition : otherPosition} ${
    isHome ? homeStyle : otherStyle
  }`;

  const linkBase = isHome
    ? "text-sm text-white/80 hover:text-white transition"
    : "text-sm text-neutral-700 hover:text-neutral-900 transition";

  const linkActive = isHome
    ? "text-white font-medium"
    : "text-neutral-900 font-medium";

  const buttonClass = isHome
    ? "rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 transition"
    : "rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-900 hover:bg-neutral-50 transition";

  return (
    <>
      <header className={headerClass}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <NavLink
            to="/"
            className={
              isHome
                ? "text-sm font-semibold text-white"
                : "text-sm font-semibold text-neutral-900"
            }
            onClick={() => setMenuOpen(false)}
          >
            asana
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                isActive ? `${linkBase} ${linkActive}` : linkBase
              }
            >
              Product
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? `${linkBase} ${linkActive}` : linkBase
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${linkBase} ${linkActive}` : linkBase
              }
            >
              Learn more
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${linkBase} ${linkActive}` : linkBase
              }
            >
              Contact
            </NavLink>

            <button className={buttonClass}>Get started</button>
          </nav>

          {/* Mobile hamburger (modern trigger) */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={buttonClass + " md:hidden"}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Modern slide-in mobile menu */}
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        isHome={isHome}
      />
    </>
  );
}
