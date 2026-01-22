import React from 'react';

const ERPSection = () => {
    const benefits = [
        { title: "Enhanced Efficiency", desc: "Streamlined workflows save time and eliminate manual errors." },
        { title: "Improved Data Visibility", desc: "Gain real-time insights for better resource allocation." },
        { title: "Customer Satisfaction", desc: "Faster response times and personalized engagement." },
        { title: "Boosted Profitability", desc: "Measurable bottom-line growth through reduced costs." }
    ];

    return (
        <section className="py-24 bg-white px-4">
            <div className="w-[95vw] md:w-[80vw] mx-auto">
                <div className="mb-20">
                    <h2 className="text-[40px] md:text-[52px] font-bold tracking-tighter text-[#1d1d1f] mb-6">The Power of Custom ERP</h2>
                    <p className="text-[#86868b] text-xl max-w-3xl">Forget cookie-cutter solutions. We build bespoke ERP software that integrates with your existing processes and eliminates data silos.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <div key={i} className="p-8 bg-[#f5f5f7] rounded-[2rem] hover:shadow-xl transition-all duration-500">
                            <h3 className="text-[20px] font-bold text-[#1d1d1f] mb-4">{b.title}</h3>
                            <p className="text-[#86868b] text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ERPSection;