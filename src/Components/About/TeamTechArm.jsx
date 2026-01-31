import React from 'react';
import techImage from "../../assets/Modern Meeting Room.png"

const TeamTechArm = () => {
    const roles = ["Product Owners", "Project Managers", "UI/UX Innovators", "Full-stack Developers", "Cloud Architects", "QA Experts"];

    return (
        <section className="py-24 bg-[#0a0a0b] text-white overflow-hidden antialiased min-h-[100vh]">
            <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <h2 className="text-[40px] md:text-[52px] font-bold tracking-tighter leading-tight">
                        Your Dedicated <br />
                        <span className="text-blue-500">Tech Arm</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Agilis provides a turnkey solution with critical-thinking experts working seamlessly together to turn business ideas into future-ready digital products.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {roles.map((role, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-300">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                                {role}
                            </div>
                        ))}
                    </div>
                </div>
<div style={{ backgroundImage: `url(${techImage})` }} className="aspect-4/3 bg-cover bg-center rounded-xl " /> {/* Replaceable Image */}            </div>
        </section>
    );
};

export default TeamTechArm;