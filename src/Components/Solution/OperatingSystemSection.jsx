import React from 'react';
import prismerp from "../../assets/prismerp.png";

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
          <div><img className='size-[550px]' src={prismerp} alt="prism" /></div>

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