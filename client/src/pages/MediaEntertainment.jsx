import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Play, Monitor, Music, Film, Zap, Search, ShieldCheck, Heart, Target, Layers, Box, FileText, Database, ClipboardCheck, BarChart3, Clock,
  Video, Mic, MessageSquare, Plus, Activity, AlertCircle, TrendingDown, Users, Smile, Eye, Share2, Scan, FileSearch, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MediaEntertainment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Video Content Understanding & Indexing",
      icon: <Video size={20} />,
      image: "/videoannotation/segmentation.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate videos with scene classification, object detection, action recognition, and temporal tagging. This enables automated content search, highlight generation, contextual advertising, and intelligent media indexing.</span>
        </div>
      )
    },
    {
      title: "2. Content Moderation & Safety",
      icon: <ShieldCheck size={20} />,
      image: "/images/media/content_moderation.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Our teams label sensitive or restricted content such as violence, adult material, harmful behavior, and policy violations—helping platforms maintain brand safety and comply with community standards.</span>
        </div>
      )
    },
    {
      title: "3. Audio Annotation & Speech Intelligence",
      icon: <Mic size={20} />,
      image: "/audioannotation/stt.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We provide:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Speech-to-text transcription",
               "Speaker diarization",
               "Emotion and tone detection",
               "Background sound and music classification"
             ].map((item, i) => (
               <div key={i} className="flex items-start gap-4">
                 <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                 <span className="text-gray-700 text-base md:text-lg font-normal leading-snug">{item}</span>
               </div>
             ))}
           </div>
        </div>
      )
    },
    {
      title: "4. Facial, Emotion & Audience Analytics",
      icon: <Smile size={20} />,
      image: "/videoannotation/behavior.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate facial expressions, age groups, gaze direction, and engagement signals for use in audience measurement, ad effectiveness analysis, and content optimization.</span>
        </div>
      )
    },
    {
      title: "5. Recommendation & Personalization Data (NLP & Behavior Annotation)",
      icon: <Target size={20} />,
      image: "/nlpservice/text-classification.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We structure user interaction data such as watch history, search queries, likes, comments, and preferences. This helps train recommendation engines that deliver personalized content experiences across OTT and digital platforms.</span>
        </div>
      )
    }
  ];

  const labelingTypes = [
    { title: "Video Labeling", desc: "Tagging scenes, actions, objects, and transitions." },
    { title: "Audio Labeling", desc: "Annotating speech, music, sound effects, and emotions." },
    { title: "Image Labeling", desc: "Identifying characters, objects, logos, and backgrounds." },
    { title: "Text Labeling", desc: "Tagging subtitles, scripts, captions, and metadata." },
    { title: "Content Classification", desc: "Categorizing genres, themes, moods, and audience types." },
    { title: "Sentiment & Emotion Labeling", desc: "Detecting tone, mood, or viewer reactions." },
    { title: "OCR Labeling", desc: "Extracting text from posters, frames, and visual media assets." }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/Media_&_Entertainment.png" 
            alt="Media Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Media & <br className="hidden md:block" />
             <span className="text-white">Entertainment Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Build AI systems for content understanding, personalization, and audience analytics.
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
                    Media & Entertainment
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                We provide high-quality data annotation services for the Media & Entertainment industry, including video annotation, content moderation, audio transcription, speaker diarization, emotion detection, facial analysis, and user behavior labeling. Our services support OTT platforms, broadcasters, gaming companies, and digital media organizations in building AI systems for content understanding, personalization, and audience analytics.
             </p>
             <p>
                The Media & Entertainment industry is rapidly transforming through AI-driven content intelligence, personalization, and automation. From OTT platforms and digital publishers to gaming and broadcasting companies, high-quality data annotation is essential to help AI systems understand visual, audio, and user interaction data. As a data annotation startup in India, we support media organizations with scalable, accurate, and multilingual labeling services that power next-generation content experiences.
             </p>
        </div>
      </section>

      {/* The Industry Challenge */}
      <section className="py-16 md:py-24 bg-slate-50">
         <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-6">
            <div className="space-y-2 text-left mb-6">
                <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                   The Industry Challenge
                </h2>
                <div className="h-1 w-12 bg-brand-600"></div>
            </div>
            
            <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
               Media companies today face critical AI data gaps:
            </p>

            <div className="space-y-4 pt-2 pb-2">
               {[
                 "Unstructured video and audio content with limited metadata",
                 "Poor content discoverability and weak search performance",
                 "Inaccurate recommendation engines reducing watch time",
                 "Difficulty moderating harmful or non-compliant content at scale",
                 "Multilingual content without proper tagging and transcription",
                 "High operational costs for manual content management"
               ].map((item, i) => (
                 <div key={i} className="flex items-start gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                   <span className="text-gray-700 text-base md:text-lg leading-snug font-normal">{item}</span>
                 </div>
               ))}
            </div>

            <p className="text-gray-900 font-medium text-base md:text-lg leading-snug mt-4">
               Without high-quality training data, AI models fail to deliver business impact.
            </p>
         </div>
      </section>

      {/* 2. How We Support the Ecosystem */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               How We Support <br /> the Media & Entertainment Ecosystem
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

      {/* 3. Combined Labeling Types & Supported Industries Grid */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
               
               {/* Types of data labeling */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Types of data labeling in the Media & Entertainment industry:
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {labelingTypes.map((item, i) => (
                       <div key={i} className="flex items-start gap-4">
                         <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                         <span className="text-gray-700 text-base leading-snug">
                           <strong className="font-semibold text-gray-900">{item.title}</strong> – {item.desc}
                         </span>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Industries We Support Within Media */}
               <div className="space-y-6">
                  <div className="space-y-2 text-left mb-6">
                      <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                         Industries We Support Within Media
                      </h2>
                      <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <div className="space-y-4 pt-2">
                     {[
                       "OTT & Streaming Platforms",
                       "Short Video & Creator Apps",
                       "Film & Production Houses",
                       "Broadcast & Sports Networks",
                       "Media Monitoring & Analytics Companies",
                       "Digital Advertising Platforms"
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
               Ready to Scale Your Media AI?
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

export default MediaEntertainment;
