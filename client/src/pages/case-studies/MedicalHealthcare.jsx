import React, { useEffect } from 'react';
import { 
  CheckCircle2, ChevronRight, Database, Shield, Activity, ArrowRight,
  Phone, Mail, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const MedicalHealthcareCaseStudy = () => {
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
            src="/Case-Studies-Final-hero/Medical.png" 
            alt="Medical Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — Medical & Healthcare Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Medical Imaging Annotation <br className="hidden md:block" />
             <span className="text-white">for AI Disease Detection.</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
            Transforming 200,000+ clinical images into high-fidelity ground truth for radiology, oncology, and surgical AI.
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
                <div className=" overflow-hidden border border-gray-100 shadow-sm">
                  <img 
                    src="/medical-overview.png" 
                    alt="Medical Annotation Overview" 
                    className="w-full h-[300px] md:h-[400px] object-cover "
                  />
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Problem & Solution */}
              <div className="space-y-5">
                {/* Problem */}
                <div className="space-y-2">
                  <div className="space-y-2 text-left">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900">Problem</h2>
                    <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                    A health-tech company developing AI models for early disease detection struggled with inconsistent and low-quality labeled medical images. Their datasets included X-rays, CT scans, and MRI images, but lacked standardized annotations from trained professionals. This resulted in poor model accuracy, delayed development timelines, and regulatory concerns regarding data quality and clinical reliability.
                  </p>
                </div>

                <hr className="border-gray-300" />

                {/* Solution */}
                <div className="space-y-2">
                  <div className="space-y-2 text-left">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900">Solution</h2>
                    <div className="h-1 w-12 bg-brand-600"></div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                    Our data annotation team built a clinically guided annotation workflow using trained medical domain specialists. We delivered high-precision bounding boxes, segmentation masks, and classification labels for abnormalities such as tumors, fractures, and lesions. A multi-layer quality assurance process and standardized labeling protocols ensured consistency across 200,000+ medical images. As a result, the client improved diagnostic model accuracy by 32%, accelerated validation cycles, and achieved faster readiness for clinical deployment.
                  </p>
                </div>

                <hr className="border-gray-300" />

                {/* Types of Case Studies */}
                <div className="space-y-5">
                  <div className="space-y-2 text-left">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900">Types of Case Studies</h2>
                    <div className="h-1 w-12 bg-brand-600"></div>
                  </div>

                  <div className="space-y-5">
                    
                    {/* Item 1 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">1) Radiology Image Segmentation Case Studies</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Pixel-level or polygon segmentation of organs, tumors, lesions, and abnormalities.
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Lung nodule segmentation for lung cancer detection", "Brain tumor delineation for neuro-oncology AI", "Liver/kidney lesion detection for oncology screening"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Improves model accuracy for early-stage disease detection", "Enables quantitative measurements (size, volume, growth tracking)"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200" />
                    
                    {/* Item 2 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">2) Disease Classification & Labeling Case Studies</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Image-level labeling (Normal / Abnormal / Disease type / Severity).
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Pneumonia or TB detection from chest X-rays", "Diabetic retinopathy grading from fundus images", "Benign vs malignant classification in mammograms"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Supports screening AI systems", "Reduces radiologist workload in high-volume diagnostics"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200" />
                    
                    {/* Item 3 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">3) Object Detection & Localization Case Studies</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Bounding boxes or keypoint annotation to locate abnormalities.
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Fracture detection in orthopedic X-rays", "Lung nodule localization in CT scans", "Polyp detection in endoscopy videos"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Enables real-time detection systems", "Useful for triage and clinical decision support"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Item 4 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">4) 3D Volume Annotation Case Studies (Advanced)</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Slice-by-slice annotation across CT/MRI volumes.
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Tumor volume tracking over time", "Organ segmentation for surgical planning AI", "Radiation therapy planning datasets"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Critical for clinical-grade AI models", "Enables longitudinal disease monitoring"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Item 5 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">5) Medical Video Annotation Case Studies</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Frame-by-frame labeling in dynamic imaging.
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Polyp detection in colonoscopy", "Cardiac function analysis from echocardiograms", "Fetal growth measurement in ultrasound"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Enables real-time clinical AI", "Supports minimally invasive procedure intelligence"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Item 6 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">6) Landmark & Measurement Annotation Case Studies</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Keypoint annotation and clinical measurement tagging.
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Fetal biometric measurements", "Joint angle analysis in orthopedics", "Cardiac chamber dimension measurement"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Supports automated clinical reporting", "Enhances precision diagnostics"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    {/* Item 7 */}
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-medium text-gray-900">7) Multimodal & Metadata-Enriched Case Studies</h3>
                        <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                          <strong className="text-gray-900 font-medium">Focus:</strong> Linking imaging annotations with Radiology reports, Patient demographics, etc.
                        </p>
                      </div>
                      
                      <div className="space-y-2 pl-0 md:pl-4">
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Typical Use Cases</h4>
                          <div className="space-y-1 pt-1">
                            {["Predictive disease progression models", "Outcome-based AI training", "Personalized diagnosis systems"].map((item, i) => (
                              <div key={i} className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                                <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-lg font-medium text-gray-900">Value Proposition</h4>
                          <div className="space-y-1 pt-1">
                            {["Enables next-generation predictive healthcare AI"].map((item, i) => (
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
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



    </div>
  );
};

export default MedicalHealthcareCaseStudy;
