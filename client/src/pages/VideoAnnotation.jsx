import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap, Activity, Play, Clock, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Service/Video-Annotation-1.png" 
            alt="Video Annotation Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Video Annotation Services — <br className="hidden md:block" />
             <span className="text-white">Frame-Level Intelligence for Real-World AI</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Transforming raw footage into structured, high-precision training data that enables AI systems to understand motion, behavior, and real-world context.
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
                    Temporal Data Excellence
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                In today’s AI landscape, video data is one of the richest — and most complex — sources of machine learning insight. At LabelzAI, our Video Annotation services transform raw footage into structured, high-precision training data that enables AI systems to understand motion, behavior, and real-world context with accuracy.
             </p>
             <p>
                We provide frame-by-frame and sequence-level annotation tailored for computer vision, autonomous systems, surveillance analytics, retail intelligence, healthcare monitoring, and sports analysis. Our expert annotators combine domain knowledge with advanced tools to deliver consistent, scalable, and high-quality outputs.
             </p>
        </div>
      </section>

      {/* "What We Annotate" Grid */}
      <section className="py-24 bg-slate-50 border-white text-center">
         <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-2 text-center mb-12 flex flex-col items-center">
                <h2 className="text-xl md:text-3xl font-medium text-gray-900 uppercase">
                   What We Annotate
                </h2>
                <div className="h-1 w-12 bg-brand-600"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
               {[
                 "Object Tracking (Single & Multi-Object) across frames",
                 "Bounding Boxes, Polygons, and Keypoints",
                 "Semantic & Instance Segmentation for dynamic scenes",
                 "Action & Activity Recognition",
                 "Event Detection and Temporal Tagging",
                 "Lane, Traffic, and Pedestrian Annotation (ADAS-ready)",
                 "Behavioral and Motion Analysis"
               ].map((item, index) => (
                 <div key={index} className="flex items-start gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                   <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Technical Deep Dive Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 mb-24">
            
            {/* Object Tracking */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Object Tracking (Single & Multi-Object) Across Frames
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Object Tracking links objects consistently across consecutive frames, enabling AI models to understand motion, behavior, and interactions over time — not just in isolated images. For single-object tracking, a specific target is followed frame-by-frame to capture its precise trajectory. For multi-object tracking, multiple entities are uniquely identified and maintained with persistent IDs, even during occlusions, overlaps, or scene changes.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/tracking.png" alt="Object Tracking" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Bounding Boxes, Polygons & Keypoints */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Bounding Boxes, Polygons & Keypoints for Video Annotation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Power high-precision video intelligence with frame-level spatial annotation tailored for dynamic environments. Our video annotation services combine bounding boxes, polygons, and keypoints to capture every object, shape, and movement with exceptional accuracy across time.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/bounding.png" alt="Bounding Boxes" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Semantic & Instance Segmentation */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Semantic & Instance Segmentation for Dynamic Video Scenes
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       We provide advanced semantic and instance segmentation designed specifically for video annotation in dynamic, real-world environments. Our frame-by-frame pixel-level labeling enables AI systems to understand both scene context (semantic segmentation) and individual object identities across time (instance segmentation). Each object is not only segmented with precision but also tracked consistently throughout the video, preserving identity even during movement, overlap, or temporary occlusion.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/segmentation.png" alt="Segmentation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Action & Activity Recognition */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Action & Activity Recognition (Video Annotation)
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Action & Activity Recognition transforms raw video into meaningful behavioral intelligence by identifying and labeling motions, interactions, and real-world events across time. Our experts annotate both simple actions (e.g., walking, picking, turning) and complex activities (e.g., team coordination, equipment handling, suspicious behavior, customer journeys) using precise temporal boundaries and context-aware classification.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/action.png" alt="Action Recognition" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Event Detection & Temporal Tagging */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Event Detection & Temporal Tagging
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Event Detection and Temporal Tagging transform raw video into structured intelligence by identifying what happens and exactly when it happens. This process involves locating meaningful actions, interactions, or incidents within a video and marking their precise start and end timestamps. From simple activities like walking or entering a room to complex scenarios such as safety violations, customer behavior, or critical incidents, temporal tagging enables AI systems to understand events in sequence and context.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/event.png" alt="Event Detection" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Lane, Traffic, and Pedestrian Annotation */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Lane, Traffic, and Pedestrian Annotation (ADAS-Ready)
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Enable safer, smarter driving systems with high-precision video annotation built for Advanced Driver Assistance Systems (ADAS). Our Lane, Traffic, and Pedestrian Annotation service delivers frame-level labeling of lane boundaries, road markings, vehicles, traffic signals, signs, cyclists, and pedestrian behavior — capturing both spatial accuracy and real-world motion dynamics.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/adas.png" alt="ADAS Annotation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Behavioral and Motion Analysis */}
            <div className="flex flex-col lg:flex-row gap-16 items-center pb-8">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Behavioral and Motion Analysis (Video Annotation)
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Behavioral and Motion Analysis focuses on understanding how subjects act and move over time within a video. This annotation process captures human actions, object interactions, movement patterns, posture changes, and event sequences at a temporal level. Instead of labeling what is present in a frame, it identifies what is happening, how it evolves, and why it matters.
                   </p>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       By annotating actions such as walking, running, gesturing, entering/exiting zones, interactions between people or objects, and abnormal or risky behaviors, this technique enables AI systems to interpret real-world dynamics with context and intent.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/videoannotation/behavior.png" alt="Behavioral Analysis" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Scale Your Video Systems?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with us for high-precision, frame-level annotation tailored to your domain.
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

export default VideoAnnotation;
