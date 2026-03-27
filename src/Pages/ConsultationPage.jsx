// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

// const ConsultationPage = () => {
//   const formRef = useRef(null);
//   const [status, setStatus] = useState("idle");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID, // 👈 NEW TEMPLATE
//         formRef.current,
//         import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setStatus("success");
//           formRef.current.reset();
//           setTimeout(() => setStatus("idle"), 5000);
//         },
//         () => {
//           setStatus("error");
//         }
//       );
//   };

//   return (
//     <main className="min-h-screen bg-white py-20 md:py-32">
//       <div className="w-[95vw] md:w-[70vw] mx-auto">
        
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mb-16 text-center"
//         >
//           <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f]">
//             Book a Strategic Consultation
//           </h1>
//           <p className="text-[#86868b] mt-6 max-w-2xl mx-auto text-lg">
//             This session is designed for serious businesses looking to optimize
//             operations through structured digital solutions.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="bg-[#f5f5f7] p-8 md:p-12 rounded-xl"
//         >
//           <form ref={formRef} onSubmit={sendEmail} className="space-y-8 text-black">

//             {/* Basic Info */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <input
//                 name="user_name"
//                 required
//                 placeholder="Full Name"
//                 className="input bg-white border-none rounded-xl w-full"
//               />
//               <input
//                 name="user_email"
//                 type="email"
//                 required
//                 placeholder="Business Email"
//                 className="input bg-white border-none rounded-xl w-full"
//               />
//             </div>

//             {/* Current Tech Stack */}
//             <div>
//               <label className="font-semibold text-[#1d1d1f]">
//                 Current Tech Stack *
//               </label>
//               <input
//                 name="current_stack"
//                 required
//                 placeholder="e.g., Excel, Odoo, SAP, Custom Software"
//                 className="input bg-white border-none rounded-xl w-full mt-2"
//               />
//             </div>

//             {/* Company Size */}
//             <div>
//               <label className="font-semibold text-[#1d1d1f]">
//                 Company Size (Employees) *
//               </label>
//               <select
//                 name="company_size"
//                 required
//                 className="select bg-white border-none rounded-xl w-full mt-2"
//               >
//                 <option value="">Select</option>
//                 <option>1-10</option>
//                 <option>11-50</option>
//                 <option>51-200</option>
//                 <option>200+</option>
//               </select>
//             </div>

//             {/* Timeline */}
//             <div>
//               <label className="font-semibold text-[#1d1d1f]">
//                 Project Timeline *
//               </label>
//               <select
//                 name="project_timeline"
//                 required
//                 className="select bg-white border-none rounded-xl w-full mt-2"
//               >
//                 <option value="">Select</option>
//                 <option>Immediately</option>
//                 <option>1–3 months</option>
//                 <option>Just researching for the future</option>
//               </select>
//             </div>

//             {/* Budget */}
//             <div>
//               <label className="font-semibold text-[#1d1d1f]">
//                 Estimated Budget Range (Optional but Recommended)
//               </label>
//               <select
//                 name="budget_range"
//                 className="select bg-white border-none rounded-xl w-full mt-2"
//               >
//                 <option value="">Select Range</option>
//                 <option>$5,000 – $15,000</option>
//                 <option>$15,000 – $50,000</option>
//                 <option>$50,000+</option>
//               </select>
//             </div>

//             {/* Decision Maker */}
//             <div>
//               <label className="font-semibold text-[#1d1d1f]">
//                 Are you the primary decision-maker? *
//               </label>
//               <select
//                 name="decision_maker"
//                 required
//                 className="select bg-white border-none rounded-xl w-full mt-2"
//               >
//                 <option value="">Select</option>
//                 <option>Yes</option>
//                 <option>No</option>
//               </select>
//             </div>

//             {/* Stakeholder Department */}
//             <div>
//               <label className="font-semibold text-[#1d1d1f]">
//                 If no, stakeholder's department
//               </label>
//               <input
//                 name="stakeholder_department"
//                 placeholder="Finance, IT, Operations..."
//                 className="input bg-white border-none rounded-xl w-full mt-2"
//               />
//             </div>

//             {/* Submit */}
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               type="submit"
//               disabled={status === "sending"}
//               className="w-full py-4 rounded-full font-bold text-lg text-white bg-gradient-to-br from-[#0f172a] to-[#1e40af]"
//             >
//               {status === "sending" ? "Submitting..." : "Request Consultation"}
//             </motion.button>

//             {status === "success" && (
//               <p className="text-green-600 text-center">
//                 Consultation request submitted successfully.
//               </p>
//             )}

//             {status === "error" && (
//               <p className="text-red-600 text-center">
//                 Something went wrong. Please try again.
//               </p>
//             )}
//           </form>
//         </motion.div>
//       </div>
//     </main>
//   );
// };

// export default ConsultationPage;



