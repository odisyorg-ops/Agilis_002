
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";

/**
 * REUSABLE UI HELPERS
 */
const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  isOptional = false,
}) => (
  <fieldset className="fieldset w-full">
    <legend className="fieldset-legend font-bold text-[#1d1d1f]">
      {label} {required && "*"}
    </legend>
    <input
      name={name}
      type={type}
      className="input bg-white border-none rounded-xl w-full text-black focus:ring-2 focus:ring-blue-500/20"
      placeholder={placeholder}
      required={required}
    />
    {isOptional && (
      <p className="label text-xs text-[#86868b]">Optional</p>
    )}
  </fieldset>
);

const ContactPage = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <main className="h-screen bg-white antialiased overflow-hidden pb-[1500px] md:pb-[900px]">
      <div className="w-[95vw] md:w-[80vw] mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* CONTACT DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-blue-600">
                <MapPin size={24} />
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                  Main office
                </h3>
              </div>
              <p className="text-[#86868b] text-lg leading-relaxed max-w-sm">
                63/66 Hatton Garden, Fifth Floor Suite 23, London, EC1N 8LE United Kingdom
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-blue-400">
                <Globe size={24} />
                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">
                  Middle East branch
                </h3>
              </div>
              <p className="text-[#86868b] text-lg italic">Coming soon</p>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] p-8 md:p-12 rounded-[2.5rem]"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Name" name="user_name" required />
                <FormField label="Company / Organisation" name="user_company" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Email" name="user_email" type="email" required />
                <FormField label="Phone Number" name="user_phone" type="tel" />
              </div>

              <fieldset className="fieldset w-full text-black">
                <legend className="fieldset-legend font-bold text-[#1d1d1f]">
                  Services Required
                </legend>
                <select
                  name="service_type"
                  className="select bg-white border-none rounded-xl w-full"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option value="ERP">ERP</option>
                  <option value="Custom Software">Custom Software Development</option>
                  <option value="Business Solution">Business Solution</option>
                  <option value="Others">Others</option>
                </select>
              </fieldset>

              <fieldset className="fieldset w-full text-black">
                <legend className="fieldset-legend font-bold text-[#1d1d1f]">
                  Message *
                </legend>
                <textarea
                  name="message"
                  className="textarea bg-white border-none rounded-xl h-32 w-full"
                  required
                />
              </fieldset>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-lg"
              >
                {status === "idle" && "Send Message"}
                {status === "sending" && "Sending..."}
                {status === "success" && "Message Sent ✓"}
                {status === "error" && "Failed to Send"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;
