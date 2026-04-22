import React from "react";
import {
  CheckCircle, Calendar, Clock, Users, ArrowRight, Search,
  Map, Rocket, Zap, LineChart
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Fixed import from "react-router" to "react-router-dom"

// Asset Imports
import officeImage from "../assets/Office Discussion Scene.png";
import img1 from "../assets/Professional Meeting Scene.png";
import img2 from "../assets/Business Analytics in Action.png";
import img3 from "../assets/Professional Discussion.png";
import img4 from "../assets/Futuristic Robotic Hand.png";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Process = () => {
  // Main section content
  const sectionContent = {
    topBadge: "The Agilis Methodology",
    mainTitle: "Strategize. Execute. ",
    mainTitleAccent: "Thrive.",
    subHeading: "We don't just deploy software; we architect growth. Our four-phase blueprint transforms operational friction into a permanent competitive advantage."
  };

  const features = [
    {
      title: "Designing for Maximum Agility",
      desc: "We architect solutions that simplify operations and create a single source of truth, allowing your team to pivot instantly.",
      icon: Zap,
      image: img2,
      tags: ["System Architecture", "Data Unification", "Agile Logic"],
    },
    {
      title: "Identifying Your Growth Catalysts",
      desc: "We pinpoint exactly where systems hold you back, discovering opportunities to recapture lost time and accelerate decision-making.",
      icon: Search,
      image: img1,
      tags: ["Gap Analysis", "Process Discovery", "ROI Mapping"],
    },
    {
      title: "Seamless Integration",
      desc: "Our deployment focuses on people. We ensure high user adoption and zero momentum loss, empowering your workforce through change.",
      icon: Users,
      image: img3,
      tags: ["User Adoption", "Change Management", "Zero Downtime"],
    },
    {
      title: "Sustaining Profitability",
      desc: "A future-proof foundation optimized for continuous improvement, turning operational data into a scalable market edge.",
      icon: LineChart,
      image: img4,
      tags: ["Margin Scaling", "Data Insights", "Market Expansion"],
    },
  ];

  const phases = [
    {
      id: "01",
      icon: Search,
      title: "Discovery",
      desc: "We pinpoint your needs, goals, and challenges to build a tailored solution.",
      accent: "bg-blue-600",
      textAccent: "text-blue-600",
      numberColor: "text-blue-50"
    },
    {
      id: "02",
      icon: Map,
      title: "Strategy Development",
      desc: "We architect a solution that simplifies your day-to-day operations.",
      accent: "bg-indigo-800",
      textAccent: "text-indigo-800",
      numberColor: "text-indigo-50"
    },
    {
      id: "03",
      icon: Rocket,
      title: "Execution & Review",
      desc: "We implement, review, and refine to ensure satisfactory results.",
      accent: "bg-blue-900",
      textAccent: "text-blue-900",
      numberColor: "text-blue-50"
    },
  ];

  return (
    <main className="bg-white antialiased overflow-hidden">
      {/* ================= HERO / BANNER ================= */}
      <section className="relative py-32 px-4">
        <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-[42px] md:text-[64px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">Process</span>
            </h1>
            <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-xl mb-10">
              Our process ensures efficiency, quality, and satisfaction—transforming ideas into reality
              through seamless, innovative solutions.
            </p>
            <Link to="/contact" className="px-10 py-4 rounded-full bg-[#1d1d1f] text-white font-bold text-sm transition-all duration-500 shadow-[0_15px_40px_-10px_rgba(30,64,175,0.4)] hover:shadow-[0_20px_50px_-10px_rgba(30,64,175,0.6)] hover:bg-blue-600 active:scale-95">
              Get Started
            </Link>
          </motion.div>

          <motion.div variants={imageReveal} initial="hidden" animate="visible" className="relative">
            <img src={officeImage} alt="Process" className="w-full h-[420px] object-cover rounded-xl shadow-lg" />
            <div className="absolute -z-10 -bottom-10 -right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ================= INITIAL CONSULTATION ================= */}
      <section className="relative py-32 px-4 overflow-hidden bg-white">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60" />
        <div className="w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6 leading-[1.1]">
              We start by <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">listening</span> to your story.
            </h2>
            <p className="text-[#86868b] text-lg leading-relaxed mb-8 max-w-lg">
              No cookie-cutter solutions here. We dive deep into your goals and challenges to architect a strategy that is uniquely yours.
            </p>
            <div className="grid gap-4">
              {["Deep-dive discovery sessions", "Technical feasibility audit", "Strategic roadmap development"].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-4 rounded-2xl bg-[#f5f5f7] hover:bg-white hover:shadow-lg hover:shadow-blue-500/5 border border-transparent hover:border-blue-100 transition-all duration-300">
                  <div className="bg-white p-2 rounded-full shadow-sm text-blue-600">
                    <CheckCircle size={18} />
                  </div>
                  <span className="font-medium text-[#1d1d1f]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-[3rem] rotate-3 scale-105" />
            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-2xl shadow-slate-200/50">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">Kickoff Meeting</h3>
                  <p className="text-sm text-gray-500 mt-1">Project Discovery Phase</p>
                </div>
                <div className="bg-blue-50 p-3 rounded-2xl text-blue-600">
                  <Calendar size={24} />
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <Clock size={16} className="text-blue-500" />
                  <span>Monday, 10:00 AM - 11:30 AM</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-medium text-slate-600">
                  <Users size={16} className="text-blue-500" />
                  <span>Strategy Team & Stakeholders</span>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex -space-x-3">
                  {["JD", "AS", "ME"].map((initials, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-500 bg-gradient-to-br from-gray-100 to-gray-300">
                      {initials}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                    +2
                  </div>
                </div>
                <button className="text-sm font-bold text-blue-600 flex items-center gap-1 group">
                  Join Call <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CONSULTATION FLOW ================= */}
      <section className="w-full py-24 px-6 bg-white overflow-hidden">
        <div className="w-[95vw] md:w-[80vw] mx-auto">
          <div className="flex flex-col items-center text-center mb-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] mb-6">
              Consultation <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">Flow</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl font-medium leading-relaxed">
              A structured, step-by-step approach that ensures clarity, alignment, and consistent results.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[12px] md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 md:-translate-x-1/2 z-0">
              <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ duration: 1.5 }} className="w-full bg-blue-900" />
            </div>

            <div className="space-y-32 relative z-10">
              {phases.map((stage, index) => {
                const isEven = index % 2 !== 0;
                return (
                  <div key={index} className="grid grid-cols-[64px_1fr] md:grid-cols-[1fr_auto_1fr] items-center w-full">
                    <div className="hidden md:flex justify-end">
                      {!isEven ? <div className="pr-12 lg:pr-20 w-full max-w-xl"><PipelineCard stage={stage} align="right" /></div> : <div className="pr-12 lg:pr-20 w-full max-w-xl opacity-0 pointer-events-none"><PipelineCard stage={stage} align="right" /></div>}
                    </div>
                    <div className="flex justify-center items-center px-4 md:px-0">
                      <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ margin: "-100px" }} className={`w-12 h-12 md:w-16 md:h-16 rounded-xl ${stage.accent} shadow-xl flex items-center justify-center text-white shrink-0 relative z-20`}>
                        <stage.icon size={28} strokeWidth={2.5} />
                      </motion.div>
                    </div>
                    <div className="flex justify-start">
                      <div className={`pl-8 md:pl-12 lg:pl-20 w-full max-w-xl ${isEven ? 'block' : 'md:hidden'}`}>
                        <PipelineCard stage={stage} align="left" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-32 flex flex-col items-center">
              <span className="text-[10px] font-black uppercase tracking-[0.1em] text-slate-900 bg-blue-100 z-20 py-2 px-4 rounded-sm">
                Ready to Launch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS (UPDATED) ================= */}
      <section className="h-[110vh] py-12 px-4 bg-[#fbfbfd] flex flex-col justify-center overflow-hidden">
        <div className="w-[90vw] lg:w-[80vw] mx-auto h-full flex flex-col">

          {/* Header Section - Reduced bottom margin to save vertical space */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            {/* Left: Title */}
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] leading-[1.05]">
                {sectionContent.mainTitle}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af] block md:inline">
                  {sectionContent.mainTitleAccent}
                </span>
              </h2>
            </div>

            {/* Right: Subheading */}
            <div className="max-w-sm">
              <p className="text-sm md:text-base text-[#86868b] leading-relaxed font-medium">
                {sectionContent.subHeading}
              </p>
            </div>
          </motion.div>

          {/* Asymmetric Bento Grid - Set to fill remaining vertical space */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-grow pb-8">
            {features.map((item, i) => {
              const isLarge = i === 0 || i === 3;

              return (
                <div
                  key={i}
                  className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 h-full
              ${isLarge ? 'md:col-span-7' : 'md:col-span-5'}`}
                >
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                  />

                  {/* Static Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />

                  {/* Content Container - Adjusted padding for vertical fit */}
                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">

                    {/* Static Badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">0{i + 1}</span>
                    </div>

                    {/* Icon & Title */}
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-600/20">
                      <item.icon size={18} className="text-white" />
                    </div>

                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>

                    {/* Static Content */}
                    <div className="opacity-100">
                      <p className="text-white/80 text-xs lg:text-sm leading-relaxed mb-4 max-w-md line-clamp-3">
                        {item.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, t) => (
                          <span
                            key={t}
                            className="text-[9px] uppercase tracking-wider font-bold text-white bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

const PipelineCard = ({ stage, align }) => (
  <motion.div
    initial={{ opacity: 1, x: align === 'right' ? -50 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ margin: "-100px" }}
    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
    className="relative bg-white p-8 md:p-10 mr-4 md:mr-0 -ml-16 md:-ml-0 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden group hover:border-blue-100 transition-all duration-300"
  >
    <span className={`absolute -bottom-6 ${align === 'right' ? '-left-6' : '-right-6'} text-9xl font-black ${stage.numberColor} leading-none select-none opacity-40 group-hover:opacity-60 transition-opacity`}>
      {stage.id}
    </span>
    <div className="relative z-10">
      <div className={`text-[10px] font-bold uppercase tracking-widest ${stage.textAccent} mb-4`}>Phase {stage.id}</div>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{stage.title}</h3>
      <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{stage.desc}</p>
    </div>
  </motion.div>
);

export default Process;