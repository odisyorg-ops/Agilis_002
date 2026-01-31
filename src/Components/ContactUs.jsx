import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

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
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden antialiased">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[5%] -right-[10%] w-[35%] h-[35%] bg-teal-50 rounded-full blur-[120px] opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/40 to-white" />
      </div>

      <div className="max-w-3xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(2.3rem,6vw,3.8rem)] font-bold tracking-tighter text-[#1d1d1f]"
        >
          Contact Us
        </motion.h2>

        <p className="mt-4 text-[#86868b] text-[17px] md:text-[19px] max-w-xl mx-auto leading-relaxed">
          Have an idea or a question?  
          Drop us a message and we’ll get back to you shortly.
        </p>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-14 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 space-y-6 text-left"
        >

          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#1d1d1f]">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#1d1d1f]">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 text-sm font-medium text-[#1d1d1f]">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={status === "sending"}
            className="w-full bg-black text-white py-4 rounded-full text-[17px] font-semibold shadow-lg transition-all"
          >
            {status === "sending" && "Sending..."}
            {status === "success" && "Message Sent ✓"}
            {status === "error" && "Something went wrong"}
            {status === "idle" && "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="text-center text-green-600 text-sm font-medium">
              Thanks! We’ve received your message.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-red-600 text-sm font-medium">
              Failed to send message. Please try again.
            </p>
          )}

        </motion.form>
      </div>
    </section>
  );
};

export default ContactUs;
