import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataClassification = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-white text-slate-900 selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Service/Data-Classification.png" 
            alt="Data Classification Background" 
            className="object-cover w-full h-full opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Data Classification Services for <br className="hidden md:block" />
             <span className="text-white">High-Quality AI Models</span>
          </h1>
          <p className="max-w-2xl text-base font-normal leading-relaxed text-gray-300 md:text-xl">
             Organizing raw and unstructured data into meaningful categories to improve accuracy.
          </p>
          <div className="mt-10">
            <Link to="/contact">
                <button className="flex items-center gap-3 px-8 py-4 text-base font-semibold text-black transition-all bg-white rounded-full shadow-xl hover:bg-brand-600 hover:text-white active:scale-95 shadow-black/20">
                    Scale Your Project <ArrowRight size={18} />
                </button>
            </Link>
          </div>
        </div>
      </section>

         {/* Intro Text Block */}
         <section className="pt-16 md:pt-24 bg-slate-50">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
               <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="space-y-6 text-base font-normal leading-snug text-gray-700 md:text-lg">
                     <div className="mb-6 space-y-2 text-left">
                        <h2 className="text-xl font-medium text-gray-900 md:text-2xl">
                           Data Classification Services
                        </h2>
                        <div className="w-12 h-1 bg-brand-600"></div>
                     </div>
                     <p>
                        Data Classification is a critical data annotation process that organizes raw and unstructured data into meaningful categories to improve the accuracy and performance of AI and machine learning systems. Our Data Classification services help businesses transform text, images, audio, and video into structured datasets that enable faster training, better predictions, and smarter automation.
                     </p>
                     <p>
                        We provide scalable and precise classification solutions tailored to your business needs. Using customized taxonomies, domain-trained annotators, and multi-level quality assurance, we ensure consistent, bias-controlled, and high-accuracy labeled data for a wide range of industries including healthcare, finance, e-commerce, automotive, media, and customer support.
                     </p>
                     <p>
                        Our team supports single-label, multi-label, and hierarchical classification workflows to handle complex datasets. Whether you need document categorization, product tagging, content moderation, sentiment-based text classification, or scene-based image classification, our human-in-the-loop approach ensures reliable and production-ready training data.
                     </p>
                  </div>

                  <div className="flex justify-center lg:justify-end">
                     <img src="/Service/Data_Classification.png" alt="Data Classification Illustration" className="object-contain w-full max-w-full shadow-lg rounded-2xl" />
                  </div>
               </div>
            </div>
         </section>

      {/* Capabilities & Benefits Grid */}
      <section className="py-24 border-white bg-slate-50">
         <div className="px-6 mx-auto max-w-7xl md:px-12">
            <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
               
               {/* Our Data Classification Capabilities */}
               <div className="space-y-6">
                  <div className="mb-6 space-y-2 text-left">
                      <h2 className="text-xl font-medium text-gray-900 md:text-2xl">
                         Our Data Classification Capabilities
                      </h2>
                      <div className="w-12 h-1 bg-brand-600"></div>
                  </div>
                  <div className="pt-2 space-y-4">
                     {[
                       "Text Classification (intent, topic, sentiment, document type)",
                       "Image Classification (object category, product type, scene classification)",
                       "Audio Classification (language, speaker type, sound event detection)",
                       "Video Classification (activity recognition, event tagging, context labeling)",
                       "Multi-label and hierarchical classification",
                       "Custom taxonomy and ontology design",
                       "Multi-stage quality control and validation",
                       "Secure and scalable annotation workflows"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-base font-normal leading-snug text-gray-700">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Benefits of Our Data Classification Services */}
               <div className="space-y-6">
                  <div className="mb-6 space-y-2 text-left">
                      <h2 className="text-xl font-medium text-gray-900 md:text-2xl">
                         Benefits of Our Data Classification Services
                      </h2>
                      <div className="w-12 h-1 bg-brand-600"></div>
                  </div>
                  <div className="pt-2 space-y-4">
                     {[
                       "Improves machine learning model accuracy",
                       "Enables faster AI training and deployment",
                       "Reduces data noise and inconsistencies",
                       "Supports large-scale and complex datasets",
                       "Ensures industry-specific labeling standards",
                       "Cost-effective and scalable operations"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-base font-normal leading-snug text-gray-700">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto space-y-8 text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white md:text-5xl">
               Ready to Structure Your Data?
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-normal leading-relaxed text-gray-400 md:text-xl">
               Partner with us for high-precision, reliable, and scalable data classification tailored to your domain.
            </p>
            <div className="pt-6">
                <Link to="/contact">
                   <button className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white transition-all rounded-full bg-brand-600 hover:bg-brand-500">
                      Contact Our Team <ArrowRight size={20} />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default DataClassification;
