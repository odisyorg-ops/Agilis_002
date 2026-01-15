import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const Banner = () => {
    const stars = [
        { top: "10%", left: "15%", size: 14, delay: 0 },
        { top: "20%", right: "10%", size: 18, delay: 0.5 },
        { top: "50%", left: "8%", size: 10, delay: 1 },
        { top: "70%", right: "15%", size: 16, delay: 1.5 },
        { top: "85%", left: "20%", size: 12, delay: 2 },
        { top: "15%", right: "30%", size: 8, delay: 2.5 },
        { top: "60%", right: "40%", size: 20, delay: 0.8 },
    ];

    const headingSize = "clamp(2.5rem, 8vw, 5rem)";

    return (
        <section className="relative w-full py-24 md:py-40 px-4 overflow-hidden text-center antialiased">
            
            {/* Apple Mesh Gradient Background */}
            <div className="absolute inset-0 -z-10">
                {/* Primary soft blue glow */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50 blur-[120px] opacity-60" />
                {/* Secondary teal/soft glow */}
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-teal-50 blur-[100px] opacity-50" />
                {/* Center subtle gray wash */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />
            </div>

            {/* Background Decorative Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {stars.map((star, index) => (
                    <motion.div
                        key={index}
                        className="absolute text-blue-900/60"
                        style={{ top: star.top, left: star.left, right: star.right }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 4,
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
                {/* Heading: Apple Typography */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ fontSize: headingSize }}
                    className="font-bold leading-[1.02] max-w-5xl mx-auto mb-8 tracking-tighter"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-[#1d1d1f]">
                        Your Rules, Our Smart Tools
                    </span>
                    <br />
                    <span className="text-[#1d1d1f]">Built to grow with you</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-[#86868b] text-[17px] md:text-[21px] max-w-2xl mx-auto mb-12 leading-[1.4] font-medium tracking-tight"
                >
                    Power up with a smart, snappy ERP built to grow alongside you. Conquer every challenge like a pro while ensuring your business stays sorted.
                </motion.p>

                {/* Hero Button: The Gradient Button you wanted! */}
                <motion.button
                    whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="
                        relative px-12 py-4 rounded-full font-semibold text-[17px] 
                        transition-all duration-300 text-white bg-black
                        shadow-[0_20px_50px_rgba(37,99,235,0.3)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.4)]
                    "
                >
                    <span className="relative z-10">Get Started Now</span>
                </motion.button>
            </div>
        </section>
    );
};

export default Banner;