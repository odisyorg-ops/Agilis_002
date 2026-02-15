import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CSR = () => {
  return (
    <main className="bg-white antialiased overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-4 bg-gray-50">
        <div className="w-[95vw] md:w-[80vw] mx-auto">
          
          <motion.div variants={fadeUp} initial="hidden" animate="visible">

            {/* BACK BUTTON */}
            <Link to="/terms">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mb-10 flex items-center gap-2 py-2 px-5 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-semibold text-sm shadow-md shadow-blue-900/20"
              >
                <ArrowLeft size={16}/> Back
              </motion.button>
            </Link>

            <h1 className="text-[36px] md:text-[56px] font-bold tracking-tight text-[#1d1d1f] mb-4">
              Corporate Social Responsibility{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                (CSR)
              </span>
            </h1>

            <p className="text-[#86868b] font-medium text-sm mb-10">
              At Agilis, we are committed to creating a positive impact on society and the environment through sustainable innovation, community empowerment, and ethical business practices.
            </p>

          </motion.div>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 px-4">
        <div className="w-[95vw] md:w-[70vw] mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50"
          >

            {/* Vision */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Vision</h2>
              <p className="text-[#86868b] leading-relaxed">
                At Agilis, our CSR initiatives reflect our belief in technology as a force for good and our responsibility to contribute to a better world.
              </p>
            </div>

            {/* Key CSR Pillars */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Key CSR Pillars</h2>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Sustainability and Environmental Responsibility</h3>
              <ul className="list-disc pl-6 text-[#86868b] mb-4 space-y-1">
                <li>Partner with environmental organizations to develop digital tools for tracking and reducing carbon emissions.</li>
                <li>Implement eco-friendly practices in operations, such as energy-efficient IT infrastructure and waste reduction programs.</li>
                <li>Support renewable energy projects through sponsorship or employee volunteer efforts.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Empowering Digital Education</h3>
              <ul className="list-disc pl-6 text-[#86868b] mb-4 space-y-1">
                <li>Launch Agilis Tech Academy to provide free or subsidized ERP and software development training for underprivileged students.</li>
                <li>Offer scholarships or internships to talented young professionals pursuing technology careers.</li>
                <li>Develop educational content or tools focused on digital literacy for underserved communities.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Community Development through Technology</h3>
              <ul className="list-disc pl-6 text-[#86868b] mb-4 space-y-1">
                <li>Design and implement ERP systems for NGOs and non-profits at minimal cost.</li>
                <li>Create partnerships with government or local agencies for smart city solutions (e.g., rural connectivity).</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Promoting Gender Equality and Inclusion</h3>
              <ul className="list-disc pl-6 text-[#86868b] mb-4 space-y-1">
                <li>Hire and develop women in technology through mentorship programs and leadership workshops.</li>
                <li>Ensure diversity and inclusion in recruitment, fostering an inclusive work environment.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Health and Well-Being</h3>
              <ul className="list-disc pl-6 text-[#86868b] mb-4 space-y-1">
                <li>Develop mobile/web apps for healthcare organizations to improve patient care management.</li>
                <li>Sponsor or participate in community wellness events, e.g., mental health campaigns or fitness drives.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Employee Volunteering and Social Engagement</h3>
              <ul className="list-disc pl-6 text-[#86868b] mb-4 space-y-1">
                <li>Encourage employees to volunteer their skills to support community projects.</li>
                <li>Organize team-based community engagement programs, such as beach clean-ups, tree plantations, or hackathons.</li>
              </ul>
            </div>

            {/* Annual CSR Highlights */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Annual CSR Highlights</h2>
              <p className="text-[#86868b] leading-relaxed">
                Agilis will publish an annual CSR report to showcase progress, share success stories, and reaffirm its commitment to social and environmental responsibility.
              </p>
            </div>

            {/* Call to Action */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Call to Action</h2>
              <p className="text-[#86868b] leading-relaxed">
                By integrating our technical expertise with a passion for making a difference, Agilis aims to be a leader in both innovation and social responsibility. Together, we can build a sustainable future for businesses, communities, and the planet.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default CSR;
