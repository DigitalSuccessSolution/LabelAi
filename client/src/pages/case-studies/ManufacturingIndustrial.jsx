import React, { useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const ManufacturingIndustrialCaseStudy = () => {
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
            src="/Case-Studies-Final-hero/Manufacturing.png" 
            alt="Manufacturing Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — Manufacturing & Industrial
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Manufacturing & Industrial Automation <br className="hidden md:block" />
             <span className="text-white">Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Powering automated quality inspection and predictive maintenance through high-precision defect and anomaly labeling for Industry 4.0.
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
                    src="/manufacturing-overview.png" 
                    alt="Manufacturing Annotation Overview" 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Client Overview */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Client Overview</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  A leading industrial automation company in India was developing AI-powered machine vision systems for automated quality inspection, predictive maintenance, and robotic process monitoring across multiple manufacturing plants. The client required large-scale, high-precision annotated datasets to train deep learning models capable of identifying defects, equipment anomalies, and production inconsistencies in real-time.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* The Problem */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">The Problem</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                
                <div className="space-y-5">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">High Defect Variability</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Manufactured components showed multiple defect types such as cracks, dents, misalignment, surface scratches, and welding faults. The model struggled due to inconsistent labeling quality.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Complex Industrial Environments</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Images and videos were captured from assembly lines, conveyor systems, and robotic workstations with varying lighting, angles, and motion blur.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Scalability Challenges</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      The client needed 200,000+ annotated images and video frames within a tight production timeline to support rapid AI deployment.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Domain-Specific Expertise Required</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Generic annotation teams lacked understanding of industrial components, machine parts, and manufacturing tolerances.
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Our Solution */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Our Solution</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>

                <div className="space-y-5">
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">1. Industrial-Specific Annotation Framework</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Our team built a customized ontology covering:
                    </p>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Surface defects (scratch, crack, corrosion)",
                        "Assembly errors (misalignment, missing parts)",
                        "Welding and casting defects",
                        "Component classification and part segmentation"
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
                    <h3 className="text-lg font-medium text-gray-900">2. Multi-Level Annotation Services</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Bounding boxes for defect detection",
                        "Polygon segmentation for precision surface analysis",
                        "Keypoint labeling for robotic alignment tasks",
                        "Video frame annotation for conveyor and robotic movement monitoring"
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
                    <h3 className="text-lg font-medium text-gray-900">3. Quality-First Workflow</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Domain training for annotators on manufacturing standards",
                        "Multi-layer QA process (Annotator → Reviewer → Audit)",
                        "99%+ annotation accuracy achieved"
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
                    <h3 className="text-lg font-medium text-gray-900">4. Scalable Delivery Pipeline</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Annotated 220,000+ images and 15,000 video frames",
                        "Cloud-based workflow for faster turnaround",
                        "Delivered in client-ready formats compatible with TensorFlow, PyTorch, and custom machine vision platforms"
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
                    "35% improvement in defect detection accuracy",
                    "Reduced manual inspection costs by 40%",
                    "Enabled real-time quality monitoring on production lines",
                    "Faster AI model deployment across 5 manufacturing facilities",
                    "Improved production consistency and reduced rejection rates"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Why This Matters for Manufacturing AI */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Why This Matters for Manufacturing AI</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  High-quality annotated data is the backbone of smart factories and Industry 4.0. Accurate labeling enables:
                </p>
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "Automated visual inspection",
                    "Predictive maintenance",
                    "Robotics automation",
                    "Production optimization",
                    "Worker safety monitoring"
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

export default ManufacturingIndustrialCaseStudy;
