import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Car, Cpu, Map, Navigation2, Truck, Activity, Target, Layers, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play,
  Scan, FileSearch, LineChart, Waypoints, HelpCircle, Plus, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AutonomousVehicles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Automotive OEMs & Self-Driving Technology Companies",
      icon: <Car size={20} />,
      image: "/images/autonomous/av_oem.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We provide detailed annotation for camera, LiDAR, and multi-sensor datasets, including vehicles, pedestrians, lanes, traffic signs, drivable areas, and complex urban scenarios. Our services help improve object detection, path planning, and collision avoidance for autonomous and semi-autonomous vehicles.</span>
        </div>
      )
    },
    {
      title: "2. ADAS (Advanced Driver Assistance Systems) Providers",
      icon: <Cpu size={20} />,
      image: "/images/autonomous/av_adas.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Our annotation supports features such as lane departure warning, adaptive cruise control, blind-spot detection, and traffic sign recognition through high-quality 2D/3D labeling, semantic segmentation, and object tracking.</span>
        </div>
      )
    },
    {
      title: "3. Smart Mobility & Shared Transportation Platforms",
      icon: <Map size={20} />,
      image: "/images/autonomous/av_mobility.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Ride-hailing, fleet intelligence, and connected vehicle platforms rely on annotated data for route optimization, driver behavior analysis, and safety monitoring. We label real-world driving events, traffic density, and road conditions to enhance operational intelligence.</span>
        </div>
      )
    },
    {
      title: "4. Smart City & Intelligent Traffic Management Authorities",
      icon: <Navigation2 size={20} />,
      image: "/images/autonomous/av_traffic.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We assist urban mobility initiatives by annotating traffic flow, pedestrian movement, congestion patterns, violations, and incident scenarios—enabling AI-driven traffic optimization and public safety solutions.</span>
        </div>
      )
    },
    {
      title: "5. Autonomous Delivery, Logistics & Robotics Companies",
      icon: <Truck size={20} />,
      image: "/images/autonomous/av_delivery.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Last-mile delivery robots, autonomous trucks, and warehouse mobility systems require precise environmental understanding. Our annotation services support obstacle detection, path navigation, and operational safety across indoor and outdoor environments.</span>
        </div>
      )
    }
  ];

  const labelingTypes = [
    { title: "Bounding Box Annotation", desc: "Marking vehicles, pedestrians, and road objects.", icon: <Scan size={18} /> },
    { title: "Polyline Annotation", desc: "Tracing lane lines, curbs, and road boundaries.", icon: <Waypoints size={18} /> },
    { title: "Keypoint Annotation", desc: "Identifying vehicle parts, wheels, poses, and pedestrian joints.", icon: <Target size={18} /> },
    { title: "Instance Segmentation", desc: "Separating each object (car, bus, person) with precise outlines.", icon: <Layers size={18} /> },
    { title: "3D Point Cloud Annotation", desc: "Labeling LiDAR/RADAR point clusters for depth and shape.", icon: <Box size={18} /> },
    { title: "Trajectory Annotation", desc: "Mapping object movement paths over time.", icon: <Activity size={18} /> },
    { title: "Behavior Classification", desc: "Labeling safe vs. risky driving patterns or road events.", icon: <Search size={18} /> }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/Autonomous_Vehicles_&_Mobility_data_annotation.png" 
            alt="Autonomous Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Autonomous Vehicles &<br className="hidden md:block" />
             <span className="text-white">Mobility Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             High-precision data annotation for self-driving technology and intelligent infrastructure.
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
                    Autonomous Vehicles & Mobility data annotation
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                The Autonomous Vehicles & Mobility sector is transforming transportation through AI-powered perception, real-time decision-making, and intelligent infrastructure. As a data annotation startup in India, we support this industry by delivering high-precision labeling services that enable automotive and mobility companies to train reliable, safety-critical AI systems across diverse real-world environments.
             </p>
        </div>
      </section>

      {/* 2. How We Support the Mobility Ecosystem */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               How We Support <br /> the Mobility Ecosystem
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
                       Types of data labeling in the Autonomous Vehicles & Mobility Industry
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
               Ready to Scale Your Mobility AI?
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

export default AutonomousVehicles;
