import React from "react";
import { motion } from "framer-motion";
import { Map, PieChart, ShieldCheck } from "lucide-react";

const featureData = [
  {
    title: "Investment strategies",
    desc: "Our solutions give you full control to choose what’s best for your clients’ unique needs.",
    icon: <Map className="text-blue-500/80" size={20} />,
  },
  {
    title: "Financial planning",
    desc: "Your clients will appreciate this straightforward approach to financial planning.",
    icon: <PieChart className="text-blue-500/80" size={20} />,
  },
  {
    title: "Insurance & annuities",
    desc: "Rely on our case design team to explore our extensive range of insurance products.",
    icon: <ShieldCheck className="text-blue-500/80" size={20} />,
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-white px-4">
      {/* Responsive width: 95vw on mobile, 80vw on desktop */}
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600">How we</span> can help
          </h2>
        </div>

        {/* Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {featureData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              /* Mobile: flex-col, items-center, text-center, no borders
                 Desktop: flex-row, items-start, text-left, border-r 
              */
              className={`relative px-6 md:px-10 py-4 md:py-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 group transition-all duration-500
                border-none md:border-r ${index === featureData.length - 1 ? "md:border-r-0" : "md:border-gray-100"}
              `}
            >
              {/* Left Accent Line: Hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-28 bg-blue-300" />

              {/* Icon Box */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-blue-100 border border-blue-200 rounded-xl shadow-xl shadow-blue-200/30 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px] font-medium max-w-[280px] md:max-w-[240px] mx-auto md:mx-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="mt-12 md:mt-20 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-3 rounded-full border border-gray-200 bg-white font-bold text-slate-800 shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Features;