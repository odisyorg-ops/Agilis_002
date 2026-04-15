import React from 'react';
import { motion } from 'framer-motion';

// Asset Imports
import kasem from "../../assets/kasem.jpeg";
import harun from "../../assets/harun.jpeg";
import russell from "../../assets/Russel.jpeg";
import russell2 from "../../assets/Rusell2.png";

// 1. Data Configuration
const TEAM_MEMBERS = [
  {
    name: "Harun",
    role: "CEO & Founder",
    image: harun,
  },
  {
    name: "Kashem",
    role: "CTO & Founder",
    image: kasem,
  },
  {
    name: "Russell",
    role: "Partner & Advisor (CEO of Divine IT Limited)",
    image: russell2,
  },
];

// 2. Reusable Component
const LeaderCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col group"
  >
    {/* Image Container */}
    <div className="w-full aspect-[4/5] overflow-hidden rounded-[1rem] bg-[#f5f5f7] mb-8 relative">
      <motion.img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6 }}
      />
      {/* Subtle overlay hint */}
      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* Typography */}
    <div className="space-y-2">
      <h3 className="text-[24px] lg:text-[28px] font-bold text-[#1d1d1f] tracking-tight">
        {member.name}
      </h3>
      <p className="text-blue-800 font-semibold text-[15px] lg:text-[17px] tracking-tight uppercase leading-snug">
        {member.role}
      </p>
    </div>
  </motion.div>
);

const TeamSection = () => {
  const headingSize = "clamp(2.5rem, 5vw, 4rem)";

  return (
    <section className="py-32 px-4 bg-white antialiased">
      <div className="max-w-[85vw] mx-auto lg:px-12">
        
        {/* Header Section */}
        <div className="text-start mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: headingSize }} 
            className="font-bold tracking-tighter leading-[1.1] mb-6 text-[#1d1d1f]"
          >
            Minds Behind Agilis.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#86868b] text-[19px] md:text-[22px] font-medium max-w-2xl leading-relaxed"
          >
            A partnership driven by technical precision and <br className="hidden md:block" /> 
            a commitment to enterprise-grade excellence.
          </motion.p>
        </div>

        {/* 1 Row 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {TEAM_MEMBERS.map((member, index) => (
            <LeaderCard 
              key={member.name} 
              member={member} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;