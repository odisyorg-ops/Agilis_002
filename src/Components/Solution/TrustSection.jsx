import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';

const TrustSection = () => {
    const stats = [
        {
            number: "7,000+",
            label: "Satisfied Clients",
            desc: "Worldwide businesses rely on Agilis for innovative solutions and exceptional results."
        },
        {
            number: "500+",
            label: "Trusted Partners",
            desc: "Proudly partnered with industry-leading brands, driving success together every step of the way."
        },
        {
            number: "2021",
            label: "Proven Experience",
            desc: "Providing high-performance technology and strategic insights for over half a decade."
        }
    ];

    return (
        <section className="py-32 bg-white px-4 antialiased overflow-hidden">
            <div className="w-[95vw] md:w-[80vw] mx-auto text-center text-black">

                {/* Top Content: Centralized Hero */}
                <div className="mb-24 relative">


                    <h2 className="text-[42px] md:text-[64px] font-bold tracking-tighter leading-tight mb-6">
                        Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] via-[#1e40af] to-[#0f172a]">solutions</span>
                    </h2>
                    <p className="max-w-xl mx-auto text-[#86868b] text-[15px] md:text-[17px] leading-relaxed font-medium mb-10">
                        Our skilled consultants bring expertise to the table, guiding you in
                        executing strategies that pave the way for success.
                    </p>

                    <Link to="/contact" className="inline-block">
                        <button className="px-10 py-4 rounded-full bg-[#1d1d1f] text-white font-bold text-sm transition-all duration-500 
    /* Sapphire Shadow Gradient Effect */
    shadow-[0_15px_40px_-10px_rgba(30,64,175,0.4)] 
    hover:shadow-[0_20px_50px_-10px_rgba(30,64,175,0.6)] 
    hover:bg-blue-600 
    active:scale-95">
                            Get Started Now
                        </button>
                    </Link>
                </div>

                {/* Bottom Content: Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-start w-[90%] mx-auto">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center px-8 ${index !== stats.length - 1 ? "md:border-r border-gray-100" : ""
                                }`}
                        >
                            <span className="text-9xl md:text-7xl font-bold tracking-tighter text-[#1d1d1f] mb-2">
                                {stat.number}
                            </span>
                            <span className="text-lg font-medium mb-4">
                                {stat.label}
                            </span>
                            {/* <p className="text-[#86868b] text-[13px] md:text-[14px] leading-relaxed font-medium max-w-[240px]">
                {stat.desc}
              </p> */}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustSection;