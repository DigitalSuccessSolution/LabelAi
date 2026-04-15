import React, { useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const EcommerceRetailCaseStudy = () => {
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
            src="/Case-Studies-Final-hero/E-commerce.png" 
            alt="Ecommerce Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — E-commerce & Retail
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             E-commerce Product Data Annotation <br className="hidden md:block" />
             That Reduced Returns by 18% and <span className="text-white">Improved Search Accuracy</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Accelerating the move to visual commerce through high-throughput precision product attribute labeling and catalog enrichment.
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
                    src="/ecommerce-overview.png" 
                    alt="E-commerce Annotation Overview" 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Meta Info */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Project Overview</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    <><span className="font-semibold text-gray-900">Industry:</span> E-commerce & Retail</>,
                    <><span className="font-semibold text-gray-900">Location:</span> India</>,
                    <><span className="font-semibold text-gray-900">Data Volume:</span> 3 Million+ SKUs</>,
                    <><span className="font-semibold text-gray-900">Services Used:</span> Image Annotation, Attribute Tagging, Text Classification, Visual Similarity Labeling</>
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* The Client */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">The Client</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  A rapidly scaling Indian multi-vendor marketplace onboarding 10,000+ new products daily across fashion, electronics, and home categories. The platform struggled with inconsistent product data affecting customer experience and sales performance.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* The Challenge */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">The Challenge</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  The marketplace faced critical catalog intelligence issues:
                </p>
                
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "Incorrect product categories assigned by sellers",
                    "Missing attributes like color, size, material, and style",
                    "Poor-quality or misleading product images",
                    "High return rates in fashion due to product mismatch",
                    "Low search relevance and weak recommendation performance",
                    "Manual catalog review that couldn’t scale with growth"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 pt-2">Business Impact:</h3>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "28% return rate in fashion",
                    "Low product discoverability",
                    "Delayed listing approvals (up to 48 hours)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* The Solution */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Our Data Annotation Solution</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  We deployed a retail-focused annotation pipeline designed for high accuracy, scalability, and fast turnaround.
                </p>

                <div className="space-y-5 pt-2">
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">1. Product Image Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Bounding box labeling for product detection",
                        "Background quality validation",
                        "Image compliance checks (blur, watermark, multi-product issues)",
                        "Variant identification (color, design differences)"
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
                    <h3 className="text-lg font-medium text-gray-900">2. Attribute Tagging (Fine-Grained)</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Color, pattern, fabric, sleeve type, fit, material",
                        "Electronics specifications and feature tagging",
                        "Home product style and usage classification"
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
                    <h3 className="text-lg font-medium text-gray-900">3. Product Text Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Category classification and hierarchy mapping",
                        "Title normalization and keyword tagging",
                        "Attribute extraction from descriptions",
                        "Brand and variant identification"
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
                    <h3 className="text-lg font-medium text-gray-900">4. Visual Similarity Labeling</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Same style vs different style tagging",
                        "Look-alike product grouping",
                        "Dataset creation for visual search and recommendations"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-gray-200" />

                  {/* Item 5 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">5. Quality Assurance Framework</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Two-layer human QA",
                        "Retail domain-trained annotators",
                        "95–98% accuracy benchmarks",
                        "Active learning for continuous model improvement"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-900 font-medium text-base md:text-lg leading-snug pt-3">
                      Processing Capacity: <span className="text-gray-700 font-normal">200,000+ images per day</span>
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Why E-commerce Companies Choose Our Annotation Services */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Why E-commerce Companies Choose Us</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "Retail domain expertise (Fashion, Electronics, Grocery, Home)",
                    "Scalable teams for high-volume catalog processing",
                    "Multilingual annotation for Indian marketplaces",
                    "Fast turnaround with enterprise-grade QA",
                    "Cost-effective, India-based operations"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Use Cases We Support */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Use Cases We Support</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "Marketplace catalog standardization",
                    "AI-powered product search & recommendations",
                    "Visual search and similarity engines",
                    "Automated listing quality control",
                    "Return reduction through accurate product data"
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

export default EcommerceRetailCaseStudy;
