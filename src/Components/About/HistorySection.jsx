import React from 'react';

const HistorySection = () => {
    return (
        <section className="py-20 bg-[#f5f5f7]/50 px-4">
            <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="aspect-video bg-gray-200 rounded-[2.5rem] shadow-inner" /> {/* Replaceable Image */}
                <div className="space-y-8">
                    <h2 className="text-[32px] md:text-[42px] font-bold tracking-tight text-[#1d1d1f]">The beginning</h2>
                    <p className="text-[#86868b] text-lg leading-relaxed">
                        Agilis started in 2021 as an individual firm and formally registered as Agilis International in 2023 in the UK.
                        Driven by reinvestment rather than external capital, we provide complex, lasting solutions as a landmark for our partners.
                    </p>
                    <div className="flex gap-10">
                        <div>
                            <p className="text-[32px] font-bold text-[#1d1d1f]">2021</p>
                            <p className="text-sm text-[#86868b] font-bold uppercase tracking-widest">Founded</p>
                        </div>
                        <div>
                            <p className="text-[32px] font-bold text-[#1d1d1f]">2023</p>
                            <p className="text-sm text-[#86868b] font-bold uppercase tracking-widest">UK Registered</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistorySection;