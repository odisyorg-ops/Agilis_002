import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Banner = () => {
    // Define positions for 7 stars to create a balanced but random look
    const stars = [
        { top: "10%", left: "15%", size: 16, delay: 0 },
        { top: "20%", right: "10%", size: 20, delay: 0.5 },
        { top: "50%", left: "8%", size: 12, delay: 1 },
        { top: "70%", right: "15%", size: 18, delay: 1.5 },
        { top: "85%", left: "20%", size: 14, delay: 2 },
        { top: "15%", right: "30%", size: 10, delay: 2.5 },
        { top: "60%", right: "40%", size: 22, delay: 0.8 },
    ];

    return (
        <section className="relative w-full py-24 px-4 bg-white overflow-hidden text-center">

            {/* Background Decorative Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {stars.map((star, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-blue-300 opacity-40"
                        style={{ top: star.top, left: star.left, right: star.right }}
                        animate={{
                            opacity: [0.4, 1, 0.4],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}
                    >
                        <Star size={star.size} fill="currentColor" strokeWidth={0} />
                    </motion.div>
                ))}
            </div>

            <div className="relative z-10 container mx-auto">
                {/* Label */}

                {/* Heading with heavy text and gradient */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl md:text-7xl font-black leading-tight max-w-5xl mx-auto mb-8 tracking-tighter"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-slate-600 to-black">
                        Your Rules, Our Smart Tools
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-slate-600 to-black">with Built To Grow With You</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-500 text-[12px] md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    Power up with a smart, snappy ERP built to grow alongside you. Conquer every challenge like a pro while ensuring your business stays sorted.
                </motion.p>

                {/* Hero Button - Bluish-teal gradient to White/Black hover */}
                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className="
            relative group
            px-5 py-3 rounded-full font-bold text-md transition-all duration-300 bg-black 
            text-white shadow-2xl shadow-blue-300
            hover:bg-white hover:to-white hover:text-black hover:border-black border-2 border-transparent
          "
                >
                    <span className="relative z-10">Get Started Now</span>

                    {/* Subtle border effect on hover handled by tailwind classes above */}
                </motion.button>
            </div>
        </section>
    );
};

export default Banner;