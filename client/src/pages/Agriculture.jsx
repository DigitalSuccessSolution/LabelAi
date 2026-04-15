import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Sprout, Leaf, Cloud, Sun, Zap, Search, Map, Target, Layers, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play,
  Microscope, Tractor, Bug, Droplets, Satellite, Smartphone, Radio, Video, Scissors, MousePointer2, Focus, Camera, Users, Landmark, Building2, FlaskConical, GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Agriculture = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useCases = [
    {
      title: "1. Crop Disease & Pest Detection",
      icon: <Bug size={20} />,
      image: "/agri/crop_health.png",
      description: (
        <div className="space-y-1">
             {[
               "Leaf disease classification and segmentation",
               "Early pest identification",
               "Nutrient deficiency detection",
               "Weed detection and separation"
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
      title: "2. Precision Farming & Field Intelligence",
      icon: <Target size={20} />,
      image: "/agri/pest_detection.png",
      description: (
        <div className="space-y-1">
             {[
               "Field boundary and land parcel segmentation",
               "Crop type classification",
               "Growth stage annotation",
               "Soil and irrigation pattern analysis"
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
      title: "3. Yield Estimation & Forecasting",
      icon: <BarChart3 size={20} />,
      image: "/agri/yield_prediction.png",
      description: (
        <div className="space-y-1">
             {[
               "Plant counting and density analysis",
               "Fruit and flower detection",
               "Biomass estimation",
               "Seasonal growth tracking"
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
      title: "4. Drone & Satellite Image Annotation",
      icon: <Satellite size={20} />,
      image: "/agri/autonomous.png",
      description: (
        <div className="space-y-1">
             {[
               "NDVI and vegetation index labeling",
               "Land use and crop health mapping",
               "Water stress and drought detection",
               "Multi-spectral image annotation"
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
      title: "5. Smart Machinery & Automation",
      icon: <Tractor size={20} />,
      image: "/agri/autonomous.png",
      description: (
        <div className="space-y-1">
             {[
               "Object detection for autonomous tractors and harvesters",
               "Obstacle and terrain labeling",
               "Row detection and navigation paths",
               "Robotic harvesting training datasets"
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
      title: "6. Livestock Monitoring",
      icon: <Sprout size={20} />,
      image: "/agri/livestock.png",
      description: (
        <div className="space-y-1">
             {[
               "Animal detection and tracking",
               "Behavior and health monitoring",
               "Grazing pattern analysis"
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
            src="/What-We-Serve-Final-hero/Agriculture_&_AgriTech_Data_Annotation.png" 
            alt="Agriculture Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Agriculture & <br className="hidden md:block" />
             <span className="text-white">AgriTech Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Powering AI-Driven Agriculture with High-Quality Data Annotation
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
                    Agriculture & AgriTech Data Annotation
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                The future of farming is intelligent, automated, and data-driven. From crop health monitoring and yield prediction to autonomous farm equipment and precision irrigation, modern AgriTech solutions rely on accurately labeled data to deliver reliable outcomes.
             </p>
             <p>
                We provide scalable, high-accuracy Agriculture Data Annotation Services to help AgriTech companies, agribusinesses, and research organizations build robust AI models that increase productivity, reduce costs, and support sustainable farming.
             </p>
        </div>
      </section>

      {/* 2. Agriculture AI Use Cases We Support */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               Agriculture AI Use Cases We Support
             </h2>
             <div className="h-1.5 w-24 bg-brand-600 mx-auto"></div>
          </div>

          {useCases.map((use, index) => (
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

      {/* 3. Combined Data Types, Techniques, & Industries Grid */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
               
               {/* Data Types */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Data Types We Support
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Drone imagery (RGB, multispectral, thermal)",
                       "Satellite imagery (medium & high resolution)",
                       "Farmer smartphone images",
                       "IoT and sensor-integrated visual datasets",
                       "Video annotation for farm automation systems"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Annotation Techniques */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Annotation Techniques
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "Bounding Boxes",
                       "Polygon & Semantic Segmentation",
                       "Instance Segmentation",
                       "Image Classification",
                       "Keypoint Annotation",
                       "Temporal/Video Labeling"
                     ].map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Industries & Clients We Serve */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Industries & Clients We Serve
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "AgriTech Startups",
                       "Precision Farming Platforms",
                       "Drone & Remote Sensing Companies",
                       "Agricultural Research Institutions",
                       "Smart Equipment Manufacturers",
                       "Government & Smart Farming Initiatives"
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

      {/* 6. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Empower Your Agri AI?
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

export default Agriculture;
