import React from 'react';

const TechPartnerSection = () => {
    // Consistent Typography Scale
    const headingSize = "text-[36px] md:text-[48px]";

    const features = [
        {
            title: "Deep Industry Expertise",
            desc: "We understand the nuances of your sector, tailoring solutions that address your specific challenges and opportunities."
        },
        {
            title: "Agile Methodology",
            desc: "We work collaboratively with you, iterating quickly to ensure the solution perfectly meets your evolving needs."
        },
        {
            title: "Unwavering Quality",
            desc: "Excellence backed by our dedicated support team and ongoing maintenance services to ensure longevity."
        },
        {
            title: "Custom Ecosystems",
            desc: "Not just ERP. We craft web apps, mobile apps, and integrations to build your perfect technology stack."
        }
    ];

    return (
        <section className="py-24 md:py-40 bg-white px-4 antialiased border-b border-gray-100">
            <div className="w-[95vw] md:w-[80vw] mx-auto">
                
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    
                    {/* LEFT COLUMN: Narrative & Header */}
                    <div className="w-full lg:w-5/12 lg:top-32 space-y-8">
                        <div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600 mb-4 block">
                                Beyond ERP
                            </span>
                            <h2 className={`${headingSize} font-bold tracking-tighter leading-[1.05] text-[#1d1d1f] mb-6`}>
                                Your One-Stop <br />
                                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                                    Technology Partner.
                                </span>
                            </h2>
                        </div>

                        <p className="text-[#86868b] text-[18px] md:text-[20px] leading-relaxed font-medium">
                            Agilis offers a full suite of custom software development services. We build web applications, mobile apps, and integrations that bridge the gap between technology and business goals.
                        </p>

                        <p className="text-[#1d1d1f] text-[18px] md:text-[20px] leading-relaxed font-bold">
                            No need to juggle multiple vendors—we ensure seamless integration and ongoing support.
                        </p>
                    </div>

                    {/* RIGHT COLUMN: 2x2 Grid of Cards */}
                    <div className="w-full lg:w-7/12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div 
                                key={index} 
                                className="group p-10 bg-[#f5f5f7] rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 border border-transparent hover:border-gray-100"
                            >
                                {/* Accent Dot */}
                                <div className="w-3 h-3 bg-[#1d1d1f] rounded-full mb-6 group-hover:bg-blue-600 transition-colors duration-300" />
                                
                                <h3 className="text-[22px] font-bold text-[#1d1d1f] mb-4 tracking-tight leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-[#86868b] text-[16px] leading-relaxed font-medium">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TechPartnerSection;