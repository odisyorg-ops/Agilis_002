import React from 'react';
import { Zap, Eye, Heart, TrendingUp } from 'lucide-react';

const ERPSection = () => {
    const headingSize = "text-[36px] md:text-[52px]";

    return (
        <section className="py-24 md:py-40 bg-white px-4 antialiased border-b border-gray-100">
            <div className="w-[95vw] md:w-[80vw] mx-auto">
                
                {/* 1. Header Area */}
                <div className="mb-20 max-w-3xl">
                    <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600 mb-6 block">
                        Custom Solutions
                    </span>
                    <h2 className={`${headingSize} font-bold tracking-tighter leading-[1.05] text-[#1d1d1f] mb-6`}>
                        The Power of <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                            Custom ERP.
                        </span>
                    </h2>
                    <p className="text-[#86868b] text-[18px] md:text-[20px] leading-relaxed font-medium">
                        Forget cookie-cutter solutions. We craft bespoke software that integrates with your existing processes, eliminates data silos, and automates tedious tasks.
                    </p>
                </div>

                {/* 2. The Asymmetrical Mosaic Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                    
                    {/* CARD 1: TALL (Efficiency) - Takes up vertical space on desktop */}
                    <div className="lg:col-span-1 lg:row-span-2 bg-[#f5f5f7] rounded-[2.5rem] p-10 flex flex-col justify-between hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group border border-transparent hover:border-gray-100">
                        <div>
                            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 transition-colors duration-500">
                                <Zap className="text-[#1d1d1f] group-hover:text-white transition-colors duration-500" size={24} />
                            </div>
                            <h3 className="text-[28px] font-bold text-[#1d1d1f] mb-4 tracking-tight leading-none">
                                Enhanced Efficiency
                            </h3>
                            <p className="text-[#86868b] text-[17px] leading-relaxed font-medium mb-8">
                                Streamlined workflows save time and eliminate manual errors, freeing up your team to focus on strategic initiatives.
                            </p>
                        </div>
                        
                        {/* Quote integrated into the card */}
                        <div className="pt-8 border-t border-gray-200/60">
                            <p className="text-[20px] font-bold text-[#1d1d1f] leading-tight">
                                "Save Time. Add Value. Boost Revenue."
                            </p>
                        </div>
                    </div>

                    {/* CARD 2: WIDE (Data Visibility) - Spans 2 columns */}
                    <div className="lg:col-span-2 bg-[#1d1d1f] rounded-[2.5rem] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 group relative overflow-hidden">
                        {/* Decorative Gradient Blob */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="relative z-10 max-w-lg">
                            <h3 className="text-[24px] font-bold text-white mb-3 tracking-tight">
                                Improved Data Visibility
                            </h3>
                            <p className="text-gray-400 text-[17px] leading-relaxed font-medium">
                                Gain real-time insights into your operations, empowering data-driven decision-making for strategic growth.
                            </p>
                        </div>
                        <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform duration-500">
                             <Eye className="text-blue-400" size={28} />
                        </div>
                    </div>

                    {/* CARD 3: STANDARD (Satisfaction) */}
                    <div className="bg-[#f5f5f7] rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group border border-transparent hover:border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-[22px] font-bold text-[#1d1d1f] tracking-tight">
                                Customer Satisfaction
                            </h3>
                            <Heart className="text-blue-600" size={24} />
                        </div>
                        <p className="text-[#86868b] text-[16px] leading-relaxed font-medium">
                            Deliver a seamless customer experience with faster response times and personalized engagement.
                        </p>
                    </div>

                    {/* CARD 4: STANDARD (Profitability) */}
                    <div className="bg-[#f5f5f7] rounded-[2.5rem] p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 group border border-transparent hover:border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-[22px] font-bold text-[#1d1d1f] tracking-tight">
                                Boosted Profitability
                            </h3>
                            <TrendingUp className="text-blue-600" size={24} />
                        </div>
                        <p className="text-[#86868b] text-[16px] leading-relaxed font-medium">
                            Reduced operational costs and improved efficiency translate to measurable bottom-line growth.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ERPSection;