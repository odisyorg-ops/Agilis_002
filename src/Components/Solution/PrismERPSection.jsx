import React from 'react';

const PrismERPSection = () => {
  const prismFeatures = [
    { letter: "P", label: "Platform Independent", hue: "#ec4899" },
    { letter: "R", label: "Ready to Deploy", hue: "#3b82f6" },
    { letter: "I", label: "Integrated Core", hue: "#22c55e" },
    { letter: "S", label: "System Synergy", hue: "#f97316" },
    { letter: "M", label: "Multi-dimensional", hue: "#ef4444" },
  ];

  return (
    <section className="py-20 md:py-32 bg-white px-4 antialiased overflow-hidden">
      <div className="w-full md:w-[85vw] lg:w-[80vw] mx-auto">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-16 md:mb-24 text-left">
          <h4 className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.2em] text-[#86868b] mb-4 md:mb-6">
            Core Technology
          </h4>
          <h2 className="text-[36px] md:text-[56px] font-bold tracking-tighter leading-[1.1] text-[#1d1d1f] mb-8">
            What is PrismERP? <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b6cb7] to-[#182848] pb-1">
              Smarter workflows, redefined.
            </span>
          </h2>
          <p className="text-[#86868b] text-[17px] md:text-[21px] leading-[1.5] font-medium max-w-2xl tracking-tight">
            A collaborative architecture designed to integrate seamlessly with existing workflows, 
            delivering intuitive, clutter-free enterprise systems.
          </p>
        </div>

        {/* The PRISM Container */}
        <div className="relative p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] bg-[#f5f5f7]/50 border border-gray-100 overflow-hidden">
          
          {/* Soft Background Aura */}
          <div className="absolute -top-1/4 -right-1/4 w-full h-full bg-blue-50/50 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center md:justify-center gap-10 md:gap-6 lg:gap-10">
            
            {/* PRISM Letters Stack */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-4 lg:gap-6 w-full md:w-auto">
              {prismFeatures.map((item, index) => (
                <div key={index} className="flex flex-row md:flex-col items-center gap-4 md:gap-0 group">
                  
                  {/* Letter Card */}
                  <div 
                    className="w-16 h-16 md:w-20 md:h-24 lg:w-24 lg:h-32 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center shadow-sm border border-gray-100 transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl group-hover:border-transparent shrink-0"
                    style={{ '--hover-hue': item.hue }}
                  >
                    <span 
                      className="text-[28px] md:text-[36px] lg:text-[48px] font-bold tracking-tighter transition-colors duration-500" 
                      style={{ color: item.hue }}
                    >
                      {item.letter}
                    </span>
                  </div>

                  {/* Tooltip Label - Side on Mobile, Bottom on Desktop */}
                  <div className="md:mt-4 flex flex-col items-start md:items-center">
                    <div 
                      className="px-3 py-1 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white shadow-sm transition-transform duration-500 group-hover:translate-y-[-2px]"
                      style={{ backgroundColor: item.hue }}
                    >
                      {item.label}
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Vertical/Horizontal Separator */}
            <div className="h-[1px] w-full md:w-[1px] md:h-24 bg-gray-200" />

            {/* ERP Block */}
            <div className="flex flex-row md:flex-col items-center gap-4 md:gap-0 w-full md:w-auto group">
              <div className="w-16 h-16 md:w-40 md:h-24 lg:w-48 lg:h-32 bg-[#1d1d1f] rounded-2xl md:rounded-3xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-105 shrink-0 relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 <span className="text-[20px] md:text-[36px] lg:text-[48px] font-bold text-white tracking-tighter relative z-10">
                   ERP
                 </span>
              </div>
              <div className="md:mt-4 flex flex-col items-start md:items-center">
                <div className="px-3 py-1 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-500 bg-gray-200/50">
                  Enterprise
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default PrismERPSection;