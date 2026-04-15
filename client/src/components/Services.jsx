import React from 'react';
import { ArrowRight, Camera, Brain, Layers, Database, Mic, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Image Annotation",
      desc: "High-precision labeling for 2D images, including bounding boxes, polygons, and semantic segmentation for vision models.",
      image: "/s1.png",
      delay: "0.1s",
      link: "/services/image-annotation"
    },
    {
      id: 2,
      title: "Video Annotation",
      desc: "Frame-by-frame object tracking and activity recognition to power the next generation of video analytics.",
      image: "/s2.png",
      delay: "0.2s",
      link: "/services/video-annotation"
    },
    // ... rest of the items
    {
      id: 3,
      title: "Audio Annotation",
      desc: "Expert transcription, timestamping, and acoustic modeling for voice assistants and speech diagnostics.",
      image: "/s3.png",
      delay: "0.3s",
      link: "/services/audio-annotation"

    },
    {
      id: 4,
      title: "Natural Language Processing",
      desc: "Advanced text annotation for sentiment analysis, entity recognition, and LLM fine-tuning across 50+ languages.",
      image: "/s4.png",
      delay: "0.4s",
      link: "/services/nlp-datasets"
    },
    {
      id: 5,
      title: "3D & LiDAR Annotation",
      desc: "Precision point cloud labeling for radar, sonar, and LiDAR data used in autonomous driving technology.",
      image: "/s5.png",
      delay: "0.5s",
      link: "/services/lidar-3d"
    },
    {
      id: 6,
      title: "Multimodal Data Annotation",
      desc: "Correlating and labeling complex datasets that combine visual, auditory, and sensor-based information.",
      image: "/s6.png",
      delay: "0.6s",
      link: "/services/multimodal-annotation"
    },
    {
      id: 7,
      title: "Data Classifications",
      desc: "Categorizing massive datasets into structured taxonomies to ensure high-quality, model-ready training data.",
      image: "/s7.png",
      delay: "0.7s",
      link: "/services/data-classification"
    }
  ];

  return (
    <div className="w-full bg-white py-10 md:py-24 px-6 md:px-12" id="services">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 text-slate-900 text-[13px] font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
            Service Categories
          </div> */}
          <h2 className="text-3xl md:text-6xl font-semibold text-slate-900 mb-8 tracking-tight">
            Comprehensive <span className="text-brand-600">Solutions</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 text-xl leading-relaxed font-medium">
            Scalable data infrastructure and human-in-the-loop services to accelerate your journey from prototype to production.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden bg-white rounded-lg transition-all duration-500"
            >
              {/* Image Section */}
              <div className="h-72 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Default View (Title Box) */}
              <div className="p-0 text-center transition-all duration-300 group-hover:pointer-events-none">
                <div className="bg-white py-5 px-6 rounded-xl -mt-10 relative z-10 shadow-xl border border-slate-100 mb-8 mx-6 group-hover:opacity-0 transition-all duration-300 scale-100 group-hover:scale-95">
                  <h4 className="text-slate-900 text-xl font-semibold truncate">
                    {service.title}
                  </h4>
                </div>
                <Link to={service.link || "#"}>
                  <button className="flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-3.5 text-sm font-semibold hover:bg-brand-700 transition-all rounded-full mx-auto group-hover:opacity-0 shadow-lg shadow-brand-600/20 active:scale-95">
                    Learn more <ArrowRight size={16} />
                  </button>
                </Link>
              </div>

              {/* Hover View (Content Overlay) */}
              <div className="absolute inset-0 z-20 bg-brand-600/95 flex flex-col items-center justify-center p-10 text-center translate-y-full transition-transform duration-500 group-hover:translate-y-0 rounded-2xl">
                <h4 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h4>
                <p className="text-brand-50 text-base leading-relaxed mb-8 font-medium">
                  {service.desc}
                </p>
                <div className="w-full h-px bg-white/20 mb-8" />
                <Link to={service.link || "#"} className="relative z-30">
                  <button className="bg-white text-brand-600 px-10 py-4 text-sm font-semibold hover:bg-brand-50 transition-all rounded-full flex items-center gap-2 shadow-xl shadow-black/10 active:scale-95">
                    {service.link ? "View Details" : "Get in touch"} <ArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;