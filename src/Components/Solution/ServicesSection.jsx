import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "CRM & ERP",
      desc: "For companies that need a custom solution to organize better the workflow and improve their productivities.",
    },
    {
      title: "Software Development",
      desc: "Tailormade software development provided with a dedicated team of experts turning ideas into high-end digital products.",
    },
    {
      title: "IoT & AI",
      desc: "Intelligent software for smart devices and machine learning. Research and development teams focused on high-tech solutions.",
    },
    {
      title: "Web and Cross Platform",
      desc: "Experts in cutting-edge web and platform development, utilizing innovative technologies and agile methodologies.",
    },
  ];

  return (
    <section className="py-24 px-4 antialiased bg-gradient-to-br from-[#0f172a]/[0.02] via-white to-[#1e40af]/[0.02]">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        
        {/* Editorial Header Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          

          {/* Heading */}
          <div className="lg:col-span-6">
            <h2 className="text-[36px] md:text-[54px] font-bold tracking-tighter leading-[1.05] text-[#1d1d1f]">
              We serve as more than just <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                technical experts;
              </span>{" "}
              we stand as your <br />
              committed tech ally.
            </h2>
          </div>

          {/* Subheading & CTA */}
          <div className="lg:col-span-5 lg:pl-12 flex flex-col justify-end">
            <p className="text-[#86868b] text-[15px] md:text-[16px] leading-relaxed font-medium mb-8 max-w-sm">
              Agilis is dedicated to assisting your organization in realizing its complete potential, 
              addressing challenges hindering growth and sustainability.
            </p>
            <Link 
              to="/about"
              className="w-fit px-8 py-3 rounded-full border border-gray-200 text-[#1d1d1f] font-bold text-sm hover:bg-[#1d1d1f] hover:text-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* 1x4 Minimal Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-10 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 flex flex-col min-h-[300px]"
            >
              <h3 className="text-[20px] font-bold text-[#1d1d1f] tracking-tight mb-6">
                {service.title}
              </h3>
              <p className="text-[#86868b] text-[14px] leading-relaxed font-medium">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-8">
                <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#1d1d1f] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;