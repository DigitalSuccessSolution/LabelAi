import React, { useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const EducationEdtechCaseStudy = () => {
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
            src="/Case-Studies-Final-hero/Education_&_Edu_Tech.png" 
            alt="EdTech Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — Education & EdTech
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             AI-Powered Learning Personalization for an EdTech Platform <br className="hidden md:block" />
             through <span className="text-white">High-Quality Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
            Enhancing the Indian EdTech industry through high-quality annotation for automated assessments and personalized learning paths.
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
                    src="/edtech-overview.png" 
                    alt="Education & EdTech Annotation Overview" 
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
                  A fast-growing Indian EdTech Industry aimed to enhance its AI-driven learning platform to deliver personalized content, automated assessments, and intelligent student performance insights. However, inconsistent and unstructured educational data was limiting model accuracy and learning recommendations.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* Problem */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Problem</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  The EdTech client faced multiple challenges in scaling their AI capabilities:
                </p>
                
                <div className="space-y-5 pt-2">
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Unstructured Learning Data</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Large volumes of student responses, handwritten assignments, video lectures, and interaction logs were not labeled or standardized.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Low Accuracy in AI-Based Assessment</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Automated grading models struggled with subjective answers, handwriting variations, and multilingual content.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Poor Content Recommendation</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      The recommendation engine failed to match students with the right difficulty level and learning path due to insufficient labeled behavioral data.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">Scalability Issues</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                      Rapid user growth required large-scale annotation across subjects, grade levels, and formats (text, image, audio, and video).
                    </p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Solution */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Solution</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  Our data annotation startup designed a domain-specific Education annotation pipeline to support scalable and accurate AI model training.
                </p>

                <div className="space-y-5 pt-2">
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">1. Multi-Format Educational Data Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Text annotation for student answers (objective and descriptive)",
                        "Handwritten answer labeling for OCR and evaluation models",
                        "Video annotation for lecture segmentation and topic tagging",
                        "Audio annotation for speech-to-text and pronunciation analysis"
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
                    <h3 className="text-lg font-medium text-gray-900">2. Semantic & Academic Structuring</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Concept tagging based on curriculum standards (CBSE, ICSE, State Boards)",
                        "Difficulty-level classification (Beginner, Intermediate, Advanced)",
                        "Learning objective mapping for adaptive learning models"
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
                    <h3 className="text-lg font-medium text-gray-900">3. Student Behavior & Interaction Labeling</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Engagement tracking from clickstream and session data",
                        "Learning pattern classification (fast learner, struggling learner, revision-focused)",
                        "Drop-off and confusion point identification"
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
                    <h3 className="text-lg font-medium text-gray-900">4. Quality Assurance Framework</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Subject-matter expert (SME) validation",
                        "Multi-layer review process with 98%+ annotation accuracy",
                        "Scalable workforce for large dataset turnaround"
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
                    "35% improvement in automated grading accuracy",
                    "28% increase in student engagement through personalized recommendations",
                    "40% faster content discovery and adaptive learning path generation",
                    "Scalable dataset covering 500,000+ annotated education data points",
                    "Enhanced AI performance for OCR, NLP, recommendation, and learning analytics"
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

export default EducationEdtechCaseStudy;
