import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center bg-white pt-28 md:pt-40 lg:pt-32 pb-20 overflow-hidden">
      
      {/* Background Accent Removed */}
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
            Labeling the Future of <br className="hidden sm:block" />
            <span className="text-brand-600 italic">Intelligent Systems.</span>
          </h1>

          <div className="text-slate-500 text-base md:text-lg lg:text-[17px] font-normal leading-relaxed mb-10 md:mb-12 max-w-3xl lg:max-w-2xl space-y-6">
            <p>
               LabelzAI is a next-generation data annotation and AI training data company based in India, dedicated to empowering businesses with high-quality, scalable, and reliable labeled datasets. In the rapidly evolving world of Artificial Intelligence (AI) and Machine Learning (ML), the success of any model depends heavily on the quality of its training data. At LabelzAI, we bridge the gap between raw data and intelligent systems by delivering precise, human-annotated datasets that enable AI models to perform with exceptional accuracy.
            </p>
            <p>
               As a trusted data annotation partner, LabelzAI specializes in transforming unstructured data—images, videos, text, and audio—into structured, machine-readable formats. Our mission is to accelerate AI development by providing world-class data labeling services that meet the highest standards of quality, consistency, and scalability. Whether you are an AI startup, enterprise, or research organization, LabelzAI offers tailored annotation solutions designed to match your unique use case and industry requirements.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 md:px-10 py-4 md:py-5 text-lg font-semibold hover:bg-brand-600 transition-all rounded-full shadow-xl shadow-slate-900/10 active:scale-95">
              Get Started <ChevronRight size={20} />
            </Link>
            <Link to="/services/image-annotation" className="w-full sm:w-auto text-slate-600 hover:text-brand-600 font-semibold text-lg flex items-center justify-center gap-2 px-8 py-4 transition-all group">
              Explore Services <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div> */}
          
          {/* Trust Elements Removed */}
        </div>

        {/* Right Side: Image without Glow Background */}
           <div className="rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
            <img 
              src="/home_hero_v5.png" 
              alt="LabelzAI Intelligent Data Annotation" 
              className="w-full h-auto max-w-md md:max-w-lg lg:max-w-2xl relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 transition-transform duration-700 hover:scale-105"
            />
           </div>

      </div>

    </section>
  );
};

export default Hero;
