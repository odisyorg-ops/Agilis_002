import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const valueData = [
    {
        number: "01.",
        title: "Innovative",
        desc: "To boost business growth, we prioritized the exploration of new ideas."
    },
    {
        number: "02.",
        title: "Human-focused",
        desc: "We prioritize human emotions and essential aspects of any organization."
    },
    {
        number: "03.",
        title: "Customer-first",
        desc: "We're here round the clock to help with your needs and requests."
    },
    {
        number: "04.",
        title: "Experts",
        desc: "Our finance experts are ready to guide your business expansion."
    }
];

const Values = () => {
    // Apple Display style heading scale
    const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

    return (
        <section className="py-24  px-4 overflow-hidden antialiased">
            <div className="w-[95vw] md:w-[80vw] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

                    {/* Left Side: Display Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-2 "
                    >
                        <h2
                            style={{ fontSize: headingSize }}
                            className="font-bold tracking-tighter leading-[1.02] mb-10 bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-[#1d1d1f] pb-2"
                        >
                            Guided by purpose <br />
                            and values
                        </h2>

                        <Link to="/consultation">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#1d1d1f] text-white px-8 py-3.5 rounded-full font-medium text-[17px] hover:bg-[#323234] transition-all duration-300 shadow-sm"
                        >
                            Get Expert Consultation
                        </motion.button>
                        </Link>
                    </motion.div>

                    {/* Right Side: Clean List Section */}
                    <div className="space-y-14 col-span-3">
                        {valueData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1, duration: 0.8 }}
                                className="group flex flex-col gap-2"
                            >
                                {/* Title Unit */}
                                <div className="flex items-baseline gap-3">
                                    <span className="text-[15px] md:text-[17px] font-semibold tracking-tight text-blue-500">
                                        {item.number}
                                    </span>
                                    <h3 className="text-[22px] md:text-[28px] font-bold tracking-tight text-[#1d1d1f] leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                                
                                {/* Body Text - Muted and airy */}
                                <p className="text-[#86868b] text-[17px] md:text-[19px] font-medium leading-[1.5]  tracking-tight">
                                    {item.desc}
                                </p>

                                {/* Subtle separator line (Apple Detail) */}
                                <div className="h-px w-full bg-gray-100 mt-8 group-last:hidden" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Values;