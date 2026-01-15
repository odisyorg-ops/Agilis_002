import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  // Clamp function for the large CTA heading
  // Min: 2rem, Preferred: 4vw, Max: 4.5rem
  const ctaHeadingSize = "clamp(2rem, 4vw, 4.5rem)";

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/services" },
    { name: "Cases", href: "/portfolio" },
    { name: "News", href: "/blogs" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contacts", href: "/contact" },
  ];

  const socialLinks = ["Instagram", "Facebook", "YouTube"];

  return (
    <footer className="bg-black text-white py-16 md:py-24 overflow-hidden">
      <div className="w-[90vw] md:w-[80vw] mx-auto space-y-6">
        {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-black rounded-sm rotate-45"></div>
              </div>
              <span className="text-2xl font-bold tracking-tighter">AGILIS</span>
            </div>
        {/* CTA SECTION - Relative Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  border-b border-gray-800 pb-20">
          
          {/* Left Side: Logo & Big Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            

            {/* Main Heading with Gradient */}
            <h2 
              style={{ fontSize: ctaHeadingSize }}
              className="font-black leading-[1.1] tracking-tighter max-w-full"
            >
              Ready to unlock your potential and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-white">
                achieve your goals with us?
              </span>
            </h2>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="px-5 py-2 border border-gray-700 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Links & Action */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start space-y-10"
          >
            {/* Navigation Grid */}
            <nav className="flex flex-wrap gap-x-8 gap-y-4 justify-start lg:justify-end">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-bold hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Description Text */}
            <p className="text-gray-400 text-left  max-w-sm leading-relaxed text-sm md:text-base">
              Contact us now to schedule a consultation and discover how our expertise 
              can make a difference for you. Together, we can create success.
            </p>

            {/* Large White Pill Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black text-lg md:text-xl font-black px-10 py-5 rounded-full shadow-2xl shadow-blue-500/10 transition-transform"
            >
              Let's Get Started Today
            </motion.button>
          </motion.div>
        </div>

        {/* BOTTOM BAR: Copyright */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© AGILIS. All rights reserved</p>
          <p className="font-medium">
            Designed by <span className="text-white">ODISY</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;