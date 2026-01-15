import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const solutionsData = [
  {
    title: "Investment strategies",
    desc: "Our solutions give you full control to choose what’s best for your clients’ unique needs.",
  },
  {
    title: "Financial planning",
    desc: "Your clients will appreciate this straightforward approach to financial planning.",
  },
  {
    title: "Insurance & annuities",
    desc: "Rely on our case design team to explore our extensive range of insurance products.",
  },
  {
    title: "Integrated technology",
    desc: "Streamline your practice and provide an exceptional client experience.",
  },
];

const SolutionsSection = () => {
  // Clamp function for responsive heading size
  // Minimum 2.5rem, preferred 5vw, maximum 4rem
  const headingSize = "clamp(2.5rem, 5vw, 4rem)";

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="w-[90vw] md:w-[80vw] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Right Column: Image Placeholder (on top for mobile) */}
          {/* Using order-first md:order-last to change order based on screen size */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 order-first md:order-last"
          >
            {/* Blue card placeholder for the image */}
            <div className="aspect-[4/3] w-full bg-blue-100 rounded-xl shadow-2xl shadow-blue-200/50"></div>
          </motion.div>

          {/* Left Column: Text Content (on bottom for mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-left"
          >
            {/* Heading with gradient and clamp() font size */}
            <h2
              style={{ fontSize: headingSize }}
              className="font-black tracking-tight text-slate-900 leading-[1.1] mb-4"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-600">
                Our Solutions
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-md text-slate-600 font-medium mb-10 md:w-[70%]">
              Exora is devoted to aiding your organization in unlocking its complete potential, resolving obstacles obstructing growth, profitability, and sustainability. Permit us to be the solution in unraveling your business mysteries, enabling you to confidently pave the way to a future.
            </p>

            {/* Feature List with Checkmarks */}
            <div className="space-y-2 mb-10">
              {solutionsData.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  {/* Checkmark Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center">
                      <Check className="text-black" size={16} strokeWidth={3} />
                    </div>
                  </div>
                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    {/* <p className="text-slate-500 leading-relaxed">
                      {item.desc}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>

            {/* "See all solutions" Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full border-2 border-gray-200 bg-white font-bold text-slate-800 shadow-sm hover:shadow-md hover:border-gray-400 transition-all duration-300"
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