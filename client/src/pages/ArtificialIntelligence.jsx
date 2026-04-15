import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, BrainCircuit, Cpu, Zap, Microscope, Cog, Search, Activity, Target, Layers, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play,
  Mic, Video, MessageSquare, Plus, Activity as ActivityIcon, Scan, FileSearch, LineChart, Layout, Binary, UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtificialIntelligence = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Computer Vision Annotation",
      icon: <Search size={20} />,
      image: "/ai_ml/computer-vision1.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We provide high-precision image and video labeling, including:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Bounding boxes, polygons, and keypoints",
               "Semantic and instance segmentation",
               "Object detection, tracking, and scene classification"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
           </div>
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block pt-2">Supporting applications such as autonomous systems, retail analytics, healthcare imaging, and industrial AI.</span>
        </div>
      )
    },
    {
      title: "2. Natural Language Processing (NLP) Annotation",
      icon: <Binary size={20} />,
      image: "/ai_ml/nlp-annotation.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Our text annotation services include:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Named Entity Recognition (NER)",
               "Intent classification and sentiment analysis",
               "Text categorization and summarization",
               "Conversational AI and chatbot training data"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
           </div>
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block pt-2">Enabling intelligent search, virtual assistants, and language models.</span>
        </div>
      )
    },
    {
      title: "3. Audio & Speech Annotation",
      icon: <Mic size={20} />,
      image: "/ai_ml/audio-speech.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We structure and label audio datasets for:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Speech-to-text transcription",
               "Speaker diarization",
               "Emotion and tone detection",
               "Accent and language classification"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
           </div>
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block pt-2">Supporting voice assistants, call analytics, and speech AI systems.</span>
        </div>
      )
    },
    {
      title: "4. Multimodal & Generative AI Data Preparation",
      icon: <Sparkles size={20} />,
      image: "/ai_ml/generative-ai.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We prepare datasets that combine text, image, audio, and video for training advanced multimodal and generative AI models, including prompt-response alignment, content filtering, and quality validation.</span>
        </div>
      )
    },
    {
      title: "5. Human-in-the-Loop (HITL) & Model Improvement",
      icon: <UserCheck size={20} />,
      image: "/service-audit.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Our workflows support:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Data validation and quality assurance",
               "Model output review and correction",
               "Edge case identification",
               "Continuous dataset refinement for active learning"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
           </div>
        </div>
      )
    }
  ];

  const labelingTypes = [
    { title: "Bounding Box Annotation", desc: "Marking objects with simple rectangular boxes.", icon: <Scan size={18} /> },
    { title: "Polygon Annotation", desc: "Outlining complex shapes for precise object detection.", icon: <Box size={18} /> },
    { title: "Keypoint Annotation", desc: "Labeling facial landmarks, body joints, or object points.", icon: <Target size={18} /> },
    { title: "Semantic Annotation", desc: "Tagging meaning, context, and relationships in data.", icon: <Layers size={18} /> },
    { title: "Entity Recognition", desc: "Identifying names, locations, terms, and keywords in text.", icon: <FileText size={18} /> },
    { title: "Emotion & Sentiment Labeling", desc: "Detecting feelings, tone, and polarity in text or speech.", icon: <ActivityIcon size={18} /> },
    { title: "Trajectory Annotation", desc: "Mapping movement paths in videos or spatial data.", icon: <Activity size={18} /> },
    { title: "Behavior Labeling", desc: "Tagging actions, interactions, and decision patterns.", icon: <Search size={18} /> },
    { title: "Multimodal Annotation", desc: "Linking text, audio, image, and video data for unified understanding.", icon: <Layers size={18} /> }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/Artificial_Intelligence_&_Machine_Learning.png" 
            alt="AI Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Artificial Intelligence &<br className="hidden md:block" />
             <span className="text-white">Machine Learning.</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             High-quality data annotation services for AI and Machine Learning companies.
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
                    Artificial Intelligence & Machine Learning Data Annotation Services – Industry We Serve in India
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                We provide high-quality data annotation services for AI and Machine Learning companies, including image and video labeling, NLP annotation, audio transcription, multimodal data preparation, and human-in-the-loop validation. Our expertise supports computer vision, conversational AI, speech recognition, generative AI, and advanced machine learning applications.
             </p>
             <p>
                The Artificial Intelligence & Machine Learning (AI/ML) industry depends on high-quality, structured data to build accurate, reliable, and scalable models. From computer vision and natural language processing to speech recognition and generative AI, data annotation is the foundation that enables machines to learn from real-world information. As a data annotation startup in India, we support AI companies, research labs, and technology enterprises with precise, scalable, and domain-specific labeling services across multiple data formats.
             </p>
        </div>
      </section>

      {/* 2. How We Support the AI/ML Ecosystem */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               How We Support <br /> the AI/ML Ecosystem
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

      {/* 3. Types of data labeling */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                       Types of data labeling in the Artificial Intelligence & Machine Learning industry
                    </h2>
                    <div className="h-1 w-12 bg-brand-600"></div>
                </div>

                <div className="space-y-4 pt-2">
                   {labelingTypes.map((item, i) => (
                     <div key={i} className="flex items-start gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                       <span className="text-gray-700 text-base md:text-lg leading-snug">
                         <strong className="font-semibold text-gray-900">{item.title}</strong> – {item.desc}
                       </span>
                     </div>
                   ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Scale Your AI Models?
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

export default ArtificialIntelligence;
