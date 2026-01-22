import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  // Apple Display typography scale
  const headingSize = "clamp(3rem, 8vw, 6rem)";

  return (
    <section className="py-24 md:py-32 bg-white px-4 antialiased">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 
            style={{ fontSize: headingSize }}
            className="font-bold tracking-tighter leading-[1.02] mb-8 text-[#1d1d1f]"
          >
            Guided by purpose. <br />
            {/* Updated: Using the Sapphire Mesh gradient from your contact button */}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
              Defined by partnership.
            </span>
          </h1>
          <p className="text-[#86868b] text-[19px] md:text-[24px] font-medium leading-relaxed tracking-tight max-w-2xl">
            Agilis is a reliable long-term solution-oriented tech ally, specializing in custom-tailored web platforms, mobile apps, IOT, and AI-driven software.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;