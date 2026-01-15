import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const solutionsData = [
  { title: "Investment strategies" },
  { title: "Financial planning" },
  { title: "Insurance & annuities" },
  { title: "Integrated technology" },
];

const SolutionsSection = () => {
  // Apple Display style heading scale
  const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

  return (
    <section className="py-16 md:py-24  overflow-hidden antialiased">
      <div className="w-[90vw] md:w-[80vw] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Right Column: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 order-first md:order-last"
          >
            {/* Refined placeholder matching Apple's soft gray palette */}
            <div className="aspect-4/3 w-full bg-[#f5f5f7] rounded-3xl border border-gray-100 shadow-xl"></div>
          </motion.div>

          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 text-left"
          >
            {/* Apple-style Heading with Signature Gradient */}
            <h2
              style={{ fontSize: headingSize }}
              className="font-bold tracking-tighter leading-[1.02] mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-[#1d1d1f] pb-2">
                Our Solutions
              </span>
            </h2>

            {/* Apple-style Subheading (Secondary Text) */}
            <p className="text-[#86868b] text-[17px] md:text-[19px] font-medium leading-[1.4] tracking-tight mb-10 md:w-[85%]">
              Exora is devoted to aiding your organization in unlocking its complete potential, 
              resolving obstacles obstructing growth, profitability, and sustainability. 
              Permit us to be the solution in unraveling your business mysteries.
            </p>

            {/* Feature List */}
            <div className="space-y-4 mb-12">
              {solutionsData.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    {/* Minimalist checkmark */}
                    <Check className="text-blue-500" size={18} strokeWidth={3} />
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f] tracking-tight">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Apple-style Action Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full bg-[#1d1d1f] text-white font-medium text-[17px] hover:bg-[#323234] transition-all duration-300 shadow-sm"
            >
              See all solutions
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;