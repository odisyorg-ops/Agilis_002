import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Globe } from 'lucide-react';

/**
 * REUSABLE UI HELPERS (Defined within the file for cleanliness)
 */
const FormField = ({ label, name, type = "text", placeholder, required = false, isOptional = false }) => (
    <fieldset className="fieldset w-full">
        <legend className="fieldset-legend font-bold text-[#1d1d1f]">{label} {required && "*"}</legend>
        <input
            name={name}
            type={type}
            className="input bg-white border-none rounded-xl w-full text-black focus:ring-2 focus:ring-blue-500/20"
            placeholder={placeholder}
            required={required}
        />
        {isOptional && <p className="label text-xs text-[#86868b]">Optional</p>}
    </fieldset>
);

const ContactPage = () => {
    const formRef = useRef();
    const headingSize = "clamp(2.5rem, 6vw, 4.5rem)";

    const handleSubmit = (e) => {
        e.preventDefault();
        // FUTURE EMAILJS INTEGRATION:
        // emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', formRef.current, 'PUBLIC_KEY')
        console.log("Form data ready for EmailJS:", new FormData(formRef.current));
    };

    return (
        <main className="h-screen bg-white antialiased overflow-hidden">
            <div className="w-[95vw] md:w-[80vw] mx-auto py-20 md:py-32">

                {/* SECTION 1: HEADER */}
                

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

                    {/* SECTION 2: CONTACT DETAILS */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-blue-600">
                                <MapPin size={24} />
                                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Main office</h3>
                            </div>
                            <p className="text-[#86868b] text-lg leading-relaxed max-w-sm">
                                63/66 Hatton Garden, Fifth Floor Suite 23, London, EC1N 8LE United Kingdom <br />
                                <span className="text-sm font-bold uppercase tracking-widest text-[#1d1d1f] mt-2 block italic">
                                    (Appointments Only)
                                </span>
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-blue-400">
                                <Globe size={24} />
                                <h3 className="text-xl font-bold tracking-tight text-[#1d1d1f]">Middle East branch</h3>
                            </div>
                            <p className="text-[#86868b] text-lg italic">Coming soon</p>
                        </div>

                        <div className="pt-10 border-t border-gray-100">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#86868b] mb-4 text-left">Email Address</h4>
                            <a href="mailto:hello@agilis.one" className="text-2xl md:text-4xl font-bold text-[#1d1d1f] hover:text-blue-600 transition-colors tracking-tighter block text-left">
                                hello@agilis.one
                            </a>
                        </div>
                    </motion.div>

                    {/* SECTION 3: CONTACT FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#f5f5f7] p-8 md:p-12 rounded-[2.5rem]"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField label="Name" name="user_name" placeholder="Full Name" required />
                                <FormField label="Company/Organisation" name="user_company" placeholder="Optional" isOptional />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField label="Email" name="user_email" type="email" placeholder="email@address.com" required />
                                <FormField label="Phone Number" name="user_phone" type="tel" placeholder="+44..." />
                            </div>

                            <fieldset className="fieldset w-full text-black">
                                <legend className="fieldset-legend font-bold text-[#1d1d1f]">Services Required</legend>
                                <select name="service_type" defaultValue="Pick a service" className="select bg-white border-none rounded-xl w-full">
                                    <option disabled>Pick a service</option>
                                    <option value="ERP">ERP</option>
                                    <option value="Custom Software">Custom Software Development</option>
                                    <option value="Business Solution">Business Solution</option>
                                    <option value="Others">Others</option>
                                </select>
                            </fieldset>

                            <fieldset className="fieldset w-full text-black">
                                <legend className="fieldset-legend font-bold text-[#1d1d1f]">Message *</legend>
                                <textarea
                                    name="message"
                                    className="textarea bg-white border-none rounded-xl h-32 w-full focus:ring-2 focus:ring-blue-500/20"
                                    placeholder="Your message..."
                                    required
                                />
                            </fieldset>

                            <motion.button
                                whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-4 rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e40af] text-white font-bold text-lg shadow-xl shadow-blue-900/50"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </main>
    );
};

export default ContactPage;