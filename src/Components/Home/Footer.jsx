import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Footer = () => {
  // Apple Typography Scale
  const ctaHeadingSize = "clamp(2.5rem, 5vw, 4.5rem)";

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/services" },
    { name: "Blog", href: "/blogs" },
    { name: "Terms & Policy", href: "/terms" },
    { name: "Contacts", href: "/contact" },
  ];

  const socialLinks = ["Instagram", "Facebook", "YouTube"];

  return (
    <footer className="relative bg-[#0a0a0b] text-white min-h-fit lg:h-screen flex flex-col justify-between overflow-hidden antialiased">

      {/* Background Watermark (Desktop only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none select-none">
        <h1 className="absolute bottom-[-5%] left-[-5%] text-[25vw] font-black text-white/[0.03] leading-none tracking-tighter">
          AGILIS
        </h1>
      </div>

      <div className="relative z-10 w-[90vw] md:w-[80vw] mx-auto pt-24 md:pt-32 flex-grow flex flex-col justify-center">

        {/* Top Section: Logo */}
        <div className="flex items-center gap-3 mb-12 md:mb-20">
          <div className="flex  items-center justify-center">

            <img className="w-[160px]" src="/public/Agilis-white.png" alt="AGILIS" />
            <span className="text-[30px] font-bold tracking-tighter -ml-10">AGILIS</span>

          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end pb-20 border-b border-white/10">

          {/* Left Side: Massive Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h2
              style={{ fontSize: ctaHeadingSize }}
              className="font-bold leading-[1.02] tracking-tighter max-w-2xl"
            >
              Ready to unlock your potential and{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600">
                achieve your goals with us?
              </span>
            </h2>

            {/* Social Pills: Apple Secondary Style */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                  className="px-6 py-2 border border-white/20 rounded-full text-[14px] font-medium transition-all duration-300"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Navigation & Primary Action */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start lg:items-end space-y-12"
          >
            {/* Nav: Sharp Typography */}
            <nav className="flex flex-wrap gap-x-10 gap-y-4 justify-start lg:justify-end">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[17px] font-semibold text-white/70 hover:text-white transition-colors tracking-tight"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Description: Apple Muted Gray */}
            <p className="text-[#86868b] text-left lg:text-right max-w-sm leading-relaxed text-[16px] md:text-[18px] tracking-tight">
              Contact us now to schedule a consultation and discover how our expertise
              can make a difference for you.
            </p>

            {/* Action Button: High-end White Pill */}
            <Link to="/contact">
            </Link>
            <motion.a
            href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black text-[17px] font-bold px-12 py-5 rounded-full shadow-2xl shadow-blue-500/20 transition-all"
            >
              Let's Get Started Today
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR: Minimal Copyright */}
      <div className="relative z-10 w-[90vw] md:w-[80vw] mx-auto py-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#86868b] text-[14px]">
        <p>© 2026 AGILIS. All rights reserved</p>
        <p className="font-medium">
          Designed by <span className="text-white">ODISY</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;