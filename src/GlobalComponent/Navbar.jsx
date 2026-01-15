import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutionLinks = [
    { name: "Investment Strategies", href: "/services/investment" },
    { name: "Financial Planning", href: "/services/planning" },
    { name: "Insurance & Annuities", href: "/services/insurance" },
    { name: "Integrated Technology", href: "/services/tech" },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/80 backdrop-blur-xl border-b border-gray-100 antialiased">
      {/* Container aligned with your 80vw sections */}
      <div className="w-[95vw] md:w-[80vw] mx-auto h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-[24px] md:text-[26px] font-bold tracking-tighter">
          <Link to="/" className="text-[#1d1d1f] hover:opacity-70 transition-opacity">
            AGILIS
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12 items-center">
          <Link 
            to="/about" 
            className="text-[16px] font-medium text-[#1d1d1f] hover:text-blue-600 transition-colors"
          >
            About
          </Link>

          {/* Solutions Dropdown */}
          <div 
            className="relative h-20 flex items-center"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-[16px] font-medium text-[#1d1d1f] hover:text-blue-600 transition-colors cursor-pointer">
              Solutions
              <motion.div
                animate={{ rotate: isSolutionsOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} strokeWidth={2.5} />
              </motion.div>
            </button>

            {/* Dropdown Menu - Fixed flicker with pt-4 to bridge the gap */}
            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.2, ease: "circOut" }}
                  className="absolute left-0 top-full pt-2 w-64"
                >
                  <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl shadow-gray-200/60 p-3 overflow-hidden">
                    {solutionLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-5 py-3.5 text-[15px] font-medium text-[#1d1d1f] hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/blogs" 
            className="text-[16px] font-medium text-[#1d1d1f] hover:text-blue-600 transition-colors"
          >
            Blog
          </Link>
        </div>

        {/* Right Side: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:block bg-[#1d1d1f] text-white px-7 py-2.5 rounded-full font-semibold text-[15px] hover:bg-[#323234] transition-all shadow-lg shadow-black/5"
          >
            Get in Touch
          </motion.button>

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
            <div className="px-[5%] py-8 flex flex-col gap-6">
              <Link to="/about" className="text-2xl font-bold text-[#1d1d1f]">About</Link>
              <div className="flex flex-col gap-4">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Solutions</span>
                {solutionLinks.map((link) => (
                  <Link key={link.name} to={link.href} className="text-xl font-semibold text-[#1d1d1f]">
                    {link.name}
                  </Link>
                ))}
              </div>
              <Link to="/blogs" className="text-2xl font-bold text-[#1d1d1f]">Blog</Link>
              <button className="w-full bg-[#1d1d1f] text-white py-4 rounded-2xl font-bold text-lg mt-4">
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;