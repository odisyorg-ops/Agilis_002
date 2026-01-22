import React from "react";
import { motion } from "framer-motion";

const PartnershipImpact = () => {
  // Apple-style typography scale
  const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

  const metrics = [
    {
      value: "7,000+",
      label: "Satisfied clients",
      desc: "Worldwide reliance on our innovative solutions and exceptional results."
    },
    {
      value: "500+",
      label: "Industry-leading brands",
      desc: "Proudly driving success together every single step of the way."
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-white px-4 antialiased overflow-hidden">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Top Content: The Partnership Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 block">
              Building Partnerships
            </span>
            <h2 
              style={{ fontSize: headingSize }}
              className="font-bold tracking-tighter leading-[1.02] text-[#1d1d1f] mb-8"
            >
              Quality-oriented and <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                lifelong alliances.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:pt-16"
          >
            <h3 className="text-[20px] md:text-[24px] font-bold text-[#1d1d1f] tracking-tight">
              In search of a Reliable Long-term Solution Oriented Tech Ally?
            </h3>
            <p className="text-[#86868b] text-[17px] md:text-[19px] leading-relaxed font-medium">
              We offer an array of custom-tailored solutions, spanning web platforms, mobile apps, IOT and AI-driven software. We specialize in various industries including e-commerce, communications, logistics, fintech, entertainment and more.
            </p>
          </motion.div>
        </div>

        {/* Bottom Content: The Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {metrics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group p-10 md:p-14 rounded-[3rem] bg-[#f5f5f7] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700"
            >
              <h4 className="text-[4.5rem] md:text-[6rem] font-bold tracking-tighter leading-none mb-6 bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                {stat.value}
              </h4>
              <div className="space-y-4">
                <p className="text-[20px] md:text-[24px] font-bold text-[#1d1d1f] tracking-tight">
                  {stat.label}
                </p>
                <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-sm">
                  {stat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnershipImpact;