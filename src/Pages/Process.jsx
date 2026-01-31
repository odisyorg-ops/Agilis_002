import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.12 }
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
  return (
    <main className="bg-white antialiased overflow-hidden">

      {/* ================= HERO / BANNER ================= */}
      <section className="relative py-32 px-4">
        <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-[42px] md:text-[64px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-6">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                Process
              </span>
            </h1>

            <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-xl mb-10">
              Our process ensures efficiency, quality, and satisfaction—transforming ideas into reality
              through seamless, innovative solutions.
            </p>

            <button className="px-10 py-4 rounded-full bg-[#1d1d1f] text-white font-bold text-sm transition-all duration-500
              shadow-[0_15px_40px_-10px_rgba(30,64,175,0.4)]
              hover:shadow-[0_20px_50px_-10px_rgba(30,64,175,0.6)]
              hover:bg-blue-600 active:scale-95">
              Get Started
            </button>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <img
              src="/src/assets/Office Meeting Scene.png"
              alt="Process"
              className="w-full h-[420px] object-cover rounded-xl shadow-lg"
            />
            <div className="absolute -z-10 -bottom-10 -right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ================= INITIAL CONSULTATION ================= */}
      <section className="py-24 px-4">
        <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeUp}
              className="text-[32px] md:text-[48px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-6">
              Initial Consultation
            </motion.h2>

            <motion.p variants={fadeUp}
              className="text-[#86868b] text-[16px] leading-relaxed font-medium mb-10 max-w-lg">
              Our process begins with listening. We collaborate closely to understand your goals,
              challenges, and expectations to shape a solution that truly fits.
            </motion.p>

            <motion.div variants={stagger} className="space-y-6">
              {[
                "Personalized approach ensuring your goals are met efficiently",
                "Expert guidance from experienced professionals",
                "Strategic planning tailored to your vision",
                "Efficient execution with quality and timeliness"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="text-blue-600 mt-1" size={20} />
                  <p className="text-[#86868b] text-[15px] leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-[#0f172a]/[0.02] to-[#1e40af]/[0.02] border border-gray-100 rounded-xl shadow-sm"
          >
            <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">
              Understanding Your Vision
            </h4>
            <p className="text-[#86868b] text-[15px] leading-relaxed font-medium">
              Every successful project starts with clarity. Our consultations are designed
              to uncover insights, align expectations, and establish a strong foundation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONSULTATION FLOW ================= */}
    

<section className="py-24 px-4">
  <div className="w-[95vw] md:w-[80vw] mx-auto">

    {/* Heading */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mb-20 max-w-3xl"
    >
      <h2 className="text-[32px] md:text-[48px] font-bold tracking-tighter text-[#1d1d1f] mb-6">
        Consultation Flow
      </h2>
      <p className="text-[#86868b] text-[16px] leading-relaxed font-medium">
        A structured, step-by-step approach that ensures clarity, alignment,
        and consistent results.
      </p>
    </motion.div>

    {/* Timeline */}
    <ul className="timeline timeline-vertical">

      {/* Phase 1 */}
      <li>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="timeline-start timeline-box bg-white border border-gray-100 shadow-sm rounded-xl p-8 max-w-md"
        >
          <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600">
            Phase 1
          </span>
          <h3 className="text-[22px] font-bold text-[#1d1d1f] mt-3 mb-3">
            Discovery
          </h3>
          <p className="text-[#86868b] text-[14px] leading-relaxed font-medium">
            We understand your needs, goals, and challenges to build a tailored strategy.
          </p>
        </motion.div>

        <div className="timeline-middle">
          <div className="h-4 w-4 rounded-full bg-blue-600"></div>
        </div>
        <hr />
      </li>

      {/* Phase 2 */}
      <li>
        <hr />
        <div className="timeline-middle">
          <div className="h-4 w-4 rounded-full bg-blue-600"></div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="timeline-end timeline-box bg-white border border-gray-100 shadow-sm rounded-xl p-8 max-w-md"
        >
          <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600">
            Phase 2
          </span>
          <h3 className="text-[22px] font-bold text-[#1d1d1f] mt-3 mb-3">
            Strategy Development
          </h3>
          <p className="text-[#86868b] text-[14px] leading-relaxed font-medium">
            A personalized plan is crafted to align perfectly with your vision.
          </p>
        </motion.div>
        <hr />
      </li>

      {/* Phase 3 */}
      <li>
        <hr />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="timeline-start timeline-box bg-white border border-gray-100 shadow-sm rounded-xl p-8 max-w-md"
        >
          <span className="text-[12px] font-bold uppercase tracking-widest text-blue-600">
            Phase 3
          </span>
          <h3 className="text-[22px] font-bold text-[#1d1d1f] mt-3 mb-3">
            Execution & Review
          </h3>
          <p className="text-[#86868b] text-[14px] leading-relaxed font-medium">
            We implement, review, and refine to ensure satisfactory results.
          </p>
        </motion.div>

        <div className="timeline-middle">
          <div className="h-4 w-4 rounded-full bg-blue-600"></div>
        </div>
      </li>

    </ul>
  </div>
</section>







      {/* ================= SOLUTIONS ================= */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#0f172a]/[0.02] via-white to-[#1e40af]/[0.02]">
        <div className="w-[95vw] md:w-[80vw] mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-20 max-w-2xl"
          >
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tighter text-[#1d1d1f] mb-6">
              Strategize, Execute, and Thrive
            </h2>
            <p className="text-[#86868b] text-[16px] leading-relaxed font-medium">
              Our integrated solutions empower you to deliver value, clarity, and confidence.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              "Investment strategies",
              "Financial planning",
              "Insurance & annuities",
              "Integrated technology"
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-10 bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <h4 className="text-[18px] font-bold text-[#1d1d1f] mb-4">
                  {item}
                </h4>
                <p className="text-[#86868b] text-[14px] leading-relaxed font-medium">
                  Designed to give you flexibility, clarity, and full control.
                </p>

                <div className="mt-auto pt-8">
                  <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Process;

