import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MousePointer2, Plus, CheckCircle2, Zap, ArrowRight, Sparkles } from "lucide-react";

const timelineData = [
    { label: "Planning & Blueprint", offset: "ml-[5%]", width: "w-10 md:w-20", color: "text-emerald-500" },
    { label: "Deployment", offset: "ml-[15%]", width: "w-12 md:w-24", color: "text-blue-500" },
    { label: "Realization", offset: "ml-[25%]", width: "w-16 md:w-32", color: "text-indigo-500" },
    { label: "Preparation", offset: "ml-[35%]", width: "w-14 md:w-28", color: "text-purple-500" },
    { label: "Go Live", special: "golive", offset: "ml-[45%]" },
    { label: "Support", special: "hypercare", offset: "ml-[65%]" },
];

const ReadySection = () => {
    const containerRef = useRef(null);

    // Parallax effect for the background mesh
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotateRange = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <section ref={containerRef} className="py-24 overflow-hidden antialiased bg-white relative">

            {/* 1. ANIMATED BACKGROUND MESH */}
            <motion.div
                style={{ y: yRange, rotate: rotateRange }}
                className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-[120px] rounded-full pointer-events-none"
            />

            <div className="w-[95vw] md:w-[85vw] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* LEFT: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 max-w-xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] mb-8 leading-[1.05]">
                            We are Ready, <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-[#1d1d1f] pb-2">when you are.</span>
                        </h2>

                        <p className="text-[#424245] text-lg md:text-xl leading-relaxed mb-10 font-medium">
                            Once you have selected PrismERP, our battle-tested implementation
                            process kicks in. We don't just "install"—we launch a system
                            engineered for your specific organizational velocity.
                        </p>

                        <motion.button
                            whileHover={{ scale: 1.02, backgroundColor: "#1d1d1f" }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#1d1d1f] text-white font-bold text-base transition-all shadow-xl shadow-black/5"
                        >
                            Get Started Now
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </motion.div>

                    {/* RIGHT: The Advanced Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 relative bg-white/60 backdrop-blur-2xl rounded-[3rem] border border-white shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] p-8 md:p-12"
                    >
                        <div className="flex flex-col w-full relative">
                            {timelineData.map((row, index) => (
                                <div
                                    key={index}
                                    className="group/row flex items-center min-h-[70px] md:min-h-[85px] relative "
                                >
                                    {/* Progress Line */}
                                    {index < timelineData.length - 1 && (
                                        <div className="absolute left-[50%] top-1/2 w-[1px] h-full bg-gray-50 hidden md:block" />
                                    )}

                                    <div className="flex-1 relative flex items-center h-full border-b-[2px] border-blue-50">
                                        {/* STANDARD PILL */}
                                        {!row.special && (
                                            <motion.div
                                                whileHover={{ y: -3, scale: 1.02 }}
                                                className={`flex items-center gap-3 bg-white border mb-2 border-gray-100 rounded-2xl shadow-sm h-10 md:h-12 px-4 ${row.width} ${row.offset} cursor-pointer group-hover/row:border-blue-400 group-hover/row:shadow-lg transition-all duration-300`}
                                            >
                                                <motion.div
                                                    animate={{ rotate: [0, 10, 0] }}
                                                    transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
                                                    className={row.color}
                                                >
                                                    <CheckCircle2 size={16} />
                                                </motion.div>

                                                {/* Shimmering Progress Bar */}
                                                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden relative">
                                                    <motion.div
                                                        initial={{ x: "-100%" }}
                                                        whileInView={{ x: "0%" }}
                                                        transition={{ delay: 0.5 + (index * 0.1), duration: 1.5, ease: "easeInOut" }}
                                                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500"
                                                    />
                                                    <motion.div
                                                        animate={{ x: ["-100%", "200%"] }}
                                                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                                        className="absolute inset-0 bg-white/40 skew-x-12"
                                                    />
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* GO LIVE: The Radar Pill */}
                                        {row.special === "golive" && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className={`relative z-20 bg-[#1d1d1f] rounded-2xl h-14 md:h-16 mb-2 px-10 flex items-center justify-center border border-white/20 shadow-2xl cursor-pointer ${row.offset}`}
                                            >
                                                <motion.div
                                                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                                    transition={{ repeat: Infinity, duration: 2 }}
                                                    className="mr-3 text-yellow-400"
                                                >
                                                    <Zap size={20} fill="currentColor" />
                                                </motion.div>

                                                <span className="text-white font-black tracking-[0.2em] uppercase text-sm md:text-base">
                                                    Initiate Launch
                                                </span>

                                                {/* Radar Waves */}
                                                <div className="absolute inset-0 rounded-2xl border border-blue-500 opacity-0 group-hover/row:animate-ping" />
                                                <div className="absolute inset-0 rounded-2xl border border-indigo-500/50 scale-125 opacity-0 group-hover/row:animate-[pulse_2s_infinite]" />
                                            </motion.div>
                                        )}

                                        {/* HYPERCARE: Floating Support */}
                                        {row.special === "hypercare" && (
                                            <motion.div
                                                animate={{ y: [0, -5, 0] }}
                                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                                className={`bg-white rounded-xl border border-blue-100 mb-2 shadow-md h-10 px-5 flex items-center gap-3 ${row.offset}`}
                                            >
                                                <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                                                <span className="text-blue-600 font-bold text-[11px] uppercase tracking-tighter">Hypercare Active</span>
                                            </motion.div>
                                        )}
                                    </div>

                                    {/* LABEL SECTION */}
                                    <div className="w-[140px] md:w-[200px] border-l border-gray-100 pl-8 h-full flex flex-col justify-center shrink-0 group-hover/row:translate-x-2 transition-transform duration-300">
                                        <motion.span className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">
                                            Step 0{index + 1}
                                        </motion.span>
                                        <span className="text-[14px] md:text-[16px] font-bold text-[#1d1d1f] group-hover/row:text-blue-600">
                                            {row.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ReadySection;