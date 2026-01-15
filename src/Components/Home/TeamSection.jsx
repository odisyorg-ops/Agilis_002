import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = ({ name, role, imageSrc }) => (
    <div className="flex flex-col group antialiased">
        {/* Profile Image with grayscale filter and smooth scaling */}
        <div className="w-full aspect-square overflow-hidden rounded-2xl mb-6 bg-[#f5f5f7]">
            <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />
        </div>
        
        {/* Apple-style Typography for Name */}
        <h3 className="text-[20px] md:text-[22px] font-bold text-[#1d1d1f] mb-1 tracking-tight leading-tight">
            {name}
        </h3>
        
        {/* Apple-style Typography for Role */}
        <p className="text-[#86868b] font-medium text-[15px] md:text-[17px] tracking-tight">
            {role}
        </p>
    </div>
);

const TeamSection = () => {
    // Apple Display style heading scale
    const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

    const teamMembers = [
        { name: "Ethan Carter", role: "CEO & founder", imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" },
        { name: "Lucas Bennett", role: "Finance manager", imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800" },
        { name: "Sophia Reynolds", role: "Support manager", imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800" },
    ];

    return (
        <section className="py-24 px-4 overflow-hidden antialiased">
            <div className="w-[95vw] md:w-[80vw] mx-auto">

                {/* Apple-style Heading with signature Gradient */}
                <div className="mb-16 md:mb-24">
                    <h2 
                        style={{ fontSize: headingSize }} 
                        className="font-bold tracking-tighter leading-[1.02] pb-2"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-400 to-[#1d1d1f]">
                            Our team
                        </span>
                    </h2>
                    <p className="text-[#86868b] text-[19px] md:text-[21px] font-medium mt-4 max-w-2xl leading-[1.4] tracking-tight">
                        A collective of passionate individuals driven by a shared purpose and a commitment to excellence.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                        >
                            <ProfileCard {...member} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;