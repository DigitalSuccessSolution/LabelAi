import React, { useEffect } from 'react';
import { 
  ChevronRight, ArrowRight, CheckCircle2, MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactCard from '../../components/ContactCard';

const AutonomousMobilityCaseStudy = () => {
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
            src="/Case-Studies-Final-hero/Autonomous_Vehicles_&_Mobility_Data_Annotation.png" 
            alt="Autonomous Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Case Study — Autonomous Mobility
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             Object Detection & Lane Segmentation <br className="hidden md:block" />
             for <span className="text-white">Self-Driving AI Systems</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             Providing high-fidelity ground truth for complex urban driving environments, specializing in sensor fusion and corner-case labeling.
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
                    src="/autonomous-overview.png" 
                    alt="Autonomous Mobility Overview" 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
                <hr className="border-gray-300" />
              </div>

              {/* Industry Overview */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Industry Overview</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  The autonomous vehicle industry is rapidly transforming global transportation through artificial intelligence, computer vision, and machine learning technologies. Self-driving cars rely heavily on high-quality annotated datasets to train AI models that can accurately detect objects, interpret road conditions, and understand lane structures in real-time driving environments.
                </p>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  Autonomous driving companies, automotive manufacturers, and mobility startups collect massive volumes of visual data using cameras, LiDAR sensors, and radar systems mounted on vehicles. However, this raw data must be precisely annotated before it can be used to train AI models for perception tasks such as object detection, lane segmentation, and road scene understanding.
                </p>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  To improve the performance of their perception models, the client required a reliable partner capable of delivering high-accuracy dataset annotation for autonomous driving applications at scale.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* Project Objective */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Project Objective</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  The client’s goal was to build a robust computer vision model capable of accurately identifying road elements and lane boundaries in complex urban and highway environments.
                </p>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  The primary objectives included:
                </p>
                
                <div className="space-y-1 pl-0 md:pl-4 pt-1">
                  {[
                    "Annotating road objects such as vehicles, pedestrians, cyclists, and traffic signs",
                    "Performing lane segmentation to detect lane boundaries and road markings",
                    "Creating high-quality training datasets for AI perception models",
                    "Improving model accuracy for Advanced Driver Assistance Systems (ADAS)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-300" />

              {/* Problem Statement */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Problem Statement – Autonomous Vehicle Dataset Annotation for Object Detection & Lane Segmentation</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug">
                  The development of autonomous vehicles depends heavily on advanced computer vision systems capable of accurately interpreting complex road environments. These systems rely on machine learning models that must be trained using large volumes of precisely annotated datasets. However, raw driving data collected from vehicle-mounted cameras and sensors cannot be directly used for model training without high-quality object detection such as car , lane etc. and lane segmentation annotations.
                </p>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  Autonomous driving datasets typically contain thousands to millions of image and video frames captured across diverse environments such as urban streets, highways, intersections, and rural roads. Within these datasets, AI models must learn to identify and understand various road elements including vehicles, pedestrians, cyclists, traffic lights, road signs, and lane markings. Without accurate labeling of these elements, machine learning models struggle to correctly detect objects, recognize lane boundaries, and interpret drivable road areas.
                </p>
                <p className="text-gray-700 text-base md:text-lg font-normal leading-snug pt-2">
                  One of the primary challenges in autonomous vehicle dataset preparation is the complexity and variability of real-world driving conditions. Road scenes often include occluded objects, dense traffic, changing lighting conditions, weather variations, and irregular lane markings. These factors make the annotation process significantly more complex and require specialized expertise to ensure labeling accuracy and consistency across large datasets.
                </p>
              </div>

              <hr className="border-gray-300" />

              {/* Our Autonomous Mobility Annotation Solutions */}
              <div className="space-y-5">
                <div className="space-y-2 text-left">
                  <h2 className="text-xl md:text-2xl font-medium text-gray-900">Our Autonomous Mobility Annotation Solutions</h2>
                  <div className="h-1 w-12 bg-brand-600"></div>
                </div>

                <div className="space-y-5 pt-2">
                  {/* Item 1 */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium text-gray-900">1. 2D Image & Video Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Bounding boxes for vehicles, pedestrians, animals, obstacles",
                        "Polygon annotation for irregular objects",
                        "Lane detection and road boundary tracing",
                        "Object tracking across frames",
                        "Traffic signal and sign labeling",
                        "Use cases: ADAS, object detection, behavior prediction"
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
                    <h3 className="text-lg font-medium text-gray-900">2. Semantic Segmentation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Drivable vs. non-drivable areas",
                        "Road surface types (potholes, speed breakers, mud, gravel)",
                        "Sidewalks, medians, construction zones",
                        "Urban and highway environments",
                        "Use cases: Path planning, scene understanding"
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
                    <h3 className="text-lg font-medium text-gray-900">3. 3D LiDAR & Sensor Fusion Annotation</h3>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "3D cuboid annotation for vehicles and pedestrians",
                        "Point cloud segmentation",
                        "Camera–LiDAR synchronization",
                        "Motion trajectory labeling",
                        "Use cases: Autonomous navigation, object tracking, perception systems"
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
                    <h3 className="text-lg font-medium text-gray-900">4. India-Specific Edge Case Annotation</h3>
                    <p className="text-gray-700 text-base md:text-lg font-normal leading-snug mb-2">
                      We specialize in rare and high-risk scenarios:
                    </p>
                    <div className="space-y-1 pl-0 md:pl-4 pt-1">
                      {[
                        "Two-wheelers weaving through traffic",
                        "Auto-rickshaws and overloaded vehicles",
                        "Jaywalking and roadside vendors",
                        "Animals crossing roads",
                        "Wrong-side driving",
                        "Night, rain, fog, and low-visibility conditions"
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                          <span className="text-gray-700 text-base md:text-lg leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-900 font-semibold text-base md:text-lg leading-snug pt-3">
                      Result: <span className="text-gray-700 font-normal">Stronger models that perform in real-world Indian conditions.</span>
                    </p>
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

export default AutonomousMobilityCaseStudy;
