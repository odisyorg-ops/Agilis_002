import React from "react";

const PartnershipImpact = () => {
  return (
    <section className="py-20 bg-white px-4 antialiased border-b border-gray-100">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Main Grid: 50/50 Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left: Narrative Content */}
          <div className="space-y-8">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-blue-600 mb-4 block">
                Building Partnerships
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-6">
                Quality-oriented and <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                  lifelong alliances.
                </span>
              </h2>
              
              <div className="space-y-4 max-w-lg">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#1d1d1f] tracking-tight">
                  In search of a Reliable Long-term Solution Oriented Tech Ally?
                </h3>
                <p className="text-[#86868b] text-[15px] md:text-[16px] leading-relaxed font-medium">
                  We offer an array of custom-tailored solutions, spanning web platforms, mobile apps, IOT and AI-driven software. We specialize in various industries including e-commerce, communications, logistics, fintech, entertainment and more.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Statistics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stat Card 1 */}
            <div className="p-8 bg-[#f5f5f7] rounded-[2rem] border border-gray-100 flex flex-col justify-between hover:bg-white transition-colors duration-300">
              <div className="mb-6">
                <h4 className="text-[3rem] font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                  7,000+
                </h4>
                <p className="text-[16px] font-bold text-[#1d1d1f] mt-2 tracking-tight">
                  Satisfied clients
                </p>
              </div>
              <p className="text-[#86868b] text-[13px] leading-relaxed font-medium">
                Worldwide reliance on our innovative solutions and exceptional results.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="p-8 bg-[#f5f5f7] rounded-[2rem] border border-gray-100 flex flex-col justify-between hover:bg-white transition-colors duration-300">
              <div className="mb-6">
                <h4 className="text-[3rem] font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                  500+
                </h4>
                <p className="text-[16px] font-bold text-[#1d1d1f] mt-2 tracking-tight">
                  Industry brands
                </p>
              </div>
              <p className="text-[#86868b] text-[13px] leading-relaxed font-medium">
                Proudly driving success together every single step of the way.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PartnershipImpact;