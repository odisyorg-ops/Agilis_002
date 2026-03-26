import React from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, Network, Code2, Lightbulb } from "lucide-react";
import { Link } from "react-router";
import Meetingimg from "../../assets/Business Meeting Room.png";

const solutionsData = [
  {
    title: "ERP: Automate & Grow",
    desc: "Custom ERP solutions automate core processes, driving your business performance and market growth.",
    icon: <LayoutDashboard size={22} className="text-blue-500" />,
  },
  {
    title: "FTTX",
    desc: "Streamline your network. XON FTTx delivers innovative PON management for heightened efficiency.",
    icon: <Network size={22} className="text-blue-500" />,
  },
  {
    title: "Tailored Software",
    desc: "Agilis builds and develops custom software tailored to your unique needs, transforming visions into robust digital solutions.",
    icon: <Code2 size={22} className="text-blue-500" />,
  },
  {
    title: "Technology Consulting",
    desc: "Optimize your IT strategy and bridge the gap between business goals and cutting-edge technological solutions.",
    icon: <Lightbulb size={22} className="text-blue-500" />,
  },
];

const SolutionsSection = () => {
  const headingSize = "clamp(2.5rem, 6vw, 4rem)";

  return (
    <section className="py-16 md:py-24 overflow-hidden antialiased bg-white">
      <div className="w-[90vw] md:w-[85vw] mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 text-left"
          >
            <h2
              style={{ fontSize: headingSize }}
              className="font-bold tracking-tighter leading-[1.1] mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-[#1d1d1f] pb-2">
                Empower your growth.
              </span>
            </h2>

            <p className="text-[#86868b] text-[17px] md:text-[20px] font-medium leading-[1.5] tracking-tight mb-12 lg:w-[90%]">
              Agilis offers an array of custom-tailored solutions, spanning web platforms, 
              mobile apps, IoT, VR/AR/XR, and AI-driven software alongside our flagship ERP. 
              We specialize in diverse industries including fintech, logistics, communications, 
              and entertainment.
            </p>

            {/* Detailed Service Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {solutionsData.map((item, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-[#1d1d1f] tracking-tight mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#86868b] text-[15px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-medium text-[17px] hover:bg-[#323234] transition-all duration-300 shadow-md"
              >
                Explore all solutions
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Column: Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/5 mt-10 lg:mt-0"
          >
            <div className="relative">
              <img 
                className="aspect-5/4 object-cover w-full bg-[#f5f5f7] rounded-[1rem] shadow-lg" 
                src={Meetingimg} 
                alt="Agilis team collaboration" 
              />
              {/* Subtle decorative element for that "Tech" feel */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;