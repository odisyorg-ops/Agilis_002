import React from 'react';

const PrismERPSection = () => {
  const prismFeatures = [
    { letter: "P", label: "Platform Independent", color: "text-pink-500", bg: "bg-pink-50" },
    { letter: "R", label: "Ready", color: "text-blue-500", bg: "bg-blue-50" },
    { letter: "I", label: "Integrated", color: "text-green-500", bg: "bg-green-50" },
    { letter: "S", label: "System", color: "text-orange-500", bg: "bg-orange-50" },
    { letter: "M", label: "Multi-dimensional", color: "text-red-500", bg: "bg-red-50" },
  ];

  return (
    <section className="py-24 bg-white px-4 antialiased">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Header Block */}
        <div className="max-w-4xl mb-20">
          <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
            Core Technology
          </h4>
          <h2 className="text-[32px] md:text-[48px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-8">
            What is PrismERP? Embracing Smarter Workflows with Custom-Tailored Applications
          </h2>
          <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed font-medium">
            Through a collaborative approach, client needs are thoroughly understood, enabling the 
            meticulous definition of realistic project scopes. This ensures that the resulting 
            applications seamlessly integrate with existing workflows, delivering well-crafted 
            systems that streamline operations with intuitive, clutter-free interfaces.
          </p>
        </div>

        {/* The PRISM Acronym Grid */}
        <div className="relative pt-16 pb-8 px-8 bg-gradient-to-br from-[#0f172a]/[0.02] to-[#1e40af]/[0.02] border border-gray-100 rounded-lg overflow-hidden">
          {/* Subtle Grid Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
          />

          <div className="relative flex flex-wrap justify-center items-end gap-4 md:gap-8">
            {prismFeatures.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Feature Tag */}
                <div className={`mb-6 px-4 py-1.5 rounded-full ${item.bg} ${item.color} text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-sm`}>
                  {item.label}
                </div>
                {/* Letter Box */}
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white border border-gray-100 rounded-lg shadow-sm flex items-center justify-center">
                  <span className={`text-[32px] md:text-[48px] font-bold ${item.color} tracking-tighter`}>
                    {item.letter}
                  </span>
                </div>
              </div>
            ))}

            {/* ERP Block */}
            <div className="flex flex-col items-center">
              <div className="mb-6 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-sm">
                Enterprise Resource Planning
              </div>
              <div className="w-32 h-16 md:w-48 md:h-24 bg-white border border-gray-100 rounded-lg shadow-sm flex items-center justify-center">
                <span className="text-[32px] md:text-[48px] font-bold text-[#1d1d1f] tracking-tighter">
                  ERP
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrismERPSection;