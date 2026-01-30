import React from 'react';

const OperatingSystemSection = () => {
  const modules = [
    { id: "FMS", label: "Financial Management", color: "fill-blue-600" },
    { id: "SCM", label: "Supply Chain", color: "fill-blue-500" },
    { id: "SDM", label: "Sales & Distribution", color: "fill-orange-500" },
    { id: "HCM", label: "Human Capital", color: "fill-green-500" },
    { id: "PPC", label: "Production Planning", color: "fill-red-600" },
    { id: "PRD", label: "Productivity", color: "fill-pink-500" },
    { id: "CRM", label: "Customer Relationship", color: "fill-purple-600" },
    { id: "ADM", label: "Administrative", color: "fill-indigo-900" },
    { id: "CSC", label: "Service Center", color: "fill-stone-600" },
    { id: "PS", label: "Project Systems", color: "fill-emerald-600" },
  ];

  return (
    <section className="py-24 bg-white px-4 antialiased overflow-hidden">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: The Interactive Wheel Visual */}
          <div className="relative flex justify-center items-center">
            {/* SVG Wheel - Scalable and High-Resolution */}
            <svg viewBox="0 0 400 400" className="w-full max-w-[450px] drop-shadow-2xl">
              <circle cx="200" cy="200" r="180" fill="white" className="stroke-gray-100 stroke-1" />
              {/* Central Logo Holder */}
              <circle cx="200" cy="200" r="60" fill="white" className="stroke-gray-100 stroke-[0.5]" />
              <text x="200" y="195" textAnchor="middle" className="text-[20px] font-bold fill-[#1d1d1f] tracking-tighter">prism</text>
              <text x="200" y="215" textAnchor="middle" className="text-[22px] font-bold fill-blue-600 tracking-tighter">ERP</text>
              
              {/* Dynamic Segment Rendering */}
              {modules.map((m, i) => {
                const angle = (i * 360) / modules.length;
                return (
                  <g key={m.id} transform={`rotate(${angle} 200 200)`}>
                    <path 
                      d="M 200 80 A 120 120 0 0 1 270 100 L 200 200 Z" 
                      className={`${m.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                    />
                    <text 
                      x="200" y="65" 
                      transform={`rotate(18 200 65)`} 
                      className="text-[10px] font-bold fill-white uppercase tracking-tighter"
                      textAnchor="middle"
                    >
                      {m.id}
                    </text>
                  </g>
                );
              })}
            </svg>
            
            {/* Soft Sapphire Glow Behind Wheel */}
            <div className="absolute -z-10 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full" />
          </div>

          {/* Right Side: Strategic Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-6">
                A Complete Business <br /> Operating System
              </h2>
              <p className="text-[#86868b] text-[16px] leading-relaxed font-medium max-w-lg">
                PrismERP can simply automate and handle all of the daily operations of your organization, 
                including manufacturing, services, human resource management, lead to customer 
                management, financial management, and others.
              </p>
            </div>

            <div className="space-y-10">
              {/* Benefit 1 */}
              <div>
                <h4 className="text-[15px] font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  One Common Database
                </h4>
                <p className="text-[#86868b] text-[14px] leading-relaxed max-w-md">
                  Helps in data duplication and organises your business efficiently. Information is 
                  channeled across departments and centralized using PrismERP.
                </p>
              </div>

              {/* Benefit 2 */}
              <div>
                <h4 className="text-[15px] font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  Improved Visibility
                </h4>
                <p className="text-[#86868b] text-[14px] leading-relaxed max-w-md">
                  Achieved by the tracking of all in & out of goods which helps cut down on wasteful spending, 
                  prevents cash from being blocked, and prevents additional costs from arising.
                </p>
              </div>

              {/* Benefit 3 */}
              <div>
                <h4 className="text-[15px] font-bold text-[#1d1d1f] uppercase tracking-wider mb-2">
                  Expanded Collaboration & Workflows
                </h4>
                <p className="text-[#86868b] text-[14px] leading-relaxed max-w-md">
                  Enabled by your employees having access to necessary data just when needed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperatingSystemSection;