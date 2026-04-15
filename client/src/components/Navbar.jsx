import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, 
  Camera, Brain, Layers, Database, Mic, Search, Merge, 
  BrainCircuit, Car, Stethoscope, ShoppingBag, 
  Factory, Film, GraduationCap, Sprout,
  Info, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const services = [
    { title: "Image Annotation", icon: <Camera size={18} />, desc: "Precise 2D/3D image labeling", link: "/services/image-annotation" },
    { title: "Video Annotation", icon: <Layers size={18} />, desc: "Frame-by-frame object tracking", link: "/services/video-annotation" },
    { title: "Audio Annotation", icon: <Mic size={18} />, desc: "Expert speech & acoustic modeling", link: "/services/audio-annotation" },
    { title: "NLP Services", icon: <Brain size={18} />, desc: "Advanced text & sentiment analysis", link: "/services/nlp-datasets" },
    { title: "LiDAR & 3D", icon: <Database size={18} />, desc: "Point cloud & sensor data labeling", link: "/services/lidar-3d" },
    { title: "Multimodal Annotation", icon: <Merge size={18} />, desc: "Integrated multi-type data sync", link: "/services/multimodal-annotation" },
    { title: "Data Classification", icon: <Search size={18} />, desc: "Structured taxonomy categorization", link: "/services/data-classification" },
  ];

  const industries = [
    { title: "Artificial Intelligence", icon: <BrainCircuit size={18} />, desc: "Custom training data for advanced AI models", link: "/industries/artificial-intelligence" },
    { title: "Autonomous Vehicles", icon: <Car size={18} />, desc: "LiDAR and camera annotation for self-driving", link: "/industries/autonomous-vehicles" },
    { title: "Medical & Healthcare", icon: <Stethoscope size={18} />, desc: "Precision labeling for medical diagnostic AI", link: "/industries/healthcare-lifesciences" },
    { title: "E-Commerce & Retail", icon: <ShoppingBag size={18} />, desc: "Product classification and search optimization", link: "/industries/ecommerce-retail" },
    { title: "Media & Entertainment", icon: <Film size={18} />, desc: "Content moderation and recommendation datasets", link: "/industries/media-entertainment" },
    { title: "Education & Edtech", icon: <GraduationCap size={18} />, desc: "Personalized learning and assessment data", link: "/industries/education-edtech" },
    { title: "Manufacturing", icon: <Factory size={18} />, desc: "Quality control and predictive maintenance data", link: "/industries/manufacturing" },
    { title: "Agriculture", icon: <Sprout size={18} />, desc: "Crop health and yield prediction mapping", link: "/industries/agriculture" },
  ];

  const caseStudies = [
    { title: "Autonomous Mobility", icon: <Car size={18} />, desc: "LiDAR & Lane Detection for self-driving AI", link: "/case-studies/autonomous" },
    { title: "E-commerce & Retail", icon: <ShoppingBag size={18} />, desc: "Catalog search & classification successes", link: "/case-studies/ecommerce" },
    { title: "Agriculture & AgriTech", icon: <Sprout size={18} />, desc: "Precision farming & crop health cases", link: "/case-studies/agriculture" },
    { title: "Media & Entertainment", icon: <Film size={18} />, desc: "Content moderation & engagement logs", link: "/case-studies/media" },
    { title: "Education & EdTech", icon: <GraduationCap size={18} />, desc: "Personalized learning paths & assessments", link: "/case-studies/education" },
    { title: "Manufacturing & Industrial", icon: <Factory size={18} />, desc: "Quality control & industrial safety cases", link: "/case-studies/manufacturing" },
    { title: "Medical & Healthcare", icon: <Stethoscope size={18} />, desc: "Precision diagnostics & disease detection", link: "/case-studies/medical" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        (isScrolled || isMobileMenuOpen) 
          ? 'bg-white border-b border-slate-100 py-2.5' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group relative z-50"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src="/logo.png" 
            alt="LabelzAI Logo" 
            className="h-7 md:h-8 w-auto transition-all" 
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="relative text-[15px] font-medium text-slate-900 group py-2">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-600 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Company Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors py-2 relative">
              Company <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-600 transition-all duration-300 ${activeDropdown === 'company' ? 'w-full' : 'w-0'}`} />
            </button>
            <div className={`absolute top-full -left-4 w-[280px] bg-white border border-slate-100 rounded-2xl p-3 flex flex-col gap-2 transition-all duration-300 origin-top shadow-xl shadow-slate-200/60 ${activeDropdown === 'company' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              <Link to="/about" className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/40 transition-all group/item border border-transparent hover:border-brand-100" onClick={() => setActiveDropdown(null)}>
                <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors flex-shrink-0">
                  <Info size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-0.5 leading-tight">About Us</h4>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Our story, mission & vision</p>
                </div>
              </Link>
              <Link to="/quality-compliance" className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/40 transition-all group/item border border-transparent hover:border-brand-100" onClick={() => setActiveDropdown(null)}>
                <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 mb-0.5 leading-tight">Quality & Compliance</h4>
                  <p className="text-[12px] text-slate-500 font-medium leading-relaxed">Our QA framework & standards</p>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors py-2 relative">
              Services <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-600 transition-all duration-300 ${activeDropdown === 'services' ? 'w-full' : 'w-0'}`} />
            </button>
            <div className={`absolute top-full -left-20 w-[600px] bg-white border border-slate-100 rounded-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top shadow-2xl shadow-slate-200/40 ${activeDropdown === 'services' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              {services.map((item, idx) => (
                <Link key={idx} to={item.link || "/#services"} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/40 transition-all group/item border border-transparent hover:border-brand-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1 leading-tight">{item.title}</h4>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Industries Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors py-2 relative">
              What we Serve <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'industries' ? 'rotate-180' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-600 transition-all duration-300 ${activeDropdown === 'industries' ? 'w-full' : 'w-0'}`} />
            </button>
            <div className={`absolute top-full -left-20 w-[600px] bg-white border border-slate-100 rounded-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top shadow-2xl shadow-slate-200/40 ${activeDropdown === 'industries' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              {industries.map((item, idx) => (
                <Link key={idx} to={item.link} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/40 transition-all group/item border border-transparent hover:border-brand-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1 leading-tight">{item.title}</h4>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Case Studies Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('caseStudies')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-slate-900 hover:text-brand-600 transition-colors py-2 relative">
              Case Studies <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === 'caseStudies' ? 'rotate-180' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-600 transition-all duration-300 ${activeDropdown === 'caseStudies' ? 'w-full' : 'w-0'}`} />
            </button>
            <div className={`absolute top-full -left-40 w-[640px] bg-white border border-slate-100 rounded-2xl p-6 grid grid-cols-2 gap-4 transition-all duration-300 origin-top shadow-2xl shadow-slate-200/40 ${activeDropdown === 'caseStudies' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'}`}>
              {caseStudies.map((item, idx) => (
                <Link key={idx} to={item.link} className="flex items-start gap-4 p-4 rounded-xl hover:bg-brand-50/40 transition-all group/item border border-transparent hover:border-brand-100">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center group-hover/item:bg-brand-600 group-hover/item:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-1 leading-tight">{item.title}</h4>
                    <p className="text-[12px] text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/career" className="relative text-[15px] font-medium text-slate-900 group py-2">
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-600 transition-all duration-300 group-hover:w-full" />
          </Link>
          <Link to="/contact" className="relative text-[15px] font-medium text-slate-900 group py-2">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-600 transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link to="/contact" className="text-[15px] font-semibold bg-brand-600 text-white px-8 py-2.5 rounded-full hover:bg-brand-700 transition-all active:scale-95">
            Get Started
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 -mr-2 text-slate-900 bg-slate-50 rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="pt-24 px-6 h-screen flex flex-col overflow-y-auto pb-10">
          <div className="flex flex-col gap-8 flex-1">
            <div className="flex flex-col gap-6">
              <Link to="/" className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              
              {/* Company Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-company' ? null : 'mobile-company')}
                  className="w-full flex items-center justify-between text-xl font-bold text-slate-900"
                >
                  Company 
                  <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'mobile-company' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-company' ? 'max-h-[200px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="space-y-3 pl-2">
                    <Link to="/about" className="flex items-center gap-3 py-2 text-base font-semibold text-slate-600 active:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>
                      <Info size={16} className="text-brand-600" /> About Us
                    </Link>
                    <Link to="/quality-compliance" className="flex items-center gap-3 py-2 text-base font-semibold text-slate-600 active:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>
                      <ShieldCheck size={16} className="text-brand-600" /> Quality & Compliance
                    </Link>
                  </div>
                </div>
              </div>

              {/* Services Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                  className="w-full flex items-center justify-between text-xl font-bold text-slate-900"
                >
                  Services
                  <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'mobile-services' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-services' ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((item, idx) => (
                      <Link key={idx} to={item.link || "/#services"} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-sm font-bold text-slate-700 active:bg-brand-50 active:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-brand-600 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Serve Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-serve' ? null : 'mobile-serve')}
                  className="w-full flex items-center justify-between text-xl font-bold text-slate-900"
                >
                  What we Serve
                  <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'mobile-serve' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-serve' ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 gap-3">
                    {industries.map((item, idx) => (
                      <Link key={idx} to={item.link} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-sm font-bold text-slate-700 active:bg-brand-50 active:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-brand-600 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Case Studies Accordion */}
              <div className="border-b border-slate-100 pb-4">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === 'mobile-cases' ? null : 'mobile-cases')}
                  className="w-full flex items-center justify-between text-xl font-bold text-slate-900"
                >
                  Case Studies
                  <ChevronDown size={20} className={`transition-transform duration-300 ${activeDropdown === 'mobile-cases' ? 'rotate-180 text-brand-600' : 'text-slate-400'}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === 'mobile-cases' ? 'max-h-[800px] mt-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-1 gap-3">
                    {caseStudies.map((item, idx) => (
                      <Link key={idx} to={item.link} className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 text-sm font-bold text-slate-700 active:bg-brand-50 active:text-brand-600 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                        <div className="w-8 h-8 rounded-lg bg-white border border-slate-100 text-brand-600 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/career" className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
              <Link to="/contact" className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full py-4 text-center rounded-2xl bg-brand-600 text-white font-bold text-lg">Get Special Quote</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
