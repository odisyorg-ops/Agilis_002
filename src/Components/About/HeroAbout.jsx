import React from "react";
import aboutHeroImage from "../../assets/Office Team Meeting.png";

const HeroAbout = () => {
  // Balanced typography for a clean, expert presence
  const headingSize = "text-[34px] md:text-[56px]";

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center bg-black px-4 antialiased overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Placeholder for your future image */}
        <div style={{ backgroundImage: `url(${aboutHeroImage})` }} className="w-full h-full bg-cover bg-bottom" /> 
        {/* <div className="w-full h-full bg-[radial-gradient(circle_at_50%_0%,#111827_40%,#000000_90%)]" /> */}
        {/* Dark bottom-to-top gradient: Ensures legibility against any image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="w-[95vw] md:w-[80vw] mx-auto relative z-10">
        <div className="max-w-4xl">
          {/* Top Label: Adds a touch of editorial structure */}
          <span className="text-[12px] font-bold uppercase tracking-[0.1em] text-blue-200 mb-6 block">
            The Agilis Story
          </span>

          <h1 
            className={`${headingSize} font-bold tracking-tighter leading-[1.05] mb-8 text-white`}
          >
            Guided by purpose. <br />
            <span className="text-white">
              Defined by partnership.
            </span>
            {/* <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#1e40af] to-[#60a5fa]">
              Defined by partnership.
            </span> */}
          </h1>
          
          <p className="text-white text-[18px] md:text-[21px] font-medium leading-relaxed tracking-tight max-w-2xl">
            Agilis is a reliable long-term solution-oriented tech ally, specializing in custom-tailored web platforms, mobile apps, IOT, and AI-driven software.
          </p>
        </div>
      </div>

      {/* Optional: Subtle Scroll Indicator (Common in 100vh designs) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default HeroAbout;