import React, { useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
// import Agilislogo from "../assets/Agilis-black.png";
import logo from "../assets/qKOsQ01.svg"

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Blog", to: "/blogs" },
];

const CTA_BUTTONS = [
  { label: "Get in Touch", to: "/contact" },
  { label: "Get Consultation", to: "/consultation" },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const mobileMenuVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: "auto", opacity: 1 },
};

const mobileItemVariants = {
  closed: { x: -16, opacity: 0 },
  open: (i) => ({ x: 0, opacity: 1, transition: { delay: i * 0.06 } }),
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const NavLink = ({ to, label, isActive, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={[
      "text-[14px] xl:text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200",
      isActive ? "text-blue-600" : "text-[#1d1d1f] hover:text-blue-600",
    ].join(" ")}
  >
    {label}
  </Link>
);

const CTAButton = ({ to, label, onClick, fullWidth = false }) => (
  <Link to={to} onClick={onClick}>
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={[
        "rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af]",
        "text-white font-semibold shadow-md shadow-blue-900/20",
        "transition-shadow duration-200 hover:shadow-lg hover:shadow-blue-900/30",
        fullWidth
          ? "w-full py-4 rounded-2xl text-base"
          : "text-xs xl:text-sm py-2 px-4 xl:py-[10px] xl:px-5",
      ].join(" ")}
    >
      {label}
    </motion.button>
  </Link>
);

const MobileNavLink = ({ to, label, index, onClick }) => (
  <motion.div
    custom={index}
    variants={mobileItemVariants}
    initial="closed"
    animate="open"
    exit="closed"
  >
    <Link
      to={to}
      onClick={onClick}
      className="block text-[24px] sm:text-[28px] font-bold text-[#1d1d1f] hover:text-blue-600 transition-colors duration-200"
    >
      {label}
    </Link>
  </motion.div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  /**
   * Scroll Logic:
   * 1. Detect scroll direction.
   * 2. If scrolling down and past a threshold (100px), hide.
   * 3. If scrolling up, show.
   */
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsHidden(true);
      setIsMobileMenuOpen(false); // Close mobile menu if user scrolls down
    } else {
      setIsHidden(false);
    }
  });

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(
    () => setIsMobileMenuOpen((prev) => !prev),
    []
  );

  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      /** Framer Motion Animation Properties **/
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      /** Style Classes **/
      className="fixed top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 antialiased"
      aria-label="Main navigation"
    >
      {/* ── Desktop Bar ── */}
      <div className="w-full max-w-[80vw] mx-auto h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <img
            src={logo}
            alt="Agilis Logo"
            className="w-[150px] sm:w-[300px] md:w-[310px] select-none brightness-0 -ml-[15%] sm:-ml-[20%]"
            style={{ clipPath: 'inset(10% 25% 10% 20%)' }}
            draggable={false}
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10" role="list">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} label={label} isActive={isActive(to)} />
            </li>
          ))}
        </ul>

        {/* Desktop CTAs + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {CTA_BUTTONS.map(({ label, to }) => (
              <CTAButton key={to} to={to} label={label} />
            ))}
          </div>

          <button
            className="lg:hidden p-2 text-[#1d1d1f] rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden shadow-lg absolute w-full"
          >
            <div className="px-4 sm:px-6 pt-6 pb-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map(({ label, to }, i) => (
                  <MobileNavLink
                    key={to}
                    to={to}
                    label={label}
                    index={i}
                    onClick={closeMobileMenu}
                  />
                ))}
              </div>
              <div className="h-px bg-gray-100 my-1" />
              <div className="flex flex-col sm:flex-row gap-3">
                {CTA_BUTTONS.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    custom={NAV_LINKS.length + i}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="w-full"
                  >
                    <CTAButton to={to} label={label} onClick={closeMobileMenu} fullWidth />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;