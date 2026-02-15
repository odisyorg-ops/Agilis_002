import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

const Privacy = () => {
  return (
    <main className="bg-white antialiased overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-28 px-4 bg-gray-50">
        <div className="w-[95vw] md:w-[80vw] mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >

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
              Privacy{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                Policy
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
              At Agilis, your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you visit our website (agilis.team) or interact with our services. By using our website, you agree to the practices described in this policy.
            </p>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">1. Information We Collect</h2>
              <p className="text-[#86868b] mb-4">We may collect the following types of information:</p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">1.1 Personal Information</h3>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Other information you provide voluntarily</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">1.2 Non-Personal Information</h3>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring websites</li>
              </ul>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-[#86868b]">
                We use cookies and similar technologies to enhance your browsing experience. For more details, see our Cookie Policy.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Provide and improve our products and services.</li>
                <li>Respond to your inquiries and provide customer support.</li>
                <li>Personalize your experience on our website.</li>
                <li>Analyze website performance and user behavior.</li>
                <li>Send marketing communications, with your consent.</li>
                <li>Ensure the security of our website and protect against fraud.</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">3. Sharing Your Information</h2>
              <p className="text-[#86868b] leading-relaxed">
                We do not sell, rent, or trade your personal information. However, we may share your data with service providers and legal authorities where required by law. All third parties are bound by confidentiality agreements.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">4. How We Protect Your Information</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Encryption of sensitive data during transmission.</li>
                <li>Regular security audits and updates.</li>
                <li>Access controls to limit authorized access.</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">5. Your Rights</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Access</li>
                <li>Correction</li>
                <li>Deletion</li>
                <li>Objection</li>
                <li>Withdrawal of Consent</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">6. Retention of Data</h2>
              <p className="text-[#86868b]">
                We retain your personal information for as long as necessary unless a longer retention period is required by law.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">7. Third-Party Links</h2>
              <p className="text-[#86868b]">
                We are not responsible for the privacy practices of third-party websites linked from our platform.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">8. International Data Transfers</h2>
              <p className="text-[#86868b]">
                Your information may be processed in the UK or other countries where our service providers are located.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">9. Updates to This Privacy Policy</h2>
              <p className="text-[#86868b]">
                We may update this Privacy Policy periodically to reflect changes in practices or legal requirements.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">10. Contact Us</h2>
              <p className="text-[#86868b]">
                Email: [Insert Contact Email] <br />
                Address:
              </p>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default Privacy;
