import React from 'react';
import { motion } from 'framer-motion';
import kasem from "../../assets/kasem.jpeg";
import harun from "../../assets/harun.jpeg";

const LeaderCard = ({ name, role, imageSrc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    className="flex-1 flex flex-col"
  >
    {/* Image Container with high-end "Soft Shadow" and Squircle corners */}
    <div className="w-full aspect-[4/5] overflow-hidden rounded-[1rem] bg-[#f5f5f7] mb-10 relative group">
      <motion.img
        src={imageSrc}
        alt={name}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full object-cover"
      />
      {/* Micro-interaction: Subtle glass-morphism overlay on hover */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-700" />
    </div>

    {/* Typography - Perfectly Centered and Balanced */}
    <div className="space-y-2">
      <h3 className="text-[28px] md:text-[32px] font-bold text-[#1d1d1f] tracking-tight">
        {name}
      </h3>
      <p className="text-blue-800 font-semibold text-[17px] md:text-[19px] tracking-tight uppercase">
        {role}
      </p>
    </div>
  </motion.div>
);

const TeamSection = () => {
  const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

  return (
    <section className="py-32 px-4 bg-white antialiased">
      <div className="w-[95vw] md:w-[80vw]  mx-auto">
        
        {/* Centered Heading Layout */}
        <div className="text-start mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: headingSize }} 
            className="font-bold tracking-tighter leading-[1.1] mb-6 text-[#1d1d1f]"
          >
            Mind Behind Agilis.
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

        {/* Symmetrical 2-Column Pillar Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full">
          <LeaderCard 
            name="Harun" 
            role="CEO & Founder" 
            imageSrc={harun} 
            delay={0.2}
          />
          <LeaderCard 
            name="Kashem" 
            role="CEO & Founder" 
            imageSrc={kasem} 
            delay={0.4}
          />
        </div>

      </div>
    </section>
  );
};

export default TeamSection;