import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ConsultationPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  // Form state for validation
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    jobTitle: "",
    industry: "",
    companySize: "",
    currentStack: "",
    coreChallenge: [],
    projectTimeline: "",
    budgetRange: "",
    decisionMaker: "",
    stakeholderDept: "",
    linkedinUrl: "",
  });

  const [isValid, setIsValid] = useState(false);

  // Update formData on input change
  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    if (type === "select-multiple") {
      const selectedOptions = Array.from(options)
        .filter((opt) => opt.selected)
        .map((opt) => opt.value);
      setFormData((prev) => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Enable submit only if all required fields are filled
  useEffect(() => {
    const {
      fullName,
      workEmail,
      companyName,
      jobTitle,
      industry,
      companySize,
      currentStack,
      coreChallenge,
      projectTimeline,
      decisionMaker,
    } = formData;

    const requiredFilled =
      fullName &&
      workEmail &&
      companyName &&
      jobTitle &&
      industry &&
      companySize &&
      currentStack &&
      coreChallenge.length > 0 &&
      projectTimeline &&
      decisionMaker;

    setIsValid(requiredFilled);
  }, [formData]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONSULTATION_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setFormData({
            fullName: "",
            workEmail: "",
            companyName: "",
            jobTitle: "",
            industry: "",
            companySize: "",
            currentStack: "",
            coreChallenge: [],
            projectTimeline: "",
            budgetRange: "",
            decisionMaker: "",
            stakeholderDept: "",
            linkedinUrl: "",
          });
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
        {/* Header */}
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

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#f5f5f7] p-8 md:p-12 rounded-xl"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-8 text-black">
            {/* 1. Contact & Identity */}
            <div>
              <h2 className="font-bold text-xl mb-4">1. Contact & Identity</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Full Name"
                  className="input bg-white border-none rounded-xl w-full"
                />
                <input
                  name="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                  placeholder="Work Email"
                  className="input bg-white border-none rounded-xl w-full"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Company Name"
                  className="input bg-white border-none rounded-xl w-full"
                />
                <input
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  required
                  placeholder="Job Title"
                  className="input bg-white border-none rounded-xl w-full"
                />
              </div>
              <input
                name="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={handleChange}
                placeholder="LinkedIn Profile URL (Optional)"
                className="input bg-white border-none rounded-xl w-full mt-4"
              />
            </div>

            {/* 2. Operations & Scale */}
            <div>
              <h2 className="font-bold text-xl mb-4">2. Operations & Scale</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                  className="select bg-white border-none rounded-xl w-full"
                >
                  <option value="">Company Size</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201+</option>
                </select>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="select bg-white border-none rounded-xl w-full"
                >
                  <option value="">Primary Industry</option>
                  <option>Manufacturing</option>
                  <option>Professional Services</option>
                  <option>Retail</option>
                  <option>Technology</option>
                  <option>Other</option>
                </select>
              </div>
              <textarea
                name="currentStack"
                value={formData.currentStack}
                onChange={handleChange}
                required
                placeholder="Current Tech Stack (e.g., Odoo + Excel)"
                className="input bg-white border-none rounded-xl w-full mt-4"
              />
            </div>

            {/* 3. Strategy & Project Scope */}
            <div>
              <h2 className="font-bold text-xl mb-4">3. Strategy & Project Scope</h2>
              <select
                name="coreChallenge"
                value={formData.coreChallenge}
                onChange={handleChange}
                multiple
                required
                className="select bg-white border-none rounded-xl w-full"
              >
                <option value="Inventory issues">Inventory issues</option>
                <option value="Poor reporting">Poor reporting</option>
                <option value="Manual data entry">Manual data entry</option>
                <option value="Scaling / growing pains">Scaling / growing pains</option>
              </select>

              <select
                name="projectTimeline"
                value={formData.projectTimeline}
                onChange={handleChange}
                required
                className="select bg-white border-none rounded-xl w-full mt-4"
              >
                <option value="">Project Timeline</option>
                <option>Immediately</option>
                <option>3–6 months</option>
                <option>6+ months</option>
                <option>Researching</option>
              </select>

              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="select bg-white border-none rounded-xl w-full mt-4"
              >
                <option value="">Estimated Budget Range (Optional)</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000 – $50,000</option>
                <option>$50,000+</option>
              </select>
            </div>

            {/* 4. Decision Logic */}
            <div>
              <h2 className="font-bold text-xl mb-4">4. Decision Logic</h2>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="decisionMaker"
                    value="Yes"
                    checked={formData.decisionMaker === "Yes"}
                    onChange={handleChange}
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="decisionMaker"
                    value="No"
                    checked={formData.decisionMaker === "No"}
                    onChange={handleChange}
                    required
                  />
                  No
                </label>
              </div>

              {formData.decisionMaker === "No" && (
                <input
                  name="stakeholderDept"
                  value={formData.stakeholderDept}
                  onChange={handleChange}
                  placeholder="Stakeholder's Department"
                  className="input bg-white border-none rounded-xl w-full mt-4"
                />
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === "sending" || !isValid}
              className={`w-full py-4 rounded-full font-bold text-lg text-white ${
                isValid
                  ? "bg-gradient-to-br from-[#0f172a] to-[#1e40af]"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {status === "sending" ? "Submitting..." : "Request Consultation"}
            </motion.button>

            {status === "success" && (
              <p className="text-green-600 text-center mt-2">
                Consultation request submitted successfully.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-center mt-2">
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
