import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CCPA = () => {
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
              CCPA{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                Compliance Statement
              </span>
            </h1>

            <p className="text-[#86868b] font-medium text-sm">
              Effective Date: [Insert Date]
            </p>
            <p className="text-[#86868b] font-medium text-sm mb-10">
              Last Updated: [Insert Date]
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

            <p className="text-[#86868b] leading-relaxed mb-8">
              At Agilis, we value your privacy and are committed to complying with applicable data protection laws, including the California Consumer Privacy Act (CCPA). This statement outlines your rights under the CCPA and how we handle your personal information as a business operating in or serving residents of California.
            </p>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Your Rights Under the CCPA</h2>
              <p className="text-[#86868b] mb-4">
                The CCPA grants California residents specific rights regarding their personal information. These include:
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Right to Know</h3>
              <p className="text-[#86868b] mb-4">
                You have the right to request information about the personal data we collect, use, disclose, or sell over the past 12 months, including:
              </p>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Categories of personal information collected.</li>
                <li>Categories of sources from which personal information is collected.</li>
                <li>Business or commercial purpose for collecting or selling personal information.</li>
                <li>Categories of third parties with whom personal information is shared.</li>
                <li>Specific pieces of personal information collected about you.</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Right to Delete</h3>
              <p className="text-[#86868b] mb-4">
                You can request that we delete your personal information, subject to certain exceptions (e.g., compliance with legal obligations).
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Right to Opt-Out of Sale</h3>
              <p className="text-[#86868b] mb-4">
                If we sell personal information, you have the right to opt-out of the sale. Note: Agilis does not sell personal information.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Right to Non-Discrimination</h3>
              <p className="text-[#86868b]">
                You have the right to access our services without discrimination, even if you exercise your privacy rights under the CCPA.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">What Personal Information We Collect</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Identifiers: Name, email address, IP address.</li>
                <li>Commercial Information: Records of services purchased.</li>
                <li>Internet Activity: Browsing behavior on our website.</li>
                <li>Professional or Employment-Related Information: Company name, job title, and industry.</li>
              </ul>
              <p className="text-[#86868b] mt-4">
                For detailed information about the data we collect, please refer to our Privacy Policy.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">How We Use Personal Information</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Provide and enhance our services.</li>
                <li>Communicate with you regarding inquiries, updates, or promotions.</li>
                <li>Analyze website performance and user behavior.</li>
                <li>Comply with legal obligations and protect against fraudulent activities.</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">How to Exercise Your Rights</h2>
              <p className="text-[#86868b] mb-4">
                If you are a California resident and wish to exercise your rights under the CCPA, please submit a verifiable consumer request using one of the methods below:
              </p>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Email: [Insert Contact Email]</li>
                <li>Phone: [Insert Contact Number]</li>
                <li>Mail: 63/66 Hatton Garden, Fifth Floor Suite 23, London, EC1N 8LE</li>
              </ul>
              <p className="text-[#86868b] mt-2">
                We will verify your identity before processing your request to ensure your privacy and security. You may make two requests per 12-month period, free of charge.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Data Sharing and Selling</h2>
              <p className="text-[#86868b]">
                Agilis does not sell personal information. We may share your data with trusted service providers for business purposes, such as website hosting or analytics, under strict confidentiality agreements.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Updates to This Statement</h2>
              <p className="text-[#86868b]">
                We may update this CCPA Compliance Statement periodically to reflect changes in our data practices or legal requirements. Please revisit this page for the latest updates.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Contact Us</h2>
              <p className="text-[#86868b]">
                Email: [Insert Contact Email] <br />
                Phone: [Insert Contact Number]
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default CCPA;
