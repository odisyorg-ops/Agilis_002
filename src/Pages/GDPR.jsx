import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const GDPR = () => {
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
              GDPR Compliance{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                Statement
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

            {/* 1. Commitment */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">1. Our Commitment</h2>
              <p className="text-[#86868b] leading-relaxed">
                Agilis processes personal data lawfully, fairly, and transparently, ensuring collection is for specific, legitimate purposes. Data is kept accurate, limited to necessary information, protected with security measures, and retained only as long as needed.
              </p>
            </div>

            {/* 2. Your Rights */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">2. Your Rights Under GDPR</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Right to Access</li>
                <li>Right to Rectification</li>
                <li>Right to Erasure (Right to be Forgotten)</li>
                <li>Right to Restrict Processing</li>
                <li>Right to Data Portability</li>
                <li>Right to Object</li>
                <li>Right to Withdraw Consent</li>
                <li>Right to Lodge a Complaint</li>
              </ul>
            </div>

            {/* 3. Data We Collect */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">3. What Personal Data We Collect</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Identifiers: name, email, phone, company details.</li>
                <li>Technical data: IP address, browser type, usage patterns.</li>
                <li>Additional info voluntarily provided via forms or communication.</li>
              </ul>
            </div>

            {/* 4. How We Use Data */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">4. How We Use Your Personal Data</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Deliver requested products or services.</li>
                <li>Communicate updates, promotions, or support info.</li>
                <li>Analyze website performance and user behavior.</li>
                <li>Comply with legal obligations and secure our systems.</li>
              </ul>
            </div>

            {/* 5. Data Sharing */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">5. Data Sharing</h2>
              <p className="text-[#86868b] leading-relaxed">
                Agilis does not sell personal data. We may share data with service providers for operational purposes and legal authorities where required. All third parties are bound by strict confidentiality and GDPR-compliant contracts.
              </p>
            </div>

            {/* 6. Security Measures */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">6. Security Measures</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Encryption of sensitive data.</li>
                <li>Regular security audits and staff training.</li>
                <li>Access controls limiting data to authorized personnel.</li>
              </ul>
            </div>

            {/* 7. Data Retention */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">7. Data Retention</h2>
              <p className="text-[#86868b] leading-relaxed">
                Personal data is retained only as long as necessary to fulfill purposes or comply with legal obligations. Specific periods are outlined in our Privacy Policy.
              </p>
            </div>

            {/* 8. International Transfers */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">8. International Data Transfers</h2>
              <p className="text-[#86868b] leading-relaxed">
                Where data is transferred outside the EEA, we ensure adequate safeguards, such as Standard Contractual Clauses (SCCs), are in place.
              </p>
            </div>

            {/* 9. Contact Us */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">9. Contact Us</h2>
              <p className="text-[#86868b] leading-relaxed">
                Data Protection Officer (DPO): <br />
                Email: [Insert DPO Email Address] <br />
                Phone: [Insert DPO Contact Number] <br />
                Address: [Insert Address]
              </p>
            </div>

            {/* 10. Updates */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">10. Updates to This Statement</h2>
              <p className="text-[#86868b] leading-relaxed">
                We may update this GDPR Compliance Statement periodically. Please check this page for the latest updates.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default GDPR;
