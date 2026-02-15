import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const CookiePolicy = () => {
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
              Cookie{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
                Policy
              </span>
            </h1>

            <p className="text-[#86868b] font-medium text-sm mb-10">
              At Agilis, we are committed to safeguarding your privacy while providing a seamless browsing experience.
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
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">What Are Cookies?</h2>
              <p className="text-[#86868b] leading-relaxed">
                Cookies are small text files stored on your device when you visit a website. They allow the website to recognize your device and remember information about your visit, such as your preferences or login details. Cookies are essential for ensuring the website operates effectively and provides the best user experience.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Types of Cookies We Use</h2>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Essential Cookies</h3>
              <p className="text-[#86868b] mb-2">
                These cookies are necessary for the website to function properly. They enable basic features such as page navigation, secure access, and session management.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Performance and Analytics Cookies</h3>
              <p className="text-[#86868b] mb-2">
                We use these cookies to understand how visitors interact with our website. They collect anonymized information about website traffic, pages visited, and user behavior.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Functionality Cookies</h3>
              <p className="text-[#86868b] mb-2">
                These cookies enable the website to remember choices you make, such as language preferences or customized settings. This allows us to offer enhanced and personalized features.
              </p>

              <h3 className="font-semibold text-[#1d1d1f] mb-2">Advertising and Targeting Cookies</h3>
              <p className="text-[#86868b] mb-2">
                These cookies may be used to deliver advertisements that are relevant to you and your interests. They also help limit the number of times you see an ad and measure the effectiveness of advertising campaigns.
              </p>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">How We Use Cookies</h2>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>To ensure the website operates smoothly and efficiently.</li>
                <li>To analyze user behavior and improve website content and features.</li>
                <li>To remember your preferences and settings for future visits.</li>
                <li>To personalize your browsing experience and deliver tailored content.</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Third-Party Cookies</h2>
              <p className="text-[#86868b] mb-2">
                We may allow third-party service providers, such as analytics or advertising partners, to place cookies on your device. These third parties collect data about your interactions with our website to provide analytics, advertising, or other services.
              </p>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1 mb-4">
                <li>Google Analytics: For tracking and analyzing website performance.</li>
                <li>Social Media Plugins: For sharing content on platforms like Facebook or LinkedIn.</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Managing Your Cookie Preferences</h2>
              <p className="text-[#86868b] leading-relaxed">
                You can control or disable cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of the website. To manage cookies:
              </p>
              <ul className="list-disc pl-6 text-[#86868b] space-y-1">
                <li>Google Chrome: Cookie Settings</li>
                <li>Mozilla Firefox: Cookie Settings</li>
                <li>Safari: Cookie Settings</li>
                <li>Microsoft Edge: Cookie Settings</li>
              </ul>
            </div>

            {/* SECTION */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Updates to This Policy</h2>
              <p className="text-[#86868b] leading-relaxed">
                We may update this Cookie Policy periodically to reflect changes in our practices or legal requirements. Please revisit this page regularly to stay informed about our use of cookies.
              </p>
            </div>

            {/* SECTION */}
            <div>
              <h2 className="text-xl font-bold text-[#1d1d1f] mb-3">Contact Us</h2>
              <p className="text-[#86868b] leading-relaxed">
                If you have any questions about this Cookie Policy, please contact us at: <br />
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

export default CookiePolicy;
