import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const ModernSlavery = () => {
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
              Modern Slavery Act{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                2015 Statement
              </span>
            </h1>

            <p className="text-[#86868b] font-medium text-sm mb-10">
              Effective Date: [Insert Date] | Last Updated: [Insert Date]
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

            {/* Commitment */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Our Commitment</h2>
              <p className="text-[#86868b] leading-relaxed">
                Agilis is dedicated to combating all forms of modern slavery, including forced labor, child labor, human trafficking, and exploitation. We operate under a zero-tolerance policy and take proactive steps to ensure these practices have no place in our operations or supply chains.
              </p>
            </div>

            {/* Structure & Operations */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Our Structure and Operations</h2>
              <p className="text-[#86868b] leading-relaxed">
                Agilis is a technology company specializing in ERP solutions, FTTx network planning, creative services, and software development. Headquartered in London, UK, we collaborate with clients and suppliers globally. While our operations are primarily office-based, we monitor risks in our extended supply chains.
              </p>
            </div>

            {/* Risk Assessment & Due Diligence */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Risk Assessment and Due Diligence</h2>
              
              <h3 className="font-semibold text-[#1d1d1f] mb-2">Supply Chain Transparency</h3>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Conduct risk assessments of suppliers to identify modern slavery risks.</li>
                <li>Require suppliers to provide evidence of compliance with the Modern Slavery Act 2015 and ethical standards.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Supplier Code of Conduct</h3>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Maintain a Supplier Code of Conduct outlining labor practices, wages, and working conditions.</li>
                <li>Require suppliers to contractually adhere to anti-slavery and anti-trafficking policies.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Internal Policies</h3>
              <p className="text-[#86868b] mb-4">
                Implement internal policies, including an Anti-Slavery and Human Trafficking Policy, to ensure all employees understand their responsibilities.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Employee Awareness and Training</h3>
              <p className="text-[#86868b]">
                Provide training to employees on identifying and addressing modern slavery risks and encourage confidential reporting.
              </p>
            </div>

            {/* Monitoring & Accountability */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Monitoring and Accountability</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Periodic reviews and audits of suppliers and operations.</li>
                <li>Collaboration with third-party organizations to enhance due diligence.</li>
                <li>Leadership oversight to ensure implementation of anti-slavery commitments.</li>
              </ul>
            </div>

            {/* Future Steps */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Future Steps</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Expand supplier audits and engagement with high-risk suppliers.</li>
                <li>Regularly update training programs to reflect evolving risks and regulations.</li>
                <li>Publish annual updates on anti-slavery initiatives.</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Contact Us</h2>
              <p className="text-[#86868b] leading-relaxed">
                If you have questions or wish to raise concerns regarding modern slavery or human trafficking in our operations, please contact: <br />
                Email: [Insert Contact Email] <br />
                Address: [Insert Address]
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default ModernSlavery;
