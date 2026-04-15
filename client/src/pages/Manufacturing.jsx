import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Factory, Cog, ShieldCheck, Box, Zap, Search, ShieldAlert, Cpu, Target, Layers, FileText, Database, ClipboardCheck, BarChart3, Clock, Play,
  Microscope, Settings, Activity, Thermometer, HardHat, Eye, Move, Layout, Scan, FileSearch, AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Manufacturing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Visual Quality Inspection Annotation",
      icon: <Search size={20} />,
      image: "/manu/qa.png",
      description: (
        <div className="space-y-1">
             {[
               "Labeling defects such as cracks, dents, scratches, misalignment, and surface anomalies",
               "Pixel-level segmentation for micro-defect detection",
               "Product classification across assembly stages"
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
      title: "2. Machine & Equipment Monitoring",
      icon: <Cpu size={20} />,
      image: "/manu/predictive.png",
      description: (
        <div className="space-y-1">
             {[
               "Annotation of thermal images, vibration signals, and sensor data for predictive maintenance",
               "Event tagging for abnormal machine behavior, overheating, or failure patterns"
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
      title: "3. Worker Safety & Compliance Annotation",
      icon: <HardHat size={20} />,
      image: "/manu/safety.png",
      description: (
        <div className="space-y-1">
             {[
               "Detection of PPE usage (helmets, gloves, vests)",
               "Hazard zone monitoring and unsafe posture/action identification",
               "Restricted-area intrusion detection"
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
      title: "4. Robotics & Automation Support",
      icon: <Cog size={20} />,
      image: "/manu/robotic.png",
      description: (
        <div className="space-y-1">
             {[
               "Object pose estimation and part recognition for robotic picking and assembly",
               "3D cuboid and keypoint annotation for robotic vision systems"
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
      title: "5. Warehouse & Logistics Optimization",
      icon: <Box size={20} />,
      image: "/manu/logistics.png",
      description: (
        <div className="space-y-1">
             {[
               "Pallet, inventory, and barcode labeling",
               "Vehicle and forklift movement tracking",
               "Space utilization and workflow analysis"
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

  const labelingTypes = [
    { title: "Image Labeling", desc: "Tagging product defects, surface damage, component alignment, and assembly accuracy for automated quality inspection." },
    { title: "Video Labeling", desc: "Annotating production workflows, machine operations, worker movements, and safety compliance (e.g., PPE usage)." },
    { title: "Sensor & Time-Series Labeling", desc: "Structuring vibration, temperature, pressure, and equipment performance data to enable predictive maintenance and anomaly detection." },
    { title: "Object Detection & Segmentation", desc: "Identifying and segmenting parts, tools, materials, and components for robotic vision, sorting, and precision assembly." },
    { title: "OCR Labeling", desc: "Extracting text from inspection reports, maintenance logs, equipment labels, barcodes, and industrial documents." },
    { title: "Anomaly & Safety Labeling", desc: "Detecting equipment malfunctions, process deviations, hazards, and unsafe worker behavior to improve operational safety." },
    { title: "Classification", desc: "Categorizing products, defect types, machine states, production conditions, and quality grades." }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/Manufacturing_&_Industrial_Automation.png" 
            alt="Manufacturing Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Manufacturing & <br className="hidden md:block" />
             <span className="text-white">Industrial Automation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Power smart factories with high-accuracy Manufacturing and Industrial Automation annotation services from India.
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
                    Manufacturing & Industrial Automation
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                Power smart factories with high-accuracy Manufacturing and Industrial Automation annotation services from India. We provide expert labeling for defect detection, predictive maintenance, robotic vision, worker safety, and production monitoring. Our services include image, video, thermal, LiDAR, and sensor data annotation to support Industry 4.0, machine vision, and AI-driven manufacturing systems.
             </p>
             <p>
                Manufacturing and Industrial Automation annotation focuses on creating high-precision datasets that enable AI systems to monitor, optimize, and automate factory operations. For data annotation startups in India, this domain supports Industry 4.0 initiatives by transforming raw visual, sensor, and operational data into structured intelligence that improves quality, safety, and productivity across industrial environments.
             </p>
        </div>
      </section>

      {/* 2. How We Support the Ecosystem */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               How We Support Manufacturing & Industrial Automation
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
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                       Types of data labeling in the Manufacturing & Industrial Automation industry:
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
               Ready to Power Your Smart Factory?
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

export default Manufacturing;
