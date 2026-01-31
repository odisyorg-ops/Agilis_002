import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Link style to keep code DRY
  const navLinkStyle = "text-[16px] font-medium text-[#1d1d1f] hover:text-blue-600 transition-colors";

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 antialiased">
      <div className="w-[95vw] md:w-[80vw] mx-auto h-20 flex justify-between items-center">

        {/* Logo */}
        <div className="text-[24px] md:text-[26px] font-bold tracking-tighter flex items-center relative">
          <div><img className="size-40 grayscale brightness-0" src="/src/assets/NEW - WITH BLUE - ALL - 2 MORE SPACE WITH SMALL ICON -F49F1C ORANGE - Copy copy-01.png" alt="AGILIS" /></div>
          <Link to="/" className="text-[#1d1d1f] hover:opacity-70 absolute transition-opacity left-28">
            AGILIS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          <Link to="/about" className={navLinkStyle}>
            About
          </Link>

          <Link to="/services" className={navLinkStyle}>
            Services
          </Link>

          <Link to="/process" className={navLinkStyle}>
            Process
          </Link>
          <Link to="/blogs" className={navLinkStyle}>
            Blog
          </Link>
        </div>

        {/* Right Side: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:block">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20"
            >
              Get in Touch
            </motion.button>
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-[#1d1d1f]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-[5%] py-10 flex flex-col gap-8">
              <Link 
                to="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-[#1d1d1f]"
              >
                About
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-[#1d1d1f]"
              >
                Solutions
              </Link>
              <Link 
                to="/blogs" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-[#1d1d1f]"
              >
                Blog
              </Link>
              
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-4 rounded-2xl bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-lg">
                  Get in Touch
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;