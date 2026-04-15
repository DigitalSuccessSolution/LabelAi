import React, { useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, Sparkles, ShoppingBag, Tag, Search, Layers, Zap, ShoppingCart, View, BarChart, Target, Box, FileText, Database, ShieldCheck, ClipboardCheck, BarChart3, Clock, Play,
  Scan, FileSearch, MessageSquare, AlertTriangle, Activity, Layout, Truck, Check, Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ECommerceRetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportCategories = [
    {
      title: "1. Product Catalog & Visual Intelligence",
      icon: <Layers size={20} />,
      image: "/images/ecommerce/taxonomy.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate product images using bounding boxes, polygons, and attribute tagging to identify categories, colors, styles, materials, and brand elements. This enables visual search, automated product categorization, and recommendation engines.</span>
        </div>
      )
    },
    {
      title: "2. Visual Search & Similarity Matching",
      icon: <Search size={20} />,
      image: "/images/ecommerce/visual_search.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">Our annotation supports AI models that allow customers to search using images. We label fine-grained product features and variations to improve similarity detection and enhance discovery experiences.</span>
        </div>
      )
    },
    {
      title: "3. Inventory & Shelf Monitoring (Retail Computer Vision)",
      icon: <Layout size={20} />,
      image: "/images/ecommerce/shelf_analytics.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate in-store and warehouse images/videos for:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Shelf product detection and planogram compliance",
               "Stock level monitoring and out-of-stock identification",
               "Barcode, QR, and SKU recognition",
               "Object tracking for warehouse automation and robotics"
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
      title: "4. Customer Experience & NLP Annotation",
      icon: <MessageSquare size={20} />,
      image: "/images/ecommerce/attribute.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We structure and label customer-generated data such as:</span>
           <div className="space-y-1 pl-0 md:pl-4 pt-1">
             {[
               "Product reviews and ratings (sentiment & intent analysis)",
               "Chatbot conversations and support tickets",
               "Search queries and intent classification"
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
      title: "5. Fraud, Returns & Quality Monitoring",
      icon: <ShieldCheck size={20} />,
      image: "/images/ecommerce/ar_tryon.png",
      description: (
        <div className="space-y-4">
           <span className="text-gray-700 text-lg md:text-xl leading-snug font-normal block">We annotate product condition images, packaging defects, return verification data, and anomaly cases to help retailers reduce fraud, improve quality control, and streamline reverse logistics.</span>
        </div>
      )
    }
  ];

  const labelingTypes = [
    { title: "Product Image Labeling", desc: "Tagging product categories, attributes, colors, sizes, and styles.", icon: <Tag size={18} /> },
    { title: "Text Labeling", desc: "Annotating product descriptions, reviews, and search queries.", icon: <FileText size={18} /> },
    { title: "Bounding Box Annotation", desc: "Detecting products, shelves, logos, and SKUs in images.", icon: <Scan size={18} /> },
    { title: "Classification & Categorization", desc: "Sorting products into correct categories and subcategories.", icon: <Layers size={18} /> },
    { title: "Sentiment Labeling", desc: "Identifying positive, negative, or neutral emotions in customer reviews.", icon: <Activity size={18} /> },
    { title: "OCR Labeling", desc: "Extracting text from labels, packaging, receipts, and invoices.", icon: <FileSearch size={18} /> },
    { title: "Behavioral Data Labeling", desc: "Tagging clicks, views, and interactions for recommendation systems.", icon: <Target size={18} /> }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans selection:bg-brand-100 selection:text-brand-900">
      
      {/* 1. Hero Section */}
      <section className="relative mt-[60px] md:mt-[64px] pt-12 md:pt-20 pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 bg-black">
          <img 
            src="/What-We-Serve-Final-hero/E-Commerce_&_Retail.png" 
            alt="Retail Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 text-[12px] font-medium mb-8 tracking-wider">
             Industry We Serve — India
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.2] tracking-tight mb-6 max-w-4xl">
             E-Commerce & <br className="hidden md:block" />
             <span className="text-white">Retail Data Annotation</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl font-normal leading-relaxed max-w-2xl">
             High-accuracy data annotation for product images, catalog data, and retail operations.
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
                    E-Commerce & Retail
                 </h2>
                 <div className="h-1 w-12 bg-brand-600"></div>
             </div>
             <p>
                We support e-commerce and retail companies with high-accuracy data annotation for product images, catalog data, customer reviews, and retail operations. Our services include product image labeling, attribute tagging, visual search annotation, shelf and inventory detection, sentiment analysis, chatbot training data, and warehouse computer vision labeling.
             </p>
             <p>
                The E-Commerce & Retail industry is driven by data-intensive AI systems that enhance product discovery, customer experience, demand forecasting, and operational efficiency. Accurate data annotation plays a critical role in enabling intelligent retail platforms to understand products, shoppers, and buying behavior. As a data annotation startup in India, we help e-commerce and retail businesses build scalable AI solutions through high-quality image, video, and text labeling services.
             </p>
        </div>
      </section>

      {/* 2. How We Support the Retail Ecosystem */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 space-y-32">
          
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
               How We Support <br /> the Retail Ecosystem
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

      {/* 3. Types of data labeling */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-6">
                <div className="space-y-2 text-left">
                    <h2 className="text-xl md:text-2xl font-medium text-gray-900">
                       Types of data labeling in the E-Commerce & Retail industry:
                    </h2>
                    <div className="h-1 w-12 bg-brand-600"></div>
                </div>

                <div className="space-y-4 pt-2">
                   {labelingTypes.map((item, i) => (
                     <div key={i} className="flex items-start gap-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-gray-700 mt-2.5 shrink-0"></div>
                       <span className="text-gray-700 text-base md:text-lg leading-snug">
                         <strong className="font-semibold text-gray-900">{item.title}</strong> – {item.desc}
                       </span>
                     </div>
                   ))}
                </div>
            </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">
               Ready to Scale Your Retail AI?
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

export default ECommerceRetail;
