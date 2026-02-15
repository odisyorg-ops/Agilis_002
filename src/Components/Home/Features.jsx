import React from "react";
import { motion } from "framer-motion";
import { Map, PieChart, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

const featureData = [
  {
    title: "Investment strategies",
    desc: "Our solutions give you full control to choose what’s best for your clients’ unique needs.",
    icon: <Map className="text-blue-500" size={20} />,
  },
  {
    title: "Financial planning",
    desc: "Your clients will appreciate this straightforward approach to financial planning.",
    icon: <PieChart className="text-blue-500" size={20} />,
  },
  {
    title: "Insurance & annuities",
    desc: "Rely on our case design team to explore our extensive range of insurance products.",
    icon: <ShieldCheck className="text-blue-500" size={20} />,
  }
];

const Features = () => {
  // Apple Display style heading scale
  const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

  return (
    <section className="py-16 md:py-32 px-4 overflow-hidden antialiased">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Apple-Style Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 
            style={{ fontSize: headingSize }} 
            className="font-bold tracking-tighter leading-[1.02] pb-2"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-[#1d1d1f]">
              How we
            </span>
            <span className="text-[#1d1d1f]"> can help</span>
          </h2>
        </div>

        {/* Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {featureData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative px-6 md:px-12 py-6 md:py-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 group transition-all duration-500
                border-none md:border-r ${index === featureData.length - 1 ? "md:border-r-0" : "md:border-gray-100"}
              `}
            >
              {/* Left Accent Line: Refined Apple Gray */}
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-24 bg-blue-400/30" />

              {/* Icon Box: Apple Soft UI Style */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-[#f5f5f7] border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Text Content: Apple Typography Specs */}
              <div className="flex flex-col gap-2 text-center md:text-left">
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#1d1d1f] tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#86868b] leading-[1.4] text-[16px] md:text-[18px] font-medium tracking-tight max-w-[280px] md:max-w-[240px] mx-auto md:mx-0">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learn More Button: Apple Secondary Style */}
        <Link to="/services">
        <div className="mt-16 md:mt-24 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-3.5 rounded-full border border-gray-300 bg-white font-medium text-[17px] text-[#1d1d1f] shadow-sm hover:border-[#1d1d1f] transition-all duration-300"
          >
            Learn More
          </motion.button>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Features;