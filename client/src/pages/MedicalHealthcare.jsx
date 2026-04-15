import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Stethoscope, Heart, Activity, Microscope, Zap, Database, Search, ClipboardList, Target, Layers, Box, FileText, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play,
  Mic, Video, Scan, FileSearch, Thermometer, UserCheck, Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MedicalHealthcare = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Medical Imaging & Diagnostics Companies",
      icon: <Activity size={20} />,
      image: "/images/medical/medical_imaging.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate radiology and diagnostic datasets, including X-rays, CT scans, MRI, ultrasound, and pathology images. Our services include tumor segmentation, organ delineation, lesion detection, disease classification, and abnormality tagging to support computer-aided diagnosis (CAD) systems.</span>
        </div>
      )
    },
    {
      title: "2. HealthTech & AI Startups",
      icon: <Zap size={20} />,
      image: "/images/medical/chatbot.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">From predictive analytics to clinical decision support, we label structured and unstructured healthcare data such as clinical notes, prescriptions, patient reports, and symptom data. This helps train NLP and predictive models for risk assessment, disease progression, and treatment recommendations.</span>
        </div>
      )
    },
    {
      title: "3. Hospitals & Healthcare Providers",
      icon: <ClipboardList size={20} />,
      image: "/images/medical/medical_ehr.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We support digital transformation initiatives by annotating electronic health records (EHR), medical forms, voice dictations, and workflow data—enabling automation, clinical documentation improvement, and operational intelligence.</span>
        </div>
      )
    },
    {
      title: "4. Pharmaceutical & Life Sciences Companies",
      icon: <Microscope size={20} />,
      image: "/images/medical/pharma.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Our annotation services help in clinical trial data labeling, adverse event classification, drug safety monitoring, and research data structuring, accelerating drug development and regulatory processes.</span>
        </div>
      )
    },
    {
      title: "5. Telemedicine & Remote Monitoring Platforms",
      icon: <Heart size={20} />,
      image: "/images/medical/telemedicine.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate wearable sensor data, patient interaction records, and remote consultation datasets to enable real-time health monitoring, patient behavior analysis, and personalized care solutions.</span>
        </div>
      )
    }
  ];

  const labelingTypes = [
    { title: "Image Labeling", desc: "Marking tumors, organs, and abnormalities in X-ray, CT, MRI, and ultrasound images.", icon: <Scan size={18} /> },
    { title: "Text Labeling", desc: "Tagging diseases, symptoms, drugs, and medical terms in clinical documents.", icon: <FileText size={18} /> },
    { title: "Audio Labeling", desc: "Annotating medical speech, doctor–patient conversations, and diagnostic sounds.", icon: <Mic size={18} /> },
    { title: "Video Labeling", desc: "Tracking surgical actions, tools, and patient movements in medical videos.", icon: <Video size={18} /> },
    { title: "Signal Labeling", desc: "Marking events and anomalies in ECG, EEG, EMG, and other biomedical signals.", icon: <Activity size={18} /> },
    { title: "OCR Labeling", desc: "Extracting and validating text from medical forms and reports.", icon: <FileSearch size={18} /> }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/Medical_&_Healthcare.png" 
            alt="Healthcare Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Medical & <br className="hidden md:block" />
             <span className="text-white">Healthcare Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             High-precision data annotation for medical imaging, clinical text, and patient monitoring.
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
                    Medical & Healthcare
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                We support the Medical & Healthcare industry with high-precision data annotation for medical imaging, clinical text, EHR data, and patient monitoring datasets. Our services include tumor and organ segmentation, disease classification, radiology image labeling, medical NLP annotation, clinical data structuring, and wearable health data labeling.
             </p>
             <p>
                The Medical & Healthcare industry is rapidly adopting Artificial Intelligence to improve diagnosis accuracy, patient care, and operational efficiency. High-quality, domain-specific data annotation is essential for training reliable healthcare AI systems.
             </p>
        </div>
      </section>

      {/* 2. How We Support the Healthcare Ecosystem */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               How We Support <br /> the Healthcare Ecosystem
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
                       Types of data labeling in the healthcare industry:
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
               Ready to Scale Your Healthcare AI?
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

export default MedicalHealthcare;
