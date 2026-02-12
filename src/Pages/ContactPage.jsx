import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
/**
 * REUSABLE UI HELPERS
 * Passing 'name' prop is crucial for EmailJS to detect the input
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
      className="input bg-white border-none rounded-md w-full text-black focus:ring-2 focus:ring-blue-500/20"
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
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
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
          // Optional: Reset status after 5 seconds
          setTimeout(() => setStatus("idle"), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("error");
        }
      );
  };

  return (
    <main className="h-screen bg-white antialiased overflow-hidden pb-[1500px] md:pb-[900px]">
      <div className="w-[95vw] md:w-[80vw] mx-auto py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* CONTACT DETAILS (Left Side) */}
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

          {/* CONTACT FORM (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f7] p-8 md:p-12 rounded-xl"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Name" name="user_name" required placeholder="John Doe" />
                <FormField label="Company / Organisation" name="user_company" placeholder="Acme Inc." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField label="Email" name="user_email" type="email" required placeholder="john@example.com" />
                <FormField label="Phone Number" name="user_phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>

              <fieldset className="fieldset w-full text-black">
                <legend className="fieldset-legend font-bold text-[#1d1d1f]">
                  Services Required
                </legend>
                <select
                  name="service_type"
                  className="select bg-white border-none rounded-xl w-full focus:ring-2 focus:ring-blue-500/20"
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
                  className="textarea bg-white border-none rounded-xl h-32 w-full focus:ring-2 focus:ring-blue-500/20"
                  placeholder="What is the biggest bottleneck in your business right now?"
                  required
                />
              </fieldset>

              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className={`w-full py-4 rounded-full font-bold text-lg text-white transition-all ${
                    status === "success" 
                      ? "bg-green-600 cursor-default" 
                      : "bg-gradient-to-br from-[#0f172a] to-[#1e40af]"
                  }`}
                >
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent ✓"}
                  {status === "error" && "Retry"}
                </motion.button>

                {/* Status Messages for better UX */}
                {status === "success" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-600 text-sm font-medium"
                  >
                    Thanks! We’ve received your message and will get back to you shortly.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-red-600 text-sm font-medium"
                  >
                    Something went wrong. Please check your connection and try again.
                  </motion.p>
                )}
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;