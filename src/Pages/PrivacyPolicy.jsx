import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Cookie, Users, Database, Gavel, FileText } from "lucide-react";
import { Link } from "react-router"; // ✅ Correct import

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const PrivacyPolicy = () => {
  return (
    <main className="bg-white antialiased overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative py-32 px-4">
        <div className="w-[95vw] md:w-[80vw] mx-auto text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="text-[42px] md:text-[64px] font-bold tracking-tighter leading-tight text-[#1d1d1f] mb-6">
              Compliance & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f172a] to-[#1e40af]">Privacy Terms</span>
            </h1>
            <p className="text-[#86868b] text-[16px] md:text-[18px] leading-relaxed font-medium max-w-2xl mx-auto">
              Explore Agilis' legal commitments, regulatory compliance standards, and ethical initiatives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= POLICY CARDS ================= */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="w-[95vw] md:w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Privacy Policy */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <FileText size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              Privacy Policy for Agilis
            </h3>
            <Link to="/terms/privacy-policy">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* CCPA */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              California Consumer Privacy Act (CCPA) Compliance
            </h3>
            <Link to="/terms/ccpa">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* Carbon Neutral */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Leaf size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              Carbon Neutral Commitment for Agilis
            </h3>
            <Link to="/terms/carbon-neutral">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* Cookie Policy */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Cookie size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              Cookie Policy for Agilis
            </h3>
            <Link to="/terms/cookie">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* CSR Initiatives */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              Corporate Social Responsibility (CSR) Initiatives
            </h3>
            <Link to="/terms/csr">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* GDPR */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Database size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              General Data Protection Regulation (GDPR) Compliance
            </h3>
            <Link to="/terms/gdpr">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* Modern Slavery */}
          <motion.div variants={fadeUp} className="group relative bg-white p-8 md:p-10 rounded-xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-blue-100 transition-all duration-300">
            <div className="mb-6 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
              <Gavel size={24} />
            </div>
            <h3 className="text-lg font-bold text-[#1d1d1f] mb-6 group-hover:text-blue-600 transition-colors">
              Modern Slavery Act 2015 Statement
            </h3>
            <Link to="/terms/modern-slavery">
              <motion.button whileTap={{ scale: 0.98 }} className="py-3 px-6 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-sm shadow-md shadow-blue-900/20">
                View Details
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
