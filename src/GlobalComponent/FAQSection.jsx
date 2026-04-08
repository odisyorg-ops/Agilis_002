import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const FAQSection = () => {
  // Opening the first item by default for better visual flow
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does Agilis actually do?",
      answer: "We provide integrated technology and ERP solutions that streamline your business operations. Our goal is to unify your data and processes into a single, intelligent ecosystem that helps you grow faster."
    },
    {
      question: "How do your solutions improve our efficiency?",
      answer: "By automating manual tasks and providing real-time data insights, we eliminate silos within your organization. This allows your team to focus on high-value strategy instead of administrative bottlenecks."
    },
    {
      question: "Can Agilis scale with my business?",
      answer: "Yes. Our technology is designed to be flexible. Whether you are expanding your team or entering new markets, our systems adapt to your changing requirements without needing a total overhaul."
    },
    {
      question: "How long does a consulting engagement last?",
      answer: "The duration depends on the scope of the project. Short-term projects typically last 2–3 months, while long-term engagements can extend to 6–12 months or more."
    },
    {
      question: "What is your process for analyzing a business?",
      answer: `The Agilis Blueprint: Our Strategic Analysis Framework
At Agilis, we don’t believe in forcing your business into a pre-packaged box. Our analysis process is designed to uncover the "Digital DNA" of your operations to ensure that our technology serves as a high-velocity accelerant for your growth.

01. Infrastructure & Data Audit
We begin with a deep-dive assessment of your Current State Architecture. We map your existing tech stack and legacy systems to identify "Data Debt"—the critical product and customer information currently trapped in static PDFs, siloed spreadsheets, and manual workarounds.

The Objective: Bridge the gap between fragmented data and AI-readiness.
02. Operational Friction Mapping
We analyze your core commercial logic by auditing workflows across sales, procurement, and regulatory compliance. We pinpoint Process Bottlenecks—those specific moments where manual intervention or redundant data entry stalls your go-to-market velocity.

The Objective: Isolate the friction points that are inflating overhead and compromising your data integrity.
03. Scalability Stress-Testing
We evaluate your current digital capabilities against your 3-year and 5-year commercial targets. We ask the mission-critical question: If your transaction volume or SKU count triples tomorrow, exactly where does your current system break?

The Objective: Define the "Scalability Gap" between your present infrastructure and your future global ambitions.
04. The Future-State Roadmap
The final deliverable is a technical blueprint of your Optimal Future State. We provide a prioritized execution plan that balances "Quick Wins" (high-impact automations like self-service portals) with "Strategic Pillars" (core PIM integration and supply chain orchestration).

The Objective: Align your software architecture with your business DNA to ensure Agilis acts as a permanent engine for commercial excellence.

The Agilis Advantage
Most providers try to fix business problems with more software. We fix them with better architecture. By auditing your operational reality first, we ensure that every module we deploy is engineered to support the unique complexities of your industry.`
    },
    {
      question: "Do you provide Technology consulting services?",
      answer: "At Agilis, we provide expert technology consulting to help businesses align their IT infrastructure with strategic goals. Whether you’re upgrading legacy systems, implementing ERP solutions, or planning digital transformation, our consultants deliver actionable insights and tailored strategies to ensure long-term success."
    },
    {
      question: "What sets your consulting services apart?",
      answer: "At Agilis, our consulting services stand out because we go beyond one-size-fits-all advice. We combine deep technical expertise with a business-first mindset to deliver practical, scalable, and industry-specific solutions.",
      listHeader: "What truly sets us apart:",
      points: [
        { label: "Strategic Partnership Approach", text: "We act as long-term partners, not just service providers—aligning technology with your unique goals." },
        { label: "ERP-Centric Expertise", text: "Backed by our collaboration with Divine IT and PrismERP, we offer insights grounded in proven enterprise solutions across 65+ industries." },
        { label: "Tailored, Hands-On Support", text: "We don’t just recommend; we guide implementation, change management, and training to ensure real impact." },
        { label: "Future-Focused Solutions", text: "We help future-proof your business with adaptive technologies designed for sustainability and growth." }
      ]
    },
    {
      question: "What industries do you specialize in?",
      answer: "Agilis in partnership with Divine IT Limited, through its flagship product PrismERP, offers specialized ERP solutions across a diverse range of industries. With over 65 industry-specific modules, PrismERP is designed to streamline operations and enhance efficiency in various sectors.",
      listHeader: "Industries Served:",
      points: [
        { label: "Manufacturing & Production", text: "Solutions tailored for steel, aluminum, and general manufacturing processes." },
        { label: "Distribution & Supply Chain", text: "Tools to manage logistics, inventory, and distribution channels effectively." },
        { label: "Power & Energy", text: "ERP modules designed for energy production and distribution companies." },
        { label: "Education", text: "Systems to manage academic institutions, including student information and administrative tasks." },
        { label: "Telecommunications", text: "Solutions addressing the unique needs of telecom service providers." },
        { label: "Banking & Financial Services", text: "Modules for financial management, accounting, and compliance." },
        { label: "Retail & E-commerce", text: "Point-of-sale systems, inventory management, and customer relationship tools." },
        { label: "Automotive", text: "ERP solutions catering to vehicle manufacturing and dealership management." },
        { label: "Agro & Cold Storage", text: "Systems to manage agricultural production and storage facilities." },
        { label: "Computers & Electronics", text: "Modules for electronics manufacturing and distribution." }
      ]
    },
    {
      question: "How do we get started?",
      answer: "Simply contact us through our website or email to schedule an initial consultation where we will discuss your unique goals and challenges."
    }
  ];

  return (
    <section className="py-32 bg-[#0a0a0b] text-white px-4 antialiased">
      <div className="w-[95vw] md:w-[80vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <h2 className="text-[42px] md:text-[56px] font-bold tracking-tighter leading-[1.1] mb-10">
              Your questions, our <br /> expert answers
            </h2>
            
            <Link to="/contact">
              <button className="px-8 py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Get Expert Consultation
              </button>
            </Link>
          </div>

          {/* Right Side: Numbered Accordion */}
          <div className="lg:col-span-7 border-t border-white/20">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const number = (index + 1).toString().padStart(2, '0');

              return (
                <div key={index} className="border-b border-white/20">
                  <button 
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="w-full py-8 flex items-start justify-between text-left group"
                  >
                    <div className="flex items-start gap-6 pr-4">
                      <span className="text-sm font-medium opacity-40 tabular-nums pt-1">
                        {number}.
                      </span>
                      <h3 className={`text-[20px] md:text-[24px] font-bold tracking-tight transition-all duration-300 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-white text-black rotate-180' : 'group-hover:border-white'}`}>
                      {isOpen ? <ArrowDownRight size={20} /> : <ArrowUpRight size={20} />}
                    </div>
                  </button>

                  {/* Expandable Content Container */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] pb-12' : 'max-h-0'}`}>
                    <div className="pl-12 max-w-2xl">
                      <p className="text-white/80 text-[15px] md:text-[16px] leading-relaxed mb-6 font-medium">
                        {faq.answer}
                      </p>
                      
                      {/* Sub-points / Bulleted List Rendering */}
                      {faq.points && (
                        <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-700">
                          <p className="text-white font-bold text-sm uppercase tracking-widest mb-6 opacity-80">
                            {faq.listHeader}
                          </p>
                          <ul className="grid grid-cols-1 gap-5">
                            {faq.points.map((point, pIndex) => (
                              <li key={pIndex} className="flex gap-4 group/item">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                                <div className="text-[14px] md:text-[15px] leading-relaxed">
                                  <span className="text-white font-bold">{point.label}:</span> <span className="text-white/80 font-medium">{point.text}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;