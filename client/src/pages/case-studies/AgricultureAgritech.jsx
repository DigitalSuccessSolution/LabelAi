import React, { useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const AgricultureAgritechCaseStudy = () => {
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
            src="/Case-Studies-Final-hero/Agriculture_&_AgriTech.png" 
            alt="Agriculture Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — Agriculture & AgriTech
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Agriculture & AgriTech <br className="hidden md:block" />
             <span className="text-white">Data Annotation Services</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Empowering precision agriculture through high-quality domain-specific data labeling for Indian farming ecosystems.
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
                    src="/agriculture-overview.jpeg" 
                    alt="Agriculture Annotation Overview" 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Problem */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Problem</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  An India-based AgriTech company was developing an AI-driven platform for crop health monitoring, disease detection, and yield prediction using field images, drone footage, and satellite data. However, the model performance was inconsistent due to poor-quality training data, unstructured image collections, and lack of domain-specific annotations.
                </p>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  The primary challenges included:
                </p>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "High variability in Indian farming conditions (lighting, soil types, mixed cropping)",
                    "Limited labeled datasets for regional crops and diseases",
                    "Difficulty identifying early-stage plant diseases and pest damage",
                    "Inaccurate field boundary detection affecting area and yield estimation",
                    "Large volumes of raw agricultural imagery without standardized labeling"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  Due to these limitations, the AI models showed low accuracy, delayed insights, and reduced reliability for farmers and agribusiness decision-making.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* Solution */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Solution</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  Our data annotation team designed a scalable, agriculture-focused annotation pipeline tailored to Indian crop ecosystems. We created a high-quality, structured dataset using multi-level annotation techniques to improve model performance.
                </p>
                
                <h3 className="text-lg font-medium text-gray-900 pt-2">Key Implementation:</h3>

                <div className="space-y-5 pt-2">
                  {/* Preparation */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Dataset Preparation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Collected and processed 120,000+ images from smartphones, drones, and satellite sources",
                        "Data cleaning, normalization, and deduplication"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  {/* Multi-Level */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Multi-Level Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Image Classification: Healthy vs Diseased crops",
                        "Object Detection: Pest presence, weed clusters, fruit counting",
                        "Semantic Segmentation: Leaf disease regions and crop areas",
                        "Geospatial Annotation: Field boundary mapping from satellite imagery",
                        "Growth Stage Labeling for yield forecasting"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  {/* Domain */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Domain Expertise & Quality Control</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Agronomy-based labeling guidelines",
                        "Multi-layer quality checks with 98%+ accuracy",
                        "Scalable workforce for rapid project turnaround"
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

              {/* Results */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Results</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "32% improvement in disease detection accuracy",
                    "25% better yield prediction performance",
                    "Faster model training and deployment",
                    "Reliable field insights for precision agriculture applications"
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

export default AgricultureAgritechCaseStudy;
