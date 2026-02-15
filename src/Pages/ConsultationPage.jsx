import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ConsultationPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID, // 👈 NEW TEMPLATE
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 5000);
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <main className="min-h-screen bg-white py-20 md:py-32">
      <div className="w-[95vw] md:w-[70vw] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
            Book a Strategic Consultation
          </h1>
          <p className="text-[#86868b] mt-6 max-w-2xl mx-auto text-lg">
            This session is designed for serious businesses looking to optimize
            operations through structured digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f5f5f7] p-8 md:p-12 rounded-xl"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8 text-black">

            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <input
                name="user_name"
                required
                placeholder="Full Name"
                className="input bg-white border-none rounded-xl w-full"
              />
              <input
                name="user_email"
                type="email"
                required
                placeholder="Business Email"
                className="input bg-white border-none rounded-xl w-full"
              />
            </div>

            {/* Current Tech Stack */}
            <div>
              <label className="font-semibold text-[#1d1d1f]">
                Current Tech Stack *
              </label>
              <input
                name="current_stack"
                required
                placeholder="e.g., Excel, Odoo, SAP, Custom Software"
                className="input bg-white border-none rounded-xl w-full mt-2"
              />
            </div>

            {/* Company Size */}
            <div>
              <label className="font-semibold text-[#1d1d1f]">
                Company Size (Employees) *
              </label>
              <select
                name="company_size"
                required
                className="select bg-white border-none rounded-xl w-full mt-2"
              >
                <option value="">Select</option>
                <option>1-10</option>
                <option>11-50</option>
                <option>51-200</option>
                <option>200+</option>
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label className="font-semibold text-[#1d1d1f]">
                Project Timeline *
              </label>
              <select
                name="project_timeline"
                required
                className="select bg-white border-none rounded-xl w-full mt-2"
              >
                <option value="">Select</option>
                <option>Immediately</option>
                <option>1–3 months</option>
                <option>Just researching for the future</option>
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="font-semibold text-[#1d1d1f]">
                Estimated Budget Range (Optional but Recommended)
              </label>
              <select
                name="budget_range"
                className="select bg-white border-none rounded-xl w-full mt-2"
              >
                <option value="">Select Range</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000 – $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>

            {/* Decision Maker */}
            <div>
              <label className="font-semibold text-[#1d1d1f]">
                Are you the primary decision-maker? *
              </label>
              <select
                name="decision_maker"
                required
                className="select bg-white border-none rounded-xl w-full mt-2"
              >
                <option value="">Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            {/* Stakeholder Department */}
            <div>
              <label className="font-semibold text-[#1d1d1f]">
                If no, stakeholder's department
              </label>
              <input
                name="stakeholder_department"
                placeholder="Finance, IT, Operations..."
                className="input bg-white border-none rounded-xl w-full mt-2"
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 rounded-full font-bold text-lg text-white bg-gradient-to-br from-[#0f172a] to-[#1e40af]"
            >
              {status === "sending" ? "Submitting..." : "Request Consultation"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-600 text-center">
                Consultation request submitted successfully.
              </p>
            )}

            {status === "error" && (
              <p className="text-red-600 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default ConsultationPage;
