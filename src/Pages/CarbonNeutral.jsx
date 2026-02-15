import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CarbonNeutral = () => {
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
              Carbon Neutral{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                Commitment
              </span>
            </h1>

            <p className="text-[#86868b] font-medium text-sm mb-10">
              At Agilis, we believe that innovation goes hand in hand with environmental responsibility.
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

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Our Carbon Neutral Goals</h2>
              
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Measure and Reduce Emissions</h3>
              <p className="text-[#86868b] mb-4">
                We aim to systematically measure our carbon emissions across all areas of operation, including office activities, digital infrastructure, and supply chain processes. Our priority is to reduce emissions at the source by adopting energy-efficient practices and technologies.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Offset Unavoidable Emissions</h3>
              <p className="text-[#86868b] mb-2">
                For emissions that cannot be eliminated, we invest in verified carbon offset programs that align with global standards. These initiatives may include:
              </p>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Reforestation projects</li>
                <li>Renewable energy development</li>
                <li>Community-based conservation programs</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Promote a Sustainable Workplace</h3>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Transition to 100% renewable energy sources in our offices and data centers by [insert year].</li>
                <li>Reduce waste by adopting paperless processes and sustainable materials.</li>
                <li>Implement company-wide initiatives to encourage eco-friendly commuting options, such as carpooling and public transit incentives.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Partner for a Greener Future</h3>
              <p className="text-[#86868b] mb-4">
                We actively collaborate with industry partners and clients to integrate environmentally sustainable practices into our projects and services. This includes offering innovative solutions like energy-efficient ERP systems and digital tools that help organizations reduce their carbon footprints.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Engage and Educate</h3>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Host workshops and training sessions for employees on sustainable practices.</li>
                <li>Raise awareness about climate change and sustainability within our communities.</li>
                <li>Share annual reports on our progress toward carbon neutrality.</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Our Progress</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Yearly Carbon Audits: Regularly conducted to track progress and identify new opportunities for reduction.</li>
                <li>Partnerships: Working with certified carbon offset organizations to ensure the credibility and impact of our efforts.</li>
                <li>Achievements: [Add recent achievements if applicable, e.g., “Achieved a 30% reduction in emissions in 2023.”]</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Looking Ahead</h2>
              <p className="text-[#86868b]">
                Our journey to carbon neutrality is a long-term commitment that requires collaboration, innovation, and persistence. By integrating sustainable practices into our operations and offering environmentally conscious solutions, we aim to lead by example in the technology sector.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Get Involved</h2>
              <p className="text-[#86868b]">
                We invite our partners, clients, and employees to join us in our mission to achieve a greener, carbon-neutral future. Together, we can innovate responsibly and leave a positive impact on the planet.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default CarbonNeutral;
