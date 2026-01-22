import React from 'react';

const FoundationSection = () => {
    return (
        <section className="py-24 bg-white px-4">
            <div className="w-[95vw] md:w-[80vw] mx-auto border-t border-gray-100 pt-20">
                <div className="max-w-3xl">
                    <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Giving Back</span>
                    <h2 className="text-[36px] md:text-[48px] font-bold tracking-tighter text-[#1d1d1f] mt-4 mb-8">Agilis Foundation</h2>
                    <p className="text-[#86868b] text-lg md:text-xl leading-relaxed">
                        We’re committed to fostering sustainable change that uplifts lives. Through investments in education and environmental initiatives, we’re planting seeds of progress and nurturing innovation.
                    </p>
                    <div className="mt-12 aspect-[21/9] bg-gray-100 rounded-[2.5rem]" /> {/* Replaceable Image */}
                </div>
            </div>
        </section>
    );
};

export default FoundationSection;