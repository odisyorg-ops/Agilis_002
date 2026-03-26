import React from 'react';
import prismerp from "../../assets/prismerp.png";

const OperatingSystemSection = () => {
  const modules = [
    { id: "FMS", label: "Financial Management" },
    { id: "SCM", label: "Supply Chain" },
    { id: "SDM", label: "Sales & Distribution" },
    { id: "HCM", label: "Human Capital" },
    { id: "PPC", label: "Production Planning" },
    { id: "PRD", label: "Productivity" },
    { id: "CRM", label: "Customer Relationship" },
    { id: "ADM", label: "Administrative" },
    { id: "CSC", label: "Service Center" },
    { id: "PS", label: "Project Systems" },
  ];

  return (
    <section className="py-24 bg-[#fbfbfd] text-[#1d1d1f] antialiased overflow-hidden">
      <div className="w-[95vw] md:w-[80vw] mx-auto">

        {/* --- Hero Header --- */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-[#1d1d1f] mb-6">
            A Complete Business <br className="hidden md:block" /> Operating System.
          </h2>
          <p className="text-[18px] md:text-[22px] text-[#86868b] font-medium max-w-4xl mx-auto leading-relaxed">
            PrismERP can simply automate and handle all of the daily operations of your organization,
            including manufacturing, services, human resource management, lead to customer
            management, financial management, and others.
          </p>
        </div>

        {/* --- Bento Grid: Image & Benefits --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">

          {/* Left: Visual Card */}
          <div className="bg-white rounded-[32px] p-8 md:p-16 flex items-center justify-center border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group">
            <img
              className="w-full max-w-[550px] object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              src={prismerp}
              alt="PrismERP Interface"
            />
          </div>

          {/* Right: Benefits Cards */}
          <div className="grid grid-rows-3 gap-6 md:gap-8">
            {[
              {
                title: "One Common Database",
                desc: "Helps in data duplication and organises your business efficiently. Information is channeled across departments and centralized using PrismERP."
              },
              {
                title: "Improved Visibility",
                desc: "Achieved by the tracking of all in & out of goods which helps cut down on wasteful spending, prevents cash from being blocked, and prevents additional costs from arising."
              },
              {
                title: "Expanded Collaboration",
                desc: "Expanded collaboration & workflows is enabled by your employees having access to necessary data just when needed."
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col justify-center"
              >
                <h4 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] tracking-tight mb-3">
                  {benefit.title}
                </h4>
                <p className="text-[#86868b] text-[15px] md:text-[17px] leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Modules Ecosystem (Dark Pro Mode) --- */}
        <div className="bg-[#1d1d1f] rounded-[32px] p-10 md:p-16 text-white relative overflow-hidden shadow-xl border border-white/5">
          {/* Animated Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse" />

          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-12 text-center text-white/80">
              Integrated Ecosystem
            </h3>

            {/* Symmetrical Flex Container */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className="group relative w-1/6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-center gap-4 transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/20 min-w-[160px] md:min-w-[200px]"
                >
                  {/* Micro-Interaction: Subtle Internal Glow on Hover */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 rounded-2xl " />

                  {/* Symmetrical Content */}
                  <span className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                    {module.id}
                  </span>

                  <span className="w-[1px] h-5 bg-white/10 group-hover:bg-white/30 transition-colors duration-300" />

                  <span className="text-sm md:text-[15px] font-medium tracking-tight text-white/70 group-hover:text-white transition-colors duration-300">
                    {module.label}
                  </span>

                  {/* Micro-Interaction: Underline expansion */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-blue-500/40 group-hover:w-1/2 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OperatingSystemSection;