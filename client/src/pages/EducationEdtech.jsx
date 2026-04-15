import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, GraduationCap, BookOpen, UserCheck, MessageSquare, Zap, Search, Accessibility, Brain, Target, Layers, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play,
  Video, Mic, MousePointer2, TrendingUp, AlertCircle, FileEdit, PenTool, Layout, History, Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationEdtech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Text & Assessment Annotation",
      icon: <FileText size={20} />,
      image: "/edtech/grading.png",
      description: (
        <div className="space-y-1">
             {[
               "Objective and descriptive answer labeling",
               "Concept tagging and topic classification",
               "Difficulty-level classification",
               "Rubric-based evaluation support"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
        </div>
      )
    },
    {
      title: "2. Handwritten Data Annotation",
      icon: <PenTool size={20} />,
      image: "/edtech/personalized.png",
      description: (
        <div className="space-y-1">
             {[
               "Exam sheet labeling for OCR models",
               "Mathematical expression annotation",
               "Multilingual handwriting datasets"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
        </div>
      )
    },
    {
      title: "3. Video & Content Annotation",
      icon: <Video size={20} />,
      image: "/edtech/tutoring.png",
      description: (
        <div className="space-y-1">
             {[
               "Lecture segmentation by topic",
               "Concept indexing and timestamps",
               "Content quality and relevance tagging"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
        </div>
      )
    },
    {
      title: "4. Audio & Speech Annotation",
      icon: <Mic size={20} />,
      image: "/audioannotation/stt.png",
      description: (
        <div className="space-y-1">
             {[
               "Speech-to-text transcription",
               "Pronunciation and fluency scoring",
               "Language learning dataset preparation"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
        </div>
      )
    },
    {
      title: "5. Student Behavior Annotation",
      icon: <MousePointer2 size={20} />,
      image: "/videoannotation/behavior.png",
      description: (
        <div className="space-y-1">
             {[
               "Clickstream and engagement labeling",
               "Learning pattern classification",
               "Drop-off and confusion point detection"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
        </div>
      )
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/Education_&_EdTech.png" 
            alt="EdTech Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Education & <br className="hidden md:block" />
             <span className="text-white">EdTech Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             High-quality data annotation for learning content, student interactions, and educational documents.
          </p>
          <div className="mt-10">
            <Link to="/contact">
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-base hover:bg-brand-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-black/20">
                    Scale Your Project <ArrowRight size={18} />
                </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Text Block */}
      <section className="pt-16 md:pt-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6 text-gray-700 text-base md:text-lg font-normal leading-snug">
             <div className="space-y-2 text-left mb-6">
                 <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                    Education & EdTech
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                We support the Education and EdTech industry with high-quality data annotation for learning content, student interactions, educational documents, classroom videos, and speech datasets. Our services include content classification, curriculum tagging, handwriting and OCR annotation, engagement analysis, speech transcription, pronunciation labeling, and online exam proctoring data preparation.
             </p>
             <p>
                The Education & EdTech sector is rapidly evolving with Artificial Intelligence to deliver personalized learning, automate academic processes, and improve student outcomes. From adaptive learning platforms and virtual classrooms to assessment automation and learning analytics, high-quality data annotation is essential for building accurate and scalable education AI systems. As a data annotation startup in India, we support EdTech companies, educational institutions, and learning solution providers with precise, secure, and scalable labeling services across text, image, video, and audio datasets.
             </p>
        </div>
      </section>

      {/* Why EdTech Companies Need Specialized Data Annotation */}
      <section className="py-16 bg-slate-50">
         <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6">
            <div className="space-y-2 text-left mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                   Why EdTech Companies Need Specialized Data Annotation
                </h2>
                <div className="h-1 w-12 bg-brand-600"></div>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
               Modern learning platforms rely on AI for:
            </p>

            <div className="space-y-4 pt-2 pb-2">
               {[
                 "Adaptive learning paths",
                 "Automated assessment and grading",
                 "Handwriting recognition (OCR)",
                 "Speech-based learning and pronunciation analysis",
                 "Student engagement and performance prediction"
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                   <span className="text-gray-700 text-base md:text-lg leading-snug font-normal">{item}</span>
                 </div>
               ))}
            </div>

            <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-4">
               However, unstructured educational data leads to:
            </p>

            <div className="space-y-4 pt-2 pb-2">
               {[
                 "Low model accuracy",
                 "Poor personalization",
                 "Inconsistent recommendations",
                 "Slow AI deployment"
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                   <span className="text-gray-700 text-base md:text-lg leading-snug font-normal">{item}</span>
                 </div>
               ))}
            </div>

            <p className="text-gray-900 font-medium text-base md:text-lg leading-snug mt-4">
               We solve this with curriculum-aware, SME-validated annotation pipelines.
            </p>
         </div>
      </section>

      {/* 2. Our Education Data Annotation Services */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               Our Education Data Annotation Services
             </h2>
             <div className="h-1.5 w-24 bg-brand-600 mx-auto"></div>
          </div>

          {supportCategories.map((use, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-32 items-center`}
            >
              <div className="w-full lg:w-1/2 space-y-8 text-left">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-3xl bg-slate-100 flex items-center justify-center text-brand-600 group hover:bg-brand-600 hover:text-white transition-all duration-500 hover:scale-110">
                       {use.icon}
                    </div>
                    <div className="h-px flex-1 bg-slate-200"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight">
                    {use.title}
                  </h3>
                </div>
                
                <div className="w-full">
                  {use.description}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-600/10 to-brand-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="relative overflow-hidden bg-slate-100 rounded-2xl shadow-2xl">
                       <img 
                          src={use.image} 
                          alt={use.title} 
                          className="w-full h-[300px] md:h-[400px] object-cover"
                       />
                       <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Assurance & Key Benefits Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
               
               {/* Quality Assurance */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Quality Assurance
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Subject Matter Expert (SME) review",
                       "Multi-layer validation",
                       "98%+ accuracy",
                       "Secure and scalable operations (India-based teams)"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Key Benefits */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Key Benefits for EdTech Platforms
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "30–40% improvement in AI model performance",
                       "Faster deployment of adaptive learning systems",
                       "Accurate automated grading",
                       "Better student engagement and retention",
                       "Scalable datasets across grades, subjects, and boards (CBSE, ICSE, State Boards)"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Build Your Learning AI?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with us for high-precision, reliable, and scalable data annotation tailored to your domain.
            </p>
            <div className="pt-6">
                <Link to="/contact">
                   <button className="inline-flex items-center gap-3 bg-brand-600 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-brand-500 transition-all">
                      Contact Our Team <ArrowRight size={20} />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default EducationEdtech;
