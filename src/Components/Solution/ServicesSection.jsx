import React from "react";
import { Link } from "react-router-dom";

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
    <section className="py-24 px-4 antialiased bg-white">
      <div className="w-[95vw] md:w-[80vw] mx-auto">

        {/* Editorial Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

          {/* Heading */}
          <div className="lg:col-span-7">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-tighter leading-[1.05] text-[#1d1d1f]">
              We serve as more than just <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] to-[#000000] pb-2">
                technical experts;
              </span>{" "}
              we stand <br className="hidden md:block" />
              as your committed tech ally.
            </h2>
          </div>

          {/* Subheading & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-end lg:pb-2">
            <p className="text-[#86868b] text-[17px] md:text-[19px] leading-[1.4] font-medium mb-8 max-w-sm tracking-tight">
              Agilis is dedicated to assisting your organization in realizing its complete potential through precision engineering.
            </p>
            <Link
              to="/about"
              className="w-fit text-blue-600 font-semibold text-[17px] hover:underline flex items-center gap-1 group"
            >
              Learn more about our process
              <span className="text-[20px] mb-0.5 inline-block group-hover:translate-x-1 transition-transform duration-300">›</span>
            </Link>
          </div>
        </div>

        {/* 1x4 Symmetrical Minimal Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-10 bg-[#f5f5f7] rounded-[2rem] flex flex-col border border-transparent hover:bg-white hover:border-gray-200 transition-all duration-500 ease-in-out"
            >
              <h3 className="text-[22px] font-bold text-[#1d1d1f] tracking-tight mb-4">
                {service.title}
              </h3>
              <p className="text-[#86868b] text-[15px] leading-relaxed font-medium tracking-tight">
                {service.desc}
              </p>

              {/* Optional: Minimal decorative spacer */}
              <div className="mt-12 h-[1px] w-8 bg-gray-300 group-hover:w-full group-hover:bg-blue-500 transition-all duration-700" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;