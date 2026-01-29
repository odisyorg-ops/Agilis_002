import React from 'react';
import { Play } from 'lucide-react';
import foundationImage from "../../assets/Office Workspace with Team Collaboration.png"

const FoundationSection = () => {
  return (
    // min-h-[80vh] ensures it fills the screen height without cutting off content
    <section className="min-h-[80vh] flex items-center py-20 bg-white px-4 antialiased border-t border-gray-100">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT: The Visual Anchor */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-[4/3] lg:aspect-square bg-[#f5f5f7] rounded-[3rem] border border-gray-100 relative overflow-hidden shadow-2xl shadow-blue-900/5">
               <div style={{ backgroundImage: `url(${foundationImage})` }} className="absolute inset-0 flex items-center justify-center text-gray-300 font-bold uppercase tracking-[0.2em] text-[10px]">
                
               </div>
               
               {/* Floating Badge */}
               <div className="absolute top-8 left-8 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full border border-white/20 shadow-sm">
                  <p className="text-[12px] font-bold text-blue-600 tracking-tight">
                    500+ Businesses Supported
                  </p>
               </div>
            </div>
          </div>

          {/* RIGHT: The Narrative */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-4">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-blue-600 block">
                Cultivating a Thriving Future
              </span>
              <h2 className="text-[40px] md:text-[56px] font-bold tracking-tighter leading-[1.1] text-[#1d1d1f]">
                Agilis <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#0f172a] to-[#1e40af]">
                  Foundation.
                </span>
              </h2>
            </div>

            <div className="space-y-6 max-w-lg">
              <p className="text-[#1d1d1f] text-[20px] font-bold leading-tight tracking-tight">
                Shaping a shared future where every individual and community has the chance to thrive.
              </p>
              
              <div className="space-y-4 text-[#86868b] text-[16px] md:text-[17px] leading-relaxed font-medium">
                <p>
                  We believe true impact comes from empowering people and creating opportunities that last. Our focus goes beyond short-term aid.
                </p>
                <p>
                  Through investments in education and environmental initiatives, we’re planting seeds of progress and nurturing innovation.
                </p>
              </div>
            </div>

            {/* Premium CTA */}
            <div className="pt-4">
              <button className="group flex items-center gap-5 text-[#1d1d1f] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#1d1d1f] flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                  <Play size={18} fill="currentColor" />
                </div>
                <span className="text-lg font-bold tracking-tight group-hover:text-blue-600 transition-colors">
                  Watch our profile
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoundationSection;