import React, { useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const MediaEntertainmentCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Case-Studies-Final-hero/Media.png" 
            alt="Media Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — Media & Entertainment
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Scaling AI Content Intelligence for a <br className="hidden md:block" />
             <span className="text-white">Global Media Platform</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Transforming raw video libraries into structured intelligence through high-precision scalable annotation for better recommendation and automated moderation.
          </p>
        </div>
      </section>

      {/* Main Content with Sticky Sidebar */}
      <section className="pt-16 md:pt-24 pb-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Sticky Sidebar Container */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 h-fit">
                <ContactCard />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Overview Image */}
              <div className="space-y-10">
                <div className="overflow-hidden border border-gray-100 shadow-sm">
                  <img 
                    src="/media-overview.png" 
                    alt="Media & Entertainment Overview" 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Overview */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Overview</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  A fast-growing OTT and digital media platform needed to enhance its AI capabilities for content recommendation, scene understanding, and automated moderation. However, inconsistent metadata, unstructured video libraries, and lack of high-quality labeled datasets were limiting model accuracy. Our India-based data annotation startup delivered a scalable, high-precision annotation pipeline to transform raw media into AI-ready intelligence.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* The Problem */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">The Problem</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  The client was managing 50,000+ hours of video content across movies, series, and user-generated media but faced several challenges:
                </p>
                
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "Poor recommendation accuracy due to incomplete content tagging",
                    "Difficulty in detecting sensitive or policy-violating scenes",
                    "Lack of structured metadata for genres, emotions, and visual elements",
                    "High manual workload for content classification and moderation",
                    "Inability to scale annotation for continuous content uploads"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  These gaps were impacting viewer engagement, compliance, and platform growth.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* The Solution */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">The Solution</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  Our data annotation team designed a domain-specific media labeling framework with scalable workflows.
                </p>

                <div className="space-y-5 pt-2">
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">1. Multi-Level Video Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Scene segmentation and timestamp labeling",
                        "Object and character identification",
                        "Emotion and mood tagging (action, romance, suspense, etc.)",
                        "Context-based genre and theme classification"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  {/* Item 2 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">2. Content Moderation Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Detection of violence, adult content, and sensitive visuals",
                        "Policy-based tagging for regional compliance",
                        "Audio transcript tagging for abusive or harmful language"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  {/* Item 3 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">3. Metadata Enrichment</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Cast and character mapping",
                        "Activity and environment labeling (indoor, outdoor, crowd scenes)",
                        "Thumbnail optimization tagging for AI-driven previews"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  {/* Item 4 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">4. Scalable Production Pipeline</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Annotated 20,000+ hours of video content",
                        "QA accuracy maintained at 98%+",
                        "Secure and confidential data handling aligned with global standards"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Results & Business Impact */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Results & Business Impact</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "35% improvement in content recommendation accuracy",
                    "40% faster automated moderation workflows",
                    "Increased viewer engagement and watch time",
                    "Reduced manual tagging costs by 50%",
                    "Enabled scalable AI deployment for future content growth"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
};

export default MediaEntertainmentCaseStudy;
