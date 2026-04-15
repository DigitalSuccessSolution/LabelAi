import React from "react";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const points = [
    "Multi-layer Quality Assurance",
    "Secure & Confidential Data Handling",
    "Custom AI-Aligned Workflows",
    "Scalable Teams with High Precision",
    "Reliable & Transparent Partnerships",
    "Domain-Specific Expert Annotators"
  ];

  return (
    <section className="py-10 md:py-24 bg-white overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative  overflow-hidden  ">
              <img 
                src="/about-us.png" 
                alt="LabelzAI Innovation" 
                className="w-full h-auto object-cover  "
              />
              {/* <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500"></div> */}
            </div>
            {/* Design Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full -z-10 blur-2xl opacity-60"></div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start leading-relaxed">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-600 text-[13px] font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
              About Us — Building with Purpose
            </div> */}
            
            <h2 className="text-3xl md:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              Powering the next <span className="text-brand-600">generation</span> of Artificial Intelligence
            </h2>
            
            <div className="space-y-6 text-slate-500 text-[17px] leading-relaxed mb-8 font-medium">
              <p>
                In today’s data-driven ecosystem, AI systems are only as good as the data they are trained on. Poorly labeled data leads to inaccurate predictions, biased models, and unreliable outcomes. LabelzAI addresses this critical challenge by combining human intelligence with advanced annotation tools and robust quality assurance processes.

              </p>
              <p>
               Our team of highly trained annotators, domain experts, and quality analysts ensures that every dataset is labeled with precision and attention to detail. From basic bounding boxes to complex semantic segmentation and multi-layer annotation tasks, we deliver datasets that are optimized for real-world AI applications.
              </p>
              <p>
               We leverage AI-assisted annotation tools to improve efficiency while maintaining human oversight to guarantee accuracy. This hybrid approach enables us to deliver large-scale datasets quickly without compromising on quality—making LabelzAI a preferred choice for global AI teams.

              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 w-full mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center">
                    <CheckCircle2 className="text-brand-600" size={14} />
                  </div>
                  <span className="text-slate-800 font-semibold text-sm">{point}</span>
                </div>
              ))}
            </div>

            {/* <button className="bg-slate-900 text-white px-8 py-3.5 text-base font-semibold hover:bg-slate-800 transition-all rounded-full flex items-center gap-2 shadow-lg shadow-slate-900/10 active:scale-95">
              Explore Our Story
            </button> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
