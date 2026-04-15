import React, { useEffect } from 'react';
import { 
  ArrowRight, ShieldCheck, Zap, Target, Users, Compass, Award, CheckCircle2,
  Globe, Database, Activity, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH SPLIT LAYOUT */}
      <section className="relative min-h-[70vh] flex items-center pt-24 pb-12 bg-white border-b border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Side: Content */}
                <div className="space-y-10 text-left">
                    
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-[1.2] tracking-tight">
                        About <span className="text-brand-600">Us.</span>
                        
                    </h1>
                     <div className="w-16 h-1.5 bg-brand-600 rounded-full"></div>
                    <div className="space-y-4 text-gray-600 text-base md:text-[17px] font-normal leading-relaxed">
                        <p>
                          At LabelzAI, we believe that the future of artificial intelligence is not just built on algorithms—it is built on data that is precise, contextual, and intelligently structured. As a next-generation data annotation company in India, LabelzAI is dedicated to transforming raw, unstructured data into high-quality training datasets that power cutting-edge AI and machine learning models across the globe.
                        </p>
                        <p>
                          In today’s rapidly evolving digital economy, AI systems are becoming integral to industries such as autonomous driving, healthcare, retail, finance, and media. However, even the most advanced algorithms cannot function effectively without clean, annotated data. That’s where LabelzAI comes in. We act as the critical bridge between raw data and intelligent automation, enabling organizations to unlock the true potential of AI.
                        </p>
                    </div>
                 
                </div>

                {/* Right Side: Image */}
                <div className="relative group">
                    <div className="rounded-2xl overflow-hidden border border-slate-100 group shadow-2xl shadow-slate-200/50 relative z-10 transition-all duration-700 hover:scale-[1.02]">
                        <img src="/about_us.png" alt="About LabelzAI" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-linear-to-tr from-brand-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-50 rounded-full -z-0 blur-3xl opacity-60 animate-pulse"></div>
                    <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-slate-50 rounded-full -z-0 blur-3xl opacity-80"></div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="py-16 bg-white border-b border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Left Side: Image */}
                <div className="sticky top-32">
                    <div className="rounded-2xl overflow-hidden border border-slate-100 group shadow-2xl shadow-slate-200/40 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                        <img src="/about_story.png" alt="Our Story Visual" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-bl from-brand-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-50 rounded-full blur-3xl opacity-60"></div>
                </div>

                {/* Right Side: Content */}
                <div className="space-y-8 text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight">Our Story</h2>
                    <div className="w-16 h-1.5 bg-brand-600 rounded-full"></div>
                    <div className="space-y-6 text-gray-600 text-base md:text-[17px] font-normal leading-relaxed">
                        <p className="font-semibold text-slate-800 text-lg italic border-l-4 border-brand-600 pl-6 py-2 bg-slate-50 rounded-r-2xl">
                          "LabelzAI was founded with a simple but powerful belief: great AI begins with great data."
                        </p>
                        <p>
                          The founder recognized a critical gap in the AI ecosystem—while companies were investing heavily in models and algorithms, many struggled with inconsistent, low-quality training data that slowed development and impacted performance. Having deep exposure to the challenges faced by AI teams, the vision was clear: build a reliable, quality-first data annotation company from India that global organizations could trust.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
                           {["Quality First", "Scalability Always", "Trust Above All"].map(p => (
                             <div key={p} className="px-5 py-3 bg-white border border-slate-100 rounded-2xl flex items-center gap-3 text-brand-700 font-bold tracking-wider text-[11px] uppercase shadow-sm">
                                <CheckCircle2 size={16} className="text-brand-600" /> {p}
                             </div>
                           ))}
                        </div>
                        <p>
                          What began as a focused operation has grown into a scalable data annotation partner supporting diverse industries and complex AI use cases—from crop disease detection and medical imaging to autonomous driving and retail analytics.
                        </p>
                        <p>
                          Today, LabelzAI continues to empower AI innovators by delivering accurate, secure, and scalable training data solutions—while also creating meaningful employment and skill development opportunities across India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Building with Purpose Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-6 text-left">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight">Building with Purpose</h2>
                    <div className="w-16 h-1.5 bg-brand-600 rounded-full"></div>
                    <div className="space-y-4 text-slate-600 text-base md:text-[17px] leading-relaxed font-normal">
                        <p>
                          At LabelzAI, we believe data annotation is more than a service—it’s the foundation of responsible and scalable Artificial Intelligence. Our mission is to build AI systems with purpose, ensuring every dataset we create is accurate, ethical, and aligned with real-world impact. As a leading data annotation company in India, we combine domain expertise, advanced quality frameworks, and a skilled workforce to help businesses train reliable AI models across industries.
                        </p>
                        <p>
                          We focus on human-in-the-loop intelligence, where trained annotators and AI-assisted workflows work together to deliver high-precision labeling for image, video, text, audio, and LiDAR data. Every project is designed with strict quality control, data security, and compliance standards, enabling clients to deploy AI solutions with confidence.
                        </p>
                        <p>
                          Building with purpose also means creating social and economic impact. LabelzAI invests in workforce training, employment generation, and inclusive opportunities across India, helping organizations scale AI while supporting sustainable growth.
                        </p>
                        <p className="font-semibold text-brand-600">
                          From computer vision and NLP to autonomous systems and industry-specific AI, LabelzAI partners with startups and enterprises to transform raw data into meaningful intelligence.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { icon: <Target className="text-brand-600"/>, title: "Precision", desc: "Expert labeling for image, video, text, audio, and LiDAR data." },
                        { icon: <ShieldCheck className="text-brand-600"/>, title: "Compliance", desc: "Strict quality control, data security, and compliance standards." },
                        { icon: <Users className="text-brand-600"/>, title: "Impact", desc: "Inclusive opportunities and employment generation across India." },
                        { icon: <Activity className="text-brand-600"/>, title: "Scalability", desc: "Helping organizations scale AI while supporting sustainable growth." }
                    ].map((feature, i) => (
                        <div key={i} className="p-8 bg-white border border-slate-100 rounded-[30px] space-y-4 hover:border-brand-100 transition-all shadow-xs">
                           <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mb-4">{feature.icon}</div>
                           <h4 className="font-semibold text-slate-900 text-lg">{feature.title}</h4>
                           <p className="text-slate-500 text-[13px] leading-relaxed font-normal">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* 5. Our Mission Section */}
      <section className="py-16 bg-white border-y border-slate-50">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                {/* Left Side: Image */}
                <div className="relative order-2 lg:order-1">
                    <div className="rounded-2xl overflow-hidden border border-slate-100 group shadow-2xl shadow-slate-200/50 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                        <img src="/about_mission.png" alt="Advanced Data Annotation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-tr from-brand-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                </div>

                {/* Right Side: Content */}
                <div className="space-y-8 text-left order-1 lg:order-2">
                   <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight leading-tight">
                      Our Mission
                    </h2>
                     <div className="w-16 h-1.5 bg-brand-600 rounded-full"></div>
                    
                    <div className="space-y-6 text-gray-600 text-base md:text-[17px] font-normal leading-relaxed">
                       <p>
                         At LabelzAI, our mission is to power the future of artificial intelligence by delivering high-quality, scalable, and precise data annotation solutions that enable businesses to build smarter, faster, and more reliable AI models. In an era where data is the backbone of innovation, we are committed to transforming raw data into meaningful, structured intelligence that drives real-world impact.
                        </p>
                        <p>
                         We aim to bridge the gap between human intelligence and machine learning by combining expert-driven annotation processes with advanced technologies. Our focus is on accuracy, consistency, and speed—ensuring that every dataset we deliver meets the highest industry standards for AI training and deployment.

                        </p>
                        <p>
                         LabelzAI is dedicated to supporting global enterprises, startups, and research organizations across industries such as autonomous vehicles, healthcare, retail, and media. By offering customized annotation services—including image labeling, video annotation, text annotation, and 3D data processing—we empower organizations to unlock the full potential of their AI initiatives.

                        </p>
                        <p>
                       Our mission also extends beyond technology. We strive to create meaningful employment opportunities, foster skill development, and build a future-ready workforce in India. By investing in talent and innovation, we aim to position LabelzAI as a trusted global partner in the data annotation ecosystem.
                        </p>
                        <p>
                          Through continuous improvement, client-centric solutions, and a commitment to excellence, LabelzAI is not just supporting AI growth—we are shaping the future of intelligent systems worldwide.
                        </p>
                      
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 6. The Vision Ahead Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                {/* Left Side: Content */}
                <div className="space-y-8 text-left order-2 lg:order-1">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 tracking-tight leading-tight">
                      The Vision Ahead
                    </h2>
                    <div className="w-16 h-1.5 bg-brand-600 rounded-full"></div>
                    <div className="space-y-6 text-gray-600 text-base md:text-[17px] font-normal leading-relaxed">
                        <p>
                          LabelzAI is strategically advancing its position as a global provider of AI data annotation services, enabling enterprises to build high-performance machine learning models with precision and scalability. As demand for quality training data rises across industries, LabelzAI is expanding into key international markets including North America, Europe, and Asia-Pacific to deliver fast, accurate, and multilingual data labeling solutions.
                        </p>
                        <p>
                          With a distributed workforce and 24/7 operational capability, LabelzAI ensures seamless project execution and reduced turnaround times for global clients. Its expansion model is designed to support region-specific datasets, making AI systems more adaptive and globally relevant. This positions LabelzAI as a trusted partner for organizations developing solutions in autonomous vehicles, healthcare AI, retail analytics, and natural language processing.
                        </p>
                        <p>
                          At the enterprise level, LabelzAI offers end-to-end AI data solutions, including data collection, annotation, validation, and continuous dataset optimization. By integrating AI-assisted annotation tools with human-in-the-loop expertise, the company delivers consistent accuracy while improving efficiency and reducing costs.
                        </p>
                        <p>
                          Security and compliance are central to LabelzAI’s enterprise positioning. The company follows strict data governance practices aligned with global standards, ensuring secure handling of sensitive information. This makes it a reliable choice for large-scale enterprises and AI-driven organizations.
                        </p>
                        <p>
                          Through strategic partnerships and a scalable delivery model, LabelzAI is evolving beyond a service provider into a global AI infrastructure partner, empowering businesses to accelerate innovation and succeed in the next era of intelligence.
                        </p>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="lg:sticky lg:top-32 order-1 lg:order-2 space-y-8">
                    <div className="rounded-2xl overflow-hidden border border-slate-100 group shadow-2xl shadow-slate-200/50 relative z-10 transition-transform duration-700 hover:scale-[1.02]">
                        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1400" alt="Vision Visual" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-br from-brand-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
                </div>
            </div>
        </div>
      </section>

      {/* Final Commitment Footer */}
      <section className="py-16 md:py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
             <div className="space-y-6">
                <p className="text-brand-600 font-bold uppercase tracking-[0.4em] text-[10px]">A Commitment to Excellence</p>
                <div className="space-y-2">
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
                        At LabelzAI, this is more than a service.
                    </h2>
                    <h2 className="text-xl md:text-2xl font-semibold text-brand-600 tracking-tight">
                        It’s a commitment.
                    </h2>
                </div>
            </div>
            
            <p className="text-gray-500 text-lg md:text-xl font-light italic max-w-4xl mx-auto font-serif leading-relaxed px-4">
                "Because in the end, the future of AI will be defined not just by how powerful models become — but by how carefully the data behind them is built."
            </p>

            <div className="pt-10 flex flex-col md:flex-row items-center justify-center gap-8">
                <Link to="/contact">
                   <button className="flex items-center gap-3 px-12 py-5 bg-slate-900 text-white rounded-full font-semibold text-lg hover:bg-brand-600 transition-all mx-auto shadow-xl shadow-slate-900/10 active:scale-95">
                      Get Started Today <ArrowRight size={20} />
                   </button>
                </Link>
            </div>
        </div>
      </section>

    </div>
  );
};

export default About;
