import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of data annotation does LabelzAI provide?",
      answer:
        "We offer a comprehensive range of services including Image, Video, Audio, NLP (Text), and 3D LiDAR annotation. Whether you need bounding boxes for computer vision or semantic segmentation for medical imaging, we've got you covered.",
    },
    {
      question: "How do you ensure the accuracy of the training data?",
      answer:
        "We follow a multi-layer Quality Assurance (QA) process. Every dataset goes through initial labeling, peer review, and a final audit by domain experts to ensure 99%+ accuracy standards are met.",
    },
    {
      question: "Is my data secure and confidential?",
      answer:
        "Absolutely. Data security is our top priority. We implement enterprise-grade security protocols, signed NDAs with all staff, and can work within your secure VPN or cloud environment if required.",
    },
    {
      question: "Can you handle large-scale datasets with tight deadlines?",
      answer:
        "Yes, our workforce is designed for rapid scalability. We can quickly deploy hundreds of trained annotators to meet high-volume demands without compromising on precision.",
    },
    {
      question: "Do you support custom annotation workflows?",
      answer:
        "Every AI model is unique. We partner with you to design custom workflows, guidelines, and feedback loops tailored specifically to your model's use case and edge cases.",
    },
  ];

  return (
    <section className="py-10 md:py-24 bg-slate-50/50" id="faq">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Side: Header */}
          <div className="w-full lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
              Support Center
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              Everything you <span className="text-brand-600">need to know</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
              Find answers to frequently asked questions about our process,
              security, and specialized data solutions.
            </p>
            <div className="p-3 md:p-8 bg-white rounded-3xl border border-slate-100 flex items-start gap-5">
              <div className="p-4 bg-brand-50 text-brand-600 rounded-2xl shrink-0 border border-brand-100">
                <HelpCircle size={28} />
              </div>
              <div>
                <h4 className="text-slate-900 font-semibold mb-1 text-lg">
                  Still have questions?
                </h4>
                <p className="text-sm text-slate-500 mb-6 font-medium">
                  Our strategy team is here to help you solve your data
                  challenges.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all active:scale-95">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="w-full lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group border transition-all duration-300 rounded-[2rem] overflow-hidden ${
                  openIndex === index
                    ? "bg-white border-brand-200 translate-x-1"
                    : "bg-white border-slate-100 hover:border-brand-200"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full flex items-center justify-between p-6 md:p-10 text-left transition-colors ${
                    openIndex === index ? "bg-brand-50/10" : "bg-white"
                  }`}
                >
                  <span
                    className={`text-md md:text-xl font-semibold transition-colors duration-300 ${
                      openIndex === index ? "text-brand-600" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-2xl transition-all duration-500 ${
                      openIndex === index
                        ? "bg-brand-600 text-white rotate-0"
                        : "bg-slate-50 border border-slate-100 text-slate-400 rotate-180"
                    }`}
                  >
                    <ChevronUp size={20} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-10 pb-10 pt-2">
                    <p className="text-slate-500 font-medium leading-relaxed text-lg border-t border-slate-100 pt-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
