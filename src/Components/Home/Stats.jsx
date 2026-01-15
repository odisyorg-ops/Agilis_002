import React from "react";
import { motion } from "framer-motion";

const Stats = () => {
  // Apple Display typography scale
  const headingSize = "clamp(2.5rem, 5.5vw, 4rem)";

  const statsData = [
    {
      value: "4K+",
      label: "Satisfied clients",
      sub: "Global reach across 40+ countries.",
    },
    {
      value: "250+",
      label: "Trusted partners",
      sub: "Integrated with top-tier financial institutions.",
    },
    {
      value: "18+",
      label: "Years experience",
      sub: "A decade of refined fintech excellence.",
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-transparent px-4 antialiased overflow-hidden">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 
              style={{ fontSize: headingSize }}
              className="font-bold tracking-tighter leading-[1.05] mb-6 text-[#1d1d1f]"
            >
              Collaboration is the <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-400">
                key to success
              </span>
            </h2>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#1d1d1f] text-white px-10 py-4 rounded-full font-bold text-[17px] shadow-2xl shadow-blue-900/10 hover:bg-blue-600 transition-all duration-500 whitespace-nowrap"
          >
            Our Portfolio
          </motion.button>
        </div>

        {/* Cinematic Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "circOut" }}
              className="group relative p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-700 overflow-hidden"
            >
              {/* Animated Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100 transition-colors duration-700" />
              
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className={`text-[3.5rem] md:text-[5.5rem] font-bold tracking-tighter leading-none mb-6 
                    ${index === 0 ? "text-blue-700" : "text-[#1d1d1f]"}
                  `}>
                    {stat.value}
                  </h3>
                  <div className="h-1 w-12 bg-blue-600 rounded-full mb-8 group-hover:w-20 transition-all duration-500" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-[20px] md:text-[24px] font-bold text-[#1d1d1f] tracking-tight">
                    {stat.label}
                  </h4>
                  <p className="text-[#86868b] text-[15px] md:text-[17px] font-medium leading-relaxed tracking-tight">
                    {stat.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;