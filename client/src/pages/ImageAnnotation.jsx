import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, Database, Layers, Target, Box, FileText, ClipboardCheck, BarChart3, ShieldCheck, Zap, Activity, Play, Clock, Search, Frame, Scan, MousePointer2, Type
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ImageAnnotation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900 ">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/Service/Image-Annotations.png" 
            alt="Image Annotation Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider font-bold">
             Services We Provide — Data Annotation
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl uppercase">
             Image Annotation Services — <br className="hidden md:block" />
             <span className="text-white">Precision That Teaches Machines to See</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             We transform raw images into structured intelligence that powers computer vision systems with human-level accuracy.
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
                    Visual Data Intelligence
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                At LabelzAI, we transform raw images into structured intelligence that powers computer vision systems. Our image annotation services are designed to help AI models recognize, interpret, and make decisions from visual data with human-level accuracy.
             </p>
             <p>
                From simple object tagging to complex scene understanding, our trained annotators deliver high-quality labels across diverse use cases — enabling faster model training, improved accuracy, and reliable real-world performance.
             </p>
        </div>
      </section>

      {/* "What We Annotate" Grid */}
      <section className="py-24 bg-slate-50 border-white text-center">
         <div className="max-w-4xl mx-auto px-6 md:px-12">
            <div className="space-y-2 text-center mb-12 flex flex-col items-center">
                <h2 className="text-xl md:text-3xl font-medium text-gray-900 uppercase">
                   What We Annotate
                </h2>
                <div className="h-1 w-12 bg-brand-600"></div>
            </div>
            <p className="text-gray-600 text-base md:text-lg mb-8 text-center">
                We support a full range of image annotation techniques:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left">
               {[
                 "Bounding Boxes (2D & Rotated)",
                 "Semantic Segmentation",
                 "Instance Segmentation",
                 "Polygon Annotation",
                 "Keypoint & Landmark Annotation",
                 "Image Classification & Tagging",
                 "Object Tracking (Frame-level for image sequences)",
                 "OCR & Text-in-Image Labeling"
               ].map((item, index) => (
                 <div key={index} className="flex items-start gap-4">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                   <span className="text-gray-700 text-base leading-snug font-normal">{item}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Technical Deep Dive Sections */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32 mb-24">
            
            {/* Bounding Boxes */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Bounding Boxes (2D & Rotated)
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Bounding box annotation is used to detect and localize objects within images or video frames by drawing precise rectangular boundaries around them. Standard 2D bounding boxes align horizontally and vertically, making them ideal for common object detection tasks. For objects that appear tilted or at an angle, rotated bounding boxes provide tighter, orientation-aware labeling for higher accuracy.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/bounding_boxes_2d_rotated.png" alt="Bounding Boxes" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Semantic Segmentation */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Semantic Segmentation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Semantic Segmentation is a pixel-level data annotation technique that classifies every pixel in an image into predefined categories, enabling AI models to understand objects and their precise boundaries. It is widely used in applications such as autonomous driving, medical imaging, agriculture, and smart surveillance.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/semantic_segmentation_vision.png" alt="Semantic Segmentation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Instance Segmentation */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Instance Segmentation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Instance Segmentation is an advanced image annotation technique that not only identifies object categories but also distinguishes each individual object separately at the pixel level. Unlike traditional bounding boxes or semantic segmentation, this method creates precise masks for every object instance, enabling AI models to understand complex scenes with exceptional accuracy.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/instance_segmentation_vision.png" alt="Instance Segmentation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Polygon Annotation */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Polygon Annotation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Polygon annotation enables pixel-level accuracy for complex object shapes that standard boxes cannot capture. Our expert annotators carefully outline irregular objects—such as pedestrians, vehicles, machinery, medical structures, and retail items—using multi-point polygons to preserve true boundaries and fine details. This method significantly improves model performance in applications like autonomous driving, medical imaging, agriculture, and instance segmentation.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/polygon_annotation_vision.png" alt="Polygon Annotation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Keypoint & Landmark Annotation */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Keypoint & Landmark Annotation
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Transform movement, structure, and spatial relationships into precise machine intelligence with our Keypoint & Landmark Annotation services. We accurately label critical points on humans, objects, and environments to enable advanced applications such as pose estimation, facial recognition, gesture tracking, medical analysis, AR/VR, and sports analytics. With pixel-level precision, multi-level quality checks, and scalable workflows.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/keypoint_landmark_vision.png" alt="Keypoint Annotation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Image Classification & Tagging */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Image Classification & Tagging
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Transform visual data into structured intelligence with precise image classification and tagging. We categorize and label images using human-in-the-loop quality control to ensure high accuracy, consistency, and scalability. From object-based tagging to multi-label classification across large datasets.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/image_classification_tagging.png" alt="Classification" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* Object Tracking */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
               <div className="w-full lg:w-1/2 space-y-6 text-wrap">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           Object Tracking (Frame-Level Annotation for Image Sequences)
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       We provide precise frame-by-frame object tracking that follows targets seamlessly across image sequences and video frames. Our annotators maintain consistent object IDs, accurately capturing movement, occlusion, scale changes, and complex interactions over time. This temporal accuracy enables AI models to understand motion patterns, behavior, and object continuity—essential for applications such as autonomous driving, surveillance, sports analytics, and robotics. With multi-layer quality checks and scalable workflows.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/object_tracking_vision.png" alt="Object Tracking" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

            {/* OCR & Text-in-Image Labeling */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center pb-8 text-wrap">
               <div className="w-full lg:w-1/2 space-y-6">
                   <div className="space-y-2 text-left mb-4">
                       <h2 className="text-2xl md:text-3xl font-medium text-gray-900 uppercase">
                           OCR & Text-in-Image Labeling
                       </h2>
                       <div className="h-1 w-12 bg-brand-600"></div>
                   </div>
                   <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                       Transform visual text into structured intelligence with our high-precision OCR and text-in-image annotation services. We accurately detect, extract, and label printed, handwritten, and scene text from images, documents, videos, and real-world environments. From bounding boxes and polygons to text transcription and language tagging, our human-in-the-loop workflows ensure exceptional accuracy across multiple formats and languages. Ideal for document digitization, ID verification, retail automation, autonomous systems, and AI-powered search, our scalable solutions convert visual content into reliable, machine-ready data.
                   </p>
               </div>
               <div className="w-full lg:w-1/2">
                   <div className="rounded-2xl overflow-hidden shadow-2xl">
                       <img src="/imageannotation/ocr_text_labeling.png" alt="OCR Annotation" className="w-full h-[300px] md:h-[400px] object-cover" />
                   </div>
               </div>
            </div>

        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Annotate Your Vision?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
               Partner with us for high-precision, pixel-perfect annotation tailored to your domain.
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

export default ImageAnnotation;
